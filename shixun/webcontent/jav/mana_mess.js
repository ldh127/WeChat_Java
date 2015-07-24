define("tpl/uploader.html.js", [], function() {
	return '<li id="uploadItem{id}" data-status="{className}" class="upload_file">\n    <strong class="upload_file_name">{fileName}</strong>\n    <span class="upload_file_size">({size})</span>\n    <div class="progress_bar"><div class="progress_bar_thumb" style="width:0%"></div></div>\n    <a href="javascript:;" data-id="{id}" class="upload_file_cancel js_cancel">取消</a>\n</li>\n';
});
define("tpl/richEditor/emotion.html.js", [], function() {
	return '<span class="hook">\n	<span class="hook_dec hook_top"></span>\n	<span class="hook_dec hook_btm"></span>\n</span>\n<ul class="emotions" onselectstart="return false;"> \n    {each edata as e index}\n        <li class="emotions_item">\n            <i\n                class="js_emotion_i" \n                data-gifurl=\'{e.gifurl}\' \n                data-title=\'{e.title}\' \n                style=\'{e.bp}\'>\n            </i>\n        </li>\n    {/each}\n</ul>\n<span class="emotions_preview js_emotionPreviewArea"></span>\n';
});
define("common/wx/richEditor/editorRange.js", [], function(e, t, n) {
	try {
		var r = +(new Date);
		"use strict";
		var i = function() {
				return document.selection ? document.selection : (window.getSelection || document.getSelection)();
			},
			s = function(e, t, n) {
				if (!n && e === t) return !1;
				if (e.compareDocumentPosition) {
					var r = e.compareDocumentPosition(t);
					if (r == 20 || r == 0) return !0;
				} else if (e.contains(t)) return !0;
				return !1;
			},
			o = function(e, t) {
				var n = t.commonAncestorContainer || t.parentElement && t.parentElement() || null;
				return n ? s(e, n, !0) : !1;
			},
			u = function(e) {
				var t = i();
				if (!t) return null;
				var n = t.getRangeAt ? t.rangeCount ? t.getRangeAt(0) : null : t.createRange();
				return n ? e ? o(e, n) ? n : null : n : null;
			},
			a = function(e) {
				return e.parentElement ? e.parentElement() : e.commonAncestorContainer;
			};
		n.exports = {
			getSelection: i,
			getRange: u,
			containsRange: o,
			parentContainer: a
		};
	} catch (f) {
		wx.jslog({
			src: "common/wx/richEditor/editorRange.js"
		}, f);
	}
});
define("tpl/popup.html.js", [], function() {
	return '<div class="dialog_wrp {className}" style="{if width}width:{width}px;{/if}{if height}height:{height}px;{/if}">\n	<div class="dialog">\n		<div class="dialog_hd">\n			<h3>{title}</h3>\n			<!--#0001#-->\n			<a href="javascript:;" onclick="return false" class="icon16_opr closed pop_closed">关闭</a>\n			<!--%0001%-->\n		</div>\n		<div class="dialog_bd">{=content}</div>\n		{if buttons && buttons.length}\n		<div class="dialog_ft">\n			{each buttons as bt index}\n            <span class="btn {bt.type} btn_input js_btn_p"><button type="button" class="js_btn" data-index="{index}">{bt.text}</button></span>\n	        {/each}\n		</div>\n		{/if}\n	</div>\n</div>{if mask}<div class="mask"><iframe frameborder="0" style="filter:progid:DXImageTransform.Microsoft.Alpha(opacity:0);position:absolute;top:0px;left:0px;width:100%;height:100%;" src="about:blank"></iframe></div>{/if}\n';
});
define("common/wx/widgetBridge.js", [], function(e, t, n) {
	try {
		var r = +(new Date);
		"use strict", $.widgetBridge || ($.widgetBridge = function(e, t) {
			var n = e,
				r = n.split("."),
				e = r.length > 1 ? r[1] : r[0];
			$.fn[e] = function(r) {
				var i = typeof r == "string",
					s = [].slice.call(arguments, 1),
					o = this;
				r = r || {};
				if (i) {
					var u;
					return r.indexOf("_") !== 0 && this.each(function() {
						var t = $.data(this, n);
						if (!t) return $.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + r + "'");
						if (r === "instance") return u = t, !1;
						if (r === "option") return u = t.options, !1;
						u || (u = (t[r] || jQuery.noop).apply(t, s)), r === "destroy" && (t.elements = null);
					}), u;
				}
				var a = this;
				return this.each(function() {
					var e = this,
						i = $.data(this, n);
					if (!i) {
						i = $.extend(!0, {}, t), i.destroy || (i.destroy = function() {
							$.removeData(e, n);
						}), i.options = $.extend(!0, i.options || {}, r), i.element = $(this), i.elements = a, i._create && (o = i._create.call(i, r));
						var s = o && o.length && o.get(0) || this;
						$.data(s, n, i);
					}
				}), o;
			};
		});
	} catch (i) {
		wx.jslog({
			src: "common/wx/widgetBridge.js"
		}, i);
	}
});
define("tpl/dialog.html.js", [], function() {
	return '<div class="dialog_wrp {className}" style="{if width}width:{width}px;{/if}{if height}height:{height}px;{/if};display:none;">\n  <div class="dialog" id="{id}">\n    <div class="dialog_hd">\n      <h3>{title}</h3>\n      {if !hideClose}\n      <!--#0001#-->\n      <a href="javascript:;" class="pop_closed" onclick="return false;">关闭</a>\n      <!--%0001%-->\n      {/if}\n    </div>\n    <div class="dialog_bd">\n      <div class="page_msg large simple default {msg.msgClass}">\n        <div class="inner group">\n          <span class="msg_icon_wrapper"><i class="icon_msg {icon} "></i></span>\n          <div class="msg_content ">\n          {if msg.title}<h4>{=msg.title}</h4>{/if}\n          {if msg.text}<p>{=msg.text}</p>{/if}\n          </div>\n        </div>\n      </div>\n    </div> \n    <div class="dialog_ft">\n  	{if !hideClose}\n      {each buttons as bt index}\n      <a href="javascript:;" class="btn {bt.type} js_btn" onclick="return false;">{bt.text}</a>\n      {/each}\n  	{/if}\n    </div>\n  </div>\n</div>\n{if mask}<div class="mask"></div>{/if}\n\n';
});
define("biz_common/jquery.ui/jquery.ui.draggable.js", [], function() {
	! function(t, e) {
		function i(e, i) {
			var o, n, r, a = e.nodeName.toLowerCase();
			return "area" === a ? (o = e.parentNode, n = o.name, e.href && n && "map" === o.nodeName.toLowerCase() ? (r = t("img[usemap=#" + n + "]")[0], !!r && s(r)) : !1) : (/input|select|textarea|button|object/.test(a) ? !e.disabled : "a" === a ? e.href || i : i) && s(e);
		}

		function s(e) {
			return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
				return "hidden" === t.css(this, "visibility");
			}).length;
		}
		var o = 0,
			n = /^ui-id-\d+$/;
		t.ui = t.ui || {}, t.extend(t.ui, {
			version: "1.10.3"
		}), t.fn.extend({
			focus: function(e) {
				return function(i, s) {
					return "number" == typeof i ? this.each(function() {
						var e = this;
						setTimeout(function() {
							t(e).focus(), s && s.call(e);
						}, i);
					}) : e.apply(this, arguments);
				};
			}(t.fn.focus),
			scrollParent: function() {
				var e;
				return e = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
					return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"));
				}).eq(0) : this.parents().filter(function() {
					return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"));
				}).eq(0), /fixed/.test(this.css("position")) || !e.length ? t(document) : e;
			},
			zIndex: function(i) {
				if (i !== e) return this.css("zIndex", i);
				if (this.length)
					for (var s, o, n = t(this[0]); n.length && n[0] !== document;) {
						if (s = n.css("position"), ("absolute" === s || "relative" === s || "fixed" === s) && (o = parseInt(n.css("zIndex"), 10), !isNaN(o) && 0 !== o)) return o;
						n = n.parent();
					}
				return 0;
			},
			uniqueId: function() {
				return this.each(function() {
					this.id || (this.id = "ui-id-" + ++o);
				});
			},
			removeUniqueId: function() {
				return this.each(function() {
					n.test(this.id) && t(this).removeAttr("id");
				});
			}
		}), t.extend(t.expr[":"], {
			data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
				return function(i) {
					return !!t.data(i, e);
				};
			}) : function(e, i, s) {
				return !!t.data(e, s[3]);
			},
			focusable: function(e) {
				return i(e, !isNaN(t.attr(e, "tabindex")));
			},
			tabbable: function(e) {
				var s = t.attr(e, "tabindex"),
					o = isNaN(s);
				return (o || s >= 0) && i(e, !o);
			}
		}), t.extend(t.ui, {
			plugin: {
				add: function(e, i, s) {
					var o, n = t.ui[e].prototype;
					for (o in s) n.plugins[o] = n.plugins[o] || [], n.plugins[o].push([i, s[o]]);
				},
				call: function(t, e, i) {
					var s, o = t.plugins[e];
					if (o && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)
						for (s = 0; s < o.length; s++) t.options[o[s][0]] && o[s][1].apply(t.element, i);
				}
			},
			hasScroll: function(e, i) {
				if ("hidden" === t(e).css("overflow")) return !1;
				var s = i && "left" === i ? "scrollLeft" : "scrollTop",
					o = !1;
				return e[s] > 0 ? !0 : (e[s] = 1, o = e[s] > 0, e[s] = 0, o);
			}
		});
	}(jQuery),
	function(t, e) {
		var i = 0,
			s = Array.prototype.slice,
			o = t.cleanData;
		t.cleanData = function(e) {
			for (var i, s = 0; null != (i = e[s]); s++) try {
				t(i).triggerHandler("remove");
			} catch (n) {}
			o(e);
		}, t.widget = function(e, i, s) {
			var o, n, r, a, l = {},
				h = e.split(".")[0];
			e = e.split(".")[1], o = h + "-" + e, s || (s = i, i = t.Widget), t.expr[":"][o.toLowerCase()] = function(e) {
				return !!t.data(e, o);
			}, t[h] = t[h] || {}, n = t[h][e], r = t[h][e] = function(t, e) {
				return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new r(t, e);
			}, t.extend(r, n, {
				version: s.version,
				_proto: t.extend({}, s),
				_childConstructors: []
			}), a = new i, a.options = t.widget.extend({}, a.options), t.each(s, function(e, s) {
				return t.isFunction(s) ? void(l[e] = function() {
					var t = function() {
							return i.prototype[e].apply(this, arguments);
						},
						o = function(t) {
							return i.prototype[e].apply(this, t);
						};
					return function() {
						var e, i = this._super,
							n = this._superApply;
						return this._super = t, this._superApply = o, e = s.apply(this, arguments), this._super = i,
							this._superApply = n, e;
					};
				}()) : void(l[e] = s);
			}), r.prototype = t.widget.extend(a, {
				widgetEventPrefix: n ? a.widgetEventPrefix : e
			}, l, {
				constructor: r,
				namespace: h,
				widgetName: e,
				widgetFullName: o
			}), n ? (t.each(n._childConstructors, function(e, i) {
				var s = i.prototype;
				t.widget(s.namespace + "." + s.widgetName, r, i._proto);
			}), delete n._childConstructors) : i._childConstructors.push(r), t.widget.bridge(e, r);
		}, t.widget.extend = function(i) {
			for (var o, n, r = s.call(arguments, 1), a = 0, l = r.length; l > a; a++)
				for (o in r[a]) n = r[a][o],
					r[a].hasOwnProperty(o) && n !== e && (i[o] = t.isPlainObject(n) ? t.isPlainObject(i[o]) ? t.widget.extend({}, i[o], n) : t.widget.extend({}, n) : n);
			return i;
		}, t.widget.bridge = function(i, o) {
			var n = o.prototype.widgetFullName || i;
			t.fn[i] = function(r) {
				var a = "string" == typeof r,
					l = s.call(arguments, 1),
					h = this;
				return r = !a && l.length ? t.widget.extend.apply(null, [r].concat(l)) : r, this.each(a ? function() {
					var s, o = t.data(this, n);
					return o ? t.isFunction(o[r]) && "_" !== r.charAt(0) ? (s = o[r].apply(o, l), s !== o && s !== e ? (h = s && s.jquery ? h.pushStack(s.get()) : s, !1) : void 0) : t.error("no such method '" + r + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; attempted to call method '" + r + "'");
				} : function() {
					var e = t.data(this, n);
					e ? e.option(r || {})._init() : t.data(this, n, new o(r, this));
				}), h;
			};
		}, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
			widgetName: "widget",
			widgetEventPrefix: "",
			defaultElement: "<div>",
			options: {
				disabled: !1,
				create: null
			},
			_createWidget: function(e, s) {
				s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid,
					this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(),
					this.hoverable = t(), this.focusable = t(), s !== this && (t.data(s, this.widgetFullName, this),
						this._on(!0, this.element, {
							remove: function(t) {
								t.target === s && this.destroy();
							}
						}), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)),
					this._create(), this._trigger("create", null, this._getCreateEventData()), this._init();
			},
			_getCreateOptions: t.noop,
			_getCreateEventData: t.noop,
			_create: t.noop,
			_init: t.noop,
			destroy: function() {
				this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),
					this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
					this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"),
					this.focusable.removeClass("ui-state-focus");
			},
			_destroy: t.noop,
			widget: function() {
				return this.element;
			},
			option: function(i, s) {
				var o, n, r, a = i;
				if (0 === arguments.length) return t.widget.extend({}, this.options);
				if ("string" == typeof i)
					if (a = {}, o = i.split("."), i = o.shift(), o.length) {
						for (n = a[i] = t.widget.extend({}, this.options[i]), r = 0; r < o.length - 1; r++) n[o[r]] = n[o[r]] || {},
							n = n[o[r]];
						if (i = o.pop(), s === e) return n[i] === e ? null : n[i];
						n[i] = s;
					} else {
						if (s === e) return this.options[i] === e ? null : this.options[i];
						a[i] = s;
					}
				return this._setOptions(a), this;
			},
			_setOptions: function(t) {
				var e;
				for (e in t) this._setOption(e, t[e]);
				return this;
			},
			_setOption: function(t, e) {
				return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e),
						this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")),
					this;
			},
			enable: function() {
				return this._setOption("disabled", !1);
			},
			disable: function() {
				return this._setOption("disabled", !0);
			},
			_on: function(e, i, s) {
				var o, n = this;
				"boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = o = t(i), this.bindings = this.bindings.add(i)) : (s = i,
					i = this.element, o = this.widget()), t.each(s, function(s, r) {
					function a() {
						return e || n.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? n[r] : r).apply(n, arguments) : void 0;
					}
					"string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
					var l = s.match(/^(\w+)\s*(.*)$/),
						h = l[1] + n.eventNamespace,
						c = l[2];
					c ? o.delegate(c, h, a) : i.bind(h, a);
				});
			},
			_off: function(t, e) {
				e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e);
			},
			_delay: function(t, e) {
				function i() {
					return ("string" == typeof t ? s[t] : t).apply(s, arguments);
				}
				var s = this;
				return setTimeout(i, e || 0);
			},
			_hoverable: function(e) {
				this.hoverable = this.hoverable.add(e), this._on(e, {
					mouseenter: function(e) {
						t(e.currentTarget).addClass("ui-state-hover");
					},
					mouseleave: function(e) {
						t(e.currentTarget).removeClass("ui-state-hover");
					}
				});
			},
			_focusable: function(e) {
				this.focusable = this.focusable.add(e), this._on(e, {
					focusin: function(e) {
						t(e.currentTarget).addClass("ui-state-focus");
					},
					focusout: function(e) {
						t(e.currentTarget).removeClass("ui-state-focus");
					}
				});
			},
			_trigger: function(e, i, s) {
				var o, n, r = this.options[e];
				if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(),
					i.target = this.element[0], n = i.originalEvent)
					for (o in n) o in i || (i[o] = n[o]);
				return this.element.trigger(i, s), !(t.isFunction(r) && r.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented());
			}
		}, t.each({
			show: "fadeIn",
			hide: "fadeOut"
		}, function(e, i) {
			t.Widget.prototype["_" + e] = function(s, o, n) {
				"string" == typeof o && (o = {
					effect: o
				});
				var r, a = o ? o === !0 || "number" == typeof o ? i : o.effect || i : e;
				o = o || {}, "number" == typeof o && (o = {
					duration: o
				}), r = !t.isEmptyObject(o), o.complete = n, o.delay && s.delay(o.delay), r && t.effects && t.effects.effect[a] ? s[e](o) : a !== e && s[a] ? s[a](o.duration, o.easing, n) : s.queue(function(i) {
					t(this)[e](), n && n.call(s[0]), i();
				});
			};
		});
	}(jQuery),
	function(t) {
		var e = !1;
		t(document).mouseup(function() {
			e = !1;
		}), t.widget("ui.mouse", {
			version: "1.10.3",
			options: {
				cancel: "input,textarea,button,select,option",
				distance: 1,
				delay: 0
			},
			_mouseInit: function() {
				var e = this;
				this.element.bind("mousedown." + this.widgetName, function(t) {
					return e._mouseDown(t);
				}).bind("click." + this.widgetName, function(i) {
					return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"),
						i.stopImmediatePropagation(), !1) : void 0;
				}), this.started = !1;
			},
			_mouseDestroy: function() {
				this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
			},
			_mouseDown: function(i) {
				if (!e) {
					this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
					var s = this,
						o = 1 === i.which,
						n = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1;
					return o && !n && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
						s.mouseDelayMet = !0;
					}, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"),
						this._mouseMoveDelegate = function(t) {
							return s._mouseMove(t);
						}, this._mouseUpDelegate = function(t) {
							return s._mouseUp(t);
						}, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate),
						i.preventDefault(), e = !0, !0)) : !0;
				}
			},
			_mouseMove: function(e) {
				return t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e),
					e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1,
					this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted);
			},
			_mouseUp: function(e) {
				return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
					this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0),
						this._mouseStop(e)), !1;
			},
			_mouseDistanceMet: function(t) {
				return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance;
			},
			_mouseDelayMet: function() {
				return this.mouseDelayMet;
			},
			_mouseStart: function() {},
			_mouseDrag: function() {},
			_mouseStop: function() {},
			_mouseCapture: function() {
				return !0;
			}
		});
	}(jQuery),
	function(t) {
		t.widget("ui.draggable", t.ui.mouse, {
			version: "1.10.3",
			widgetEventPrefix: "drag",
			options: {
				addClasses: !0,
				appendTo: "parent",
				axis: !1,
				connectToSortable: !1,
				containment: !1,
				cursor: "auto",
				cursorAt: !1,
				grid: !1,
				handle: !1,
				helper: "original",
				iframeFix: !1,
				opacity: !1,
				refreshPositions: !1,
				revert: !1,
				revertDuration: 500,
				scope: "default",
				scroll: !0,
				scrollSensitivity: 20,
				scrollSpeed: 20,
				snap: !1,
				snapMode: "both",
				snapTolerance: 20,
				stack: !1,
				zIndex: !1,
				drag: null,
				start: null,
				stop: null
			},
			_create: function() {
				"original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"),
					this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"),
					this._mouseInit();
			},
			_destroy: function() {
				this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),
					this._mouseDestroy();
			},
			_mouseCapture: function(e) {
				var i = this.options;
				return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e),
					this.handle ? (t(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function() {
						t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
							width: this.offsetWidth + "px",
							height: this.offsetHeight + "px",
							position: "absolute",
							opacity: "0.001",
							zIndex: 1e3
						}).css(t(this).offset()).appendTo("body");
					}), !0) : !1);
			},
			_mouseStart: function(e) {
				var i = this.options;
				return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"),
					this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(),
					this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(),
					this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"),
					this.offset = this.positionAbs = this.element.offset(), this.offset = {
						top: this.offset.top - this.margins.top,
						left: this.offset.left - this.margins.left
					}, this.offset.scroll = !1, t.extend(this.offset, {
						click: {
							left: e.pageX - this.offset.left,
							top: e.pageY - this.offset.top
						},
						parent: this._getParentOffset(),
						relative: this._getRelativeOffset()
					}), this.originalPosition = this.position = this._generatePosition(e), this.originalPageX = e.pageX,
					this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
					this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(),
						t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0),
						t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0);
			},
			_mouseDrag: function(e, i) {
				if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()),
					this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !i) {
					var s = this._uiHash();
					if (this._trigger("drag", e, s) === !1) return this._mouseUp({}), !1;
					this.position = s.position;
				}
				return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
					this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"),
					t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1;
			},
			_mouseStop: function(e) {
				var i = this,
					s = !1;
				return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)),
					this.dropped && (s = this.dropped, this.dropped = !1), "original" !== this.options.helper || t.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
						i._trigger("stop", e) !== !1 && i._clear();
					}) : this._trigger("stop", e) !== !1 && this._clear(), !1) : !1;
			},
			_mouseUp: function(e) {
				return t("div.ui-draggable-iframeFix").each(function() {
					this.parentNode.removeChild(this);
				}), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), t.ui.mouse.prototype._mouseUp.call(this, e);
			},
			cancel: function() {
				return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(),
					this;
			},
			_getHandle: function(e) {
				return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0;
			},
			_createHelper: function(e) {
				var i = this.options,
					s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
				return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo),
					s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"),
					s;
			},
			_adjustOffsetFromHelper: function(e) {
				"string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
						left: +e[0],
						top: +e[1] || 0
					}), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
					"top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
			},
			_getParentOffset: function() {
				var e = this.offsetParent.offset();
				return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(),
					e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
					top: 0,
					left: 0
				}), {
					top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
					left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
				};
			},
			_getRelativeOffset: function() {
				if ("relative" === this.cssPosition) {
					var t = this.element.position();
					return {
						top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
						left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
					};
				}
				return {
					top: 0,
					left: 0
				};
			},
			_cacheMargins: function() {
				this.margins = {
					left: parseInt(this.element.css("marginLeft"), 10) || 0,
					top: parseInt(this.element.css("marginTop"), 10) || 0,
					right: parseInt(this.element.css("marginRight"), 10) || 0,
					bottom: parseInt(this.element.css("marginBottom"), 10) || 0
				};
			},
			_cacheHelperProportions: function() {
				this.helperProportions = {
					width: this.helper.outerWidth(),
					height: this.helper.outerHeight()
				};
			},
			_setContainment: function() {
				var e, i, s, o = this.options;
				return o.containment ? "window" === o.containment ? void(this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === o.containment ? void(this.containment = [0, 0, t(document).width() - this.helperProportions.width - this.margins.left, (t(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : o.containment.constructor === Array ? void(this.containment = o.containment) : ("parent" === o.containment && (o.containment = this.helper[0].parentNode),
					i = t(o.containment), s = i[0], void(s && (e = "hidden" !== i.css("overflow"), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom],
						this.relative_container = i))) : void(this.containment = null);
			},
			_convertPositionTo: function(e, i) {
				i || (i = this.position);
				var s = "absolute" === e ? 1 : -1,
					o = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
				return this.offset.scroll || (this.offset.scroll = {
					top: o.scrollTop(),
					left: o.scrollLeft()
				}), {
					top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * s,
					left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * s
				};
			},
			_generatePosition: function(e) {
				var i, s, o, n, r = this.options,
					a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
					l = e.pageX,
					h = e.pageY;
				return this.offset.scroll || (this.offset.scroll = {
					top: a.scrollTop(),
					left: a.scrollLeft()
				}), this.originalPosition && (this.containment && (this.relative_container ? (s = this.relative_container.offset(),
							i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment,
						e.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top),
						e.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)),
					r.grid && (o = r.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY,
						h = i ? o - this.offset.click.top >= i[1] || o - this.offset.click.top > i[3] ? o : o - this.offset.click.top >= i[1] ? o - r.grid[1] : o + r.grid[1] : o,
						n = r.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX,
						l = i ? n - this.offset.click.left >= i[0] || n - this.offset.click.left > i[2] ? n : n - this.offset.click.left >= i[0] ? n - r.grid[0] : n + r.grid[0] : n)), {
					top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
					left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
				};
			},
			_clear: function() {
				this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
					this.helper = null, this.cancelHelperRemoval = !1;
			},
			_trigger: function(e, i, s) {
				return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s]), "drag" === e && (this.positionAbs = this._convertPositionTo("absolute")),
					t.Widget.prototype._trigger.call(this, e, i, s);
			},
			plugins: {},
			_uiHash: function() {
				return {
					helper: this.helper,
					position: this.position,
					originalPosition: this.originalPosition,
					offset: this.positionAbs
				};
			}
		}), t.ui.plugin.add("draggable", "connectToSortable", {
			start: function(e, i) {
				var s = t(this).data("ui-draggable"),
					o = s.options,
					n = t.extend({}, i, {
						item: s.element
					});
				s.sortables = [], t(o.connectToSortable).each(function() {
					var i = t.data(this, "ui-sortable");
					i && !i.options.disabled && (s.sortables.push({
						instance: i,
						shouldRevert: i.options.revert
					}), i.refreshPositions(), i._trigger("activate", e, n));
				});
			},
			stop: function(e, i) {
				var s = t(this).data("ui-draggable"),
					o = t.extend({}, i, {
						item: s.element
					});
				t.each(s.sortables, function() {
					this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1,
						this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(e),
						this.instance.options.helper = this.instance.options._helper, "original" === s.options.helper && this.instance.currentItem.css({
							top: "auto",
							left: "auto"
						})) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, o));
				});
			},
			drag: function(e, i) {
				var s = t(this).data("ui-draggable"),
					o = this;
				t.each(s.sortables, function() {
					var n = !1,
						r = this;
					this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions,
						this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (n = !0,
							t.each(s.sortables, function() {
								return this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions,
									this.instance.offset.click = s.offset.click, this !== r && this.instance._intersectsWith(this.instance.containerCache) && t.contains(r.instance.element[0], this.instance.element[0]) && (n = !1),
									n;
							})), n ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(o).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0),
							this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
								return i.helper[0];
							}, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0),
							this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left,
							this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left,
							this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top,
							s._trigger("toSortable", e), s.dropped = this.instance.element, s.currentItem = s.element,
							this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0,
							this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)),
							this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper,
							this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(),
							s._trigger("fromSortable", e), s.dropped = !1);
				});
			}
		}), t.ui.plugin.add("draggable", "cursor", {
			start: function() {
				var e = t("body"),
					i = t(this).data("ui-draggable").options;
				e.css("cursor") && (i._cursor = e.css("cursor")), e.css("cursor", i.cursor);
			},
			stop: function() {
				var e = t(this).data("ui-draggable").options;
				e._cursor && t("body").css("cursor", e._cursor);
			}
		}), t.ui.plugin.add("draggable", "opacity", {
			start: function(e, i) {
				var s = t(i.helper),
					o = t(this).data("ui-draggable").options;
				s.css("opacity") && (o._opacity = s.css("opacity")), s.css("opacity", o.opacity);
			},
			stop: function(e, i) {
				var s = t(this).data("ui-draggable").options;
				s._opacity && t(i.helper).css("opacity", s._opacity);
			}
		}), t.ui.plugin.add("draggable", "scroll", {
			start: function() {
				var e = t(this).data("ui-draggable");
				e.scrollParent[0] !== document && "HTML" !== e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset());
			},
			drag: function(e) {
				var i = t(this).data("ui-draggable"),
					s = i.options,
					o = !1;
				i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - e.pageY < s.scrollSensitivity ? i.scrollParent[0].scrollTop = o = i.scrollParent[0].scrollTop + s.scrollSpeed : e.pageY - i.overflowOffset.top < s.scrollSensitivity && (i.scrollParent[0].scrollTop = o = i.scrollParent[0].scrollTop - s.scrollSpeed)),
						s.axis && "y" === s.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - e.pageX < s.scrollSensitivity ? i.scrollParent[0].scrollLeft = o = i.scrollParent[0].scrollLeft + s.scrollSpeed : e.pageX - i.overflowOffset.left < s.scrollSensitivity && (i.scrollParent[0].scrollLeft = o = i.scrollParent[0].scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(document).scrollTop() < s.scrollSensitivity ? o = t(document).scrollTop(t(document).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < s.scrollSensitivity && (o = t(document).scrollTop(t(document).scrollTop() + s.scrollSpeed))),
						s.axis && "y" === s.axis || (e.pageX - t(document).scrollLeft() < s.scrollSensitivity ? o = t(document).scrollLeft(t(document).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < s.scrollSensitivity && (o = t(document).scrollLeft(t(document).scrollLeft() + s.scrollSpeed)))),
					o !== !1 && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(i, e);
			}
		}), t.ui.plugin.add("draggable", "snap", {
			start: function() {
				var e = t(this).data("ui-draggable"),
					i = e.options;
				e.snapElements = [], t(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function() {
					var i = t(this),
						s = i.offset();
					this !== e.element[0] && e.snapElements.push({
						item: this,
						width: i.outerWidth(),
						height: i.outerHeight(),
						top: s.top,
						left: s.left
					});
				});
			},
			drag: function(e, i) {
				var s, o, n, r, a, l, h, c, p, u, f = t(this).data("ui-draggable"),
					d = f.options,
					g = d.snapTolerance,
					m = i.offset.left,
					v = m + f.helperProportions.width,
					_ = i.offset.top,
					b = _ + f.helperProportions.height;
				for (p = f.snapElements.length - 1; p >= 0; p--) a = f.snapElements[p].left, l = a + f.snapElements[p].width,
					h = f.snapElements[p].top, c = h + f.snapElements[p].height, a - g > v || m > l + g || h - g > b || _ > c + g || !t.contains(f.snapElements[p].item.ownerDocument, f.snapElements[p].item) ? (f.snapElements[p].snapping && f.options.snap.release && f.options.snap.release.call(f.element, e, t.extend(f._uiHash(), {
						snapItem: f.snapElements[p].item
					})), f.snapElements[p].snapping = !1) : ("inner" !== d.snapMode && (s = Math.abs(h - b) <= g, o = Math.abs(c - _) <= g,
						n = Math.abs(a - v) <= g, r = Math.abs(l - m) <= g, s && (i.position.top = f._convertPositionTo("relative", {
							top: h - f.helperProportions.height,
							left: 0
						}).top - f.margins.top), o && (i.position.top = f._convertPositionTo("relative", {
							top: c,
							left: 0
						}).top - f.margins.top), n && (i.position.left = f._convertPositionTo("relative", {
							top: 0,
							left: a - f.helperProportions.width
						}).left - f.margins.left), r && (i.position.left = f._convertPositionTo("relative", {
							top: 0,
							left: l
						}).left - f.margins.left)), u = s || o || n || r, "outer" !== d.snapMode && (s = Math.abs(h - _) <= g,
						o = Math.abs(c - b) <= g, n = Math.abs(a - m) <= g, r = Math.abs(l - v) <= g, s && (i.position.top = f._convertPositionTo("relative", {
							top: h,
							left: 0
						}).top - f.margins.top), o && (i.position.top = f._convertPositionTo("relative", {
							top: c - f.helperProportions.height,
							left: 0
						}).top - f.margins.top), n && (i.position.left = f._convertPositionTo("relative", {
							top: 0,
							left: a
						}).left - f.margins.left), r && (i.position.left = f._convertPositionTo("relative", {
							top: 0,
							left: l - f.helperProportions.width
						}).left - f.margins.left)), !f.snapElements[p].snapping && (s || o || n || r || u) && f.options.snap.snap && f.options.snap.snap.call(f.element, e, t.extend(f._uiHash(), {
						snapItem: f.snapElements[p].item
					})), f.snapElements[p].snapping = s || o || n || r || u);
			}
		}), t.ui.plugin.add("draggable", "stack", {
			start: function() {
				var e, i = this.data("ui-draggable").options,
					s = t.makeArray(t(i.stack)).sort(function(e, i) {
						return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0);
					});
				s.length && (e = parseInt(t(s[0]).css("zIndex"), 10) || 0, t(s).each(function(i) {
					t(this).css("zIndex", e + i);
				}), this.css("zIndex", e + s.length));
			}
		}), t.ui.plugin.add("draggable", "zIndex", {
			start: function(e, i) {
				var s = t(i.helper),
					o = t(this).data("ui-draggable").options;
				s.css("zIndex") && (o._zIndex = s.css("zIndex")), s.css("zIndex", o.zIndex);
			},
			stop: function(e, i) {
				var s = t(this).data("ui-draggable").options;
				s._zIndex && t(i.helper).css("zIndex", s._zIndex);
			}
		});
	}(jQuery);
});
define("tpl/verifycode.html.js", [], function() {
	return '<div class="verifycode">\n	<span class="frm_input_box"><input id="imgcode" name="imgcode" type="text" value="" class="frm_input"></span>\n    <div class="verifyimg_wrp">\n        <img src="">\n        <a href="javascript:;" class="changeVerifyCode">换一张</a>\n    </div>\n</div>\n';
});
define("biz_web/utils/upload.js", ["widget/upload.css", "biz_web/lib/webuploader.js", "common/wx/dialog.js", "common/wx/Tips.js", "tpl/uploader.html.js"], function(e) {
	"use strict";

	function i(e) {
		f.src = "http://isdspeed.qq.com/cgi-bin/r.cgi?flag1=7839&flag2=4&flag3=5&1=" + e;
	}
	e("widget/upload.css");
	var n = e("biz_web/lib/webuploader.js"),
		t = e("common/wx/dialog.js"),
		a = e("common/wx/Tips.js"),
		o = e("tpl/uploader.html.js"),
		r = wx.T,
		l = wx.path.webuploader,
		s = ~location.hostname.search(/^mp/) ? "https://mp.weixin.qq.com" : "",
		c = {
			2: {
				accept: {
					extensions: "bmp,png,jpeg,jpg,gif",
					mimeTypes: "image/*"
				},
				fileSingleSizeLimit: 2097152
			},
			3: {
				accept: {
					extensions: "mp3,wma,wav,amr",
					mimeTypes: "audio/*"
				},
				fileSingleSizeLimit: 5242880
			},
			4: {
				accept: {
					extensions: "rm,rmvb,wmv,avi,mpg,mpeg,mp4",
					mimeTypes: "video/*"
				},
				fileSingleSizeLimit: 20971520
			},
			5: {
				accept: {
					extensions: "pdf",
					mimeTypes: "application/pdf"
				},
				fileSingleSizeLimit: 10485760
			},
			6: {
				accept: {
					extensions: "bmp,png,jpeg,jpg,gif,pdf",
					mimeTypes: "image/*,application/pdf"
				},
				fileSingleSizeLimit: 2097152
			},
			7: {
				accept: {
					extensions: "bmp,jpeg,jpg,gif",
					mimeTypes: "image/*"
				},
				fileSingleSizeLimit: 2097152
			},
			8: {
				accept: {
					extensions: "bmp,png,jpeg,jpg",
					mimeTypes: "image/*"
				},
				fileSingleSizeLimit: 2097152
			},
			9: {
				accept: {
					extensions: "xls",
					mimeTypes: "application/vnd.ms-excel"
				},
				fileSingleSizeLimit: 204800
			},
			10: {
				accept: {
					extensions: "xls",
					mimeTypes: "application/vnd.ms-excel"
				},
				fileSingleSizeLimit: 5242880
			},
			11: {
				accept: {
					extensions: "bmp,png,jpeg,jpg",
					mimeTypes: "image/*"
				},
				fileSingleSizeLimit: 2097152
			}
		};
	c[15] = c[4];
	var p = function(e) {
			t.show({
				type: "warn",
				msg: "警告|" + e,
				mask: !0,
				buttons: [{
					text: "确定",
					click: function() {
						this.remove();
					}
				}]
			});
		},
		u = function(e) {
			var i = n.Uploader;
			0 == i.support("flash") ? p("<p>未安装或未正确配置flash插件，请检查后重试。<br><a href='http://get.adobe.com/cn/flashplayer/' target='_blank'>到adobe去下载flash插件</a></p>") : 0 == i.support() ? p("<p>您的浏览器不支持上传</p>") : e.refresh();
		},
		m = function(e) {
			e && wx.jslog({
				src: "common/wx/upload.js"
			}, null, e);
		},
		d = {
			swf: l,
			auto: !0,
			pick: {
				multiple: !0
			},
			fileNumLimit: 5,
			threads: 3,
			sendAsBinary: !1,
			runtimeOrder: "html5,flash",
			compress: {
				width: 1e8,
				height: 1e8,
				quality: 90,
				compressSize: 0,
				noCompressIfLarger: !0
			},
			imageSize: !0,
			chunked: !1,
			duplicate: !0
		},
		f = new Image,
		g = {},
		h = function(e) {
			if (!e.url) throw "missing url";
			var t, l, s, p = $('<ul class="upload_file_box" style="display:none"></ul>'),
				f = $(e.container);
			f.on("click", function() {
					Math.random() < .1 && m(12), u(t);
				}).parent().append(p),
				function() {
					0 == n.Uploader.support("html5") && 0 == n.Uploader.support("flash") && ((new Image).src = "/misc/jslog?level=error&id=36&content=[pageurl:" + encodeURIComponent(location.href) + ",ua:" + encodeURIComponent(window.navigator.userAgent) + "]");
				}(), l = {
					server: wx.url(e.url + "&ticket_id=" + wx.data.user_name + "&ticket=" + wx.data.ticket),
					pick: {
						id: f,
						multiple: e.multi
					},
					fileNumLimit: e.queueSizeLimit
				}, s = c[e.type] || c[2], e = $.extend(!0, {}, d, l, s, e);
			try {
				t = n.create(e);
			} catch (h) {
				if (!t) return;
			}
			return p.on("click", ".js_cancel", function() {
				var e = $(this).data("id");
				t.cancelFile(e), $(this).hide();
			}), t.on("beforeFileQueued", function(i) {
				return Math.random() < .1 && m(13), e.canContinueUpload && !e.canContinueUpload() ? !1 : !(e.onSelect && e.onSelect(null, i.id, i) === !1);
			}), t.on("fileQueued", function(e) {
				var i = {
					id: e.id,
					fileName: e.name,
					size: n.formatSize(e.size)
				};
				p.append(r(o, i)).show();
			}), t.on("fileDequeued", function() {
				Math.random() < .1 && m(14), e.onCancel && e.onCancel();
			}), t.on("uploadProgress", function(i, n) {
				var t = "#uploadItem%s".sprintf(i.id),
					a = p.find(t).find(".progress_bar_thumb");
				a.width("%s%".sprintf(100 * n)), 1 == n && p.find(t).find(".js_cancel").remove(), e.onProgress && e.onProgress(null, i.id, i, {
					percentage: n
				});
			}), t.on("uploadStart", function(e) {
				g[e.id] = +new Date;
			}), t.on("uploadSuccess", function(n, t, o) {
				if (Math.random() < .1 && m(16), t && t.base_resp) {
					var r = +t.base_resp.ret;
					if (0 == r) Math.random() < .1 && (m(17), g[n.id] && i(+new Date - g[n.id]));
					else switch (n.setStatus("invalid"),
						r) {
						case -18:
							a.err("页面停留时间过久，请刷新页面后重试！");
							break;

						case -20:
							a.err("无法解释该图片，请使用另一图片或截图另存");
							break;

						case -13:
							a.err("上传文件过于频繁，请稍后再试");
							break;

						case -10:
							a.err("上传文件过大");
							break;

						case -22:
							a.err("上传音频文件不能超过60秒");
							break;

						case -39:
							a.err("上传图片已超过宽度（或者高度）限制，请将图片调整到宽度4000像素以下，高度4000像素以下后重试");
							break;

						default:
							a.err("上传文件发送出错，请刷新页面后重试！");
					}
				}
				e.onComplete && e.onComplete(null, n.id, n, t, {
					fileCount: o.numOfProgress + o.numOfQueue
				});
			}), t.on("uploadFinished", function(i) {
				this.reset(), p.fadeOut().html(""), g = {}, 0 == i.numOfInvalid && i.numOfSuccess > 0 && e.onAllComplete && e.onAllComplete(null, {
					errors: i.numOfCancel + i.numOfInvalid + i.numOfUploadFailed + i.numofDeleted + i.numofInterrupt,
					filesUploaded: i.numOfSuccess
				});
			}), t.on("uploadError", function() {
				Math.random() < .1 && m(15), e.onError && e.onError();
			}), t.on("error", function(i, t, o) {
				switch ("object" == typeof t && (o = t), i) {
					case "Q_EXCEED_NUM_LIMIT":
						a.err("一次上传最多只能上传%s个文件".sprintf(t));
						break;

					case "F_EXCEED_SIZE":
						a.err("文件大小不能超过%s".sprintf(n.formatSize(t, "0")));
						break;

					case "Q_TYPE_DENIED":
						a.err(e.errTypeMsg || "文件必须为以下格式：%s".sprintf(e.accept.extensions).replace(/,/g, ", "));
				}
			}), t;
		},
		b = function(e) {
			return function(i) {
				return i.url = e, h(i);
			};
		},
		w = function(e) {
			return function(i) {
				return wx.url(e + "&ticket_id=" + wx.data.user_name + "&ticket=" + wx.data.ticket + "&id=" + i);
			};
		};
	return {
		uploadFile: h,
		uploadBizFile: b(s + "/cgi-bin/filetransfer?action=upload_material&f=json"),
		uploadTmpFile: b(s + "/cgi-bin/filetransfer?action=preview&f=json"),
		uploadCdnFile: b(s + "/cgi-bin/filetransfer?action=upload_cdn&f=json"),
		uploadShopFile: b(s + "/merchant/goodsimage?action=uploadimage"),
		uploadShopUnsaveFile: b(s + "/merchant/goodsimage?action=uploadimage&save=0"),
		uploadVideoCdnFile: b(s + "/cgi-bin/filetransfer?action=upload_video_cdn&f=json"),
		uploadRegisterFile: b(s + "/acct/realnamesubmit?type=2&action=file_set"),
		uploadUpgradeFile: b(s + "/acct/servicetypeupgrade?type=2&action=file_set"),
		uploadPoiFile: b(s + "/misc/setlocation?action=upload"),
		uploadCdnFileFromAd: function(e) {
			return b(s + "/cgi-bin/filetransfer?action=upload_cdn_check_size&f=json&width=" + e.w + "&height=" + e.h + "&limit_size=" + e.size);
		},
		uploadImageLibFile: function(e) {
			return e.url = s + "/cgi-bin/filetransfer?action=upload_material&f=json", 1 == e.doublewrite && (e.url += "&writetype=doublewrite&groupid=" + (e.groupid || 1)),
				h(e);
		},
		uploadCdnFileWithCheck: function(e) {
			var i = {
				height: 0,
				width: 0,
				size: 0,
				min_height: 0,
				min_width: 0,
				min_size: 0
			};
			e = $.extend(!0, i, e);
			var n = [];
			for (var t in e) n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
			return b(s + "/cgi-bin/filetransfer?action=upload_cdn_check_range&f=json&" + n.join("&"), "tmpfile");
		},
		tmpFileUrl: w(s + "/cgi-bin/filetransfer?action=preview"),
		mediaFileUrl: w(s + "/cgi-bin/filetransfer?action=bizmedia"),
		multimediaFileUrl: w(s + "/cgi-bin/filetransfer?action=multimedia")
	};
});
define("common/wx/richEditor/emotion.js", ["tpl/richEditor/emotion.html.js", "common/qq/Class.js"], function(e, t, n) {
	try {
		var r = +(new Date);
		"use strict";
		var i = wx.T,
			s = {
				url: wx.resPath + "/mpres/htmledition/images/icon/emotion/",
				data: {
					"0": "微笑",
					"1": "撇嘴",
					"2": "色",
					"3": "发呆",
					"4": "得意",
					"5": "流泪",
					"6": "害羞",
					"7": "闭嘴",
					"8": "睡",
					"9": "大哭",
					"10": "尴尬",
					"11": "发怒",
					"12": "调皮",
					"13": "呲牙",
					"14": "惊讶",
					"15": "难过",
					"16": "酷",
					"17": "冷汗",
					"18": "抓狂",
					"19": "吐",
					"20": "偷笑",
					"21": "可爱",
					"22": "白眼",
					"23": "傲慢",
					"24": "饥饿",
					"25": "困",
					"26": "惊恐",
					"27": "流汗",
					"28": "憨笑",
					"29": "大兵",
					"30": "奋斗",
					"31": "咒骂",
					"32": "疑问",
					"33": "嘘",
					"34": "晕",
					"35": "折磨",
					"36": "衰",
					"37": "骷髅",
					"38": "敲打",
					"39": "再见",
					"40": "擦汗",
					"41": "抠鼻",
					"42": "鼓掌",
					"43": "糗大了",
					"44": "坏笑",
					"45": "左哼哼",
					"46": "右哼哼",
					"47": "哈欠",
					"48": "鄙视",
					"49": "委屈",
					"50": "快哭了",
					"51": "阴险",
					"52": "亲亲",
					"53": "吓",
					"54": "可怜",
					"55": "菜刀",
					"56": "西瓜",
					"57": "啤酒",
					"58": "篮球",
					"59": "乒乓",
					"60": "咖啡",
					"61": "饭",
					"62": "猪头",
					"63": "玫瑰",
					"64": "凋谢",
					"65": "示爱",
					"66": "爱心",
					"67": "心碎",
					"68": "蛋糕",
					"69": "闪电",
					"70": "炸弹",
					"71": "刀",
					"72": "足球",
					"73": "瓢虫",
					"74": "便便",
					"75": "月亮",
					"76": "太阳",
					"77": "礼物",
					"78": "拥抱",
					"79": "强",
					"80": "弱",
					"81": "握手",
					"82": "胜利",
					"83": "抱拳",
					"84": "勾引",
					"85": "拳头",
					"86": "差劲",
					"87": "爱你",
					"88": "NO",
					"89": "OK",
					"90": "爱情",
					"91": "飞吻",
					"92": "跳跳",
					"93": "发抖",
					"94": "怄火",
					"95": "转圈",
					"96": "磕头",
					"97": "回头",
					"98": "跳绳",
					"99": "挥手",
					"100": "激动",
					"101": "街舞",
					"102": "献吻",
					"103": "左太极",
					"104": "右太极"
				},
				ext: ".gif",
				replaceEmoji: function(e) {
					var t, n, r = s.url,
						i = s.ext,
						o = s.data;
					for (t in o) n = new RegExp("/" + o[t], "g"), e = e.replace(n, '<img src="{src}" alt="mo-{alt}"/>'.format({
						src: r + t + i,
						alt: o[t]
					}));
					return e;
				}
			},
			o = e("tpl/richEditor/emotion.html.js"),
			u = e("common/qq/Class.js"),
			a = 24,
			f = 24,
			l = 15,
			c = 7,
			h = u.declare({
				init: function(e) {
					this.selector$ = e;
					var t = [],
						n = s.url + "{k}" + s.ext,
						r = a,
						u = f,
						h = l,
						p = c;
					for (var d = 0; d < p; ++d)
						for (var v = 0; v < h; ++v) {
							var m = d * h + v;
							t.push({
								gifurl: n.format({
									k: m
								}),
								title: s.data[m + ""],
								bp: "background-position:" + -m * r + "px 0;"
							});
						}
					this.selector$.html(i(o, {
						edata: t
					})), this._previewArea$ = this.selector$.find(".js_emotionPreviewArea"), this._initEvent();
				},
				getEmotionText: function(e) {
					return e.replace(/<img.*?alt=["]{0,1}mo-([^"\s]*).*?>/ig, "/$1");
				},
				getEmotionHTML: function(e) {
					var t = e.title;
					return '<img src="{src}" alt="{alt}"/>'.format({
						src: e.gifurl,
						alt: t ? "mo-" + t : ""
					});
				},
				_getData: function(e) {
					return {
						title: e.data("title"),
						gifurl: e.data("gifurl")
					};
				},
				_initEvent: function() {
					var e = this;
					e.selector$.click(function(t) {
						var n = e._getData($(t.target));
						!n.gifurl || e.clickCB && e.clickCB(n);
					}).mouseover(function(t) {
						var n = e._getData($(t.target));
						!n.gifurl || e._previewArea$.html(e.getEmotionHTML({
							title: "",
							gifurl: n.gifurl
						})), e.mouseoverCB && e.mouseoverCB();
					}).mouseleave(function(t) {
						e._previewArea$.html(""), e.mouseleaveCB && e.mouseleaveCB();
					});
				},
				click: function(e) {
					this.clickCB = e;
				},
				mouseleave: function(e) {
					return this.mouseleaveCB = e, this;
				},
				mouseover: function(e) {
					return this.mouseoverCB = e, this;
				},
				show: function() {
					this.selector$.fadeIn();
				},
				hide: function() {
					this.selector$.fadeOut();
				}
			});
		h.emoji = s.replaceEmoji, n.exports = h;
	} catch (p) {
		wx.jslog({
			src: "common/wx/richEditor/emotion.js"
		}, p);
	}
});
define("common/wx/richEditor/wysiwyg.js", ["common/wx/richEditor/editorRange.js", "common/qq/Class.js"], function(e, t, n) {
	"use strict";
	var i = /msie/.test(navigator.userAgent.toLowerCase()),
		a = "Wysiwyg",
		r = e("common/wx/richEditor/editorRange.js"),
		s = e("common/qq/Class.js"),
		o = s.declare({
			init: function(e, t) {
				var n = e,
					i = $('<div class="edit_area"></div>');
				this._dom$ = n, this._val = "", this._lastRange = null, this._editArea$ = i, $.extend(this, t),
					this._initEditArea(), this._initEvent();
			},
			_initEvent: function() {
				var e = this,
					t = function() {
						e.__tid && clearTimeout(e.__tid), e.__tid = setTimeout(function() {
							e._filterNode();
						}, 10);
					};
				e._editArea$.bind({
					keydown: function(t) {
						e._keydown(t);
					},
					keyup: function(t) {
						e._keyup(t);
					},
					mouseup: function(t) {
						e._mouseup(t);
					},
					drop: t,
					paste: t
				});
			},
			_keydown: function(e) {
				var t = this,
					n = wx.isHotkey;
				if (n(e, "backspace")) {
					var i = r.getSelection();
					i.type && "control" === i.type.toLowerCase() && (e.preventDefault(), i.clear());
				}
				(n(e, "ctrlenter") || n(e, "altenter")) && (e.preventDefault(), t.insertHTML("<br/>")._saveRang()),
				t.keydown && t.keydown(e);
			},
			_keyup: function(e) {
				var t = this;
				t._saveRang(), t.keyup && t.keyup(e), t.save();
			},
			_mouseup: function(e) {
				var t = this;
				t._saveRang(), t.mouseup && t.mouseup(e);
			},
			focus: function() {
				this._editArea$.focus(), this._resotreRange();
			},
			_setCursorToEnd: function(e) {
				if (i && e) {
					var t = r.getSelection();
					t.extend && (t.extend(e, e.length), t.collapseToEnd && t.collapseToEnd());
				}
			},
			insertHTML: function(e) {
				var t = this;
				t.focus();
				var n = r.getRange();
				if (!n) return t;
				if (n.createContextualFragment) {
					e += '<img style="width:1px;height:1px;">';
					var a = n.createContextualFragment(e),
						s = a.lastChild;
					n.deleteContents(), n.insertNode(a), n.setEndAfter(s), n.setStartAfter(s);
					var o = r.getSelection();
					o.removeAllRanges(), o.addRange(n), document.execCommand("Delete", !1, null);
				} else i && />$/.test(e), n.pasteHTML && n.pasteHTML(e), n.collapse && n.collapse(!1), n.select();
				return t._saveRang().save(), t;
			},
			save: function(e) {
				var t = this,
					e = e || this.textFilter,
					n = t._editArea$.html();
				return t.val = "function" == typeof e ? e(n) : n, t.change && t.change(), t;
			},
			_filterNode: function(e) {
				for (var t, n = this, e = e || this.nodeFilter, i = n._editArea$.get(0), a = i.childNodes, r = a.length - 1; r >= 0; r--) {
					var s = a[r];
					switch (s.nodeType) {
						case 1:
							if ("BR" !== s.nodeName.toUpperCase()) {
								var o, d = !1;
								if ((o = e && e(s)) || (o = s.textContent || s.innerText || "", d = !0), o) {
									var c = d ? document.createTextNode(o) : o;
									!t && (t = c), i.replaceChild(c, s);
								} else i.removeChild(s);
							}
							break;

						case 3:
							break;

						default:
							i.removeChild(s);
					}
				}
				return n._setCursorToEnd(t), n._saveRang().save();
			},
			getHTML: function() {
				return this._editArea$.html();
			},
			getText: function() {
				return this.getHTML().text();
			},
			getContent: function() {
				return this.val;
			},
			setContent: function(e, t) {
				this.clear(), this._editArea$.html(e), this.val = t || e, this.change && this.change();
			},
			clear: function() {
				this.val = "", this._editArea$.html("");
			},
			_initEditArea: function() {
				var e = this;
				e._editArea$.attr("class", e._dom$.attr("class")).attr("contentEditable", !0).css({
					"overflow-y": "auto",
					"overflow-x": "hidden"
				}), e._dom$.after(e._editArea$).hide().data(a, e), e.init && e.init();
			},
			_saveRang: function() {
				return this._lastRange = r.getRange(), this;
			},
			_resotreRange: function() {
				var e = this._lastRange;
				if (e) {
					var t = r.getSelection();
					if (t.addRange) t.removeAllRanges(), t.addRange(e);
					else {
						var n = r.getRange();
						n.setEndPoint && (n.setEndPoint("EndToEnd", e), n.setEndPoint("StartToStart", e)), n.select();
					}
				}
				return this;
			}
		}),
		d = function(e, t) {
			return e.data(a) || new o(e, t);
		};
	n.exports = d;
});
define("tpl/richEditor/emotionEditor.html.js", [], function() {
	return '<div class="emotion_editor">\n    <div class="edit_area js_editorArea"></div>\n    <div class="editor_toolbar">\n        {if !hideEmotion}\n        <a href="javascript:void(0);" class="icon_emotion emotion_switch js_switch">表情</a>\n        {/if}\n        {if !hideUpload}\n        <div class="upload_box">\n            <div class="upload_area">\n                <a id="emotionEditor_{gid}_" href="javascript:void(0);" class="js_upload upload_access">\n                    <i class="icon18_common upload_gray"></i>\n                    上传图片                </a>\n            </div>\n        </div>\n        {/if}\n        <p class="editor_tip opr_tips">，按下Shift+Enter键换行</p>\n        <p class="editor_tip js_editorTip"></p>\n        <div class="emotion_wrp js_emotionArea">\n			\n		</div>\n    </div>\n</div>\n\n';
});
define("tpl/media/simple_appmsg.html.js", [], function() {
	return '<div class="appmsgSendedItem simple_appmsg">\n    {if content_url}\n    <a class="title_wrp" href="{content_url}" target="_blank">\n    {else}\n    <div class="title_wrp">\n    {/if}\n        <img class="icon icon_lh" src="{appmsg_cover}"/>\n        <span class="title">[{type_msg}]{title}</span>\n    {if content_url}\n    </a>\n    {else}\n    </div>\n    {/if}\n    {if copyright_status == 11}<span class="icon_tag_gray">原创</span><a href=\'/cgi-bin/appmsgcopyright?action=reprint&begin=0&count=10&id={multi_item[0].msg_id}&idx={multi_item[0].seq+1}{param}\' target=\'_blank\'>转载详情</a>{/if}\n    <p class="desc">{if content_url}<a href="{content_url}" class="appmsg_desc" target="_blank">{desc}</a>\n    {else}{desc}{/if}</p>\n    {if (!!voteIds && (voteIds.length == 1)) }\n    <p class="desc"><i class="icon_vote"></i><a href="javascript:void(0);" class="js_view_vote" data-id="{id}">查看结果</a></p>\n    {/if}\n    {if !isSingleMsg && multi_item && multi_item[0] && multi_item[0].super_vote_id && multi_item[0].super_vote_id.length == 1}\n    <p class="desc"><i class="icon_vote"></i><a href="javascript:void(0);" class="js_view_vote" data-superVoteId="{multi_item[0].super_vote_id[0]}" data-id="{id}">查看结果</a></p>\n    {/if}\n    {if (show_type == 0 && !!app_name) }\n    <div class="resource appmsgFrom">来自{app_name}</div>\n    {/if}\n</div>\n';
});
define("user/user_cgi.js", ["common/wx/Tips.js", "common/wx/Cgi.js"], function(e, o, n) {
	"use strict";
	var t = {
			changeRemark: "/cgi-bin/modifycontacts?t=ajax-response&action=setremark",
			changeGroup: "/cgi-bin/modifycontacts?action=modifycontacts&t=ajax-putinto-group",
			getBuddy: "/cgi-bin/getcontactinfo?t=ajax-getcontactinfo&lang=zh_CN&fakeid="
		},
		r = e("common/wx/Tips.js"),
		a = "",
		s = e("common/wx/Cgi.js");
	n.exports = {
		changeRemark: function(e, o, n) {
			s.post({
				mask: !1,
				url: t.changeRemark,
				data: {
					remark: o,
					tofakeuin: e
				}
			}, function(e) {
				if (!e || !e.base_resp) return void r.err("修改失败");
				var o = e.base_resp.ret + "";
				if ("0" == o) r.suc("修改成功"), "function" == typeof n && n(e);
				else switch (o) {
					case "61900":
						r.err("修改失败");
						break;

					case "61901":
						r.err("系统繁忙");
						break;

					case "61910":
						r.err("修改失败");
						break;

					case "61911":
						r.err("修改失败，对方不是你的粉丝");
						break;

					case "61912":
						r.err("修改失败，备注不能超过30个字");
						break;

					default:
						r.err("修改失败");
				}
			});
		},
		changeGroup: function(e, o, n, a) {
			var c = $.isArray(e) ? e.join("|") : e;
			s.post({
				url: t.changeGroup,
				data: {
					scene: a || "",
					contacttype: o,
					tofakeidlist: c
				},
				mask: !1
			}, function(e) {
				if (!e || !e.base_resp) return void r.err("添加失败");
				var o = e.base_resp.ret;
				"0" == o ? ("function" == typeof n && n(e), r.suc("添加成功")) : r.err("添加失败");
			});
		},
		setTempMsgid: function(e) {
			e && "" == a && (a = e), console.log("setTempMsgid"), console.log("_sTempMsgId=" + a);
		},
		getBuddyInfo: function(e, o) {
			var n = "";
			a && (n = "&msgid=" + a), console.log("getBuddyInfo"), console.log(n), s.post({
				mask: !1,
				url: t.getBuddy + e + n
			}, function(e) {
				"function" == typeof o && o(e);
			});
		}
	};
});
define("tpl/RichBuddy/RichBuddyContent.html.js", [], function() {
	return '<div class="frm_control_group nickName">\n    <label class="frm_label">{nick_name}</label>\n    <div class="frm_controls frm_vertical_pt">\n        <span class="icon18_common {if gender==1}man_blue{else if gender==2}woman_orange{/if}"></span>\n    </div>\n</div>\n<div class="frm_control_group remark">\n    <label class="frm_label">备注名</label>\n    <div class="frm_controls frm_vertical_pt">\n        <span class=\'js_remarkName remark_name\'>{remark_name}</span>\n        <a title="修改备注" class="icon14_common edit_gray js_changeRemark" href="javascript:;">修改备注</a> \n    </div>\n</div>\n<div class="frm_control_group location">\n    <label class="frm_label">地区</label>\n    <div class="frm_controls frm_vertical_pt">\n        {country} {province} {city}\n    </div>\n</div>\n<div class="frm_control_group sign">\n    <label class="frm_label">签名</label>\n    <div class="frm_controls frm_vertical_pt">\n        {signature}\n    </div>\n</div>\n<div class="frm_control_group grouping js_group_container">\n<label class="frm_label">分组</label>\n    <div class="frm_controls frm_vertical_pt">\n        <div class="dropdown_wrp js_group"></div>\n    </div>\n</div>\n ';
});
define("tpl/RichBuddy/RichBuddyLayout.html.js", [], function() {
	return '<div class="rich_buddy popover arrow_left" style="display:none;">\n    <div class="popover_inner">\n        <div class="popover_content">\n            <div class="rich_buddy_hd">详细资料</div>\n \n            <div class="loadingArea rich_buddy_loading"><span class="vm_box"></span><i class="icon_loading_small white"></i></div>\n            <div class="rich_buddy_bd buddyRichContent">\n            </div>\n        </div>\n    </div>\n    <i class="popover_arrow popover_arrow_out"></i>\n    <i class="popover_arrow popover_arrow_in"></i>\n</div> \n';
});
define("tpl/media/id_card.html.js", [], function() {
	return '<div class="mediaBox bcardBox">\n    <div class="mediaContent">\n        <div class="bCard">\n            <div class="bCardHeader">名片</div>\n            <div class="bCardContent">\n                <img class="bCardAvatar" src="{avatar}" alt="{username}" title="{username}"/>\n                <div class="info">\n                    <p class="nickname">{nickname}</p>\n                    <p class="username">{username}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <span class="iconArrow"></span>\n</div>\n';
});
define("tpl/media/videomsg.html.js", [], function() {
	return '<div id="wxVideoBox{id}" class="richvideo Js_videomsg">\n    <div class="richvideo_content" style="z-index: 0">\n        <h4 class="title">{title}</h4>\n        <div class="video_info">\n            <em class="time">{time}</em>\n            <!--#0001#-->\n            <em class="res">{from}</em>\n            <!--%0001%-->\n        </div>\n        <div class="video_wrp Js_videoContent">\n            <div id="wxVideoPlayer{id}" class="wxVideoPlayContent video_player">\n                <video id="wxVideo{id}" class="video-js vjs-default-skin"  \n                    preload="auto" controls="controls" data-src="{video_url}"></video>\n            </div>\n            {if for_network}\n            <div class="wxNetworkVideo video_shot" data-contenturl="{content_url}">\n            {else}\n            <div class="{if !for_transfer}wxVideoScreenshot {/if}video_shot">\n            {/if}\n                <img src="/cgi-bin/getimgdata?token={token}&msgid={app_id}&mode=large&source=file&fileId={file_id}"/>\n                <!-- <i class="icon_video"></i> -->\n                <!-- <span class="video_duration"><em>{play_length}"</em></span> -->\n                {if for_transfer}\n                <div class="loading_tips" {if hide_transfer}style="display:none"{/if}>\n                    <i class="icon32_loading dark"></i>\n                    <p>转码中</p>\n                </div>\n                {/if}\n            </div>\n        </div>\n        <div class="video_desc" data-digest="{digest}">{digest}</div>\n    </div>\n    {if for_operation}\n    <div class="richvideo_opr">\n        <ul class="grid_line">\n            {if for_network}\n            <li class="richvideo_opr_item grid_item size1of2">\n                <a class="js_edit js_tooltip" href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&lang=zh_CN&token={token}&type=15&appmsgid={app_id}" data-tooltip="编辑">\n                    <i class="icon18_common edit_gray">编辑</i>\n                </a>\n            </li>\n            <li class="richvideo_opr_item grid_item size1of2 no_extra">\n                <a class="js_del js_tooltip" data-id="{id}" href="javascript:void(0);" data-tooltip="删除">\n                    <i class="icon18_common del_gray">删除</i>\n                </a>\n            </li>\n            {else}\n            <li class="richvideo_opr_item grid_item size1of3">\n                <a class="js_edit js_tooltip" href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&lang=zh_CN&token={token}&type=15&appmsgid={app_id}" data-tooltip="编辑">\n                    <i class="icon18_common edit_gray">编辑</i>\n                </a>\n            </li>\n            <li class="richvideo_opr_item grid_item size1of3">\n                <a {if for_transfer}href="javascript:;" class="js_tooltip js_download"{else}href="{video_download_url}" class="js_tooltip"{/if} data-tooltip="下载">\n                    <i class="icon18_common download_gray">下载</i>\n                </a>\n            </li>\n            <li class="richvideo_opr_item grid_item size1of3 no_extra">\n                <a class="js_del js_tooltip" data-id="{app_id}" href="javascript:void(0);" data-tooltip="删除">\n                    <i class="icon18_common del_gray">删除</i>\n                </a>\n            </li>\n            {/if}\n        </ul>\n    </div>\n    {/if}\n    {if for_selection}\n    <div class="richvideo_mask"></div>\n    <i class="icon_card_selected">已选择</i>\n    <div class="richvideo_tips">\n        <i class="icon_richvideo_error"></i>\n        <p>该素材没有标题，<a href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&lang=zh_CN&token={token}&type=15&appmsgid={app_id}">马上编辑</a></p>\n    </div>\n    {/if}\n    {if for_notitle}\n    <div class="richvideo_mask"></div>\n    <div class="richvideo_tips">\n        <i class="icon_richvideo_error"></i>\n        <p>该素材没有标题，<a href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&lang=zh_CN&token={token}&type=15&appmsgid={app_id}">马上编辑</a></p>\n    </div>\n    {/if}\n</div>\n\n\n';
});
define("tpl/media/wxvideo.html.js", [], function() {
	return '<div id="wxVideoBox{id}" class="richvideo smallvideo Js_videomsg">\n	<div class="richvideo_content" style="z-index: 0">\n		<h4 class="title">{name}</h4>\n        <div class="video_wrp Js_videoContent">\n            <div id="wxVideoPlayer{id}" class="wxVideoPlayContent video_player">\n                <video id="wxVideo{id}" class="video-js vjs-default-skin"  \n                    preload="auto" controls="controls" data-src="{video_url}"></video>\n            </div>\n			<div class="wxVideoScreenshot video_shot">\n                {if video_thumb_cdn_url}\n                <img src="{video_thumb_cdn_url}">\n                {else}\n				<img src="/cgi-bin/getimgdata?token={token}&msgid={id}&mode=small&source=file&fileId={file_id}">\n                {/if}\n				<div class="video_mask">\n					<span class="ic_play"></span>\n				</div>\n			</div>\n        </div>\n	</div>\n    {if for_operation}\n    <div class="richvideo_opr">\n        <ul class="grid_line">\n            <li class="richvideo_opr_item grid_item size1of2">\n                <a class="js_popedit js_tooltip" data-id="{id}" data-name="{name}" href="javascript:void(0);" data-tooltip="编辑">\n                    <i class="icon18_common edit_gray">编辑</i>\n                </a>\n            </li>\n            <li class="richvideo_opr_item grid_item size1of2 no_extra">\n                <a class="js_del js_tooltip" data-id="{id}" data-type="sv" href="javascript:void(0);" data-tooltip="删除">\n                    <i class="icon18_common del_gray">删除</i>\n                </a>\n            </li>\n        </ul>\n    </div>\n    {/if}\n    {if for_selection}\n    <div class="richvideo_mask"></div>\n    <i class="icon_card_selected">已选择</i>\n    {/if}\n</div>\n\n\n';
});
define("tpl/media/simple_videomsg.html.js", [], function() {
	return '<!--群发功能-已发送页面视频模板-->\n<div class="appmsgSendedItem simple_videomsg" data-id="{id}" data-src="{video_url}">\n    {if for_network}\n    <a href="{content_url}" class="title_wrp" data-contenturl="{content_url}" target="_blank">\n    {else}\n    <a href="javascript:;" class="title_wrp js_video">\n    {/if}\n        <img class="icon icon_lh" src="/cgi-bin/getimgdata?token={token}&msgid={app_id}&mode=large&source=file&fileId={file_id}"/>\n        <span class="title">[视频]{title}</span>\n    </a>\n    <p class="desc">{if for_transfer}{if !hide_transfer}转码中{/if}{/if} {digest}</p>\n</div>\n';
});
define("tpl/media/video.html.js", [], function() {
	return '<div id="wxVideoBox{id}" class="mediaBox videoBox{if type == 62} smallvideo_box{/if}">\n	<div class="mediaContent">\n		<div class="wxVideoPlayContent">\n            <div class="wxVideoBoxAction{id}">\n                <a id="wxVideoBoxFold{id}" class="video_switch"><i class="icon14_common switch_gray"></i>收起</a>\n			</div>\n            <div id="wxVideoPlayer{id}" class="wxVideoPlayer">\n                <video id="wxVideo{id}" class="video-js vjs-default-skin" width="260" height="195" preload="auto"  loop controls="controls" src="{src}" poster="/cgi-bin/getimgdata?token={token}&msgid={id}&mode=small&source={source}&fileId={file_id}"></video>\n            </div>\n		</div>\n        <div class="wxVideoScreenshot" data-vid="{id}" data-fid="{fileid}" data-source="{source}">\n            {if video_thumb_url}\n            <img class="wxImg" src="{video_thumb_url}">\n            {else}\n            <img class="wxImg" src="/cgi-bin/getimgdata?token={token}&msgid={id}&mode=small&source={source}&fileId={file_id}" alt="" title=\'点击播放视频\' />\n            {/if}\n			<span class="iconVideo" title=\'点击播放视频\'></span>\n            <div class="videoDuration"><em>{play_length}"</em></div>\n		</div>\n    </div>\n</div>\n';
});
define("biz_web/lib/swfobject.js", [], function(e, t, n) {
	try {
		var r = +(new Date),
			i = function() {
				function e() {
					if (U) return;
					try {
						var e = M.getElementsByTagName("body")[0].appendChild(g("span"));
						e.parentNode.removeChild(e);
					} catch (t) {
						return;
					}
					U = !0;
					var n = P.length;
					for (var r = 0; r < n; r++) P[r]();
				}

				function t(e) {
					U ? e() : P[P.length] = e;
				}

				function n(e) {
					if (typeof O.addEventListener != x) O.addEventListener("load", e, !1);
					else if (typeof M.addEventListener != x) M.addEventListener("load", e, !1);
					else if (typeof O.attachEvent != x) y(O, "onload", e);
					else if (typeof O.onload == "function") {
						var t = O.onload;
						O.onload = function() {
							t(), e();
						};
					} else O.onload = e;
				}

				function r() {
					D ? s() : o();
				}

				function s() {
					var e = M.getElementsByTagName("body")[0],
						t = g(T);
					t.setAttribute("type", k);
					var n = e.appendChild(t);
					if (n) {
						var r = 0;
						(function() {
							if (typeof n.GetVariable != x) {
								var i = n.GetVariable("$version");
								i && (i = i.split(" ")[1].split(","), $.pv = [parseInt(i[0], 10), parseInt(i[1], 10), parseInt(i[2], 10)]);
							} else if (r < 10) {
								r++, setTimeout(arguments.callee, 10);
								return;
							}
							e.removeChild(t), n = null, o();
						})();
					} else o();
				}

				function o() {
					var e = H.length;
					if (e > 0)
						for (var t = 0; t < e; t++) {
							var n = H[t].id,
								r = H[t].callbackFn,
								i = {
									success: !1,
									id: n
								};
							if ($.pv[0] > 0) {
								var s = m(n);
								if (s)
									if (b(H[t].swfVersion) && !($.wk && $.wk < 312)) E(n, !0), r && (i.success = !0, i.ref = u(n), r(i));
									else if (H[t].expressInstall && a()) {
									var o = {};
									o.data = H[t].expressInstall, o.width = s.getAttribute("width") || "0", o.height = s.getAttribute("height") || "0", s.getAttribute("class") && (o.styleclass = s.getAttribute("class")), s.getAttribute("align") && (o.align = s.getAttribute("align"));
									var c = {},
										h = s.getElementsByTagName("param"),
										p = h.length;
									for (var d = 0; d < p; d++) h[d].getAttribute("name").toLowerCase() != "movie" && (c[h[d].getAttribute("name")] = h[d].getAttribute("value"));
									f(o, c, n, r);
								} else l(s), r && r(i);
							} else {
								E(n, !0);
								if (r) {
									var v = u(n);
									v && typeof v.SetVariable != x && (i.success = !0, i.ref = v), r(i);
								}
							}
						}
				}

				function u(e) {
					var t = null,
						n = m(e);
					if (n && n.nodeName == "OBJECT")
						if (typeof n.SetVariable != x) t = n;
						else {
							var r = n.getElementsByTagName(T)[0];
							r && (t = r);
						}
					return t;
				}

				function a() {
					return !z && b("6.0.65") && ($.win || $.mac) && !($.wk && $.wk < 312);
				}

				function f(e, t, n, r) {
					z = !0, q = r || null, R = {
						success: !1,
						id: n
					};
					var i = m(n);
					if (i) {
						i.nodeName == "OBJECT" ? (F = c(i), I = null) : (F = i, I = n), e.id = L;
						if (typeof e.width == x || !/%$/.test(e.width) && parseInt(e.width, 10) < 310) e.width = "310";
						if (typeof e.height == x || !/%$/.test(e.height) && parseInt(e.height, 10) < 137) e.height = "137";
						M.title = M.title.slice(0, 47) + " - Flash Player Installation";
						var s = $.ie && $.win ? "ActiveX" : "PlugIn",
							o = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + s + "&MMdoctitle=" + M.title;
						typeof t.flashvars != x ? t.flashvars += "&" + o : t.flashvars = o;
						if ($.ie && $.win && i.readyState != 4) {
							var u = g("div");
							n += "SWFObjectNew", u.setAttribute("id", n), i.parentNode.insertBefore(u, i), i.style.display = "none",
								function() {
									i.readyState == 4 ? i.parentNode.removeChild(i) : setTimeout(arguments.callee, 10);
								}();
						}
						h(e, t, n);
					}
				}

				function l(e) {
					if ($.ie && $.win && e.readyState != 4) {
						var t = g("div");
						e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(c(e), t), e.style.display = "none",
							function() {
								e.readyState == 4 ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10);
							}();
					} else e.parentNode.replaceChild(c(e), e);
				}

				function c(e) {
					var t = g("div");
					if ($.win && $.ie) t.innerHTML = e.innerHTML;
					else {
						var n = e.getElementsByTagName(T)[0];
						if (n) {
							var r = n.childNodes;
							if (r) {
								var i = r.length;
								for (var s = 0; s < i; s++)(r[s].nodeType != 1 || r[s].nodeName != "PARAM") && r[s].nodeType != 8 && t.appendChild(r[s].cloneNode(!0));
							}
						}
					}
					return t;
				}

				function h(e, t, n) {
					var r, i = m(n);
					if ($.wk && $.wk < 312) return r;
					if (i) {
						typeof e.id == x && (e.id = n);
						if ($.ie && $.win) {
							var s = "";
							for (var o in e) e[o] != Object.prototype[o] && (o.toLowerCase() == "data" ? t.movie = e[o] : o.toLowerCase() == "styleclass" ? s += ' class="' + e[o] + '"' : o.toLowerCase() != "classid" && (s += " " + o + '="' + e[o] + '"'));
							var u = "";
							for (var a in t) t[a] != Object.prototype[a] && (u += '<param name="' + a + '" value="' + t[a] + '" />');
							i.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + s + ">" + u + "</object>", B[B.length] = e.id, r = m(e.id);
						} else {
							var f = g(T);
							f.setAttribute("type", k);
							for (var l in e) e[l] != Object.prototype[l] && (l.toLowerCase() == "styleclass" ? f.setAttribute("class", e[l]) : l.toLowerCase() != "classid" && f.setAttribute(l, e[l]));
							for (var c in t) t[c] != Object.prototype[c] && c.toLowerCase() != "movie" && p(f, c, t[c]);
							i.parentNode.replaceChild(f, i), r = f;
						}
					}
					return r;
				}

				function p(e, t, n) {
					var r = g("param");
					r.setAttribute("name", t), r.setAttribute("value", n), e.appendChild(r);
				}

				function d(e) {
					var t = m(e);
					t && t.nodeName == "OBJECT" && ($.ie && $.win ? (t.style.display = "none", function() {
						t.readyState == 4 ? v(e) : setTimeout(arguments.callee, 10);
					}()) : t.parentNode.removeChild(t));
				}

				function v(e) {
					var t = m(e);
					if (t) {
						for (var n in t) typeof t[n] == "function" && (t[n] = null);
						t.parentNode.removeChild(t);
					}
				}

				function m(e) {
					var t = null;
					try {
						t = M.getElementById(e);
					} catch (n) {}
					return t;
				}

				function g(e) {
					return M.createElement(e);
				}

				function y(e, t, n) {
					e.attachEvent(t, n), j[j.length] = [e, t, n];
				}

				function b(e) {
					var t = $.pv,
						n = e.split(".");
					return n[0] = parseInt(n[0], 10), n[1] = parseInt(n[1], 10) || 0, n[2] = parseInt(n[2], 10) || 0, t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2] ? !0 : !1;
				}

				function w(e, t, n, r) {
					if ($.ie && $.mac) return;
					var i = M.getElementsByTagName("head")[0];
					if (!i) return;
					var s = n && typeof n == "string" ? n : "screen";
					r && (W = null, X = null);
					if (!W || X != s) {
						var o = g("style");
						o.setAttribute("type", "text/css"), o.setAttribute("media", s), W = i.appendChild(o), $.ie && $.win && typeof M.styleSheets != x && M.styleSheets.length > 0 && (W = M.styleSheets[M.styleSheets.length - 1]), X = s;
					}
					$.ie && $.win ? W && typeof W.addRule == T && W.addRule(e, t) : W && typeof M.createTextNode != x && W.appendChild(M.createTextNode(e + " {" + t + "}"));
				}

				function E(e, t) {
					if (!V) return;
					var n = t ? "visible" : "hidden";
					U && m(e) ? m(e).style.visibility = n : w("#" + e, "visibility:" + n);
				}

				function S(e) {
					var t = /[\\\"<>\.;]/,
						n = t.exec(e) != null;
					return n && typeof encodeURIComponent != x ? encodeURIComponent(e) : e;
				}
				var x = "undefined",
					T = "object",
					N = "Shockwave Flash",
					C = "ShockwaveFlash.ShockwaveFlash",
					k = "application/x-shockwave-flash",
					L = "SWFObjectExprInst",
					A = "onreadystatechange",
					O = window,
					M = document,
					_ = navigator,
					D = !1,
					P = [r],
					H = [],
					B = [],
					j = [],
					F, I, q, R, U = !1,
					z = !1,
					W, X, V = !0,
					$ = function() {
						var e = typeof M.getElementById != x && typeof M.getElementsByTagName != x && typeof M.createElement != x,
							t = _.userAgent.toLowerCase(),
							n = _.platform.toLowerCase(),
							r = n ? /win/.test(n) : /win/.test(t),
							i = n ? /mac/.test(n) : /mac/.test(t),
							s = /webkit/.test(t) ? parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
							o = !1,
							u = [0, 0, 0],
							a = null;
						if (typeof _.plugins != x && typeof _.plugins[N] == T) a = _.plugins[N].description, a && (typeof _.mimeTypes == x || !_.mimeTypes[k] || !!_.mimeTypes[k].enabledPlugin) && (D = !0, o = !1, a = a.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), u[0] = parseInt(a.replace(/^(.*)\..*$/, "$1"), 10), u[1] = parseInt(a.replace(/^.*\.(.*)\s.*$/, "$1"), 10), u[2] = /[a-zA-Z]/.test(a) ? parseInt(a.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
						else if (typeof O.ActiveXObject != x) try {
							var f = new ActiveXObject(C);
							f && (a = f.GetVariable("$version"), a && (o = !0, a = a.split(" ")[1].split(","), u = [parseInt(a[0], 10), parseInt(a[1], 10), parseInt(a[2], 10)]));
						} catch (l) {}
						return {
							w3: e,
							pv: u,
							wk: s,
							ie: o,
							win: r,
							mac: i
						};
					}(),
					J = function() {
						if (!$.w3) return;
						(typeof M.readyState != x && M.readyState == "complete" || typeof M.readyState == x && (M.getElementsByTagName("body")[0] || M.body)) && e(), U || (typeof M.addEventListener != x && M.addEventListener("DOMContentLoaded", e, !1), $.ie && $.win && (M.attachEvent(A, function() {
							M.readyState == "complete" && (M.detachEvent(A, arguments.callee), e());
						}), O == top && function() {
							if (U) return;
							try {
								M.documentElement.doScroll("left");
							} catch (t) {
								setTimeout(arguments.callee, 0);
								return;
							}
							e();
						}()), $.wk && function() {
							if (U) return;
							if (!/loaded|complete/.test(M.readyState)) {
								setTimeout(arguments.callee, 0);
								return;
							}
							e();
						}(), n(e));
					}(),
					K = function() {
						$.ie && $.win && window.attachEvent("onunload", function() {
							var e = j.length;
							for (var t = 0; t < e; t++) j[t][0].detachEvent(j[t][1], j[t][2]);
							var n = B.length;
							for (var r = 0; r < n; r++) d(B[r]);
							for (var s in $) $[s] = null;
							$ = null;
							for (var o in i) i[o] = null;
							i = null;
						});
					}();
				return {
					registerObject: function(e, t, n, r) {
						if ($.w3 && e && t) {
							var i = {};
							i.id = e, i.swfVersion = t, i.expressInstall = n, i.callbackFn = r, H[H.length] = i, E(e, !1);
						} else r && r({
							success: !1,
							id: e
						});
					},
					getObjectById: function(e) {
						if ($.w3) return u(e);
					},
					embedSWF: function(e, n, r, i, s, o, u, l, c, p) {
						var d = {
							success: !1,
							id: n
						};
						$.w3 && !($.wk && $.wk < 312) && e && n && r && i && s ? (E(n, !1), t(function() {
							r += "", i += "";
							var t = {};
							if (c && typeof c === T)
								for (var v in c) t[v] = c[v];
							t.data = e, t.width = r, t.height = i;
							var m = {};
							if (l && typeof l === T)
								for (var g in l) m[g] = l[g];
							if (u && typeof u === T)
								for (var y in u) typeof m.flashvars != x ? m.flashvars += "&" + y + "=" + u[y] : m.flashvars = y + "=" + u[y];
							if (b(s)) {
								var w = h(t, m, n);
								t.id == n && E(n, !0), d.success = !0, d.ref = w;
							} else {
								if (o && a()) {
									t.data = o, f(t, m, n, p);
									return;
								}
								E(n, !0);
							}
							p && p(d);
						})) : p && p(d);
					},
					switchOffAutoHideShow: function() {
						V = !1;
					},
					ua: $,
					getFlashPlayerVersion: function() {
						return {
							major: $.pv[0],
							minor: $.pv[1],
							release: $.pv[2]
						};
					},
					hasFlashPlayerVersion: b,
					createSWF: function(e, t, n) {
						return $.w3 ? h(e, t, n) : undefined;
					},
					showExpressInstall: function(e, t, n, r) {
						$.w3 && a() && f(e, t, n, r);
					},
					removeSWF: function(e) {
						$.w3 && d(e);
					},
					createCSS: function(e, t, n, r) {
						$.w3 && w(e, t, n, r);
					},
					addDomLoadEvent: t,
					addLoadEvent: n,
					getQueryParamValue: function(e) {
						var t = M.location.search || M.location.hash;
						if (t) {
							/\?/.test(t) && (t = t.split("?")[1]);
							if (e == null) return S(t);
							var n = t.split("&");
							for (var r = 0; r < n.length; r++)
								if (n[r].substring(0, n[r].indexOf("=")) == e) return S(n[r].substring(n[r].indexOf("=") + 1));
						}
						return "";
					},
					expressInstallCallback: function() {
						if (z) {
							var e = m(L);
							e && F && (e.parentNode.replaceChild(F, e), I && (E(I, !0), $.ie && $.win && (F.style.display = "block")), q && q(R)), z = !1;
						}
					}
				};
			}();
		return i;
	} catch (s) {
		wx.jslog({
			src: "biz_web/lib/swfobject.js"
		}, s);
	}
});
define("biz_web/lib/video.js", [], function(require, exports, module) {
	try {
		var report_time_begin = +(new Date);
		document.createElement("video"), document.createElement("audio"), document.createElement("track");
		var vjs = function(e, t, n) {
				var r;
				if (typeof e == "string") {
					e.indexOf("#") === 0 && (e = e.slice(1));
					if (vjs.players[e]) return vjs.players[e];
					r = vjs.el(e);
				} else r = e;
				if (!r || !r.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)");
				return r.player || new vjs.Player(r, t, n);
			},
			videojs = vjs;
		window.videojs = window.vjs = vjs, vjs.CDN_VERSION = "4.1", vjs.ACCESS_PROTOCOL = "https:" == document.location.protocol ? "https://" : "http://", vjs.options = {
			techOrder: ["html5", "flash"],
			html5: {},
			flash: {},
			width: 300,
			height: 150,
			defaultVolume: 0,
			children: {
				mediaLoader: {},
				posterImage: {},
				textTrackDisplay: {},
				loadingSpinner: {},
				bigPlayButton: {},
				controlBar: {}
			}
		}, vjs.CDN_VERSION !== "GENERATED_CDN_VSN" && (videojs.options.flash.swf = vjs.ACCESS_PROTOCOL + "vjs.zencdn.net/" + vjs.CDN_VERSION + "/video-js.swf"), vjs.players = {}, vjs.CoreObject = vjs.CoreObject = function() {}, vjs.CoreObject.extend = function(e) {
			var t, n;
			e = e || {}, t = e.init || e.init || this.prototype.init || this.prototype.init || function() {}, n = function() {
				t.apply(this, arguments);
			}, n.prototype = vjs.obj.create(this.prototype), n.prototype.constructor = n, n.extend = vjs.CoreObject.extend, n.create = vjs.CoreObject.create;
			for (var r in e) e.hasOwnProperty(r) && (n.prototype[r] = e[r]);
			return n;
		}, vjs.CoreObject.create = function() {
			var e = vjs.obj.create(this.prototype);
			return this.apply(e, arguments), e;
		}, vjs.on = function(e, t, n) {
			var r = vjs.getData(e);
			r.handlers || (r.handlers = {}), r.handlers[t] || (r.handlers[t] = []), n.guid || (n.guid = vjs.guid++), r.handlers[t].push(n), r.dispatcher || (r.disabled = !1, r.dispatcher = function(t) {
				if (r.disabled) return;
				t = vjs.fixEvent(t);
				var n = r.handlers[t.type];
				if (n) {
					var i = n.slice(0);
					for (var s = 0, o = i.length; s < o; s++) {
						if (t.isImmediatePropagationStopped()) break;
						i[s].call(e, t);
					}
				}
			}), r.handlers[t].length == 1 && (document.addEventListener ? e.addEventListener(t, r.dispatcher, !1) : document.attachEvent && e.attachEvent("on" + t, r.dispatcher));
		}, vjs.off = function(e, t, n) {
			if (!vjs.hasData(e)) return;
			var r = vjs.getData(e);
			if (!r.handlers) return;
			var i = function(t) {
				r.handlers[t] = [], vjs.cleanUpEvents(e, t);
			};
			if (!t) {
				for (var s in r.handlers) i(s);
				return;
			}
			var o = r.handlers[t];
			if (!o) return;
			if (!n) {
				i(t);
				return;
			}
			if (n.guid)
				for (var u = 0; u < o.length; u++) o[u].guid === n.guid && o.splice(u--, 1);
			vjs.cleanUpEvents(e, t);
		}, vjs.cleanUpEvents = function(e, t) {
			var n = vjs.getData(e);
			n.handlers[t].length === 0 && (delete n.handlers[t], document.removeEventListener ? e.removeEventListener(t, n.dispatcher, !1) : document.detachEvent && e.detachEvent("on" + t, n.dispatcher)), vjs.isEmpty(n.handlers) && (delete n.handlers, delete n.dispatcher, delete n.disabled), vjs.isEmpty(n) && vjs.removeData(e);
		}, vjs.fixEvent = function(e) {
			function t() {
				return !0;
			}

			function n() {
				return !1;
			}
			if (!e || !e.isPropagationStopped) {
				var r = e || window.event;
				e = {};
				for (var i in r) i !== "layerX" && i !== "layerY" && (e[i] = r[i]);
				e.target || (e.target = e.srcElement || document), e.relatedTarget = e.fromElement === e.target ? e.toElement : e.fromElement, e.preventDefault = function() {
					r.preventDefault && r.preventDefault(), e.returnValue = !1, e.isDefaultPrevented = t;
				}, e.isDefaultPrevented = n, e.stopPropagation = function() {
					r.stopPropagation && r.stopPropagation(), e.cancelBubble = !0, e.isPropagationStopped = t;
				}, e.isPropagationStopped = n, e.stopImmediatePropagation = function() {
					r.stopImmediatePropagation && r.stopImmediatePropagation(), e.isImmediatePropagationStopped = t, e.stopPropagation();
				}, e.isImmediatePropagationStopped = n;
				if (e.clientX != null) {
					var s = document.documentElement,
						o = document.body;
					e.pageX = e.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), e.pageY = e.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0);
				}
				e.which = e.charCode || e.keyCode, e.button != null && (e.button = e.button & 1 ? 0 : e.button & 4 ? 1 : e.button & 2 ? 2 : 0);
			}
			return e;
		}, vjs.trigger = function(e, t) {
			var n = vjs.hasData(e) ? vjs.getData(e) : {},
				r = e.parentNode || e.ownerDocument;
			typeof t == "string" && (t = {
				type: t,
				target: e
			}), t = vjs.fixEvent(t), n.dispatcher && n.dispatcher.call(e, t);
			if (r && !t.isPropagationStopped()) vjs.trigger(r, t);
			else if (!r && !t.isDefaultPrevented()) {
				var i = vjs.getData(t.target);
				t.target[t.type] && (i.disabled = !0, typeof t.target[t.type] == "function" && t.target[t.type](), i.disabled = !1);
			}
			return !t.isDefaultPrevented();
		}, vjs.one = function(e, t, n) {
			vjs.on(e, t, function() {
				vjs.off(e, t, arguments.callee), n.apply(this, arguments);
			});
		};
		var hasOwnProp = Object.prototype.hasOwnProperty;
		vjs.createEl = function(e, t) {
				var n = document.createElement(e || "div");
				for (var r in t) hasOwnProp.call(t, r) && (r.indexOf("aria-") !== -1 || r == "role" ? n.setAttribute(r, t[r]) : n[r] = t[r]);
				return n;
			}, vjs.capitalize = function(e) {
				return e.charAt(0).toUpperCase() + e.slice(1);
			}, vjs.obj = {}, vjs.obj.create = Object.create || function(e) {
				function t() {}
				return t.prototype = e, new t;
			}, vjs.obj.each = function(e, t, n) {
				for (var r in e) hasOwnProp.call(e, r) && t.call(n || this, r, e[r]);
			}, vjs.obj.merge = function(e, t) {
				if (!t) return e;
				for (var n in t) hasOwnProp.call(t, n) && (e[n] = t[n]);
				return e;
			}, vjs.obj.deepMerge = function(e, t) {
				var n, r, i, s;
				s = "[object Object]", e = vjs.obj.copy(e);
				for (n in t) hasOwnProp.call(t, n) && (r = e[n], i = t[n], vjs.obj.isPlain(r) && vjs.obj.isPlain(i) ? e[n] = vjs.obj.deepMerge(r, i) : e[n] = t[n]);
				return e;
			}, vjs.obj.copy = function(e) {
				return vjs.obj.merge({}, e);
			}, vjs.obj.isPlain = function(e) {
				return !!e && typeof e == "object" && e.toString() === "[object Object]" && e.constructor === Object;
			}, vjs.bind = function(e, t, n) {
				t.guid || (t.guid = vjs.guid++);
				var r = function() {
					return t.apply(e, arguments);
				};
				return r.guid = n ? n + "_" + t.guid : t.guid, r;
			}, vjs.cache = {}, vjs.guid = 1, vjs.expando = "vdata" + (new Date).getTime(), vjs.getData = function(e) {
				var t = e[vjs.expando];
				return t || (t = e[vjs.expando] = vjs.guid++, vjs.cache[t] = {}), vjs.cache[t];
			}, vjs.hasData = function(e) {
				var t = e[vjs.expando];
				return !!t && !vjs.isEmpty(vjs.cache[t]);
			}, vjs.removeData = function(e) {
				var t = e[vjs.expando];
				if (!t) return;
				delete vjs.cache[t];
				try {
					delete e[vjs.expando];
				} catch (n) {
					e.removeAttribute ? e.removeAttribute(vjs.expando) : e[vjs.expando] = null;
				}
			}, vjs.isEmpty = function(e) {
				for (var t in e)
					if (e[t] !== null) return !1;
				return !0;
			}, vjs.addClass = function(e, t) {
				(" " + e.className + " ").indexOf(" " + t + " ") == -1 && (e.className = e.className === "" ? t : e.className + " " + t);
			}, vjs.removeClass = function(e, t) {
				if (e.className.indexOf(t) == -1) return;
				var n = e.className.split(" ");
				for (var r = n.length - 1; r >= 0; r--) n[r] === t && n.splice(r, 1);
				e.className = n.join(" ");
			}, vjs.TEST_VID = vjs.createEl("video"), vjs.USER_AGENT = navigator.userAgent, vjs.IS_IPHONE = /iPhone/i.test(vjs.USER_AGENT), vjs.IS_IPAD = /iPad/i.test(vjs.USER_AGENT), vjs.IS_IPOD = /iPod/i.test(vjs.USER_AGENT), vjs.IS_IOS = vjs.IS_IPHONE || vjs.IS_IPAD || vjs.IS_IPOD, vjs.IOS_VERSION = function() {
				var e = vjs.USER_AGENT.match(/OS (\d+)_/i);
				if (e && e[1]) return e[1];
			}(), vjs.IS_ANDROID = /Android/i.test(vjs.USER_AGENT), vjs.ANDROID_VERSION = function() {
				var e = vjs.USER_AGENT.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),
					t, n;
				return e ? (t = e[1] && parseFloat(e[1]), n = e[2] && parseFloat(e[2]), t && n ? parseFloat(e[1] + "." + e[2]) : t ? t : null) : null;
			}(), vjs.IS_OLD_ANDROID = vjs.IS_ANDROID && /webkit/i.test(vjs.USER_AGENT) && vjs.ANDROID_VERSION < 2.3, vjs.IS_FIREFOX = /Firefox/i.test(vjs.USER_AGENT), vjs.IS_CHROME = /Chrome/i.test(vjs.USER_AGENT), vjs.getAttributeValues = function(e) {
				var t = {},
					n = ",autoplay,controls,loop,muted,default,";
				if (e && e.attributes && e.attributes.length > 0) {
					var r = e.attributes,
						i, s;
					for (var o = r.length - 1; o >= 0; o--) {
						i = r[o].name, s = r[o].value;
						if (typeof e[i] == "boolean" || n.indexOf("," + i + ",") !== -1) s = s !== null ? !0 : !1;
						t[i] = s;
					}
				}
				return t;
			}, vjs.getComputedDimension = function(e, t) {
				var n = "";
				return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "").getPropertyValue(t) : e.currentStyle && (n = e["client" + t.substr(0, 1).toUpperCase() + t.substr(1)] + "px"), n;
			}, vjs.insertFirst = function(e, t) {
				t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e);
			}, vjs.support = {}, vjs.el = function(e) {
				return e.indexOf("#") === 0 && (e = e.slice(1)), document.getElementById(e);
			}, vjs.formatTime = function(e, t) {
				t = t || e;
				var n = Math.floor(e % 60),
					r = Math.floor(e / 60 % 60),
					i = Math.floor(e / 3600),
					s = Math.floor(t / 60 % 60),
					o = Math.floor(t / 3600);
				return i = i > 0 || o > 0 ? i + ":" : "", r = ((i || s >= 10) && r < 10 ? "0" + r : r) + ":", n = n < 10 ? "0" + n : n, i + r + n;
			}, vjs.blockTextSelection = function() {
				document.body.focus(), document.onselectstart = function() {
					return !1;
				};
			}, vjs.unblockTextSelection = function() {
				document.onselectstart = function() {
					return !0;
				};
			}, vjs.trim = function(e) {
				return e.toString().replace(/^\s+/, "").replace(/\s+$/, "");
			}, vjs.round = function(e, t) {
				return t || (t = 0), Math.round(e * Math.pow(10, t)) / Math.pow(10, t);
			}, vjs.createTimeRange = function(e, t) {
				return {
					length: 1,
					start: function() {
						return e;
					},
					end: function() {
						return t;
					}
				};
			}, vjs.get = function(e, t, n) {
				var r = e.indexOf("file:") === 0 || window.location.href.indexOf("file:") === 0 && e.indexOf("http") === -1;
				typeof XMLHttpRequest == "undefined" && (window.XMLHttpRequest = function() {
					try {
						return new window.ActiveXObject("Msxml2.XMLHTTP.6.0");
					} catch (e) {}
					try {
						return new window.ActiveXObject("Msxml2.XMLHTTP.3.0");
					} catch (t) {}
					try {
						return new window.ActiveXObject("Msxml2.XMLHTTP");
					} catch (n) {}
					throw new Error("This browser does not support XMLHttpRequest.");
				});
				var i = new XMLHttpRequest;
				try {
					i.open("GET", e);
				} catch (s) {
					n(s);
				}
				i.onreadystatechange = function() {
					i.readyState === 4 && (i.status === 200 || r && i.status === 0 ? t(i.responseText) : n && n());
				};
				try {
					i.send();
				} catch (s) {
					n && n(s);
				}
			}, vjs.setLocalStorage = function(e, t) {
				try {
					var n = window.localStorage || !1;
					if (!n) return;
					n[e] = t;
				} catch (r) {
					r.code == 22 || r.code == 1014 ? vjs.log("LocalStorage Full (VideoJS)", r) : r.code == 18 ? vjs.log("LocalStorage not allowed (VideoJS)", r) : vjs.log("LocalStorage Error (VideoJS)", r);
				}
			}, vjs.getAbsoluteURL = function(e) {
				return e.match(/^https?:\/\//) || (e = vjs.createEl("div", {
					innerHTML: '<a href="' + e + '">x</a>'
				}).firstChild.href), e;
			}, vjs.log = function() {
				vjs.log.history = vjs.log.history || [], vjs.log.history.push(arguments), window.console && window.console.log(Array.prototype.slice.call(arguments));
			}, vjs.findPosition = function(e) {
				var t, n, r, i, s, o, u, a, f;
				return e.getBoundingClientRect && e.parentNode && (t = e.getBoundingClientRect()), t ? (n = document.documentElement, r = document.body, i = n.clientLeft || r.clientLeft || 0, s = window.pageXOffset || r.scrollLeft, o = t.left + s - i, u = n.clientTop || r.clientTop || 0, a = window.pageYOffset || r.scrollTop, f = t.top + a - u, {
					left: o,
					top: f
				}) : {
					left: 0,
					top: 0
				};
			}, vjs.Component = vjs.CoreObject.extend({
				init: function(e, t, n) {
					this.player_ = e, this.options_ = vjs.obj.copy(this.options_), t = this.options(t), this.id_ = t.id || (t.el && t.el.id ? t.el.id : e.id() + "_component_" + vjs.guid++), this.name_ = t.name || null, this.el_ = t.el || this.createEl(), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, this.initChildren(), this.ready(n);
				}
			}), vjs.Component.prototype.dispose = function() {
				if (this.children_)
					for (var e = this.children_.length - 1; e >= 0; e--) this.children_[e].dispose && this.children_[e].dispose();
				this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.off(), this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), vjs.removeData(this.el_), this.el_ = null;
			}, vjs.Component.prototype.player_, vjs.Component.prototype.player = function() {
				return this.player_;
			}, vjs.Component.prototype.options_, vjs.Component.prototype.options = function(e) {
				return e === undefined ? this.options_ : this.options_ = vjs.obj.deepMerge(this.options_, e);
			}, vjs.Component.prototype.el_, vjs.Component.prototype.createEl = function(e, t) {
				return vjs.createEl(e, t);
			}, vjs.Component.prototype.el = function() {
				return this.el_;
			}, vjs.Component.prototype.contentEl_, vjs.Component.prototype.contentEl = function() {
				return this.contentEl_ || this.el_;
			}, vjs.Component.prototype.id_, vjs.Component.prototype.id = function() {
				return this.id_;
			}, vjs.Component.prototype.name_, vjs.Component.prototype.name = function() {
				return this.name_;
			}, vjs.Component.prototype.children_, vjs.Component.prototype.children = function() {
				return this.children_;
			}, vjs.Component.prototype.childIndex_, vjs.Component.prototype.getChildById = function(e) {
				return this.childIndex_[e];
			}, vjs.Component.prototype.childNameIndex_, vjs.Component.prototype.getChild = function(e) {
				return this.childNameIndex_[e];
			}, vjs.Component.prototype.addChild = function(e, t) {
				var n, r, i, s;
				return typeof e == "string" ? (i = e, t = t || {}, r = t.componentClass || vjs.capitalize(i), t.name = i, n = new window.videojs[r](this.player_ || this, t)) : n = e, this.children_.push(n), typeof n.id == "function" && (this.childIndex_[n.id()] = n), i = i || n.name && n.name(), i && (this.childNameIndex_[i] = n), typeof n.el == "function" && n.el() && this.contentEl().appendChild(n.el()), n;
			}, vjs.Component.prototype.removeChild = function(e) {
				typeof e == "string" && (e = this.getChild(e));
				if (!e || !this.children_) return;
				var t = !1;
				for (var n = this.children_.length - 1; n >= 0; n--)
					if (this.children_[n] === e) {
						t = !0, this.children_.splice(n, 1);
						break;
					}
				if (!t) return;
				this.childIndex_[e.id] = null, this.childNameIndex_[e.name] = null;
				var r = e.el();
				r && r.parentNode === this.contentEl() && this.contentEl().removeChild(e.el());
			}, vjs.Component.prototype.initChildren = function() {
				var e = this.options_;
				if (e && e.children) {
					var t = this;
					vjs.obj.each(e.children, function(e, n) {
						if (n === !1) return;
						var r = function() {
							t[e] = t.addChild(e, n);
						};
						n.loadEvent || r();
					});
				}
			}, vjs.Component.prototype.buildCSSClass = function() {
				return "";
			}, vjs.Component.prototype.on = function(e, t) {
				return vjs.on(this.el_, e, vjs.bind(this, t)), this;
			}, vjs.Component.prototype.off = function(e, t) {
				return vjs.off(this.el_, e, t), this;
			}, vjs.Component.prototype.one = function(e, t) {
				return vjs.one(this.el_, e, vjs.bind(this, t)), this;
			}, vjs.Component.prototype.trigger = function(e, t) {
				return vjs.trigger(this.el_, e, t), this;
			}, vjs.Component.prototype.isReady_, vjs.Component.prototype.isReadyOnInitFinish_ = !0, vjs.Component.prototype.readyQueue_, vjs.Component.prototype.ready = function(e) {
				return e && (this.isReady_ ? e.call(this) : (this.readyQueue_ === undefined && (this.readyQueue_ = []), this.readyQueue_.push(e))), this;
			}, vjs.Component.prototype.triggerReady = function() {
				this.isReady_ = !0;
				var e = this.readyQueue_;
				if (e && e.length > 0) {
					for (var t = 0, n = e.length; t < n; t++) e[t].call(this);
					this.readyQueue_ = [], this.trigger("ready");
				}
			}, vjs.Component.prototype.addClass = function(e) {
				return vjs.addClass(this.el_, e), this;
			}, vjs.Component.prototype.removeClass = function(e) {
				return vjs.removeClass(this.el_, e), this;
			}, vjs.Component.prototype.show = function() {
				return this.el_.style.display = "block", this;
			}, vjs.Component.prototype.hide = function() {
				return this.el_.style.display = "none", this;
			}, vjs.Component.prototype.fadeIn = function() {
				return this.removeClass("vjs-fade-out"), this.addClass("vjs-fade-in"), this;
			}, vjs.Component.prototype.fadeOut = function() {
				return this.removeClass("vjs-fade-in"), this.addClass("vjs-fade-out"), this;
			}, vjs.Component.prototype.lockShowing = function() {
				return this.addClass("vjs-lock-showing"), this;
			}, vjs.Component.prototype.unlockShowing = function() {
				return this.removeClass("vjs-lock-showing"), this;
			}, vjs.Component.prototype.disable = function() {
				this.hide(), this.show = function() {}, this.fadeIn = function() {};
			}, vjs.Component.prototype.width = function(e, t) {
				return this.dimension("width", e, t);
			}, vjs.Component.prototype.height = function(e, t) {
				return this.dimension("height", e, t);
			}, vjs.Component.prototype.dimensions = function(e, t) {
				return this.width(e, !0).height(t);
			}, vjs.Component.prototype.dimension = function(e, t, n) {
				if (t !== undefined) return ("" + t).indexOf("%") !== -1 || ("" + t).indexOf("px") !== -1 ? this.el_.style[e] = t : t === "auto" ? this.el_.style[e] = "" : this.el_.style[e] = t + "px", n || this.trigger("resize"), this;
				if (!this.el_) return 0;
				var r = this.el_.style[e],
					i = r.indexOf("px");
				return i !== -1 ? parseInt(r.slice(0, i), 10) : parseInt(this.el_["offset" + vjs.capitalize(e)], 10);
			}, vjs.Button = vjs.Component.extend({
				init: function(e, t) {
					vjs.Component.call(this, e, t);
					var n = !1;
					this.on("touchstart", function() {
						n = !0;
					}), this.on("touchmove", function() {
						n = !1;
					});
					var r = this;
					this.on("touchend", function(e) {
						n && r.onClick(e), e.preventDefault(), e.stopPropagation();
					}), this.on("click", this.onClick), this.on("focus", this.onFocus), this.on("blur", this.onBlur);
				}
			}), vjs.Button.prototype.createEl = function(e, t) {
				return t = vjs.obj.merge({
					className: this.buildCSSClass(),
					innerHTML: '<div class="vjs-control-content"><span class="vjs-control-text">' + (this.buttonText || "Need Text") + "</span></div>",
					role: "button",
					"aria-live": "polite",
					tabIndex: 0
				}, t), vjs.Component.prototype.createEl.call(this, e, t);
			}, vjs.Button.prototype.buildCSSClass = function() {
				return "vjs-control " + vjs.Component.prototype.buildCSSClass.call(this);
			}, vjs.Button.prototype.onClick = function() {}, vjs.Button.prototype.onFocus = function() {
				vjs.on(document, "keyup", vjs.bind(this, this.onKeyPress));
			}, vjs.Button.prototype.onKeyPress = function(e) {
				if (e.which == 32 || e.which == 13) e.preventDefault(), this.onClick();
			}, vjs.Button.prototype.onBlur = function() {
				vjs.off(document, "keyup", vjs.bind(this, this.onKeyPress));
			}, vjs.Slider = vjs.Component.extend({
				init: function(e, t) {
					vjs.Component.call(this, e, t), this.bar = this.getChild(this.options_.barName), this.handle = this.getChild(this.options_.handleName), e.on(this.playerEvent, vjs.bind(this, this.update)), this.on("mousedown", this.onMouseDown), this.on("touchstart", this.onMouseDown), this.on("focus", this.onFocus), this.on("blur", this.onBlur), this.on("click", this.onClick), this.player_.on("controlsvisible", vjs.bind(this, this.update)), e.ready(vjs.bind(this, this.update)), this.boundEvents = {};
				}
			}), vjs.Slider.prototype.createEl = function(e, t) {
				return t = t || {}, t.className = t.className + " vjs-slider", t = vjs.obj.merge({
					role: "slider",
					"aria-valuenow": 0,
					"aria-valuemin": 0,
					"aria-valuemax": 100,
					tabIndex: 0
				}, t), vjs.Component.prototype.createEl.call(this, e, t);
			}, vjs.Slider.prototype.onMouseDown = function(e) {
				e.preventDefault(), vjs.blockTextSelection(), this.boundEvents.move = vjs.bind(this, this.onMouseMove), this.boundEvents.end = vjs.bind(this, this.onMouseUp), vjs.on(document, "mousemove", this.boundEvents.move), vjs.on(document, "mouseup", this.boundEvents.end), vjs.on(document, "touchmove", this.boundEvents.move), vjs.on(document, "touchend", this.boundEvents.end), this.onMouseMove(e);
			}, vjs.Slider.prototype.onMouseUp = function() {
				vjs.unblockTextSelection(), vjs.off(document, "mousemove", this.boundEvents.move, !1), vjs.off(document, "mouseup", this.boundEvents.end, !1), vjs.off(document, "touchmove", this.boundEvents.move, !1), vjs.off(document, "touchend", this.boundEvents.end, !1), this.update();
			}, vjs.Slider.prototype.update = function() {
				if (!this.el_) return;
				var e, t = this.getPercent(),
					n = this.handle,
					r = this.bar;
				isNaN(t) && (t = 0), e = t;
				if (n) {
					var i = this.el_,
						s = i.offsetWidth,
						o = n.el().offsetWidth,
						u = o ? o / s : 0,
						a = 1 - u,
						f = t * a;
					e = f + u / 2, n.el().style.left = vjs.round(f * 100, 2) + "%";
				}
				r.el().style.width = vjs.round(e * 100, 2) + "%";
			}, vjs.Slider.prototype.calculateDistance = function(e) {
				var t, n, r, i, s, o, u, a, f;
				t = this.el_, n = vjs.findPosition(t), s = o = t.offsetWidth, u = this.handle;
				if (this.options_.vertical) {
					i = n.top, e.changedTouches ? f = e.changedTouches[0].pageY : f = e.pageY;
					if (u) {
						var l = u.el().offsetHeight;
						i += l / 2, o -= l;
					}
					return Math.max(0, Math.min(1, (i - f + o) / o));
				}
				r = n.left, e.changedTouches ? a = e.changedTouches[0].pageX : a = e.pageX;
				if (u) {
					var c = u.el().offsetWidth;
					r += c / 2, s -= c;
				}
				return Math.max(0, Math.min(1, (a - r) / s));
			}, vjs.Slider.prototype.onFocus = function() {
				vjs.on(document, "keyup", vjs.bind(this, this.onKeyPress));
			}, vjs.Slider.prototype.onKeyPress = function(e) {
				e.which == 37 ? (e.preventDefault(), this.stepBack()) : e.which == 39 && (e.preventDefault(), this.stepForward());
			}, vjs.Slider.prototype.onBlur = function() {
				vjs.off(document, "keyup", vjs.bind(this, this.onKeyPress));
			}, vjs.Slider.prototype.onClick = function(e) {
				e.stopImmediatePropagation(), e.preventDefault();
			}, vjs.SliderHandle = vjs.Component.extend(), vjs.SliderHandle.prototype.defaultValue = 0, vjs.SliderHandle.prototype.createEl = function(e, t) {
				return t = t || {}, t.className = t.className + " vjs-slider-handle", t = vjs.obj.merge({
					innerHTML: '<span class="vjs-control-text">' + this.defaultValue + "</span>"
				}, t), vjs.Component.prototype.createEl.call(this, "div", t);
			}, vjs.Menu = vjs.Component.extend(), vjs.Menu.prototype.addItem = function(e) {
				this.addChild(e), e.on("click", vjs.bind(this, function() {
					this.unlockShowing();
				}));
			}, vjs.Menu.prototype.createEl = function() {
				var e = this.options().contentElType || "ul";
				this.contentEl_ = vjs.createEl(e, {
					className: "vjs-menu-content"
				});
				var t = vjs.Component.prototype.createEl.call(this, "div", {
					append: this.contentEl_,
					className: "vjs-menu"
				});
				return t.appendChild(this.contentEl_), vjs.on(t, "click", function(e) {
					e.preventDefault(), e.stopImmediatePropagation();
				}), t;
			}, vjs.MenuItem = vjs.Button.extend({
				init: function(e, t) {
					vjs.Button.call(this, e, t), this.selected(t.selected);
				}
			}), vjs.MenuItem.prototype.createEl = function(e, t) {
				return vjs.Button.prototype.createEl.call(this, "li", vjs.obj.merge({
					className: "vjs-menu-item",
					innerHTML: this.options_.label
				}, t));
			}, vjs.MenuItem.prototype.onClick = function() {
				this.selected(!0);
			}, vjs.MenuItem.prototype.selected = function(e) {
				e ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-selected", !0)) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-selected", !1));
			}, vjs.MenuButton = vjs.Button.extend({
				init: function(e, t) {
					vjs.Button.call(this, e, t), this.menu = this.createMenu(), this.addChild(this.menu), this.items && this.items.length === 0 && this.hide(), this.on("keyup", this.onKeyPress), this.el_.setAttribute("aria-haspopup", !0), this.el_.setAttribute("role", "button");
				}
			}), vjs.MenuButton.prototype.buttonPressed_ = !1, vjs.MenuButton.prototype.createMenu = function() {
				var e = new vjs.Menu(this.player_);
				this.options().title && e.el().appendChild(vjs.createEl("li", {
					className: "vjs-menu-title",
					innerHTML: vjs.capitalize(this.kind_),
					tabindex: -1
				})), this.items = this.createItems();
				if (this.items)
					for (var t = 0; t < this.items.length; t++) e.addItem(this.items[t]);
				return e;
			}, vjs.MenuButton.prototype.createItems = function() {}, vjs.MenuButton.prototype.buildCSSClass = function() {
				return this.className + " vjs-menu-button " + vjs.Button.prototype.buildCSSClass.call(this);
			}, vjs.MenuButton.prototype.onFocus = function() {}, vjs.MenuButton.prototype.onBlur = function() {}, vjs.MenuButton.prototype.onClick = function() {
				this.one("mouseout", vjs.bind(this, function() {
					this.menu.unlockShowing(), this.el_.blur();
				})), this.buttonPressed_ ? this.unpressButton() : this.pressButton();
			}, vjs.MenuButton.prototype.onKeyPress = function(e) {
				e.preventDefault(), e.which == 32 || e.which == 13 ? this.buttonPressed_ ? this.unpressButton() : this.pressButton() : e.which == 27 && this.buttonPressed_ && this.unpressButton();
			}, vjs.MenuButton.prototype.pressButton = function() {
				this.buttonPressed_ = !0, this.menu.lockShowing(), this.el_.setAttribute("aria-pressed", !0), this.items && this.items.length > 0 && this.items[0].el().focus();
			}, vjs.MenuButton.prototype.unpressButton = function() {
				this.buttonPressed_ = !1, this.menu.unlockShowing(), this.el_.setAttribute("aria-pressed", !1);
			}, vjs.Player = vjs.Component.extend({
				init: function(e, t, n) {
					this.tag = e, t = vjs.obj.merge(this.getTagSettings(e), t), this.cache_ = {}, this.poster_ = t.poster, this.controls_ = t.controls, t.customControlsOnMobile !== !0 && (vjs.IS_IOS || vjs.IS_ANDROID) ? (e.controls = t.controls, this.controls_ = !1) : e.controls = !1, vjs.Component.call(this, this, t, n), this.one("play", function(e) {
						var t = {
								type: "firstplay",
								target: this.el_
							},
							n = vjs.trigger(this.el_, t);
						n || (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation());
					}), this.on("ended", this.onEnded), this.on("play", this.onPlay), this.on("firstplay", this.onFirstPlay), this.on("pause", this.onPause), this.on("progress", this.onProgress), this.on("durationchange", this.onDurationChange), this.on("error", this.onError), this.on("fullscreenchange", this.onFullscreenChange), vjs.players[this.id_] = this, t.plugins && vjs.obj.each(t.plugins, function(e, t) {
						this[e](t);
					}, this);
				}
			}), vjs.Player.prototype.options_ = vjs.options, vjs.Player.prototype.dispose = function() {
				vjs.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.stopTrackingProgress(), this.stopTrackingCurrentTime(), this.tech && this.tech.dispose(), vjs.Component.prototype.dispose.call(this);
			}, vjs.Player.prototype.getTagSettings = function(e) {
				var t = {
					sources: [],
					tracks: []
				};
				vjs.obj.merge(t, vjs.getAttributeValues(e));
				if (e.hasChildNodes()) {
					var n, r, i, s, o;
					n = e.childNodes;
					for (s = 0, o = n.length; s < o; s++) r = n[s], i = r.nodeName.toLowerCase(), i === "source" ? t.sources.push(vjs.getAttributeValues(r)) : i === "track" && t.tracks.push(vjs.getAttributeValues(r));
				}
				return t;
			}, vjs.Player.prototype.createEl = function() {
				var e = this.el_ = vjs.Component.prototype.createEl.call(this, "div"),
					t = this.tag;
				t.removeAttribute("width"), t.removeAttribute("height");
				if (t.hasChildNodes()) {
					var n, r, i, s, o, u;
					n = t.childNodes, r = n.length, u = [];
					while (r--) s = n[r], o = s.nodeName.toLowerCase(), (o === "source" || o === "track") && u.push(s);
					for (i = 0; i < u.length; i++) t.removeChild(u[i]);
				}
				return t.id = t.id || "vjs_video_" + vjs.guid++, e.id = t.id, e.className = t.className, t.id += "_html5_api", t.className = "vjs-tech", t.player = e.player = this, this.addClass("vjs-paused"), this.width(this.options_.width, !0), this.height(this.options_.height, !0), t.parentNode && t.parentNode.insertBefore(e, t), vjs.insertFirst(t, e), e;
			}, vjs.Player.prototype.loadTech = function(e, t) {
				this.tech ? this.unloadTech() : e !== "Html5" && this.tag && (this.el_.removeChild(this.tag), this.tag.player = null, this.tag = null), this.techName = e, this.isReady_ = !1;
				var n = function() {
						this.player_.triggerReady(), this.features.progressEvents || this.player_.manualProgressOn(), this.features.timeupdateEvents || this.player_.manualTimeUpdatesOn();
					},
					r = vjs.obj.merge({
						source: t,
						parentEl: this.el_
					}, this.options_[e.toLowerCase()]);
				t && (t.src == this.cache_.src && this.cache_.currentTime > 0 && (r.startTime = this.cache_.currentTime), this.cache_.src = t.src), this.tech = new window.videojs[e](this, r), this.tech.ready(n);
			}, vjs.Player.prototype.unloadTech = function() {
				this.isReady_ = !1, this.tech.dispose(), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), this.tech = !1;
			}, vjs.Player.prototype.manualProgressOn = function() {
				this.manualProgress = !0, this.trackProgress(), this.tech.one("progress", function() {
					this.features.progressEvents = !0, this.player_.manualProgressOff();
				});
			}, vjs.Player.prototype.manualProgressOff = function() {
				this.manualProgress = !1, this.stopTrackingProgress();
			}, vjs.Player.prototype.trackProgress = function() {
				this.progressInterval = setInterval(vjs.bind(this, function() {
					this.cache_.bufferEnd < this.buffered().end(0) ? this.trigger("progress") : this.bufferedPercent() == 1 && (this.stopTrackingProgress(), this.trigger("progress"));
				}), 500);
			}, vjs.Player.prototype.stopTrackingProgress = function() {
				clearInterval(this.progressInterval);
			}, vjs.Player.prototype.manualTimeUpdatesOn = function() {
				this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime), this.on("pause", this.stopTrackingCurrentTime), this.tech.one("timeupdate", function() {
					this.features.timeupdateEvents = !0, this.player_.manualTimeUpdatesOff();
				});
			}, vjs.Player.prototype.manualTimeUpdatesOff = function() {
				this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime), this.off("pause", this.stopTrackingCurrentTime);
			}, vjs.Player.prototype.trackCurrentTime = function() {
				this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = setInterval(vjs.bind(this, function() {
					this.trigger("timeupdate");
				}), 250);
			}, vjs.Player.prototype.stopTrackingCurrentTime = function() {
				clearInterval(this.currentTimeInterval);
			}, vjs.Player.prototype.onEnded = function() {
				this.options_.loop && (this.currentTime(0), this.play());
			}, vjs.Player.prototype.onPlay = function() {
				vjs.removeClass(this.el_, "vjs-paused"), vjs.addClass(this.el_, "vjs-playing");
			}, vjs.Player.prototype.onFirstPlay = function() {
				this.options_.starttime && this.currentTime(this.options_.starttime);
			}, vjs.Player.prototype.onPause = function() {
				vjs.removeClass(this.el_, "vjs-playing"), vjs.addClass(this.el_, "vjs-paused");
			}, vjs.Player.prototype.onProgress = function() {
				this.bufferedPercent() == 1 && this.trigger("loadedalldata");
			}, vjs.Player.prototype.onDurationChange = function() {
				this.duration(this.techGet("duration"));
			}, vjs.Player.prototype.onError = function(e) {
				vjs.log("Video Error", e);
			}, vjs.Player.prototype.onFullscreenChange = function() {
				this.isFullScreen ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen");
			}, vjs.Player.prototype.cache_, vjs.Player.prototype.getCache = function() {
				return this.cache_;
			}, vjs.Player.prototype.techCall = function(e, t) {
				if (this.tech && !this.tech.isReady_) this.tech.ready(function() {
					this[e](t);
				});
				else try {
					this.tech[e](t);
				} catch (n) {
					throw vjs.log(n), n;
				}
			}, vjs.Player.prototype.techGet = function(e) {
				if (this.tech.isReady_) try {
					return this.tech[e]();
				} catch (t) {
					throw this.tech[e] === undefined ? vjs.log("Video.js: " + e + " method not defined for " + this.techName + " playback technology.", t) : t.name == "TypeError" ? (vjs.log("Video.js: " + e + " unavailable on " + this.techName + " playback technology element.", t), this.tech.isReady_ = !1) : vjs.log(t), t;
				}
				return;
			}, vjs.Player.prototype.play = function() {
				return this.techCall("play"), this;
			}, vjs.Player.prototype.pause = function() {
				return this.techCall("pause"), this;
			}, vjs.Player.prototype.paused = function() {
				return this.techGet("paused") === !1 ? !1 : !0;
			}, vjs.Player.prototype.currentTime = function(e) {
				return e !== undefined ? (this.cache_.lastSetCurrentTime = e, this.techCall("setCurrentTime", e), this.manualTimeUpdates && this.trigger("timeupdate"), this) : this.cache_.currentTime = this.techGet("currentTime") || 0;
			}, vjs.Player.prototype.duration = function(e) {
				return e !== undefined ? (this.cache_.duration = parseFloat(e), this) : this.cache_.duration;
			}, vjs.Player.prototype.remainingTime = function() {
				return this.duration() - this.currentTime();
			}, vjs.Player.prototype.buffered = function() {
				var e = this.techGet("buffered"),
					t = 0,
					n = this.cache_.bufferEnd = this.cache_.bufferEnd || 0;
				return e && e.length > 0 && e.end(0) !== n && (n = e.end(0), this.cache_.bufferEnd = n), vjs.createTimeRange(t, n);
			}, vjs.Player.prototype.bufferedPercent = function() {
				return this.duration() ? this.buffered().end(0) / this.duration() : 0;
			}, vjs.Player.prototype.volume = function(e) {
				var t;
				return e !== undefined ? (t = Math.max(0, Math.min(1, parseFloat(e))), this.cache_.volume = t, this.techCall("setVolume", t), vjs.setLocalStorage("volume", t), this) : (t = parseFloat(this.techGet("volume")), isNaN(t) ? 1 : t);
			}, vjs.Player.prototype.muted = function(e) {
				return e !== undefined ? (this.techCall("setMuted", e), this) : this.techGet("muted") || !1;
			}, vjs.Player.prototype.supportsFullScreen = function() {
				return this.techGet("supportsFullScreen") || !1;
			}, vjs.Player.prototype.requestFullScreen = function() {
				var e = vjs.support.requestFullScreen;
				return this.isFullScreen = !0, e ? (vjs.on(document, e.eventName, vjs.bind(this, function(t) {
					this.isFullScreen = document[e.isFullScreen], this.isFullScreen === !1 && vjs.off(document, e.eventName, arguments.callee), this.trigger("fullscreenchange");
				})), this.el_[e.requestFn]()) : this.tech.supportsFullScreen() ? this.techCall("enterFullScreen") : (this.enterFullWindow(), this.trigger("fullscreenchange")), this;
			}, vjs.Player.prototype.cancelFullScreen = function() {
				var e = vjs.support.requestFullScreen;
				return this.isFullScreen = !1, e ? document[e.cancelFn]() : this.tech.supportsFullScreen() ? this.techCall("exitFullScreen") : (this.exitFullWindow(), this.trigger("fullscreenchange")), this;
			}, vjs.Player.prototype.enterFullWindow = function() {
				this.isFullWindow = !0, this.docOrigOverflow = document.documentElement.style.overflow, vjs.on(document, "keydown", vjs.bind(this, this.fullWindowOnEscKey)), document.documentElement.style.overflow = "hidden", vjs.addClass(document.body, "vjs-full-window"), this.trigger("enterFullWindow");
			}, vjs.Player.prototype.fullWindowOnEscKey = function(e) {
				e.keyCode === 27 && (this.isFullScreen === !0 ? this.cancelFullScreen() : this.exitFullWindow());
			}, vjs.Player.prototype.exitFullWindow = function() {
				this.isFullWindow = !1, vjs.off(document, "keydown", this.fullWindowOnEscKey), document.documentElement.style.overflow = this.docOrigOverflow, vjs.removeClass(document.body, "vjs-full-window"), this.trigger("exitFullWindow");
			}, vjs.Player.prototype.selectSource = function(e) {
				for (var t = 0, n = this.options_.techOrder; t < n.length; t++) {
					var r = vjs.capitalize(n[t]),
						i = window.videojs[r];
					if (i.isSupported())
						for (var s = 0, o = e; s < o.length; s++) {
							var u = o[s];
							if (i.canPlaySource(u)) return {
								source: u,
								tech: r
							};
						}
				}
				return !1;
			}, vjs.Player.prototype.src = function(e) {
				if (e instanceof Array) {
					var t = this.selectSource(e),
						n;
					t ? (e = t.source, n = t.tech, n == this.techName ? this.src(e) : this.loadTech(n, e)) : this.el_.appendChild(vjs.createEl("p", {
						innerHTML: 'Sorry, no compatible source and playback technology were found for this video. Try using another browser like <a href="http://bit.ly/ccMUEC">Chrome</a> or download the latest <a href="http://adobe.ly/mwfN1">Adobe Flash Player</a>.'
					}));
				} else e instanceof Object ? window.videojs[this.techName].canPlaySource(e) ? this.src(e.src) : this.src([e]) : (this.cache_.src = e, this.isReady_ ? (this.techCall("src", e), this.options_["preload"] == "auto" && this.load(), this.options_.autoplay && this.play()) : this.ready(function() {
					this.src(e);
				}));
				return this;
			}, vjs.Player.prototype.load = function() {
				return this.techCall("load"), this;
			}, vjs.Player.prototype.currentSrc = function() {
				return this.techGet("currentSrc") || this.cache_.src || "";
			}, vjs.Player.prototype.preload = function(e) {
				return e !== undefined ? (this.techCall("setPreload", e), this.options_.preload = e, this) : this.techGet("preload");
			}, vjs.Player.prototype.autoplay = function(e) {
				return e !== undefined ? (this.techCall("setAutoplay", e), this.options_.autoplay = e, this) : this.techGet("autoplay", e);
			}, vjs.Player.prototype.loop = function(e) {
				return e !== undefined ? (this.techCall("setLoop", e), this.options_.loop = e, this) : this.techGet("loop");
			}, vjs.Player.prototype.poster_, vjs.Player.prototype.poster = function(e) {
				return e !== undefined && (this.poster_ = e), this.poster_;
			}, vjs.Player.prototype.controls_, vjs.Player.prototype.controls = function(e) {
				return e !== undefined && this.controls_ !== e && (this.controls_ = !!e, this.trigger("controlschange")), this.controls_;
			}, vjs.Player.prototype.error = function() {
				return this.techGet("error");
			}, vjs.Player.prototype.ended = function() {
				return this.techGet("ended");
			},
			function() {
				var e, t, n;
				n = document.createElement("div"), t = {}, n.cancelFullscreen !== undefined ? (t.requestFn = "requestFullscreen", t.cancelFn = "exitFullscreen", t.eventName = "fullscreenchange", t.isFullScreen = "fullScreen") : (document.mozCancelFullScreen ? (e = "moz", t.isFullScreen = e + "FullScreen") : (e = "webkit", t.isFullScreen = e + "IsFullScreen"), n[e + "RequestFullScreen"] && (t.requestFn = e + "RequestFullScreen", t.cancelFn = e + "CancelFullScreen"), t.eventName = e + "fullscreenchange"), document[t.cancelFn] && (vjs.support.requestFullScreen = t);
			}(), vjs.ControlBar = vjs.Component.extend({
				init: function(e, t) {
					vjs.Component.call(this, e, t), e.controls() || this.disable(), e.one("play", vjs.bind(this, function() {
						var e, t = vjs.bind(this, this.fadeIn),
							n = vjs.bind(this, this.fadeOut);
						this.fadeIn(), "ontouchstart" in window || (this.player_.on("mouseover", t), this.player_.on("mouseout", n), this.player_.on("pause", vjs.bind(this, this.lockShowing)), this.player_.on("play", vjs.bind(this, this.unlockShowing))), e = !1, this.player_.on("touchstart", function() {
							e = !0;
						}), this.player_.on("touchmove", function() {
							e = !1;
						}), this.player_.on("touchend", vjs.bind(this, function(t) {
							var n;
							e && (n = this.el().className.search("fade-in"), n !== -1 ? this.fadeOut() : this.fadeIn()), e = !1, this.player_.paused() || t.preventDefault();
						}));
					}));
				}
			}), vjs.ControlBar.prototype.options_ = {
				loadEvent: "play",
				children: {
					playToggle: {},
					currentTimeDisplay: {},
					timeDivider: {},
					durationDisplay: {},
					remainingTimeDisplay: {},
					progressControl: {},
					fullscreenToggle: {},
					volumeControl: {},
					muteToggle: {}
				}
			}, vjs.ControlBar.prototype.createEl = function() {
				return vjs.createEl("div", {
					className: "vjs-control-bar"
				});
			}, vjs.ControlBar.prototype.fadeIn = function() {
				vjs.Component.prototype.fadeIn.call(this), this.player_.trigger("controlsvisible");
			}, vjs.ControlBar.prototype.fadeOut = function() {
				vjs.Component.prototype.fadeOut.call(this), this.player_.trigger("controlshidden");
			}, vjs.PlayToggle = vjs.Button.extend({
				init: function(e, t) {
					vjs.Button.call(this, e, t), e.on("play", vjs.bind(this, this.onPlay)), e.on("pause", vjs.bind(this, this.onPause));
				}
			}), vjs.PlayToggle.prototype.buttonText = "Play", vjs.PlayToggle.prototype.buildCSSClass = function() {
				return "vjs-play-control " + vjs.Button.prototype.buildCSSClass.call(this);
			}, vjs.PlayToggle.prototype.onClick = function() {
				this.player_.paused() ? this.player_.play() : this.player_.pause();
			}, vjs.PlayToggle.prototype.onPlay = function() {
				vjs.removeClass(this.el_, "vjs-paused"), vjs.addClass(this.el_, "vjs-playing"), this.el_.children[0].children[0].innerHTML = "Pause";
			}, vjs.PlayToggle.prototype.onPause = function() {
				vjs.removeClass(this.el_, "vjs-playing"), vjs.addClass(this.el_, "vjs-paused"), this.el_.children[0].children[0].innerHTML = "Play";
			}, vjs.CurrentTimeDisplay = vjs.Component.extend({
				init: function(e, t) {
					vjs.Component.call(this, e, t), e.on("timeupdate", vjs.bind(this, this.updateContent));
				}
			}), vjs.CurrentTimeDisplay.prototype.createEl = function() {
				var e = vjs.Component.prototype.createEl.call(this, "div", {
					className: "vjs-current-time vjs-time-controls vjs-control"
				});
				return this.content = vjs.createEl("div", {
					className: "vjs-current-time-display",
					innerHTML: '<span class="vjs-control-text">Current Time </span>0:00',
					"aria-live": "off"
				}), e.appendChild(vjs.createEl("div").appendChild(this.content)), e;
			}, vjs.CurrentTimeDisplay.prototype.updateContent = function() {
				var e = this.player_.scrubbing ? this.player_.getCache().currentTime : this.player_.currentTime();
				this.content.innerHTML = '<span class="vjs-control-text">Current Time </span>' + vjs.formatTime(e, this.player_.duration());
			}, vjs.DurationDisplay = vjs.Component.extend({
				init: function(e, t) {
					vjs.Component.call(this, e, t), e.on("timeupdate", vjs.bind(this, this.updateContent));
				}
			}), vjs.DurationDisplay.prototype.createEl = function() {
				var e = vjs.Component.prototype.createEl.call(this, "div", {
					className: "vjs-duration vjs-time-controls vjs-control"
				});
				return this.content = vjs.createEl("div", {
					className: "vjs-duration-display",
					innerHTML: '<span class="vjs-control-text">Duration Time </span>0:00',
					"aria-live": "off"
				}), e.appendChild(vjs.createEl("div").appendChild(this.content)), e;
			}, vjs.DurationDisplay.prototype.updateContent = function() {
				this.player_.duration() && (this.content.innerHTML = '<span class="vjs-control-text">Duration Time </span>' + vjs.formatTime(this.player_.duration()));
			}, vjs.TimeDivider = vjs.Component.extend({
				init: function(e, t) {
					vjs.Component.call(this, e, t);
				}
			}), vjs.TimeDivider.prototype.createEl = function() {
				return vjs.Component.prototype.createEl.call(this, "div", {
					className: "vjs-time-divider",
					innerHTML: "<div><span>/</span></div>"
				});
			}, vjs.RemainingTimeDisplay = vjs.Component.extend({
				init: function(e, t) {
					vjs.Component.call(this, e, t), e.on("timeupdate", vjs.bind(this, this.updateContent));
				}
			}), vjs.RemainingTimeDisplay.prototype.createEl = function() {
				var e = vjs.Component.prototype.createEl.call(this, "div", {
					className: "vjs-remaining-time vjs-time-controls vjs-control"
				});
				return this.content = vjs.createEl("div", {
					className: "vjs-remaining-time-display",
					innerHTML: '<span class="vjs-control-text">Remaining Time </span>-0:00',
					"aria-live": "off"
				}), e.appendChild(vjs.createEl("div").appendChild(this.content)), e;
			}, vjs.RemainingTimeDisplay.prototype.updateContent = function() {
				this.player_.duration() && this.player_.duration() && (this.content.innerHTML = '<span class="vjs-control-text">Remaining Time </span>-' + vjs.formatTime(this.player_.remainingTime()));
			}, vjs.FullscreenToggle = vjs.Button.extend({
				init: function(e, t) {
					vjs.Button.call(this, e, t);
				}
			}), vjs.FullscreenToggle.prototype.buttonText = "Fullscreen", vjs.FullscreenToggle.prototype.buildCSSClass = function() {
				return "vjs-fullscreen-control " + vjs.Button.prototype.buildCSSClass.call(this);
			}, vjs.FullscreenToggle.prototype.onClick = function() {
				this.player_.isFullScreen ? (this.player_.cancelFullScreen(), this.el_.children[0].children[0].innerHTML = "Fullscreen") : (this.player_.requestFullScreen(), this.el_.children[0].children[0].innerHTML = "Non-Fullscreen");
			}, vjs.ProgressControl = vjs.Component.extend({
				init: function(e, t) {
					vjs.Component.call(this, e, t);
				}
			}), vjs.ProgressControl.prototype.options_ = {
				children: {
					seekBar: {}
				}
			}, vjs.ProgressControl.prototype.createEl = function() {
				return vjs.Component.prototype.createEl.call(this, "div", {
					className: "vjs-progress-control vjs-control"
				});
			}, vjs.SeekBar = vjs.Slider.extend({
				init: function(e, t) {
					vjs.Slider.call(this, e, t), e.on("timeupdate", vjs.bind(this, this.updateARIAAttributes)), e.ready(vjs.bind(this, this.updateARIAAttributes));
				}
			}), vjs.SeekBar.prototype.options_ = {
				children: {
					loadProgressBar: {},
					playProgressBar: {},
					seekHandle: {}
				},
				barName: "playProgressBar",
				handleName: "seekHandle"
			}, vjs.SeekBar.prototype.playerEvent = "timeupdate", vjs.SeekBar.prototype.createEl = function() {
				return vjs.Slider.prototype.createEl.call(this, "div", {
					className: "vjs-progress-holder",
					"aria-label": "video progress bar"
				});
			}, vjs.SeekBar.prototype.updateARIAAttributes = function() {
				var e = this.player_.scrubbing ? this.player_.getCache().currentTime : this.player_.currentTime();
				this.el_.setAttribute("aria-valuenow", vjs.round(this.getPercent() * 100, 2)), this.el_.setAttribute("aria-valuetext", vjs.formatTime(e, this.player_.duration()));
			}, vjs.SeekBar.prototype.getPercent = function() {
				return this.player_.currentTime() / this.player_.duration();
			}, vjs.SeekBar.prototype.onMouseDown = function(e) {
				vjs.Slider.prototype.onMouseDown.call(this, e), this.player_.scrubbing = !0, this.videoWasPlaying = !this.player_.paused(), this.player_.pause();
			}, vjs.SeekBar.prototype.onMouseMove = function(e) {
				var t = this.calculateDistance(e) * this.player_.duration();
				t == this.player_.duration() && (t -= .1), this.player_.currentTime(t);
			}, vjs.SeekBar.prototype.onMouseUp = function(e) {
				vjs.Slider.prototype.onMouseUp.call(this, e), this.player_.scrubbing = !1, this.videoWasPlaying && this.player_.play();
			}, vjs.SeekBar.prototype.stepForward = function() {
				this.player_.currentTime(this.player_.currentTime() + 5);
			}, vjs.SeekBar.prototype.stepBack = function() {
				this.player_.currentTime(this.player_.currentTime() - 5);
			}, vjs.LoadProgressBar = vjs.Component.extend({
				init: function(e, t) {
					vjs.Component.call(this, e, t), e.on("progress", vjs.bind(this, this.update));
				}
			}), vjs.LoadProgressBar.prototype.createEl = function() {
				return vjs.Component.prototype.createEl.call(this, "div", {
					className: "vjs-load-progress",
					innerHTML: '<span class="vjs-control-text">Loaded: 0%</span>'
				});
			}, vjs.LoadProgressBar.prototype.update = function() {
				this.el_.style && (this.el_.style.width = vjs.round(this.player_.bufferedPercent() * 100, 2) + "%");
			}, vjs.PlayProgressBar = vjs.Component.extend({
				init: function(e, t) {
					vjs.Component.call(this, e, t);
				}
			}), vjs.PlayProgressBar.prototype.createEl = function() {
				return vjs.Component.prototype.createEl.call(this, "div", {
					className: "vjs-play-progress",
					innerHTML: '<span class="vjs-control-text">Progress: 0%</span>'
				});
			}, vjs.SeekHandle = vjs.SliderHandle.extend(), vjs.SeekHandle.prototype.defaultValue = "00:00", vjs.SeekHandle.prototype.createEl = function() {
				return vjs.SliderHandle.prototype.createEl.call(this, "div", {
					className: "vjs-seek-handle"
				});
			}, vjs.VolumeControl = vjs.Component.extend({
				init: function(e, t) {
					vjs.Component.call(this, e, t), e.tech && e.tech.features && e.tech.features.volumeControl === !1 && this.addClass("vjs-hidden"), e.on("loadstart", vjs.bind(this, function() {
						e.tech.features && e.tech.features.volumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden");
					}));
				}
			}), vjs.VolumeControl.prototype.options_ = {
				children: {
					volumeBar: {}
				}
			}, vjs.VolumeControl.prototype.createEl = function() {
				return vjs.Component.prototype.createEl.call(this, "div", {
					className: "vjs-volume-control vjs-control"
				});
			}, vjs.VolumeBar = vjs.Slider.extend({
				init: function(e, t) {
					vjs.Slider.call(this, e, t), e.on("volumechange", vjs.bind(this, this.updateARIAAttributes)), e.ready(vjs.bind(this, this.updateARIAAttributes)), setTimeout(vjs.bind(this, this.update), 0);
				}
			}), vjs.VolumeBar.prototype.updateARIAAttributes = function() {
				this.el_.setAttribute("aria-valuenow", vjs.round(this.player_.volume() * 100, 2)), this.el_.setAttribute("aria-valuetext", vjs.round(this.player_.volume() * 100, 2) + "%");
			}, vjs.VolumeBar.prototype.options_ = {
				children: {
					volumeLevel: {},
					volumeHandle: {}
				},
				barName: "volumeLevel",
				handleName: "volumeHandle"
			}, vjs.VolumeBar.prototype.playerEvent = "volumechange", vjs.VolumeBar.prototype.createEl = function() {
				return vjs.Slider.prototype.createEl.call(this, "div", {
					className: "vjs-volume-bar",
					"aria-label": "volume level"
				});
			}, vjs.VolumeBar.prototype.onMouseMove = function(e) {
				this.player_.volume(this.calculateDistance(e));
			}, vjs.VolumeBar.prototype.getPercent = function() {
				return this.player_.muted() ? 0 : this.player_.volume();
			}, vjs.VolumeBar.prototype.stepForward = function() {
				this.player_.volume(this.player_.volume() + .1);
			}, vjs.VolumeBar.prototype.stepBack = function() {
				this.player_.volume(this.player_.volume() - .1);
			}, vjs.VolumeLevel = vjs.Component.extend({
				init: function(e, t) {
					vjs.Component.call(this, e, t);
				}
			}), vjs.VolumeLevel.prototype.createEl = function() {
				return vjs.Component.prototype.createEl.call(this, "div", {
					className: "vjs-volume-level",
					innerHTML: '<span class="vjs-control-text"></span>'
				});
			}, vjs.VolumeHandle = vjs.SliderHandle.extend(), vjs.VolumeHandle.prototype.defaultValue = "00:00", vjs.VolumeHandle.prototype.createEl = function() {
				return vjs.SliderHandle.prototype.createEl.call(this, "div", {
					className: "vjs-volume-handle"
				});
			}, vjs.MuteToggle = vjs.Button.extend({
				init: function(e, t) {
					vjs.Button.call(this, e, t), e.on("volumechange", vjs.bind(this, this.update)), e.tech && e.tech.features && e.tech.features.volumeControl === !1 && this.addClass("vjs-hidden"), e.on("loadstart", vjs.bind(this, function() {
						e.tech.features && e.tech.features.volumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden");
					}));
				}
			}), vjs.MuteToggle.prototype.createEl = function() {
				return vjs.Button.prototype.createEl.call(this, "div", {
					className: "vjs-mute-control vjs-control",
					innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
				});
			}, vjs.MuteToggle.prototype.onClick = function() {
				this.player_.muted(this.player_.muted() ? !1 : !0);
			}, vjs.MuteToggle.prototype.update = function() {
				var e = this.player_.volume(),
					t = 3;
				e === 0 || this.player_.muted() ? t = 0 : e < .33 ? t = 1 : e < .67 && (t = 2), this.player_.muted() ? this.el_.children[0].children[0].innerHTML != "Unmute" && (this.el_.children[0].children[0].innerHTML = "Unmute") : this.el_.children[0].children[0].innerHTML != "Mute" && (this.el_.children[0].children[0].innerHTML = "Mute");
				for (var n = 0; n < 4; n++) vjs.removeClass(this.el_, "vjs-vol-" + n);
				vjs.addClass(this.el_, "vjs-vol-" + t);
			}, vjs.VolumeMenuButton = vjs.MenuButton.extend({
				init: function(e, t) {
					vjs.MenuButton.call(this, e, t), e.on("volumechange", vjs.bind(this, this.update)), e.tech && e.tech.features && e.tech.features.volumeControl === !1 && this.addClass("vjs-hidden"), e.on("loadstart", vjs.bind(this, function() {
						e.tech.features && e.tech.features.volumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden");
					})), this.addClass("vjs-menu-button");
				}
			}), vjs.VolumeMenuButton.prototype.createMenu = function() {
				var e = new vjs.Menu(this.player_, {
						contentElType: "div"
					}),
					t = new vjs.VolumeBar(this.player_, vjs.obj.merge({
						vertical: !0
					}, this.options_.volumeBar));
				return e.addChild(t), e;
			}, vjs.VolumeMenuButton.prototype.onClick = function() {
				vjs.MuteToggle.prototype.onClick.call(this), vjs.MenuButton.prototype.onClick.call(this);
			}, vjs.VolumeMenuButton.prototype.createEl = function() {
				return vjs.Button.prototype.createEl.call(this, "div", {
					className: "vjs-volume-menu-button vjs-menu-button vjs-control",
					innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
				});
			}, vjs.VolumeMenuButton.prototype.update = vjs.MuteToggle.prototype.update, vjs.PosterImage = vjs.Button.extend({
				init: function(e, t) {
					vjs.Button.call(this, e, t), (!e.poster() || !e.controls()) && this.hide(), e.on("play", vjs.bind(this, this.hide));
				}
			}), vjs.PosterImage.prototype.createEl = function() {
				var e = vjs.createEl("div", {
						className: "vjs-poster",
						tabIndex: -1
					}),
					t = this.player_.poster();
				return t && ("backgroundSize" in e.style ? e.style.backgroundImage = 'url("' + t + '")' : e.appendChild(vjs.createEl("img", {
					src: t
				}))), e;
			}, vjs.PosterImage.prototype.onClick = function() {
				this.player_.play();
			}, vjs.LoadingSpinner = vjs.Component.extend({
				init: function(e, t) {
					vjs.Component.call(this, e, t), e.on("canplay", vjs.bind(this, this.hide)), e.on("canplaythrough", vjs.bind(this, this.hide)), e.on("playing", vjs.bind(this, this.hide)), e.on("seeked", vjs.bind(this, this.hide)), e.on("seeking", vjs.bind(this, this.show)), e.on("seeked", vjs.bind(this, this.hide)), e.on("error", vjs.bind(this, this.show)), e.on("waiting", vjs.bind(this, this.show));
				}
			}), vjs.LoadingSpinner.prototype.createEl = function() {
				return vjs.Component.prototype.createEl.call(this, "div", {
					className: "vjs-loading-spinner"
				});
			}, vjs.BigPlayButton = vjs.Button.extend({
				init: function(e, t) {
					vjs.Button.call(this, e, t), e.controls() || this.hide(), e.on("play", vjs.bind(this, this.hide));
				}
			}), vjs.BigPlayButton.prototype.createEl = function() {
				return vjs.Button.prototype.createEl.call(this, "div", {
					className: "vjs-big-play-button",
					innerHTML: "<span></span>",
					"aria-label": "play video"
				});
			}, vjs.BigPlayButton.prototype.onClick = function() {
				this.player_.play();
			}, vjs.MediaTechController = vjs.Component.extend({
				init: function(e, t, n) {
					vjs.Component.call(this, e, t, n);
				}
			}), vjs.MediaTechController.prototype.onClick = function() {
				return vjs.IS_ANDROID ? function() {} : function() {
					this.player_.controls() && (this.player_.paused() ? this.player_.play() : this.player_.pause());
				};
			}(), vjs.MediaTechController.prototype.features = {
				volumeControl: !0,
				fullscreenResize: !1,
				progressEvents: !1,
				timeupdateEvents: !1
			}, vjs.media = {}, vjs.media.ApiMethods = "play,pause,paused,currentTime,setCurrentTime,duration,buffered,volume,setVolume,muted,setMuted,width,height,supportsFullScreen,enterFullScreen,src,load,currentSrc,preload,setPreload,autoplay,setAutoplay,loop,setLoop,error,networkState,readyState,seeking,initialTime,startOffsetTime,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks,defaultPlaybackRate,playbackRate,mediaGroup,controller,controls,defaultMuted".split(",");

		function createMethod(e) {
			return function() {
				throw new Error('The "' + e + "\" method is not available on the playback technology's API");
			};
		}
		for (var i = vjs.media.ApiMethods.length - 1; i >= 0; i--) {
			var methodName = vjs.media.ApiMethods[i];
			vjs.MediaTechController.prototype[vjs.media.ApiMethods[i]] = createMethod(methodName);
		}
		vjs.Html5 = vjs.MediaTechController.extend({
			init: function(e, t, n) {
				this.features.volumeControl = vjs.Html5.canControlVolume(), this.features.movingMediaElementInDOM = !vjs.IS_IOS, this.features.fullscreenResize = !0, vjs.MediaTechController.call(this, e, t, n);
				var r = t.source;
				r && this.el_.currentSrc == r.src ? e.trigger("loadstart") : r && (this.el_.src = r.src), e.ready(function() {
					this.tag && this.options_.autoplay && this.paused() && (delete this.tag.poster, this.play());
				}), this.on("click", this.onClick), this.setupTriggers(), this.triggerReady();
			}
		}), vjs.Html5.prototype.dispose = function() {
			vjs.MediaTechController.prototype.dispose.call(this);
		}, vjs.Html5.prototype.createEl = function() {
			var e = this.player_,
				t = e.tag,
				n;
			if (!t || this.features.movingMediaElementInDOM === !1) t ? (t.player = null, e.tag = null, e.el().removeChild(t), t = t.cloneNode(!1)) : t = vjs.createEl("video", {
				id: e.id() + "_html5_api",
				className: "vjs-tech"
			}), t.player = e, vjs.insertFirst(t, e.el());
			var r = ["autoplay", "preload", "loop", "muted"];
			for (var i = r.length - 1; i >= 0; i--) {
				var s = r[i];
				e.options_[s] !== null && (t[s] = e.options_[s]);
			}
			return t;
		}, vjs.Html5.prototype.setupTriggers = function() {
			for (var e = vjs.Html5.Events.length - 1; e >= 0; e--) vjs.on(this.el_, vjs.Html5.Events[e], vjs.bind(this.player_, this.eventHandler));
		}, vjs.Html5.prototype.eventHandler = function(e) {
			this.trigger(e), e.stopPropagation();
		}, vjs.Html5.prototype.play = function() {
			this.el_.play();
		}, vjs.Html5.prototype.pause = function() {
			this.el_.pause();
		}, vjs.Html5.prototype.paused = function() {
			return this.el_.paused;
		}, vjs.Html5.prototype.currentTime = function() {
			return this.el_.currentTime;
		}, vjs.Html5.prototype.setCurrentTime = function(e) {
			try {
				this.el_.currentTime = e;
			} catch (t) {
				vjs.log(t, "Video is not ready. (Video.js)");
			}
		}, vjs.Html5.prototype.duration = function() {
			return this.el_.duration || 0;
		}, vjs.Html5.prototype.buffered = function() {
			return this.el_.buffered;
		}, vjs.Html5.prototype.volume = function() {
			return this.el_.volume;
		}, vjs.Html5.prototype.setVolume = function(e) {
			this.el_.volume = e;
		}, vjs.Html5.prototype.muted = function() {
			return this.el_.muted;
		}, vjs.Html5.prototype.setMuted = function(e) {
			this.el_.muted = e;
		}, vjs.Html5.prototype.width = function() {
			return this.el_.offsetWidth;
		}, vjs.Html5.prototype.height = function() {
			return this.el_.offsetHeight;
		}, vjs.Html5.prototype.supportsFullScreen = function() {
			if (typeof this.el_.webkitEnterFullScreen == "function")
				if (/Android/.test(vjs.USER_AGENT) || !/Chrome|Mac OS X 10.5/.test(vjs.USER_AGENT)) return !0;
			return !1;
		}, vjs.Html5.prototype.enterFullScreen = function() {
			var e = this.el_;
			e.paused && e.networkState <= e.HAVE_METADATA ? (this.el_.play(), setTimeout(function() {
				e.pause(), e.webkitEnterFullScreen();
			}, 0)) : e.webkitEnterFullScreen();
		}, vjs.Html5.prototype.exitFullScreen = function() {
			this.el_.webkitExitFullScreen();
		}, vjs.Html5.prototype.src = function(e) {
			this.el_.src = e;
		}, vjs.Html5.prototype.load = function() {
			this.el_.load();
		}, vjs.Html5.prototype.currentSrc = function() {
			return this.el_.currentSrc;
		}, vjs.Html5.prototype.preload = function() {
			return this.el_.preload;
		}, vjs.Html5.prototype.setPreload = function(e) {
			this.el_.preload = e;
		}, vjs.Html5.prototype.autoplay = function() {
			return this.el_.autoplay;
		}, vjs.Html5.prototype.setAutoplay = function(e) {
			this.el_.autoplay = e;
		}, vjs.Html5.prototype.loop = function() {
			return this.el_.loop;
		}, vjs.Html5.prototype.setLoop = function(e) {
			this.el_.loop = e;
		}, vjs.Html5.prototype.error = function() {
			return this.el_.error;
		}, vjs.Html5.prototype.seeking = function() {
			return this.el_.seeking;
		}, vjs.Html5.prototype.ended = function() {
			return this.el_.ended;
		}, vjs.Html5.prototype.defaultMuted = function() {
			return this.el_.defaultMuted;
		}, vjs.Html5.isSupported = function() {
			return !!vjs.TEST_VID.canPlayType;
		}, vjs.Html5.canPlaySource = function(e) {
			try {
				return !!vjs.TEST_VID.canPlayType(e.type);
			} catch (t) {
				return "";
			}
		}, vjs.Html5.canControlVolume = function() {
			var e = vjs.TEST_VID.volume;
			return vjs.TEST_VID.volume = e / 2 + .1, e !== vjs.TEST_VID.volume;
		}, vjs.Html5.Events = "loadstart,suspend,abort,error,emptied,stalled,loadedmetadata,loadeddata,canplay,canplaythrough,playing,waiting,seeking,seeked,ended,durationchange,timeupdate,progress,play,pause,ratechange,volumechange".split(","), vjs.IS_OLD_ANDROID && (document.createElement("video").constructor.prototype.canPlayType = function(e) {
			return e && e.toLowerCase().indexOf("video/mp4") != -1 ? "maybe" : "";
		}), vjs.Flash = vjs.MediaTechController.extend({
			init: function(e, t, n) {
				vjs.MediaTechController.call(this, e, t, n);
				var r = t.source,
					i = t.parentEl,
					s = this.el_ = vjs.createEl("div", {
						id: e.id() + "_temp_flash"
					}),
					o = e.id() + "_flash_api",
					u = e.options_,
					a = vjs.obj.merge({
						readyFunction: "videojs.Flash.onReady",
						eventProxyFunction: "videojs.Flash.onEvent",
						errorEventProxyFunction: "videojs.Flash.onError",
						autoplay: u.autoplay,
						preload: u.preload,
						loop: u.loop,
						muted: u.muted
					}, t.flashVars),
					f = vjs.obj.merge({
						wmode: "transparent",
						bgcolor: "#000000"
					}, t.params),
					l = vjs.obj.merge({
						id: o,
						name: o,
						"class": "vjs-tech"
					}, t.attributes);
				r && (a.src = encodeURIComponent(vjs.getAbsoluteURL(r.src))), vjs.insertFirst(s, i), t.startTime && this.ready(function() {
					this.load(), this.play(), this.currentTime(t.startTime);
				});
				if (t.iFrameMode === !0 && !vjs.IS_FIREFOX) {
					var c = vjs.createEl("iframe", {
						id: o + "_iframe",
						name: o + "_iframe",
						className: "vjs-tech",
						scrolling: "no",
						marginWidth: 0,
						marginHeight: 0,
						frameBorder: 0
					});
					a.readyFunction = "ready", a.eventProxyFunction = "events", a.errorEventProxyFunction = "errors", vjs.on(c, "load", vjs.bind(this, function() {
						var e, n = c.contentWindow;
						e = c.contentDocument ? c.contentDocument : c.contentWindow.document, e.write(vjs.Flash.getEmbedCode(t.swf, a, f, l)), n.player = this.player_, n.ready = vjs.bind(this.player_, function(t) {
							var n = e.getElementById(t),
								r = this,
								i = r.tech;
							i.el_ = n, vjs.on(n, "click", i.bind(i.onClick)), vjs.Flash.checkReady(i);
						}), n.events = vjs.bind(this.player_, function(e, t) {
							var n = this;
							n && n.techName === "flash" && n.trigger(t);
						}), n.errors = vjs.bind(this.player_, function(e, t) {
							vjs.log("Flash Error", t);
						});
					})), s.parentNode.replaceChild(c, s);
				} else vjs.Flash.embed(t.swf, s, a, f, l);
			}
		}), vjs.Flash.prototype.dispose = function() {
			vjs.MediaTechController.prototype.dispose.call(this);
		}, vjs.Flash.prototype.play = function() {
			this.el_.vjs_play();
		}, vjs.Flash.prototype.pause = function() {
			this.el_.vjs_pause();
		}, vjs.Flash.prototype.src = function(e) {
			e = vjs.getAbsoluteURL(e), this.el_.vjs_src(e);
			if (this.player_.autoplay()) {
				var t = this;
				setTimeout(function() {
					t.play();
				}, 0);
			}
		}, vjs.Flash.prototype.load = function() {
			this.el_.vjs_load();
		}, vjs.Flash.prototype.poster = function() {
			this.el_.vjs_getProperty("poster");
		}, vjs.Flash.prototype.buffered = function() {
			return vjs.createTimeRange(0, this.el_.vjs_getProperty("buffered"));
		}, vjs.Flash.prototype.supportsFullScreen = function() {
			return !1;
		}, vjs.Flash.prototype.enterFullScreen = function() {
			return !1;
		};
		var api = vjs.Flash.prototype,
			readWrite = "preload,currentTime,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted".split(","),
			readOnly = "error,currentSrc,networkState,readyState,seeking,initialTime,duration,startOffsetTime,paused,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks".split(","),
			createSetter = function(e) {
				var t = e.charAt(0).toUpperCase() + e.slice(1);
				api["set" + t] = function(t) {
					return this.el_.vjs_setProperty(e, t);
				};
			},
			createGetter = function(e) {
				api[e] = function() {
					return this.el_.vjs_getProperty(e);
				};
			};
		(function() {
			var e;
			for (e = 0; e < readWrite.length; e++) createGetter(readWrite[e]), createSetter(readWrite[e]);
			for (e = 0; e < readOnly.length; e++) createGetter(readOnly[e]);
		})(), vjs.Flash.isSupported = function() {
			return vjs.Flash.version()[0] >= 10;
		}, vjs.Flash.canPlaySource = function(e) {
			if (e.type in vjs.Flash.formats) return "maybe";
		}, vjs.Flash.formats = {
			"video/flv": "FLV",
			"video/x-flv": "FLV",
			"video/mp4": "MP4",
			"video/m4v": "MP4"
		}, vjs.Flash.onReady = function(e) {
			var t = vjs.el(e),
				n = t.player || t.parentNode.player,
				r = n.tech;
			t.player = n, r.el_ = t, r.on("click", r.onClick), vjs.Flash.checkReady(r);
		}, vjs.Flash.checkReady = function(e) {
			e.el().vjs_getProperty ? e.triggerReady() : setTimeout(function() {
				vjs.Flash.checkReady(e);
			}, 50);
		}, vjs.Flash.onEvent = function(e, t) {
			var n = vjs.el(e).player;
			n.trigger(t);
		}, vjs.Flash.onError = function(e, t) {
			var n = vjs.el(e).player;
			n.trigger("error"), vjs.log("Flash Error", t, e);
		}, vjs.Flash.version = function() {
			var e = "0,0,0";
			try {
				e = (new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1];
			} catch (t) {
				try {
					navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (e = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]);
				} catch (n) {}
			}
			return e.split(",");
		}, vjs.Flash.embed = function(e, t, n, r, i) {
			var s = vjs.Flash.getEmbedCode(e, n, r, i),
				o = vjs.createEl("div", {
					innerHTML: s
				}).childNodes[0],
				u = t.parentNode;
			t.parentNode.replaceChild(o, t);
			var a = u.childNodes[0];
			return setTimeout(function() {
				a.style.display = "block";
			}, 1e3), o;
		}, vjs.Flash.getEmbedCode = function(e, t, n, r) {
			var i = '<object type="application/x-shockwave-flash"',
				s = "",
				o = "",
				u = "";
			return t && vjs.obj.each(t, function(e, t) {
				s += e + "=" + t + "&amp;";
			}), n = vjs.obj.merge({
				movie: e,
				flashvars: s,
				allowScriptAccess: "always",
				allowNetworking: "all"
			}, n), vjs.obj.each(n, function(e, t) {
				o += '<param name="' + e + '" value="' + t + '" />';
			}), r = vjs.obj.merge({
				data: e,
				width: "100%",
				height: "100%"
			}, r), vjs.obj.each(r, function(e, t) {
				u += e + '="' + t + '" ';
			}), i + u + ">" + o + "</object>";
		}, vjs.MediaLoader = vjs.Component.extend({
			init: function(e, t, n) {
				vjs.Component.call(this, e, t, n);
				if (!e.options_.sources || e.options_.sources.length === 0)
					for (var r = 0, i = e.options_.techOrder; r < i.length; r++) {
						var s = vjs.capitalize(i[r]),
							o = window.videojs[s];
						if (o && o.isSupported()) {
							e.loadTech(s);
							break;
						}
					} else e.src(e.options_.sources);
			}
		}), vjs.Player.prototype.textTracks_, vjs.Player.prototype.textTracks = function() {
			return this.textTracks_ = this.textTracks_ || [], this.textTracks_;
		}, vjs.Player.prototype.addTextTrack = function(e, t, n, r) {
			var i = this.textTracks_ = this.textTracks_ || [];
			r = r || {}, r.kind = e, r.label = t, r.language = n;
			var s = vjs.capitalize(e || "subtitles"),
				o = new window.videojs[s + "Track"](this, r);
			return i.push(o), o;
		}, vjs.Player.prototype.addTextTracks = function(e) {
			var t;
			for (var n = 0; n < e.length; n++) t = e[n], this.addTextTrack(t.kind, t.label, t.language, t);
			return this;
		}, vjs.Player.prototype.showTextTrack = function(e, t) {
			var n = this.textTracks_,
				r = 0,
				i = n.length,
				s, o, u;
			for (; r < i; r++) s = n[r], s.id() === e ? (s.show(), o = s) : t && s.kind() == t && s.mode() > 0 && s.disable();
			return u = o ? o.kind() : t ? t : !1, u && this.trigger(u + "trackchange"), this;
		}, vjs.TextTrack = vjs.Component.extend({
			init: function(e, t) {
				vjs.Component.call(this, e, t), this.id_ = t.id || "vjs_" + t.kind + "_" + t.language + "_" + vjs.guid++, this.src_ = t.src, this.dflt_ = t["default"] || t.dflt, this.title_ = t.title, this.language_ = t.srclang, this.label_ = t.label, this.cues_ = [], this.activeCues_ = [], this.readyState_ = 0, this.mode_ = 0, this.player_.on("fullscreenchange", vjs.bind(this, this.adjustFontSize));
			}
		}), vjs.TextTrack.prototype.kind_, vjs.TextTrack.prototype.kind = function() {
			return this.kind_;
		}, vjs.TextTrack.prototype.src_, vjs.TextTrack.prototype.src = function() {
			return this.src_;
		}, vjs.TextTrack.prototype.dflt_, vjs.TextTrack.prototype.dflt = function() {
			return this.dflt_;
		}, vjs.TextTrack.prototype.title_, vjs.TextTrack.prototype.title = function() {
			return this.title_;
		}, vjs.TextTrack.prototype.language_, vjs.TextTrack.prototype.language = function() {
			return this.language_;
		}, vjs.TextTrack.prototype.label_, vjs.TextTrack.prototype.label = function() {
			return this.label_;
		}, vjs.TextTrack.prototype.cues_, vjs.TextTrack.prototype.cues = function() {
			return this.cues_;
		}, vjs.TextTrack.prototype.activeCues_, vjs.TextTrack.prototype.activeCues = function() {
			return this.activeCues_;
		}, vjs.TextTrack.prototype.readyState_, vjs.TextTrack.prototype.readyState = function() {
			return this.readyState_;
		}, vjs.TextTrack.prototype.mode_, vjs.TextTrack.prototype.mode = function() {
			return this.mode_;
		}, vjs.TextTrack.prototype.adjustFontSize = function() {
			this.player_.isFullScreen ? this.el_.style.fontSize = screen.width / this.player_.width() * 1.4 * 100 + "%" : this.el_.style.fontSize = "";
		}, vjs.TextTrack.prototype.createEl = function() {
			return vjs.Component.prototype.createEl.call(this, "div", {
				className: "vjs-" + this.kind_ + " vjs-text-track"
			});
		}, vjs.TextTrack.prototype.show = function() {
			this.activate(), this.mode_ = 2, vjs.Component.prototype.show.call(this);
		}, vjs.TextTrack.prototype.hide = function() {
			this.activate(), this.mode_ = 1, vjs.Component.prototype.hide.call(this);
		}, vjs.TextTrack.prototype.disable = function() {
			this.mode_ == 2 && this.hide(), this.deactivate(), this.mode_ = 0;
		}, vjs.TextTrack.prototype.activate = function() {
			this.readyState_ === 0 && this.load(), this.mode_ === 0 && (this.player_.on("timeupdate", vjs.bind(this, this.update, this.id_)), this.player_.on("ended", vjs.bind(this, this.reset, this.id_)), (this.kind_ === "captions" || this.kind_ === "subtitles") && this.player_.getChild("textTrackDisplay").addChild(this));
		}, vjs.TextTrack.prototype.deactivate = function() {
			this.player_.off("timeupdate", vjs.bind(this, this.update, this.id_)), this.player_.off("ended", vjs.bind(this, this.reset, this.id_)), this.reset(), this.player_.getChild("textTrackDisplay").removeChild(this);
		}, vjs.TextTrack.prototype.load = function() {
			this.readyState_ === 0 && (this.readyState_ = 1, vjs.get(this.src_, vjs.bind(this, this.parseCues), vjs.bind(this, this.onError)));
		}, vjs.TextTrack.prototype.onError = function(e) {
			this.error = e, this.readyState_ = 3, this.trigger("error");
		}, vjs.TextTrack.prototype.parseCues = function(e) {
			var t, n, r, i = e.split("\n"),
				s = "",
				o;
			for (var u = 1, a = i.length; u < a; u++) {
				s = vjs.trim(i[u]);
				if (s) {
					s.indexOf("-->") == -1 ? (o = s, s = vjs.trim(i[++u])) : o = this.cues_.length, t = {
						id: o,
						index: this.cues_.length
					}, n = s.split(" --> "), t.startTime = this.parseCueTime(n[0]), t.endTime = this.parseCueTime(n[1]), r = [];
					while (i[++u] && (s = vjs.trim(i[u]))) r.push(s);
					t.text = r.join("<br/>"), this.cues_.push(t);
				}
			}
			this.readyState_ = 2, this.trigger("loaded");
		}, vjs.TextTrack.prototype.parseCueTime = function(e) {
			var t = e.split(":"),
				n = 0,
				r, i, s, o, u;
			return t.length == 3 ? (r = t[0], i = t[1], s = t[2]) : (r = 0, i = t[0], s = t[1]), s = s.split(/\s+/), o = s.splice(0, 1)[0], o = o.split(/\.|,/), u = parseFloat(o[1]), o = o[0], n += parseFloat(r) * 3600, n += parseFloat(i) * 60, n += parseFloat(o), u && (n += u / 1e3), n;
		}, vjs.TextTrack.prototype.update = function() {
			if (this.cues_.length > 0) {
				var e = this.player_.currentTime();
				if (this.prevChange === undefined || e < this.prevChange || this.nextChange <= e) {
					var t = this.cues_,
						n = this.player_.duration(),
						r = 0,
						i = !1,
						s = [],
						o, u, a, f;
					e >= this.nextChange || this.nextChange === undefined ? f = this.firstActiveIndex !== undefined ? this.firstActiveIndex : 0 : (i = !0, f = this.lastActiveIndex !== undefined ? this.lastActiveIndex : t.length - 1);
					for (;;) {
						a = t[f];
						if (a.endTime <= e) r = Math.max(r, a.endTime), a.active && (a.active = !1);
						else if (e < a.startTime) {
							n = Math.min(n, a.startTime), a.active && (a.active = !1);
							if (!i) break;
						} else i ? (s.splice(0, 0, a), u === undefined && (u = f), o = f) : (s.push(a), o === undefined && (o = f), u = f), n = Math.min(n, a.endTime), r = Math.max(r, a.startTime), a.active = !0;
						if (i) {
							if (f === 0) break;
							f--;
						} else {
							if (f === t.length - 1) break;
							f++;
						}
					}
					this.activeCues_ = s, this.nextChange = n, this.prevChange = r, this.firstActiveIndex = o, this.lastActiveIndex = u, this.updateDisplay(), this.trigger("cuechange");
				}
			}
		}, vjs.TextTrack.prototype.updateDisplay = function() {
			var e = this.activeCues_,
				t = "",
				n = 0,
				r = e.length;
			for (; n < r; n++) t += '<span class="vjs-tt-cue">' + e[n].text + "</span>";
			this.el_.innerHTML = t;
		}, vjs.TextTrack.prototype.reset = function() {
			this.nextChange = 0, this.prevChange = this.player_.duration(), this.firstActiveIndex = 0, this.lastActiveIndex = 0;
		}, vjs.CaptionsTrack = vjs.TextTrack.extend(), vjs.CaptionsTrack.prototype.kind_ = "captions", vjs.SubtitlesTrack = vjs.TextTrack.extend(), vjs.SubtitlesTrack.prototype.kind_ = "subtitles", vjs.ChaptersTrack = vjs.TextTrack.extend(), vjs.ChaptersTrack.prototype.kind_ = "chapters", vjs.TextTrackDisplay = vjs.Component.extend({
			init: function(e, t, n) {
				vjs.Component.call(this, e, t, n), e.options_.tracks && e.options_.tracks.length > 0 && this.player_.addTextTracks(e.options_.tracks);
			}
		}), vjs.TextTrackDisplay.prototype.createEl = function() {
			return vjs.Component.prototype.createEl.call(this, "div", {
				className: "vjs-text-track-display"
			});
		}, vjs.TextTrackMenuItem = vjs.MenuItem.extend({
			init: function(e, t) {
				var n = this.track = t.track;
				t.label = n.label(), t.selected = n.dflt(), vjs.MenuItem.call(this, e, t), this.player_.on(n.kind() + "trackchange", vjs.bind(this, this.update));
			}
		}), vjs.TextTrackMenuItem.prototype.onClick = function() {
			vjs.MenuItem.prototype.onClick.call(this), this.player_.showTextTrack(this.track.id_, this.track.kind());
		}, vjs.TextTrackMenuItem.prototype.update = function() {
			this.selected(this.track.mode() == 2);
		}, vjs.OffTextTrackMenuItem = vjs.TextTrackMenuItem.extend({
			init: function(e, t) {
				t.track = {
					kind: function() {
						return t.kind;
					},
					player: e,
					label: function() {
						return t.kind + " off";
					},
					dflt: function() {
						return !1;
					},
					mode: function() {
						return !1;
					}
				}, vjs.TextTrackMenuItem.call(this, e, t), this.selected(!0);
			}
		}), vjs.OffTextTrackMenuItem.prototype.onClick = function() {
			vjs.TextTrackMenuItem.prototype.onClick.call(this), this.player_.showTextTrack(this.track.id_, this.track.kind());
		}, vjs.OffTextTrackMenuItem.prototype.update = function() {
			var e = this.player_.textTracks(),
				t = 0,
				n = e.length,
				r, i = !0;
			for (; t < n; t++) r = e[t], r.kind() == this.track.kind() && r.mode() == 2 && (i = !1);
			this.selected(i);
		}, vjs.TextTrackButton = vjs.MenuButton.extend({
			init: function(e, t) {
				vjs.MenuButton.call(this, e, t), this.items.length <= 1 && this.hide();
			}
		}), vjs.TextTrackButton.prototype.createItems = function() {
			var e = [],
				t;
			e.push(new vjs.OffTextTrackMenuItem(this.player_, {
				kind: this.kind_
			}));
			for (var n = 0; n < this.player_.textTracks().length; n++) t = this.player_.textTracks()[n], t.kind() === this.kind_ && e.push(new vjs.TextTrackMenuItem(this.player_, {
				track: t
			}));
			return e;
		}, vjs.CaptionsButton = vjs.TextTrackButton.extend({
			init: function(e, t, n) {
				vjs.TextTrackButton.call(this, e, t, n), this.el_.setAttribute("aria-label", "Captions Menu");
			}
		}), vjs.CaptionsButton.prototype.kind_ = "captions", vjs.CaptionsButton.prototype.buttonText = "Captions", vjs.CaptionsButton.prototype.className = "vjs-captions-button", vjs.SubtitlesButton = vjs.TextTrackButton.extend({
			init: function(e, t, n) {
				vjs.TextTrackButton.call(this, e, t, n), this.el_.setAttribute("aria-label", "Subtitles Menu");
			}
		}), vjs.SubtitlesButton.prototype.kind_ = "subtitles", vjs.SubtitlesButton.prototype.buttonText = "Subtitles", vjs.SubtitlesButton.prototype.className = "vjs-subtitles-button", vjs.ChaptersButton = vjs.TextTrackButton.extend({
			init: function(e, t, n) {
				vjs.TextTrackButton.call(this, e, t, n), this.el_.setAttribute("aria-label", "Chapters Menu");
			}
		}), vjs.ChaptersButton.prototype.kind_ = "chapters", vjs.ChaptersButton.prototype.buttonText = "Chapters", vjs.ChaptersButton.prototype.className = "vjs-chapters-button", vjs.ChaptersButton.prototype.createItems = function() {
			var e = [],
				t;
			for (var n = 0; n < this.player_.textTracks().length; n++) t = this.player_.textTracks()[n], t.kind() === this.kind_ && e.push(new vjs.TextTrackMenuItem(this.player_, {
				track: t
			}));
			return e;
		}, vjs.ChaptersButton.prototype.createMenu = function() {
			var e = this.player_.textTracks(),
				t = 0,
				n = e.length,
				r, i, s = this.items = [];
			for (; t < n; t++) {
				r = e[t];
				if (r.kind() == this.kind_ && r.dflt()) {
					if (r.readyState() < 2) {
						this.chaptersTrack = r, r.on("loaded", vjs.bind(this, this.createMenu));
						return;
					}
					i = r;
					break;
				}
			}
			var o = this.menu = new vjs.Menu(this.player_);
			o.el_.appendChild(vjs.createEl("li", {
				className: "vjs-menu-title",
				innerHTML: vjs.capitalize(this.kind_),
				tabindex: -1
			}));
			if (i) {
				var u = i.cues_,
					a, f;
				t = 0, n = u.length;
				for (; t < n; t++) a = u[t], f = new vjs.ChaptersTrackMenuItem(this.player_, {
					track: i,
					cue: a
				}), s.push(f), o.addChild(f);
			}
			return this.items.length > 0 && this.show(), o;
		}, vjs.ChaptersTrackMenuItem = vjs.MenuItem.extend({
			init: function(e, t) {
				var n = this.track = t.track,
					r = this.cue = t.cue,
					i = e.currentTime();
				t.label = r.text, t.selected = r.startTime <= i && i < r.endTime, vjs.MenuItem.call(this, e, t), n.on("cuechange", vjs.bind(this, this.update));
			}
		}), vjs.ChaptersTrackMenuItem.prototype.onClick = function() {
			vjs.MenuItem.prototype.onClick.call(this), this.player_.currentTime(this.cue.startTime), this.update(this.cue.startTime);
		}, vjs.ChaptersTrackMenuItem.prototype.update = function() {
			var e = this.cue,
				t = this.player_.currentTime();
			this.selected(e.startTime <= t && t < e.endTime);
		}, vjs.obj.merge(vjs.ControlBar.prototype.options_.children, {
			subtitlesButton: {},
			captionsButton: {},
			chaptersButton: {}
		}), vjs.JSON;
		if (typeof window.JSON != "undefined" && window.JSON.parse === "function") vjs.JSON = window.JSON;
		else {
			vjs.JSON = {};
			var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
			vjs.JSON.parse = function(text, reviver) {
				function walk(e, t) {
					var n, r, i = e[t];
					if (i && typeof i == "object")
						for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r : delete i[n]);
					return reviver.call(e, t, i);
				}
				var j;
				text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
					return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
				}));
				if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
					"": j
				}, "") : j;
				throw new SyntaxError("JSON.parse(): invalid or malformed JSON data");
			};
		}
		return vjs.autoSetup = function() {
			var e, t, n, r = document.getElementsByTagName("video");
			if (r && r.length > 0)
				for (var i = 0, s = r.length; i < s; i++) {
					t = r[i];
					if (!t || !t.getAttribute) {
						vjs.autoSetupTimeout(1);
						break;
					}
					t.player === undefined && (e = t.getAttribute("data-setup"), e !== null && (e = vjs.JSON.parse(e || "{}"), n = videojs(t, e)));
				} else vjs.windowLoaded || vjs.autoSetupTimeout(1);
		}, vjs.autoSetupTimeout = function(e) {
			setTimeout(vjs.autoSetup, e);
		}, vjs.one(window, "load", function() {
			vjs.windowLoaded = !0;
		}), vjs.autoSetupTimeout(1), vjs.plugin = function(e, t) {
			vjs.Player.prototype[e] = t;
		}, videojs;
	} catch (e) {
		wx.jslog({
			src: "biz_web/lib/video.js"
		}, e);
	}
});
define("tpl/media/qqmusicaudio.html.js", [], function() {
	return '<div class="qqmusic_audio " id="wxAudioBox{id}" data-aid="{id}">\n    <a class="audio_switch" href="javascript:;"  onclick=\'return false;\' title="点击播放">\n        <i class="icon_qqmusic"></i>\n    </a>\n</div>\n';
});
define("tpl/media/audio.html.js", [], function() {
	return '<div class="appmsgSendedItem simple_audiomsg" id="wxAudioBox{id}" data-aid="{id}" data-fid="{file_id}" data-source="{source}">\n    <a class="title_wrp" href="javascript:;"  title="点击播放">\n        <span class="icon icon_lh" src="{appmsg_cover}"/></span>\n        <span class="title">[语音]{play_length}"</span>\n    </a>\n    <p class="desc">{play_length}"</p>\n</div>\n';
});
define("biz_web/lib/soundmanager2.js", [], function(e, t, n) {
	try {
		var r = +(new Date);
		"use strict";
		var i = null,
			s;

		function o(e, t) {
			function n(e) {
				return o.preferFlash && Bt && !o.ignoreFlash && o.flash[e] !== s && o.flash[e];
			}

			function r(e) {
				return function(t) {
					var n = this._s,
						r;
					return !n || !n._a ? (n && n.id ? o._wD(n.id + ": Ignoring " + t.type) : o._wD(c + "Ignoring " + t.type), r = null) : r = e.call(this, t), r;
				};
			}
			this.setupOptions = {
				url: e || null,
				flashVersion: 8,
				debugMode: !1,
				debugFlash: !1,
				useConsole: !1,
				consoleOnly: !0,
				waitForWindowLoad: !1,
				bgColor: "#ffffff",
				useHighPerformance: !1,
				flashPollingInterval: null,
				html5PollingInterval: null,
				flashLoadTimeout: 1e3,
				wmode: null,
				allowScriptAccess: "always",
				useFlashBlock: !1,
				useHTML5Audio: !0,
				html5Test: /^(probably|maybe)$/i,
				preferFlash: !0,
				noSWFCache: !1,
				idPrefix: "sound"
			}, this.defaultOptions = {
				autoLoad: !1,
				autoPlay: !1,
				from: null,
				loops: 1,
				onid3: null,
				onload: null,
				whileloading: null,
				onplay: null,
				onpause: null,
				onresume: null,
				whileplaying: null,
				onposition: null,
				onstop: null,
				onfailure: null,
				onfinish: null,
				multiShot: !0,
				multiShotEvents: !1,
				position: null,
				pan: 0,
				stream: !0,
				to: null,
				type: null,
				usePolicyFile: !1,
				volume: 100
			}, this.flash9Options = {
				isMovieStar: null,
				usePeakData: !1,
				useWaveformData: !1,
				useEQData: !1,
				onbufferchange: null,
				ondataerror: null
			}, this.movieStarOptions = {
				bufferTime: 3,
				serverURL: null,
				onconnect: null,
				duration: null
			}, this.audioFormats = {
				mp3: {
					type: ['audio/mpeg; codecs="mp3"', "audio/mpeg", "audio/mp3", "audio/MPA", "audio/mpa-robust"],
					required: !0
				},
				mp4: {
					related: ["aac", "m4a", "m4b"],
					type: ['audio/mp4; codecs="mp4a.40.2"', "audio/aac", "audio/x-m4a", "audio/MP4A-LATM", "audio/mpeg4-generic"],
					required: !1
				},
				ogg: {
					type: ["audio/ogg; codecs=vorbis"],
					required: !1
				},
				opus: {
					type: ["audio/ogg; codecs=opus", "audio/opus"],
					required: !1
				},
				wav: {
					type: ['audio/wav; codecs="1"', "audio/wav", "audio/wave", "audio/x-wav"],
					required: !1
				}
			}, this.movieID = "sm2-container", this.id = t || "sm2movie", this.debugID = "soundmanager-debug", this.debugURLParam = /([#?&])debug=1/i, this.versionNumber = "V2.97a.20130512", this.version = null, this.movieURL = null, this.altURL = null, this.swfLoaded = !1, this.enabled = !1, this.oMC = null, this.sounds = {}, this.soundIDs = [], this.muted = !1, this.didFlashBlock = !1, this.filePattern = null, this.filePatterns = {
				flash8: /\.mp3(\?.*)?$/i,
				flash9: /\.mp3(\?.*)?$/i
			}, this.features = {
				buffering: !1,
				peakData: !1,
				waveformData: !1,
				eqData: !1,
				movieStar: !1
			}, this.sandbox = {
				type: null,
				types: {
					remote: "remote (domain-based) rules",
					localWithFile: "local with file access (no internet access)",
					localWithNetwork: "local with network (internet access only, no local access)",
					localTrusted: "local, trusted (local+internet access)"
				},
				description: null,
				noRemote: null,
				noLocal: null
			}, this.html5 = {
				usingFlash: null
			}, this.flash = {}, this.html5Only = !1, this.ignoreFlash = !1;
			var i, o = this,
				u = null,
				a = null,
				f = "soundManager",
				l = f + ": ",
				c = "HTML5::",
				h, p = navigator.userAgent,
				d = window.location.href.toString(),
				v = document,
				m, g, y, b, w = [],
				E = !0,
				S, x = !1,
				T = !1,
				N = !1,
				C = !1,
				k = !1,
				L, A = 0,
				O, M, _, D, P, H, B, j, F, I, q, R, U, z, W, X, V, $, J, K, Q, G, Y = ["log", "info", "warn", "error"],
				Z = 8,
				et, tt, nt, rt = null,
				it = null,
				st, ot, ut, at, ft, lt, ct, ht, pt, dt = !1,
				vt = !1,
				mt, gt, yt, bt = 0,
				wt = null,
				Et, St = [],
				xt, Tt = null,
				Nt, Ct, kt, Lt, At, Ot, Mt, _t, Dt = Array.prototype.slice,
				Pt = !1,
				Ht, Bt, jt, Ft, It, qt, Rt, Ut, zt = 0,
				Wt = p.match(/(ipad|iphone|ipod)/i),
				Xt = p.match(/android/i),
				Vt = p.match(/msie/i),
				$t = p.match(/webkit/i),
				Jt = p.match(/safari/i) && !p.match(/chrome/i),
				Kt = p.match(/opera/i),
				Qt = p.match(/firefox/i),
				Gt = p.match(/(mobile|pre\/|xoom)/i) || Wt || Xt,
				Yt = !d.match(/usehtml5audio/i) && !d.match(/sm2\-ignorebadua/i) && Jt && !p.match(/silk/i) && p.match(/OS X 10_6_([3-7])/i),
				Zt = window.console !== s && console.log !== s,
				en = v.hasFocus !== s ? v.hasFocus() : null,
				tn = Jt && (v.hasFocus === s || !v.hasFocus()),
				nn = !tn,
				rn = /(mp3|mp4|mpa|m4a|m4b)/i,
				sn = 1e3,
				on = "about:blank",
				un = v.location ? v.location.protocol.match(/http/i) : null,
				an = un ? "" : "http://",
				fn = /^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,
				ln = ["mpeg4", "aac", "flv", "mov", "mp4", "m4v", "f4v", "m4a", "m4b", "mp4v", "3gp", "3g2"],
				cn = new RegExp("\\.(" + ln.join("|") + ")(\\?.*)?$", "i");
			this.mimePattern = /^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i, this.useAltURL = !un, at = {
				swfBox: "sm2-object-box",
				swfDefault: "movieContainer",
				swfError: "swf_error",
				swfTimedout: "swf_timedout",
				swfLoaded: "swf_loaded",
				swfUnblocked: "swf_unblocked",
				sm2Debug: "sm2_debug",
				highPerf: "high_performance",
				flashDebug: "flash_debug"
			}, this.hasHTML5 = function() {
				try {
					return Audio !== s && (Kt && opera !== s && opera.version() < 10 ? new Audio(null) : new Audio).canPlayType !== s;
				} catch (e) {
					return !1;
				}
			}(), this.setup = function(e) {
				var t = !o.url;
				return e !== s && N && Tt && o.ok() && (e.flashVersion !== s || e.url !== s || e.html5Test !== s) && ht(st("setupLate")), _(e), e && (t && V && e.url !== s && o.beginDelayedInit(), !V && e.url !== s && v.readyState === "complete" && setTimeout(W, 1)), o;
			}, this.ok = function() {
				return Tt ? N && !C : o.useHTML5Audio && o.hasHTML5;
			}, this.supported = this.ok, this.getMovie = function(e) {
				return h(e) || v[e] || window[e];
			}, this.createSound = function(e, t) {
				function n() {
					return l = lt(l), o.sounds[l.id] = new i(l), o.soundIDs.push(l.id), o.sounds[l.id];
				}
				var r, u, l, c = null;
				r = f + ".createSound(): ", u = r + st(N ? "notOK" : "notReady");
				if (!N || !o.ok()) return ht(u), !1;
				t !== s && (e = {
					id: e,
					url: t
				}), l = M(e), l.url = Et(l.url), l.id === undefined && (l.id = o.setupOptions.idPrefix + zt++), l.id.toString().charAt(0).match(/^[0-9]$/) && o._wD(r + st("badID", l.id), 2), o._wD(r + l.id + (l.url ? " (" + l.url + ")" : ""), 1);
				if (pt(l.id, !0)) return o._wD(r + l.id + " exists", 1), o.sounds[l.id];
				if (Ct(l)) c = n(), o._wD(l.id + ": Using HTML5"), c._setup_html5(l);
				else {
					if (o.html5Only) return o._wD(l.id + ": No HTML5 support for this sound, and no Flash. Exiting."), n();
					if (o.html5.usingFlash && l.url && l.url.match(/data\:/i)) return o._wD(l.id + ": data: URIs not supported via Flash. Exiting."), n();
					b > 8 && (l.isMovieStar === null && (l.isMovieStar = !!(l.serverURL || (l.type ? l.type.match(fn) : !1) || l.url && l.url.match(cn))), l.isMovieStar && (o._wD(r + "using MovieStar handling"), l.loops > 1 && L("noNSLoop"))), l = ct(l, r), c = n(), b === 8 ? a._createSound(l.id, l.loops || 1, l.usePolicyFile) : (a._createSound(l.id, l.url, l.usePeakData, l.useWaveformData, l.useEQData, l.isMovieStar, l.isMovieStar ? l.bufferTime : !1, l.loops || 1, l.serverURL, l.duration || null, l.autoPlay, !0, l.autoLoad, l.usePolicyFile), l.serverURL || (c.connected = !0, l.onconnect && l.onconnect.apply(c))), !l.serverURL && (l.autoLoad || l.autoPlay) && c.load(l);
				}
				return !l.serverURL && l.autoPlay && c.play(), c;
			}, this.destroySound = function(e, t) {
				if (!pt(e)) return !1;
				var n = o.sounds[e],
					r;
				n._iO = {}, n.stop(), n.unload();
				for (r = 0; r < o.soundIDs.length; r++)
					if (o.soundIDs[r] === e) {
						o.soundIDs.splice(r, 1);
						break;
					}
				return t || n.destruct(!0), n = null, delete o.sounds[e], !0;
			}, this.load = function(e, t) {
				return pt(e) ? o.sounds[e].load(t) : !1;
			}, this.unload = function(e) {
				return pt(e) ? o.sounds[e].unload() : !1;
			}, this.onPosition = function(e, t, n, r) {
				return pt(e) ? o.sounds[e].onposition(t, n, r) : !1;
			}, this.onposition = this.onPosition, this.clearOnPosition = function(e, t, n) {
				return pt(e) ? o.sounds[e].clearOnPosition(t, n) : !1;
			}, this.play = function(e, t) {
				var n = null,
					r = t && !(t instanceof Object);
				if (!N || !o.ok()) return ht(f + ".play(): " + st(N ? "notOK" : "notReady")), !1;
				if (!pt(e, r)) {
					if (!r) return !1;
					r && (t = {
						url: t
					}), t && t.url && (o._wD(f + '.play(): Attempting to create "' + e + '"', 1), t.id = e, n = o.createSound(t).play());
				} else r && (t = {
					url: t
				});
				return n === null && (n = o.sounds[e].play(t)), n;
			}, this.start = this.play, this.setPosition = function(e, t) {
				return pt(e) ? o.sounds[e].setPosition(t) : !1;
			}, this.stop = function(e) {
				return pt(e) ? (o._wD(f + ".stop(" + e + ")", 1), o.sounds[e].stop()) : !1;
			}, this.stopAll = function() {
				var e;
				o._wD(f + ".stopAll()", 1);
				for (e in o.sounds) o.sounds.hasOwnProperty(e) && o.sounds[e].stop();
			}, this.pause = function(e) {
				return pt(e) ? o.sounds[e].pause() : !1;
			}, this.pauseAll = function() {
				var e;
				for (e = o.soundIDs.length - 1; e >= 0; e--) o.sounds[o.soundIDs[e]].pause();
			}, this.resume = function(e) {
				return pt(e) ? o.sounds[e].resume() : !1;
			}, this.resumeAll = function() {
				var e;
				for (e = o.soundIDs.length - 1; e >= 0; e--) o.sounds[o.soundIDs[e]].resume();
			}, this.togglePause = function(e) {
				return pt(e) ? o.sounds[e].togglePause() : !1;
			}, this.setPan = function(e, t) {
				return pt(e) ? o.sounds[e].setPan(t) : !1;
			}, this.setVolume = function(e, t) {
				return pt(e) ? o.sounds[e].setVolume(t) : !1;
			}, this.mute = function(e) {
				var t = 0;
				e instanceof String && (e = null);
				if (!e) {
					o._wD(f + ".mute(): Muting all sounds");
					for (t = o.soundIDs.length - 1; t >= 0; t--) o.sounds[o.soundIDs[t]].mute();
					return o.muted = !0, !0;
				}
				return pt(e) ? (o._wD(f + '.mute(): Muting "' + e + '"'), o.sounds[e].mute()) : !1;
			}, this.muteAll = function() {
				o.mute();
			}, this.unmute = function(e) {
				var t;
				e instanceof String && (e = null);
				if (!e) {
					o._wD(f + ".unmute(): Unmuting all sounds");
					for (t = o.soundIDs.length - 1; t >= 0; t--) o.sounds[o.soundIDs[t]].unmute();
					return o.muted = !1, !0;
				}
				return pt(e) ? (o._wD(f + '.unmute(): Unmuting "' + e + '"'), o.sounds[e].unmute()) : !1;
			}, this.unmuteAll = function() {
				o.unmute();
			}, this.toggleMute = function(e) {
				return pt(e) ? o.sounds[e].toggleMute() : !1;
			}, this.getMemoryUse = function() {
				var e = 0;
				return a && b !== 8 && (e = parseInt(a._getMemoryUse(), 10)), e;
			}, this.disable = function(e) {
				var t;
				e === s && (e = !1);
				if (C) return !1;
				C = !0, L("shutdown", 1);
				for (t = o.soundIDs.length - 1; t >= 0; t--) et(o.sounds[o.soundIDs[t]]);
				return O(e), _t.remove(window, "load", B), !0;
			}, this.canPlayMIME = function(e) {
				var t;
				return o.hasHTML5 && (t = kt({
					type: e
				})), !t && Tt && (t = e && o.ok() ? !!((b > 8 ? e.match(fn) : null) || e.match(o.mimePattern)) : null), t;
			}, this.canPlayURL = function(e) {
				var t;
				return o.hasHTML5 && (t = kt({
					url: e
				})), !t && Tt && (t = e && o.ok() ? !!e.match(o.filePattern) : null), t;
			}, this.canPlayLink = function(e) {
				return e.type !== s && e.type && o.canPlayMIME(e.type) ? !0 : o.canPlayURL(e.href);
			}, this.getSoundById = function(e, t) {
				if (!e) return null;
				var n = o.sounds[e];
				return !n && !t && o._wD(f + '.getSoundById(): Sound "' + e + '" not found.', 2), n;
			}, this.onready = function(e, t) {
				var n = "onready",
					r = !1;
				if (typeof e != "function") throw st("needFunction", n);
				return N && o._wD(st("queue", n)), t || (t = window), P(n, e, t), H(), r = !0, r;
			}, this.ontimeout = function(e, t) {
				var n = "ontimeout",
					r = !1;
				if (typeof e != "function") throw st("needFunction", n);
				return N && o._wD(st("queue", n)), t || (t = window), P(n, e, t), H({
					type: n
				}), r = !0, r;
			}, this._writeDebug = function(e, t) {
				var n = "soundmanager-debug",
					r, i;
				if (!o.debugMode) return !1;
				if (Zt && o.useConsole) {
					t && typeof t == "object" ? console.log(e, t) : Y[t] !== s ? console[Y[t]](e) : console.log(e);
					if (o.consoleOnly) return !0;
				}
				return r = h(n), r ? (i = v.createElement("div"), ++A % 2 === 0 && (i.className = "sm2-alt"), t === s ? t = 0 : t = parseInt(t, 10), i.appendChild(v.createTextNode(e)), t && (t >= 2 && (i.style.fontWeight = "bold"), t === 3 && (i.style.color = "#ff3333")), r.insertBefore(i, r.firstChild), r = null, !0) : !1;
			}, d.indexOf("sm2-debug=alert") !== -1 && (this._writeDebug = function(e) {
				window.alert(e);
			}), this._wD = this._writeDebug, this._debug = function() {
				var e, t;
				L("currentObj", 1);
				for (e = 0, t = o.soundIDs.length; e < t; e++) o.sounds[o.soundIDs[e]]._debug();
			}, this.reboot = function(e, t) {
				o.soundIDs.length && o._wD("Destroying " + o.soundIDs.length + " SMSound object" + (o.soundIDs.length !== 1 ? "s" : "") + "...");
				var n, r, i;
				for (n = o.soundIDs.length - 1; n >= 0; n--) o.sounds[o.soundIDs[n]].destruct();
				if (a) try {
					Vt && (it = a.innerHTML), rt = a.parentNode.removeChild(a);
				} catch (s) {
					L("badRemove", 2);
				}
				it = rt = Tt = a = null, o.enabled = V = N = dt = vt = x = T = C = Pt = o.swfLoaded = !1, o.soundIDs = [], o.sounds = {}, zt = 0;
				if (!e) {
					for (n in w)
						if (w.hasOwnProperty(n))
							for (r = 0, i = w[n].length; r < i; r++) w[n][r].fired = !1;
				} else w = [];
				return t || o._wD(f + ": Rebooting..."), o.html5 = {
					usingFlash: null
				}, o.flash = {}, o.html5Only = !1, o.ignoreFlash = !1, window.setTimeout(function() {
					z(), t || o.beginDelayedInit();
				}, 20), o;
			}, this.reset = function() {
				return L("reset"), o.reboot(!0, !0);
			}, this.getMoviePercent = function() {
				return a && "PercentLoaded" in a ? a.PercentLoaded() : null;
			}, this.beginDelayedInit = function() {
				k = !0, W(), setTimeout(function() {
					return vt ? !1 : (J(), U(), vt = !0, !0);
				}, 20), j();
			}, this.destruct = function() {
				o._wD(f + ".destruct()"), o.disable(!0);
			}, i = function(e) {
				var t = this,
					n, r, i, f, l, c, h = !1,
					p = [],
					d = 0,
					v, m, g = null,
					y, w;
				y = {
					duration: null,
					time: null
				}, this.id = e.id, this.sID = this.id, this.url = e.url, this.options = M(e), this.instanceOptions = this.options, this._iO = this.instanceOptions, this.pan = this.options.pan, this.volume = this.options.volume, this.isHTML5 = !1, this._a = null, w = this.url ? !1 : !0, this.id3 = {}, this._debug = function() {
					o._wD(t.id + ": Merged options:", t.options);
				}, this.load = function(e) {
					var n = null,
						r;
					e !== s ? t._iO = M(e, t.options) : (e = t.options, t._iO = e, g && g !== t.url && (L("manURL"), t._iO.url = t.url, t.url = null)), t._iO.url || (t._iO.url = t.url), t._iO.url = Et(t._iO.url), t.instanceOptions = t._iO, r = t._iO, o._wD(t.id + ": load (" + r.url + ")");
					if (!r.url && !t.url) return o._wD(t.id + ": load(): url is unassigned. Exiting.", 2), t;
					!t.isHTML5 && b === 8 && !t.url && !r.autoPlay && o._wD(t.id + ": Flash 8 load() limitation: Wait for onload() before calling play().", 1);
					if (r.url === t.url && t.readyState !== 0 && t.readyState !== 2) return L("onURL", 1), t.readyState === 3 && r.onload && Ut(t, function() {
						r.onload.apply(t, [!!t.duration]);
					}), t;
					t.loaded = !1, t.readyState = 1, t.playState = 0, t.id3 = {};
					if (Ct(r)) n = t._setup_html5(r), n._called_load ? o._wD(t.id + ": Ignoring request to load again") : (t._html5_canplay = !1, t.url !== r.url && (o._wD(L("manURL") + ": " + r.url), t._a.src = r.url, t.setPosition(0)), t._a.autobuffer = "auto", t._a.preload = "auto", t._a._called_load = !0, r.autoPlay && t.play());
					else {
						if (o.html5Only) return o._wD(t.id + ": No flash support. Exiting."), t;
						if (t._iO.url && t._iO.url.match(/data\:/i)) return o._wD(t.id + ": data: URIs not supported via Flash. Exiting."), t;
						try {
							t.isHTML5 = !1, t._iO = ct(lt(r)), r = t._iO, b === 8 ? a._load(t.id, r.url, r.stream, r.autoPlay, r.usePolicyFile) : a._load(t.id, r.url, !!r.stream, !!r.autoPlay, r.loops || 1, !!r.autoLoad, r.usePolicyFile);
						} catch (i) {
							L("smError", 2), S("onload", !1), K({
								type: "SMSOUND_LOAD_JS_EXCEPTION",
								fatal: !0
							});
						}
					}
					return t.url = r.url, t;
				}, this.unload = function() {
					return t.readyState !== 0 && (o._wD(t.id + ": unload()"), t.isHTML5 ? (f(), t._a && (t._a.pause(), g = At(t._a))) : b === 8 ? a._unload(t.id, on) : a._unload(t.id), n()), t;
				}, this.destruct = function(e) {
					o._wD(t.id + ": Destruct"), t.isHTML5 ? (f(), t._a && (t._a.pause(), At(t._a), Pt || i(), t._a._s = null, t._a = null)) : (t._iO.onfailure = null, a._destroySound(t.id)), e || o.destroySound(t.id, !0);
				}, this.play = function(e, n) {
					var r, i, u, f, p, d, v, g = !0,
						y = null;
					r = t.id + ": play(): ", n = n === s ? !0 : n, e || (e = {}), t.url && (t._iO.url = t.url), t._iO = M(t._iO, t.options), t._iO = M(e, t._iO), t._iO.url = Et(t._iO.url), t.instanceOptions = t._iO;
					if (!t.isHTML5 && t._iO.serverURL && !t.connected) return t.getAutoPlay() || (o._wD(r + " Netstream not connected yet - setting autoPlay"), t.setAutoPlay(!0)), t;
					Ct(t._iO) && (t._setup_html5(t._iO), l()), t.playState === 1 && !t.paused && (i = t._iO.multiShot, i ? o._wD(r + "Already playing (multi-shot)", 1) : (o._wD(r + "Already playing (one-shot)", 1), t.isHTML5 && t.setPosition(t._iO.position), y = t));
					if (y !== null) return y;
					e.url && e.url !== t.url && (!t.readyState && !t.isHTML5 && b === 8 && w ? w = !1 : t.load(t._iO)), t.loaded ? o._wD(r.substr(0, r.lastIndexOf(":"))) : t.readyState === 0 ? (o._wD(r + "Attempting to load"), !t.isHTML5 && !o.html5Only ? (t._iO.autoPlay = !0, t.load(t._iO)) : t.isHTML5 ? t.load(t._iO) : (o._wD(r + "Unsupported type. Exiting."), y = t), t.instanceOptions = t._iO) : t.readyState === 2 ? (o._wD(r + "Could not load - exiting", 2), y = t) : o._wD(r + "Loading - attempting to play...");
					if (y !== null) return y;
					!t.isHTML5 && b === 9 && t.position > 0 && t.position === t.duration && (o._wD(r + "Sound at end, resetting to position:0"), e.position = 0);
					if (t.paused && t.position >= 0 && (!t._iO.serverURL || t.position > 0)) o._wD(r + "Resuming from paused state", 1), t.resume();
					else {
						t._iO = M(e, t._iO);
						if (t._iO.from !== null && t._iO.to !== null && t.instanceCount === 0 && t.playState === 0 && !t._iO.serverURL) {
							f = function() {
								t._iO = M(e, t._iO), t.play(t._iO);
							}, t.isHTML5 && !t._html5_canplay ? (o._wD(r + "Beginning load for from/to case"), t.load({
								oncanplay: f
							}), y = !1) : !t.isHTML5 && !t.loaded && (!t.readyState || t.readyState !== 2) && (o._wD(r + "Preloading for from/to case"), t.load({
								onload: f
							}), y = !1);
							if (y !== null) return y;
							t._iO = m();
						}
						(!t.instanceCount || t._iO.multiShotEvents || t.isHTML5 && t._iO.multiShot && !Pt || !t.isHTML5 && b > 8 && !t.getAutoPlay()) && t.instanceCount++, t._iO.onposition && t.playState === 0 && c(t), t.playState = 1, t.paused = !1, t.position = t._iO.position !== s && !isNaN(t._iO.position) ? t._iO.position : 0, t.isHTML5 || (t._iO = ct(lt(t._iO))), t._iO.onplay && n && (t._iO.onplay.apply(t), h = !0), t.setVolume(t._iO.volume, !0), t.setPan(t._iO.pan, !0), t.isHTML5 ? t.instanceCount < 2 ? (l(), u = t._setup_html5(), t.setPosition(t._iO.position), u.play()) : (o._wD(t.id + ": Cloning Audio() for instance #" + t.instanceCount + "..."), p = new Audio(t._iO.url), d = function() {
							_t.remove(p, "onended", d), t._onfinish(t), At(p), p = null;
						}, v = function() {
							_t.remove(p, "canplay", v);
							try {
								p.currentTime = t._iO.position / sn;
							} catch (e) {
								ht(t.id + ": multiShot play() failed to apply position of " + t._iO.position / sn);
							}
							p.play();
						}, _t.add(p, "ended", d), t._iO.position ? _t.add(p, "canplay", v) : p.play()) : (g = a._start(t.id, t._iO.loops || 1, b === 9 ? t.position : t.position / sn, t._iO.multiShot || !1), b === 9 && !g && (o._wD(r + "No sound hardware, or 32-sound ceiling hit", 2), t._iO.onplayerror && t._iO.onplayerror.apply(t)));
					}
					return t;
				}, this.start = this.play, this.stop = function(e) {
					var n = t._iO,
						r;
					return t.playState === 1 && (o._wD(t.id + ": stop()"), t._onbufferchange(0), t._resetOnPosition(0), t.paused = !1, t.isHTML5 || (t.playState = 0), v(), n.to && t.clearOnPosition(n.to), t.isHTML5 ? t._a && (r = t.position, t.setPosition(0), t.position = r, t._a.pause(), t.playState = 0, t._onTimer(), f()) : (a._stop(t.id, e), n.serverURL && t.unload()), t.instanceCount = 0, t._iO = {}, n.onstop && n.onstop.apply(t)), t;
				}, this.setAutoPlay = function(e) {
					o._wD(t.id + ": Autoplay turned " + (e ? "on" : "off")), t._iO.autoPlay = e, t.isHTML5 || (a._setAutoPlay(t.id, e), e && !t.instanceCount && t.readyState === 1 && (t.instanceCount++, o._wD(t.id + ": Incremented instance count to " + t.instanceCount)));
				}, this.getAutoPlay = function() {
					return t._iO.autoPlay;
				}, this.setPosition = function(e) {
					e === s && (e = 0);
					var n, r, i = t.isHTML5 ? Math.max(e, 0) : Math.min(t.duration || t._iO.duration, Math.max(e, 0));
					t.position = i, r = t.position / sn, t._resetOnPosition(t.position), t._iO.position = i;
					if (!t.isHTML5) n = b === 9 ? t.position : r, t.readyState && t.readyState !== 2 && a._setPosition(t.id, n, t.paused || !t.playState, t._iO.multiShot);
					else if (t._a) {
						if (t._html5_canplay) {
							if (t._a.currentTime !== r) {
								o._wD(t.id + ": setPosition(" + r + ")");
								try {
									t._a.currentTime = r, (t.playState === 0 || t.paused) && t._a.pause();
								} catch (u) {
									o._wD(t.id + ": setPosition(" + r + ") failed: " + u.message, 2);
								}
							}
						} else if (r) return o._wD(t.id + ": setPosition(" + r + "): Cannot seek yet, sound not ready", 2), t;
						t.paused && t._onTimer(!0);
					}
					return t;
				}, this.pause = function(e) {
					return t.paused || t.playState === 0 && t.readyState !== 1 ? t : (o._wD(t.id + ": pause()"), t.paused = !0, t.isHTML5 ? (t._setup_html5().pause(), f()) : (e || e === s) && a._pause(t.id, t._iO.multiShot), t._iO.onpause && t._iO.onpause.apply(t), t);
				}, this.resume = function() {
					var e = t._iO;
					return t.paused ? (o._wD(t.id + ": resume()"), t.paused = !1, t.playState = 1, t.isHTML5 ? (t._setup_html5().play(), l()) : (e.isMovieStar && !e.serverURL && t.setPosition(t.position), a._pause(t.id, e.multiShot)), !h && e.onplay ? (e.onplay.apply(t), h = !0) : e.onresume && e.onresume.apply(t), t) : t;
				}, this.togglePause = function() {
					return o._wD(t.id + ": togglePause()"), t.playState === 0 ? (t.play({
						position: b === 9 && !t.isHTML5 ? t.position : t.position / sn
					}), t) : (t.paused ? t.resume() : t.pause(), t);
				}, this.setPan = function(e, n) {
					return e === s && (e = 0), n === s && (n = !1), t.isHTML5 || a._setPan(t.id, e), t._iO.pan = e, n || (t.pan = e, t.options.pan = e), t;
				}, this.setVolume = function(e, n) {
					return e === s && (e = 100), n === s && (n = !1), t.isHTML5 ? t._a && (t._a.volume = Math.max(0, Math.min(1, e / 100))) : a._setVolume(t.id, o.muted && !t.muted || t.muted ? 0 : e), t._iO.volume = e, n || (t.volume = e, t.options.volume = e), t;
				}, this.mute = function() {
					return t.muted = !0, t.isHTML5 ? t._a && (t._a.muted = !0) : a._setVolume(t.id, 0), t;
				}, this.unmute = function() {
					t.muted = !1;
					var e = t._iO.volume !== s;
					return t.isHTML5 ? t._a && (t._a.muted = !1) : a._setVolume(t.id, e ? t._iO.volume : t.options.volume), t;
				}, this.toggleMute = function() {
					return t.muted ? t.unmute() : t.mute();
				}, this.onPosition = function(e, n, r) {
					return p.push({
						position: parseInt(e, 10),
						method: n,
						scope: r !== s ? r : t,
						fired: !1
					}), t;
				}, this.onposition = this.onPosition, this.clearOnPosition = function(e, t) {
					var n;
					e = parseInt(e, 10);
					if (isNaN(e)) return !1;
					for (n = 0; n < p.length; n++) e === p[n].position && (!t || t === p[n].method) && (p[n].fired && d--, p.splice(n, 1));
				}, this._processOnPosition = function() {
					var e, n, r = p.length;
					if (!r || !t.playState || d >= r) return !1;
					for (e = r - 1; e >= 0; e--) n = p[e], !n.fired && t.position >= n.position && (n.fired = !0, d++, n.method.apply(n.scope, [n.position]));
					return !0;
				}, this._resetOnPosition = function(e) {
					var t, n, r = p.length;
					if (!r) return !1;
					for (t = r - 1; t >= 0; t--) n = p[t], n.fired && e <= n.position && (n.fired = !1, d--);
					return !0;
				}, m = function() {
					var e = t._iO,
						n = e.from,
						r = e.to,
						i, s;
					return s = function() {
						o._wD(t.id + ': "To" time of ' + r + " reached."), t.clearOnPosition(r, s), t.stop();
					}, i = function() {
						o._wD(t.id + ': Playing "from" ' + n), r !== null && !isNaN(r) && t.onPosition(r, s);
					}, n !== null && !isNaN(n) && (e.position = n, e.multiShot = !1, i()), e;
				}, c = function() {
					var e, n = t._iO.onposition;
					if (n)
						for (e in n) n.hasOwnProperty(e) && t.onPosition(parseInt(e, 10), n[e]);
				}, v = function() {
					var e, n = t._iO.onposition;
					if (n)
						for (e in n) n.hasOwnProperty(e) && t.clearOnPosition(parseInt(e, 10));
				}, l = function() {
					t.isHTML5 && mt(t);
				}, f = function() {
					t.isHTML5 && gt(t);
				}, n = function(e) {
					e || (p = [], d = 0), h = !1, t._hasTimer = null, t._a = null, t._html5_canplay = !1, t.bytesLoaded = null, t.bytesTotal = null, t.duration = t._iO && t._iO.duration ? t._iO.duration : null, t.durationEstimate = null, t.buffered = [], t.eqData = [], t.eqData.left = [], t.eqData.right = [], t.failures = 0, t.isBuffering = !1, t.instanceOptions = {}, t.instanceCount = 0, t.loaded = !1, t.metadata = {}, t.readyState = 0, t.muted = !1, t.paused = !1, t.peakData = {
						left: 0,
						right: 0
					}, t.waveformData = {
						left: [],
						right: []
					}, t.playState = 0, t.position = null, t.id3 = {};
				}, n(), this._onTimer = function(e) {
					var n, r = !1,
						i, s = {};
					if (t._hasTimer || e) return t._a && (e || (t.playState > 0 || t.readyState === 1) && !t.paused) && (n = t._get_html5_duration(), n !== y.duration && (y.duration = n, t.duration = n, r = !0), t.durationEstimate = t.duration, i = t._a.currentTime * sn || 0, i !== y.time && (y.time = i, r = !0), (r || e) && t._whileplaying(i, s, s, s, s)), r;
				}, this._get_html5_duration = function() {
					var e = t._iO,
						n = t._a && t._a.duration ? t._a.duration * sn : e && e.duration ? e.duration : null,
						r = n && !isNaN(n) && n !== Infinity ? n : null;
					return r;
				}, this._apply_loop = function(e, t) {
					!e.loop && t > 1 && o._wD("Note: Native HTML5 looping is infinite.", 1), e.loop = t > 1 ? "loop" : "";
				}, this._setup_html5 = function(e) {
					var i = M(t._iO, e),
						s = Pt ? u : t._a,
						o = decodeURI(i.url),
						a;
					Pt ? o === decodeURI(Ht) && (a = !0) : o === decodeURI(g) && (a = !0);
					if (s) {
						if (s._s)
							if (Pt) s._s && s._s.playState && !a && s._s.stop();
							else if (!Pt && o === decodeURI(g)) return t._apply_loop(s, i.loops), s;
						a || (n(!1), s.src = i.url, t.url = i.url, g = i.url, Ht = i.url, s._called_load = !1);
					} else i.autoLoad || i.autoPlay ? t._a = new Audio(i.url) : t._a = Kt && opera.version() < 10 ? new Audio(null) : new Audio, s = t._a, s._called_load = !1, Pt && (u = s);
					return t.isHTML5 = !0, t._a = s, s._s = t, r(), t._apply_loop(s, i.loops), i.autoLoad || i.autoPlay ? t.load() : (s.autobuffer = !1, s.preload = "auto"), s;
				}, r = function() {
					function e(e, n, r) {
						return t._a ? t._a.addEventListener(e, n, r || !1) : null;
					}
					if (t._a._added_events) return !1;
					var n;
					t._a._added_events = !0;
					for (n in It) It.hasOwnProperty(n) && e(n, It[n]);
					return !0;
				}, i = function() {
					function e(e, n, r) {
						return t._a ? t._a.removeEventListener(e, n, r || !1) : null;
					}
					var n;
					o._wD(t.id + ": Removing event listeners"), t._a._added_events = !1;
					for (n in It) It.hasOwnProperty(n) && e(n, It[n]);
				}, this._onload = function(e) {
					var n, r = !!e || !t.isHTML5 && b === 8 && t.duration;
					return n = t.id + ": ", o._wD(n + (r ? "onload()" : "Failed to load / invalid sound?" + (t.duration ? " -" : " Zero-length duration reported.") + " (" + t.url + ")"), r ? 1 : 2), !r && !t.isHTML5 && (o.sandbox.noRemote === !0 && o._wD(n + st("noNet"), 1), o.sandbox.noLocal === !0 && o._wD(n + st("noLocal"), 1)), t.loaded = r, t.readyState = r ? 3 : 2, t._onbufferchange(0), t._iO.onload && Ut(t, function() {
						t._iO.onload.apply(t, [r]);
					}), !0;
				}, this._onbufferchange = function(e) {
					return t.playState === 0 ? !1 : e && t.isBuffering || !e && !t.isBuffering ? !1 : (t.isBuffering = e === 1, t._iO.onbufferchange && (o._wD(t.id + ": Buffer state change: " + e), t._iO.onbufferchange.apply(t)), !0);
				}, this._onsuspend = function() {
					return t._iO.onsuspend && (o._wD(t.id + ": Playback suspended"), t._iO.onsuspend.apply(t)), !0;
				}, this._onfailure = function(e, n, r) {
					t.failures++, o._wD(t.id + ": Failures = " + t.failures), t._iO.onfailure && t.failures === 1 ? t._iO.onfailure(t, e, n, r) : o._wD(t.id + ": Ignoring failure");
				}, this._onfinish = function() {
					var e = t._iO.onfinish;
					t._onbufferchange(0), t._resetOnPosition(0), t.instanceCount && (t.instanceCount--, t.instanceCount || (v(), t.playState = 0, t.paused = !1, t.instanceCount = 0, t.instanceOptions = {}, t._iO = {}, f(), t.isHTML5 && (t.position = 0)), (!t.instanceCount || t._iO.multiShotEvents) && e && (o._wD(t.id + ": onfinish()"), Ut(t, function() {
						e.apply(t);
					})));
				}, this._whileloading = function(e, n, r, i) {
					var s = t._iO;
					t.bytesLoaded = e, t.bytesTotal = n, t.duration = Math.floor(r), t.bufferLength = i, !t.isHTML5 && !s.isMovieStar ? s.duration ? t.durationEstimate = t.duration > s.duration ? t.duration : s.duration : t.durationEstimate = parseInt(t.bytesTotal / t.bytesLoaded * t.duration, 10) : t.durationEstimate = t.duration, t.isHTML5 || (t.buffered = [{
						start: 0,
						end: t.duration
					}]), (t.readyState !== 3 || t.isHTML5) && s.whileloading && s.whileloading.apply(t);
				}, this._whileplaying = function(e, n, r, i, o) {
					var u = t._iO,
						a;
					return isNaN(e) || e === null ? !1 : (t.position = Math.max(0, e), t._processOnPosition(), !t.isHTML5 && b > 8 && (u.usePeakData && n !== s && n && (t.peakData = {
						left: n.leftPeak,
						right: n.rightPeak
					}), u.useWaveformData && r !== s && r && (t.waveformData = {
						left: r.split(","),
						right: i.split(",")
					}), u.useEQData && o !== s && o && o.leftEQ && (a = o.leftEQ.split(","), t.eqData = a, t.eqData.left = a, o.rightEQ !== s && o.rightEQ && (t.eqData.right = o.rightEQ.split(",")))), t.playState === 1 && (!t.isHTML5 && b === 8 && !t.position && t.isBuffering && t._onbufferchange(0), u.whileplaying && u.whileplaying.apply(t)), !0);
				}, this._oncaptiondata = function(e) {
					o._wD(t.id + ": Caption data received."), t.captiondata = e, t._iO.oncaptiondata && t._iO.oncaptiondata.apply(t, [e]);
				}, this._onmetadata = function(e, n) {
					o._wD(t.id + ": Metadata received.");
					var r = {},
						i, s;
					for (i = 0, s = e.length; i < s; i++) r[e[i]] = n[i];
					t.metadata = r, t._iO.onmetadata && t._iO.onmetadata.apply(t);
				}, this._onid3 = function(e, n) {
					o._wD(t.id + ": ID3 data received.");
					var r = [],
						i, s;
					for (i = 0, s = e.length; i < s; i++) r[e[i]] = n[i];
					t.id3 = M(t.id3, r), t._iO.onid3 && t._iO.onid3.apply(t);
				}, this._onconnect = function(e) {
					e = e === 1, o._wD(t.id + ": " + (e ? "Connected." : "Failed to connect? - " + t.url), e ? 1 : 2), t.connected = e, e && (t.failures = 0, pt(t.id) && (t.getAutoPlay() ? t.play(s, t.getAutoPlay()) : t._iO.autoLoad && t.load()), t._iO.onconnect && t._iO.onconnect.apply(t, [e]));
				}, this._ondataerror = function(e) {
					t.playState > 0 && (o._wD(t.id + ": Data error: " + e), t._iO.ondataerror && t._iO.ondataerror.apply(t));
				}, this._debug();
			}, $ = function() {
				return v.body || v._docElement || v.getElementsByTagName("div")[0];
			}, h = function(e) {
				return v.getElementById(e);
			}, M = function(e, t) {
				var n = e || {},
					r, i;
				r = t === s ? o.defaultOptions : t;
				for (i in r) r.hasOwnProperty(i) && n[i] === s && (typeof r[i] != "object" || r[i] === null ? n[i] = r[i] : n[i] = M(n[i], r[i]));
				return n;
			}, Ut = function(e, t) {
				!e.isHTML5 && b === 8 ? window.setTimeout(t, 0) : t();
			}, D = {
				onready: 1,
				ontimeout: 1,
				defaultOptions: 1,
				flash9Options: 1,
				movieStarOptions: 1
			}, _ = function(e, t) {
				var n, r = !0,
					i = t !== s,
					u = o.setupOptions,
					a = D;
				if (e === s) {
					r = [];
					for (n in u) u.hasOwnProperty(n) && r.push(n);
					for (n in a) a.hasOwnProperty(n) && (typeof o[n] == "object" ? r.push(n + ": {...}") : o[n] instanceof Function ? r.push(n + ": function() {...}") : r.push(n));
					return o._wD(st("setup", r.join(", "))), !1;
				}
				for (n in e)
					if (e.hasOwnProperty(n))
						if (typeof e[n] != "object" || e[n] === null || e[n] instanceof Array || e[n] instanceof RegExp) i && a[t] !== s ? o[t][n] = e[n] : u[n] !== s ? (o.setupOptions[n] = e[n], o[n] = e[n]) : a[n] === s ? (ht(st(o[n] === s ? "setupUndef" : "setupError", n), 2), r = !1) : o[n] instanceof Function ? o[n].apply(o, e[n] instanceof Array ? e[n] : [e[n]]) : o[n] = e[n];
						else {
							if (a[n] !== s) return _(e[n], n);
							ht(st(o[n] === s ? "setupUndef" : "setupError", n), 2), r = !1;
						}
				return r;
			}, _t = function() {
				function e(e) {
					var t = Dt.call(e),
						n = t.length;
					return i ? (t[1] = "on" + t[1], n > 3 && t.pop()) : n === 3 && t.push(!1), t;
				}

				function t(e, t) {
					var n = e.shift(),
						r = [s[t]];
					i ? n[r](e[0], e[1]) : n[r].apply(n, e);
				}

				function n() {
					t(e(arguments), "add");
				}

				function r() {
					t(e(arguments), "remove");
				}
				var i = window.attachEvent,
					s = {
						add: i ? "attachEvent" : "addEventListener",
						remove: i ? "detachEvent" : "removeEventListener"
					};
				return {
					add: n,
					remove: r
				};
			}(), It = {
				abort: r(function() {
					o._wD(this._s.id + ": abort");
				}),
				canplay: r(function() {
					var e = this._s,
						t;
					if (e._html5_canplay) return !0;
					e._html5_canplay = !0, o._wD(e.id + ": canplay"), e._onbufferchange(0), t = e._iO.position !== s && !isNaN(e._iO.position) ? e._iO.position / sn : null;
					if (e.position && this.currentTime !== t) {
						o._wD(e.id + ": canplay: Setting position to " + t);
						try {
							this.currentTime = t;
						} catch (n) {
							o._wD(e.id + ": canplay: Setting position of " + t + " failed: " + n.message, 2);
						}
					}
					e._iO._oncanplay && e._iO._oncanplay();
				}),
				canplaythrough: r(function() {
					var e = this._s;
					e.loaded || (e._onbufferchange(0), e._whileloading(e.bytesLoaded, e.bytesTotal, e._get_html5_duration()), e._onload(!0));
				}),
				ended: r(function() {
					var e = this._s;
					o._wD(e.id + ": ended"), e._onfinish();
				}),
				error: r(function() {
					o._wD(this._s.id + ": HTML5 error, code " + this.error.code), this._s._onload(!1);
				}),
				loadeddata: r(function() {
					var e = this._s;
					o._wD(e.id + ": loadeddata"), !e._loaded && !Jt && (e.duration = e._get_html5_duration());
				}),
				loadedmetadata: r(function() {
					o._wD(this._s.id + ": loadedmetadata");
				}),
				loadstart: r(function() {
					o._wD(this._s.id + ": loadstart"), this._s._onbufferchange(1);
				}),
				play: r(function() {
					this._s._onbufferchange(0);
				}),
				playing: r(function() {
					o._wD(this._s.id + ": playing"), this._s._onbufferchange(0);
				}),
				progress: r(function(e) {
					var t = this._s,
						n, r, i, s = 0,
						u = e.type === "progress",
						a = e.target.buffered,
						f = e.loaded || 0,
						l = e.total || 1;
					t.buffered = [];
					if (a && a.length) {
						for (n = 0, r = a.length; n < r; n++) t.buffered.push({
							start: a.start(n) * sn,
							end: a.end(n) * sn
						});
						s = (a.end(0) - a.start(0)) * sn, f = Math.min(1, s / (e.target.duration * sn));
						if (u && a.length > 1) {
							i = [], r = a.length;
							for (n = 0; n < r; n++) i.push(e.target.buffered.start(n) * sn + "-" + e.target.buffered.end(n) * sn);
							o._wD(this._s.id + ": progress, timeRanges: " + i.join(", "));
						}
						u && !isNaN(f) && o._wD(this._s.id + ": progress, " + Math.floor(f * 100) + "% loaded");
					}
					isNaN(f) || (t._onbufferchange(0), t._whileloading(f, l, t._get_html5_duration()), f && l && f === l && It.canplaythrough.call(this, e));
				}),
				ratechange: r(function() {
					o._wD(this._s.id + ": ratechange");
				}),
				suspend: r(function(e) {
					var t = this._s;
					o._wD(this._s.id + ": suspend"), It.progress.call(this, e), t._onsuspend();
				}),
				stalled: r(function() {
					o._wD(this._s.id + ": stalled");
				}),
				timeupdate: r(function() {
					this._s._onTimer();
				}),
				waiting: r(function() {
					var e = this._s;
					o._wD(this._s.id + ": waiting"), e._onbufferchange(1);
				})
			}, Ct = function(e) {
				var t;
				return !e || !e.type && !e.url && !e.serverURL ? t = !1 : e.serverURL || e.type && n(e.type) ? t = !1 : t = e.type ? kt({
					type: e.type
				}) : kt({
					url: e.url
				}) || o.html5Only || e.url.match(/data\:/i), t;
			}, At = function(e) {
				var t;
				return e && (t = Jt && !Wt ? null : Qt ? on : null, e.src = t, e._called_unload !== undefined && (e._called_load = !1)), Pt && (Ht = null), t;
			}, kt = function(e) {
				if (!o.useHTML5Audio || !o.hasHTML5) return !1;
				var t = e.url || null,
					r = e.type || null,
					i = o.audioFormats,
					u, a, f, l;
				if (r && o.html5[r] !== s) return o.html5[r] && !n(r);
				if (!Lt) {
					Lt = [];
					for (l in i) i.hasOwnProperty(l) && (Lt.push(l), i[l].related && (Lt = Lt.concat(i[l].related)));
					Lt = new RegExp("\\.(" + Lt.join("|") + ")(\\?.*)?$", "i");
				}
				return f = t ? t.toLowerCase().match(Lt) : null, !f || !f.length ? r ? (a = r.indexOf(";"), f = (a !== -1 ? r.substr(0, a) : r).substr(6)) : u = !1 : f = f[1], f && o.html5[f] !== s ? u = o.html5[f] && !n(f) : (r = "audio/" + f, u = o.html5.canPlayType({
					type: r
				}), o.html5[f] = u, u = u && o.html5[r] && !n(r)), u;
			}, Mt = function() {
				function e(e) {
					var n, r, i, s = !1,
						u = !1;
					if (!t || typeof t.canPlayType != "function") return s;
					if (e instanceof Array) {
						for (r = 0, i = e.length; r < i; r++)
							if (o.html5[e[r]] || t.canPlayType(e[r]).match(o.html5Test)) u = !0, o.html5[e[r]] = !0, o.flash[e[r]] = !!e[r].match(rn);
						s = u;
					} else n = t && typeof t.canPlayType == "function" ? t.canPlayType(e) : !1, s = !!n && !!n.match(o.html5Test);
					return s;
				}
				if (!o.useHTML5Audio || !o.hasHTML5) return o.html5.usingFlash = !0, Tt = !0, !1;
				var t = Audio !== s ? Kt && opera.version() < 10 ? new Audio(null) : new Audio : null,
					n, r, i = {},
					u, a;
				u = o.audioFormats;
				for (n in u)
					if (u.hasOwnProperty(n)) {
						r = "audio/" + n, i[n] = e(u[n].type), i[r] = i[n], n.match(rn) ? (o.flash[n] = !0, o.flash[r] = !0) : (o.flash[n] = !1, o.flash[r] = !1);
						if (u[n] && u[n].related)
							for (a = u[n].related.length - 1; a >= 0; a--) i["audio/" + u[n].related[a]] = i[n], o.html5[u[n].related[a]] = i[n], o.flash[u[n].related[a]] = i[n];
					}
				return i.canPlayType = t ? e : null, o.html5 = M(o.html5, i), o.html5.usingFlash = Nt(), Tt = o.html5.usingFlash, !0;
			}, R = {
				notReady: "Unavailable - wait until onready() has fired.",
				notOK: "Audio support is not available.",
				domError: f + "exception caught while appending SWF to DOM.",
				spcWmode: "Removing wmode, preventing known SWF loading issue(s)",
				swf404: l + "Verify that %s is a valid path.",
				tryDebug: "Try " + f + ".debugFlash = true for more security details (output goes to SWF.)",
				checkSWF: "See SWF output for more debug info.",
				localFail: l + "Non-HTTP page (" + v.location.protocol + " URL?) Review Flash player security settings for this special case:\nhttp://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html\nMay need to add/allow path, eg. c:/sm2/ or /users/me/sm2/",
				waitFocus: l + "Special case: Waiting for SWF to load with window focus...",
				waitForever: l + "Waiting indefinitely for Flash (will recover if unblocked)...",
				waitSWF: l + "Waiting for 100% SWF load...",
				needFunction: l + "Function object expected for %s",
				badID: 'Sound ID "%s" should be a string, starting with a non-numeric character',
				currentObj: l + "_debug(): Current sound objects",
				waitOnload: l + "Waiting for window.onload()",
				docLoaded: l + "Document already loaded",
				onload: l + "initComplete(): calling soundManager.onload()",
				onloadOK: f + ".onload() complete",
				didInit: l + "init(): Already called?",
				secNote: "Flash security note: Network/internet URLs will not load due to security restrictions. Access can be configured via Flash Player Global Security Settings Page: http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html",
				badRemove: l + "Failed to remove Flash node.",
				shutdown: f + ".disable(): Shutting down",
				queue: l + "Queueing %s handler",
				smError: "SMSound.load(): Exception: JS-Flash communication failed, or JS error.",
				fbTimeout: "No flash response, applying ." + at.swfTimedout + " CSS...",
				fbLoaded: "Flash loaded",
				fbHandler: l + "flashBlockHandler()",
				manURL: "SMSound.load(): Using manually-assigned URL",
				onURL: f + ".load(): current URL already assigned.",
				badFV: f + '.flashVersion must be 8 or 9. "%s" is invalid. Reverting to %s.',
				as2loop: "Note: Setting stream:false so looping can work (flash 8 limitation)",
				noNSLoop: "Note: Looping not implemented for MovieStar formats",
				needfl9: "Note: Switching to flash 9, required for MP4 formats.",
				mfTimeout: "Setting flashLoadTimeout = 0 (infinite) for off-screen, mobile flash case",
				needFlash: l + "Fatal error: Flash is needed to play some required formats, but is not available.",
				gotFocus: l + "Got window focus.",
				policy: "Enabling usePolicyFile for data access",
				setup: f + ".setup(): allowed parameters: %s",
				setupError: f + '.setup(): "%s" cannot be assigned with this method.',
				setupUndef: f + '.setup(): Could not find option "%s"',
				setupLate: f + ".setup(): url, flashVersion and html5Test property changes will not take effect until reboot().",
				noURL: l + "Flash URL required. Call soundManager.setup({url:...}) to get started.",
				sm2Loaded: "SoundManager 2: Ready.",
				reset: f + ".reset(): Removing event callbacks",
				mobileUA: "Mobile UA detected, preferring HTML5 by default.",
				globalHTML5: "Using singleton HTML5 Audio() pattern for this device."
			}, st = function() {
				var e = Dt.call(arguments),
					t = e.shift(),
					n = R && R[t] ? R[t] : "",
					r, i;
				if (n && e && e.length)
					for (r = 0, i = e.length; r < i; r++) n = n.replace("%s", e[r]);
				return n;
			}, lt = function(e) {
				return b === 8 && e.loops > 1 && e.stream && (L("as2loop"), e.stream = !1), e;
			}, ct = function(e, t) {
				return e && !e.usePolicyFile && (e.onid3 || e.usePeakData || e.useWaveformData || e.useEQData) && (o._wD((t || "") + st("policy")), e.usePolicyFile = !0), e;
			}, ht = function(e) {
				Zt && console.warn !== s ? console.warn(e) : o._wD(e);
			}, m = function() {
				return !1;
			}, et = function(e) {
				var t;
				for (t in e) e.hasOwnProperty(t) && typeof e[t] == "function" && (e[t] = m);
				t = null;
			}, tt = function(e) {
				e === s && (e = !1), (C || e) && o.disable(e);
			}, nt = function(e) {
				var t = null,
					n;
				if (e)
					if (e.match(/\.swf(\?.*)?$/i)) {
						t = e.substr(e.toLowerCase().lastIndexOf(".swf?") + 4);
						if (t) return e;
					} else e.lastIndexOf("/") !== e.length - 1 && (e += "/");
				return n = (e && e.lastIndexOf("/") !== -1 ? e.substr(0, e.lastIndexOf("/") + 1) : "./") + o.movieURL, o.noSWFCache && (n += "?ts=" + (new Date).getTime()), n;
			}, I = function() {
				b = parseInt(o.flashVersion, 10), b !== 8 && b !== 9 && (o._wD(st("badFV", b, Z)), o.flashVersion = b = Z);
				var e = o.debugMode || o.debugFlash ? "_debug.swf" : ".swf";
				o.useHTML5Audio && !o.html5Only && o.audioFormats.mp4.required && b < 9 && (o._wD(st("needfl9")), o.flashVersion = b = 9), o.version = o.versionNumber + (o.html5Only ? " (HTML5-only mode)" : b === 9 ? " (AS3/Flash 9)" : " (AS2/Flash 8)"), b > 8 ? (o.defaultOptions = M(o.defaultOptions, o.flash9Options), o.features.buffering = !0, o.defaultOptions = M(o.defaultOptions, o.movieStarOptions), o.filePatterns.flash9 = new RegExp("\\.(mp3|" + ln.join("|") + ")(\\?.*)?$", "i"), o.features.movieStar = !0) : o.features.movieStar = !1, o.filePattern = o.filePatterns[b !== 8 ? "flash9" : "flash8"], o.movieURL = (b === 8 ? "soundmanager2.swf" : "soundmanager2_flash9.swf").replace(".swf", e), o.features.peakData = o.features.waveformData = o.features.eqData = b > 8;
			}, Q = function(e, t) {
				if (!a) return !1;
				a._setPolling(e, t);
			}, G = function() {
				o.debugURLParam.test(d) && (o.debugMode = !0);
				if (h(o.debugID)) return !1;
				var e, t, n, r, i;
				if (o.debugMode && !h(o.debugID) && (!Zt || !o.useConsole || !o.consoleOnly)) {
					e = v.createElement("div"), e.id = o.debugID + "-toggle", r = {
						position: "fixed",
						bottom: "0px",
						right: "0px",
						width: "1.2em",
						height: "1.2em",
						lineHeight: "1.2em",
						margin: "2px",
						textAlign: "center",
						border: "1px solid #999",
						cursor: "pointer",
						background: "#fff",
						color: "#333",
						zIndex: 10001
					}, e.appendChild(v.createTextNode("-")), e.onclick = ft, e.title = "Toggle SM2 debug console", p.match(/msie 6/i) && (e.style.position = "absolute", e.style.cursor = "hand");
					for (i in r) r.hasOwnProperty(i) && (e.style[i] = r[i]);
					t = v.createElement("div"), t.id = o.debugID, t.style.display = o.debugMode ? "block" : "none";
					if (o.debugMode && !h(e.id)) {
						try {
							n = $(), n.appendChild(e);
						} catch (s) {
							throw new Error(st("domError") + " \n" + s.toString());
						}
						n.appendChild(t);
					}
				}
				n = null;
			}, pt = this.getSoundById, L = function(e, t) {
				return e ? o._wD(st(e), t) : "";
			}, ft = function() {
				var e = h(o.debugID),
					t = h(o.debugID + "-toggle");
				if (!e) return !1;
				E ? (t.innerHTML = "+", e.style.display = "none") : (t.innerHTML = "-", e.style.display = "block"), E = !E;
			}, S = function(e, t, n) {
				if (window.sm2Debugger !== s) try {
					sm2Debugger.handleEvent(e, t, n);
				} catch (r) {
					return !1;
				}
				return !0;
			}, ut = function() {
				var e = [];
				return o.debugMode && e.push(at.sm2Debug), o.debugFlash && e.push(at.flashDebug), o.useHighPerformance && e.push(at.highPerf), e.join(" ");
			}, ot = function() {
				var e = st("fbHandler"),
					t = o.getMoviePercent(),
					n = at,
					r = {
						type: "FLASHBLOCK"
					};
				if (o.html5Only) return !1;
				o.ok() ? (o.didFlashBlock && o._wD(e + ": Unblocked"), o.oMC && (o.oMC.className = [ut(), n.swfDefault, n.swfLoaded + (o.didFlashBlock ? " " + n.swfUnblocked : "")].join(" "))) : (Tt && (o.oMC.className = ut() + " " + n.swfDefault + " " + (t === null ? n.swfTimedout : n.swfError), o._wD(e + ": " + st("fbTimeout") + (t ? " (" + st("fbLoaded") + ")" : ""))), o.didFlashBlock = !0, H({
					type: "ontimeout",
					ignoreInit: !0,
					error: r
				}), K(r));
			}, P = function(e, t, n) {
				w[e] === s && (w[e] = []), w[e].push({
					method: t,
					scope: n || null,
					fired: !1
				});
			}, H = function(e) {
				e || (e = {
					type: o.ok() ? "onready" : "ontimeout"
				});
				if (!N && e && !e.ignoreInit) return !1;
				if (e.type === "ontimeout" && (o.ok() || C && !e.ignoreInit)) return !1;
				var t = {
						success: e && e.ignoreInit ? o.ok() : !C
					},
					n = e && e.type ? w[e.type] || [] : [],
					r = [],
					i, s, u = [t],
					a = Tt && !o.ok();
				e.error && (u[0].error = e.error);
				for (i = 0, s = n.length; i < s; i++) n[i].fired !== !0 && r.push(n[i]);
				if (r.length)
					for (i = 0, s = r.length; i < s; i++) r[i].scope ? r[i].method.apply(r[i].scope, u) : r[i].method.apply(this, u), a || (r[i].fired = !0);
				return !0;
			}, B = function() {
				window.setTimeout(function() {
					o.useFlashBlock && ot(), H(), typeof o.onload == "function" && (L("onload", 1), o.onload.apply(window), L("onloadOK", 1)), o.waitForWindowLoad && _t.add(window, "load", B);
				}, 1);
			}, jt = function() {
				if (Bt !== s) return Bt;
				var e = !1,
					t = navigator,
					n = t.plugins,
					r, i, o, u = window.ActiveXObject;
				if (n && n.length) i = "application/x-shockwave-flash", o = t.mimeTypes, o && o[i] && o[i].enabledPlugin && o[i].enabledPlugin.description && (e = !0);
				else if (u !== s && !p.match(/MSAppHost/i)) {
					try {
						r = new u("ShockwaveFlash.ShockwaveFlash");
					} catch (a) {
						r = null;
					}
					e = !!r, r = null;
				}
				return Bt = e, e;
			}, Nt = function() {
				var e, t, n = o.audioFormats,
					r = Wt && !!p.match(/os (1|2|3_0|3_1)/i);
				if (r) o.hasHTML5 = !1, o.html5Only = !0, o.oMC && (o.oMC.style.display = "none");
				else if (o.useHTML5Audio) {
					if (!o.html5 || !o.html5.canPlayType) o._wD("SoundManager: No HTML5 Audio() support detected."), o.hasHTML5 = !1;
					Yt && o._wD(l + "Note: Buggy HTML5 Audio in Safari on this OS X release, see https://bugs.webkit.org/show_bug.cgi?id=32159 - " + (Bt ? "will use flash fallback for MP3/MP4, if available" : " would use flash fallback for MP3/MP4, but none detected."), 1);
				}
				if (o.useHTML5Audio && o.hasHTML5) {
					xt = !0;
					for (t in n) n.hasOwnProperty(t) && n[t].required && (o.html5.canPlayType(n[t].type) ? o.preferFlash && (o.flash[t] || o.flash[n[t].type]) && (e = !0) : (xt = !1, e = !0));
				}
				return o.ignoreFlash && (e = !1, xt = !0), o.html5Only = o.hasHTML5 && o.useHTML5Audio && !e, !o.html5Only;
			}, Et = function(e) {
				var t, n, r = 0,
					i;
				if (e instanceof Array) {
					for (t = 0, n = e.length; t < n; t++)
						if (e[t] instanceof Object) {
							if (o.canPlayMIME(e[t].type)) {
								r = t;
								break;
							}
						} else if (o.canPlayURL(e[t])) {
						r = t;
						break;
					}
					e[r].url && (e[r] = e[r].url), i = e[r];
				} else i = e;
				return i;
			}, mt = function(e) {
				e._hasTimer || (e._hasTimer = !0, !Gt && o.html5PollingInterval && (wt === null && bt === 0 && (wt = setInterval(yt, o.html5PollingInterval)), bt++));
			}, gt = function(e) {
				e._hasTimer && (e._hasTimer = !1, !Gt && o.html5PollingInterval && bt--);
			}, yt = function() {
				var e;
				if (wt !== null && !bt) return clearInterval(wt), wt = null, !1;
				for (e = o.soundIDs.length - 1; e >= 0; e--) o.sounds[o.soundIDs[e]].isHTML5 && o.sounds[o.soundIDs[e]]._hasTimer && o.sounds[o.soundIDs[e]]._onTimer();
			}, K = function(e) {
				e = e !== s ? e : {}, typeof o.onerror == "function" && o.onerror.apply(window, [{
					type: e.type !== s ? e.type : null
				}]), e.fatal !== s && e.fatal && o.disable();
			}, Ft = function() {
				if (!Yt || !jt()) return !1;
				var e = o.audioFormats,
					t, n;
				for (n in e)
					if (e.hasOwnProperty(n))
						if (n === "mp3" || n === "mp4") {
							o._wD(f + ": Using flash fallback for " + n + " format"), o.html5[n] = !1;
							if (e[n] && e[n].related)
								for (t = e[n].related.length - 1; t >= 0; t--) o.html5[e[n].related[t]] = !1;
						}
			}, this._setSandboxType = function(e) {
				var t = o.sandbox;
				t.type = e, t.description = t.types[t.types[e] !== s ? e : "unknown"], t.type === "localWithFile" ? (t.noRemote = !0, t.noLocal = !1, L("secNote", 2)) : t.type === "localWithNetwork" ? (t.noRemote = !1, t.noLocal = !0) : t.type === "localTrusted" && (t.noRemote = !1, t.noLocal = !1);
			}, this._externalInterfaceOK = function(e) {
				if (o.swfLoaded) return !1;
				var t;
				S("swf", !0), S("flashtojs", !0), o.swfLoaded = !0, tn = !1, Yt && Ft();
				if (!e || e.replace(/\+dev/i, "") !== o.versionNumber.replace(/\+dev/i, "")) return t = f + ': Fatal: JavaScript file build "' + o.versionNumber + '" does not match Flash SWF build "' + e + '" at ' + o.url + ". Ensure both are up-to-date.", setTimeout(function() {
					throw new Error(t);
				}, 0), !1;
				setTimeout(y, Vt ? 100 : 1);
			}, J = function(e, t) {
				function n() {
					var e = [],
						t, n = [],
						r = " + ";
					t = "SoundManager " + o.version + (!o.html5Only && o.useHTML5Audio ? o.hasHTML5 ? " + HTML5 audio" : ", no HTML5 audio support" : ""), o.html5Only ? o.html5PollingInterval && e.push("html5PollingInterval (" + o.html5PollingInterval + "ms)") : (o.preferFlash && e.push("preferFlash"), o.useHighPerformance && e.push("useHighPerformance"), o.flashPollingInterval && e.push("flashPollingInterval (" + o.flashPollingInterval + "ms)"), o.html5PollingInterval && e.push("html5PollingInterval (" + o.html5PollingInterval + "ms)"), o.wmode && e.push("wmode (" + o.wmode + ")"), o.debugFlash && e.push("debugFlash"), o.useFlashBlock && e.push("flashBlock")), e.length && (n = n.concat([e.join(r)])), o._wD(t + (n.length ? r + n.join(", ") : ""), 1), qt();
				}

				function r(e, t) {
					return '<param name="' + e + '" value="' + t + '" />';
				}
				if (x && T) return !1;
				if (o.html5Only) return I(), n(), o.oMC = h(o.movieID), y(), x = !0, T = !0, !1;
				var i = t || o.url,
					u = o.altURL || i,
					a = "JS/Flash audio component (SoundManager 2)",
					f = $(),
					l = ut(),
					c = null,
					d = v.getElementsByTagName("html")[0],
					m, g, b, w, E, S, N, C;
				c = d && d.dir && d.dir.match(/rtl/i), e = e === s ? o.id : e, I(), o.url = nt(un ? i : u), t = o.url, o.wmode = !o.wmode && o.useHighPerformance ? "transparent" : o.wmode, o.wmode !== null && (p.match(/msie 8/i) || !Vt && !o.useHighPerformance) && navigator.platform.match(/win32|win64/i) && (St.push(R.spcWmode), o.wmode = null), m = {
					name: e,
					id: e,
					src: t,
					quality: "high",
					allowScriptAccess: o.allowScriptAccess,
					bgcolor: o.bgColor,
					pluginspage: an + "www.macromedia.com/go/getflashplayer",
					title: a,
					type: "application/x-shockwave-flash",
					wmode: o.wmode,
					hasPriority: "true"
				}, o.debugFlash && (m.FlashVars = "debug=1"), o.wmode || delete m.wmode;
				if (Vt) g = v.createElement("div"), w = ['<object id="' + e + '" data="' + t + '" type="' + m.type + '" title="' + m.title + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="' + an + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">', r("movie", t), r("AllowScriptAccess", o.allowScriptAccess), r("quality", m.quality), o.wmode ? r("wmode", o.wmode) : "", r("bgcolor", o.bgColor), r("hasPriority", "true"), o.debugFlash ? r("FlashVars", m.FlashVars) : "", "</object>"].join("");
				else {
					g = v.createElement("embed");
					for (b in m) m.hasOwnProperty(b) && g.setAttribute(b, m[b]);
				}
				G(), l = ut(), f = $();
				if (f) {
					o.oMC = h(o.movieID) || v.createElement("div");
					if (!o.oMC.id) {
						o.oMC.id = o.movieID, o.oMC.className = at.swfDefault + " " + l, S = null, E = null, o.useFlashBlock || (o.useHighPerformance ? S = {
							position: "fixed",
							width: "8px",
							height: "8px",
							bottom: "0px",
							left: "0px",
							overflow: "hidden"
						} : (S = {
							position: "absolute",
							width: "6px",
							height: "6px",
							top: "-9999px",
							left: "-9999px"
						}, c && (S.left = Math.abs(parseInt(S.left, 10)) + "px"))), $t && (o.oMC.style.zIndex = 1e4);
						if (!o.debugFlash)
							for (N in S) S.hasOwnProperty(N) && (o.oMC.style[N] = S[N]);
						try {
							Vt || o.oMC.appendChild(g), f.appendChild(o.oMC), Vt && (E = o.oMC.appendChild(v.createElement("div")), E.className = at.swfBox, E.innerHTML = w), T = !0;
						} catch (k) {
							throw new Error(st("domError") + " \n" + k.toString());
						}
					} else C = o.oMC.className, o.oMC.className = (C ? C + " " : at.swfDefault) + (l ? " " + l : ""), o.oMC.appendChild(g), Vt && (E = o.oMC.appendChild(v.createElement("div")), E.className = at.swfBox, E.innerHTML = w), T = !0;
				}
				return x = !0, n(), !0;
			}, U = function() {
				return o.html5Only ? (J(), !1) : a ? !1 : o.url ? (a = o.getMovie(o.id), a || (rt ? (Vt ? o.oMC.innerHTML = it : o.oMC.appendChild(rt), rt = null, x = !0) : J(o.id, o.url), a = o.getMovie(o.id)), typeof o.oninitmovie == "function" && setTimeout(o.oninitmovie, 1), Rt(), !0) : (L("noURL"), !1);
			}, j = function() {
				setTimeout(F, 1e3);
			}, F = function() {
				var e, t = !1;
				if (!o.url) return !1;
				if (dt) return !1;
				dt = !0, _t.remove(window, "load", j);
				if (tn && !en) return L("waitFocus"), !1;
				N || (e = o.getMoviePercent(), e > 0 && e < 100 && (t = !0)), setTimeout(function() {
					e = o.getMoviePercent();
					if (t) return dt = !1, o._wD(st("waitSWF")), window.setTimeout(j, 1), !1;
					N || (o._wD(f + ": No Flash response within expected time. Likely causes: " + (e === 0 ? "SWF load failed, " : "") + "Flash blocked or JS-Flash security error." + (o.debugFlash ? " " + st("checkSWF") : ""), 2), !un && e && (L("localFail", 2), o.debugFlash || L("tryDebug", 2)), e === 0 && o._wD(st("swf404", o.url), 1), S("flashtojs", !1, ": Timed out" + un ? " (Check flash security or flash blockers)" : " (No plugin/missing SWF?)")), !N && nn && (e === null ? o.useFlashBlock || o.flashLoadTimeout === 0 ? (o.useFlashBlock && ot(), L("waitForever")) : !o.useFlashBlock && xt ? window.setTimeout(function() {
						ht(l + "useFlashBlock is false, 100% HTML5 mode is possible. Rebooting with preferFlash: false..."), o.setup({
							preferFlash: !1
						}).reboot(), o.didFlashBlock = !0, o.beginDelayedInit();
					}, 1) : (L("waitForever"), H({
						type: "ontimeout",
						ignoreInit: !0
					})) : o.flashLoadTimeout === 0 ? L("waitForever") : tt(!0));
				}, o.flashLoadTimeout);
			}, q = function() {
				function e() {
					_t.remove(window, "focus", q);
				}
				return en || !tn ? (e(), !0) : (nn = !0, en = !0, L("gotFocus"), dt = !1, j(), e(), !0);
			}, Rt = function() {
				St.length && (o._wD("SoundManager 2: " + St.join(" "), 1), St = []);
			}, qt = function() {
				Rt();
				var e, t = [];
				if (o.useHTML5Audio && o.hasHTML5) {
					for (e in o.audioFormats) o.audioFormats.hasOwnProperty(e) && t.push(e + " = " + o.html5[e] + (!o.html5[e] && Tt && o.flash[e] ? " (using flash)" : o.preferFlash && o.flash[e] && Tt ? " (preferring flash)" : o.html5[e] ? "" : " (" + (o.audioFormats[e].required ? "required, " : "") + "and no flash support)"));
					o._wD("SoundManager 2 HTML5 support: " + t.join(", "), 1);
				}
			}, O = function(e) {
				if (N) return !1;
				if (o.html5Only) return L("sm2Loaded"), N = !0, B(), S("onload", !0), !0;
				var t = o.useFlashBlock && o.flashLoadTimeout && !o.getMoviePercent(),
					n = !0,
					r;
				return t || (N = !0, C && (r = {
					type: !Bt && Tt ? "NO_FLASH" : "INIT_TIMEOUT"
				})), o._wD("SoundManager 2 " + (C ? "failed to load" : "loaded") + " (" + (C ? "Flash security/load error" : "OK") + ")", C ? 2 : 1), C || e ? (o.useFlashBlock && o.oMC && (o.oMC.className = ut() + " " + (o.getMoviePercent() === null ? at.swfTimedout : at.swfError)), H({
					type: "ontimeout",
					error: r,
					ignoreInit: !0
				}), S("onload", !1), K(r), n = !1) : S("onload", !0), C || (o.waitForWindowLoad && !k ? (L("waitOnload"), _t.add(window, "load", B)) : (o.waitForWindowLoad && k && L("docLoaded"), B())), n;
			}, g = function() {
				var e, t = o.setupOptions;
				for (e in t) t.hasOwnProperty(e) && (o[e] === s ? o[e] = t[e] : o[e] !== t[e] && (o.setupOptions[e] = o[e]));
			}, y = function() {
				function e() {
					_t.remove(window, "load", o.beginDelayedInit);
				}
				if (N) return L("didInit"), !1;
				if (o.html5Only) return N || (e(), o.enabled = !0, O()), !0;
				U();
				try {
					a._externalInterfaceTest(!1), Q(!0, o.flashPollingInterval || (o.useHighPerformance ? 10 : 50)), o.debugMode || a._disableDebug(), o.enabled = !0, S("jstoflash", !0), o.html5Only || _t.add(window, "unload", m);
				} catch (t) {
					return o._wD("js/flash exception: " + t.toString()), S("jstoflash", !1), K({
						type: "JS_TO_FLASH_EXCEPTION",
						fatal: !0
					}), tt(!0), O(), !1;
				}
				return O(), e(), !0;
			}, W = function() {
				return V ? !1 : (V = !0, g(), G(), function() {
					var e = "sm2-usehtml5audio=",
						t = "sm2-preferflash=",
						n = null,
						r = null,
						i = d.toLowerCase();
					i.indexOf(e) !== -1 && (n = i.charAt(i.indexOf(e) + e.length) === "1", Zt && console.log((n ? "Enabling " : "Disabling ") + "useHTML5Audio via URL parameter"), o.setup({
						useHTML5Audio: n
					})), i.indexOf(t) !== -1 && (r = i.charAt(i.indexOf(t) + t.length) === "1", Zt && console.log((r ? "Enabling " : "Disabling ") + "preferFlash via URL parameter"), o.setup({
						preferFlash: r
					}));
				}(), !Bt && o.hasHTML5 && (o._wD("SoundManager: No Flash detected" + (o.useHTML5Audio ? ". Trying HTML5-only mode." : ", enabling HTML5."), 1), o.setup({
					useHTML5Audio: !0,
					preferFlash: !1
				})), Mt(), !Bt && Tt && (St.push(R.needFlash), o.setup({
					flashLoadTimeout: 1
				})), v.removeEventListener && v.removeEventListener("DOMContentLoaded", W, !1), U(), !0);
			}, Ot = function() {
				return v.readyState === "complete" && (W(), v.detachEvent("onreadystatechange", Ot)), !0;
			}, X = function() {
				k = !0, _t.remove(window, "load", X);
			}, z = function() {
				if (Gt) {
					(!o.setupOptions.useHTML5Audio || o.setupOptions.preferFlash) && St.push(R.mobileUA), o.setupOptions.useHTML5Audio = !0, o.setupOptions.preferFlash = !1;
					if (Wt || Xt && !p.match(/android\s2\.3/i)) St.push(R.globalHTML5), Wt && (o.ignoreFlash = !0), Pt = !0;
				}
			}, z(), jt(), _t.add(window, "focus", q), _t.add(window, "load", j), _t.add(window, "load", X), v.addEventListener ? v.addEventListener("DOMContentLoaded", W, !1) : v.attachEvent ? v.attachEvent("onreadystatechange", Ot) : (S("onload", !1), K({
				type: "NO_DOM2_EVENTS",
				fatal: !0
			}));
		}
		if (window.SM2_DEFER === undefined || !SM2_DEFER) i = new o;
		return window.soundManager = i, i;
	} catch (u) {
		wx.jslog({
			src: "biz_web/lib/soundmanager2.js"
		}, u);
	}
});
define("tpl/media/img.html.js", [], function() {
	return '<div class="appmsgSendedItem simple_img">\n    <a class="title_wrp" href="/cgi-bin/getimgdata?token={token}&msgid={msgid}&mode=large&source={source}&fileId={id}&ow={ow}" target="_blank">\n        <img class="icon" src="/cgi-bin/getimgdata?token={token}&msgid={msgid}&mode=small&source={source}&fileId={id}&ow={ow}">\n        <span class="title">[图片]</span>\n    </a>\n</div>';
});
define("biz_common/jquery.validate.js", [], function() {
	! function(t) {
		t.extend(t.fn, {
			validate: function(e) {
				if (!this.length) return void(e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
				var i = t.data(this[0], "validator");
				return i ? i : (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i),
					i.settings.onsubmit && (this.validateDelegate(":submit", "click", function(e) {
						i.settings.submitHandler && (i.submitButton = e.target), t(e.target).hasClass("cancel") && (i.cancelSubmit = !0),
							void 0 !== t(e.target).attr("formnovalidate") && (i.cancelSubmit = !0);
					}), this.submit(function(e) {
						function r() {
							var r;
							return i.settings.submitHandler ? (i.submitButton && (r = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)),
								i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && r.remove(), !1) : !0;
						}
						return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, r()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : r() : (i.focusInvalid(), !1);
					})), i);
			},
			valid: function() {
				if (t(this[0]).is("form")) return this.validate().form();
				var e = !0,
					i = t(this[0].form).validate();
				return this.each(function() {
					e = e && i.element(this);
				}), e;
			},
			removeAttrs: function(e) {
				var i = {},
					r = this;
				return t.each(e.split(/\s/), function(t, e) {
					i[e] = r.attr(e), r.removeAttr(e);
				}), i;
			},
			rules: function(e, i) {
				var r = this[0];
				if (e) {
					var n = t.data(r.form, "validator").settings,
						s = n.rules,
						a = t.validator.staticRules(r);
					switch (e) {
						case "add":
							t.extend(a, t.validator.normalizeRule(i)), delete a.messages, s[r.name] = a, i.messages && (n.messages[r.name] = t.extend(n.messages[r.name], i.messages));
							break;

						case "remove":
							if (!i) return delete s[r.name], a;
							var o = {};
							return t.each(i.split(/\s/), function(t, e) {
								o[e] = a[e], delete a[e];
							}), o;
					}
				}
				var u = t.validator.normalizeRules(t.extend({}, t.validator.classRules(r), t.validator.attributeRules(r), t.validator.dataRules(r), t.validator.staticRules(r)), r);
				if (u.required) {
					var l = u.required;
					delete u.required, u = t.extend({
						required: l
					}, u);
				}
				return u;
			}
		}), t.extend(t.expr[":"], {
			blank: function(e) {
				return !t.trim("" + t(e).val());
			},
			filled: function(e) {
				return !!t.trim("" + t(e).val());
			},
			unchecked: function(e) {
				return !t(e).prop("checked");
			}
		}), t.validator = function(e, i) {
			this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init();
		}, t.validator.format = function(e, i) {
			return 1 === arguments.length ? function() {
				var i = t.makeArray(arguments);
				return i.unshift(e), t.validator.format.apply(this, i);
			} : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)),
				i.constructor !== Array && (i = [i]), t.each(i, function(t, i) {
					e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function() {
						return i;
					});
				}), e);
		}, t.extend(t.validator, {
			defaults: {
				messages: {},
				groups: {},
				rules: {},
				errorClass: "error",
				validClass: "valid",
				errorElement: "label",
				focusInvalid: !0,
				errorContainer: t([]),
				errorLabelContainer: t([]),
				onsubmit: !0,
				ignore: ":hidden",
				ignoreTitle: !1,
				onfocusin: function(t) {
					this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass),
						this.addWrapper(this.errorsFor(t)).hide());
				},
				onfocusout: function(t) {
					this.checkable(t) || this.element(t);
				},
				onkeyup: function(t, e) {
					(9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastElement) && this.element(t);
				},
				onclick: function(t) {
					t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode);
				},
				highlight: function(e, i, r) {
					"radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(r) : t(e).addClass(i).removeClass(r);
				},
				unhighlight: function(e, i, r) {
					"radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(r) : t(e).removeClass(i).addClass(r);
				}
			},
			setDefaults: function(e) {
				t.extend(t.validator.defaults, e);
			},
			messages: {
				required: "This field is required.",
				remote: "Please fix this field.",
				email: "Please enter a valid email address.",
				url: "Please enter a valid URL.",
				date: "Please enter a valid date.",
				dateISO: "Please enter a valid date (ISO).",
				number: "Please enter a valid number.",
				digits: "Please enter only digits.",
				creditcard: "Please enter a valid credit card number.",
				equalTo: "Please enter the same value again.",
				maxlength: t.validator.format("Please enter no more than {0} characters."),
				minlength: t.validator.format("Please enter at least {0} characters."),
				rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
				range: t.validator.format("Please enter a value between {0} and {1}."),
				max: t.validator.format("Please enter a value less than or equal to {0}."),
				min: t.validator.format("Please enter a value greater than or equal to {0}.")
			},
			autoCreateRanges: !1,
			prototype: {
				init: function() {
					function e(e) {
						var i = t.data(this[0].form, "validator"),
							r = "on" + e.type.replace(/^validate/, "");
						i.settings[r] && i.settings[r].call(i, this[0], e);
					}
					this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm),
						this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer),
						this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {},
						this.reset();
					var i = this.groups = {};
					t.each(this.settings.groups, function(e, r) {
						"string" == typeof r && (r = r.split(/\s/)), t.each(r, function(t, r) {
							i[r] = e;
						});
					});
					var r = this.settings.rules;
					t.each(r, function(e, i) {
							r[e] = t.validator.normalizeRule(i);
						}), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", e).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e),
						this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
				},
				form: function() {
					return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap),
						this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(),
						this.valid();
				},
				checkForm: function() {
					this.prepareForm();
					for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
					return this.valid();
				},
				element: function(e) {
					e = this.validationTargetFor(this.clean(e)), this.lastElement = e, this.prepareElement(e),
						this.currentElements = t(e);
					var i = this.check(e) !== !1;
					return i ? delete this.invalid[e.name] : this.invalid[e.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
						this.showErrors(), i;
				},
				showErrors: function(e) {
					if (e) {
						t.extend(this.errorMap, e), this.errorList = [];
						for (var i in e) this.errorList.push({
							message: e[i],
							element: this.findByName(i)[0]
						});
						this.successList = t.grep(this.successList, function(t) {
							return !(t.name in e);
						});
					}
					this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
				},
				resetForm: function() {
					t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null,
						this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue");
				},
				numberOfInvalids: function() {
					return this.objectLength(this.invalid);
				},
				objectLength: function(t) {
					var e = 0;
					for (var i in t) e++;
					return e;
				},
				hideErrors: function() {
					this.addWrapper(this.toHide).hide();
				},
				valid: function() {
					return 0 === this.size();
				},
				size: function() {
					return this.errorList.length;
				},
				focusInvalid: function() {
					if (this.settings.focusInvalid) try {
						t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
					} catch (e) {}
				},
				findLastActive: function() {
					var e = this.lastActive;
					return e && 1 === t.grep(this.errorList, function(t) {
						return t.element.name === e.name;
					}).length && e;
				},
				elements: function() {
					var e = this,
						i = {};
					return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
						return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this),
							this.name in i || !e.objectLength(t(this).rules()) ? !1 : (i[this.name] = !0, !0);
					});
				},
				clean: function(e) {
					return t(e)[0];
				},
				errors: function() {
					var e = this.settings.errorClass.replace(" ", ".");
					return t(this.settings.errorElement + "." + e, this.errorContext);
				},
				reset: function() {
					this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]),
						this.currentElements = t([]);
				},
				prepareForm: function() {
					this.reset(), this.toHide = this.errors().add(this.containers);
				},
				prepareElement: function(t) {
					this.reset(), this.toHide = this.errorsFor(t);
				},
				elementValue: function(e) {
					var i = t(e).attr("type"),
						r = t(e).val();
					return "radio" === i || "checkbox" === i ? t("input[name='" + t(e).attr("name") + "']:checked").val() : "string" == typeof r ? r.replace(/\r/g, "") : r;
				},
				check: function(e) {
					e = this.validationTargetFor(this.clean(e));
					var i, r = t(e).rules(),
						n = !1,
						s = this.elementValue(e);
					for (var a in r) {
						var o = {
							method: a,
							parameters: r[a]
						};
						try {
							if (i = t.validator.methods[a].call(this, s, e, o.parameters), "dependency-mismatch" === i) {
								n = !0;
								continue;
							}
							if (n = !1, "pending" === i) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
							if (!i) return this.formatAndAdd(e, o), !1;
						} catch (u) {
							throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + o.method + "' method.", u),
								u;
						}
					}
					return n ? void 0 : (this.objectLength(r) && this.successList.push(e), !0);
				},
				customDataMessage: function(e, i) {
					return t(e).data("msg-" + i.toLowerCase()) || e.attributes && t(e).attr("data-msg-" + i.toLowerCase());
				},
				customMessage: function(t, e) {
					var i = this.settings.messages[t];
					return i && (i.constructor === String ? i : i[e]);
				},
				findDefined: function() {
					for (var t = 0; t < arguments.length; t++)
						if (void 0 !== arguments[t]) return arguments[t];
					return void 0;
				},
				defaultMessage: function(e, i) {
					return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>");
				},
				formatAndAdd: function(e, i) {
					var r = this.defaultMessage(e, i.method),
						n = /\$?\{(\d+)\}/g;
					"function" == typeof r ? r = r.call(this, i.parameters, e) : n.test(r) && (r = t.validator.format(r.replace(n, "{$1}"), i.parameters)),
						this.errorList.push({
							message: r,
							element: e
						}), this.errorMap[e.name] = r, this.submitted[e.name] = r;
				},
				addWrapper: function(t) {
					return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t;
				},
				defaultShowErrors: function() {
					var t, e;
					for (t = 0; this.errorList[t]; t++) {
						var i = this.errorList[t];
						this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass),
							this.showLabel(i.element, i.message);
					}
					if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
						for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
					if (this.settings.unhighlight)
						for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
					this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
				},
				validElements: function() {
					return this.currentElements.not(this.invalidElements());
				},
				invalidElements: function() {
					return t(this.errorList).map(function() {
						return this.element;
					});
				},
				showLabel: function(e, i) {
					var r = this.errorsFor(e);
					r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
							r.html(i)) : (r = t("<" + this.settings.errorElement + ">").attr("for", this.idOrName(e)).addClass(this.settings.errorClass).html(i || ""),
							this.settings.wrapper && (r = r.hide().show().wrap("<" + this.settings.wrapper + " class='frm_msg fail'/>").parent()),
							this.labelContainer.append(r).length || (this.settings.errorPlacement ? this.settings.errorPlacement(r, t(e)) : r.insertAfter(e))), !i && this.settings.success && (r.text(""), "string" == typeof this.settings.success ? r.addClass(this.settings.success) : this.settings.success(r, e)),
						this.toShow = this.toShow.add(r);
				},
				errorsFor: function(e) {
					var i = this.idOrName(e);
					return this.errors().filter(function() {
						return t(this).attr("for") === i;
					});
				},
				idOrName: function(t) {
					return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name);
				},
				validationTargetFor: function(t) {
					return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]),
						t;
				},
				checkable: function(t) {
					return /radio|checkbox/i.test(t.type);
				},
				findByName: function(e) {
					return t(this.currentForm).find("[name='" + e + "']");
				},
				getLength: function(e, i) {
					switch (i.nodeName.toLowerCase()) {
						case "select":
							return t("option:selected", i).length;

						case "input":
							if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length;
					}
					return e.length;
				},
				depend: function(t, e) {
					return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0;
				},
				dependTypes: {
					"boolean": function(t) {
						return t;
					},
					string: function(e, i) {
						return !!t(e, i.form).length;
					},
					"function": function(t, e) {
						return t(e);
					}
				},
				optional: function(e) {
					var i = this.elementValue(e);
					return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch";
				},
				startRequest: function(t) {
					this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0);
				},
				stopRequest: function(e, i) {
					this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name],
						i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(),
							this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]),
							this.formSubmitted = !1);
				},
				previousValue: function(e) {
					return t.data(e, "previousValue") || t.data(e, "previousValue", {
						old: null,
						valid: !0,
						message: this.defaultMessage(e, "remote")
					});
				}
			},
			classRuleSettings: {
				required: {
					required: !0
				},
				email: {
					email: !0
				},
				url: {
					url: !0
				},
				date: {
					date: !0
				},
				dateISO: {
					dateISO: !0
				},
				number: {
					number: !0
				},
				digits: {
					digits: !0
				},
				creditcard: {
					creditcard: !0
				}
			},
			addClassRules: function(e, i) {
				e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e);
			},
			classRules: function(e) {
				var i = {},
					r = t(e).attr("class");
				return r && t.each(r.split(" "), function() {
					this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this]);
				}), i;
			},
			attributeRules: function(e) {
				var i = {},
					r = t(e),
					n = r[0].getAttribute("type");
				for (var s in t.validator.methods) {
					var a;
					"required" === s ? (a = r.get(0).getAttribute(s), "" === a && (a = !0), a = !!a) : a = r.attr(s), /min|max/.test(s) && (null === n || /number|range|text/.test(n)) && (a = Number(a)),
						a ? i[s] = a : n === s && "range" !== n && (i[s] = !0);
				}
				return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength,
					i;
			},
			dataRules: function(e) {
				var i, r, n = {},
					s = t(e);
				for (i in t.validator.methods) r = s.data("rule-" + i.toLowerCase()), void 0 !== r && (n[i] = r);
				return n;
			},
			staticRules: function(e) {
				var i = {},
					r = t.data(e.form, "validator");
				return r.settings.rules && (i = t.validator.normalizeRule(r.settings.rules[e.name]) || {}),
					i;
			},
			normalizeRules: function(e, i) {
				return t.each(e, function(r, n) {
					if (n === !1) return void delete e[r];
					if (n.param || n.depends) {
						var s = !0;
						switch (typeof n.depends) {
							case "string":
								s = !!t(n.depends, i.form).length;
								break;

							case "function":
								s = n.depends.call(i, i);
						}
						s ? "string" != typeof n && (e[r] = void 0 !== n.param ? n.param : !0) : delete e[r];
					}
				}), t.each(e, function(r, n) {
					e[r] = t.isFunction(n) ? n(i) : n;
				}), t.each(["minlength", "maxlength"], function() {
					e[this] && (e[this] = Number(e[this]));
				}), t.each(["rangelength", "range"], function() {
					var i;
					e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].split(/[\s,]+/),
						e[this] = [Number(i[0]), Number(i[1])]));
				}), t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min,
					delete e.max), e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength],
					delete e.minlength, delete e.maxlength)), e;
			},
			normalizeRule: function(e) {
				if ("string" == typeof e) {
					var i = {};
					t.each(e.split(/\s/), function() {
						i[this] = !0;
					}), e = i;
				}
				return e;
			},
			addMethod: function(e, i, r) {
				t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== r ? r : t.validator.messages[e],
					i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e));
			},
			methods: {
				required: function(e, i, r) {
					if (!this.depend(r, i)) return "dependency-mismatch";
					if ("select" === i.nodeName.toLowerCase()) {
						var n = t(i).val();
						return n && n.length > 0;
					}
					return this.checkable(i) ? this.getLength(e, i) > 0 : t.trim(e).length > 0;
				},
				email: function(t, e) {
					return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t);
				},
				url: function(t, e) {
					return this.optional(e) || /^(https?|s?ftp|weixin):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t);
				},
				date: function(t, e) {
					return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString());
				},
				dateISO: function(t, e) {
					return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t);
				},
				number: function(t, e) {
					return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t);
				},
				digits: function(t, e) {
					return this.optional(e) || /^\d+$/.test(t);
				},
				creditcard: function(t, e) {
					if (this.optional(e)) return "dependency-mismatch";
					if (/[^0-9 \-]+/.test(t)) return !1;
					var i = 0,
						r = 0,
						n = !1;
					t = t.replace(/\D/g, "");
					for (var s = t.length - 1; s >= 0; s--) {
						var a = t.charAt(s);
						r = parseInt(a, 10), n && (r *= 2) > 9 && (r -= 9), i += r, n = !n;
					}
					return i % 10 === 0;
				},
				minlength: function(e, i, r) {
					var n = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
					return this.optional(i) || n >= r;
				},
				maxlength: function(e, i, r) {
					var n = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
					return this.optional(i) || r >= n;
				},
				rangelength: function(e, i, r) {
					var n = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
					return this.optional(i) || n >= r[0] && n <= r[1];
				},
				min: function(t, e, i) {
					return this.optional(e) || t >= i;
				},
				max: function(t, e, i) {
					return this.optional(e) || i >= t;
				},
				range: function(t, e, i) {
					return this.optional(e) || t >= i[0] && t <= i[1];
				},
				equalTo: function(e, i, r) {
					var n = t(r);
					return this.settings.onfocusout && n.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
						t(i).valid();
					}), e === n.val();
				},
				remote: function(e, i, r) {
					if (this.optional(i)) return "dependency-mismatch";
					var n = this.previousValue(i);
					if (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), n.originalMessage = this.settings.messages[i.name].remote,
						this.settings.messages[i.name].remote = n.message, r = "string" == typeof r && {
							url: r
						} || r, n.old === e) return n.valid;
					n.old = e;
					var s = this;
					this.startRequest(i);
					var a = {};
					return a[i.name] = e, t.ajax(t.extend(!0, {
						url: r,
						mode: "abort",
						port: "validate" + i.name,
						dataType: "json",
						data: a,
						success: function(r) {
							s.settings.messages[i.name].remote = n.originalMessage;
							var a = r === !0 || "true" === r;
							if (a) {
								var o = s.formSubmitted;
								s.prepareElement(i), s.formSubmitted = o, s.successList.push(i), delete s.invalid[i.name],
									s.showErrors();
							} else {
								var u = {},
									l = r || s.defaultMessage(i, "remote");
								u[i.name] = n.message = t.isFunction(l) ? l(e) : l, s.invalid[i.name] = !0, s.showErrors(u);
							}
							n.valid = a, s.stopRequest(i, a);
						}
					}, r)), "pending";
				}
			}
		}), t.format = t.validator.format;
	}(jQuery),
	function(t) {
		var e = {};
		if (t.ajaxPrefilter) t.ajaxPrefilter(function(t, i, r) {
			var n = t.port;
			"abort" === t.mode && (e[n] && e[n].abort(), e[n] = r);
		});
		else {
			var i = t.ajax;
			t.ajax = function(r) {
				var n = ("mode" in r ? r : t.ajaxSettings).mode,
					s = ("port" in r ? r : t.ajaxSettings).port;
				return "abort" === n ? (e[s] && e[s].abort(), e[s] = i.apply(this, arguments), e[s]) : i.apply(this, arguments);
			};
		}
	}(jQuery),
	function(t) {
		t.extend(t.fn, {
			validateDelegate: function(e, i, r) {
				return this.bind(i, function(i) {
					var n = t(i.target);
					return n.is(e) ? r.apply(n, arguments) : void 0;
				});
			}
		});
	}(jQuery),
	function(t) {
		t.validator.defaults.errorClass = "frm_msg_content", t.validator.defaults.errorElement = "span",
			t.validator.defaults.errorPlacement = function(t, e) {
				e.parent().after(t);
			}, t.validator.defaults.wrapper = "p", t.validator.messages = {
				required: "必选字段",
				remote: "请修正该字段",
				email: "请输入正确格式的电子邮件",
				url: "请输入合法的网址",
				date: "请输入合法的日期",
				dateISO: "请输入合法的日期 (ISO).",
				number: "请输入合法的数字",
				digits: "只能输入整数",
				creditcard: "请输入合法的信用卡号",
				equalTo: "请再次输入相同的值",
				accept: "请输入拥有合法后缀名的字符串",
				maxlength: t.validator.format("请输入一个长度最多是 {0} 的字符串"),
				minlength: t.validator.format("请输入一个长度最少是 {0} 的字符串"),
				rangelength: t.validator.format("请输入一个长度介于 {0} 和 {1} 之间的字符串"),
				range: t.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
				max: t.validator.format("请输入一个最大为 {0} 的值"),
				min: t.validator.format("请输入一个最小为 {0} 的值")
			},
			function() {
				function e(t) {
					var e, i = 0;
					"x" == t[17].toLowerCase() && (t[17] = 10);
					for (var r = 0; 17 > r; r++) i += n[r] * t[r];
					return e = i % 11, t[17] == s[e] ? !0 : !1;
				}

				function i(t) {
					var e = t.substring(6, 10),
						i = t.substring(10, 12),
						r = t.substring(12, 14),
						n = new Date(e, parseFloat(i) - 1, parseFloat(r));
					return (new Date).getFullYear() - parseInt(e) < 18 ? !1 : n.getFullYear() != parseFloat(e) || n.getMonth() != parseFloat(i) - 1 || n.getDate() != parseFloat(r) ? !1 : !0;
				}

				function r(r) {
					if (r = t.trim(r.replace(/ /g, "")), 15 == r.length) return !1;
					if (18 == r.length) {
						var n = r.split("");
						return i(r) && e(n) ? !0 : !1;
					}
					return !1;
				}
				var n = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1],
					s = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];
				t.validator.addMethod("idcard", function(t) {
					return r(t);
				}, "身份证格式不正确，或者年龄未满18周岁，请重新填写"), t.validator.addMethod("mobile", function(e) {
					return e = t.trim(e), /^1\d{10}$/.test(e);
				}, "请输入正确的手机号码"), t.validator.addMethod("telephone", function(e) {
					return e = t.trim(e), /^\d{1,4}(-\d{1,12})+$/.test(e);
				}, "请输入正确的座机号码，如020-12345678"), t.validator.addMethod("verifycode", function(e) {
					return e = t.trim(e), /^\d{6}$/.test(e);
				}, "验证码应为6位数字"), t.validator.addMethod("byteRangeLength", function(t, e, i) {
					return this.optional(e) || t.len() <= i[1] && t.len() >= i[0];
				}, "_(必须为{0}到{1}个字节之间)");
			}();
	}(jQuery);
	var t = {
			optional: function() {
				return !1;
			},
			getLength: function(t) {
				return t ? t.length : 0;
			}
		},
		e = $.validator;
	return e.rules = {}, $.each(e.methods, function(i, r) {
		e.rules[i] = function(e, i) {
			return r.call(t, e, null, i);
		};
	}), e;
});
define("tpl/simplePopup.html.js", [], function() {
	return '<div class="simple_dialog_content">\n    <form id="popupForm_{id}"  method="post"  class="form" onSubmit="return false;">\n         <div class="frm_control_group">\n            {if label}<label class="frm_label">{label}</label>{/if}\n            <span class="frm_input_box">\n                <input type="text" class="frm_input" name="popInput" value="{value&&value.html(true)}"/>\n                <input style="display:none"/>\n            </span>\n            {if tips}<p class="frm_tips">{tips}</p>{/if}\n        </div>       \n        <div class="js_verifycode"></div>\n    </form>\n</div>\n';
});
define("common/lib/MockJax.js", [], function(e, t, n) {
	try {
		var r = +(new Date);
		(function(e) {
			function t(t) {
				window.DOMParser == undefined && window.ActiveXObject && (DOMParser = function() {}, DOMParser.prototype.parseFromString = function(e) {
					var t = new ActiveXObject("Microsoft.XMLDOM");
					return t.async = "false", t.loadXML(e), t;
				});
				try {
					var n = (new DOMParser).parseFromString(t, "text/xml");
					if (!e.isXMLDoc(n)) throw "Unable to parse XML";
					var r = e("parsererror", n);
					if (r.length == 1) throw "Error: " + e(n).text();
					return n;
				} catch (i) {
					var s = i.name == undefined ? i : i.name + ": " + i.message;
					return e(document).trigger("xmlParseError", [s]), undefined;
				}
			}

			function n(t, n, r) {
				(t.context ? e(t.context) : e.event).trigger(n, r);
			}

			function r(t, n) {
				var i = !0;
				return typeof n == "string" ? e.isFunction(t.test) ? t.test(n) : t == n : (e.each(t, function(s) {
					if (n[s] === undefined) return i = !1, i;
					typeof n[s] == "object" ? i = i && r(t[s], n[s]) : e.isFunction(t[s].test) ? i = i && t[s].test(n[s]) : i = i && t[s] == n[s];
				}), i);
			}

			function i(t, n) {
				if (e.isFunction(t)) return t(n);
				if (e.isFunction(t.url.test)) {
					if (!t.url.test(n.url)) return null;
				} else {
					var i = t.url.indexOf("*");
					if (t.url !== n.url && i === -1 || !(new RegExp(t.url.replace(/[-[\]{}()+?.,\\^$|#\s]/g, "\\$&").replace(/\*/g, ".+"))).test(n.url)) return null;
				}
				return t.data && n.data && !r(t.data, n.data) ? null : t && t.type && t.type.toLowerCase() != n.type.toLowerCase() ? null : t;
			}

			function s(n, r, i) {
				var s = function(s) {
					return function() {
						return function() {
							var s;
							this.status = n.status, this.statusText = n.statusText, this.readyState = 4, e.isFunction(n.response) && n.response(i), r.dataType == "json" && typeof n.responseText == "object" ? this.responseText = JSON.stringify(n.responseText) : r.dataType == "xml" ? typeof n.responseXML == "string" ? (this.responseXML = t(n.responseXML), this.responseText = n.responseXML) : this.responseXML = n.responseXML : this.responseText = n.responseText;
							if (typeof n.status == "number" || typeof n.status == "string") this.status = n.status;
							typeof n.statusText == "string" && (this.statusText = n.statusText), s = this.onreadystatechange || this.onload, e.isFunction(s) ? (n.isTimeout && (this.status = -1), s.call(this, n.isTimeout ? "timeout" : undefined)) : n.isTimeout && (this.status = -1);
						}.apply(s);
					};
				}(this);
				n.proxy ? v({
					global: !1,
					url: n.proxy,
					type: n.proxyType,
					data: n.data,
					dataType: r.dataType === "script" ? "text/plain" : r.dataType,
					complete: function(e) {
						n.responseXML = e.responseXML, n.responseText = e.responseText, n.status = e.status, n.statusText = e.statusText, this.responseTimer = setTimeout(s, n.responseTime || 0);
					}
				}) : r.async === !1 ? s() : this.responseTimer = setTimeout(s, n.responseTime || 50);
			}

			function o(t, n, r, i) {
				return t = e.extend(!0, {}, e.mockjaxSettings, t), typeof t.headers == "undefined" && (t.headers = {}), t.contentType && (t.headers["content-type"] = t.contentType), {
					status: t.status,
					statusText: t.statusText,
					readyState: 1,
					open: function() {},
					send: function() {
						i.fired = !0, s.call(this, t, n, r);
					},
					abort: function() {
						clearTimeout(this.responseTimer);
					},
					setRequestHeader: function(e, n) {
						t.headers[e] = n;
					},
					getResponseHeader: function(e) {
						if (t.headers && t.headers[e]) return t.headers[e];
						if (e.toLowerCase() == "last-modified") return t.lastModified || (new Date).toString();
						if (e.toLowerCase() == "etag") return t.etag || "";
						if (e.toLowerCase() == "content-type") return t.contentType || "text/plain";
					},
					getAllResponseHeaders: function() {
						var n = "";
						return e.each(t.headers, function(e, t) {
							n += e + ": " + t + "\n";
						}), n;
					}
				};
			}

			function u(e, t, n) {
				a(e), e.dataType = "json";
				if (e.data && y.test(e.data) || y.test(e.url)) {
					l(e, t, n);
					var r = /^(\w+:)?\/\/([^\/?#]+)/,
						i = r.exec(e.url),
						s = i && (i[1] && i[1] !== location.protocol || i[2] !== location.host);
					e.dataType = "script";
					if (e.type.toUpperCase() === "GET" && s) {
						var o = f(e, t, n);
						return o ? o : !0;
					}
				}
				return null;
			}

			function a(e) {
				if (e.type.toUpperCase() === "GET") y.test(e.url) || (e.url += (/\?/.test(e.url) ? "&" : "?") + (e.jsonp || "callback") + "=?");
				else if (!e.data || !y.test(e.data)) e.data = (e.data ? e.data + "&" : "") + (e.jsonp || "callback") + "=?";
			}

			function f(t, n, r) {
				var i = r && r.context || t,
					s = null;
				return n.response && e.isFunction(n.response) ? n.response(r) : typeof n.responseText == "object" ? e.globalEval("(" + JSON.stringify(n.responseText) + ")") : e.globalEval("(" + n.responseText + ")"), c(t, i, n), h(t, i, n), e.Deferred && (s = new e.Deferred, typeof n.responseText == "object" ? s.resolveWith(i, [n.responseText]) : s.resolveWith(i, [e.parseJSON(n.responseText)])), s;
			}

			function l(e, t, n) {
				var r = n && n.context || e,
					i = e.jsonpCallback || "jsonp" + b++;
				e.data && (e.data = (e.data + "").replace(y, "=" + i + "$1")), e.url = e.url.replace(y, "=" + i + "$1"), window[i] = window[i] || function(n) {
					data = n, c(e, r, t), h(e, r, t), window[i] = undefined;
					try {
						delete window[i];
					} catch (s) {}
					head && head.removeChild(script);
				};
			}

			function c(e, t, r) {
				e.success && e.success.call(t, r.responseText || "", status, {}), e.global && n(e, "ajaxSuccess", [{},
					e
				]);
			}

			function h(t, r) {
				t.complete && t.complete.call(r, {}, status), t.global && n("ajaxComplete", [{},
					t
				]), t.global && !--e.active && e.event.trigger("ajaxStop");
			}

			function p(t, n) {
				var r, s, a;
				typeof t == "object" ? (n = t, t = undefined) : n.url = t, s = e.extend(!0, {}, e.ajaxSettings, n);
				for (var f = 0; f < m.length; f++) {
					if (!m[f]) continue;
					a = i(m[f], s);
					if (!a) continue;
					g.push(s), e.mockjaxSettings.log(a, s);
					if (s.dataType === "jsonp")
						if (r = u(s, a, n)) return r;
					return a.cache = s.cache, a.timeout = s.timeout, a.global = s.global, d(a, n),
						function(t, n, i, s) {
							r = v.call(e, e.extend(!0, {}, i, {
								xhr: function() {
									return o(t, n, i, s);
								}
							}));
						}(a, s, n, m[f]), r;
				}
				return v.apply(e, [n]);
			}

			function d(e, t) {
				if (!(e.url instanceof RegExp)) return;
				if (!e.hasOwnProperty("urlParams")) return;
				var n = e.url.exec(t.url);
				if (n.length === 1) return;
				n.shift();
				var r = 0,
					i = n.length,
					s = e.urlParams.length,
					o = Math.min(i, s),
					u = {};
				for (r; r < o; r++) {
					var a = e.urlParams[r];
					u[a] = n[r];
				}
				t.urlParams = u;
			}
			var v = e.ajax,
				m = [],
				g = [],
				y = /=\?(&|$)/,
				b = (new Date).getTime();
			e.extend({
				ajax: p
			}), e.mockjaxSettings = {
				log: function(t, n) {
					if (t.logging === !1 || typeof t.logging == "undefined" && e.mockjaxSettings.logging === !1) return;
					if (window.console && console.log) {
						var r = "MOCK " + n.type.toUpperCase() + ": " + n.url,
							i = e.extend({}, n);
						if (typeof console.log == "function") console.log(r, i);
						else try {
							console.log(r + " " + JSON.stringify(i));
						} catch (s) {
							console.log(r);
						}
					}
				},
				logging: !0,
				status: 200,
				statusText: "OK",
				responseTime: 500,
				isTimeout: !1,
				contentType: "text/plain",
				response: "",
				responseText: "",
				responseXML: "",
				proxy: "",
				proxyType: "GET",
				lastModified: null,
				etag: "",
				headers: {
					etag: "IJF@H#@923uf8023hFO@I#H#",
					"content-type": "text/plain"
				}
			}, e.mockjax = function(e) {
				var t = m.length;
				return m[t] = e, t;
			}, e.mockjaxClear = function(e) {
				arguments.length == 1 ? m[e] = null : m = [], g = [];
			}, e.mockjax.handler = function(e) {
				if (arguments.length == 1) return m[e];
			}, e.mockjax.mockedAjaxCalls = function() {
				return g;
			};
		})(jQuery);
	} catch (i) {
		wx.jslog({
			src: "common/lib/MockJax.js"
		}, i);
	}
});
define("common/wx/cgiReport.js", ["common/wx/Tips.js"], function(e, t, n) {
	try {
		var r = +(new Date);
		"use strict";
		var i = e("common/wx/Tips.js");
		t.error = function(e, t) {
			var n = 11;
			switch (e) {
				case "timeout":
					n = 7;
					break;
				case "error":
					n = 8;
					break;
				case "notmodified":
					n = 9;
					break;
				case "parsererror":
					n = 10;
			}
			t.data.lang && delete t.data.lang, t.data.random && delete t.data.random, t.data.f && delete t.data.f, t.data.ajax && delete t.data.ajax, t.data.token && delete t.data.token, $.ajax({
				url: "/misc/jslog?1=1",
				data: {
					content: "[fakeid={uin}] [xhr] [url={url}] [param={param}] [info={info}] [useragent={userAgent}] [page={page}]".format({
						uin: wx.data.uin,
						useragent: window.navigator.userAgent,
						page: location.href,
						url: t.url,
						param: $.param(t.data).substr(0, 50),
						info: e
					}),
					id: n,
					level: "error"
				},
				type: "POST"
			}), $.ajax({
				url: "/misc/jslog?1=1",
				data: {
					content: "[fakeid={uin}] [xhr] [url={url}] [param={param}] [info={info}] [useragent={userAgent}] [page={page}]".format({
						uin: wx.data.uin,
						useragent: window.navigator.userAgent,
						page: location.href,
						url: t.url,
						param: $.param(t.data).substr(0, 50),
						info: e
					}),
					id: 6,
					level: "error"
				},
				type: "POST"
			}), e == "timeout" && i.err("你的网络环境较差，请稍后重试");
		};
	} catch (s) {
		wx.jslog({
			src: "common/wx/cgiReport.js"
		}, s);
	}
});
define("tpl/searchInput.html.js", [], function() {
	return '<span class="frm_input_box search with_del append " >\n    <a class="del_btn jsSearchInputClose" href="javascript:" style="display:none">\n        <i class="icon_search_del"></i>&nbsp;\n    </a>\n    <a  href="javascript:" class="frm_input_append jsSearchInputBt">\n    	<i class="icon16_common search_gray">搜索</i>&nbsp;\n    </a>\n    <input type="text" value="" class="frm_input jsSearchInput">\n</span>';
});
define("common/wx/verifycode.js", ["widget/verifycode.css", "tpl/verifycode.html.js", "common/qq/events.js"], function(e, t, n) {
	try {
		var r = +(new Date);
		"use strict", e("widget/verifycode.css");
		var i = e("tpl/verifycode.html.js"),
			s = "/cgi-bin/verifycode?r=",
			o = e("common/qq/events.js"),
			u = o(!0);

		function a(e) {
			var t = this;
			this.$dom = $(i), this.$img = this.$dom.find("img"), this.$input = this.$dom.find("input"), this.$img.on("load", function() {
				u.trigger("VerifyCode:load", t);
			}), this.$dom.find("a").click(function(e) {
				t.$img.attr("src", s + +(new Date));
			}).click(), e && $(e).append(this.$dom) && (this.$container = $(e));
		}
		a.prototype.getCode = function() {
			return this.$input.val();
		}, a.prototype.focus = function() {
			this.$input.focus();
		}, a.prototype.getInput = function() {
			return this.$input;
		}, a.prototype.refresh = function() {
			this.$img.attr("src", s + +(new Date));
		}, $.fn.verifycode = function() {
			return this.each(function() {
				$.data(this, "verifycode", new a(this));
			});
		}, n.exports = a;
	} catch (f) {
		wx.jslog({
			src: "common/wx/verifycode.js"
		}, f);
	}
});
define("common/wx/richEditor/emotionEditor.js", ["widget/emotion_editor.css", "tpl/richEditor/emotionEditor.html.js", "common/wx/richEditor/wysiwyg.js", "common/wx/richEditor/emotion.js", "biz_web/utils/upload.js", "common/wx/Tips.js", "common/qq/Class.js"], function(t, i, e) {
	"use strict";
	var o = wx.T,
		n = (t("widget/emotion_editor.css"), t("tpl/richEditor/emotionEditor.html.js")),
		r = t("common/wx/richEditor/wysiwyg.js"),
		s = t("common/wx/richEditor/emotion.js"),
		m = t("biz_web/utils/upload.js"),
		c = t("common/wx/Tips.js"),
		l = m.uploadCdnFile,
		d = t("common/qq/Class.js"),
		a = {
			isHTML: !0,
			wordlimit: 500,
			hideUpload: !0
		},
		w = 1,
		h = d.declare({
			init: function(t, i) {
				var e = this;
				i = this.opt = $.extend(!0, {}, a, i), e.selector$ = t, i.gid = w++, e.selector$.html(o(n, i)),
					e.emotion = new s(t.find(".js_emotionArea")), e.wysiwyg = new r(t.find(".js_editorArea"), {
						init: function() {
							t.find(".js_editorTip").html("还可以输入<em>{l}</em>字".format({
								l: i.wordlimit
							}));
						},
						textFilter: function(t) {
							return t = e.emotion.getEmotionText(t).replace(/<br.*?>/gi, "\n").replace(/<.*?>/g, ""),
								t = t.html(!1), i.isHTML ? t : t.replace(/<br.*?>/gi, "\n").replace(/<.*?>/g, "");
						},
						nodeFilter: function(t) {
							var i = "";
							return "IMG" === t.nodeName.toUpperCase() && (i = t), i;
						},
						change: function() {
							var o = e.getContent(),
								n = i.wordlimit - o.length,
								r = t.find(".js_editorTip");
							r.html(0 > n ? "已超出<em{cls}>{l}</em>字".format({
								l: -n,
								cls: ' class="warn"'
							}) : "还可以输入<em>{l}</em>字".format({
								l: n
							}));
						}
					}), e.upload = l({
						container: t.find(".js_upload"),
						type: 2,
						multi: !1,
						onComplete: function(t, i, o, n) {
							if (n && n.base_resp && 0 == n.base_resp.ret) {
								var r = n.content;
								c.suc("上传成功"), e.wysiwyg.insertHTML(r);
							}
						}
					}), e._initEvent(), e.insertHTML(i.text);
			},
			_initEvent: function() {
				var t = $(".js_switch", this.selector$),
					i = this.emotion,
					e = this.wysiwyg;
				i.click(function(t) {
					return e.insertHTML(i.getEmotionHTML(t)), !1;
				}), i.hide(), t.click(function() {
					i.show();
				}), $(document).on("click", "*", function(t) {
					var e = $(t.target),
						o = e.filter(".js_switch"),
						n = e.filter(".js_emotion_i"),
						r = e.filter(".emotions_item");
					o.length || n.length || r.length || i.hide();
				});
			},
			setContent: function(t) {
				var i = t || "";
				i = this.opt.linebreak ? i.replace(/\n/g, "<br>") : i, t = s.emoji(i), this.wysiwyg.setContent(t, i.html(!1));
			},
			insertHTML: function(t) {
				t = t || "", this.wysiwyg.insertHTML(t);
			},
			getContent: function() {
				var t = this.wysiwyg.getContent();
				return t = "string" == typeof t ? t.trim() : "", this.opt.linebreak ? t.replace(/<br[^>]*>/gi, "\n") : t;
			},
			getHTML: function() {
				var t = this.wysiwyg.getHTML().html(!1);
				return "string" == typeof t ? t.trim() : "";
			}
		});
	e.exports = h;
});
define("tpl/message/video_popup.html.js", [], function(e, t, n) {
	return '<div>\n   <div class="frm_control_group">\n       <label for="" class="frm_label">标题</label>\n       <div class="frm_controls">\n           <span class="frm_input_box"><input type="text" class="frm_input title"></span>\n       </div>\n   </div>\n   <div class="frm_control_group">\n       <label for="" class="frm_label">摘要<span class="tips">（选填）</span></label>\n       <div class="frm_controls">\n           <span class="frm_textarea_box"><textarea class="frm_textarea digest"></textarea></span>\n       </div>\n   </div>\n</div>\n \n';
});
define("common/wx/time.js", [], function() {
	"use strict";

	function e(e) {
		var t = new Date(1e3 * e),
			r = new Date,
			g = t.getTime(),
			a = r.getTime(),
			u = 864e5;
		return u > a - g && r.getDate() == t.getDate() ? "%s:%s".sprintf(n(t.getHours()), n(t.getMinutes())) : 2 * u > a - g && new Date(1 * t + u).getDate() == r.getDate() ? "昨天 %s:%s".sprintf(n(t.getHours()), n(t.getMinutes())) : 6 * u >= a - g ? "%s %s:%s".sprintf(s[t.getDay()], n(t.getHours()), n(t.getMinutes())) : t.getFullYear() == r.getFullYear() ? "%s月%s日".sprintf(n(t.getMonth() + 1), n(t.getDate())) : "%s年%s月%s日".sprintf(t.getFullYear(), n(t.getMonth() + 1), n(t.getDate()));
	}

	function t(e) {
		var t = new Date(1e3 * e);
		return "%s-%s-%s %s:%s:%s".sprintf(t.getFullYear(), n(t.getMonth() + 1), n(t.getDate()), n(t.getHours()), n(t.getMinutes()), n(t.getSeconds()));
	}

	function r(e, t) {
		var r = ["日", "一", "二", "三", "四", "五", "六"],
			n = t.replace(/yyyy|YYYY/, e.getFullYear()).replace(/yy|YY/, g(e.getFullYear() % 100, 2)).replace(/mm|MM/, g(e.getMonth() + 1, 2)).replace(/m|M/g, e.getMonth() + 1).replace(/dd|DD/, g(e.getDate(), 2)).replace(/d|D/g, e.getDate()).replace(/hh|HH/, g(e.getHours(), 2)).replace(/h|H/g, e.getHours()).replace(/ii|II/, g(e.getMinutes(), 2)).replace(/i|I/g, e.getMinutes()).replace(/ss|SS/, g(e.getSeconds(), 2)).replace(/s|S/g, e.getSeconds()).replace(/w/g, e.getDay()).replace(/W/g, r[e.getDay()]);
		return n;
	}

	function g(e, t) {
		for (var r = 0, g = t - (e + "").length; g > r; r++) e = "0" + e;
		return e + "";
	}
	var n = function(e) {
			return e += "", e.length >= 2 ? e : "0" + e;
		},
		s = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
	return {
		timeFormat: e,
		getFullTime: t,
		formatDate: r
	};
});
define("common/qq/events.js", [], function(e, t, n) {
	try {
		var r = +(new Date);
		"use strict";

		function i(e) {
			e === !0 ? this.data = window.wx.events || {} : this.data = {};
		}
		i.prototype = {
			on: function(e, t) {
				return this.data[e] = this.data[e] || [], this.data[e].push(t), this;
			},
			off: function(e, t) {
				this.data[e] && this.data[e].length > 0 && (t && typeof t == "function" ? $.each(this.data[e], function(n, r) {
					r === t && this.data[e].splice(n, 1);
				}) : this.data[e] = []);
			},
			trigger: function(e) {
				var t = arguments;
				this.data[e] && this.data[e].length > 0 && $.each(this.data[e], function(e, n) {
					var r = n.apply(this, Array.prototype.slice.call(t, 1));
					if (r === !1) return !1;
				});
			}
		}, n.exports = function(e) {
			return new i(e);
		};
	} catch (s) {
		wx.jslog({
			src: "common/qq/events.js"
		}, s);
	}
});
define("common/wx/media/simpleAppmsg.js", ["tpl/media/simple_appmsg.html.js", "widget/media.css", "common/qq/Class.js"], function(s) {
	"use strict";
	var e = (wx.T, s("tpl/media/simple_appmsg.html.js")),
		i = (s("widget/media.css"), s("common/qq/Class.js")),
		t = wx.url("/cgi-bin/getimgdata"),
		n = {
			9: {
				1: "图文消息",
				2: "图文消息",
				3: "图文消息",
				4: "图文消息"
			},
			10: {
				1: "图文消息",
				2: "图文消息",
				3: "图文消息",
				4: "图文消息"
			},
			11: {
				1: "活动消息",
				2: "第三方应用消息",
				3: "商品消息",
				4: "单条商品消息"
			}
		},
		m = function(s, e) {
			var i = n[s];
			return (i ? i[e] : "") || "未知类型";
		},
		a = i.declare({
			init: function(s) {
				s && s.container && (s.appmsg_cover = t + "&mode=small&source=%s&msgid=%s&fileId=%s".sprintf(s.source, s.id, s.file_id),
					s.type_msg = m(s.type, s.app_sub_type), s.isSingleMsg = location.href.indexOf("singlesendpage") > -1 ? !0 : !1,
					$(s.container).html(wx.T(e, s)).data(s), this.opt = s);
			},
			getData: function() {
				return this.opt;
			}
		});
	return a;
});
define("common/wx/remark.js", ["common/wx/Tips.js", "common/qq/events.js", "user/user_cgi.js", "common/wx/simplePopup.js"], function(n, e, i) {
	"use strict";
	var s = n("common/wx/Tips.js"),
		t = n("common/qq/events.js"),
		o = t(!0),
		m = n("user/user_cgi.js"),
		r = n("common/wx/simplePopup.js"),
		c = function() {
			this.id = null, this.remarkName = null, this._init();
		};
	c.prototype = {
		_init: function() {
			var n = this;
			o.on("Remark:change", function(e, i) {
				n.show(e, i);
			});
		},
		show: function(n, e) {
			this.id = n, this.remarkName = e;
			var i = this;
			new r({
				title: "添加备注",
				callback: function(n) {
					m.changeRemark(i.id, n, function() {
						s.suc("修改成功"), o.trigger("Remark:changed", i.id, (n + "").html(!0));
					});
				},
				rule: function(n) {
					return n.length <= 30;
				},
				inputrequire: !1,
				value: (e + "").html(!1),
				msg: "备注不能超过30个字"
			});
		},
		hide: function() {}
	}, i.exports = new c;
});
define("common/wx/RichBuddy.js", ["common/qq/emoji.js", "tpl/RichBuddy/RichBuddyLayout.html.js", "tpl/RichBuddy/RichBuddyContent.html.js", "widget/rich_buddy.css", "common/wx/Tips.js", "common/qq/Class.js", "common/wx/remark.js", "user/user_cgi.js", "common/qq/events.js", "biz_web/ui/dropdown.js"], function(e, i, t) {
	"use strict";
	e("common/qq/emoji.js");
	var n = e("tpl/RichBuddy/RichBuddyLayout.html.js"),
		o = e("tpl/RichBuddy/RichBuddyContent.html.js"),
		s = template.compile(o),
		d = (e("widget/rich_buddy.css"),
			e("common/wx/Tips.js")),
		h = e("common/qq/Class.js"),
		m = (e("common/wx/remark.js"), e("common/qq/emoji.js"),
			e("user/user_cgi.js")),
		a = e("common/qq/events.js"),
		r = e("biz_web/ui/dropdown.js"),
		u = a(!0),
		c = {},
		l = h.declare({
			init: function(e) {
				e && (this._init_opts = $.extend(!0, this._init_opts, e));
			},
			$element: null,
			$content: null,
			hideTimer: null,
			namespace: ".RichBuddy",
			options: {},
			_init_opts: {
				hideGroup: !1,
				data: void 0
			},
			_init: function() {
				{
					var e, i = this.options,
						t = this,
						o = i.fakeId;
					i.position;
				}
				this._unbindEvent(), this.$element || (this.$element = $(n).appendTo(document.body)),
					this.$content = this.$element.find(".buddyRichContent"), this.$loading = this.$element.find(".loadingArea"),
					"object" == typeof this._init_opts.data && null !== this._init_opts.data && (c = this._init_opts.data),
					c[o] ? (e = c[o], t._init_opts.hideGroup = !e.groups || 0 == e.groups.length, this.$content.html(s(e)),
						this._hideLoading(), this._bindEvent()) : (this._showLoading(), "undefined" != typeof i.tmpmsgid && (console.log("setTemp"),
						m.setTempMsgid(i.tmpmsgid)), m.getBuddyInfo(o, function(e) {
						if (!e || !e.base_resp) return void d.err("系统出错，请稍后重试！");
						if (0 == e.base_resp.ret) {
							var n = e.contact_info;
							e.groups ? (t._init_opts.hideGroup = !1, n.groups = e.groups.groups) : (n.groups = [], t._init_opts.hideGroup = !0),
								e = n;
							for (var h in e) "string" == typeof e[h] && (e[h] = e[h].replace(/&nbsp;/gi, " "));
							e.nick_name = e.nick_name.emoji(), e.fake_id && (c[o] = e), e.fake_id == i.fakeId && (t._hideLoading(),
								t.$content.html(s(e)), t._bindEvent());
						} else switch (+e.base_resp.ret) {
							case 1:
								d.err("该用户已经对您取消关注");
								break;

							case 2:
								break;

							case -3:
								d.err("会话过期，请重新登录");
								break;

							default:
								d.err("系统出错，请稍后重试！");
						}
					}));
			},
			_showLoading: function() {
				this.$loading.show(), this.$content.hide();
			},
			_hideLoading: function() {
				this.$loading.hide(), this.$content.show();
			},
			_bindEvent: function() {
				var e = this,
					i = this.options,
					t = c[i.fakeId];
				if (t) {
					this.$element.bind("mouseover" + this.namespace, function() {
						clearTimeout(e.hideTimer), e.hideTimer = null, e.$element.show();
					}).bind("mouseout" + this.namespace, function() {
						e._mouseout();
					}), this.$element.find(".js_changeRemark").bind("click" + this.namespace, function() {
						u.trigger("Remark:change", i.fakeId, t.remark_name);
					}), u.on("Remark:changed", function(i, t) {
						c[i] && (c[i].remark_name = t), e.$element.find(".js_remarkName").html(t);
					}), t.groups || (t.groups = []);
					for (var n, o = [], s = 0; s < t.groups.length; s++) o.push({
						name: t.groups[s].name,
						value: t.groups[s].id
					}), t.group_id == t.groups[s].id && (n = t.groups[s].name);
					new r({
						container: this.$element.find(".js_group"),
						label: n || "请选择",
						data: o,
						callback: function(e) {
							if (t.group_id != e) {
								var n = i.fakeId;
								m.changeGroup(n, e, function() {
									c[n].GroupID = e, setTimeout(function() {
										location.reload();
									}, 300);
								}, 1);
							}
						},
						search: !1
					}), console.log("hide group"), console.log(this._init_opts), this._init_opts.hideGroup ? this.$element.find(".js_group_container").hide() : this.$element.find(".js_group_container").show();
				}
			},
			_unbindEvent: function() {
				if (this.$element) {
					var e = this.namespace;
					this.$element.find(".js_changeRemark").unbind(e), this.$element.unbind(e), this.$element.stop(),
						this.$element.css("opacity", 1), this.$element.show();
				}
			},
			_mouseout: function() {
				var e = this;
				e.hideTimer || (e.hideTimer = setTimeout(function() {
					!!e.$element && e.$element.fadeOut(), e.hideTimer = null;
				}, 1e3));
			},
			show: function(e) {
				console.log("show"), console.log(e);
				var i = this.options.fakeId;
				e && (this.options = e), clearTimeout(this.hideTimer), this.hideTimer = null, e.fakeId !== i && this._init(),
					this.$element.css(e.position), this.$element.show();
			},
			hide: function() {
				this._mouseout();
			}
		});
	t.exports = l;
});
define("tpl/msgListItem.html.js", [], function() {
	return '{if list.length <= 0}\n    <p class="empty_tips">暂无消息</p>\n{else}\n    {each list as item as index}\n    <li class="message_item {if item.has_reply}replyed{/if}" id="msgListItem{item.id}" data-id="{item.id}">\n        {if (item.fakeid != uin)}\n        <div class="message_opr">{item.btns}\n            {if (item.type != 10 || item.app_sub_type != 2) }\n            	{if (item.is_temp !=1)}\n            <a href="javascript:;" class="js_star icon18_common {if (item.is_starred_msg != 1)}star_gray{else}star_orange{/if}" action="{action}" idx="{item.id}" starred="{item.is_starred_msg}" title="{if (item.is_starred_msg != 1) }收藏消息{else}取消收藏{/if}">取消收藏</a>\n            	{/if}\n            {/if}\n			{if item.btnsave}\n            <a href="javascript:;" class="js_save icon18_common save_gray" idx="{item.id}" data-type="{item.type}" title="保存为素材">保存为素材</a>\n            {/if}\n            {if item.btndown}\n\n            <a href="/cgi-bin/downloadfile?msgid={item.id}&source={item.source}&token={token}" class="icon18_common download_gray" target="_blank" idx="{item.id}" title="下载">下载</a>\n            {/if}\n            <a href="javascript:;" data-id="{item.id}" data-tofakeid="{item.fakeid}" class="icon18_common reply_gray js_reply" title="快捷回复">快捷回复</a>\n        </div>\n        {/if}\n        <div class="message_info">\n            <div class="message_status"><em class="tips">已回复</em></div>\n            <div class="message_time">{timeFormat item}</div>\n            <div class="user_info">\n                {if (item.fakeid != uin)}\n                <a href="{id2singleURL item}" target="_blank" data-fakeid="{item.fakeid}" data-id="{item.id}" class="remark_name">{if item.remark_name}{=item.remark_name}{else}{=item.nick_name.emoji()}{/if}</a>\n                {else}\n                <span data-fakeid="{item.fakeid}" class="remark_name" data-id="{item.id}">{if item.remark_name}{=item.remark_name}{else}{=item.nick_name.emoji()}{/if}</span>\n                {/if}\n                {if (item.is_temp == 1)}\n                (来自于临时会话)\n                {/if}\n                <span class="nickname" data-fakeid="{item.fakeid}" data-id="{item.id}">{if item.remark_name}(<strong>{=item.nick_name.emoji()}</strong>){/if}</span>\n                \n                {if (item.fakeid != uin)}\n                <a href="javascript:;" class="icon14_common edit_gray js_changeRemark" data-fakeid="{item.fakeid}" title="修改备注" style="display:none;"></a>\n                {/if}\n                {if (item.fakeid != uin)}\n                <a target="_blank" href="{id2singleURL item}" class="avatar" data-fakeid="{item.fakeid}" data-id="{item.id}">\n                    <img src="https://res.wx.qq.com/mpres/htmledition/images/icon/page-setting/avatar/icon80_avatar_default.png" data-src="/misc/getheadimg?token={token}&fakeid={item.fakeid}&msgid={item.id}" data-fakeid="{item.fakeid}">\n                </a>\n                {else}\n                <span class="avatar" data-fakeid="{item.fakeid}" data-id="{item.id}">\n                    <img src="https://res.wx.qq.com/mpres/htmledition/images/icon/page-setting/avatar/icon80_avatar_default.png" data-src="/misc/getheadimg?token={token}&fakeid={item.fakeid}&msgid={item.id}" data-fakeid="{item.fakeid}">\n                </span>\n                {/if}\n            </div>\n        </div>\n\n        <div class="message_content {if item.type == 1}text{/if}">\n            <div id="wxMsg{item.id}" data-id="{item.id}" class="wxMsg">\n                {mediaInit item}\n            </div>\n        </div>\n\n        {if (item.fakeid != uin)}\n        <div id="quickReplyBox{item.id}" class="js_quick_reply_box quick_reply_box">\n            <div class="emoion_editor_wrp js_editor"></div>\n            <div class="verifyCode"></div>\n            <p class="quick_reply_box_tool_bar">\n                <span class="btn btn_primary btn_input" data-id="{item.id}">\n                    <button class="js_reply_OK" data-id="{item.id}" data-fakeid="{item.fakeid}">发送</button>\n                </span><a class="js_reply_pickup btn btn_default pickup" data-id="{item.id}" href="javascript:;">收起</a>\n            </p>\n        </div>\n        {/if}\n    </li>\n    {/each}\n{/if}\n';
});
define("common/wx/media/idCard.js", ["tpl/media/id_card.html.js", "widget/media.css", "common/qq/Class.js"], function(e, t, n) {
	try {
		var r = +(new Date);
		"use strict";
		var i = wx.T,
			s = e("tpl/media/id_card.html.js"),
			o = e("widget/media.css"),
			u = e("common/qq/Class.js"),
			a = wx.url("/misc/getheadimg?1=1"),
			f = u.declare({
				init: function(e) {
					if (!e || !e.container) return;
					e.avatar = a + "&fakeid=" + e.fakeid, $(e.container).html(wx.T(s, e)).data(e), this.opt = e;
				},
				getData: function() {
					return this.opt;
				}
			});
		n.exports = f;
	} catch (l) {
		wx.jslog({
			src: "common/wx/media/idCard.js"
		}, l);
	}
});
define("common/wx/media/video.js", ["widget/media/richvideo.css", "widget/media.css", "biz_web/lib/video.js", "common/wx/Cgi.js", "common/wx/time.js", "common/qq/Class.js", "biz_web/lib/swfobject.js", "tpl/media/video.html.js", "tpl/media/simple_videomsg.html.js", "tpl/media/wxvideo.html.js", "tpl/media/videomsg.html.js"], function(e) {
	"use strict";
	e("widget/media/richvideo.css"), e("widget/media.css");
	var i, t = e("biz_web/lib/video.js"),
		o = e("common/wx/Cgi.js"),
		d = e("common/wx/time.js"),
		s = e("common/qq/Class.js"),
		n = e("biz_web/lib/swfobject.js"),
		a = e("tpl/media/video.html.js"),
		r = wx.T,
		l = wx.data.t,
		m = document,
		c = !!n.ua.pv[0],
		f = m.createElement("video"),
		u = navigator.userAgent.toLowerCase(),
		v = /msie/.test(u),
		p = /firefox/.test(u);
	t.options.flash.swf = wx.path.video;
	var h = {
			id: "",
			source: "",
			type: "",
			file_id: ""
		},
		w = 5e3,
		g = function(e) {
			if (e.video_url) {
				{
					var i = "tmp" + (1e5 * Math.random() | 0);
					$('<video id="%s"></video>'.sprintf(i)).appendTo("body");
				}
				t("#" + i).ready(function() {
					$("#" + i).hide();
					var t = this;
					this.on("error", function() {
						t.dispose(), e.dom.find(".loading_tips").show(), e.video_url = "", setTimeout(function() {
							g(e);
						}, w);
					}), this.on("loadedmetadata", function() {
						t.dispose(), $(e.selector).children().remove(), e.for_transfer = !1, e.digest = e.digest ? e.digest.html(!1) : "",
							new _(e);
					});
					var o = e.video_url;
					t.src(f.canPlayType ? o : [{
						type: "video/x-flv",
						src: o + "&trans=1"
					}]), t.play();
				});
			} else o.get({
				url: wx.url("/cgi-bin/appmsg?action=get_video_url&videoid=%s".sprintf(e.video_id)),
				error: function() {
					setTimeout(function() {
						g(e);
					}, w);
				}
			}, function(i) {
				e.video_url = i.video_url || "", e.video_download_url = i.video_download_url || "", setTimeout(function() {
					g(e);
				}, w);
			});
		},
		_ = s.declare({
			init: function(t) {
				var o = this;
				$(t.selector).data("opt", t), t = $.extend(!0, {}, h, t), o.id = t.id, o.source = t.source, o.file_id = t.file_id,
					o.type = t.type, o.video_url = t.video_url, o.tpl = t.tpl, o.ff_must_flash = t.ff_must_flash,
					t.src = o.getVideoURL(), t.token = l || wx.data.t, t.time = t.create_time ? d.timeFormat(t.create_time) : "",
					t.digest = t.digest ? t.digest.replace(/<br.*>/g, "\n").html() : "", t.for_network = "string" == typeof t.video_url ? !t.video_url : !t.content,
					i = e(t.sent ? "tpl/media/simple_videomsg.html.js" : 21 == +t.type || 9 == +t.type || 11 == +t.type ? "tpl/media/wxvideo.html.js" : "tpl/media/videomsg.html.js");
				var s = $("videomsg" == t.tpl ? r(i, t) : r(a, t));
				o.dom = t.dom = $(t.selector).append(s), "videomsg" == t.tpl && t.for_transfer && g(t, o.dom),
					o.dom.find(".video_desc").length && o.dom.find(".video_desc").html(o.dom.find(".video_desc").attr("data-digest").replace(/\n/g, "<br>")),
					o.dom.find(".wxVideoScreenshot").on("click", function() {
						o.dom.find(".mediaContent").css({
							height: "auto"
						}), o.play(t.play);
					}), o.dom.find(".wxNetworkVideo").on("click", function() {
						window.open($(this).attr("data-contenturl"));
					}), o.dom.find(".video_switch").click(function() {
						o.dom.find(".mediaContent").css({
							height: "104px"
						}), o.pause(t.pause);
					});
			},
			getVideoURL: function() {
				var e = this.source,
					i = this.id,
					t = (this.msg_id || "", this.file_id);
				return e && (e = "&source=" + e), this.video_url || "/cgi-bin/getvideodata?msgid={msgid}&fileid={fileid}&token={token}{source}".format({
					msgid: i,
					fileid: t,
					source: e,
					token: wx.data.t
				});
			},
			canPlayType: function() {
				this.type;
				return !f.canPlayType && !c;
			},
			play: function(e) {
				var i = this;
				if (i.canPlayType()) return void alert("您当前浏览器无法播放视频，请安装Flash插件/更换Chrome浏览器");
				var o = this.id,
					d = this.player;
				if (d) return $("#wxVideoBox" + o).addClass("wxVideoPlaying").find(".wxVideoPlayContent").show(),
					d.play(), e && e(this);
				var s = i.getVideoURL();
				$("#wxVideoBox" + o).addClass("wxVideoPlaying").find(".wxVideoPlayContent").show();
				var n = "videomsg" == i.tpl ? {
					width: "100%",
					height: "100%"
				} : {};
				t("#wxVideo" + o, n).ready(function() {
					d = this;
					var t = 0;
					return d.on("fullscreenchange", function() {
						t ? ($("#wxVideoPlayer" + o).css({
							overflow: "hidden",
							zoom: "1"
						}), $("#wxVideoBox" + o).css({
							"z-index": "0"
						})) : ($("#wxVideoPlayer" + o).css({
							overflow: "visible",
							zoom: "normal"
						}), $("#wxVideoBox" + o).css({
							"z-index": "1"
						})), t = ~t;
					}), d.on("ended", function() {
						this.currentTime(0);
					}), d.src(v || !f.canPlayType || i.ff_must_flash && p ? [{
						type: "video/x-flv",
						src: s + "&trans=1"
					}] : s), d.play(), i.player = d, e && e(this);
				});
			},
			pause: function(e) {
				var i = this.player;
				i && i.pause(), $("#wxVideoBox" + this.id).removeClass("wxVideoPlaying").find(".wxVideoPlayContent").hide(),
					e && e(this);
			}
		});
	return _;
});
define("common/wx/media/audio.js", ["biz_web/lib/soundmanager2.js", "tpl/media/audio.html.js", "tpl/media/qqmusicaudio.html.js", "widget/media.css", "common/qq/Class.js"], function(i, s, t) {
	"use strict";
	var e = wx.T,
		o = i("biz_web/lib/soundmanager2.js"),
		d = i("tpl/media/audio.html.js"),
		l = i("tpl/media/qqmusicaudio.html.js"),
		n = (i("widget/media.css"),
			i("common/qq/Class.js")),
		u = null,
		a = null,
		r = "wxAudioPlaying",
		h = function() {
			a = o, a.setup({
				url: "/mpres/zh_CN/htmledition/plprecorder/biz_web/",
				preferFlash: !1,
				debugMode: !1
			});
		};
	$(window).load(function() {
		h();
	});
	var c = {
			id: "",
			source: "",
			file_id: ""
		},
		m = n.declare({
			init: function(i) {
				var s = this;
				$.extend(!0, s, c, i), this.soundId = this.id || this.file_id, s.play_length = Math.ceil(1 * s.play_length / 1e3),
					this.qqmusictpl && (d = l);
				var t = $(e(d, s));
				s.dom = $(i.selector).append(t).data("opt", i), t.click(function() {
					s.toggle();
				});
			},
			getAudioURL: function() {
				if (this.qqmusicurl) return this.qqmusicurl;
				var i = this.source,
					s = this.id,
					t = this.file_id;
				return i && (i = "&source=" + i), wx.url("/cgi-bin/getvoicedata?msgid={id}&fileid={fileid}{source}".format({
					id: s,
					fileid: t,
					source: i
				}));
			},
			isPlaying: function() {
				return null != u && this == u;
			},
			toggle: function() {
				this.isPlaying() ? this.stop() : (u && u.stop(), this.play());
			},
			play: function(i) {
				var s = this;
				this.isPlaying() || (this.dom.addClass(r), !!u && u.dom.removeClass(r), u = this, this.sound || (!a && h(),
					this.sound = a.createSound({
						id: s.soundId,
						url: s.getAudioURL(),
						onfinish: function() {
							u && (u.dom.removeClass(r), u = null);
						}
					})), a.play(this.soundId), i && i(this));
			},
			stop: function(i) {
				this.isPlaying() && (u = null, this.dom.removeClass(r), a.stop(this.soundId), i && i(this));
			}
		});
	t.exports = m;
});
define("common/wx/media/img.js", ["widget/media.css", "tpl/media/img.html.js", "common/qq/Class.js"], function(e, t, n) {
	try {
		var r = +(new Date);
		"use strict";
		var i = wx.T,
			s = e("widget/media.css"),
			o = e("tpl/media/img.html.js"),
			u = e("common/qq/Class.js"),
			a = u.declare({
				init: function(e) {
					if (!e || !e.container) return;
					var t = e;
					$(e.container).html(o.format({
						token: wx.data.t,
						id: e.file_id,
						msgid: e.msgid || "",
						source: e.source,
						ow: ~e.fakeid
					})).data("opt", e), this.data = t;
				},
				getData: function() {
					return this.data;
				}
			});
		return a;
	} catch (f) {
		wx.jslog({
			src: "common/wx/media/img.js"
		}, f);
	}
});
define("common/wx/simplePopup.js", ["tpl/simplePopup.html.js", "common/wx/popup.js", "biz_common/jquery.validate.js"], function(e, t, o) {
	"use strict";

	function i(e) {
		var t = $.Deferred(),
			o = this;
		o.$dom = $(template.compile(p)(e)).popup({
			title: e.title || "输入提示框",
			buttons: [{
				text: "确认",
				click: function() {
					var i = this;
					if (l.form()) {
						var p = o.$dom.find("input").val().trim();
						if (e.callback) {
							var r = e.callback.call(i, p);
							r !== !1 && this.remove();
						} else this.remove();
						t.resolve(p);
					}
				},
				type: "primary"
			}, {
				text: "取消",
				click: function() {
					this.remove();
				},
				type: "default"
			}],
			className: "simple label_block"
		}), o.$dom.find("input").val(e.value).focus(), $.validator.addMethod("_popupMethod", function(t, o, i) {
			return e && e.rule && e.rule(t.trim(), o, i);
		}, e.msg);
		var i = e && "undefined" != typeof e.inputrequire && e.inputrequire === !1 ? !1 : !0,
			l = o.$dom.find("form").validate({
				rules: {
					popInput: {
						required: i,
						_popupMethod: !0
					}
				},
				messages: {
					popInput: {
						required: "输入框内容不能为空"
					}
				},
				onfocusout: !1
			});
		return t.callback = t.done, t;
	}
	var p = e("tpl/simplePopup.html.js");
	e("common/wx/popup.js"), e("biz_common/jquery.validate.js"), o.exports = i;
});
define("common/qq/emoji.js", ["widget/emoji.css"], function(e, t, n) {
	try {
		var r = +(new Date);
		e("widget/emoji.css");
		var i = {
				"☀": "2600",
				"☁": "2601",
				"☔": "2614",
				"⛄": "26c4",
				"⚡": "26a1",
				"🌀": "1f300",
				"🌁": "1f301",
				"🌂": "1f302",
				"🌃": "1f303",
				"🌄": "1f304",
				"🌅": "1f305",
				"🌆": "1f306",
				"🌇": "1f307",
				"🌈": "1f308",
				"❄": "2744",
				"⛅": "26c5",
				"🌉": "1f309",
				"🌊": "1f30a",
				"🌋": "1f30b",
				"🌌": "1f30c",
				"🌏": "1f30f",
				"🌑": "1f311",
				"🌔": "1f314",
				"🌓": "1f313",
				"🌙": "1f319",
				"🌕": "1f315",
				"🌛": "1f31b",
				"🌟": "1f31f",
				"🌠": "1f320",
				"🕐": "1f550",
				"🕑": "1f551",
				"🕒": "1f552",
				"🕓": "1f553",
				"🕔": "1f554",
				"🕕": "1f555",
				"🕖": "1f556",
				"🕗": "1f557",
				"🕘": "1f558",
				"🕙": "1f559",
				"🕚": "1f55a",
				"🕛": "1f55b",
				"⌚": "231a",
				"⌛": "231b",
				"⏰": "23f0",
				"⏳": "23f3",
				"♈": "2648",
				"♉": "2649",
				"♊": "264a",
				"♋": "264b",
				"♌": "264c",
				"♍": "264d",
				"♎": "264e",
				"♏": "264f",
				"♐": "2650",
				"♑": "2651",
				"♒": "2652",
				"♓": "2653",
				"⛎": "26ce",
				"🍀": "1f340",
				"🌷": "1f337",
				"🌱": "1f331",
				"🍁": "1f341",
				"🌸": "1f338",
				"🌹": "1f339",
				"🍂": "1f342",
				"🍃": "1f343",
				"🌺": "1f33a",
				"🌻": "1f33b",
				"🌴": "1f334",
				"🌵": "1f335",
				"🌾": "1f33e",
				"🌽": "1f33d",
				"🍄": "1f344",
				"🌰": "1f330",
				"🌼": "1f33c",
				"🌿": "1f33f",
				"🍒": "1f352",
				"🍌": "1f34c",
				"🍎": "1f34e",
				"🍊": "1f34a",
				"🍓": "1f353",
				"🍉": "1f349",
				"🍅": "1f345",
				"🍆": "1f346",
				"🍈": "1f348",
				"🍍": "1f34d",
				"🍇": "1f347",
				"🍑": "1f351",
				"🍏": "1f34f",
				"👀": "1f440",
				"👂": "1f442",
				"👃": "1f443",
				"👄": "1f444",
				"👅": "1f445",
				"💄": "1f484",
				"💅": "1f485",
				"💆": "1f486",
				"💇": "1f487",
				"💈": "1f488",
				"👤": "1f464",
				"👦": "1f466",
				"👧": "1f467",
				"👨": "1f468",
				"👩": "1f469",
				"👪": "1f46a",
				"👫": "1f46b",
				"👮": "1f46e",
				"👯": "1f46f",
				"👰": "1f470",
				"👱": "1f471",
				"👲": "1f472",
				"👳": "1f473",
				"👴": "1f474",
				"👵": "1f475",
				"👶": "1f476",
				"👷": "1f477",
				"👸": "1f478",
				"👹": "1f479",
				"👺": "1f47a",
				"👻": "1f47b",
				"👼": "1f47c",
				"👽": "1f47d",
				"👾": "1f47e",
				"👿": "1f47f",
				"💀": "1f480",
				"💁": "1f481",
				"💂": "1f482",
				"💃": "1f483",
				"🐌": "1f40c",
				"🐍": "1f40d",
				"🐎": "1f40e",
				"🐔": "1f414",
				"🐗": "1f417",
				"🐫": "1f42b",
				"🐘": "1f418",
				"🐨": "1f428",
				"🐒": "1f412",
				"🐑": "1f411",
				"🐙": "1f419",
				"🐚": "1f41a",
				"🐛": "1f41b",
				"🐜": "1f41c",
				"🐝": "1f41d",
				"🐞": "1f41e",
				"🐠": "1f420",
				"🐡": "1f421",
				"🐢": "1f422",
				"🐤": "1f424",
				"🐥": "1f425",
				"🐦": "1f426",
				"🐣": "1f423",
				"🐧": "1f427",
				"🐩": "1f429",
				"🐟": "1f41f",
				"🐬": "1f42c",
				"🐭": "1f42d",
				"🐯": "1f42f",
				"🐱": "1f431",
				"🐳": "1f433",
				"🐴": "1f434",
				"🐵": "1f435",
				"🐶": "1f436",
				"🐷": "1f437",
				"🐻": "1f43b",
				"🐹": "1f439",
				"🐺": "1f43a",
				"🐮": "1f42e",
				"🐰": "1f430",
				"🐸": "1f438",
				"🐾": "1f43e",
				"🐲": "1f432",
				"🐼": "1f43c",
				"🐽": "1f43d",
				"😠": "1f620",
				"😩": "1f629",
				"😲": "1f632",
				"😞": "1f61e",
				"😵": "1f635",
				"😰": "1f630",
				"😒": "1f612",
				"😍": "1f60d",
				"😤": "1f624",
				"😜": "1f61c",
				"😝": "1f61d",
				"😋": "1f60b",
				"😘": "1f618",
				"😚": "1f61a",
				"😷": "1f637",
				"😳": "1f633",
				"😃": "1f603",
				"😅": "1f605",
				"😆": "1f606",
				"😁": "1f601",
				"😂": "1f602",
				"😊": "1f60a",
				"☺": "263a",
				"😄": "1f604",
				"😢": "1f622",
				"😭": "1f62d",
				"😨": "1f628",
				"😣": "1f623",
				"😡": "1f621",
				"😌": "1f60c",
				"😖": "1f616",
				"😔": "1f614",
				"😱": "1f631",
				"😪": "1f62a",
				"😏": "1f60f",
				"😓": "1f613",
				"😥": "1f625",
				"😫": "1f62b",
				"😉": "1f609",
				"😺": "1f63a",
				"😸": "1f638",
				"😹": "1f639",
				"😽": "1f63d",
				"😻": "1f63b",
				"😿": "1f63f",
				"😾": "1f63e",
				"😼": "1f63c",
				"🙀": "1f640",
				"🙅": "1f645",
				"🙆": "1f646",
				"🙇": "1f647",
				"🙈": "1f648",
				"🙊": "1f64a",
				"🙉": "1f649",
				"🙋": "1f64b",
				"🙌": "1f64c",
				"🙍": "1f64d",
				"🙎": "1f64e",
				"🙏": "1f64f",
				"🏠": "1f3e0",
				"🏡": "1f3e1",
				"🏢": "1f3e2",
				"🏣": "1f3e3",
				"🏥": "1f3e5",
				"🏦": "1f3e6",
				"🏧": "1f3e7",
				"🏨": "1f3e8",
				"🏩": "1f3e9",
				"🏪": "1f3ea",
				"🏫": "1f3eb",
				"⛪": "26ea",
				"⛲": "26f2",
				"🏬": "1f3ec",
				"🏯": "1f3ef",
				"🏰": "1f3f0",
				"🏭": "1f3ed",
				"⚓": "2693",
				"🏮": "1f3ee",
				"🗻": "1f5fb",
				"🗼": "1f5fc",
				"🗽": "1f5fd",
				"🗾": "1f5fe",
				"🗿": "1f5ff",
				"👞": "1f45e",
				"👟": "1f45f",
				"👠": "1f460",
				"👡": "1f461",
				"👢": "1f462",
				"👣": "1f463",
				"👓": "1f453",
				"👕": "1f455",
				"👖": "1f456",
				"👑": "1f451",
				"👔": "1f454",
				"👒": "1f452",
				"👗": "1f457",
				"👘": "1f458",
				"👙": "1f459",
				"👚": "1f45a",
				"👛": "1f45b",
				"👜": "1f45c",
				"👝": "1f45d",
				"💰": "1f4b0",
				"💱": "1f4b1",
				"💹": "1f4b9",
				"💲": "1f4b2",
				"💳": "1f4b3",
				"💴": "1f4b4",
				"💵": "1f4b5",
				"💸": "1f4b8",
				"🇨🇳": "1f1e81f1f3",
				"🇩🇪": "1f1e91f1ea",
				"🇪🇸": "1f1ea1f1f8",
				"🇫🇷": "1f1eb1f1f7",
				"🇬🇧": "1f1ec1f1e7",
				"🇮🇹": "1f1ee1f1f9",
				"🇯🇵": "1f1ef1f1f5",
				"🇰🇷": "1f1f01f1f7",
				"🇷🇺": "1f1f71f1fa",
				"🇺🇸": "1f1fa1f1f8",
				"🔥": "1f525",
				"🔦": "1f526",
				"🔧": "1f527",
				"🔨": "1f528",
				"🔩": "1f529",
				"🔪": "1f52a",
				"🔫": "1f52b",
				"🔮": "1f52e",
				"🔯": "1f52f",
				"🔰": "1f530",
				"🔱": "1f531",
				"💉": "1f489",
				"💊": "1f48a",
				"🅰": "1f170",
				"🅱": "1f171",
				"🆎": "1f18e",
				"🅾": "1f17e",
				"🎀": "1f380",
				"🎁": "1f381",
				"🎂": "1f382",
				"🎄": "1f384",
				"🎅": "1f385",
				"🎌": "1f38c",
				"🎆": "1f386",
				"🎈": "1f388",
				"🎉": "1f389",
				"🎍": "1f38d",
				"🎎": "1f38e",
				"🎓": "1f393",
				"🎒": "1f392",
				"🎏": "1f38f",
				"🎇": "1f387",
				"🎐": "1f390",
				"🎃": "1f383",
				"🎊": "1f38a",
				"🎋": "1f38b",
				"🎑": "1f391",
				"📟": "1f4df",
				"☎": "260e",
				"📞": "1f4de",
				"📱": "1f4f1",
				"📲": "1f4f2",
				"📝": "1f4dd",
				"📠": "1f4e0",
				"✉": "2709",
				"📨": "1f4e8",
				"📩": "1f4e9",
				"📪": "1f4ea",
				"📫": "1f4eb",
				"📮": "1f4ee",
				"📰": "1f4f0",
				"📢": "1f4e2",
				"📣": "1f4e3",
				"📡": "1f4e1",
				"📤": "1f4e4",
				"📥": "1f4e5",
				"📦": "1f4e6",
				"📧": "1f4e7",
				"🔠": "1f520",
				"🔡": "1f521",
				"🔢": "1f522",
				"🔣": "1f523",
				"🔤": "1f524",
				"✒": "2712",
				"💺": "1f4ba",
				"💻": "1f4bb",
				"✏": "270f",
				"📎": "1f4ce",
				"💼": "1f4bc",
				"💽": "1f4bd",
				"💾": "1f4be",
				"💿": "1f4bf",
				"📀": "1f4c0",
				"✂": "2702",
				"📍": "1f4cd",
				"📃": "1f4c3",
				"📄": "1f4c4",
				"📅": "1f4c5",
				"📁": "1f4c1",
				"📂": "1f4c2",
				"📓": "1f4d3",
				"📖": "1f4d6",
				"📔": "1f4d4",
				"📕": "1f4d5",
				"📗": "1f4d7",
				"📘": "1f4d8",
				"📙": "1f4d9",
				"📚": "1f4da",
				"📛": "1f4db",
				"📜": "1f4dc",
				"📋": "1f4cb",
				"📆": "1f4c6",
				"📊": "1f4ca",
				"📈": "1f4c8",
				"📉": "1f4c9",
				"📇": "1f4c7",
				"📌": "1f4cc",
				"📒": "1f4d2",
				"📏": "1f4cf",
				"📐": "1f4d0",
				"📑": "1f4d1",
				"🎽": "1f3bd",
				"⚾": "26be",
				"⛳": "26f3",
				"🎾": "1f3be",
				"⚽": "26bd",
				"🎿": "1f3bf",
				"🏀": "1f3c0",
				"🏁": "1f3c1",
				"🏂": "1f3c2",
				"🏃": "1f3c3",
				"🏄": "1f3c4",
				"🏆": "1f3c6",
				"🏈": "1f3c8",
				"🏊": "1f3ca",
				"🚃": "1f683",
				"🚇": "1f687",
				"Ⓜ": "24c2",
				"🚄": "1f684",
				"🚅": "1f685",
				"🚗": "1f697",
				"🚙": "1f699",
				"🚌": "1f68c",
				"🚏": "1f68f",
				"🚢": "1f6a2",
				"✈": "2708",
				"⛵": "26f5",
				"🚉": "1f689",
				"🚀": "1f680",
				"🚤": "1f6a4",
				"🚕": "1f695",
				"🚚": "1f69a",
				"🚒": "1f692",
				"🚑": "1f691",
				"🚓": "1f693",
				"⛽": "26fd",
				"🅿": "1f17f",
				"🚥": "1f6a5",
				"🚧": "1f6a7",
				"🚨": "1f6a8",
				"♨": "2668",
				"⛺": "26fa",
				"🎠": "1f3a0",
				"🎡": "1f3a1",
				"🎢": "1f3a2",
				"🎣": "1f3a3",
				"🎤": "1f3a4",
				"🎥": "1f3a5",
				"🎦": "1f3a6",
				"🎧": "1f3a7",
				"🎨": "1f3a8",
				"🎩": "1f3a9",
				"🎪": "1f3aa",
				"🎫": "1f3ab",
				"🎬": "1f3ac",
				"🎭": "1f3ad",
				"🎮": "1f3ae",
				"🀄": "1f004",
				"🎯": "1f3af",
				"🎰": "1f3b0",
				"🎱": "1f3b1",
				"🎲": "1f3b2",
				"🎳": "1f3b3",
				"🎴": "1f3b4",
				"🃏": "1f0cf",
				"🎵": "1f3b5",
				"🎶": "1f3b6",
				"🎷": "1f3b7",
				"🎸": "1f3b8",
				"🎹": "1f3b9",
				"🎺": "1f3ba",
				"🎻": "1f3bb",
				"🎼": "1f3bc",
				"〽": "303d",
				"📷": "1f4f7",
				"📹": "1f4f9",
				"📺": "1f4fa",
				"📻": "1f4fb",
				"📼": "1f4fc",
				"💋": "1f48b",
				"💌": "1f48c",
				"💍": "1f48d",
				"💎": "1f48e",
				"💏": "1f48f",
				"💐": "1f490",
				"💑": "1f491",
				"💒": "1f492",
				"🔞": "1f51e",
				"©": "a9",
				"®": "ae",
				"™": "2122",
				"ℹ": "2139",
				"#⃣": "2320e3",
				"1⃣": "3120e3",
				"2⃣": "3220e3",
				"3⃣": "3320e3",
				"4⃣": "3420e3",
				"5⃣": "3520e3",
				"6⃣": "3620e3",
				"7⃣": "3720e3",
				"8⃣": "3820e3",
				"9⃣": "3920e3",
				"0⃣": "3020e3",
				"🔟": "1f51f",
				"📶": "1f4f6",
				"📳": "1f4f3",
				"📴": "1f4f4",
				"🍔": "1f354",
				"🍙": "1f359",
				"🍰": "1f370",
				"🍜": "1f35c",
				"🍞": "1f35e",
				"🍳": "1f373",
				"🍦": "1f366",
				"🍟": "1f35f",
				"🍡": "1f361",
				"🍘": "1f358",
				"🍚": "1f35a",
				"🍝": "1f35d",
				"🍛": "1f35b",
				"🍢": "1f362",
				"🍣": "1f363",
				"🍱": "1f371",
				"🍲": "1f372",
				"🍧": "1f367",
				"🍖": "1f356",
				"🍥": "1f365",
				"🍠": "1f360",
				"🍕": "1f355",
				"🍗": "1f357",
				"🍨": "1f368",
				"🍩": "1f369",
				"🍪": "1f36a",
				"🍫": "1f36b",
				"🍬": "1f36c",
				"🍭": "1f36d",
				"🍮": "1f36e",
				"🍯": "1f36f",
				"🍤": "1f364",
				"🍴": "1f374",
				"☕": "2615",
				"🍸": "1f378",
				"🍺": "1f37a",
				"🍵": "1f375",
				"🍶": "1f376",
				"🍷": "1f377",
				"🍻": "1f37b",
				"🍹": "1f379",
				"↗": "2197",
				"↘": "2198",
				"↖": "2196",
				"↙": "2199",
				"⤴": "2934",
				"⤵": "2935",
				"↔": "2194",
				"↕": "2195",
				"⬆": "2b06",
				"⬇": "2b07",
				"➡": "27a1",
				"⬅": "2b05",
				"▶": "25b6",
				"◀": "25c0",
				"⏩": "23e9",
				"⏪": "23ea",
				"⏫": "23eb",
				"⏬": "23ec",
				"🔺": "1f53a",
				"🔻": "1f53b",
				"🔼": "1f53c",
				"🔽": "1f53d",
				"⭕": "2b55",
				"❌": "274c",
				"❎": "274e",
				"❗": "2757",
				"⁉": "2049",
				"‼": "203c",
				"❓": "2753",
				"❔": "2754",
				"❕": "2755",
				"〰": "3030",
				"➰": "27b0",
				"➿": "27bf",
				"❤": "2764",
				"💓": "1f493",
				"💔": "1f494",
				"💕": "1f495",
				"💖": "1f496",
				"💗": "1f497",
				"💘": "1f498",
				"💙": "1f499",
				"💚": "1f49a",
				"💛": "1f49b",
				"💜": "1f49c",
				"💝": "1f49d",
				"💞": "1f49e",
				"💟": "1f49f",
				"♥": "2665",
				"♠": "2660",
				"♦": "2666",
				"♣": "2663",
				"🚬": "1f6ac",
				"🚭": "1f6ad",
				"♿": "267f",
				"🚩": "1f6a9",
				"⚠": "26a0",
				"⛔": "26d4",
				"♻": "267b",
				"🚲": "1f6b2",
				"🚶": "1f6b6",
				"🚹": "1f6b9",
				"🚺": "1f6ba",
				"🛀": "1f6c0",
				"🚻": "1f6bb",
				"🚽": "1f6bd",
				"🚾": "1f6be",
				"🚼": "1f6bc",
				"🚪": "1f6aa",
				"🚫": "1f6ab",
				"✔": "2714",
				"🆑": "1f191",
				"🆒": "1f192",
				"🆓": "1f193",
				"🆔": "1f194",
				"🆕": "1f195",
				"🆖": "1f196",
				"🆗": "1f197",
				"🆘": "1f198",
				"🆙": "1f199",
				"🆚": "1f19a",
				"🈁": "1f201",
				"🈂": "1f202",
				"🈲": "1f232",
				"🈳": "1f233",
				"🈴": "1f234",
				"🈵": "1f235",
				"🈶": "1f236",
				"🈚": "1f21a",
				"🈷": "1f237",
				"🈸": "1f238",
				"🈹": "1f239",
				"🈯": "1f22f",
				"🈺": "1f23a",
				"㊙": "3299",
				"㊗": "3297",
				"🉐": "1f250",
				"🉑": "1f251",
				"➕": "2795",
				"➖": "2796",
				"✖": "2716",
				"➗": "2797",
				"💠": "1f4a0",
				"💡": "1f4a1",
				"💢": "1f4a2",
				"💣": "1f4a3",
				"💤": "1f4a4",
				"💥": "1f4a5",
				"💦": "1f4a6",
				"💧": "1f4a7",
				"💨": "1f4a8",
				"💩": "1f4a9",
				"💪": "1f4aa",
				"💫": "1f4ab",
				"💬": "1f4ac",
				"✨": "2728",
				"✴": "2734",
				"✳": "2733",
				"⚪": "26aa",
				"⚫": "26ab",
				"🔴": "1f534",
				"🔵": "1f535",
				"🔲": "1f532",
				"🔳": "1f533",
				"⭐": "2b50",
				"⬜": "2b1c",
				"⬛": "2b1b",
				"▫": "25ab",
				"▪": "25aa",
				"◽": "25fd",
				"◾": "25fe",
				"◻": "25fb",
				"◼": "25fc",
				"🔶": "1f536",
				"🔷": "1f537",
				"🔸": "1f538",
				"🔹": "1f539",
				"❇": "2747",
				"💮": "1f4ae",
				"💯": "1f4af",
				"↩": "21a9",
				"↪": "21aa",
				"🔃": "1f503",
				"🔊": "1f50a",
				"🔋": "1f50b",
				"🔌": "1f50c",
				"🔍": "1f50d",
				"🔎": "1f50e",
				"🔒": "1f512",
				"🔓": "1f513",
				"🔏": "1f50f",
				"🔐": "1f510",
				"🔑": "1f511",
				"🔔": "1f514",
				"☑": "2611",
				"🔘": "1f518",
				"🔖": "1f516",
				"🔗": "1f517",
				"🔙": "1f519",
				"🔚": "1f51a",
				"🔛": "1f51b",
				"🔜": "1f51c",
				"🔝": "1f51d",
				" ": "2003",
				" ": "2002",
				" ": "2005",
				"✅": "2705",
				"✊": "270a",
				"✋": "270b",
				"✌": "270c",
				"👊": "1f44a",
				"👍": "1f44d",
				"☝": "261d",
				"👆": "1f446",
				"👇": "1f447",
				"👈": "1f448",
				"👉": "1f449",
				"👋": "1f44b",
				"👏": "1f44f",
				"👌": "1f44c",
				"👎": "1f44e",
				"👐": "1f450",
				"": "2600",
				"": "2601",
				"": "2614",
				"": "26c4",
				"": "26a1",
				"": "1f300",
				"[霧]": "1f301",
				"": "1f302",
				"": "1f30c",
				"": "1f304",
				"": "1f305",
				"": "1f306",
				"": "1f307",
				"": "1f308",
				"[雪結晶]": "2744",
				"": "26c5",
				"": "1f30a",
				"[火山]": "1f30b",
				"[地球]": "1f30f",
				"●": "1f311",
				"": "1f31b",
				"○": "1f315",
				"": "1f31f",
				"☆彡": "1f320",
				"": "1f550",
				"": "1f551",
				"": "1f552",
				"": "1f553",
				"": "1f554",
				"": "1f555",
				"": "1f556",
				"": "1f557",
				"": "1f558",
				"": "23f0",
				"": "1f55a",
				"": "1f55b",
				"[腕時計]": "231a",
				"[砂時計]": "23f3",
				"": "2648",
				"": "2649",
				"": "264a",
				"": "264b",
				"": "264c",
				"": "264d",
				"": "264e",
				"": "264f",
				"": "2650",
				"": "2651",
				"": "2652",
				"": "2653",
				"": "26ce",
				"": "1f33f",
				"": "1f337",
				"": "1f341",
				"": "1f338",
				"": "1f339",
				"": "1f342",
				"": "1f343",
				"": "1f33a",
				"": "1f33c",
				"": "1f334",
				"": "1f335",
				"": "1f33e",
				"[とうもろこし]": "1f33d",
				"[キノコ]": "1f344",
				"[栗]": "1f330",
				"[さくらんぼ]": "1f352",
				"[バナナ]": "1f34c",
				"": "1f34f",
				"": "1f34a",
				"": "1f353",
				"": "1f349",
				"": "1f345",
				"": "1f346",
				"[メロン]": "1f348",
				"[パイナップル]": "1f34d",
				"[ブドウ]": "1f347",
				"[モモ]": "1f351",
				"": "1f440",
				"": "1f442",
				"": "1f443",
				"": "1f444",
				"": "1f61d",
				"": "1f484",
				"": "1f485",
				"": "1f486",
				"": "1f487",
				"": "1f488",
				"〓": "2005",
				"": "1f466",
				"": "1f467",
				"": "1f468",
				"": "1f469",
				"[家族]": "1f46a",
				"": "1f46b",
				"": "1f46e",
				"": "1f46f",
				"[花嫁]": "1f470",
				"": "1f471",
				"": "1f472",
				"": "1f473",
				"": "1f474",
				"": "1f475",
				"": "1f476",
				"": "1f477",
				"": "1f478",
				"[なまはげ]": "1f479",
				"[天狗]": "1f47a",
				"": "1f47b",
				"": "1f47c",
				"": "1f47d",
				"": "1f47e",
				"": "1f47f",
				"": "1f480",
				"": "1f481",
				"": "1f482",
				"": "1f483",
				"[カタツムリ]": "1f40c",
				"": "1f40d",
				"": "1f40e",
				"": "1f414",
				"": "1f417",
				"": "1f42b",
				"": "1f418",
				"": "1f428",
				"": "1f412",
				"": "1f411",
				"": "1f419",
				"": "1f41a",
				"": "1f41b",
				"[アリ]": "1f41c",
				"[ミツバチ]": "1f41d",
				"[てんとう虫]": "1f41e",
				"": "1f420",
				"": "1f3a3",
				"[カメ]": "1f422",
				"": "1f423",
				"": "1f426",
				"": "1f427",
				"": "1f436",
				"": "1f42c",
				"": "1f42d",
				"": "1f42f",
				"": "1f431",
				"": "1f433",
				"": "1f434",
				"": "1f435",
				"": "1f43d",
				"": "1f43b",
				"": "1f439",
				"": "1f43a",
				"": "1f42e",
				"": "1f430",
				"": "1f438",
				"": "1f463",
				"[辰]": "1f432",
				"[パンダ]": "1f43c",
				"": "1f620",
				"": "1f64d",
				"": "1f632",
				"": "1f61e",
				"": "1f62b",
				"": "1f630",
				"": "1f612",
				"": "1f63b",
				"": "1f63c",
				"": "1f61c",
				"": "1f60a",
				"": "1f63d",
				"": "1f61a",
				"": "1f637",
				"": "1f633",
				"": "1f63a",
				"": "1f605",
				"": "1f60c",
				"": "1f639",
				"": "263a",
				"": "1f604",
				"": "1f63f",
				"": "1f62d",
				"": "1f628",
				"": "1f64e",
				"": "1f4ab",
				"": "1f631",
				"": "1f62a",
				"": "1f60f",
				"": "1f613",
				"": "1f625",
				"": "1f609",
				"": "1f645",
				"": "1f646",
				"": "1f647",
				"(/_＼)": "1f648",
				"(・×・)": "1f64a",
				"|(・×・)|": "1f649",
				"": "270b",
				"": "1f64c",
				"": "1f64f",
				"": "1f3e1",
				"": "1f3e2",
				"": "1f3e3",
				"": "1f3e5",
				"": "1f3e6",
				"": "1f3e7",
				"": "1f3e8",
				"": "1f3e9",
				"": "1f3ea",
				"": "1f3eb",
				"": "26ea",
				"": "26f2",
				"": "1f3ec",
				"": "1f3ef",
				"": "1f3f0",
				"": "1f3ed",
				"": "1f6a2",
				"": "1f376",
				"": "1f5fb",
				"": "1f5fc",
				"": "1f5fd",
				"[日本地図]": "1f5fe",
				"[モアイ]": "1f5ff",
				"": "1f45f",
				"": "1f460",
				"": "1f461",
				"": "1f462",
				"[メガネ]": "1f453",
				"": "1f45a",
				"[ジーンズ]": "1f456",
				"": "1f451",
				"": "1f454",
				"": "1f452",
				"": "1f457",
				"": "1f458",
				"": "1f459",
				"[財布]": "1f45b",
				"": "1f45c",
				"[ふくろ]": "1f45d",
				"": "1f4b5",
				"": "1f4b1",
				"": "1f4c8",
				"[カード]": "1f4b3",
				"￥": "1f4b4",
				"[飛んでいくお金]": "1f4b8",
				"": "1f1e81f1f3",
				"": "1f1e91f1ea",
				"": "1f1ea1f1f8",
				"": "1f1eb1f1f7",
				"": "1f1ec1f1e7",
				"": "1f1ee1f1f9",
				"": "1f1ef1f1f5",
				"": "1f1f01f1f7",
				"": "1f1f71f1fa",
				"": "1f1fa1f1f8",
				"": "1f525",
				"[懐中電灯]": "1f526",
				"[レンチ]": "1f527",
				"": "1f528",
				"[ネジ]": "1f529",
				"[包丁]": "1f52a",
				"": "1f52b",
				"": "1f52f",
				"": "1f530",
				"": "1f531",
				"": "1f489",
				"": "1f48a",
				"": "1f170",
				"": "1f171",
				"": "1f18e",
				"": "1f17e",
				"": "1f380",
				"": "1f4e6",
				"": "1f382",
				"": "1f384",
				"": "1f385",
				"": "1f38c",
				"": "1f386",
				"": "1f388",
				"": "1f389",
				"": "1f38d",
				"": "1f38e",
				"": "1f393",
				"": "1f392",
				"": "1f38f",
				"": "1f387",
				"": "1f390",
				"": "1f383",
				"[オメデトウ]": "1f38a",
				"[七夕]": "1f38b",
				"": "1f391",
				"[ポケベル]": "1f4df",
				"": "1f4de",
				"": "1f4f1",
				"": "1f4f2",
				"": "1f4d1",
				"": "1f4e0",
				"": "1f4e7",
				"": "1f4eb",
				"": "1f4ee",
				"[新聞]": "1f4f0",
				"": "1f4e2",
				"": "1f4e3",
				"": "1f4e1",
				"[送信BOX]": "1f4e4",
				"[受信BOX]": "1f4e5",
				"[ABCD]": "1f520",
				"[abcd]": "1f521",
				"[1234]": "1f522",
				"[記号]": "1f523",
				"[ABC]": "1f524",
				"[ペン]": "2712",
				"": "1f4ba",
				"": "1f4bb",
				"[クリップ]": "1f4ce",
				"": "1f4bc",
				"": "1f4be",
				"": "1f4bf",
				"": "1f4c0",
				"": "2702",
				"[画びょう]": "1f4cc",
				"[カレンダー]": "1f4c6",
				"[フォルダ]": "1f4c2",
				"": "1f4d2",
				"[名札]": "1f4db",
				"[スクロール]": "1f4dc",
				"[グラフ]": "1f4c9",
				"[定規]": "1f4cf",
				"[三角定規]": "1f4d0",
				"": "26be",
				"": "26f3",
				"": "1f3be",
				"": "26bd",
				"": "1f3bf",
				"": "1f3c0",
				"": "1f3c1",
				"[スノボ]": "1f3c2",
				"": "1f3c3",
				"": "1f3c4",
				"": "1f3c6",
				"": "1f3c8",
				"": "1f3ca",
				"": "1f683",
				"": "24c2",
				"": "1f684",
				"": "1f685",
				"": "1f697",
				"": "1f699",
				"": "1f68c",
				"": "1f68f",
				"": "2708",
				"": "26f5",
				"": "1f689",
				"": "1f680",
				"": "1f6a4",
				"": "1f695",
				"": "1f69a",
				"": "1f692",
				"": "1f691",
				"": "1f6a8",
				"": "26fd",
				"": "1f17f",
				"": "1f6a5",
				"": "26d4",
				"": "2668",
				"": "26fa",
				"": "1f3a1",
				"": "1f3a2",
				"": "1f3a4",
				"": "1f4f9",
				"": "1f3a6",
				"": "1f3a7",
				"": "1f3a8",
				"": "1f3ad",
				"[イベント]": "1f3aa",
				"": "1f3ab",
				"": "1f3ac",
				"[ゲーム]": "1f3ae",
				"": "1f004",
				"": "1f3af",
				"": "1f3b0",
				"": "1f3b1",
				"[サイコロ]": "1f3b2",
				"[ボーリング]": "1f3b3",
				"[花札]": "1f3b4",
				"[ジョーカー]": "1f0cf",
				"": "1f3b5",
				"": "1f3bc",
				"": "1f3b7",
				"": "1f3b8",
				"[ピアノ]": "1f3b9",
				"": "1f3ba",
				"[バイオリン]": "1f3bb",
				"": "303d",
				"": "1f4f7",
				"": "1f4fa",
				"": "1f4fb",
				"": "1f4fc",
				"": "1f48b",
				"": "1f48c",
				"": "1f48d",
				"": "1f48e",
				"": "1f48f",
				"": "1f490",
				"": "1f491",
				"": "1f492",
				"": "1f51e",
				"": "a9",
				"": "ae",
				"": "2122",
				"[ｉ]": "2139",
				"": "2320e3",
				"": "3120e3",
				"": "3220e3",
				"": "3320e3",
				"": "3420e3",
				"": "3520e3",
				"": "3620e3",
				"": "3720e3",
				"": "3820e3",
				"": "3920e3",
				"": "3020e3",
				"[10]": "1f51f",
				"": "1f4f6",
				"": "1f4f3",
				"": "1f4f4",
				"": "1f354",
				"": "1f359",
				"": "1f370",
				"": "1f35c",
				"": "1f35e",
				"": "1f373",
				"": "1f366",
				"": "1f35f",
				"": "1f361",
				"": "1f358",
				"": "1f35a",
				"": "1f35d",
				"": "1f35b",
				"": "1f362",
				"": "1f363",
				"": "1f371",
				"": "1f372",
				"": "1f367",
				"[肉]": "1f356",
				"[なると]": "1f365",
				"[やきいも]": "1f360",
				"[ピザ]": "1f355",
				"[チキン]": "1f357",
				"[アイスクリーム]": "1f368",
				"[ドーナツ]": "1f369",
				"[クッキー]": "1f36a",
				"[チョコ]": "1f36b",
				"[キャンディ]": "1f36d",
				"[プリン]": "1f36e",
				"[ハチミツ]": "1f36f",
				"[エビフライ]": "1f364",
				"": "1f374",
				"": "2615",
				"": "1f379",
				"": "1f37a",
				"": "1f375",
				"": "1f37b",
				"": "2934",
				"": "2935",
				"": "2196",
				"": "2199",
				"⇔": "2194",
				"↑↓": "1f503",
				"": "2b06",
				"": "2b07",
				"": "27a1",
				"": "1f519",
				"": "25b6",
				"": "25c0",
				"": "23e9",
				"": "23ea",
				"▲": "1f53c",
				"▼": "1f53d",
				"": "2b55",
				"": "2716",
				"": "2757",
				"！？": "2049",
				"！！": "203c",
				"": "2753",
				"": "2754",
				"": "2755",
				"～": "27b0",
				"": "27bf",
				"": "2764",
				"": "1f49e",
				"": "1f494",
				"": "1f497",
				"": "1f498",
				"": "1f499",
				"": "1f49a",
				"": "1f49b",
				"": "1f49c",
				"": "1f49d",
				"": "1f49f",
				"": "2665",
				"": "2660",
				"": "2666",
				"": "2663",
				"": "1f6ac",
				"": "1f6ad",
				"": "267f",
				"[旗]": "1f6a9",
				"": "26a0",
				"": "1f6b2",
				"": "1f6b6",
				"": "1f6b9",
				"": "1f6ba",
				"": "1f6c0",
				"": "1f6bb",
				"": "1f6bd",
				"": "1f6be",
				"": "1f6bc",
				"[ドア]": "1f6aa",
				"[禁止]": "1f6ab",
				"[チェックマーク]": "2705",
				"[CL]": "1f191",
				"": "1f192",
				"[FREE]": "1f193",
				"": "1f194",
				"": "1f195",
				"[NG]": "1f196",
				"": "1f197",
				"[SOS]": "1f198",
				"": "1f199",
				"": "1f19a",
				"": "1f201",
				"": "1f202",
				"[禁]": "1f232",
				"": "1f233",
				"[合]": "1f234",
				"": "1f235",
				"": "1f236",
				"": "1f21a",
				"": "1f237",
				"": "1f238",
				"": "1f239",
				"": "1f22f",
				"": "1f23a",
				"": "3299",
				"": "3297",
				"": "1f250",
				"[可]": "1f251",
				"[＋]": "2795",
				"[－]": "2796",
				"[÷]": "2797",
				"": "1f4a1",
				"": "1f4a2",
				"": "1f4a3",
				"": "1f4a4",
				"[ドンッ]": "1f4a5",
				"": "1f4a7",
				"": "1f4a8",
				"": "1f4a9",
				"": "1f4aa",
				"[フキダシ]": "1f4ac",
				"": "2747",
				"": "2734",
				"": "2733",
				"": "1f534",
				"": "25fc",
				"": "1f539",
				"": "2b50",
				"[花丸]": "1f4ae",
				"[100点]": "1f4af",
				"←┘": "21a9",
				"└→": "21aa",
				"": "1f50a",
				"[電池]": "1f50b",
				"[コンセント]": "1f50c",
				"": "1f50e",
				"": "1f510",
				"": "1f513",
				"": "1f511",
				"": "1f514",
				"[ラジオボタン]": "1f518",
				"[ブックマーク]": "1f516",
				"[リンク]": "1f517",
				"[end]": "1f51a",
				"[ON]": "1f51b",
				"[SOON]": "1f51c",
				"": "1f51d",
				"": "270a",
				"": "270c",
				"": "1f44a",
				"": "1f44d",
				"": "261d",
				"": "1f446",
				"": "1f447",
				"": "1f448",
				"": "1f449",
				"": "1f44b",
				"": "1f44f",
				"": "1f44c",
				"": "1f44e",
				"": "1f450"
			},
			s = {
				"/微笑": "0",
				"/撇嘴": "1",
				"/色": "2",
				"/发呆": "3",
				"/得意": "4",
				"/流泪": "5",
				"/害羞": "6",
				"/闭嘴": "7",
				"/睡": "8",
				"/大哭": "9",
				"/尴尬": "10",
				"/发怒": "11",
				"/调皮": "12",
				"/呲牙": "13",
				"/惊讶": "14",
				"/难过": "15",
				"/酷": "16",
				"/冷汗": "17",
				"/抓狂": "18",
				"/吐": "19",
				"/偷笑": "20",
				"/可爱": "21",
				"/白眼": "22",
				"/傲慢": "23",
				"/饥饿": "24",
				"/困": "25",
				"/惊恐": "26",
				"/流汗": "27",
				"/憨笑": "28",
				"/大兵": "29",
				"/奋斗": "30",
				"/咒骂": "31",
				"/疑问": "32",
				"/嘘": "33",
				"/晕": "34",
				"/折磨": "35",
				"/衰": "36",
				"/骷髅": "37",
				"/敲打": "38",
				"/再见": "39",
				"/擦汗": "40",
				"/抠鼻": "41",
				"/鼓掌": "42",
				"/糗大了": "43",
				"/坏笑": "44",
				"/左哼哼": "45",
				"/右哼哼": "46",
				"/哈欠": "47",
				"/鄙视": "48",
				"/委屈": "49",
				"/快哭了": "50",
				"/阴险": "51",
				"/亲亲": "52",
				"/吓": "53",
				"/可怜": "54",
				"/菜刀": "55",
				"/西瓜": "56",
				"/啤酒": "57",
				"/篮球": "58",
				"/乒乓": "59",
				"/咖啡": "60",
				"/饭": "61",
				"/猪头": "62",
				"/玫瑰": "63",
				"/凋谢": "64",
				"/示爱": "65",
				"/爱心": "66",
				"/心碎": "67",
				"/蛋糕": "68",
				"/闪电": "69",
				"/炸弹": "70",
				"/刀": "71",
				"/足球": "72",
				"/瓢虫": "73",
				"/便便": "74",
				"/月亮": "75",
				"/太阳": "76",
				"/礼物": "77",
				"/拥抱": "78",
				"/强": "79",
				"/弱": "80",
				"/握手": "81",
				"/胜利": "82",
				"/抱拳": "83",
				"/勾引": "84",
				"/拳头": "85",
				"/差劲": "86",
				"/爱你": "87",
				"/NO": "88",
				"/OK": "89",
				"/爱情": "90",
				"/飞吻": "91",
				"/跳跳": "92",
				"/发抖": "93",
				"/怄火": "94",
				"/转圈": "95",
				"/磕头": "96",
				"/回头": "97",
				"/跳绳": "98",
				"/挥手": "99",
				"/激动": "100",
				"/街舞": "101",
				"/献吻": "102",
				"/左太极": "103",
				"/右太极": "104",
				"/::)": "0",
				"/::~": "1",
				"/::B": "2",
				"/::|": "3",
				"/:8-)": "4",
				"/::<": "5",
				"/::$": "6",
				"/::X": "7",
				"/::Z": "8",
				"/::(": "9",
				"/::'(": "9",
				"/::-|": "10",
				"/::@": "11",
				"/::P": "12",
				"/::D": "13",
				"/::O": "14",
				"/::(": "15",
				"/::+": "16",
				"/:--b": "17",
				"/::Q": "18",
				"/::T": "19",
				"/:,@P": "20",
				"/:,@-D": "21",
				"/::d": "22",
				"/:,@o": "23",
				"/::g": "24",
				"/:|-)": "25",
				"/::!": "26",
				"/::L": "27",
				"/::>": "28",
				"/::,@": "29",
				"/:,@f": "30",
				"/::-S": "31",
				"/:?": "32",
				"/:,@x": "33",
				"/:,@@": "34",
				"/::8": "35",
				"/:,@!": "36",
				"/:!!!": "37",
				"/:xx": "38",
				"/:bye": "39",
				"/:wipe": "40",
				"/:dig": "41",
				"/:handclap": "42",
				"/:&-(": "43",
				"/:B-)": "44",
				"/:<@": "45",
				"/:@>": "46",
				"/::-O": "47",
				"/:>-|": "48",
				"/:P-(": "49",
				"/::'|": "50",
				"/:X-)": "51",
				"/::*": "52",
				"/:@x": "53",
				"/:8*": "54",
				"/:pd": "55",
				"/:<W>": "56",
				"/:beer": "57",
				"/:basketb": "58",
				"/:oo": "59",
				"/:coffee": "60",
				"/:eat": "61",
				"/:pig": "62",
				"/:rose": "63",
				"/:fade": "64",
				"/:showlove": "65",
				"/:heart": "66",
				"/:break": "67",
				"/:cake": "68",
				"/:li": "69",
				"/:bome": "70",
				"/:kn": "71",
				"/:footb": "72",
				"/:ladybug": "73",
				"/:shit": "74",
				"/:moon": "75",
				"/:sun": "76",
				"/:gift": "77",
				"/:hug": "78",
				"/:strong": "79",
				"/:weak": "80",
				"/:share": "81",
				"/:v": "82",
				"/:@)": "83",
				"/:jj": "84",
				"/:@@": "85",
				"/:bad": "86",
				"/:lvu": "87",
				"/:no": "88",
				"/:ok": "89",
				"/:love": "90",
				"/:<L>": "91",
				"/:jump": "92",
				"/:shake": "93",
				"/:<O>": "94",
				"/:circle": "95",
				"/:kotow": "96",
				"/:turn": "97",
				"/:skip": "98",
				"/:oY": "99",
				"/:#-0": "100",
				"/:hiphot": "101",
				"/:kiss": "102",
				"/:<&": "103",
				"/:&>": "104"
			},
			o = '<span class="emoji emoji%s"></span>',
			u = wx.resPath + "/mpres/htmledition/images/icon/emotion/",
			a = '<img src="' + u + '%s.gif" width="24" height="24">';
		String.prototype.emoji = function() {
			var e = this.toString();
			for (var t in i)
				while (-1 != e.indexOf(t)) e = e.replace(t, o.sprintf(i[t]));
			for (var t in s)
				while (-1 != e.indexOf(t)) e = e.replace(t, a.sprintf(s[t]));
			return e;
		};
	} catch (f) {
		wx.jslog({
			src: "common/qq/emoji.js"
		}, f);
	}
});
define("tpl/biz_web/ui/dropdown.html.js", [], function(e, t, n) {
	return '<a href="javascript:;" class="btn dropdown_switch jsDropdownBt"><label class="jsBtLabel" {if search}contenteditable="true"{/if}>{label}</label><i class="arrow"></i></a>\n<div class="dropdown_data_container jsDropdownList">\n    <ul class="dropdown_data_list">\n        {if renderHtml}\n        {renderHtml}\n        {else}\n            {each data as o index}\n            <li class="dropdown_data_item {if o.className}{o.className}{/if}">  \n                <a onclick="return false;" href="javascript:;" class="jsDropdownItem" data-value="{o.value}" data-index="{index}" data-name="{o.name}">{o.name}</a>\n            </li>\n            {/each}        \n        {/if}\n    </ul>\n</div>\n';
});
define("tpl/pagebar.html.js", [], function(e, t, n) {
	return '<div class="pagination">\n    <span class="page_nav_area">\n        <a href="javascript:void(0);" class="btn page_first">{firstButtonText}</a>\n        <a href="javascript:void(0);" class="btn page_prev"><i class="arrow"></i></a>\n        {if isSimple}\n            <span class="page_num">\n                <label>{initShowPage}</label>\n                <span class="num_gap">/</span>\n                <label>{endPage}</label>\n            </span>\n        {else}\n            {each startRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav">{pageIndex}</a>\n            {/each}\n            <span class="gap_prev">...</span>\n            {each midRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav js_mid">{pageIndex}</a>\n            {/each}\n            <span class="gap_next">...</span>\n            {each endRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav">{pageIndex}</a>\n            {/each}\n        {/if}\n        <a href="javascript:void(0);" class="btn page_next"><i class="arrow"></i></a>\n        <a href="javascript:void(0);" class="btn page_last">{lastButtonText}</a>            \n    </span>\n    {if (endPage>1)}\n    <span class="goto_area">\n        <input type="text">\n        <a href="javascript:void(0);" class="btn page_go">跳转</a>\n    </span>\n    {/if}\n</div>\n';
});
define("biz_web/lib/spin.js", [], function(e, t, n) {
	try {
		var r = +(new Date),
			i = function() {
				function e(e, t) {
					var n = ~~((e[a] - 1) / 2);
					for (var r = 1; r <= n; r++) t(e[r * 2 - 1], e[r * 2]);
				}

				function t(t) {
					var n = document.createElement(t || "div");
					return e(arguments, function(e, t) {
						n[e] = t;
					}), n;
				}

				function n(e, t, r) {
					return r && !r[x] && n(e, r), e.insertBefore(t, r || null), e;
				}

				function r(e, t) {
					var n = [p, t, ~~(e * 100)].join("-"),
						r = "{" + p + ":" + e + "}",
						i;
					if (!H[n]) {
						for (i = 0; i < P[a]; i++) try {
							j.insertRule("@" + (P[i] && "-" + P[i].toLowerCase() + "-" || "") + "keyframes " + n + "{0%{" + p + ":1}" + t + "%" + r + "to" + r + "}", j.cssRules[a]);
						} catch (s) {}
						H[n] = 1;
					}
					return n;
				}

				function i(e, t) {
					var n = e[m],
						r, i;
					if (n[t] !== undefined) return t;
					t = t.charAt(0).toUpperCase() + t.slice(1);
					for (i = 0; i < P[a]; i++) {
						r = P[i] + t;
						if (n[r] !== undefined) return r;
					}
				}

				function s(t) {
					return e(arguments, function(e, n) {
						t[m][i(t, e) || e] = n;
					}), t;
				}

				function o(t) {
					return e(arguments, function(e, n) {
						t[e] === undefined && (t[e] = n);
					}), t;
				}
				var u = "width",
					a = "length",
					f = "radius",
					l = "lines",
					c = "trail",
					h = "color",
					p = "opacity",
					d = "speed",
					v = "shadow",
					m = "style",
					g = "height",
					y = "left",
					b = "top",
					w = "px",
					E = "childNodes",
					S = "firstChild",
					x = "parentNode",
					T = "position",
					N = "relative",
					C = "absolute",
					k = "animation",
					L = "transform",
					A = "Origin",
					O = "Timeout",
					M = "coord",
					_ = "#000",
					D = m + "Sheets",
					P = "webkit0Moz0ms0O".split(0),
					H = {},
					B;
				n(document.getElementsByTagName("head")[0], t(m));
				var j = document[D][document[D][a] - 1],
					F = function(e) {
						this.opts = o(e || {}, l, 12, c, 100, a, 7, u, 5, f, 10, h, _, p, .25, d, 1);
					},
					I = F.prototype = {
						spin: function(e) {
							var t = this,
								r = t.el = t[l](t.opts);
							e && n(e, s(r, y, ~~(e.offsetWidth / 2) + w, b, ~~(e.offsetHeight / 2) + w), e[S]);
							if (!B) {
								var i = t.opts,
									o = 0,
									u = 20 / i[d],
									a = (1 - i[p]) / (u * i[c] / 100),
									f = u / i[l];
								(function h() {
									o++;
									for (var e = i[l]; e; e--) {
										var n = Math.max(1 - (o + e * f) % u * a, i[p]);
										t[p](r, i[l] - e, n, i);
									}
									t[O] = t.el && window["set" + O](h, 50);
								})();
							}
							return t;
						},
						stop: function() {
							var e = this,
								t = e.el;
							return window["clear" + O](e[O]), t && t[x] && t[x].removeChild(t), e.el = undefined, e;
						}
					};
				I[l] = function(e) {
					function i(n, r) {
						return s(t(), T, C, u, e[a] + e[u] + w, g, e[u] + w, "background", n, "boxShadow", r, L + A, y, L, "rotate(" + ~~(360 / e[l] * E) + "deg) translate(" + e[f] + w + ",0)", "borderRadius", "100em");
					}
					var o = s(t(), T, N),
						m = r(e[p], e[c]),
						E = 0,
						S;
					for (; E < e[l]; E++) S = s(t(), T, C, b, 1 + ~(e[u] / 2) + w, L, "translate3d(0,0,0)", k, m + " " + 1 / e[d] + "s linear infinite " + (1 / e[l] / e[d] * E - 1 / e[d]) + "s"), e[v] && n(S, s(i(_, "0 0 4px " + _), b, 2 + w)), n(o, n(S, i(e[h], "0 0 1px rgba(0,0,0,.1)")));
					return o;
				}, I[p] = function(e, t, n) {
					e[E][t][m][p] = n;
				};
				var q = "behavior",
					R = "url(#default#VML)",
					U = "group0roundrect0fill0stroke".split(0);
				return function() {
					var e = s(t(U[0]), q, R),
						r;
					if (!i(e, L) && e.adj) {
						for (r = 0; r < U[a]; r++) j.addRule(U[r], q + ":" + R);
						I[l] = function() {
							function e() {
								return s(t(U[0], M + "size", c + " " + c, M + A, -o + " " + -o), u, c, g, c);
							}

							function r(r, a, c) {
								n(d, n(s(e(), "rotation", 360 / i[l] * r + "deg", y, ~~a), n(s(t(U[1], "arcsize", 1), u, o, g, i[u], y, i[f], b, -i[u] / 2, "filter", c), t(U[2], h, i[h], p, i[p]), t(U[3], p, 0))));
							}
							var i = this.opts,
								o = i[a] + i[u],
								c = 2 * o,
								d = e(),
								m = ~(i[a] + i[f] + i[u]) + w,
								E;
							if (i[v])
								for (E = 1; E <= i[l]; E++) r(E, -2, "progid:DXImage" + L + ".Microsoft.Blur(pixel" + f + "=2,make" + v + "=1," + v + p + "=.3)");
							for (E = 1; E <= i[l]; E++) r(E);
							return n(s(t(), "margin", m + " 0 0 " + m, T, N), d);
						}, I[p] = function(e, t, n, r) {
							r = r[v] && r[l] || 0, e[S][E][t + r][S][S][p] = n;
						};
					} else B = i(e, k);
				}(), F;
			}();
		$.fn.spin = function(e, t) {
			return this.each(function() {
				var n = $(this),
					r = n.data();
				r.spinner && (r.spinner.stop(), delete r.spinner), e !== !1 && (e = $.extend({
					color: t || n.css("color")
				}, $.fn.spin.presets[e] || e), r.spinner = (new i(e)).spin(this));
			});
		}, $.fn.spin.presets = {
			tiny: {
				lines: 8,
				length: 2,
				width: 2,
				radius: 3
			},
			small: {
				lines: 8,
				length: 4,
				width: 3,
				radius: 5
			},
			large: {
				lines: 10,
				length: 8,
				width: 4,
				radius: 8
			}
		};
	} catch (s) {
		wx.jslog({
			src: "biz_web/lib/spin.js"
		}, s);
	}
});
define("tpl/top.html.js", [], function(e, t, n) {
	return '<ul class="tab_navs title_tab" data-index="{itemIndex=0}">\n    {each data as o index}\n    {if (typeof o.acl == "undefined" || o.acl == 1)}\n    <li data-index="{itemIndex++}" class="tab_nav {if (itemIndex == 1)}first{/if} js_top {o.className}" data-id="{o.id}"><a href="{o.url}" {if o.target==\'_blank\'}target="_blank"{/if}>{o.name}</a></li>\n    {/if}\n    {/each}\n</ul>\n';
});
define("common/wx/searchInput.js", ["tpl/searchInput.html.js"], function(e) {
	"use strict";

	function c(e) {
		var c = $(e.id).html(l),
			n = c.find(".jsSearchInput"),
			t = c.find(".jsSearchInputBt"),
			h = c.find(".jsSearchInputClose");
		e.value && n.val(e.value) && h.show(), e.placeholder && (n.attr("placeholder", e.placeholder),
			$.fn.placeholder && n.placeholder(e.placeholder)), t.click(function() {
			e.click && e.click(n.val());
		}), n.keydown(function(e) {
			var c = "which" in e ? e.which : e.keyCode;
			13 == c && t.trigger("click");
		}), n.keyup(function() {
			0 == n.val().trim().length ? h.hide() : h.show();
		}), h.click(function() {
			n.val(""), h.hide();
		});
	}
	var l = e("tpl/searchInput.html.js");
	return c;
});
define("message/renderList.js", ["common/qq/emoji.js", "common/wx/simplePopup.js", "common/qq/Class.js", "common/wx/media/img.js", "common/wx/media/audio.js", "common/wx/media/video.js", "common/wx/media/idCard.js", "tpl/msgListItem.html.js", "common/wx/RichBuddy.js", "common/wx/remark.js", "common/wx/media/simpleAppmsg.js", "common/qq/events.js", "message/message_cgi.js", "common/wx/time.js", "common/wx/Tips.js", "tpl/message/video_popup.html.js", "common/wx/richEditor/emotionEditor.js", "common/wx/verifycode.js"], function(t) {
	"use strict";

	function e(t) {
		var e = new f;
		$(".avatar", t).mouseover(function() {
			var t = $(this),
				n = parseInt(t.attr("data-fakeid"), 10),
				i = parseInt(t.attr("data-id"), 10),
				o = t.offset(),
				a = t.width();
			n != wx.data.uin && e.show({
				fakeId: n,
				tmpmsgid: i,
				position: {
					left: o.left + a + 2,
					top: o.top
				}
			});
		}).mouseout(function() {
			e.hide();
		});
	}

	function n(t) {
		$(".js_changeRemark", t).unbind("click").click(function() {
			var e = $(this),
				n = (e.closest("li.msgListItem"), e.attr("data-fakeid")),
				i = $(".nickname[data-fakeid=" + n + "]", t),
				o = $(".remark_name[data-fakeid=" + n + "]", t),
				a = "" == $.trim(i.html()) ? "" : o.html();
			p.show(n, a);
		}), g.on("Remark:changed", function(e, n) {
			var i, o, a, s;
			i = $(".nickname[data-fakeid=" + e + "]", t), o = $(".remark_name[data-fakeid=" + e + "]", t), a = "" == $.trim(i.html()) ? "" : o.html(),
				s = "" == a ? o.html() : i.find("strong").html(), "" == n && "" != a ? (i.html(""), o.html(s)) : "" != n && "" == a ? (o.html(n),
					i.html("(<strong>{nickName}</strong>)".format({
						nickName: s
					}))) : "" != n && "" != a && o.html(n);
		});
	}

	function i(t) {
		$(t).off("click", ".js_save").on("click", ".js_save", function() {
			var t = $(this),
				e = t.attr("idx"),
				n = t.attr("data-type");
			4 == n ? $(x).popup({
				title: "保存为视频消息",
				onOK: function() {
					var t = this.get().find(".title").val(),
						n = this.get().find(".digest").val();
					return t.length < 1 || t.length > 64 ? (k.err("请输入1到64个字的标题"), !0) : "" != n && n.length > 120 ? (k.err("简介字数不能超过120字"), !0) : void j.save(e, t, n, function() {});
				},
				onCancel: function() {
					this.hide();
				},
				onHide: function() {
					this.remove();
				}
			}) : new r({
				title: "填写素材名字",
				callback: function(t) {
					j.save(e, t, function() {});
				},
				rule: function(t) {
					var e = $.trim(t);
					return "" != e && e.length <= 50 && -1 == e.indexOf(" ");
				},
				msg: "素材名必须为1到50个字符，并且素材名不能包含空格"
			});
		});
	}

	function o(t) {
		t.off("click", ".js_star").on("click", ".js_star", function() {
			var t = $(this),
				e = t.attr("idx"),
				n = t.attr("action"),
				i = t.attr("starred");
			j.star(e, i, function() {
				1 == i ? (t.removeClass("star_orange").addClass("star_gray"), t.attr("starred", 0)) : (t.removeClass("star_gray").addClass("star_orange"),
					t.attr("starred", 1)), t.attr("title", 1 == i ? "收藏消息" : "取消收藏"), "star" == n && 1 == i && $("#msgListItem" + e).fadeOut();
			});
		});
	}

	function a(t) {
		t.off("click", ".js_reply").on("click", ".js_reply", function() {
			var e = $(this),
				n = e.data("id"),
				i = $("#msgListItem" + n).toggleClass("replying");
			$(".replying", t).each(function() {
				var t = $(this),
					e = t.data("id");
				e != n && t.removeClass("replying");
			}), i.data("hasClickQuickReply") || (s(i.find(".js_quick_reply_box"), i), i.data("hasClickQuickReply", !0));
		});
	}

	function s(e, n) {
		var i = 140,
			o = $(".js_editor", e),
			a = new b(o, {
				wordlimit: i,
				isHTML: !0
			}),
			s = $(".js_reply_OK", e),
			r = $(".js_reply_pickup", e);
		r.unbind("click").click(function() {
			var t = $(this).data("id");
			$("#msgListItem" + t).removeClass("replying");
		}), e.keydown(function(t) {
			return wx.isHotkey(t, "enter") ? (s.click(), !1) : void 0;
		}); {
			var m = null,
				c = $(".verifyCode", e);
			t("common/wx/verifycode.js");
		}
		s.unbind("click").click(function() {
			var t = $(this),
				e = t.data("id"),
				o = t.data("fakeid"),
				s = a.getContent();
			return s.length <= 0 || s.length > i ? void k.err("快捷回复的内容必须为1到140个字符") : null != m && m.getCode().trim().length <= 0 ? (k.err("请输入验证码"),
				void m.focus()) : (k.suc("回复中...请稍候"), t.btn(!1), void j.quickReply({
				toFakeId: o,
				content: s,
				quickReplyId: e,
				imgcode: m && m.getCode().trim()
			}, function() {
				a.setContent(""), c.html("").addClass("dn"), m = null, n.addClass("replyed"), t.btn(!0);
			}, function(e) {
				t.btn(!0), e && e.base_resp && -8 == e.base_resp.ret && (m = c.html("").removeClass("dn").verifycode().data("verifycode"),
					m.focus());
			}));
		});
	}
	t("common/qq/emoji.js");
	var r = t("common/wx/simplePopup.js"),
		m = (t("common/qq/Class.js"), t("common/wx/media/img.js")),
		c = t("common/wx/media/audio.js"),
		d = t("common/wx/media/video.js"),
		l = t("common/wx/media/idCard.js"),
		u = t("tpl/msgListItem.html.js"),
		f = t("common/wx/RichBuddy.js"),
		p = t("common/wx/remark.js"),
		v = t("common/wx/media/simpleAppmsg.js"),
		h = t("common/qq/events.js"),
		g = h(!0),
		j = t("message/message_cgi.js"),
		w = t("common/wx/time.js"),
		k = t("common/wx/Tips.js"),
		_ = w.timeFormat,
		x = t("tpl/message/video_popup.html.js"),
		y = !1,
		C = {
			1: function(t, e) {
				return t.html(e.content.emoji());
			},
			2: function(t, e) {
				return new m({
					container: $("#" + t.attr("id")),
					file_id: 0,
					msgid: e.id,
					source: e.source,
					fakeid: e.fakeid
				});
			},
			3: function(t, e) {
				var n = e;
				return n.selector = "#" + t.attr("id"), new c(n);
			},
			4: function(t, e) {
				var n = e;
				return n.selector = "#" + t.attr("id"), n.ff_must_flash = !0, new d(n);
			},
			42: function(t, e) {
				var n = e;
				return n.container = "#" + t.attr("id"), new l(n);
			},
			10: function(t, e) {
				var n = e;
				return n.container = "#" + t.attr("id"), new v(n);
			},
			15: function(t, e) {
				var n = e;
				return n.selector = t, n.tpl = "videomsg", n.id = 1e5 * Math.random() | 0, new d(n);
			},
			62: function(t, e) {
				var n = e;
				return n.selector = "#" + t.attr("id"), n.ff_must_flash = !0, "star" == t.closest("li").find(".js_star").attr("action") && (n.video_url = e.cdn_video_url,
					n.video_thumb_url = e.cdn_video_thumb_url), new d(n);
			}
		},
		b = t("common/wx/richEditor/emotionEditor.js"),
		q = function() {
			console.log("initImg"), $(".avatar img").each(function() {
				var t = $(this);
				t.data("src") && (t.attr("src", t.data("src")), t.removeAttr("data-src"));
			});
		},
		I = function(t) {
			if (t.list) {
				{
					var s = t.list,
						r = {};
					s.length;
				}
				template.helper("mediaInit", function(t) {
					return t.id ? (r[t.id] = t, "") : "";
				}), template.helper("timeFormat", function(t) {
					return _(t.date_time);
				}), template.helper("id2singleURL", function(t) {
					return wx.url("/cgi-bin/singlesendpage?tofakeid=%s&t=message/send&action=index".sprintf(t.fakeid));
				}), s.each(function(t) {
					t.video_url && (t.type = 15), t.type = {
						5: 10,
						6: 10,
						11: 10,
						16: 15
					}[t.type] || t.type;
					var e = {
						1: 0,
						2: 11,
						3: 11,
						4: 1,
						10: 0,
						15: 11,
						42: 11,
						62: wx.acl.msg_acl.can_use_shortvideo ? 10 : 0
					}[t.type];
					e = "undefined" == typeof e ? 111 : e, t.btnsave = 2 == (2 & e), t.btndown = 1 == (1 & e);
				});
				var m = $(t.container),
					c = $(wx.T(u, {
						token: wx.data.t,
						list: s,
						uin: wx.data.uin,
						action: t.action
					}).trim());
				t.preAppend ? c.prependTo(m) : c.appendTo(m), y ? q() : (y = !0, console.log("before bind load"),
					$(window).on("load", function() {
						console.log("window onload"), q();
					})), $(".wxMsg", c).each(function() {
					var t = $(this),
						e = t.data("id"),
						n = r[e];
					if (n) {
						var i = n.type;
						i && C[i] && C[i](t, n);
					}
				}), e(m), n(m), i(m), o(m), a(m);
			}
		};
	return I;
});
define("message/message_cgi.js", ["common/wx/Tips.js", "common/wx/Cgi.js"], function(e, s, r) {
	"use strict";
	var t = {
			masssend: "/cgi-bin/masssend?t=ajax-response",
			massdel: "/cgi-bin/masssendpage?action=delete",
			star: "/cgi-bin/setstarmessage?t=ajax-setstarmessage",
			save: "/cgi-bin/savemsgtofile?t=ajax-response",
			sendMsg: "/cgi-bin/singlesend?t=ajax-response&f=json",
			getNewMsg: "/cgi-bin/singlesendpage?tofakeid=%s&f=json&action=sync&lastmsgfromfakeid=%s&lastmsgid=%s&createtime=%s",
			getNewMsgCount: "/cgi-bin/getnewmsgnum?f=json&t=ajax-getmsgnum&lastmsgid=",
			pageNav: "/cgi-bin/message?f=json&offset=%s&day=%s&keyword=%s&action=%s&frommsgid=%s&count=%s",
			searchMsgByKeyword: "/cgi-bin/getmessage?t=ajax-message&count=10&keyword="
		},
		n = e("common/wx/Tips.js"),
		o = e("common/wx/Cgi.js");
	r.exports = {
		masssend: function(e, s, r) {
			o.post({
				url: wx.url(t.masssend),
				data: e,
				error: function() {
					n.err("发送失败"), r && r();
				}
			}, function(e) {
				if (!e || !e.base_resp) return n.err("发送失败"), void(r && r(e));
				var t = e.base_resp.ret;
				return "0" == t ? (n.suc("发送成功"), void(s && s(e))) : (n.err("64004" == t ? "今天的群发数量已到，无法群发" : "67008" == t ? "消息中可能含有具备安全风险的链接，请检查" : "-8" == t ? "请输入验证码" : "14002" == t ? "没有“审核通过”的门店。确认有至少一个“审核通过”的门店后可进行卡券投放。" : "14003" == t ? "投放用户缺少测试权限，请先设置白名单" : "发送失败"),
					void(r && r(e)));
			});
		},
		massdel: function(e, s, r, a) {
			o.post({
				url: wx.url(t.massdel),
				data: {
					id: e,
					idx: a
				},
				error: function() {
					n.err("删除失败");
				}
			}, function(e) {
				return e && e.base_resp && 0 == e.base_resp.ret ? (n.suc("删除成功"), void(s && s(e))) : (n.err("删除失败"),
					void(r && r(e)));
			});
		},
		getNewMsg: function(e, s, r, n, a, i) {
			o.get({
				url: wx.url(t.getNewMsg.sprintf(e, s, r, n)),
				mask: !1,
				handlerTimeout: !0,
				error: i
			}, function(e) {
				e && e.base_resp && 0 == e.base_resp.ret && a && a(e.page_info.msg_items.msg_item);
			});
		},
		save: function(e, s, r, a) {
			"function" == typeof r && (a = r, r = ""), o.post({
				mask: !1,
				url: wx.url(t.save),
				data: {
					msgid: e,
					filename: s,
					digest: r
				},
				error: function() {
					n.err("保存素材失败");
				}
			}, function(e) {
				if (!e || !e.base_resp) return void n.err("保存素材失败");
				var s = e.base_resp.ret;
				"0" == s ? (n.suc("保存素材成功"), "function" == typeof a && a(e)) : n.err("保存素材失败");
			});
		},
		star: function(e, s, r) {
			o.post({
				mask: !1,
				url: wx.url(t.star),
				data: {
					msgid: e,
					value: 1 == s ? 0 : 1
				},
				error: function() {
					n.err(1 == s ? "取消收藏失败" : "收藏消息失败");
				}
			}, function(e) {
				if (!e || !e.base_resp) return void n.err(1 == s ? "取消收藏失败" : "收藏消息失败");
				var t = e.base_resp.ret;
				0 != t ? n.err(1 == s ? "取消收藏失败" : "收藏消息失败") : (n.suc(1 == s ? "取消收藏成功" : "收藏消息成功"), "function" == typeof r && r(e));
			});
		},
		sendMsg: function(e, s, r) {
			o.post({
				url: wx.url(t.sendMsg),
				data: e,
				error: function() {
					n.err("发送失败"), r && r();
				}
			}, function(e) {
				if (!e || !e.base_resp) return n.err("发送失败"), void(r && r(e));
				var t = e.base_resp.ret;
				return 0 == t ? (n.suc("回复成功"), void("function" == typeof s && s(e))) : (n.err(10703 == t ? "对方关闭了接收消息" : 10700 == t ? "不能发送，对方不是你的粉丝" : 10701 == t ? "该用户已被加入黑名单，无法向其发送消息" : 62752 == t ? "消息中可能含有具备安全风险的链接，请检查" : 10704 == t ? "该素材已被删除" : 10705 == t ? "该素材已被删除" : 10706 == t ? "由于该用户48小时未与你互动，你不能再主动发消息给他。直到用户下次主动发消息给你才可以对其进行回复。" : -8 == t ? "请输入验证码" : "发送失败"),
					void(r && r(e)));
			});
		},
		getNewMsgCount: function(e, s, r) {
			o.post({
				mask: !1,
				handlerTimeout: !0,
				url: wx.url(t.getNewMsgCount + e),
				error: r
			}, function(e) {
				"function" == typeof s && s(e);
			});
		},
		quickReply: function(e, s, r) {
			this.sendMsg({
				mask: !1,
				tofakeid: e.toFakeId,
				imgcode: e.imgcode,
				type: 1,
				content: e.content,
				out_trade_no: e.out_trade_no,
				quickreplyid: e.quickReplyId
			}, s, r);
		},
		pageNav: function(e, s, r) {
			var n = t.pageNav.sprintf((e.page - 1) * e.count, e.day || "", e.keyword || "", e.action || "", e.frommsgid || "", e.count || "");
			o.post({
				dataType: "json",
				url: wx.url(n),
				mask: !1,
				data: {},
				error: r
			}, function(e) {
				e && e.base_resp && 0 == e.base_resp.ret && "function" == typeof s && s(e.msg_items.msg_item);
			});
		},
		searchMsgByKeyword: function(e, s, r) {
			o.post({
				dataType: "html",
				mask: !1,
				url: wx.url(url.searchMsgByKeyword + e),
				error: function() {
					n.err("系统发生异常，请刷新页面重试"), r && r({});
				}
			}, function(e) {
				"function" == typeof s && s($.parseJSON(e));
			});
		}
	};
});
define("biz_web/ui/dropdown.js", ["biz_web/widget/dropdown.css", "tpl/biz_web/ui/dropdown.html.js"], function(e, t, n) {
	try {
		var r = +(new Date);
		"use strict", e("biz_web/widget/dropdown.css");
		var i = e("tpl/biz_web/ui/dropdown.html.js"),
			s = {
				label: "请选择",
				data: [],
				callback: $.noop,
				render: $.noop,
				delay: 500,
				disabled: !1,
				search: !1
			},
			o = "dropdown_menu";

		function u(e) {
			e.render && typeof e.render && (e.renderHtml = "", $.each(e.data, function(t, n) {
				e.renderHtml += e.render(n);
			})), e = $.extend(!0, {}, s, e);
			var t = this;
			t.container = $(e.container), t.container.addClass(e.search ? o + " search" : o), this.isDisabled = e.disabled, e.disabled && t.container.addClass("disabled"), t.opt = e, t.container.html(template.compile(i)(e)).find(".jsDropdownList").hide(), t.bt = t.container.find(".jsDropdownBt"), t.dropdown = t.container.find(".jsDropdownList"), $.each(e.data, function(e, n) {
				$.data(t.dropdown.find(".jsDropdownItem")[e], "value", n.value), $.data(t.dropdown.find(".jsDropdownItem")[e], "name", n.name), $.data(t.dropdown.find(".jsDropdownItem")[e], "item", n);
			}), typeof e.index != "undefined" && e.data.length !== 0 && (t.bt.find(".jsBtLabel").html(e.data[e.index].name || e.label), t.value = e.data[e.index].value), t.bt.on("click", function() {
				return a(), e.disabled || (t.dropdown.show(), t.container.addClass("open")), !1;
			}), e.search && t.bt.find(".jsBtLabel").on("keyup", function(e) {
				if (t.disabled) return;
				var n = $(this);
				if (e.keyCode == 13) t.value ? (n.html(n.data("name")).removeClass("error"), t.dropdown.hide()) : n.find("div").remove();
				else {
					var r = n.html().trim(),
						i = [];
					t.value = null, t.dropdown.show().find(".jsDropdownItem").each(function() {
						var e = $(this);
						e.hasClass("js_empty") || (e.data("name").indexOf(r) > -1 ? (e.parent().show(), i.push({
							name: e.data("name"),
							value: e.data("value")
						})) : e.parent().hide());
					}), i.length == 0 ? t.dropdown.find(".js_empty").length == 0 && t.dropdown.append('<li class="jsDropdownItem js_empty empty">未找到"' + r + '"</li>') : (t.dropdown.find(".js_empty").remove(), i.length == 1 && (i[0].name == r ? n.removeClass("error") : n.data("name", i[0].name), t.value = i[0].value));
				}
			}).on("blur", function() {
				if (t.disabled) return;
				var n = $(this);
				t.value ? $(this).html() != $(this).data("name") && (n.addClass("error"), t.value = null) : n.html() != "" ? n.addClass("error") : (n.html(e.label).removeClass("error"), t.value = null);
			}).on("focus", function() {
				if (t.disabled) return;
				var n = $(this),
					r = $(this).html().trim();
				r == e.label && n.html("").removeClass("error"), r == "" && n.removeClass("error"), t.dropdown.show(), t.container.addClass("open");
			}), $(document).on("click", a), t.dropdown.on("click", ".jsDropdownItem", function(n) {
				var r = $(this).data("value"),
					i = $(this).data("name"),
					s = $(this).data("index");
				if (!t.value || t.value && t.value != r) {
					t.value = r, t.name = i;
					if (e.callback && typeof e.callback == "function") {
						var o = e.callback(r, i, s, $(this).data("item")) || i;
						e.search ? t.bt.find(".jsBtLabel").html(o).data("name", o).removeClass("error") : t.bt.find(".jsBtLabel").html(o);
					}
				}
				t.dropdown.hide();
			});
		}

		function a() {
			$(".jsDropdownList").hide(), $(".dropdown_menu").each(function() {
				!$(this).hasClass("dropdown_checkbox") && $(this).removeClass("open");
			});
		}
		return u.prototype = {
			selected: function(e, t) {
				var n = this;
				if (typeof e == "number") {
					if (this.opt.data && this.opt.data[e]) {
						var r = this.opt.data[e].name,
							i = this.opt.data[e].value;
						t != 0 && this.dropdown.find(".jsDropdownItem:eq(" + e + ")").trigger("click", i), this.bt.find(".jsBtLabel").html(r);
					}
				} else $.each(this.opt.data, function(r, s) {
					if (e == s.value || e == s.name) return t != 0 && n.dropdown.find(".jsDropdownItem:eq(" + r + ")").trigger("click", i), n.bt.find(".jsBtLabel").html(s.name), !1;
				});
				return this;
			},
			reset: function() {
				return this.bt.find(".jsBtLabel").html(this.opt.label), this.value = null, this;
			},
			hidegreater: function(e) {
				var t = this;
				return typeof e == "number" && t.opt.data && t.opt.data[e] && (t.dropdown.find(".jsDropdownItem").show(), t.dropdown.find(".jsDropdownItem:gt(" + e + ")").hide()), this;
			},
			destroy: function() {
				return this.isDisabled && this.container.removeClass("disabled"), this.container.children().remove(), this.container.off(), this;
			},
			enable: function() {
				return this.opt.disabled = !1, this.container.removeClass("disabled"), this.opt.search && this.bt.find(".jsBtLabel").attr("contenteditable", !0), this;
			},
			disable: function() {
				return this.opt.disabled = !0, this.container.addClass("disabled"), this.opt.search && this.bt.find(".jsBtLabel").attr("contenteditable", !1), this;
			}
		}, u;
	} catch (f) {
		wx.jslog({
			src: "biz_web/ui/dropdown.js"
		}, f);
	}
});
define("common/wx/pagebar.js", ["widget/pagination.css", "tpl/pagebar.html.js", "common/qq/Class.js", "common/wx/Tips.js"], function(t, e) {
	"use strict";
	var i, n, s, a = (t("widget/pagination.css"), t("tpl/pagebar.html.js")),
		r = t("common/qq/Class.js"),
		h = t("common/wx/Tips.js");
	s = template.compile(a), i = e, n = {
		first: "首页",
		last: "末页",
		prev: "上页",
		next: "下页",
		startPage: 1,
		initShowPage: 1,
		perPage: 10,
		startRange: 1,
		midRange: 3,
		endRange: 1,
		totalItemsNum: 0,
		container: "",
		callback: null,
		isNavHide: !1,
		isSimple: !0
	};
	var o = function(t, e, i) {
			var n;
			return n = t + (e - 1), n = n > i ? i : n;
		},
		g = function(t, e, i) {
			var n;
			return n = i % 2 === 0 ? e - (i / 2 - 1) : e - (i - 1) / 2, n = t > n ? t : n;
		},
		u = function(t, e, i) {
			var n;
			return n = e % 2 === 0 ? parseInt(t) + e / 2 : parseInt(t) + (e - 1) / 2, n = n > i ? i : n;
		},
		c = function(t, e, i) {
			var n;
			return n = e - (i - 1), n = t > n ? t : n;
		},
		l = function(t, e) {
			if (e[t] && isNaN(e[t])) throw new Error("Invalid arguments: " + t + " should be a number");
		},
		p = function(t) {
			if (l("perPage", t), l("totalItemsNum", t), l("startPage", t), l("startRange", t), l("midRange", t),
				l("endRange", t), l("initShowPage", t), void 0 !== t.callback && null !== t.callback && !$.isFunction(t.callback)) throw new Error("Invalid arguments: callback should be a function");
		},
		d = function(t, e, i) {
			var n = t.container.find(".page_" + i);
			if ("string" == typeof e) {
				var s = $(e);
				0 !== s.length && (n = s);
			} else {
				if (e !== !1) throw new Error("Invalid Paramter: '" + i + "' should be a string or false");
				n.hide();
			}
			return n;
		},
		P = r.declare({
			init: function(t) {
				if (t.totalItemsNum) {
					var e;
					if (p(t), e = $.extend(!0, {}, n, t), this._init(e), e.initShowPage < e.startPage) throw new Error("Invalid arguments: initShowPage should be larger than startPage");
					if (e.initShowPage > e.endPage) throw new Error("Invalid arguments: initShowPage should be smaller than endPage");
					this.paginate();
				}
			},
			_init: function(t) {
				this.currentPage = t.initShowPage, this._isNextButtonShow = !0, this._isPrevButtonShow = !0,
					this.uid = "wxPagebar_" + +new Date, this.initEventCenter(), this.optionsForTemplate = {},
					$.extend(this, t), this.container = $(t.container), this.optionsForTemplate.isSimple = t.isSimple,
					this.optionsForTemplate.firstButtonText = 0 === $(t.first).length ? t.first : n.first, this.optionsForTemplate.lastButtonText = 0 === $(t.last).length ? t.last : n.last,
					this.optionsForTemplate.nextButtonText = 0 === $(t.next).length ? t.next : n.next, this.optionsForTemplate.prevButtonText = 0 === $(t.prev).length ? t.prev : n.prev,
					this.optionsForTemplate.isNavHide = t.isNavHide, this.generatePages(parseInt(this.totalItemsNum)),
					this.gapForStartRange = this.container.find(".gap_prev"), this.gapForEndRange = this.container.find(".gap_next"),
					this.firstButton = d(this, t.first, "first"), this.lastButton = d(this, t.last, "last"), this.prevButton = d(this, t.prev, "prev"),
					this.nextButton = d(this, t.next, "next"), this.bindEvent();
			},
			initEventCenter: function() {
				this.eventCenter = {
					eventList: [],
					bind: function(t, e) {
						this.eventList[t] || (this.eventList[t] = []), this.eventList[t].push(e);
					},
					trigger: function(t) {
						var e, i;
						this.eventList[t] || (this.eventList[t] = []), e = this.eventList[t];
						for (var n = 0; n < e.length; n++)
							if (i = Array.prototype.slice.call(arguments, 1), e[n].apply(this, i) === !1) return !1;
					},
					unbind: function(t, e) {
						if (!this.eventList) throw new Error("The eventList was undefined");
						if (!this.eventList[t]) throw new Error("The event type " + t + " was not found");
						if (void 0 === e) this.eventList[t] = [];
						else
							for (var i = this.eventList[t], n = i.length, s = 0; n > s; s++)
								if (i[s] === e) {
									i.splice(s, 1);
									break;
								}
					}
				};
			},
			generatePages: function(t) {
				var e, i, n, a, r, h;
				for (this.pageNum = Math.ceil(t / this.perPage), this.endPage = this.startPage + this.pageNum - 1,
					this.gapForStartRange = null, this.gapForEndRange = null, this.optionsForTemplate.startRange = [],
					this.optionsForTemplate.midRange = [], this.optionsForTemplate.endRange = [], i = o(this.startPage, this.startRange, this.endPage),
					n = g(this.startPage, this.currentPage, this.midRange), a = u(this.currentPage, this.midRange, this.endPage),
					r = c(this.startPage, this.endPage, this.endRange), i >= r && (r = i + 1), e = this.startPage; i >= e; e += 1) this.optionsForTemplate.startRange.push(e);
				for (var l = 0, e = n; l < this.midRange; l += 1, e += 1) this.optionsForTemplate.midRange.push(e);
				for (e = r; e <= this.endPage; e += 1) this.optionsForTemplate.endRange.push(e);
				this.optionsForTemplate.endPage = this.endPage, this.optionsForTemplate.initShowPage = this.initShowPage,
					h = s(this.optionsForTemplate), this.container.html(h), 1 == this.pageNum ? this.container.hide() : this.container.show(),
					this.pages = this.container.find(".page_nav"), this.midPages = this.container.find(".js_mid"),
					this.labels = this.container.find(".page_num label"), this.container.find(".pagination").attr("id", this.uid);
			},
			paginate: function() {
				var t, e, i, n, s, a, r, h, l, p;
				if (this.isSimple === !0)
					for (var d = 0, P = this.labels.length; P > d; d++) d % 2 === 0 && $(this.labels[d]).html(parseInt(this.currentPage));
				else {
					e = o(this.startPage, this.startRange, this.endPage), a = g(this.startPage, this.currentPage, this.midRange),
						r = u(this.currentPage, this.midRange, this.endPage), h = c(this.startPage, this.endPage, this.endRange),
						e >= h && (h = e + 1), e >= a && (a = e + 1), r >= h && (r = h - 1), this.pages.show(), this.pages.removeClass("current"),
						p = parseInt(this.midPages.length / this.midRange);
					for (var d = 0, P = p; P > d; d++) {
						for (s = 0, t = a; r >= t; t += 1) n = this.midRange * d + (t - a), l = $(this.midPages[n]), l.html(t), s += 1,
							t == this.currentPage && l.addClass("current");
						for (n = this.midRange * d + s; s < this.midRange; s += 1) l = $(this.midPages[n]), l.hide(), l.removeClass("current"),
							n += 1;
					}
					for (var d = 0, P = this.pages.length; P >= d; d++) i = $(this.pages[d]), t = parseInt(i.html()),
						t === parseInt(this.currentPage) && i.addClass("current");
					if (a > e + 1 ? this.gapForStartRange.show() : this.gapForStartRange.hide(), h > r + 1 ? this.gapForEndRange.show() : this.gapForEndRange.hide(),
						this.isNavHide) {
						for (var d = this.startPage; d <= this.endPage; d += 1) this.pages.hide();
						this.gapForStartRange.hide(), this.gapForEndRange.hide();
					}
				}
				this.checkButtonShown();
			},
			destroy: function() {
				this.container.off("click", "#" + this.uid + " a.page_nav"), this.container.off("click", "#" + this.uid + " a.page_go"),
					this.container.off("keydown", "#" + this.uid + " .goto_area input"), this.nextButton.off("click"),
					this.prevButton.off("click"), this.firstButton.off("click"), this.lastButton.off("click");
			},
			bindEvent: function() {
				this.container.on("click", "#" + this.uid + " a.page_nav", this.proxy(function(t) {
					var e = $(t.target);
					return e.hasClass("current") ? !1 : (this.clickPage(parseInt(e.html())), !1);
				}, this)), this.nextButton.on("click", this.proxy(function(t) {
					$(t.target);
					return this.nextPage(), !1;
				}, this)), this.prevButton.on("click", this.proxy(function(t) {
					$(t.target);
					return this.prevPage(), !1;
				}, this)), this.firstButton.on("click", this.proxy(function(t) {
					$(t.target);
					return this.goFirstPage(), !1;
				}, this)), this.lastButton.on("click", this.proxy(function(t) {
					$(t.target);
					return this.goLastPage(), !1;
				}, this)), this.container.on("click", "#" + this.uid + " a.page_go", this.proxy(function(t) {
					var e = $(t.target).prev();
					return this.goPage(e.val()), !1;
				}, this)), this.container.on("keydown", "#" + this.uid + " .goto_area input", this.proxy(function(t) {
					wx.isHotkey(t, "enter") && this.container.find("a.page_go").click();
				}, this));
			},
			on: function(t, e) {
				this.eventCenter.bind(t, this.proxy(e, this));
			},
			callbackFunc: function(t) {
				var e = {
					currentPage: this.currentPage,
					perPage: this.perPage,
					count: this.pageNum
				};
				return $.isFunction(this.callback) && this.callback(e) === !1 ? !1 : this.eventCenter.trigger(t, e) === !1 ? !1 : void this.paginate();
			},
			proxy: function(t, e) {
				return function() {
					var i = Array.prototype.slice.call(arguments, 0);
					return t.apply(e, i);
				};
			},
			nextPage: function() {
				this.currentPage !== this.endPage && (this.currentPage++, this.callbackFunc("next") === !1 && this.currentPage--);
			},
			prevPage: function() {
				this.currentPage !== this.startPage && (this.currentPage--, this.callbackFunc("prev") === !1 && this.currentPage++);
			},
			goFirstPage: function() {
				var t = this.currentPage;
				this.currentPage = this.startPage, this.callbackFunc("goFirst") === !1 && (this.currentPage = t);
			},
			goLastPage: function() {
				var t = this.currentPage;
				this.currentPage = this.endPage, this.callbackFunc("goLast") === !1 && (this.currentPage = t);
			},
			checkButtonShown: function() {
				+this.currentPage === +this.startPage ? this.hidePrevButton() : this.showPrevButton(), +this.currentPage === +this.endPage ? this.hideNextButton() : this.showNextButton();
			},
			goPage: function(t) {
				var e = this.currentPage;
				return t === this.currentPage ? !1 : isNaN(t) ? (h.err("请输入正确的页码"), !1) : "" === t ? !1 : t < this.startPage ? (h.err("请输入正确的页码"), !1) : t > this.endPage ? (h.err("请输入正确的页码"), !1) : (this.currentPage = t, void(this.callbackFunc("go") === !1 && (this.currentPage = e)));
			},
			clickPage: function(t) {
				var e = this.currentPage;
				isNaN(t) && (t = this.startPage), this.currentPage = t < this.startPage ? this.startPage : t > this.endPage ? this.endPage : t,
					this.callbackFunc("click") === !1 && (this.currentPage = e);
			},
			showNextButton: function() {
				this.nextButton && this._isNextButtonShow === !1 && (this.nextButton.show(), this._isNextButtonShow = !0);
			},
			showPrevButton: function() {
				this.prevButton && this._isPrevButtonShow === !1 && (this.prevButton.show(), this._isPrevButtonShow = !0);
			},
			hideNextButton: function() {
				this.nextButton && this._isNextButtonShow === !0 && (this.nextButton.hide(), this._isNextButtonShow = !1);
			},
			hidePrevButton: function() {
				this.prevButton && this._isPrevButtonShow === !0 && (this.prevButton.hide(), this._isPrevButtonShow = !1);
			}
		});
	return e = P;
});
define("common/qq/mask.js", ["biz_web/lib/spin.js"], function(e, t, n) {
	try {
		var r = +(new Date);
		"use strict", e("biz_web/lib/spin.js");
		var i = 0,
			s = '<div class="mask"></div>';

		function o(e) {
			if (this.mask) this.mask.show();
			else {
				var t = "body";
				e && !!e.parent && (t = $(e.parent)), this.mask = $(s).appendTo(t), this.mask.id = "wxMask_" + ++i, this.mask.spin("flower");
			}
			if (e) {
				if (e.spin === !1) return this;
				this.mask.spin(e.spin || "flower");
			}
			return this;
		}
		o.prototype = {
			show: function() {
				this.mask.show();
			},
			hide: function() {
				this.mask.hide();
			},
			remove: function() {
				this.mask.remove();
			}
		}, t.show = function(e) {
			return new o(e);
		}, t.hide = function() {
			$(".mask").hide();
		}, t.remove = function() {
			$(".mask").remove();
		};
	} catch (u) {
		wx.jslog({
			src: "common/qq/mask.js"
		}, u);
	}
});
define("common/wx/top.js", ["tpl/top.html.js"], function(t, e, a) {
	"use strict";

	function i(t, e, a) {
		return this.dom = $(t), this.dom.addClass("title_tab"), e && "string" == typeof e && (e = [{
			name: "",
			url: "javascript:;",
			className: "selected"
		}]), $.each(e, function(t, e) {
			e.url = e.url && [e.url, wx.data.param].join("") || "javascript:;";
		}), this.dom.html(template.compile(n)({
			data: e
		})), a && a.render && "function" == typeof a.render ? $.each(this.dom.find("li"), function(t, i) {
			a.render.apply($(i), [e[t], a && a.data]);
		}) : this.dom.html(template.compile(n)({
			data: e
		})), this.dom.on("click", ".top_item", function() {
			$(this).addClass("selected").siblings().removeClass("selected");
		}), this;
	}
	var n = t("tpl/top.html.js"),
		s = wx.acl;
	i.prototype.selected = function(t) {
		this.dom.find(".js_top").removeClass("selected"), "number" == typeof t ? this.dom.find(".js_top:eq(" + t + ")").addClass("selected") : this.dom.find(".js_top[data-id=" + t + "]").addClass("selected");
	}, i.DATA = {
		setting: [{
			id: "info",
			name: "帐号详情",
			url: "/cgi-bin/settingpage?t=setting/index&action=index"
		}, {
			id: "function",
			name: "功能设置",
			url: "/cgi-bin/settingpage?t=setting/function&action=function"
		}],
		mass: [{
			id: "send",
			name: "新建群发消息",
			url: "/cgi-bin/masssendpage?t=mass/send"
		}, {
			id: "list",
			name: "已发送",
			url: "/cgi-bin/masssendpage?t=mass/list&action=history&begin=0&count=10"
		}],
		message: [{
			id: "total",
			name: "全部消息",
			url: "/cgi-bin/message?t=message/list&count=20&day=7"
		},  {
			id: "search",
			name: "搜索结果"
		}],
		media: [{
			id: "media11",
			name: "商品消息",
			acl: s && s.msg_acl && s.msg_acl.can_commodity_app_msg,
			url: "/cgi-bin/appmsg?begin=0&count=10&t=media/appmsg_list&type=11&action=list"
		}, {
			id: "media10",
			name: "图文消息",
			acl: s && s.msg_acl && s.msg_acl.can_app_msg,
			url: "/cgi-bin/appmsg?begin=0&count=10&t=media/appmsg_list2&type=10&action=list_card"
		}, {
			id: "media2",
			name: "图片库",
			acl: s && s.msg_acl && s.msg_acl.can_image_msg,
			url: "/cgi-bin/filepage?type=2&begin=0&count=12&t=media/img_list"
		}, {
			id: "media3",
			name: "语音",
			acl: s && s.msg_acl && s.msg_acl.can_voice_msg,
			url: "/cgi-bin/filepage?type=3&begin=0&count=20&t=media/list"
		}, {
			id: "media15",
			name: "视频",
			acl: s && s.msg_acl && s.msg_acl.can_video_msg,
			url: "/cgi-bin/appmsg?begin=0&count=10&t=media/appmsg_list&type=15&action=list"
		}],
		business: [{
			id: "overview",
			name: "数据概览",
			url: "/merchant/business?t=business/overview&action=overview"
		}, {
			id: "order",
			name: "订单流水",
			url: "/merchant/business?t=business/order&action=order"
		}, {
			id: "info",
			name: "商户信息",
			url: "/merchant/business?t=business/info&action=info"
		}, {
			id: "test",
			name: "支付测试",
			url: "/merchant/business?t=business/whitelist&action=whitelist"
		}, {
			id: "rights",
			name: "维权仲裁",
			url: "/merchant/shop_rights?t=business/rights_list&action=batchgetpayfeedback"
		}, {
			id: "course",
			name: "使用教程",
			url: "/merchant/business?t=business/course&action=course"
		}],
		user: [{
			id: "useradmin",
			name: "已关注",
			url: "/cgi-bin/contactmanage?t=user/index&pagesize=10&pageidx=0&type=0&groupid=0"
		}],
		statistics: {
			user: [{
				id: "summary",
				name: "用户增长",
				url: "/misc/pluginloginpage?action=stat_user_summary&pluginid=luopan&t=statistics/index"
			}, {
				id: "attr",
				name: "用户属性",
				url: "/misc/pluginloginpage?action=stat_user_attr&pluginid=luopan&t=statistics/index"
			}],
			article: [{
				id: "detail",
				name: "图文群发",
				url: "/misc/pluginloginpage?action=stat_article_detail&pluginid=luopan&t=statistics/index"
			}, {
				id: "analyse",
				name: "图文统计",
				url: "/misc/pluginloginpage?action=stat_article_analyse&pluginid=luopan&t=statistics/index"
			}],
			message: [{
				id: "message",
				name: "消息分析",
				url: "/misc/pluginloginpage?action=stat_message&pluginid=luopan&t=statistics/index"
			}, {
				id: "key",
				name: "消息关键词",
				url: "/misc/pluginloginpage?action=ctr_keyword&pluginid=luopan&t=statistics/index"
			}],
			"interface": [{
				id: "interface",
				name: "接口分析",
				url: "/misc/pluginloginpage?action=stat_interface&pluginid=luopan&t=statistics/index"
			}]
		},
		notification: [{
			id: "notification",
			name: "通知中心",
			url: "/cgi-bin/frame?t=notification/index_frame"
		}],
		templateMessage: [{
			id: "my_template",
			name: "我的模板",
			url: "/advanced/tmplmsg?action=list&t=tmplmsg/list"
		}, {
			id: "template_message",
			name: "模板库",
			url: "/advanced/tmplmsg?action=tmpl_store&t=tmplmsg/store"
		}],
		assistant: [{
			id: "mphelper",
			name: "公众号助手",
			url: "/misc/assistant?t=setting/mphelper&action=mphelper"
		}, {
			id: "warning",
			name: "接口告警",
			url: "/misc/assistant?t=setting/warning&action=warning"
		}],
		shop: [{
			id: "shopoverview",
			name: "小店概况",
			url: "/merchant/merchantstat?t=shop/overview&action=getoverview"
		}, {
			id: "addGoods",
			name: "添加商品",
			url: "/merchant/goods?type=11&t=shop/precreate",
			target: "_blank"
		}, {
			id: "goodsManagement",
			name: "商品管理",
			url: "/merchant/goodsgroup?t=shop/category&type=1"
		}, {
			id: "shelfManagement",
			name: "货架管理",
			url: "/merchant/shelf?status=0&action=get_shelflist&t=shop/myshelf&offset=0&count=5"
		}, {
			id: "orderManagement",
			name: "订单管理",
			url: "/merchant/productorder?action=getlist&t=shop/order_list&last_days=30&count=10&offset=0"
		}, {
			id: "deliverylist",
			name: "运费模板管理",
			url: "/merchant/delivery?action=getlist&t=shop/delivery_list"
		}, {
			id: "images",
			name: "图片库",
			url: "/merchant/goodsimage?action=getimage&t=shop/shop_img&count=20&offset=0"
		}],
		adClient: [{
			id: "adclientreport",
			name: "报表统计",
			url: "/merchant/ad_client_report?t=ad_system/client_report&action=list"
		}, {
			id: "adclientmanage",
			name: "广告管理",
			url: "/merchant/advert?t=ad_system/promotion_list&action=get_advert_count"
		}, {
			id: "materialmanage",
			name: "推广页管理",
			url: "/merchant/ad_material?t=material/list&action=get_material_list"
		}, {
			id: "adclientpay",
			name: "财务管理",
			url: "/cgi-bin/frame?nav=10026&t=ad_system/host_frame"
		}, {
			id: "adservice",
			name: "广告服务商",
			acl: s && s.ad_system && s.ad_system.can_use_sp,
			url: "/cgi-bin/frame?nav=10026&t=ad_system/client_service_frame"
		}],
		adHost: [{
			id: "adhostreport",
			name: "报表统计",
			url: "/merchant/ad_host_report?t=ad_system/host_report"
		}, {
			id: "adhostmanage",
			name: "流量管理",
			url: "/merchant/ad_host_manage?t=ad_system/host_manage"
		}, {
			id: "adhostpay",
			name: "财务管理",
			url: "/merchant/ad_host_pay?action=ad_host_pay&t=ad_system/host_pay"
		}],
		advanced: [{
			id: "dev",
			name: "配置项",
			url: "/advanced/advanced?action=dev&t=advanced/dev"
		}, {
			id: "group-alert",
			name: "接口报警",
			url: "/advanced/advanced?action=alarm&t=advanced/alarm"
		}],
		cardticket: [{
			id: "cardmgr",
			name: "卡券管理",
			url: "/merchant/electroniccardmgr?action=batch&t=cardticket/batch_card"
		}, {
			id: "permission",
			name: "卡券核销",
			url: "/merchant/carduse?action=listchecker&t=cardticket/permission"
		}, {
			id: "carduse",
			name: "核销记录",
			url: "/merchant/carduserecord?action=listrecord&t=cardticket/carduse_record"
		}, {
			id: "cardreport",
			name: "数据报表",
			url: "/merchant/ecardreport?action=overviewpage&t=cardticket/overviewpage"
		}],
		infringement: [{
			id: "infringement",
			name: "我要投诉",
			url: "/acct/infringement?action=getmanual&t=infringement/manual&type=1"
		}, {
			id: "antiinfringement",
			name: "我要申诉",
			url: "/acct/infringement?action=getmanual&t=infringement/manual&type=2"
		}, {
			id: "list",
			name: "提交记录",
			url: "/acct/infringement?action=getlist&t=infringement/ingringement_list&type=1"
		}],
		scan: [{
			id: "overview",
			name: "数据概况",
			url: "/merchant/scandataoverview?action=keydata"
		}, {
			id: "product_list",
			name: "商品管理",
			url: "/merchant/scanproductlist?action=list&page=1&status=1"
		}, {
			id: "barcode_list",
			name: "资质管理",
			url: "/merchant/scanqualification?action=getbusinesscategorylist&offset=0&limit=16"
		}, {
			id: "whitelist",
			name: "测试白名单",
			url: "/merchant/scanwhitelist?t=home/index&action=list"
		}],
		rumor: [{
			id: "list",
			name: "谣言池",
			url: "/misc/rumor?action=rumorlist&t=rumor/list"
		}, {
			id: "result",
			name: "辟谣结果",
			url: "/misc/rumor?action=summarylist&t=rumor/result"
		}],
		reward: [{
			id: "list",
			name: "数据概况",
			url: "/merchant/rewardstat?action=getoverview&t=reward/overview"
		}, {
			id: "invite",
			name: "邀请",
			url: "/merchant/invitation?action=info&t=reward/invitation"
		}, {
			id: "setting",
			name: "赞赏设置",
			url: "/merchant/reward?action=rewardsetting"
		}]
	}, s && s.merchant_acl && s.merchant_acl.can_use_account_manage && i.DATA.adClient.push({
		id: "adclientaccountmanage",
		name: "账户管理",
		acl: s && s.ad_system && s.ad_system.can_use_account_manage,
		url: "/cgi-bin/frame?nav=10026&t=ad_system/account_frame"
	}), s && s.merchant_acl && s.merchant_acl.can_use_pay_tmpl && i.DATA.templateMessage.push({
		id: "template_pay_list",
		name: "支付模板消息",
		url: "/advanced/tmplmsg?action=pay_list&t=tmplmsg/payment"
	}), i.RENDER = {
		setting: function(t, e) {
			"meeting" == t.id && 15 != e.role && this.remove();
		},
		message: function(t, e) {
			"search" != t.id || e && "search" == e.action || this.remove();
		},
		assistant: function(t, e) {
			"warning" != t.id || e && 0 != e.have_service_package || this.remove();
		},
		reward: function(t, e) {
			"invite" != t.id || e && 0 != e.invite_authority || this.remove();
		}
	}, a.exports = i;
});
define("message/list.js", ["common/wx/top.js", "common/qq/mask.js", "common/wx/Tips.js", "common/wx/pagebar.js", "biz_web/ui/dropdown.js", "message/message_cgi.js", "message/renderList.js", "common/wx/searchInput.js"], function(e) {
	"use strict";
	var s = wx.cgiData,
		t = s.latest_msg_id,
		n = s.action,
		i = s.day,
		a = s.filterivrmsg || "1",
		o = e("common/wx/top.js"),
		r = (e("common/qq/mask.js"),
			e("common/wx/Tips.js")),
		c = e("common/wx/pagebar.js"),
		l = e("biz_web/ui/dropdown.js"),
		m = e("message/message_cgi.js");
	! function() {
		function e(e, s) {
			var t = -1;
			return $.each(e, function(e, n) {
				return n.value == s ? (t = e, !1) : void 0;
			}), t;
		}
		var t = "#topTab",
			r = new o(t, o.DATA.message, {
				render: o.RENDER.message,
				data: {
					action: n
				}
			});
		$.each($(t).find("a"), function() {
			$(this).attr("href", $(this).attr("href") + "&filterivrmsg=" + a);
		});
		var c, m = 0,
			u = "",
			g = {
				7: ["全部消息", 0, "文字消息保存5天，其它类型消息只保存3天"],
				0: ["今天的消息", 1],
				1: ["昨天的消息", 2],
				2: ["前天的消息", 3],
				3: ["更早", 4]
			},
			d = [{
				name: "最近五天",
				value: "7"
			}, {
				name: "今天",
				value: "0"
			}, {
				name: "昨天",
				value: "1"
			}, {
				name: "前天",
				value: "2"
			}, {
				name: "更早",
				value: "3"
			}],
			f = "#page_title",
			h = "#dayselect",
			w = "/cgi-bin/message?t=message/list&count=20&day=";
		if ("search" != n && "star" != n) {
			new l({
				container: h,
				label: "最近五天",
				data: d,
				callback: function(e) {
					location.href = wx.url(w + e + "&filterivrmsg=" + a);
				}
			}).selected(e(d, i), !1);
		}
		if ("search" == n) u = "搜索结果", m = 2, $("#searchMore").show();
		else if ("star" == n) u = "星标消息", m = 1,
			c = c || "%s条";
		else {
			var p = g[i];
			u = p[0], m = p[1], c = p[2], c = c || "%s条", "0" == a && $(f).siblings("label").removeClass("selected"),
				$(f).siblings("label").show();
		}
		$(f).html(u + (c ? "<span>(%s)</span>".sprintf(c.sprintf(s.total_count)) : "")), console.log("selected_menu=" + m),
			r.selected(m);
	}(),
	function() {
		function e(e) {
			return 6 * i > e && (e += i), e;
		}
		var s = {},
			n = function(e, t) {
				e = e || s.title || "", t = t || s.time || 500, s.timer && clearTimeout(s.timer), s.timer = t, document.title = s.title = e.substring(1, e.length) + e.substring(0, 1),
					s.timer = setTimeout(n, t);
			},
			i = 1e4,
			a = i,
			o = 0,
			r = function() {
				t && m.getNewMsgCount(t, function(s) {
					if (s && s.base_resp && 0 == s.base_resp.ret) {
						var t = s.newTotalMsgCount;
						t > 0 ? (n("收到%s条新消息...".sprintf(t)), $("#newMsgTip").fadeIn(), $("#newMsgNum").html(t),
							a = t == o ? e(a) : i, o = t) : (a = e(a), $("#newMsgTip").hide()), setTimeout(r, a);
					}
				}, function(s) {
					s && "-20000" == s.ret || (a = e(a), setTimeout(r, a));
				});
			};
		setTimeout(r, a);
	}(),
	function(s) {
		var t = s.list,
			i = null,
			a = e("message/renderList.js");
		if (i = s.frommsgid || t[0] && t[0].id, "search" != n) {
			{
				var o = s.offset / s.count + 1;
				new c({
					container: ".pageNavigator",
					perPage: s.count,
					first: !1,
					last: !1,
					isSimple: !0,
					initShowPage: o,
					totalItemsNum: s.total_count,
					callback: function(e) {
						var t = e.currentPage;
						if (t != o) return t--, location.href = wx.url("/cgi-bin/message?t=message/list&action=%s&keyword=%s&frommsgid=%s&offset=%s&count=%s&day=%s&filterivrmsg=%s".sprintf(s.action, encodeURIComponent(s.keyword), i, t * s.count, s.count, s.day, s.filterivrmsg)), !1;
					}
				});
			}
			$("#page_title").siblings("label").on("click", function() {
				var e = $(this),
					t = e.hasClass("selected") ? "0" : "1",
					n = wx.url("/cgi-bin/message?t=message/list&action=%s&keyword=%s&count=%s&day=%s&filterivrmsg=%s".sprintf(s.action, encodeURIComponent(s.keyword), s.count, s.day, t));
				return e.toggleClass("selected"), location.href = n, !1;
			});
		} else {
			var r = t.length,
				l = i;
			r < s.count && $("#searchMore").hide(), $("#searchMore").click(function() {
				$(this).addClass("show_loading"), m.pageNav({
					action: "search",
					count: s.count,
					keyword: s.keyword,
					frommsgid: l
				}, function(e) {
					a({
						container: "#listContainer",
						list: e,
						action: n
					}), $("#searchMore").removeClass("show_loading"), e.length < s.count ? $("#searchMore").hide() : l = e[e.length - 1].id;
				});
			});
		}
		$("#listContainer").html(""), a({
			container: "#listContainer",
			list: t,
			action: n
		});
	}(s),
	function() {
		var t = e("common/wx/searchInput.js");
		new t({
			id: "#searchBar",
			value: s.keyword.html(!1).html(!1),
			placeholder: "消息内容",
			click: function(e) {
				e.length > 0 ? location.href = wx.url("/cgi-bin/message?t=message/list&action=search&keyword=%s&count=%s".sprintf(encodeURIComponent(e), s.count)) : (r.err("请输入搜索关键词"),
					$("#searchBar").find(".searchInput").focus());
			}
		}), s.keyword && $(".pageNavigator").hide();
	}();
});