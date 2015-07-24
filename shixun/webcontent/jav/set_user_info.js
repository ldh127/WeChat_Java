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
define("tpl/biz_web/ui/checkbox.html.js", [], function(e, t, n) {
	return '<label for="_checkbox_{index}" class="frm_{type}_label">\n	<i class="icon_{type}"></i>\n	<input type="{type}" class="frm_{type}" name="{name}" id="_checkbox_{index}">\n	<span class="lbl_content">{label}</span>\n</label>';
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
define("tpl/top.html.js", [], function(e, t, n) {
	return '<ul class="tab_navs title_tab" data-index="{itemIndex=0}">\n    {each data as o index}\n    {if (typeof o.acl == "undefined" || o.acl == 1)}\n    <li data-index="{itemIndex++}" class="tab_nav {if (itemIndex == 1)}first{/if} js_top {o.className}" data-id="{o.id}"><a href="{o.url}" {if o.target==\'_blank\'}target="_blank"{/if}>{o.name}</a></li>\n    {/if}\n    {/each}\n</ul>\n';
});
define("biz_common/cookie.js", [], function() {
	var e = {};
	return e.set = function(e, n, t, o) {
		t = t || 30;
		var i = new Date;
		if (i.setTime(i.getTime() + 24 * t * 60 * 60 * 1e3), o) {
			var c = [];
			$.each(o, function(e, n) {
				c.push(";" + e + "=" + n);
			}), o = c.join("");
		} else o = "";
		document.cookie = e + "=" + escape(n) + ";expires=" + i.toGMTString() + o;
	}, e.get = function(e) {
		var n = new RegExp(["(^|;|\\s+)", e.replace(/([\^\.\[\$\(\)\|\*\+\?\{\\])/gi, "\\$1"), "=([^;]*);?"].join(""));
		if (n.test(document.cookie)) try {
			return decodeURIComponent(RegExp.$2);
		} catch (t) {
			return RegExp.$2;
		}
	}, e;
});
define("tpl/Idcheck.html.js", [], function(e, t, n) {
	return '<div class="safe_check">\n	<div class="processor_wrp js_process"></div>\n	<div class="form form_width_auto js_step1">\n        <div class="inner">\n            <div class="frm_hd">\n                <h3 class="frm_title">为了公众号帐号安全，操作前需要先进行验证，请选择验证方式：</h3>\n            </div>\n            <div class="frm_control_group">\n                <div class="frm_controls">\n                    <label class="frm_radio_label selected">\n                        <i class="icon_radio"></i>\n                        <span class="lbl_content">通过信息登记手机号来验证</span>\n                        <input type="radio" value="1" class="frm_radio js_radio" checked="checked">\n                    </label>\n                    <p class="frm_radio_block_desc">通过发送验证短信到你的绑定手机{mobile.number}验证</p>\n                </div>\n            </div>\n            <div class="frm_control_group">\n                <div class="frm_controls">\n                    <label class="frm_radio_label">\n                        <i class="icon_radio"></i>\n                        <span class="lbl_content">通过信息登记身份证号来验证</span>\n                        <input type="radio" value="0" class="frm_radio js_radio">\n                    </label>\n                    <p class="frm_radio_block_desc">通过填写帐号运营者姓名、身份证号进行验证</p>\n                </div>\n            </div>\n            <!--\n            <div class="frm_control_group js_option" style="display:none;">\n                <div class="frm_controls">\n                    <label class="frm_radio_label">\n                        <i class="icon_radio"></i>\n                        <span class="lbl_content">通过登录邮箱来验证</span>\n                        <input type="radio" value="2" class="frm_radio js_radio">\n                    </label>\n                    <p class="frm_radio_block_desc">将会发送安全验证码到你的登录邮箱<span class="js_step1_email"></span>，填写正确验证码可通过验证</p>\n                </div>\n            </div>\n        	-->\n        </div>\n        <div class="tool_bar border tc">\n            <a href="javascript:;" class="btn btn_primary js_step1_next">下一步</a>\n        </div>\n    </div>\n    <div class="form disableform js_setp2_mobile" style="display:none;">\n        <div class="inner">\n            <div class="frm_hd">\n                <h3 class="frm_title">请输入手机验证码进行验证</h3>\n            </div>\n            <div class="frm_control_group">\n                <label class="frm_label">手机号</label>\n                <div class="frm_controls frm_vertical_pt">\n                    <p>\n                        <span class="js_old">{mobile.number}</span>\n                        <a class="ml1e js_mobile_forget" href=\'javascript:;\'>重置手机号</a>\n                    </p>\n                </div>\n            </div>\n            <div class="frm_control_group">\n                <label class="frm_label">验证码</label>\n                <div class="frm_controls">\n                    <span class="frm_input_box vcode">\n                        <input type="text" placeholder="验证码" class="frm_input js_num">\n                    </span>\n                    <a href="javascript:" class="btn btn_default btn_p20 js_oldsend">获取验证码</a>\n                </div>\n            </div>\n        </div>\n        <div class="tool_bar border tc">\n            <a href="javascript:;" class="btn btn_default js_step2_prev">上一步</a>\n            <a href="javascript:;" class="btn btn_primary js_step2_mobilecheck">提交</a>\n        </div>\n    </div>\n    <div class="form form_owner_info js_step2_idcard" style="display:none;">\n        <div class="inner">\n            <div class="frm_hd">\n                <h3 class="frm_title">请正确填写以下信息，以验证你的身份</h3>\n            </div>\n            <div class="frm_control_group">\n                <label class="frm_label">运营者身份证姓名</label>\n                <div class="frm_controls">\n                    <span class="frm_input_box">\n                        <input type="text" class="frm_input js_cardname">\n                    </span>\n                    <p class="frm_tips">姓名需与身份证上姓名一致</p>\n                </div>\n            </div>\n            <div class="frm_control_group">\n                <label class="frm_label">运营者身份证号码</label>\n                <div class="frm_controls">\n                    <span class="frm_input_box">\n                        <input type="text" class="frm_input js_cardid">\n                    </span>\n                    <p class="frm_tips">请正确填写注册时所登记的身份证号码</p>\n                </div>\n            </div>\n        </div>\n        <div class="tool_bar border tc">\n            <a href="javascript:;" class="btn btn_default js_step2_prev">上一步</a>\n            <a href="javascript:;" class="btn btn_primary js_step2_idcardcheck">提交</a>\n        </div>\n    </div>\n</div>';
});
define("tpl/uploader.html.js", [], function() {
	return '<li id="uploadItem{id}" data-status="{className}" class="upload_file">\n    <strong class="upload_file_name">{fileName}</strong>\n    <span class="upload_file_size">({size})</span>\n    <div class="progress_bar"><div class="progress_bar_thumb" style="width:0%"></div></div>\n    <a href="javascript:;" data-id="{id}" class="upload_file_cancel js_cancel">取消</a>\n</li>\n';
});
define("tpl/step.html.js", [], function(e, t, n) {
	return '<ul class="processor_bar grid_line">\n    {each stepArr as item index}\n    <li class="{if (index+1==length)}no_extra{/if} step grid_item size1of{length} {item.cls}">\n        <h4>{item.name}</h4>\n    </li>\n    {/each}\n</ul>\n';
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
define("tpl/tooltips.html.js", [], function() {
	return '<div class="popover {parentClass}" style="display:none;position:{container_mode};{if offset.left}left:{offset.left}px;top:{offset.top}px;{/if}">\n    <div class="popover_inner">\n        <div class="popover_content">{=content}</div>\n        {if container_close}\n        <!--#0001#-->\n        <a href="javascript:;" class="popover_close icon16_common close_flat js_popover_close">关闭</a>\n        <!--%0001%-->\n        {/if}\n        {if buttons.length > 0}\n        <div class="popover_bar">\n			{each buttons as o index}\n			<a onclick="return false;" href="javascript:;" class="btn {o.type}">{o.text}</a>\n			{/each}\n        </div>\n        {/if}\n    </div>\n    <i class="popover_arrow popover_arrow_out"></i>\n    <i class="popover_arrow popover_arrow_in"></i>\n</div>\n';
});
/**
 * @author cunjinli
 * @Usage:
 * var Checkbox = req("biz_web/ui/checkbox"");
 * $("input[type=checkbox]").checkbox(); 
 *
 * $("input").checkbox({onChanged: function($me){}});
 * $("input[type=radio]").checkbox({ multi: true }); 
 * 
 * $("input").checkbox("checked", true/false); 调用checked函数
 * $("input").checkbox("value");
 * $("input").checkbox("values");
 * 
 * 
 * var checkbox = new Checkbox({
	container: "body",
	label: "同意",
	name: "agree",
	type: "checkbox" 
 * });
 *
 */
define("biz_web/ui/checkbox.js", ["tpl/biz_web/ui/checkbox.html.js"], function(e, t, n) {
	try {
		var r = +(new Date);
		"use strict";
		var i = {
				container: null,
				label: "",
				name: "",
				type: "checkbox"
			},
			s = e("tpl/biz_web/ui/checkbox.html.js"),
			o = wx.T,
			u = 1,
			a = 1;

		function f(e) {
			var t = $(e);
			t.each(function() {
				var e = $(this),
					t = e.prop("checked"),
					n = e.parent();
				t ? n.addClass("selected") : n.removeClass("selected");
			});
		}

		function l(e) {
			var t = $(e);
			t.each(function() {
				var e = $(this).prop("disabled"),
					t = $(this).parent();
				e ? t.addClass("disabled") : t.removeClass("disabled");
			});
		}

		function c() {
			return "checkbox" + u++;
		}
		var h = function(e) {
			this.options = $.extend(!0, {}, i, e), this.options.index = a++, this.$container = $(this.options.container), this.$dom = $(o(s, this.options)).appendTo(this.$container), this.$input = this.$dom.find("input"), this.$input.checkbox();
		};
		return h.prototype = {
			checked: function(e) {
				return typeof e != "undefined" && (this.$input.prop("checked", e), f(this.$input)), this.$input.prop("checked");
			},
			disabled: function(e) {
				return typeof e != "undefined" && (this.$input.prop("disabled", e), l(this.$input)), this.$input.prop("disabled");
			}
		}, $.fn.checkbox = function(e) {
			var t, n, r = !1,
				i, s;
			typeof e == "boolean" ? t = e : $.isPlainObject(e) ? (t = e.multi, n = e.onChanged) : typeof e == "string" ? (r = !0, i = e, s = [].slice.call(arguments, 1)) : typeof e == "undefined" && (e = {}), typeof t == "undefined" && (t = this.is("input[type=checkbox]"));
			var o = this,
				u = t ? "checkbox" : "radio",
				a = {
					checked: function(e) {
						return o.attr("checked", e), o.prop("checked", e), f(o), o;
					},
					disabled: function(e) {
						return o.attr("disabled", e), o.prop("disabled", e), l(o), o;
					},
					value: function() {
						var e = o.eq(0);
						return e.prop("checked") ? e.val() : "";
					},
					values: function() {
						var e = [];
						return o.each(function() {
							$(this).prop("checked") && e.push($(this).val());
						}), e;
					},
					adjust: function(e) {
						var t;
						return typeof e == "string" ? t = e.split(",") : t = e, t && t.length > 0 && o.each(function() {
							var e = $(this);
							t.indexOf(e.val()) >= 0 && (e.attr("checked", !0), f(e));
						}), this;
					},
					disable: function(e) {
						var t;
						return typeof e == "string" ? t = e.split(",") : t = e, t && t.length > 0 && o.each(function() {
							var e = $(this);
							t.indexOf(e.val()) >= 0 && (e.attr("disabled", !0), l(e));
						}), this;
					},
					setall: function(e) {
						o.each(function() {
							var t = $(this);
							t.attr("disabled", e ? !1 : !0), l(t);
						});
					},
					enable: function(e) {
						var t;
						return typeof e == "string" ? t = e.split(",") : t = e, t && t.length > 0 && o.each(function() {
							var e = $(this);
							t.indexOf(e.val()) >= 0 && (e.attr("disabled", !1), l(e));
						}), this;
					},
					label: function(e) {
						return e && (o.parent().find(".lbl_content").text(e), o.attr("data-label", e)), o;
					}
				};
			return r && typeof a[i] == "function" ? a[i].apply(a, s) : (this.addClass("frm_" + u).each(function() {
				var e = $(this),
					t = e.parent();
				if (!t.is("label")) {
					var n = e.attr("data-label");
					t = $('<label class="frm_{type}_label"><i class="icon_{type}"></i></label>'.format({
						type: u
					})).append("<span class='lbl_content'>{content}</span>".format({
						content: n
					})), t.insertBefore(e).prepend(e);
				}
				if (!this.id) {
					var r = c();
					this.id = r;
				}
				t.attr("for", this.id);
			}), f(this), l(this), !!e && !!e.initOnChanged && typeof n == "function" && o.parent().find("input[type=checkbox],input[type=radio]").each(function() {
				n.call(a, $(this));
			}), this.parent().delegate("input[type=checkbox],input[type=radio]", "click", function(e) {
				var r = $(this),
					i = r.prop("checked");
				t ? (r.attr("checked", i), f(r)) : (o.attr("checked", !1), r.attr("checked", !0).prop("checked", !0), f(o)), typeof n == "function" && n.call(a, r);
			}).addClass("frm_" + u + "_label"), a);
		}, h;
	} catch (p) {
		wx.jslog({
			src: "biz_web/ui/checkbox.js"
		}, p);
	}
});
(function(e) {
	e.Jcrop = function(t, n) {
		function r(e) {
			return Math.round(e) + "px";
		}

		function i(e) {
			return P.baseClass + "-" + e;
		}

		function s() {
			return e.fx.step.hasOwnProperty("backgroundColor");
		}

		function o(t) {
			var n = e(t).offset();
			return [n.left, n.top];
		}

		function u(e) {
			return [e.pageX - H[0], e.pageY - H[1]];
		}

		function a(t) {
			typeof t != "object" && (t = {}), P = e.extend(P, t), e.each(["onChange", "onSelect", "onRelease", "onDblClick"], function(e, t) {
				typeof P[t] != "function" && (P[t] = function() {});
			});
		}

		function f(e, t, n) {
			H = o(z), vt.setCursor(e === "move" ? e : e + "-resize");
			if (e === "move") return vt.activateHandlers(c(t), m, n);
			var r = ht.getFixed(),
				i = h(e),
				s = ht.getCorner(h(i));
			ht.setPressed(ht.getCorner(i)), ht.setCurrent(s), vt.activateHandlers(l(e, r), m, n);
		}

		function l(e, t) {
			return function(n) {
				if (!P.aspectRatio) switch (e) {
					case "e":
						n[1] = t.y2;
						break;
					case "w":
						n[1] = t.y2;
						break;
					case "n":
						n[0] = t.x2;
						break;
					case "s":
						n[0] = t.x2;
				} else switch (e) {
					case "e":
						n[1] = t.y + 1;
						break;
					case "w":
						n[1] = t.y + 1;
						break;
					case "n":
						n[0] = t.x + 1;
						break;
					case "s":
						n[0] = t.x + 1;
				}
				ht.setCurrent(n), dt.update();
			};
		}

		function c(e) {
			var t = e;
			return mt.watchKeys(),
				function(e) {
					ht.moveOffset([e[0] - t[0], e[1] - t[1]]), t = e, dt.update();
				};
		}

		function h(e) {
			switch (e) {
				case "n":
					return "sw";
				case "s":
					return "nw";
				case "e":
					return "nw";
				case "w":
					return "ne";
				case "ne":
					return "sw";
				case "nw":
					return "se";
				case "se":
					return "nw";
				case "sw":
					return "ne";
			}
		}

		function p(e) {
			return function(t) {
				return P.disabled ? !1 : e === "move" && !P.allowMove ? !1 : (H = o(z), at = !0, f(e, u(t)), t.stopPropagation(), t.preventDefault(), !1);
			};
		}

		function d(e, t, n) {
			var r = e.width(),
				i = e.height();
			r > t && t > 0 && (r = t, i = t / e.width() * e.height()), i > n && n > 0 && (i = n, r = n / e.height() * e.width()), st = e.width() / r, ot = e.height() / i, e.width(r).height(i);
		}

		function v(e) {
			return {
				x: e.x * st,
				y: e.y * ot,
				x2: e.x2 * st,
				y2: e.y2 * ot,
				w: e.w * st,
				h: e.h * ot
			};
		}

		function m(e) {
			var t = ht.getFixed();
			t.w > P.minSelect[0] && t.h > P.minSelect[1] ? (dt.enableHandles(), dt.done()) : dt.release(), vt.setCursor(P.allowSelect ? "crosshair" : "default");
		}

		function g(e) {
			if (P.disabled) return !1;
			if (!P.allowSelect) return !1;
			at = !0, H = o(z), dt.disableHandles(), vt.setCursor("crosshair");
			var t = u(e);
			return ht.setPressed(t), dt.update(), vt.activateHandlers(y, m, e.type.substring(0, 5) === "touch"), mt.watchKeys(), e.stopPropagation(), e.preventDefault(), !1;
		}

		function y(e) {
			ht.setCurrent(e), dt.update();
		}

		function b() {
			var t = e("<div></div>").addClass(i("tracker"));
			return j && t.css({
				opacity: 0,
				backgroundColor: "white"
			}), t;
		}

		function w(e) {
			V.removeClass().addClass(i("holder")).addClass(e);
		}

		function E(e, t) {
			function n() {
				window.setTimeout(b, c);
			}
			var r = e[0] / st,
				i = e[1] / ot,
				s = e[2] / st,
				o = e[3] / ot;
			if (ft) return;
			var u = ht.flipCoords(r, i, s, o),
				a = ht.getFixed(),
				f = [a.x, a.y, a.x2, a.y2],
				l = f,
				c = P.animationDelay,
				h = u[0] - f[0],
				p = u[1] - f[1],
				d = u[2] - f[2],
				v = u[3] - f[3],
				m = 0,
				g = P.swingSpeed;
			r = l[0], i = l[1], s = l[2], o = l[3], dt.animMode(!0);
			var y, b = function() {
				return function() {
					m += (100 - m) / g, l[0] = Math.round(r + m / 100 * h), l[1] = Math.round(i + m / 100 * p), l[2] = Math.round(s + m / 100 * d), l[3] = Math.round(o + m / 100 * v), m >= 99.8 && (m = 100), m < 100 ? (x(l), n()) : (dt.done(), dt.animMode(!1), typeof t == "function" && t.call(gt));
				};
			}();
			n();
		}

		function S(e) {
			x([e[0] / st, e[1] / ot, e[2] / st, e[3] / ot]), P.onSelect.call(gt, v(ht.getFixed())), dt.enableHandles();
		}

		function x(e) {
			ht.setPressed([e[0], e[1]]), ht.setCurrent([e[2], e[3]]), dt.update();
		}

		function T() {
			return v(ht.getFixed());
		}

		function N() {
			return ht.getFixed();
		}

		function C(e) {
			a(e), D();
		}

		function k() {
			P.disabled = !0, dt.disableHandles(), dt.setCursor("default"), vt.setCursor("default");
		}

		function L() {
			P.disabled = !1, D();
		}

		function A() {
			dt.done(), vt.activateHandlers(null, null);
		}

		function O() {
			V.remove(), q.show(), q.css("visibility", "visible"), e(t).removeData("Jcrop");
		}

		function M(e, t) {
			dt.release(), k();
			var n = new Image;
			n.onload = function() {
				var r = n.width,
					i = n.height,
					s = P.boxWidth,
					o = P.boxHeight;
				z.width(r).height(i), z.attr("src", e), $.attr("src", e), d(z, s, o), W = z.width(), X = z.height(), $.width(W).height(X), Y.width(W + G * 2).height(X + G * 2), V.width(W).height(X), pt.resize(W, X), L(), typeof t == "function" && t.call(gt);
			}, n.src = e;
		}

		function _(e, t, n) {
			var r = t || P.bgColor;
			P.bgFade && s() && P.fadeTime && !n ? e.animate({
				backgroundColor: r
			}, {
				queue: !1,
				duration: P.fadeTime
			}) : e.css("backgroundColor", r);
		}

		function D(e) {
			P.allowResize ? e ? dt.enableOnly() : dt.enableHandles() : dt.disableHandles(), vt.setCursor(P.allowSelect ? "crosshair" : "default"), dt.setCursor(P.allowMove ? "move" : "default"), P.hasOwnProperty("trueSize") && (st = P.trueSize[0] / W, ot = P.trueSize[1] / X), P.hasOwnProperty("setSelect") && (S(P.setSelect), dt.done(), delete P.setSelect), pt.refresh(), P.bgColor != Z && (_(P.shade ? pt.getShades() : V, P.shade ? P.shadeColor || P.bgColor : P.bgColor), Z = P.bgColor), et != P.bgOpacity && (et = P.bgOpacity, P.shade ? pt.refresh() : dt.setBgOpacity(et)), tt = P.maxSize[0] || 0, nt = P.maxSize[1] || 0, rt = P.minSize[0] || 0, it = P.minSize[1] || 0, P.hasOwnProperty("outerImage") && (z.attr("src", P.outerImage), delete P.outerImage), dt.refresh();
		}
		var P = e.extend({}, e.Jcrop.defaults),
			H, B = navigator.userAgent.toLowerCase(),
			j = /msie/.test(B),
			F = /msie [1-6]\./.test(B);
		typeof t != "object" && (t = e(t)[0]), typeof n != "object" && (n = {}), a(n);
		var I = {
				border: "none",
				visibility: "visible",
				margin: 0,
				padding: 0,
				position: "absolute",
				top: 0,
				left: 0
			},
			q = e(t),
			R = !0;
		if (t.tagName == "IMG") {
			if (q[0].width != 0 && q[0].height != 0) q.width(q[0].width), q.height(q[0].height);
			else {
				var U = new Image;
				U.src = q[0].src, q.width(U.width), q.height(U.height);
			}
			var z = q.clone().removeAttr("id").css(I).show();
			z.width(q.width()), z.height(q.height()), q.after(z).hide();
		} else z = q.css(I).show(), R = !1, P.shade === null && (P.shade = !0);
		d(z, P.boxWidth, P.boxHeight);
		var W = z.width(),
			X = z.height(),
			V = e("<div />").width(W).height(X).addClass(i("holder")).css({
				position: "relative",
				backgroundColor: P.bgColor
			}).insertAfter(q).append(z);
		P.addClass && V.addClass(P.addClass);
		var $ = e("<div />"),
			J = e("<div />").width("100%").height("100%").css({
				zIndex: 310,
				position: "absolute",
				overflow: "hidden"
			}),
			K = e("<div />").width("100%").height("100%").css("zIndex", 320),
			Q = e("<div />").css({
				position: "absolute",
				zIndex: 600
			}).dblclick(function() {
				var e = ht.getFixed();
				P.onDblClick.call(gt, e);
			}).insertBefore(z).append(J, K);
		R && ($ = e("<img />").attr("src", z.attr("src")).css(I).width(W).height(X), J.append($)), F && Q.css({
			overflowY: "hidden"
		});
		var G = P.boundary,
			Y = b().width(W + G * 2).height(X + G * 2).css({
				position: "absolute",
				top: r(-G),
				left: r(-G),
				zIndex: 290
			}).mousedown(g),
			Z = P.bgColor,
			et = P.bgOpacity,
			tt, nt, rt, it, st, ot, ut = !0,
			at, ft, lt;
		H = o(z);
		var ct = function() {
				function e() {
					var e = {},
						t = ["touchstart", "touchmove", "touchend"],
						n = document.createElement("div"),
						r;
					try {
						for (r = 0; r < t.length; r++) {
							var i = t[r];
							i = "on" + i;
							var s = i in n;
							s || (n.setAttribute(i, "return;"), s = typeof n[i] == "function"), e[t[r]] = s;
						}
						return e.touchstart && e.touchend && e.touchmove;
					} catch (o) {
						return !1;
					}
				}

				function t() {
					return P.touchSupport === !0 || P.touchSupport === !1 ? P.touchSupport : e();
				}
				return {
					createDragger: function(e) {
						return function(t) {
							return P.disabled ? !1 : e === "move" && !P.allowMove ? !1 : (H = o(z), at = !0, f(e, u(ct.cfilter(t)), !0), t.stopPropagation(), t.preventDefault(), !1);
						};
					},
					newSelection: function(e) {
						return g(ct.cfilter(e));
					},
					cfilter: function(e) {
						return e.pageX = e.originalEvent.changedTouches[0].pageX, e.pageY = e.originalEvent.changedTouches[0].pageY, e;
					},
					isSupported: e,
					support: t()
				};
			}(),
			ht = function() {
				function e(e) {
					e = o(e), h = l = e[0], p = c = e[1];
				}

				function t(e) {
					e = o(e), d = e[0] - h, v = e[1] - p, h = e[0], p = e[1];
				}

				function n() {
					return [d, v];
				}

				function r(e) {
					var t = e[0],
						n = e[1];
					0 > l + t && (t -= t + l), 0 > c + n && (n -= n + c), X < p + n && (n += X - (p + n)), W < h + t && (t += W - (h + t)), l += t, h += t, c += n, p += n;
				}

				function i(e) {
					var t = s();
					switch (e) {
						case "ne":
							return [t.x2, t.y];
						case "nw":
							return [t.x, t.y];
						case "se":
							return [t.x2, t.y2];
						case "sw":
							return [t.x, t.y2];
					}
				}

				function s() {
					if (!P.aspectRatio) return a();
					var e = P.aspectRatio,
						t = P.minSize[0] / st,
						n = P.maxSize[0] / st,
						r = P.maxSize[1] / ot,
						i = h - l,
						s = p - c,
						o = Math.abs(i),
						d = Math.abs(s),
						v = o / d,
						m, g, y, b;
					return n === 0 && (n = W * 10), r === 0 && (r = X * 10), v < e ? (g = p, y = d * e, m = i < 0 ? l - y : y + l, m < 0 ? (m = 0, b = Math.abs((m - l) / e), g = s < 0 ? c - b : b + c) : m > W && (m = W, b = Math.abs((m - l) / e), g = s < 0 ? c - b : b + c)) : (m = h, b = o / e, g = s < 0 ? c - b : c + b, g < 0 ? (g = 0, y = Math.abs((g - c) * e), m = i < 0 ? l - y : y + l) : g > X && (g = X, y = Math.abs(g - c) * e, m = i < 0 ? l - y : y + l)), m > l ? (m - l < t ? m = l + t : m - l > n && (m = l + n), g > c ? g = c + (m - l) / e : g = c - (m - l) / e) : m < l && (l - m < t ? m = l - t : l - m > n && (m = l - n), g > c ? g = c + (l - m) / e : g = c - (l - m) / e), m < 0 ? (l -= m, m = 0) : m > W && (l -= m - W, m = W), g < 0 ? (c -= g, g = 0) : g > X && (c -= g - X, g = X), f(u(l, c, m, g));
				}

				function o(e) {
					return e[0] < 0 && (e[0] = 0), e[1] < 0 && (e[1] = 0), e[0] > W && (e[0] = W), e[1] > X && (e[1] = X), [Math.round(e[0]), Math.round(e[1])];
				}

				function u(e, t, n, r) {
					var i = e,
						s = n,
						o = t,
						u = r;
					return n < e && (i = n, s = e), r < t && (o = r, u = t), [i, o, s, u];
				}

				function a() {
					var e = h - l,
						t = p - c,
						n;
					return tt && Math.abs(e) > tt && (h = e > 0 ? l + tt : l - tt), nt && Math.abs(t) > nt && (p = t > 0 ? c + nt : c - nt), it / ot && Math.abs(t) < it / ot && (p = t > 0 ? c + it / ot : c - it / ot), rt / st && Math.abs(e) < rt / st && (h = e > 0 ? l + rt / st : l - rt / st), l < 0 && (h -= l, l -= l), c < 0 && (p -= c, c -= c), h < 0 && (l -= h, h -= h), p < 0 && (c -= p, p -= p), h > W && (n = h - W, l -= n, h -= n), p > X && (n = p - X, c -= n, p -= n), l > W && (n = l - X, p -= n, c -= n), c > X && (n = c - X, p -= n, c -= n), f(u(l, c, h, p));
				}

				function f(e) {
					return {
						x: e[0],
						y: e[1],
						x2: e[2],
						y2: e[3],
						w: e[2] - e[0],
						h: e[3] - e[1]
					};
				}
				var l = 0,
					c = 0,
					h = 0,
					p = 0,
					d, v;
				return {
					flipCoords: u,
					setPressed: e,
					setCurrent: t,
					getOffset: n,
					moveOffset: r,
					getCorner: i,
					getFixed: s
				};
			}(),
			pt = function() {
				function t(e, t) {
					d.left.css({
						height: r(t)
					}), d.right.css({
						height: r(t)
					});
				}

				function n() {
					return i(ht.getFixed());
				}

				function i(e) {
					d.top.css({
						left: r(e.x),
						width: r(e.w),
						height: r(e.y)
					}), d.bottom.css({
						top: r(e.y2),
						left: r(e.x),
						width: r(e.w),
						height: r(X - e.y2)
					}), d.right.css({
						left: r(e.x2),
						width: r(W - e.x2)
					}), d.left.css({
						width: r(e.x)
					});
				}

				function s() {
					return e("<div />").css({
						position: "absolute",
						backgroundColor: P.shadeColor || P.bgColor
					}).appendTo(p);
				}

				function o() {
					h || (h = !0, p.insertBefore(z), n(), dt.setBgOpacity(1, 0, 1), $.hide(), u(P.shadeColor || P.bgColor, 1), dt.isAwake() ? f(P.bgOpacity, 1) : f(1, 1));
				}

				function u(e, t) {
					_(c(), e, t);
				}

				function a() {
					h && (p.remove(), $.show(), h = !1, dt.isAwake() ? dt.setBgOpacity(P.bgOpacity, 1, 1) : (dt.setBgOpacity(1, 1, 1), dt.disableHandles()), _(V, 0, 1));
				}

				function f(e, t) {
					h && (P.bgFade && !t ? p.animate({
						opacity: 1 - e
					}, {
						queue: !1,
						duration: P.fadeTime
					}) : p.css({
						opacity: 1 - e
					}));
				}

				function l() {
					P.shade ? o() : a(), dt.isAwake() && f(P.bgOpacity);
				}

				function c() {
					return p.children();
				}
				var h = !1,
					p = e("<div />").css({
						position: "absolute",
						zIndex: 240,
						opacity: 0
					}),
					d = {
						top: s(),
						left: s().height(X),
						right: s().height(X),
						bottom: s()
					};
				return {
					update: n,
					updateRaw: i,
					getShades: c,
					setBgColor: u,
					enable: o,
					disable: a,
					resize: t,
					refresh: l,
					opacity: f
				};
			}(),
			dt = function() {
				function t(t) {
					var n = e("<div />").css({
						position: "absolute",
						opacity: P.borderOpacity
					}).addClass(i(t));
					return J.append(n), n;
				}

				function n(t, n) {
					var r = e("<div />").mousedown(p(t)).css({
						cursor: t + "-resize",
						position: "absolute",
						zIndex: n
					}).addClass("ord-" + t);
					return ct.support && r.bind("touchstart.jcrop", ct.createDragger(t)), K.append(r), r;
				}

				function s(e) {
					var t = P.handleSize,
						r = n(e, k++).css({
							opacity: P.handleOpacity
						}).addClass(i("handle"));
					return t && r.width(t).height(t), r;
				}

				function o(e) {
					return n(e, k++).addClass("jcrop-dragbar");
				}

				function u(e) {
					var t;
					for (t = 0; t < e.length; t++) O[e[t]] = o(e[t]);
				}

				function a(e) {
					var n, r;
					for (r = 0; r < e.length; r++) {
						switch (e[r]) {
							case "n":
								n = "hline";
								break;
							case "s":
								n = "hline bottom";
								break;
							case "e":
								n = "vline right";
								break;
							case "w":
								n = "vline";
						}
						L[e[r]] = t(n);
					}
				}

				function f(e) {
					var t;
					for (t = 0; t < e.length; t++) A[e[t]] = s(e[t]);
				}

				function l(e, t) {
					P.shade || $.css({
						top: r(-t),
						left: r(-e)
					}), Q.css({
						top: r(t),
						left: r(e)
					});
				}

				function c(e, t) {
					Q.width(Math.round(e)).height(Math.round(t));
				}

				function h() {
					var e = ht.getFixed();
					ht.setPressed([e.x, e.y]), ht.setCurrent([e.x2, e.y2]), d();
				}

				function d(e) {
					if (C) return m(e);
				}

				function m(e) {
					var t = ht.getFixed();
					c(t.w, t.h), l(t.x, t.y), P.shade && pt.updateRaw(t), C || y(), e ? P.onSelect.call(gt, v(t)) : P.onChange.call(gt, v(t));
				}

				function g(e, t, n) {
					if (!C && !t) return;
					P.bgFade && !n ? z.animate({
						opacity: e
					}, {
						queue: !1,
						duration: P.fadeTime
					}) : z.css("opacity", e);
				}

				function y() {
					Q.show(), P.shade ? pt.opacity(et) : g(et, !0), C = !0;
				}

				function w() {
					x(), Q.hide(), P.shade ? pt.opacity(1) : g(1), C = !1, P.onRelease.call(gt);
				}

				function E() {
					M && K.show();
				}

				function S() {
					M = !0;
					if (P.allowResize) return K.show(), !0;
				}

				function x() {
					M = !1, K.hide();
				}

				function T(e) {
					e ? (ft = !0, x()) : (ft = !1, S());
				}

				function N() {
					T(!1), h();
				}
				var C, k = 370,
					L = {},
					A = {},
					O = {},
					M = !1;
				P.dragEdges && e.isArray(P.createDragbars) && u(P.createDragbars), e.isArray(P.createHandles) && f(P.createHandles), P.drawBorders && e.isArray(P.createBorders) && a(P.createBorders), e(document).bind("touchstart.jcrop-ios", function(t) {
					e(t.currentTarget).hasClass("jcrop-tracker") && t.stopPropagation();
				});
				var _ = b().mousedown(p("move")).css({
					cursor: "move",
					position: "absolute",
					zIndex: 360
				});
				return ct.support && _.bind("touchstart.jcrop", ct.createDragger("move")), J.append(_), x(), {
					updateVisible: d,
					update: m,
					release: w,
					refresh: h,
					isAwake: function() {
						return C;
					},
					setCursor: function(e) {
						_.css("cursor", e);
					},
					enableHandles: S,
					enableOnly: function() {
						M = !0;
					},
					showHandles: E,
					disableHandles: x,
					animMode: T,
					setBgOpacity: g,
					done: N
				};
			}(),
			vt = function() {
				function t(t) {
					Y.css({
						zIndex: 450
					}), t ? e(document).bind("touchmove.jcrop", o).bind("touchend.jcrop", a) : h && e(document).bind("mousemove.jcrop", r).bind("mouseup.jcrop", i);
				}

				function n() {
					Y.css({
						zIndex: 290
					}), e(document).unbind(".jcrop");
				}

				function r(e) {
					return l(u(e)), !1;
				}

				function i(e) {
					return e.preventDefault(), e.stopPropagation(), at && (at = !1, c(u(e)), dt.isAwake() && P.onSelect.call(gt, v(ht.getFixed())), n(), l = function() {}, c = function() {}), !1;
				}

				function s(e, n, r) {
					return at = !0, l = e, c = n, t(r), !1;
				}

				function o(e) {
					return l(u(ct.cfilter(e))), !1;
				}

				function a(e) {
					return i(ct.cfilter(e));
				}

				function f(e) {
					Y.css("cursor", e);
				}
				var l = function() {},
					c = function() {},
					h = P.trackDocument;
				return h || Y.mousemove(r).mouseup(i).mouseout(i), z.before(Y), {
					activateHandlers: s,
					setCursor: f
				};
			}(),
			mt = function() {
				function t() {
					P.keySupport && (s.show(), s.focus());
				}

				function n(e) {
					s.hide();
				}

				function r(e, t, n) {
					P.allowMove && (ht.moveOffset([t, n]), dt.updateVisible(!0)), e.preventDefault(), e.stopPropagation();
				}

				function i(e) {
					if (e.ctrlKey || e.metaKey) return !0;
					lt = e.shiftKey ? !0 : !1;
					var t = lt ? 10 : 1;
					switch (e.keyCode) {
						case 37:
							r(e, -t, 0);
							break;
						case 39:
							r(e, t, 0);
							break;
						case 38:
							r(e, 0, -t);
							break;
						case 40:
							r(e, 0, t);
							break;
						case 27:
							P.allowSelect && dt.release();
							break;
						case 9:
							return !0;
					}
					return !1;
				}
				var s = e('<input type="radio" />').css({
						position: "fixed",
						left: "-120px",
						width: "12px"
					}).addClass("jcrop-keymgr"),
					o = e("<div />").css({
						position: "absolute",
						overflow: "hidden"
					}).append(s);
				return P.keySupport && (s.keydown(i).blur(n), F || !P.fixedSupport ? (s.css({
					position: "absolute",
					left: "-20px"
				}), o.append(s).insertBefore(z)) : s.insertBefore(z)), {
					watchKeys: t
				};
			}();
		ct.support && Y.bind("touchstart.jcrop", ct.newSelection), K.hide(), D(!0);
		var gt = {
			setImage: M,
			animateTo: E,
			setSelect: S,
			setOptions: C,
			tellSelect: T,
			tellScaled: N,
			setClass: w,
			disable: k,
			enable: L,
			cancel: A,
			release: dt.release,
			destroy: O,
			focus: mt.watchKeys,
			getBounds: function() {
				return [W * st, X * ot];
			},
			getWidgetSize: function() {
				return [W, X];
			},
			getScaleFactor: function() {
				return [st, ot];
			},
			getOptions: function() {
				return P;
			},
			ui: {
				holder: V,
				selection: Q
			}
		};
		return j && V.bind("selectstart", function() {
			return !1;
		}), q.data("Jcrop", gt), gt;
	}, e.fn.Jcrop = function(t, n) {
		var r;
		return this.each(function() {
			if (e(this).data("Jcrop")) {
				if (t === "api") return e(this).data("Jcrop");
				e(this).data("Jcrop").setOptions(t);
			} else this.tagName == "IMG" ? e.Jcrop.Loader(this, function() {
				e(this).css({
					display: "block",
					visibility: "hidden"
				}), r = e.Jcrop(this, t), e.isFunction(n) && n.call(r);
			}) : (e(this).css({
				display: "block",
				visibility: "hidden"
			}), r = e.Jcrop(this, t), e.isFunction(n) && n.call(r));
		}), this;
	}, e.Jcrop.Loader = function(t, n, r) {
		function i() {
			o.complete ? (s.unbind(".jcloader"), e.isFunction(n) && n.call(o)) : window.setTimeout(i, 50);
		}
		var s = e(t),
			o = s[0];
		s.bind("load.jcloader", i).bind("error.jcloader", function(t) {
			s.unbind(".jcloader"), e.isFunction(r) && r.call(o);
		}), o.complete && e.isFunction(n) && (s.unbind(".jcloader"), n.call(o));
	}, e.Jcrop.defaults = {
		allowSelect: !0,
		allowMove: !0,
		allowResize: !0,
		trackDocument: !0,
		baseClass: "jcrop",
		addClass: null,
		bgColor: "black",
		bgOpacity: .6,
		bgFade: !1,
		borderOpacity: .4,
		handleOpacity: .5,
		handleSize: null,
		aspectRatio: 0,
		keySupport: !0,
		createHandles: ["n", "s", "e", "w", "nw", "ne", "se", "sw"],
		createDragbars: ["n", "s", "e", "w"],
		createBorders: ["n", "s", "e", "w"],
		drawBorders: !0,
		dragEdges: !0,
		fixedSupport: !0,
		touchSupport: null,
		shade: null,
		boxWidth: 0,
		boxHeight: 0,
		boundary: 2,
		fadeTime: 400,
		animationDelay: 20,
		swingSpeed: 3,
		minSelect: [0, 0],
		maxSize: [0, 0],
		minSize: [0, 0],
		onChange: function() {},
		onSelect: function() {},
		onDblClick: function() {},
		onRelease: function() {}
	};
})(jQuery);
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
		}, {
			id: "star",
			name: "已收藏的消息",
			url: "/cgi-bin/message?t=message/list&count=20&action=star"
		}, {
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
define("common/wx/Idcheck.js", ["tpl/Idcheck.html.js", "common/wx/popup.js", "biz_web/ui/checkbox.js", "biz_common/cookie.js", "common/wx/Cgi.js", "common/wx/Tips.js", "common/wx/Step.js"], function(e, t, n) {
	try {
		var r = +(new Date);
		"use strict";
		var i = e("tpl/Idcheck.html.js"),
			s = e("common/wx/popup.js"),
			o = e("biz_web/ui/checkbox.js"),
			u = e("biz_common/cookie.js"),
			a = e("common/wx/Cgi.js"),
			f = e("common/wx/Tips.js"),
			l = e("common/wx/Step.js"),
			c = {
				mobile: {
					number: "",
					request_url: "/cgi-bin/contractorverify?action=check_mobile",
					get_code_url: "/cgi-bin/contractorverify?action=send_code"
				},
				idcard: {
					request_url: "/cgi-bin/contractorverify?action=check_id"
				},
				callback: function() {}
			},
			h = function(e) {
				this.options = $.extend(!0, {}, c, e), this.initDom(), this.initEvent();
			};
		h.prototype = {
			constructor: h,
			initDom: function() {
				var e = this;
				$("body").append("<script id='idCheckHtml' type='text/html'>" + i + "</script>"), e.dialog = $("#idCheckHtml").popup({
					title: "验证身份",
					className: "dialog_process",
					width: 860,
					data: e.options,
					mask: !0,
					autoShow: !1,
					onShow: function() {
						this.resetPosition();
					}
				}), e.$dialogWrp = e.dialog, e.step = new l({
					container: e.$dialogWrp.find(".js_process"),
					selected: 1,
					names: ["1. 选择验证方式", "2. 帐号验证"]
				}), e.checkboxes = e.$dialogWrp.find(".js_radio").checkbox({
					multi: !1
				}), e.$dialogWrp.find(".js_mobile_forget").attr("href", wx.url("/misc/rebindverify?action=mail_get&safeaction=mobile_mail_get&t=setting/safe-rebind"));
			},
			initEvent: function() {
				var e = this,
					t = e.$dialogWrp.find(".js_step1"),
					n = e.$dialogWrp.find(".js_setp2_mobile"),
					r = e.$dialogWrp.find(".js_step2_idcard"),
					i = 60;
				$(e.options.container).on("click", function() {
					e.show();
				}), e.$dialogWrp.find(".js_step1_next").on("click", function() {
					e.step.setStep(2), t.hide();
					switch (+e.checkboxes.values()[0]) {
						case 0:
							r.show();
							break;
						case 1:
							n.show(), e.$dialogWrp.find(".js_oldsend").click();
					}
				}), e.$dialogWrp.find(".js_step2_prev").on("click", function() {
					e.step.setStep(1), n.hide(), r.hide(), t.show();
				}), e.$dialogWrp.find(".js_oldsend").on("click", function() {
					var t = $(this);
					t.attr("disabled") || a.post({
						url: e.options.mobile.get_code_url,
						mask: !1,
						error: function() {
							f.err("发送失败");
						}
					}, function(e) {
						var n = e.base_resp.ret;
						if (n == 0) {
							f.suc("发送成功");
							var r = null,
								s = function() {
									var e = +t.data("left");
									if (e <= 1) r && window.clearInterval(r), t.html("重发").removeAttr("disabled").removeClass("btn_disabled").addClass("btn_default");
									else {
										var n = --e;
										t.data("left", n).html(n + "秒后可重发");
									}
								};
							t.data("left", i).html(i + "秒后可重发").attr("disabled", "true").removeClass("btn_default").addClass("btn_disabled"), r = window.setInterval(s, 1e3);
						} else n == "-2341" ? f.err("操作频率过快，请稍后再试。") : f.err("发送失败");
					});
				}), n.find(".js_step2_mobilecheck").on("click", function() {
					var t = $(this),
						r = n.find(".js_num").val().trim() || "";
					if (r == "" || !/^\d{6}$/.test(r)) return f.err("请输入正确的手机验证码"), !1;
					t.btn(!1), a.post({
						url: e.options.mobile.request_url,
						data: {
							code: r
						},
						mask: !1
					}, function(n) {
						switch (n.base_resp.ret) {
							case 0:
								f.suc("验证成功"), u.set("contractor_ticket", n.contractor_ticket, 1, {
									domain: "weixin.qq.com",
									path: "/"
								}), t.btn(!0), typeof e.options.callback == "function" && e.options.callback.call(e, n, e.value);
								break;
							case -1005:
								f.err("验证码错误"), t.btn(!0);
								break;
							default:
								f.err("验证失败"), t.btn(!0);
						}
					});
				}), r.find(".js_step2_idcardcheck").on("click", function() {
					var t = r.find(".js_cardname"),
						n = r.find(".js_cardid"),
						i = t.val().trim(),
						s = n.val().trim(),
						o = $(this);
					if (!i) return f.err("请输入身份证姓名"), !1;
					if (!s) return f.err("请输入身份证号码"), !1;
					o.btn(!1), a.post({
						url: e.options.idcard.request_url,
						data: {
							name: i,
							idcard: s
						},
						mask: !1
					}, function(t) {
						switch (+t.base_resp.ret) {
							case 0:
								f.suc("验证成功"), u.set("contractor_ticket", t.contractor_ticket, 1, {
									domain: "weixin.qq.com",
									path: "/"
								}), typeof e.options.callback == "function" && e.options.callback.call(e, t, e.value);
								break;
							case -1005:
								f.err("姓名或者身份证号码错误"), o.btn(!0);
								break;
							default:
								f.err("验证失败"), o.btn(!0);
						}
					});
				});
			},
			show: function(e) {
				this.value = e, this.dialog.popup("show");
			},
			hide: function() {
				this.dialog.popup("hide");
			},
			remove: function() {
				this.dialog.popup("remove");
			}
		}, n.exports = h;
	} catch (p) {
		wx.jslog({
			src: "common/wx/Idcheck.js"
		}, p);
	}
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
define("common/wx/Step.js", ["widget/processor_bar.css", "tpl/step.html.js"], function(e, t, n) {
	try {
		var r = +(new Date);
		"use strict";
		var i = wx.T,
			s = e("widget/processor_bar.css"),
			o = e("tpl/step.html.js"),
			u = {
				selected: 1
			},
			a = function() {
				var e = navigator.userAgent.toLowerCase(),
					t = /(msie) ([\w.]+)/.exec(e) || [],
					n = t[1] || "";
				return n == "msie";
			};

		function f(e) {
			this.opts = $.extend(!0, {}, u, e), this.init();
		}
		f.prototype.init = function() {
			var e = this.opts,
				t = e.names.length,
				n = parseInt(e.selected, 10),
				r = [],
				s, u;
			n = n < 0 ? 0 : n > t ? t : n;
			for (s = 0; s < t; s++) u = f.getClass(s + 1, n), r.push({
				name: e.names[s],
				cls: u
			});
			this.$dom = $(i(o, {
				stepArr: r,
				length: t
			})).appendTo(e.container), a() && this.$dom.addClass("ie");
		}, f.prototype.setStep = f.prototype.go = function(e) {
			var t = this.$dom.find("li.step"),
				n = t.length;
			return e = e < 0 ? 0 : e > n ? n : e, t.each(function(t, r) {
				var i = f.getClass(t + 1, e);
				t + 1 == n ? r.className = "no_extra " + "step grid_item size1of%s %s".sprintf(n, i) : r.className = "step grid_item size1of%s %s".sprintf(n, i);
			}), this;
		}, f.getClass = function(e, t) {
			var n;
			return e < t - 1 ? n = "pprev" : e === t - 1 ? n = "prev" : e === t ? n = "current" : e === t + 1 ? n = "next" : e > t + 1 && (n = "nnext"), n;
		}, n.exports = f;
	} catch (l) {
		wx.jslog({
			src: "common/wx/Step.js"
		}, l);
	}
});
define("common/qq/queryString.js", [], function(e, t, n) {
	try {
		var r = +(new Date);
		"use strict";

		function i(e) {
			this.url = e || location.href;
		}
		i.prototype = {
			constructor: i,
			add: function(e, t) {
				if (typeof t == "undefined") return this;
				var n = this.url.indexOf("?"),
					r = this.url.indexOf("#"),
					i, s = this.url,
					o = "";
				return i = (n >= 0 ? "&" : "?") + e + "=" + t, r >= 0 && (s = this.url.substring(0, r), o = this.url.substring(r)), this.url = s + i + o, this;
			},
			replace: function(e, t) {
				return typeof t == "undefined" ? this : (this.remove(e), this.add(e, t), this);
			},
			replaceAll: function(e) {
				if (typeof e != "object" || e == null) return this;
				for (var t in e) e.hasOwnProperty(t) && this.replace(t, encodeURIComponent(e[t]));
				return this;
			},
			remove: function(e) {
				var t = new RegExp("([?&])" + e + "=[^&#]*([&#])?");
				return this.url = this.url.replace(t, function(e, t, n) {
					return t === "?" ? t : n || "";
				}), this;
			},
			getUrl: function() {
				return this.url;
			}
		}, i.replace = function(e, t, n) {
			var r = new i(e);
			return r.replace(t, n), r.getUrl();
		}, n.exports = i;
	} catch (s) {
		wx.jslog({
			src: "common/qq/queryString.js"
		}, s);
	}
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
define("common/wx/tooltips.js", ["tpl/tooltips.html.js"], function(e, t, n) {
	try {
		var r = +(new Date);
		"use strict";
		var i = {
				position: {},
				container: "",
				type: "hover",
				buttons: [],
				delay: 300,
				disabled: !1,
				reposition: !1,
				container_close: !1,
				parentClass: "",
				container_mode: "absolute"
			},
			s = wx.T,
			o = e("tpl/tooltips.html.js"),
			u = "btn_disabled",
			a = "hover",
			f = "show",
			l = function(e) {
				this.options = e = $.extend(!0, {}, i, e), this.$container = $(this.options.container);
				if (!this.$container || this.$container.length == 0) return;
				var t = this.$container.offset(),
					n = this.$container.height(),
					r = this.options.position.left || this.$container.data("x") || 0,
					l = n + (this.options.position.top || this.$container.data("y") || 0);
				this.options.offset = {
					left: t.left + r,
					top: t.top + l,
					left_x: r,
					top_y: l
				}, !e.content && (e.content = this.$container.data("tips") || ""), this.$dom = $(s(o, e)).appendTo("body"), this.options.disabled && this.$container.addClass(u);
				var c = this,
					h = this.options.type === a || this.options.type === "click" ? this.options.type : a;
				if (h == a) {
					var p = null;
					this.$container.hover(function(e) {
						c.options.onshow && typeof c.options.onshow == "function" ? c.options.onshow.apply(c) : !c.options.disabled && c.show();
					}, function(e) {
						p = window.setTimeout(function() {
							c.hide();
						}, c.options.delay);
					}), this.$dom.hover(function(e) {
						p && window.clearTimeout(p);
					}, function(e) {
						c.hide();
					});
				} else this.$container.click(function(e) {
					if (c.options.disabled) return;
					if (c.options.onbeforeclick && typeof c.options.onbeforeclick == "function" && c.options.onbeforeclick.apply(c) === !1) return;
					return c.$dom.data(f) ? c.options.onclose && typeof c.options.onclose == "function" ? c.options.onclose.apply(c) : c.hide() : c.options.onshow && typeof c.options.onshow == "function" ? c.options.onshow.apply(c) : c.show(), !1;
				});
				$(document).on("click", function(e) {
						c.options.onclose && typeof c.options.onclose == "function" ? c.options.onclose.apply(c, [e]) : c.hide();
					}), c.$dom.find(".js_popover_close").on("click", function(e) {
						return c.options.onclose && typeof c.options.onclose == "function" ? c.options.onclose.apply(c, [e]) : c.hide(), !1;
					}), this.$dom.hide(),
					function() {
						$.each(c.$dom.find(".btn"), function(e, t) {
							c.options.buttons[e].click && $(t).on("click", function() {
								c.options.buttons[e].click.apply(c);
							});
						});
					}();
			};
		l.prototype = {
			constructor: l,
			show: function() {
				if (this.options.reposition) {
					var e = this.$container.offset(),
						t = e.left + this.options.offset.left_x,
						n = e.top + this.options.offset.top_y;
					this.$dom.css({
						left: t,
						top: n
					}).show();
				} else this.$dom.show();
				this.$dom.data(f, !0);
			},
			hide: function() {
				this.$dom.hide(), this.$dom.data(f, !1);
			},
			enable: function() {
				return this.options.disabled = !1, this.$container.removeClass(u), this;
			},
			disable: function() {
				return this.options.disabled = !0, this.$container.addClass(u), this;
			}
		}, n.exports = l;
	} catch (c) {
		wx.jslog({
			src: "common/wx/tooltips.js"
		}, c);
	}
});
define("setting/index.js", ["common/wx/Tips.js", "common/wx/tooltips.js", "biz_common/jquery.validate.js", "common/wx/dialog.js", "common/wx/Cgi.js", "common/qq/queryString.js", "common/wx/Step.js", "biz_web/utils/upload.js", "common/wx/Idcheck.js", "common/wx/time.js", "common/wx/top.js", "common/lib/jquery.Jcrop.js", "common/wx/popup.js", "biz_web/ui/checkbox.js"], function(e) {
	"use strict"; {
		var t = e("common/wx/Tips.js"),
			i = e("common/wx/tooltips.js"),
			n = (e("biz_common/jquery.validate.js"),
				e("common/wx/dialog.js")),
			s = e("common/wx/Cgi.js"),
			a = (e("common/qq/queryString.js"),
				e("common/wx/Step.js")),
			o = e("biz_web/utils/upload.js"),
			r = o.uploadTmpFile,
			c = (e("common/wx/Idcheck.js"),
				e("common/wx/time.js")),
			l = e("common/wx/top.js");
		wx.data.t, wx.data.lang;
	}
	e("common/lib/jquery.Jcrop.js"), e("common/wx/popup.js"), e("biz_web/ui/checkbox.js");
	var d = new l("#topTab", l.DATA.setting);
	d.selected(0);
	var p = {
			submitting: !1,
			back: function() {
				var e = this.get().find(".js_btn_p").hide();
				e.eq(1).show(), $("#step1Desc").css("display", "block"), $("#step2Desc").css("display", "none"),
					this.resetPosition();
			},
			agree: function() {
				var e = this.get().find(".js_btn_p").hide();
				e.eq(0).show(), e.eq(2).show(), $("#step1Desc").css("display", "none"), $("#step2Desc").css("display", "block"),
					this.resetPosition();
			},
			next: function(e) {
				function n() {
					$("#js_account_warning_tooltips").length > 0 && $("#js_div_account_warning").empty(),
						$("#js_div_account_warning").html('<p class="frm_msg fail" style="display:block;">你填写的公众账号名称与已有认证公众账号名称重复 <i id="js_account_warning_tooltips" class="icon_msg_mini ask"></i></p>'),
						new i({
							container: "#js_account_warning_tooltips",
							content: "抱歉，你填写的公众账号名称与已有认证名称重复。基于认证名称唯一和保护认证名称原则，请重新提交一个新名称。如果你认为该认证公众账号名称侵犯了你的合法权益，可到公众平台左下方的侵权投诉入口进行投诉。",
							reposition: !0,
							type: "hover",
							position: {
								left: -138,
								top: -2
							},
							parentClass: "z_top"
						});
				}
				if ($("#modifyInput").on("change", function() {
					$("#js_div_account_warning").empty();
				}), $(".nickname_input").length > 0) {
					if (0 != h.nickname()) return;
					cgiData.checkNickname = $("#modifyInput").val(), cgiData.invadeType = 0;
					var a = this,
						o = this.get().find(".js_btn_p");
					if (p.submitting) return;
					o.eq(2).btn(!1), p.submitting = !0, s.post({
						url: "/cgi-bin/setuserinfo?action=check_nickname",
						data: {
							nick_name: cgiData.checkNickname
						},
						complete: function() {
							p.submitting = !1, o.eq(2).btn(!0);
						}
					}, function(i) {
						if (!i || !i.base_resp) return void t.err("系统错误，请稍后重试");
						var s = 1 * i.base_resp.ret;
						if (cgiData.invadeType = s, 0 == s || 2 == s || 3 == s || 4 == s) {
							var r = $("#normal_nickname"),
								c = $("#invade_nickname");
							0 == s ? (r.show().find("span[type=before]").text(cgiData.nickname), r.find("span[type=after]").text(cgiData.checkNickname),
									c.hide()) : (r.hide(), c.show().find("span[type=invade]").text(cgiData.checkNickname)),
								e.setStep(3), o.hide(), o.eq(3).show(), o.eq(4).show(), $(".frm_msg").css("display", "none"),
								$("#step2Desc").css("display", "none"), $("#step3Desc").css("display", "block"), a.resetPosition();
						} else 1004 == s ? (t.err("你填写的公众账号名称与已有认证公众账号名称重复"), n()) : t.err(1 == s ? "不能使用该名称注册" : "系统错误，请稍后重试");
					});
				} else {
					if ($(".userinfo_input").length && 0 != h.intro()) return;
					if ($("#largeHeadImg").length && 0 != h.headimg()) return void t.err("请先上传头像");
					e.setStep(3);
					var o = this.get().find(".js_btn_p").hide();
					o.eq(3).show(), o.eq(4).show(), $(".frm_msg").css("display", "none"), $("#step2Desc").css("display", "none"),
						$("#step3Desc").css("display", "block"), $("#ensure_input").text($.trim($("#modifyInput").val())),
						this.resetPosition();
				}
			},
			prev: function() {
				var e = this.get().find(".js_btn_p").hide();
				e.eq(0).show(), e.eq(2).show(), $("#step2Desc").css("display", "block"), $("#step3Desc").css("display", "none"),
					this.resetPosition();
			},
			show: function(e) {
				var t, i, n = $(e.tplId).popup({
					title: e.title,
					width: e.width,
					className: e.className,
					buttons: [{
						text: "返回",
						click: function() {
							i.setStep(1), p.back.call(this);
						}
					}, {
						text: "同意并进入下一步",
						click: function() {
							i.setStep(2), p.agree.call(this), e.agreeInit && e.agreeInit();
						},
						type: "primary"
					}, {
						text: "下一步",
						click: function() {
							p.next.call(this, i);
						},
						type: "primary"
					}, {
						text: "上一步",
						click: function() {
							i.setStep(2), $("#error_tip").hide(), p.prev.call(this);
						},
						type: "default"
					}, {
						text: "确定",
						click: e.done || function() {},
						type: "primary"
					}],
					onHide: function() {
						this.remove();
					}
				});
				i = new a({
					container: "#Js_stepBar",
					names: ["1 同意协议", "2 " + e.title, "3 确定修改"]
				}), t = n.popup("get").find(".js_btn_p").hide(), t.eq(1).show(), e.init(), n.popup("show");
			}
		},
		u = {
			submitting: !1,
			next: function(e) {
				if ($("#modifyInput").on("change", function() {
					$("#js_div_account_warning").empty();
				}), !$(".userinfo_input").length || 0 == h.intro()) {
					if ($("#largeHeadImg").length && 0 != h.headimg()) return void t.err("请先上传头像");
					e.setStep(2);
					var i = this.get().find(".js_btn_p").hide();
					i.eq(2).show(), i.eq(1).show(), $(".frm_msg").hide(), $("#step1Desc").hide(), $("#step2Desc").show(),
						$("#ensure_input").text($.trim($("#modifyInput").val())), this.resetPosition();
				}
			},
			prev: function() {
				var e = this.get().find(".js_btn_p").hide();
				e.eq(0).show(), $("#step1Desc").show(), $("#step2Desc").hide(), this.resetPosition();
			},
			show: function(e) {
				var t, i, n = $(e.tplId).popup({
					title: e.title,
					width: e.width || 960,
					className: e.className || "",
					buttons: [{
						text: "下一步",
						click: function() {
							u.next.call(this, i);
						},
						type: "primary"
					}, {
						text: "上一步",
						click: function() {
							i.setStep(1), $("#error_tip").hide(), u.prev.call(this);
						},
						type: "default"
					}, {
						text: "确定",
						click: e.done || $.noop,
						type: "primary"
					}],
					onHide: function() {
						this.remove();
					}
				});
				i = new a({
						container: "#Js_stepBar",
						names: ["1 " + e.title, "2 确定修改"]
					}), t = n.popup("get").find(".js_btn_p").hide(), t.eq(0).show(), e.init && e.init(), e.agreeInit && e.agreeInit(),
					n.popup("show");
			}
		},
		h = {
			intro: function() {
				var e = $.trim($("#modifyInput").val()).length;
				return 4 > e || e > 120 ? ($(".frm_msg").css("display", "block"), -1) : ($(".frm_msg").hide(),
					0);
			},
			nickname: function() {
				var e = $.trim($("#modifyInput").val()),
					t = e.length;
				return 2 > t || t > 16 ? ($(".frm_msg").css("display", "block"), -1) : /(微\s*信|we\s*chat)/gi.test(e) || !/^[0-9a-zA-Z\u4e00-\u9fa5]+$/.test(e) ? ($(".frm_msg").css("display", "block"), -1) : ($(".frm_msg").css("display", "none"), 0);
			},
			headimg: function() {
				return -1 != $("#uploadFileSrc").attr("src").indexOf("cgi-bin") ? 0 : -1;
			}
		},
		m = function() {
			var e = [];
			return {
				register: function(t, i) {
					e.push({
						name: t,
						init: i.init
					});
				},
				init: function() {
					var i = $("#nickname_pass_time");
					cgiData.nickname_modify_time > 0 && i.length > 0 && i.text("于" + c.formatDate(new Date(1e3 * cgiData.nickname_modify_time), "YYYY年MM月DD日") + "提交名称修改申请，审核时间为7个工作日"),
						$("#Js_weiboVerify").on("click", function() {
							n.show("用户达到500才可申请认证");
						}),
						function() {
							var e = cgiData.errcode;
							"" != e && t.err("10000" == e ? "选定的腾讯微博帐号已经被其他公众号绑定，绑定失败" : "绑定失败，请稍后再试");
						}(), $.each(e, function() {
							this.init();
						});
				}
			};
		}();
	m.register("moresize", {
		init: function() {
			$("#more_size").click(function() {
				var e = $("#tpl_moresize").popup({
					title: "更多尺寸",
					width: 960,
					className: "more_size",
					data: {
						pixSet: [8, 12, 15, 30, 50],
						dist: [.5, .8, 1, 1.5, 2.5],
						qrcode: cgiData.links.qrcode
					},
					buttons: [{
						text: "关闭",
						click: function() {
							this.hide();
						},
						type: "primary"
					}],
					onHide: function() {
						this.remove();
					}
				});
				e.popup("show");
			});
		}
	}), m.register("username", {
		init: function() {
			$("#modifyNickName").click(function() {
				var e = {
					title: "修改名称",
					tplId: "#tpl_nickname",
					width: 960,
					className: "modify_nickName",
					init: function() {
						$("#modifyInput").blur(h.nickname);
					},
					done: function() {
						if (2 == cgiData.invadeType || 3 == cgiData.invadeType || 4 == cgiData.invadeType) window.location.href = wx.url("/cgi-bin/frame?t=setting/auth_frame&invadetype=" + cgiData.invadeType + "&nickname=" + encodeURIComponent(cgiData.checkNickname));
						else if (0 == cgiData.invadeType) {
							var e = this.get().find(".js_btn_p");
							if (p.submitting) return;
							e.eq(4).btn(!1), p.submitting = !0, s.post({
								url: "/cgi-bin/setuserinfo?action=nickname",
								data: {
									nick_name: cgiData.checkNickname,
									invade_type: 0
								},
								complete: function() {
									p.submitting = !1, e.eq(4).btn(!0);
								}
							}, function(e) {
								if (!e || !e.base_resp) return void t.err("系统错误，请稍后重试");
								var i = 1 * e.base_resp.ret;
								0 == i ? (t.suc("修改成功"), setTimeout(function() {
									window.location.reload(!0);
								}, 1e3)) : t.err(1004 == i ? "你填写的公众账号名称与已有认证公众账号名称重复" : "系统错误，请稍后重试");
							});
						}
					}
				};
				p.show(e);
			});
		}
	}), m.register("avatar", function() {
		var e, i, n, a, c, l, d, p, h, m, f = '<img class="round_img" src="' + cgiData.links.rimgcrop + '"/>',
			g = '<img class="round_white_img" src="' + cgiData.links.rimgcropwhite + '"/>',
			_ = ('<img class="round_img" src="' + cgiData.links.rimgcropframe + '"/>', {
				suc: function(s, a, r) {
					t.suc(s), e.find(".jcrop-holder").show(), $("#circleImgUpload").attr("src", cgiData.links.imgupload + "&share=circle&r=" + Math.random());
					var u = o.tmpFileUrl(a);
					c.attr("src", u), l.attr("src", u), d.attr("src", u), $(".round_img").css("display", "block"),
						m.setImage(u, function() {
							var t = m.getWidgetSize(),
								s = m.getBounds();
							m.ui.holder.css("margin", "0").css({
								margin: (e.height() - t[1]) / 2 + "px auto 0"
							}), $.extend(h, {
								fid: a,
								share: r,
								c: {},
								lar: {
									w: s[0],
									h: s[1]
								},
								mid: {
									w: i.width(),
									h: i.height()
								},
								sml: {
									w: n.width(),
									h: n.height()
								}
							});
							var o = h.lar.w || i.width();
							m.setSelect([0, 0, o, o]), p.enable();
						});
				},
				err: function(e) {
					W.err(e), y();
				}
			}),
			w = function() {
				e = $("#largeHeadImg"), i = $("#squareHeadImg"), n = $("#circleHeadImg").append(g), a = $('<img src="' + cgiData.links.spacer + '"/>').appendTo(e),
					c = $('<img class="square_img" id="uploadFileSrc" src="' + cgiData.links.spacer + '"/>').appendTo(i),
					l = $('<img class="circle_img" src="' + cgiData.links.spacer + '"/>').appendTo(n), d = $(".ensure_avatar_preview"),
					p = $("#saveAvatar"), p.enable = function() {
						p.removeClass("btnDisable").attr("disable", !1);
					}, p.disable = function() {
						p.addClass("btnDisable").attr("disable", !0);
					}, p.click(k).disable();
				var t = $("#settingArea"),
					s = $("#cropImgArea");
				s.data("class", s.attr("class")), $("#cancelSaveAvatar").click(function() {
					t.show(), s.hide().attr("class", s.data("class")), y();
				}), h = {
					fid: null,
					share: null,
					c: {},
					lar: {},
					mid: {
						w: c.width(),
						h: c.height()
					},
					sml: {
						w: l.width(),
						h: l.height()
					}
				}, a.Jcrop({
					onChange: x,
					onSelect: x,
					setSelect: [100, 100, 50, 50],
					createHandles: ["nw", "ne", "se", "sw"],
					aspectRatio: 1,
					boxWidth: e.width(),
					boxHeight: e.height()
				}, function() {
					m = this, e.find(".jcrop-holder").hide(), $(".jcrop-tracker", this.ui.selection).html(f),
						$(".jcrop-handle", this.ui.selection).css({
							width: "7px",
							height: "7px"
						});
				});
			},
			v = function() {
				r({
					container: $("#Js_uploadAvatar"),
					type: 7,
					share: "circle",
					multi: !1,
					compress: !1,
					onComplete: function(e, t, i, n) {
						if (n.base_resp) switch (+n.base_resp.ret) {
							case 0:
								_.suc("上传成功", n.content, "circle");
								break;

							case 1:
								_.err("图片太大，请重新上传");

							default:
								_.err("上传图片失败");
						}
					}
				});
			},
			b = !1,
			k = function() {
				var e = (h.share, h.fid),
					i = {
						fid: e
					};
				if (e) {
					var n, a = h.c,
						o = h.lar.w,
						r = h.lar.h;
					$.extend(i, {
						x1: a.x / o,
						y1: a.y / r,
						x2: a.x2 / o,
						y2: a.y2 / r,
						width: Math.floor(a.w),
						height: Math.floor(a.h),
						x: Math.floor(a.x),
						y: Math.floor(a.y)
					}), n = wx.url("/misc/cropimg?t=ajax-response"), 1 != b && (b = !0, s.post({
						url: n,
						data: i,
						mask: !1
					}, function(e) {
						e && 0 == e.ret ? (t.suc("保存成功"), location.reload(!0)) : (b = !1, t.err("保存失败"), p.enable());
					}));
				}
			},
			x = function(e) {
				if (parseInt(e.w) > 0) {
					var t = h.lar.w,
						i = h.lar.h,
						n = h.mid.w / e.w,
						s = h.mid.h / e.h;
					c.css({
						width: Math.round(n * t) + "px",
						height: Math.round(s * i) + "px",
						marginLeft: "-" + Math.round(n * e.x) + "px",
						marginTop: "-" + Math.round(s * e.y) + "px"
					}), d.css({
						width: Math.round(n * t) + "px",
						height: Math.round(s * i) + "px",
						marginLeft: "-" + Math.round(n * e.x) + "px",
						marginTop: "-" + Math.round(s * e.y) + "px"
					}), n = h.sml.w / e.w, s = h.sml.h / e.h, l.css({
						width: Math.round(n * t) + "px",
						height: Math.round(s * i) + "px",
						marginLeft: "-" + Math.round(n * e.x) + "px",
						marginTop: "-" + Math.round(s * e.y) + "px"
					}), h.c = e;
				}
			},
			y = function() {
				$("#squareImgUpload").attr("src", cgiData.links.imgupload + "&share=square"), $("#circleImgUpload").attr("src", cgiData.links.imgupload + "&share=circle");
			};
		return {
			init: function() {
				$("#changeHeadImg").click(function() {
					var e = {
						title: "修改头像",
						tplId: "#tpl_avatar",
						init: w,
						agreeInit: v,
						width: 960,
						className: "change_avatar",
						done: function() {
							$("#saveAvatar").trigger("click");
						}
					};
					u.show(e);
				});
			}
		};
	}());
	var f = !1;
	m.register("userinfo", function() {
		var e = "/cgi-bin/setuserinfo?action=intro&t=ajax-response",
			i = function() {
				var i = $.trim($("#modifyInput").val().replace(/\s/g, " "));
				if (i.length > 140) return t.err("用户信息不能超过140个字"), !0;
				var n = {};
				n.intro = i, 1 != f && (f = !0, s.post({
					url: wx.url(e),
					data: n,
					mask: !1
				}, function(e) {
					if (!e || !e.base_resp) return f = !1, void t.err("提交失败");
					var i = 1 * e.base_resp.ret;
					if (0 != i) {
						switch (i) {
							case 62005:
								t.err("你已经是认证用户了");
								break;

							case 62006:
								t.err("提交失败");
								break;

							case 65202:
								$("#error_tip").text("不能含有虚假的、冒充、利用他人名义的、容易构成混淆、误认的、法律、法规和政策禁止的内容").show();
								break;

							default:
								t.err("提交失败");
						}
						return !0;
					}
					t.suc("提交成功"), location.reload(!0);
				}));
			};
		return {
			init: function() {
				$("#modifyUserInfo").click(function() {
					var e = {
						title: "修改功能介绍",
						tplId: "#tpl_intro",
						width: 960,
						className: "modify_intro label_block",
						init: function() {
							$("#modifyInput").blur(h.intro);
						},
						done: i
					};
					u.show(e);
				});
			}
		};
	}()), m.register("wechatid", function() {
		var e, i, n, o, r, c = function() {
				i.eq(0).hasClass("btn_primary") && (n.setStep(2), i.hide(), i.eq(1).show(), i.eq(2).show(),
					o.hide(), r.find(".js_modAliasShow").text("微信号：" + e), r.find(".js_aliasToBe").text(e),
					r.show());
			},
			l = function() {
				n.setStep(1), i.hide(), i.eq(0).show(), r.hide(), o.show();
			},
			d = function() {
				s.post({
					url: wx.url("/cgi-bin/setuserinfo?action=set_alias&cgi=setuserinfo&t=ajax-response&alias=" + encodeURIComponent(e)),
					mask: !1
				}, function(e) {
					if (!e || !e.base_resp) return void t.err("微信号设置失败，请稍后重试");
					var i = 1 * e.base_resp.ret;
					if (0 == i) t.suc("微信号设置成功"), location.reload();
					else switch (-1 == i && (i = 62004), i) {
						case 62001:
							t.err("微信号设置失败");
							break;

						case 62002:
							t.err("微信号包含非法字符");
							break;

						case 62003:
							t.err("公众号已经设置了微信号，不能再次设置");
							break;

						case 62004:
							t.err("你设置的微信号已存在，请重新设置");
							break;

						default:
							t.err("系统错误，请稍后重试");
					}
				});
			};
		return {
			init: function() {
				$("#setWeChatID").click(function() {
					var p = $("#tpl_wechatid").popup({
						title: "设置微信号",
						width: 960,
						className: "wx_account align_edge simple",
						buttons: [{
							text: "下一步",
							click: c,
							type: "disabled"
						}, {
							text: "上一步",
							click: l
						}, {
							text: "完成",
							click: d,
							type: "primary"
						}],
						onHide: function() {
							this.remove();
						}
					});
					i = p.popup("get").find(".js_btn_p").hide();
					var u = i.eq(0).show(),
						h = p.find(".js_checkStatus");
					n = new a({
						container: p.find(".js_process"),
						selected: 1,
						names: ["1 检测有效微信号", "2 确认设置"]
					}), o = p.find(".js_step1"), r = p.find(".js_step2"), p.popup("show"), cgiData.nickname && (p.find(".js_pre_nick").text(cgiData.nickname),
						p.find(".js_pre_nickname").text("昵称：" + cgiData.nickname)), cgiData.intro && (cgiData.intro = cgiData.intro.replace(/&nbsp;/g, " "),
						p.find(".js_pre_intro").text(cgiData.intro)), cgiData.headimg && p.find(".js_pre_headimg").find("img").attr("src", cgiData.headimg);
					var m = p.find(".js_modAliasShow"),
						f = p.find(".js_checkAliasBtn"),
						g = $("#js_modAliasInput");
					g.on("keyup propertychange", function() {
						var e = $(this).val().trim();
						m.text("微信号：" + e), h.hide(), u.removeClass("btn_primary").addClass("btn_disabled");
					}), f.on("click", function() {
						var i = $(this),
							n = i.parent(),
							a = n.find(".js_checkStatus"),
							o = n.find(".js_good"),
							r = n.find(".js_warn"),
							c = g.val().trim();
						return i.attr("disabled") ? !1 : (a.hide(), i.btn(!1), void(c && /^[\da-z\_-]{6,20}$/i.test(c) && /^[a-z]/i.test(c) ? s.post({
							url: wx.url("/cgi-bin/setuserinfo?action=check_alias&cgi=setuserinfo&t=ajax-response&alias=" + encodeURIComponent(c)),
							mask: !1
						}, function(n) {
							if (!n || !n.base_resp) return void t.err("微信号设置失败，请稍后重试");
							var s = 1 * n.base_resp.ret;
							if (0 == s) e = c, i.btn(!0), o.show(), u.removeClass("btn_disabled").addClass("btn_primary");
							else switch (-1 == s && (s = 62004),
								s) {
								case 62001:
									i.btn(!0), r.text("微信号设置失败").show();
									break;

								case 62002:
									i.btn(!0), r.text("微信微信号包含非法字符号设置失败").show();
									break;

								case 62003:
									i.btn(!0), r.text("公众号已经设置了微信号，不能再次设置").show();
									break;

								case 62004:
									i.btn(!0), r.text("你设置的微信号已存在，请重新设置").show();
									break;

								default:
									i.btn(!0), r.text("微信号设置失败，请稍后重试").show();
							}
						}) : (i.btn(!0), r.text("可以使用6~20个字母、数字、下划线和减号，必须以字母开头。").show())));
					});
				});
			}
		};
	}()), m.register("authentication", {
		init: function() {
			var e = 26,
				i = cgiData.isNeedVerify;
			$("#Js_authentication").on("click", function() {
				$("#tpl_authentication").popup({
					title: "身份验证",
					onOK: function() {
						var e = this.get().find(".js_btn").eq(0),
							n = $.trim($("#Js_question").find("input").val());
						return -1 == i ? (t.err("请选择一项"), !0) : 1 == i && "" == n ? (t.err("验证问题不能为空"), !0) : n.length > 26 ? (t.err("验证问题不能超过26个字"), !0) : (s.post({
							url: wx.url("/cgi-bin/setuserinfo?t=ajax-response"),
							data: {
								action: "meetingsettings",
								need_verify: i,
								verify_question: $("#Js_question").find("input").val()
							},
							beforeSend: function() {
								e.btn(0);
							},
							error: function() {
								t.err("系统错误，请重试"), e.btn(1);
							}
						}, function(i) {
							return e.btn(1), i && i.base_resp ? void(0 == i.base_resp.ret ? (t.suc("设置成功"), location.reload()) : t.err("设置失败")) : void t.err("设置失败");
						}), !0);
					},
					onCancel: function() {
						this.hide();
					},
					onHide: function() {
						$("#Js_question").remove(), this.remove();
					}
				}), $("#Js_question").find("input").val(cgiData.question.html(!1)), $(".Js_authenticationRadio").checkbox({
					multi: !1,
					onChanged: function(e) {
						i = e.val(), "Js_needAuth" == e.attr("id") ? $("#Js_question").show() : $("#Js_question").hide();
					}
				}), $("#Js_question").find("i").on("click", function() {
					var e = $("#Js_question").find("ul");
					return e.hasClass("dn") ? e.show(100).toggleClass("dn") : e.hide(100).toggleClass("dn"),
						$(this).toggleClass("select_icon_up").toggleClass("select_icon_down"), !1;
				}), $(document).on("click", function() {
					$("#Js_question").find("ul").hide(100).addClass("dn"), $("#Js_question").find("i").removeClass("select_icon_up").addClass("select_icon_down");
				}), $("#Js_question").on("click", "li", function() {
					var e = $(this).text();
					$("#Js_question").find("input").val(e).focus();
				}), $("#Js_question").find("input").on("focus", function() {
					$("#Js_wordNum").show().text(26 - $(this).val().length);
				}).on("blur", function() {
					$("#Js_wordNum").hide();
				}).on("keyup", function() {
					$("#Js_wordNum").text(26 - $(this).val().length);
				}).on("keydown", function(t) {
					if (!t.ctrlKey) switch (t.keyCode) {
						case 8:
						case 13:
						case 37:
						case 38:
						case 39:
						case 40:
						case 46:
							break;

						default:
							$(this).val().length >= e && t.preventDefault();
					}
				}).on("paste", function(e) {
					var t = "";
					return window.clipboardData && clipboardData.getData ? t = clipboardData.getData("Text") : e.originalEvent.clipboardData && (t = e.originalEvent.clipboardData.getData("text/plain")),
						$(this).val(($(this).val() + t).substr(0, 26)), !t;
				});
			});
		}
	}), m.register("customerServicePhone", {
		init: function() {
			$.validator.addMethod("phone", function(e) {
				return e = $.trim(e), "" === e || /^\d+$/.test(e) || /^\d{1,4}(-\d{1,12})+$/.test(e);
			}, "请输入正确的手机号码");
			var e = $("#tpl_customerServicePhone").popup({
				title: "修改客服电话",
				width: 960,
				height: 609,
				className: "simple customer_phone",
				autoShow: !1,
				data: {
					phone: cgiData.service_phone
				},
				onOK: function() {
					if ($("#customerServiceForm").valid()) {
						var e = $.trim($("#customerServicePhone").val());
						s.post({
							url: "/cgi-bin/setuserinfo?t=ajax-response",
							data: {
								action: "servicephone",
								phonenumber: e
							}
						}, function(e) {
							if (!e || !e.base_resp) return void t.err("设置失败，请稍后再试");
							switch (+e.base_resp.ret) {
								case 0:
									t.suc("设置成功"), location.reload();
									break;

								case -2:
									t.err("所填写的电话号码格式不正确，请重新输入");
									break;

								case -1:
									t.err("设置失败，请稍后再试");
							}
						});
					}
					return !0;
				},
				onCancel: function() {
					this.hide();
				}
			});
			$("#js_customerServicePhone").on("click", function() {
				return e.popup("show"), !1;
			});
			var i = cgiData.service_phone,
				n = $("#phone_number_copy");
			$("#customerServicePhone").on("keyup input blur propertychange", function() {
				var e = $(this),
					t = $.trim(e.val()).html(!0);
				i != t && (i = t ? t : "&nbsp;", n.html(i));
			}), $("#customerServiceForm").validate({
				rules: {
					phone: {
						required: 1 == cgiData.can_use_merchant ? !0 : !1,
						phone: !0
					}
				},
				messages: {
					phone: {
						required: "你已开通微信支付，必须设置客服电话。",
						phone: "所填写的电话号码格式不正确"
					}
				},
				errorPlacement: function(e, t) {
					var i = t.parent().parent();
					i.find(".fail").remove(), e.insertBefore(i.find(".frm_tips").eq(0));
				}
			});
		}
	}), m.init();
});
(function(e) {
e.Jcrop = function(t, n) {
function r(e) {
return Math.round(e) + "px";
}
function i(e) {
return P.baseClass + "-" + e;
}
function s() {
return e.fx.step.hasOwnProperty("backgroundColor");
}
function o(t) {
var n = e(t).offset();
return [ n.left, n.top ];
}
function u(e) {
return [ e.pageX - H[0], e.pageY - H[1] ];
}
function a(t) {
typeof t != "object" && (t = {}), P = e.extend(P, t), e.each([ "onChange", "onSelect", "onRelease", "onDblClick" ], function(e, t) {
typeof P[t] != "function" && (P[t] = function() {});
});
}
function f(e, t, n) {
H = o(z), vt.setCursor(e === "move" ? e : e + "-resize");
if (e === "move") return vt.activateHandlers(c(t), m, n);
var r = ht.getFixed(), i = h(e), s = ht.getCorner(h(i));
ht.setPressed(ht.getCorner(i)), ht.setCurrent(s), vt.activateHandlers(l(e, r), m, n);
}
function l(e, t) {
return function(n) {
if (!P.aspectRatio) switch (e) {
case "e":
n[1] = t.y2;
break;
case "w":
n[1] = t.y2;
break;
case "n":
n[0] = t.x2;
break;
case "s":
n[0] = t.x2;
} else switch (e) {
case "e":
n[1] = t.y + 1;
break;
case "w":
n[1] = t.y + 1;
break;
case "n":
n[0] = t.x + 1;
break;
case "s":
n[0] = t.x + 1;
}
ht.setCurrent(n), dt.update();
};
}
function c(e) {
var t = e;
return mt.watchKeys(), function(e) {
ht.moveOffset([ e[0] - t[0], e[1] - t[1] ]), t = e, dt.update();
};
}
function h(e) {
switch (e) {
case "n":
return "sw";
case "s":
return "nw";
case "e":
return "nw";
case "w":
return "ne";
case "ne":
return "sw";
case "nw":
return "se";
case "se":
return "nw";
case "sw":
return "ne";
}
}
function p(e) {
return function(t) {
return P.disabled ? !1 : e === "move" && !P.allowMove ? !1 : (H = o(z), at = !0, f(e, u(t)), t.stopPropagation(), t.preventDefault(), !1);
};
}
function d(e, t, n) {
var r = e.width(), i = e.height();
r > t && t > 0 && (r = t, i = t / e.width() * e.height()), i > n && n > 0 && (i = n, r = n / e.height() * e.width()), st = e.width() / r, ot = e.height() / i, e.width(r).height(i);
}
function v(e) {
return {
x: e.x * st,
y: e.y * ot,
x2: e.x2 * st,
y2: e.y2 * ot,
w: e.w * st,
h: e.h * ot
};
}
function m(e) {
var t = ht.getFixed();
t.w > P.minSelect[0] && t.h > P.minSelect[1] ? (dt.enableHandles(), dt.done()) : dt.release(), vt.setCursor(P.allowSelect ? "crosshair" : "default");
}
function g(e) {
if (P.disabled) return !1;
if (!P.allowSelect) return !1;
at = !0, H = o(z), dt.disableHandles(), vt.setCursor("crosshair");
var t = u(e);
return ht.setPressed(t), dt.update(), vt.activateHandlers(y, m, e.type.substring(0, 5) === "touch"), mt.watchKeys(), e.stopPropagation(), e.preventDefault(), !1;
}
function y(e) {
ht.setCurrent(e), dt.update();
}
function b() {
var t = e("<div></div>").addClass(i("tracker"));
return j && t.css({
opacity: 0,
backgroundColor: "white"
}), t;
}
function w(e) {
V.removeClass().addClass(i("holder")).addClass(e);
}
function E(e, t) {
function n() {
window.setTimeout(b, c);
}
var r = e[0] / st, i = e[1] / ot, s = e[2] / st, o = e[3] / ot;
if (ft) return;
var u = ht.flipCoords(r, i, s, o), a = ht.getFixed(), f = [ a.x, a.y, a.x2, a.y2 ], l = f, c = P.animationDelay, h = u[0] - f[0], p = u[1] - f[1], d = u[2] - f[2], v = u[3] - f[3], m = 0, g = P.swingSpeed;
r = l[0], i = l[1], s = l[2], o = l[3], dt.animMode(!0);
var y, b = function() {
return function() {
m += (100 - m) / g, l[0] = Math.round(r + m / 100 * h), l[1] = Math.round(i + m / 100 * p), l[2] = Math.round(s + m / 100 * d), l[3] = Math.round(o + m / 100 * v), m >= 99.8 && (m = 100), m < 100 ? (x(l), n()) : (dt.done(), dt.animMode(!1), typeof t == "function" && t.call(gt));
};
}();
n();
}
function S(e) {
x([ e[0] / st, e[1] / ot, e[2] / st, e[3] / ot ]), P.onSelect.call(gt, v(ht.getFixed())), dt.enableHandles();
}
function x(e) {
ht.setPressed([ e[0], e[1] ]), ht.setCurrent([ e[2], e[3] ]), dt.update();
}
function T() {
return v(ht.getFixed());
}
function N() {
return ht.getFixed();
}
function C(e) {
a(e), D();
}
function k() {
P.disabled = !0, dt.disableHandles(), dt.setCursor("default"), vt.setCursor("default");
}
function L() {
P.disabled = !1, D();
}
function A() {
dt.done(), vt.activateHandlers(null, null);
}
function O() {
V.remove(), q.show(), q.css("visibility", "visible"), e(t).removeData("Jcrop");
}
function M(e, t) {
dt.release(), k();
var n = new Image;
n.onload = function() {
var r = n.width, i = n.height, s = P.boxWidth, o = P.boxHeight;
z.width(r).height(i), z.attr("src", e), $.attr("src", e), d(z, s, o), W = z.width(), X = z.height(), $.width(W).height(X), Y.width(W + G * 2).height(X + G * 2), V.width(W).height(X), pt.resize(W, X), L(), typeof t == "function" && t.call(gt);
}, n.src = e;
}
function _(e, t, n) {
var r = t || P.bgColor;
P.bgFade && s() && P.fadeTime && !n ? e.animate({
backgroundColor: r
}, {
queue: !1,
duration: P.fadeTime
}) : e.css("backgroundColor", r);
}
function D(e) {
P.allowResize ? e ? dt.enableOnly() : dt.enableHandles() : dt.disableHandles(), vt.setCursor(P.allowSelect ? "crosshair" : "default"), dt.setCursor(P.allowMove ? "move" : "default"), P.hasOwnProperty("trueSize") && (st = P.trueSize[0] / W, ot = P.trueSize[1] / X), P.hasOwnProperty("setSelect") && (S(P.setSelect), dt.done(), delete P.setSelect), pt.refresh(), P.bgColor != Z && (_(P.shade ? pt.getShades() : V, P.shade ? P.shadeColor || P.bgColor : P.bgColor), Z = P.bgColor), et != P.bgOpacity && (et = P.bgOpacity, P.shade ? pt.refresh() : dt.setBgOpacity(et)), tt = P.maxSize[0] || 0, nt = P.maxSize[1] || 0, rt = P.minSize[0] || 0, it = P.minSize[1] || 0, P.hasOwnProperty("outerImage") && (z.attr("src", P.outerImage), delete P.outerImage), dt.refresh();
}
var P = e.extend({}, e.Jcrop.defaults), H, B = navigator.userAgent.toLowerCase(), j = /msie/.test(B), F = /msie [1-6]\./.test(B);
typeof t != "object" && (t = e(t)[0]), typeof n != "object" && (n = {}), a(n);
var I = {
border: "none",
visibility: "visible",
margin: 0,
padding: 0,
position: "absolute",
top: 0,
left: 0
}, q = e(t), R = !0;
if (t.tagName == "IMG") {
if (q[0].width != 0 && q[0].height != 0) q.width(q[0].width), q.height(q[0].height); else {
var U = new Image;
U.src = q[0].src, q.width(U.width), q.height(U.height);
}
var z = q.clone().removeAttr("id").css(I).show();
z.width(q.width()), z.height(q.height()), q.after(z).hide();
} else z = q.css(I).show(), R = !1, P.shade === null && (P.shade = !0);
d(z, P.boxWidth, P.boxHeight);
var W = z.width(), X = z.height(), V = e("<div />").width(W).height(X).addClass(i("holder")).css({
position: "relative",
backgroundColor: P.bgColor
}).insertAfter(q).append(z);
P.addClass && V.addClass(P.addClass);
var $ = e("<div />"), J = e("<div />").width("100%").height("100%").css({
zIndex: 310,
position: "absolute",
overflow: "hidden"
}), K = e("<div />").width("100%").height("100%").css("zIndex", 320), Q = e("<div />").css({
position: "absolute",
zIndex: 600
}).dblclick(function() {
var e = ht.getFixed();
P.onDblClick.call(gt, e);
}).insertBefore(z).append(J, K);
R && ($ = e("<img />").attr("src", z.attr("src")).css(I).width(W).height(X), J.append($)), F && Q.css({
overflowY: "hidden"
});
var G = P.boundary, Y = b().width(W + G * 2).height(X + G * 2).css({
position: "absolute",
top: r(-G),
left: r(-G),
zIndex: 290
}).mousedown(g), Z = P.bgColor, et = P.bgOpacity, tt, nt, rt, it, st, ot, ut = !0, at, ft, lt;
H = o(z);
var ct = function() {
function e() {
var e = {}, t = [ "touchstart", "touchmove", "touchend" ], n = document.createElement("div"), r;
try {
for (r = 0; r < t.length; r++) {
var i = t[r];
i = "on" + i;
var s = i in n;
s || (n.setAttribute(i, "return;"), s = typeof n[i] == "function"), e[t[r]] = s;
}
return e.touchstart && e.touchend && e.touchmove;
} catch (o) {
return !1;
}
}
function t() {
return P.touchSupport === !0 || P.touchSupport === !1 ? P.touchSupport : e();
}
return {
createDragger: function(e) {
return function(t) {
return P.disabled ? !1 : e === "move" && !P.allowMove ? !1 : (H = o(z), at = !0, f(e, u(ct.cfilter(t)), !0), t.stopPropagation(), t.preventDefault(), !1);
};
},
newSelection: function(e) {
return g(ct.cfilter(e));
},
cfilter: function(e) {
return e.pageX = e.originalEvent.changedTouches[0].pageX, e.pageY = e.originalEvent.changedTouches[0].pageY, e;
},
isSupported: e,
support: t()
};
}(), ht = function() {
function e(e) {
e = o(e), h = l = e[0], p = c = e[1];
}
function t(e) {
e = o(e), d = e[0] - h, v = e[1] - p, h = e[0], p = e[1];
}
function n() {
return [ d, v ];
}
function r(e) {
var t = e[0], n = e[1];
0 > l + t && (t -= t + l), 0 > c + n && (n -= n + c), X < p + n && (n += X - (p + n)), W < h + t && (t += W - (h + t)), l += t, h += t, c += n, p += n;
}
function i(e) {
var t = s();
switch (e) {
case "ne":
return [ t.x2, t.y ];
case "nw":
return [ t.x, t.y ];
case "se":
return [ t.x2, t.y2 ];
case "sw":
return [ t.x, t.y2 ];
}
}
function s() {
if (!P.aspectRatio) return a();
var e = P.aspectRatio, t = P.minSize[0] / st, n = P.maxSize[0] / st, r = P.maxSize[1] / ot, i = h - l, s = p - c, o = Math.abs(i), d = Math.abs(s), v = o / d, m, g, y, b;
return n === 0 && (n = W * 10), r === 0 && (r = X * 10), v < e ? (g = p, y = d * e, m = i < 0 ? l - y : y + l, m < 0 ? (m = 0, b = Math.abs((m - l) / e), g = s < 0 ? c - b : b + c) : m > W && (m = W, b = Math.abs((m - l) / e), g = s < 0 ? c - b : b + c)) : (m = h, b = o / e, g = s < 0 ? c - b : c + b, g < 0 ? (g = 0, y = Math.abs((g - c) * e), m = i < 0 ? l - y : y + l) : g > X && (g = X, y = Math.abs(g - c) * e, m = i < 0 ? l - y : y + l)), m > l ? (m - l < t ? m = l + t : m - l > n && (m = l + n), g > c ? g = c + (m - l) / e : g = c - (m - l) / e) : m < l && (l - m < t ? m = l - t : l - m > n && (m = l - n), g > c ? g = c + (l - m) / e : g = c - (l - m) / e), m < 0 ? (l -= m, m = 0) : m > W && (l -= m - W, m = W), g < 0 ? (c -= g, g = 0) : g > X && (c -= g - X, g = X), f(u(l, c, m, g));
}
function o(e) {
return e[0] < 0 && (e[0] = 0), e[1] < 0 && (e[1] = 0), e[0] > W && (e[0] = W), e[1] > X && (e[1] = X), [ Math.round(e[0]), Math.round(e[1]) ];
}
function u(e, t, n, r) {
var i = e, s = n, o = t, u = r;
return n < e && (i = n, s = e), r < t && (o = r, u = t), [ i, o, s, u ];
}
function a() {
var e = h - l, t = p - c, n;
return tt && Math.abs(e) > tt && (h = e > 0 ? l + tt : l - tt), nt && Math.abs(t) > nt && (p = t > 0 ? c + nt : c - nt), it / ot && Math.abs(t) < it / ot && (p = t > 0 ? c + it / ot : c - it / ot), rt / st && Math.abs(e) < rt / st && (h = e > 0 ? l + rt / st : l - rt / st), l < 0 && (h -= l, l -= l), c < 0 && (p -= c, c -= c), h < 0 && (l -= h, h -= h), p < 0 && (c -= p, p -= p), h > W && (n = h - W, l -= n, h -= n), p > X && (n = p - X, c -= n, p -= n), l > W && (n = l - X, p -= n, c -= n), c > X && (n = c - X, p -= n, c -= n), f(u(l, c, h, p));
}
function f(e) {
return {
x: e[0],
y: e[1],
x2: e[2],
y2: e[3],
w: e[2] - e[0],
h: e[3] - e[1]
};
}
var l = 0, c = 0, h = 0, p = 0, d, v;
return {
flipCoords: u,
setPressed: e,
setCurrent: t,
getOffset: n,
moveOffset: r,
getCorner: i,
getFixed: s
};
}(), pt = function() {
function t(e, t) {
d.left.css({
height: r(t)
}), d.right.css({
height: r(t)
});
}
function n() {
return i(ht.getFixed());
}
function i(e) {
d.top.css({
left: r(e.x),
width: r(e.w),
height: r(e.y)
}), d.bottom.css({
top: r(e.y2),
left: r(e.x),
width: r(e.w),
height: r(X - e.y2)
}), d.right.css({
left: r(e.x2),
width: r(W - e.x2)
}), d.left.css({
width: r(e.x)
});
}
function s() {
return e("<div />").css({
position: "absolute",
backgroundColor: P.shadeColor || P.bgColor
}).appendTo(p);
}
function o() {
h || (h = !0, p.insertBefore(z), n(), dt.setBgOpacity(1, 0, 1), $.hide(), u(P.shadeColor || P.bgColor, 1), dt.isAwake() ? f(P.bgOpacity, 1) : f(1, 1));
}
function u(e, t) {
_(c(), e, t);
}
function a() {
h && (p.remove(), $.show(), h = !1, dt.isAwake() ? dt.setBgOpacity(P.bgOpacity, 1, 1) : (dt.setBgOpacity(1, 1, 1), dt.disableHandles()), _(V, 0, 1));
}
function f(e, t) {
h && (P.bgFade && !t ? p.animate({
opacity: 1 - e
}, {
queue: !1,
duration: P.fadeTime
}) : p.css({
opacity: 1 - e
}));
}
function l() {
P.shade ? o() : a(), dt.isAwake() && f(P.bgOpacity);
}
function c() {
return p.children();
}
var h = !1, p = e("<div />").css({
position: "absolute",
zIndex: 240,
opacity: 0
}), d = {
top: s(),
left: s().height(X),
right: s().height(X),
bottom: s()
};
return {
update: n,
updateRaw: i,
getShades: c,
setBgColor: u,
enable: o,
disable: a,
resize: t,
refresh: l,
opacity: f
};
}(), dt = function() {
function t(t) {
var n = e("<div />").css({
position: "absolute",
opacity: P.borderOpacity
}).addClass(i(t));
return J.append(n), n;
}
function n(t, n) {
var r = e("<div />").mousedown(p(t)).css({
cursor: t + "-resize",
position: "absolute",
zIndex: n
}).addClass("ord-" + t);
return ct.support && r.bind("touchstart.jcrop", ct.createDragger(t)), K.append(r), r;
}
function s(e) {
var t = P.handleSize, r = n(e, k++).css({
opacity: P.handleOpacity
}).addClass(i("handle"));
return t && r.width(t).height(t), r;
}
function o(e) {
return n(e, k++).addClass("jcrop-dragbar");
}
function u(e) {
var t;
for (t = 0; t < e.length; t++) O[e[t]] = o(e[t]);
}
function a(e) {
var n, r;
for (r = 0; r < e.length; r++) {
switch (e[r]) {
case "n":
n = "hline";
break;
case "s":
n = "hline bottom";
break;
case "e":
n = "vline right";
break;
case "w":
n = "vline";
}
L[e[r]] = t(n);
}
}
function f(e) {
var t;
for (t = 0; t < e.length; t++) A[e[t]] = s(e[t]);
}
function l(e, t) {
P.shade || $.css({
top: r(-t),
left: r(-e)
}), Q.css({
top: r(t),
left: r(e)
});
}
function c(e, t) {
Q.width(Math.round(e)).height(Math.round(t));
}
function h() {
var e = ht.getFixed();
ht.setPressed([ e.x, e.y ]), ht.setCurrent([ e.x2, e.y2 ]), d();
}
function d(e) {
if (C) return m(e);
}
function m(e) {
var t = ht.getFixed();
c(t.w, t.h), l(t.x, t.y), P.shade && pt.updateRaw(t), C || y(), e ? P.onSelect.call(gt, v(t)) : P.onChange.call(gt, v(t));
}
function g(e, t, n) {
if (!C && !t) return;
P.bgFade && !n ? z.animate({
opacity: e
}, {
queue: !1,
duration: P.fadeTime
}) : z.css("opacity", e);
}
function y() {
Q.show(), P.shade ? pt.opacity(et) : g(et, !0), C = !0;
}
function w() {
x(), Q.hide(), P.shade ? pt.opacity(1) : g(1), C = !1, P.onRelease.call(gt);
}
function E() {
M && K.show();
}
function S() {
M = !0;
if (P.allowResize) return K.show(), !0;
}
function x() {
M = !1, K.hide();
}
function T(e) {
e ? (ft = !0, x()) : (ft = !1, S());
}
function N() {
T(!1), h();
}
var C, k = 370, L = {}, A = {}, O = {}, M = !1;
P.dragEdges && e.isArray(P.createDragbars) && u(P.createDragbars), e.isArray(P.createHandles) && f(P.createHandles), P.drawBorders && e.isArray(P.createBorders) && a(P.createBorders), e(document).bind("touchstart.jcrop-ios", function(t) {
e(t.currentTarget).hasClass("jcrop-tracker") && t.stopPropagation();
});
var _ = b().mousedown(p("move")).css({
cursor: "move",
position: "absolute",
zIndex: 360
});
return ct.support && _.bind("touchstart.jcrop", ct.createDragger("move")), J.append(_), x(), {
updateVisible: d,
update: m,
release: w,
refresh: h,
isAwake: function() {
return C;
},
setCursor: function(e) {
_.css("cursor", e);
},
enableHandles: S,
enableOnly: function() {
M = !0;
},
showHandles: E,
disableHandles: x,
animMode: T,
setBgOpacity: g,
done: N
};
}(), vt = function() {
function t(t) {
Y.css({
zIndex: 450
}), t ? e(document).bind("touchmove.jcrop", o).bind("touchend.jcrop", a) : h && e(document).bind("mousemove.jcrop", r).bind("mouseup.jcrop", i);
}
function n() {
Y.css({
zIndex: 290
}), e(document).unbind(".jcrop");
}
function r(e) {
return l(u(e)), !1;
}
function i(e) {
return e.preventDefault(), e.stopPropagation(), at && (at = !1, c(u(e)), dt.isAwake() && P.onSelect.call(gt, v(ht.getFixed())), n(), l = function() {}, c = function() {}), !1;
}
function s(e, n, r) {
return at = !0, l = e, c = n, t(r), !1;
}
function o(e) {
return l(u(ct.cfilter(e))), !1;
}
function a(e) {
return i(ct.cfilter(e));
}
function f(e) {
Y.css("cursor", e);
}
var l = function() {}, c = function() {}, h = P.trackDocument;
return h || Y.mousemove(r).mouseup(i).mouseout(i), z.before(Y), {
activateHandlers: s,
setCursor: f
};
}(), mt = function() {
function t() {
P.keySupport && (s.show(), s.focus());
}
function n(e) {
s.hide();
}
function r(e, t, n) {
P.allowMove && (ht.moveOffset([ t, n ]), dt.updateVisible(!0)), e.preventDefault(), e.stopPropagation();
}
function i(e) {
if (e.ctrlKey || e.metaKey) return !0;
lt = e.shiftKey ? !0 : !1;
var t = lt ? 10 : 1;
switch (e.keyCode) {
case 37:
r(e, -t, 0);
break;
case 39:
r(e, t, 0);
break;
case 38:
r(e, 0, -t);
break;
case 40:
r(e, 0, t);
break;
case 27:
P.allowSelect && dt.release();
break;
case 9:
return !0;
}
return !1;
}
var s = e('<input type="radio" />').css({
position: "fixed",
left: "-120px",
width: "12px"
}).addClass("jcrop-keymgr"), o = e("<div />").css({
position: "absolute",
overflow: "hidden"
}).append(s);
return P.keySupport && (s.keydown(i).blur(n), F || !P.fixedSupport ? (s.css({
position: "absolute",
left: "-20px"
}), o.append(s).insertBefore(z)) : s.insertBefore(z)), {
watchKeys: t
};
}();
ct.support && Y.bind("touchstart.jcrop", ct.newSelection), K.hide(), D(!0);
var gt = {
setImage: M,
animateTo: E,
setSelect: S,
setOptions: C,
tellSelect: T,
tellScaled: N,
setClass: w,
disable: k,
enable: L,
cancel: A,
release: dt.release,
destroy: O,
focus: mt.watchKeys,
getBounds: function() {
return [ W * st, X * ot ];
},
getWidgetSize: function() {
return [ W, X ];
},
getScaleFactor: function() {
return [ st, ot ];
},
getOptions: function() {
return P;
},
ui: {
holder: V,
selection: Q
}
};
return j && V.bind("selectstart", function() {
return !1;
}), q.data("Jcrop", gt), gt;
}, e.fn.Jcrop = function(t, n) {
var r;
return this.each(function() {
if (e(this).data("Jcrop")) {
if (t === "api") return e(this).data("Jcrop");
e(this).data("Jcrop").setOptions(t);
} else this.tagName == "IMG" ? e.Jcrop.Loader(this, function() {
e(this).css({
display: "block",
visibility: "hidden"
}), r = e.Jcrop(this, t), e.isFunction(n) && n.call(r);
}) : (e(this).css({
display: "block",
visibility: "hidden"
}), r = e.Jcrop(this, t), e.isFunction(n) && n.call(r));
}), this;
}, e.Jcrop.Loader = function(t, n, r) {
function i() {
o.complete ? (s.unbind(".jcloader"), e.isFunction(n) && n.call(o)) : window.setTimeout(i, 50);
}
var s = e(t), o = s[0];
s.bind("load.jcloader", i).bind("error.jcloader", function(t) {
s.unbind(".jcloader"), e.isFunction(r) && r.call(o);
}), o.complete && e.isFunction(n) && (s.unbind(".jcloader"), n.call(o));
}, e.Jcrop.defaults = {
allowSelect: !0,
allowMove: !0,
allowResize: !0,
trackDocument: !0,
baseClass: "jcrop",
addClass: null,
bgColor: "black",
bgOpacity: .6,
bgFade: !1,
borderOpacity: .4,
handleOpacity: .5,
handleSize: null,
aspectRatio: 0,
keySupport: !0,
createHandles: [ "n", "s", "e", "w", "nw", "ne", "se", "sw" ],
createDragbars: [ "n", "s", "e", "w" ],
createBorders: [ "n", "s", "e", "w" ],
drawBorders: !0,
dragEdges: !0,
fixedSupport: !0,
touchSupport: null,
shade: null,
boxWidth: 0,
boxHeight: 0,
boundary: 2,
fadeTime: 400,
animationDelay: 20,
swingSpeed: 3,
minSelect: [ 0, 0 ],
maxSize: [ 0, 0 ],
minSize: [ 0, 0 ],
onChange: function() {},
onSelect: function() {},
onDblClick: function() {},
onRelease: function() {}
};
})(jQuery);