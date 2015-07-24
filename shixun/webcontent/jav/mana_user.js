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
define("tpl/searchInput.html.js", [], function() {
	return '<span class="frm_input_box search with_del append " >\n    <a class="del_btn jsSearchInputClose" href="javascript:" style="display:none">\n        <i class="icon_search_del"></i>&nbsp;\n    </a>\n    <a  href="javascript:" class="frm_input_append jsSearchInputBt">\n    	<i class="icon16_common search_gray">搜索</i>&nbsp;\n    </a>\n    <input type="text" value="" class="frm_input jsSearchInput">\n</span>';
});
define("tpl/biz_web/ui/checkbox.html.js", [], function(e, t, n) {
	return '<label for="_checkbox_{index}" class="frm_{type}_label">\n	<i class="icon_{type}"></i>\n	<input type="{type}" class="frm_{type}" name="{name}" id="_checkbox_{index}">\n	<span class="lbl_content">{label}</span>\n</label>';
});
define("tpl/popover.html.js", [], function() {
	return '<div class="popover {className}">\n    <div class="popover_inner">\n        <div class="popover_content jsPopOverContent">{=content}</div>\n		<!--#0001#-->\n        {if close}<a href="javascript:;" class="popover_close icon16_common close_flat jsPopoverClose">关闭</a>{/if}\n        <!--%0001%-->\n\n        <div class="popover_bar">{each buttons as bt index}<a href="javascript:;" class="btn btn_{bt.type} jsPopoverBt">{bt.text}</a>{if index < buttons.length-1}&nbsp;{/if}{/each}</div>\n    </div>\n    <i class="popover_arrow popover_arrow_out"></i>\n    <i class="popover_arrow popover_arrow_in"></i> \n</div>\n';
});
define("tpl/biz_web/ui/dropdown.html.js", [], function(e, t, n) {
	return '<a href="javascript:;" class="btn dropdown_switch jsDropdownBt"><label class="jsBtLabel" {if search}contenteditable="true"{/if}>{label}</label><i class="arrow"></i></a>\n<div class="dropdown_data_container jsDropdownList">\n    <ul class="dropdown_data_list">\n        {if renderHtml}\n        {renderHtml}\n        {else}\n            {each data as o index}\n            <li class="dropdown_data_item {if o.className}{o.className}{/if}">  \n                <a onclick="return false;" href="javascript:;" class="jsDropdownItem" data-value="{o.value}" data-index="{index}" data-name="{o.name}">{o.name}</a>\n            </li>\n            {/each}        \n        {/if}\n    </ul>\n</div>\n';
});
define("biz_web/lib/json.js", [], function(require, exports, module) {
	try {
		var report_time_begin = +(new Date);
		return typeof JSON != "object" && (JSON = {}),
			function() {
				"use strict";

				function f(e) {
					return e < 10 ? "0" + e : e;
				}

				function quote(e) {
					return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function(e) {
						var t = meta[e];
						return typeof t == "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
					}) + '"' : '"' + e + '"';
				}

				function str(e, t) {
					var n, r, i, s, o = gap,
						u, a = t[e];
					a && typeof a == "object" && typeof a.toJSON == "function" && (a = a.toJSON(e)), typeof rep == "function" && (a = rep.call(t, e, a));
					switch (typeof a) {
						case "string":
							return quote(a);
						case "number":
							return isFinite(a) ? String(a) : "null";
						case "boolean":
						case "null":
							return String(a);
						case "object":
							if (!a) return "null";
							gap += indent, u = [];
							if (Object.prototype.toString.apply(a) === "[object Array]") {
								s = a.length;
								for (n = 0; n < s; n += 1) u[n] = str(n, a) || "null";
								return i = u.length === 0 ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]" : "[" + u.join(",") + "]", gap = o, i;
							}
							if (rep && typeof rep == "object") {
								s = rep.length;
								for (n = 0; n < s; n += 1) typeof rep[n] == "string" && (r = rep[n], i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
							} else
								for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
							return i = u.length === 0 ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(",") + "}", gap = o, i;
					}
				}
				typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function(e) {
					return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
				}, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(e) {
					return this.valueOf();
				});
				var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
					escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
					gap, indent, meta = {
						"\b": "\\b",
						"	": "\\t",
						"\n": "\\n",
						"\f": "\\f",
						"\r": "\\r",
						'"': '\\"',
						"\\": "\\\\"
					},
					rep;
				JSON.stringify2 = function(e, t, n) {
					var r;
					gap = "", indent = "";
					if (typeof n == "number")
						for (r = 0; r < n; r += 1) indent += " ";
					else typeof n == "string" && (indent = n);
					rep = t;
					if (!t || typeof t == "function" || typeof t == "object" && typeof t.length == "number") return str("", {
						"": e
					});
					throw new Error("JSON.stringify");
				}, typeof JSON.parse != "function" && (JSON.parse = function(text, reviver) {
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
					throw new SyntaxError("JSON.parse");
				});
			}(), JSON;
	} catch (e) {
		wx.jslog({
			src: "biz_web/lib/json.js"
		}, e);
	}
});
define("tpl/RichBuddy/RichBuddyContent.html.js", [], function() {
	return '<div class="frm_control_group nickName">\n    <label class="frm_label">{nick_name}</label>\n    <div class="frm_controls frm_vertical_pt">\n        <span class="icon18_common {if gender==1}man_blue{else if gender==2}woman_orange{/if}"></span>\n    </div>\n</div>\n<div class="frm_control_group remark">\n    <label class="frm_label">备注名</label>\n    <div class="frm_controls frm_vertical_pt">\n        <span class=\'js_remarkName remark_name\'>{remark_name}</span>\n        <a title="修改备注" class="icon14_common edit_gray js_changeRemark" href="javascript:;">修改备注</a> \n    </div>\n</div>\n<div class="frm_control_group location">\n    <label class="frm_label">地区</label>\n    <div class="frm_controls frm_vertical_pt">\n        {country} {province} {city}\n    </div>\n</div>\n<div class="frm_control_group sign">\n    <label class="frm_label">签名</label>\n    <div class="frm_controls frm_vertical_pt">\n        {signature}\n    </div>\n</div>\n<div class="frm_control_group grouping js_group_container">\n<label class="frm_label">分组</label>\n    <div class="frm_controls frm_vertical_pt">\n        <div class="dropdown_wrp js_group"></div>\n    </div>\n</div>\n ';
});
define("tpl/RichBuddy/RichBuddyLayout.html.js", [], function() {
	return '<div class="rich_buddy popover arrow_left" style="display:none;">\n    <div class="popover_inner">\n        <div class="popover_content">\n            <div class="rich_buddy_hd">详细资料</div>\n \n            <div class="loadingArea rich_buddy_loading"><span class="vm_box"></span><i class="icon_loading_small white"></i></div>\n            <div class="rich_buddy_bd buddyRichContent">\n            </div>\n        </div>\n    </div>\n    <i class="popover_arrow popover_arrow_out"></i>\n    <i class="popover_arrow popover_arrow_in"></i>\n</div> \n';
});
define("tpl/tooltips.html.js", [], function() {
	return '<div class="popover {parentClass}" style="display:none;position:{container_mode};{if offset.left}left:{offset.left}px;top:{offset.top}px;{/if}">\n    <div class="popover_inner">\n        <div class="popover_content">{=content}</div>\n        {if container_close}\n        <!--#0001#-->\n        <a href="javascript:;" class="popover_close icon16_common close_flat js_popover_close">关闭</a>\n        <!--%0001%-->\n        {/if}\n        {if buttons.length > 0}\n        <div class="popover_bar">\n			{each buttons as o index}\n			<a onclick="return false;" href="javascript:;" class="btn {o.type}">{o.text}</a>\n			{/each}\n        </div>\n        {/if}\n    </div>\n    <i class="popover_arrow popover_arrow_out"></i>\n    <i class="popover_arrow popover_arrow_in"></i>\n</div>\n';
});
define("tpl/top.html.js", [], function(e, t, n) {
	return '<ul class="tab_navs title_tab" data-index="{itemIndex=0}">\n    {each data as o index}\n    {if (typeof o.acl == "undefined" || o.acl == 1)}\n    <li data-index="{itemIndex++}" class="tab_nav {if (itemIndex == 1)}first{/if} js_top {o.className}" data-id="{o.id}"><a href="{o.url}" {if o.target==\'_blank\'}target="_blank"{/if}>{o.name}</a></li>\n    {/if}\n    {/each}\n</ul>\n';
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
define("tpl/pagebar.html.js", [], function(e, t, n) {
	return '<div class="pagination">\n    <span class="page_nav_area">\n        <a href="javascript:void(0);" class="btn page_first">{firstButtonText}</a>\n        <a href="javascript:void(0);" class="btn page_prev"><i class="arrow"></i></a>\n        {if isSimple}\n            <span class="page_num">\n                <label>{initShowPage}</label>\n                <span class="num_gap">/</span>\n                <label>{endPage}</label>\n            </span>\n        {else}\n            {each startRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav">{pageIndex}</a>\n            {/each}\n            <span class="gap_prev">...</span>\n            {each midRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav js_mid">{pageIndex}</a>\n            {/each}\n            <span class="gap_next">...</span>\n            {each endRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav">{pageIndex}</a>\n            {/each}\n        {/if}\n        <a href="javascript:void(0);" class="btn page_next"><i class="arrow"></i></a>\n        <a href="javascript:void(0);" class="btn page_last">{lastButtonText}</a>            \n    </span>\n    {if (endPage>1)}\n    <span class="goto_area">\n        <input type="text">\n        <a href="javascript:void(0);" class="btn page_go">跳转</a>\n    </span>\n    {/if}\n</div>\n';
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
define("tpl/user/verifylist.html.js", [], function(e, t, n) {
	return '{if (verifyReqList.length > 0)}\n{each verifyReqList as item}\n<tr id="listItem{item.id}">\n    <td class="table_cell user">\n        <div class="user_info">\n            <a target="_blank" href="{item.link}" class="remark_name" data-fakeid="{item.from_uin}">{item.nick_name}</a>\n            <span class="nick_name" id="remarkName{item.id}" data-fakeid="{item.from_uin}"></span>\n            <a target="_blank" href="{item.link}" class="avatar">\n                <img src="{item.img}" data-fakeid="{item.from_uin}">\n            </a>\n            <label for="check{item.from_uin}" class="frm_checkbox_label js_selectLabel"><i class="icon_checkbox"></i><input class="frm_checkbox js_select" type="checkbox" value="{item.from_uin}" data-fakeid="{item.id}" id="check{item.from_uin}"></label>\n            <span id="fakeid2msgid{item.from_uin}" data-msgid="{item.id}" style="display:none"></span>\n        </div>\n    </td>\n    <!--<td class="table_cell user_category">\n        <div id="selectArea{item.from_uin}" class="dropdown_wrp js_selectArea" data-gid="" data-fid="{item.from_uin}"></div>\n    </td>-->\n	<td class="table_cell verify_msg">{item.content}</td>\n	<td class="table_cell verify_time">{item.create_time_str}</td>\n    <td class="table_cell verify_oper" id="verifyOPArea{item.id}">\n        <div class="js_div_buttons">\n            <a href="javascript:;" data-fid="{item.from_uin}" data-id="{item.id}" class="accept js_accept js_btn">接受</a>\n            <a href="javascript:;" data-fid="{item.from_uin}" data-id="{item.id}" class="ignore js_ignore js_btn">忽略</a>\n            <a href="javascript:;" class="remark js_msgSenderRemark js_btn" data-fakeid="{item.from_uin}" title="修改备注">修改备注</a>\n        </div>\n        <div class="js_div_ignore_text" style="display:none;">\n            已忽略\n        </div>\n    </td>\n</tr>\n{/each}\n{else}\n<tr class="empty_item"><td colspan="4" class="empty_tips">暂无用户</td></tr>\n{/if}\n';
});
define("tpl/user/userlist.html.js", [], function(e, t, n) {
	return '{if (friendsList.length > 0)}\n{each friendsList as item}\n<tr>\n    <td class="table_cell user">\n        <div class="user_info">\n            {if item.remark_name}\n            <a target="_blank" href="{item.link}" class="remark_name" data-fakeid="{item.id}">{item.remark_name}</a>\n            <span class="nick_name" data-fakeid="{item.id}">(<strong>{item.nick_name}</strong>)</span>\n            {else}\n            <a target="_blank" href="{item.link}" class="remark_name" data-fakeid="{item.id}">{item.nick_name}</a>\n            <span class="nick_name" data-fakeid="{item.id}"></span>\n            {/if}\n            <a target="_blank" href="{item.link}" class="avatar">\n                <img src="{item.img}" data-fakeid="{item.id}" class="js_msgSenderAvatar">\n            </a>\n            <label for="check{item.id}" class="frm_checkbox_label"><i class="icon_checkbox"></i><input class="frm_checkbox js_select" type="checkbox" value="{item.id}" id="check{item.id}"></label> \n        </div>\n    </td>\n    <td class="table_cell user_category">\n        <div id="selectArea{item.id}" class="js_selectArea" data-gid="{item.group_id}" data-fid="{item.id}"></div>\n    </td>\n    <td class="table_cell user_opr">\n        <a class="btn remark js_msgSenderRemark" data-fakeid="{item.id}">修改备注</a>\n    </td>\n</tr>\n{/each}\n{else}\n<tr class="empty_item"><td colspan="3" class="empty_tips">暂无用户</td></tr>\n{/if}\n';
});
define("tpl/user/grouplist.html.js", [], function(e, t, n) {
	return '<dl class="inner_menu">\n    <dt class="inner_menu_item{if type == 4 || groupid === \'\'} selected{/if}">\n		<a href="{allUser.link}" class="inner_menu_link" title="全部用户">\n			<strong>全部用户</strong><em class="num">({allUser.num})</em>\n		</a>\n    </dt>\n    {if type != 4 && groupid != 1}\n	{each groupsList as item}\n	{if item.id}\n	<dd class="inner_menu_item {if item.selected}selected{/if}" id="group{item.id}">\n	{else}\n	<dd class="inner_menu_item {if item.selected}selected{/if}">\n	{/if}\n		{if item.id == 1}\n		<a href="{item.link}" class="inner_menu_link" title="加入该分组中的用户将无法接收到该公众号发送的消息以及自动回复。公众号也无法向该用户发送消息。">\n		{else if item.id == 2}\n		<a href="{item.link}" class="inner_menu_link" title="加入该分组中的用户仅作为更重要的用户归类标识">\n		{else}\n        <a href="{item.link}" class="inner_menu_link" title="{item.name}">\n		{/if}\n			<strong>{item.name}</strong><em class="num">({item.cnt})</em>\n		</a>		\n	</dd>\n	{/each}\n    {/if}\n</dl>\n{if isVerifyOn || !isVeifyOn && verifyList.num}{/if}\n{if userRole == 15}\n<dl class="inner_menu">\n    <dt class="inner_menu_item{if type != 4} selected{/if}">\n		<a href="{verifyList.link}" class="inner_menu_link" title="关注请求">\n			<strong>关注请求</strong><em class="num">({verifyList.num})</em>\n		</a>\n    </dt>\n</dl>\n{/if}\n<dl class="inner_menu no_extra">\n    <dt class="inner_menu_item{if groupid == 1} selected{/if}">\n		<a href="{blackList.link}" class="inner_menu_link" title="黑名单">\n			<strong>黑名单</strong><em class="num">({blackList.num})</em>\n		</a>\n    </dt>\n</dl>\n';
});
define("common/wx/popover.js", ["tpl/popover.html.js"], function(o, t, e) {
	"use strict";

	function i(o) {
		if (o = $.extend(!0, {}, c, o), this.opt = o, this.$dom = $(o.dom), this.$dom.data("popover")) {
			var t = this.$dom.data("popover");
			return s(o, t), t.$pop.show(), t;
		}
		return o.buttons && o.buttons && o.buttons.each(function(o) {
				o.type = o.type || "default";
			}), this.$pop = $(template.compile(p)(o)), $("body").append(this.$pop), n(this, o), s(o, this),
			this.$pop.show(), this.$dom.data("popover", this), this.clickIn = !0, this;
	}

	function n(o, t) {
		t.buttons && t.buttons.length > 0 && o.$pop.find(".jsPopoverBt").each(function(e, i) {
			t.buttons[e] && "function" == typeof t.buttons[e].click && $(i).click(function(i) {
				t.buttons[e].click.call(o, i);
			});
		}), o.$pop.find(".jsPopoverClose").click(function() {
			t.close === !0 ? o.hide() : "function" == typeof t.close && t.close.call(o);
		}), t.hover && (o.$dom.hover(function() {
			o.hoverTime && clearTimeout(o.hoverTime);
		}, function() {
			o.hoverTime = o.hide.delay(1, o);
		}), o.$pop.hover(function() {
			o.hoverTime && clearTimeout(o.hoverTime);
		}, function() {
			o.hoverTime && clearTimeout(o.hoverTime), o.hoverTime = o.hide.delay(1, o);
		})), t.hideIfBlur && (o._onBlur = function(o) {
			var t = o.data.context,
				e = o.target,
				i = t.$dom.get(0),
				n = t.$pop.get(0);
			t.clickIn ? t.clickIn = !1 : $.contains(i, e) || i === e || $.contains(n, e) || n === e || o.data.context.hide();
		}, $(document).on("click", {
			context: o
		}, o._onBlur)), o._onResize = function(o) {
			o.data.context.resetPosition();
		}, $(window).on("resize", {
			context: o
		}, o._onResize);
	}

	function s(o, t) {
		var e = t.$dom.offset();
		"left" == o.margin ? (console.log(e.top), console.log(t.$dom.height()), t.$pop.css({
			top: e.top + t.$dom.height(),
			left: e.left
		}).addClass("pos_left")) : "right" == o.margin ? t.$pop.css({
			top: e.top + t.$dom.height(),
			left: e.left + t.$dom.width() - t.$pop.width()
		}).addClass("pos_right") : t.$pop.css({
			top: e.top + t.$dom.height(),
			left: e.left + t.$dom.outerWidth() / 2 - t.$pop.width() / 2
		}).addClass("pos_center");
	}
	var p = o("tpl/popover.html.js"),
		c = {
			dom: "",
			content: "",
			place: "bottom",
			margin: "center",
			hideIfBlur: !1,
			hover: !1
		};
	i.prototype = {
		remove: function() {
			this.$pop.remove(), this.$dom.removeData("popover"), this._onBlur && $(document).off("click", this._onBlur),
				$(window).off("resize", this._onResize);
		},
		hide: function() {
			this.$pop.hide();
		},
		show: function() {
			this.$pop.show();
		},
		resetPosition: function() {
			return s(this.opt, this);
		}
	}, e.exports = i;
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
define("user/group_cgi.js", ["common/wx/Cgi.js", "biz_web/lib/json.js", "common/wx/Tips.js"], function(r, e, i) {
	"use strict";
	var n = r("common/wx/Cgi.js"),
		o = r("biz_web/lib/json.js"),
		t = r("common/wx/Tips.js");
	i.exports = {
		add: function(r, e) {
			n.post({
				url: "/cgi-bin/modifygroup?t=ajax-friend-group",
				data: {
					func: "add",
					name: r
				},
				mask: !1
			}, function(r) {
				if (!r || !r.base_resp) return void t.err("添加失败");
				var i = 1 * r.base_resp.ret;
				switch (i) {
					case 0:
						t.suc("添加成功"), "function" == typeof e && e(r);
						break;

					case -100:
						t.err("分组数量已达上限，无法添加分组");
						break;

					default:
						t.err("添加失败");
				}
			});
		},
		rename: function(r, e, i) {
			n.post({
				url: "/cgi-bin/modifygroup?t=ajax-friend-group",
				data: {
					func: "rename",
					id: r,
					name: e
				},
				mask: !1
			}, function(r) {
				if (!r || !r.base_resp) return void t.err("修改失败");
				var e = r.base_resp.ret;
				0 == e ? (t.suc("修改成功"), "function" == typeof i && i(r)) : t.err("修改失败");
			});
		},
		del: function(r, e) {
			n.post({
				url: "/cgi-bin/modifygroup?t=ajax-friend-group",
				data: {
					func: "del",
					id: r
				},
				mask: !1
			}, function(r) {
				if (!r || !r.base_resp) return void t.err("删除失败");
				var i = r.base_resp.ret;
				0 == i ? (t.suc("删除成功"), "function" == typeof e && e(r)) : t.err("删除失败");
			});
		},
		verify: function(r, e) {
			var i = {
				opcode: 1,
				verifyuser: r
			};
			n.post({
				url: "/cgi-bin/modifycontacts?t=ajax-meeting-verify",
				data: {
					f: "json",
					action: "verifyop",
					verifyuser: o.stringify2(i)
				},
				dataType: "html",
				mask: !1,
				error: function() {
					t.err("系统错误，请重试");
				}
			}, {
				done: function(r) {
					if (!r || !r.base_resp) return void t.err("网络异常，请刷新页面后重试");
					var i = r.base_resp.ret;
					"0" == i ? (t.suc("处理成功"), "function" == typeof e && e(r)) : t.err("61914" == i ? "你的公众号订阅人数已达到上限1000人，建议前往用户管理页面进行整理。" : "61901" == i ? "系统错误，请刷新页面后重试" : "网络异常，请刷新页面后重试");
				},
				fail: function() {
					t.err("提交失败，请重试");
				}
			});
		},
		ignore: function(r, e) {
			var i = {
				opcode: 2,
				verifyuser: r
			};
			n.post({
				url: "/cgi-bin/modifycontacts?t=ajax-meeting-verify",
				data: {
					f: "json",
					action: "verifyop",
					verifyuser: o.stringify2(i)
				},
				mask: !1,
				error: function() {
					t.err("系统错误，请重试");
				}
			}, function(r) {
				t.suc("处理成功"), "function" == typeof e && e(r);
			});
		}
	};
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
define("user/index.js", ["common/wx/dialog.js", "common/wx/Tips.js", "common/wx/pagebar.js", "common/wx/remark.js", "common/wx/top.js", "common/wx/tooltips.js", "common/wx/RichBuddy.js", "user/user_cgi.js", "user/group_cgi.js", "biz_web/ui/dropdown.js", "common/qq/events.js", "common/qq/emoji.js", "common/wx/popover.js", "tpl/user/grouplist.html.js", "tpl/user/userlist.html.js", "tpl/user/verifylist.html.js", "biz_web/ui/checkbox.js", "common/wx/searchInput.js"], function(e) {
	"use strict";

	function t() {
		var t = e("common/wx/searchInput.js");
		new t({
			id: "#searchBar",
			value: wx.cgiData.key,
			placeholder: "用户昵称",
			click: function(e) {
				window.location = wx.url(e.length > 0 ? "/cgi-bin/contactmanage?t=user/index&pagesize=20&pageidx=0&type=" + wx.cgiData.type + "&query=" + encodeURIComponent(e) : "/cgi-bin/contactmanage?t=user/index&pagesize=20&pageidx=0&type=" + wx.cgiData.type);
			}
		}), wx.cgiData.key && $(".remark_name").each(function(e, t) {
			if (!$(t).text().match(/<script>/g)) {
				var i = $(t).html().replace(new RegExp(wx.cgiData.key, "g"), '<span class="highlight">' + wx.cgiData.key + "</span>") + "";
				$(t).html(i);
			}
		}), $("body").on("click", "#reload", function() {
			window.location = wx.url("/cgi-bin/contactmanage?t=user/index&pagesize=20&pageidx=0&type=" + wx.cgiData.type);
		});
	}
	template.isEscape = !1;
	var i, n, a = wx.T,
		s = template.render,
		o = wx.cgiData,
		c = (e("common/wx/dialog.js"), e("common/wx/Tips.js")),
		r = e("common/wx/pagebar.js"),
		l = e("common/wx/remark.js"),
		d = e("common/wx/top.js"),
		p = e("common/wx/tooltips.js"),
		m = e("common/wx/RichBuddy.js"),
		u = e("user/user_cgi.js"),
		g = e("user/group_cgi.js"),
		f = e("biz_web/ui/dropdown.js"),
		h = e("common/qq/events.js"),
		b = (e("common/qq/emoji.js"),
			e("common/wx/popover.js")),
		_ = e("tpl/user/grouplist.html.js"),
		k = e("tpl/user/userlist.html.js"),
		x = e("tpl/user/verifylist.html.js"),
		j = (e("biz_web/ui/checkbox.js"),
			o.groupsList),
		v = o.friendsList || [],
		w = o.verifyReqList || [],
		y = h(!0),
		q = [],
		A = {};
	for (n = 0; n < j.length; n++) 1 == j[n].id ? A = {
		num: j[n].cnt,
		link: wx.url("/cgi-bin/contactmanage?t=user/index&pagesize=20&pageidx=0&type=0&groupid=" + j[n].id)
	} : (j[n].link = wx.url("/cgi-bin/contactmanage?t=user/index&pagesize=20&pageidx=0&type=0&groupid=" + j[n].id),
		j[n].id === o.currentGroupId && (j[n].selected = "selected", $("#js_groupName").text(j[n].name),
			i = j[n].name), q.push(j[n]));
	for (4 === o.type ? $("#js_groupName").text("关注请求") : "" === o.currentGroupId && $("#js_groupName").text("全部用户"),
		n = 0; n < v.length; n++) v[n].img = wx.url("/misc/getheadimg?fakeid=" + v[n].id), v[n].link = wx.url("/cgi-bin/singlesendpage?t=message/send&action=index&tofakeid=" + v[n].id),
		v[n].nick_name = v[n].nick_name.emoji();
	for (n = 0; n < w.length; n++) {
		w[n].img = wx.url("/misc/getheadimg?fakeid=" + w[n].from_uin), w[n].link = wx.url("/cgi-bin/singlesendpage?t=message/send&action=index&tofakeid=" + w[n].from_uin),
			w[n].nick_name = w[n].nick_name.emoji();
		var I = new Date(1e3 * w[n].create_time);
		w[n].create_time_str = I.getFullYear() + "." + (I.getMonth() + 1) + "." + I.getDate() + " " + I.getHours() + ":" + I.getMinutes();
	}
	var z = [],
		D = [];
	for (n = 0; n < j.length; n++) z.push({
		name: j[n].name,
		value: j[n].id
	}), D[j[n].id] = j[n].name;
	var R = new d("#topTab", d.DATA.user);
	if (R.selected(0 == o.type ? 0 : 1), 4 != o.type && $("#groupsList").prepend(a(_, {
		groupsList: q,
		allUser: {
			num: o.totalCount,
			link: wx.url("/cgi-bin/contactmanage?t=user/index&pagesize=20&pageidx=0&type=0")
		},
		groupid: o.currentGroupId,
		type: o.type,
		verifyList: {
			num: o.verifyMsgCount,
			link: wx.url("/cgi-bin/contactmanage?t=user/index&pagesize=20&pageidx=0&type=4")
		},
		blackList: A,
		isVerifyOn: wx.cgiData.isVerifyOn,
		userRole: o.userRole
	})), 0 == o.type) {
		for ($("#userGroups").html(a(k, {
			friendsList: v
		})), n = 0; n < v.length; n++) ! function(e) {
			new f({
				container: "#selectArea" + v[e].id,
				label: D[v[e].group_id],
				data: z,
				callback: function(t) {
					var i = $("#selectArea" + v[e].id),
						n = parseInt(i.data("gid"), 10),
						a = parseInt(t, 10);
					n !== a && u.changeGroup(v[e].id, a, function() {
						i.data("gid", a), setTimeout(function() {
							location.reload();
						}, 300);
					}, 2);
				}
			});
		}(n);
		0 == v.length && wx.cgiData.key && ($(".js_pageNavigator").remove(), $(".user_list").html("<p class='no_result'>无结果,请重新搜索或查看<a href='javascript:;' id='reload'>全部用户</a></p>"));
		var G = new m;
		$(".js_msgSenderAvatar").mouseover(function() {
			var e = $(this),
				t = parseInt(e.data("fakeid"), 10),
				i = e.offset(),
				n = e.width();
			G.show({
				fakeId: t,
				position: {
					left: i.left + n + 2,
					top: i.top
				}
			});
		}).mouseout(function() {
			G.hide();
		});
	} else $("#verifyGroups").html(a(x, {
		verifyReqList: w
	}));
	if ($("#allGroup").length > 0) var N = new f({
		container: "#allGroup",
		label: "添加到",
		data: z,
		disabled: !0,
		callback: function(e) {
			var t = [],
				i = e;
			t = C.values(), t.length && u.changeGroup(t, i, function() {
				location.reload(!0);
			}, 3);
		}
	});
	var C = $(".js_select").checkbox();
	if ($("#selectAll").on("change", function() {
		var e = $(this).prop("checked");
		$(".js_select").each(function() {
			$(this).prop("disabled") || $(this).checkbox().checked(e);
		});
	}).checkbox(), $("#selectAll, .js_select").on("change", function() {
		var e = C.values();
		4 == o.type ? e.length ? ($("#js_btn_accept_all").enable(), $("#js_btn_ignore_all").enable()) : ($("#js_btn_accept_all").disable(),
			$("#js_btn_ignore_all").disable()) : e.length ? N && N.enable() : N && N.disable();
	}), o.pageCount > 1) {
		new r({
			container: ".js_pageNavigator",
			perPage: o.pageSize,
			initShowPage: o.pageIdx + 1,
			totalItemsNum: o.pageCount * o.pageSize,
			first: !1,
			last: !1,
			isSimple: !0,
			callback: function(e) {
				var t = e.currentPage;
				return t != o.pageIdx + 1 && (location.href = location.href.replace(/([\?&])pageidx=\d*/, "$1pageidx=" + (t - 1))), !1;
			}
		});
	}
	$(".js_msgSenderRemark").click(function() {
			var e = $(this).data("fakeid"),
				t = $(".remark_name[data-fakeid=" + e + "]"),
				i = $(".nick_name[data-fakeid=" + e + "]"),
				n = "" == i.html() ? "" : t.html();
			l.show(e, n);
		}), y.on("Remark:changed", function(e, t) {
			var i = $(".remark_name[data-fakeid=" + e + "]"),
				n = $(".nick_name[data-fakeid=" + e + "]"),
				a = n.html();
			"" == t && "" == a || ("" == t && "" != a ? (i.html(n.find("strong").html()), n.html("")) : "" != t && "" == a ? (n.html("(<strong>" + i.html() + "</strong>)"),
				i.html(t)) : i.html(t));
		}),
		function() {
			function e(e, t) {
				var i = e,
					n = i.val().trim(),
					a = t.find(".jsPopoverBt").eq(0);
				if (!a.attr("disabled")) {
					if (a.btn(!1), "" == n || n.bytes() > 12) return c.err("分组名字为1~6字符"), i.focus(), a.btn(!0), !1;
					g.add(n, function() {
						location.reload();
					});
				}
			}
			$("#js_groupAdd").on("click", function() {
				$(this);
				$(".popover").hide();
				var t = new b({
					dom: this,
					content: s("js_editNameHtml", {
						name: "",
						gid: ""
					}),
					place: "bottom",
					margin: "center",
					buttons: [{
						text: "确定",
						click: function() {
							e(this.$pop.find(".js_name"), this.$pop);
						},
						type: "primary"
					}, {
						text: "取消",
						click: function() {
							this.hide();
						}
					}]
				});
				t.$pop.find(".js_name").keypress(function(i) {
					wx.isHotkey(i, "enter") && e($(this), t.$pop);
				}), t.$pop.find(".js_name").focus();
			});
		}(),
		function() {
			function e(e, t) {
				var i = e,
					n = i.data("gid"),
					a = i.val().trim(),
					s = t.find(".jsPopoverBt").eq(0);
				if (!s.attr("disabled")) {
					if (s.btn(!1), "" == a || a.bytes() > 12) return c.err("分组名字为1~6字符"), i.focus(), s.btn(!0), !1;
					g.rename(n, a, function() {
						location.reload(!0);
					});
				}
			}
			$(".js_edit").on("click", function() {
				var t = $(this),
					n = t.data("gid");
				$(".popover").hide();
				var a = new b({
					dom: this,
					content: s("js_editNameHtml", {
						name: i,
						gid: n
					}),
					place: "bottom",
					margin: "center",
					buttons: [{
						text: "确定",
						click: function() {
							e(this.$pop.find(".js_name"), this.$pop);
						},
						type: "primary"
					}, {
						text: "取消",
						click: function() {
							this.hide();
						}
					}]
				});
				a.$pop.find(".js_name").keypress(function(t) {
					wx.isHotkey(t, "enter") && e($(this), a.$pop);
				}), a.$pop.find(".js_name").focus();
			});
		}(),
		function() {
			$(".js_delete").on("click", function() {
				var e = $(this),
					t = e.data("gid");
				$(".popover").hide(), new b({
					dom: this,
					content: $("#js_deleteHtml").html(),
					place: "bottom",
					margin: "center",
					buttons: [{
						text: "确定",
						click: function() {
							{
								var e = this;
								e.$pop.find(".jsPopoverBt").eq(0).btn(!1);
							}
							g.del(t, function() {
								location.href = wx.url("/cgi-bin/contactmanage?t=user/index&pagesize=20&pageidx=0&type=0&groupid=0");
							});
						},
						type: "primary"
					}, {
						text: "取消",
						click: function() {
							this.hide();
						}
					}]
				});
			});
		}(),
		function() {
			function e() {
				var e = [];
				return $(".js_select").each(function() {
					if (1 != $(this).prop("disabled") && 0 != $(this).prop("checked")) {
						var t = $(this).val(),
							i = $("#fakeid2msgid" + t).data("msgid");
						e.push({
							fakeid: t,
							msgid: i
						});
					}
				}), e;
			}

			function t(e) {
				g.verify(e, function(e) {
					if (console.log("accept:", e), n.btn(1), a.enable(), s.enable(), e && e.base_resp && "0" != e.base_resp.ret) return void c.err("提交失败，请重试");
					var t = $.parseJSON(e.list).verifyret;
					console.log(t);
					for (var i = 0; i < t.length; i++)
						if (0 == t[i].ret) {
							var o = t[i].fakeid,
								r = $("#fakeid2msgid" + o).data("msgid"),
								l = $("#verifyOPArea" + r);
							l.find(".js_accept").hide(), l.find(".js_ignore").hide(), l.find(".js_msgSenderRemark").css("display", "inline-block"),
								l.parent().find(".js_select").prop("disabled", !0).checkbox("checked", !1).checkbox("disabled", !0),
								$("#selectAll").checkbox("checked", !1), $("#selectAll").trigger("change"), $("#selectArea" + o).length > 0 && new f({
									container: "#selectArea" + o,
									label: "分组选择",
									data: z,
									callback: function(e) {
										var t = $("#selectArea" + o),
											i = parseInt(t.data("gid"), 10),
											n = parseInt(e, 10);
										i !== n && u.changeGroup(o, n, function() {
											t.data("gid", n);
										}, 2);
									}
								});
						}
				});
			}

			function i(e, t) {
				g.ignore(e, function(e) {
					if (console.log("ignore:", e), n.enable(), a.enable(), s.enable(), t && t.$dom.find(".btn").eq(0).btn(1),
						t && t.$dom.find(".btn").eq(1).enable(), t && t.hide(), e && e.base_resp && "0" != e.base_resp.ret) return void c.err("提交失败，请重试");
					var i = $.parseJSON(e.list).verifyret;
					console.log(i);
					for (var o = 0; o < i.length; o++)
						if (0 == i[o].ret) {
							var r = i[o].fakeid,
								l = $("#fakeid2msgid" + r).data("msgid"),
								d = $("#verifyOPArea" + l);
							d.find(".js_div_buttons").hide(), d.find(".js_div_ignore_text").show(), d.parent().find(".js_select").prop("disabled", !0).checkbox("checked", !1).checkbox("disabled", !0),
								$("#selectAll").checkbox("checked", !1), $("#selectAll").trigger("change");
						}
				});
			}
			if (4 == o.type) {
				var n = $("#js_btn_accept_all"),
					a = $("#js_btn_ignore_all"),
					s = $(".js_div_buttons").find(".js_btn");
				n.disable(), a.disable(), $(".js_accept").on("click", function() {
					if (!$(this).hasClass("btn_disabled")) {
						var e = $(this).data("id"),
							i = $(this).data("fid"),
							n = [{
								fakeid: i,
								msgid: e
							}];
						$(this).disable(), t(n);
					}
				}), $(".js_ignore").on("click", function() {
					if (!$(this).hasClass("btn_disabled")) {
						var e = $(this).data("id"),
							t = $(this).data("fid"),
							n = [{
								fakeid: t,
								msgid: e
							}];
						$(this).disable(), i(n);
					}
				}), n.on("click", function() {
					if ($(this).hasClass("btn_disabled")) return !1;
					n.btn(0), a.disable(), s.disable();
					var i = e();
					t(i);
				}), new p({
					container: a,
					content: "将忽略选中的关注请求，是否确定？",
					type: "click",
					position: {
						top: 0,
						left: -98
					},
					onshow: function() {
						if (0 == a.hasClass("btn_disabled")) {
							var t = e();
							this.$dom.find(".popover_content").html("将忽略" + t.length + "个关注请求，是否确定？"), this.show();
						}
					},
					onclose: function() {},
					buttons: [{
						text: "确定",
						type: "btn_primary",
						click: function() {
							var t = this,
								o = e();
							n.disable(), a.disable(), s.disable(), t.$dom.find(".btn").eq(0).btn(0), t.$dom.find(".btn").eq(1).disable(),
								i(o, t);
						}
					}, {
						text: "取消",
						type: "btn_default",
						click: function() {
							this.hide();
						}
					}]
				});
			}
		}(), t();
});