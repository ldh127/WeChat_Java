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
define("tpl/popover.html.js", [], function() {
	return '<div class="popover {className}">\n    <div class="popover_inner">\n        <div class="popover_content jsPopOverContent">{=content}</div>\n		<!--#0001#-->\n        {if close}<a href="javascript:;" class="popover_close icon16_common close_flat jsPopoverClose">关闭</a>{/if}\n        <!--%0001%-->\n\n        <div class="popover_bar">{each buttons as bt index}<a href="javascript:;" class="btn btn_{bt.type} jsPopoverBt">{bt.text}</a>{if index < buttons.length-1}&nbsp;{/if}{/each}</div>\n    </div>\n    <i class="popover_arrow popover_arrow_out"></i>\n    <i class="popover_arrow popover_arrow_in"></i> \n</div>\n';
});
define("common/wx/media/appmsg.js", ["widget/media.css", "common/wx/time.js", "tpl/media/appmsg.html.js", "common/qq/Class.js"], function(e, t, n) {
	try {
		var r = +(new Date);
		"use strict", e("widget/media.css");
		var i = wx.T,
			s = e("common/wx/time.js"),
			o = e("tpl/media/appmsg.html.js"),
			u = e("common/qq/Class.js"),
			a = u.declare({
				init: function(e) {
					if (!e || !e.container) return;
					e.data = e.data || $.extend({}, e);
					var t = e.data,
						n = t.multi_item || [],
						r = n.length,
						i = null,
						u = [];
					if (r <= 0) return;
					i = n[0];
					for (var a = 1; a < r; ++a) u.push(n[a]);
					var f = {
						id: t.app_id,
						type: e.type,
						file_id: t.file_id,
						time: t.create_time ? s.timeFormat(t.create_time) : "",
						isMul: r > 1,
						first: i,
						list: u,
						token: wx.data.t,
						showEdit: e.showEdit || !1,
						showMask: e.showMask || !1
					};
					$(e.container).html(wx.T(o, f)).data("opt", e), this.renderData = f;
				},
				getData: function() {
					return this.renderData;
				}
			});
		return a;
	} catch (f) {
		wx.jslog({
			src: "common/wx/media/appmsg.js"
		}, f);
	}
});
define("common/wx/tooltip.js", ["tpl/tooltip.html.js", "widget/tooltip.css"], function(e, t, n) {
	try {
		var r = +(new Date);
		"use strict";
		var i = e("tpl/tooltip.html.js");
		e("widget/tooltip.css");
		var s = {
				dom: "",
				content: "",
				position: {
					x: 0,
					y: 0
				}
			},
			o = function(e) {
				this.options = e = $.extend(!0, {}, s, e), this.$dom = $(this.options.dom), this.init();
			};
		o.prototype = {
			constructor: o,
			init: function() {
				var e = this;
				e.pops = [], e.$dom.each(function() {
					var t = $(this),
						n = t.data("tooltip"),
						r = $(template.compile(i)(n ? $.extend(!0, {}, e.options, {
							content: n
						}) : e.options));
					e.pops.push(r), $("body").append(r), r.css("display", "none"), t.on("mouseenter", function() {
						var n = t.offset();
						r.css({
							top: n.top - (e.options.position.y || 0) - r.height(),
							left: n.left + t.width() / 2 - r.width() / 2 + (e.options.position.x || 0)
						}), r.show();
					}).on("mouseleave", function() {
						r.hide();
					}), t.data("tooltip_pop", r);
				});
			},
			show: function() {
				var e = this,
					t = 0,
					n = e.pops.length;
				for (var t = 0; t < n; t++) e.pops[t].show();
			},
			hide: function() {
				var e = this,
					t = 0,
					n = e.pops.length;
				for (var t = 0; t < n; t++) e.pops[t].hide();
			}
		}, n.exports = o;
	} catch (u) {
		wx.jslog({
			src: "common/wx/tooltip.js"
		}, u);
	}
});
define("common/wx/media/cardmsg.js", ["widget/media.css", "common/wx/time.js", "tpl/media/cardmsg.html.js", "biz_common/utils/norefererimg.js", "common/qq/Class.js", "cardticket/send_card.js", "common/wx/Tips.js"], function(t) {
	"use strict";
	t("widget/media.css");
	var e = wx.T,
		i = (t("common/wx/time.js"), t("tpl/media/cardmsg.html.js")),
		s = t("biz_common/utils/norefererimg.js"),
		n = t("common/qq/Class.js"),
		a = t("cardticket/send_card.js"),
		d = t("common/wx/Tips.js"),
		r = n.declare({
			type: 16,
			init: function(t) {
				this.opt = t.opt, this.info = t.infos[this.type], this.index = this.info && this.info.index,
					this.data = this.opt.data, this.msgSender = t;
			},
			getData: function() {
				var t = $.extend(!0, {
					cardid: this.data.id,
					cardnum: this.data.cardnum
				}, this.data);
				return t.cardtype = t.type, t.type = this.type, t;
			},
			click: function() {
				var t = this;
				return this.send_card = new a({
					multi: !1,
					param: {
						need_member_card: 1
					},
					selectComplete: function(e, i) {
						return e ? (e.cardnum = i, t.fillData(e), void t.msgSender.select(t.index)) : void d.err("请选择卡券");
					},
					source: "直接群发卡券"
				}), this.send_card.show(), !1;
			},
			fillData: function(t) {
				this.data = t, this.msgSender.type = this.type;
				var n = e(i, t),
					a = $("." + this.info.selector).html(n),
					d = a.find(".js_logourl");
				d.length && s({
					img: d[0]
				}), this.msgSender.select(this.index), a.wrapInner("<div/>").children().append('<a href="javascript:;" class="link_dele" onclick="this.parentNode.parentNode.removeChild(this.parentNode);">删除</a>');
			},
			isValidate: function() {
				return this.data.id ? !0 : (d.err("请选择卡券"), !1);
			}
		});
	return r;
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
define("common/wx/media/factory.js", ["common/wx/media/img.js", "common/wx/media/audio.js", "common/wx/media/video.js", "common/wx/media/appmsg.js", "biz_common/utils/norefererimg.js", "common/qq/emoji.js", "tpl/media/cardmsg.html.js"], function(e, o, m) {
	"use strict";
	var i = e("common/wx/media/img.js"),
		n = e("common/wx/media/audio.js"),
		t = e("common/wx/media/video.js"),
		r = e("common/wx/media/appmsg.js"),
		c = e("biz_common/utils/norefererimg.js");
	e("common/qq/emoji.js");
	var s = e("tpl/media/cardmsg.html.js"),
		a = {
			1: function(e, o) {
				return $(e).html(o.content.emoji());
			},
			2: function(e, o) {
				return o.container = $(e), new i(o);
			},
			3: function(e, o) {
				return o.selector = $(e), o.source = "file", new n(o);
			},
			4: function(e, o) {
				return o.selector = $(e), o.id = o.file_id, o.source = "file", new t(o);
			},
			10: function(e, o) {
				return o.container = $(e), o.showMask = !1, new r(o);
			},
			11: function(e, o) {
				return o.container = $(e), o.showMask = !1, new r(o);
			},
			15: function(e, o) {
				return o.multi_item && o.multi_item[0] && (o.title = o.multi_item[0].title, o.digest = o.multi_item[0].digest),
					o.selector = $(e), o.id = 1e6 * Math.random() | 0, o.tpl = "videomsg", o.for_selection = !1, o.for_operation = !1,
					new t(o);
			},
			16: function(e, o) {
				$(e).html(template.compile(s)(o));
				var m = $(e).find(".js_logourl");
				m.length && c({
					img: m[0]
				});
			}
		};
	a[21] = a[15];
	var l = {
		render: function(e, o) {
			a[o.type] && $(e).length > 0 && a[o.type]($(e).html(""), o);
		},
		itemRender: a
	};
	m.exports = l;
});
define("media/media_dialog.js", ["widget/media/media_dialog.css", "widget/media/richvideo.css", "common/wx/popup.js", "common/wx/Tips.js", "media/media_cgi.js", "biz_web/utils/upload.js", "biz_web/ui/checkbox.js", "common/wx/pagebar.js", "common/wx/media/imageDialog.js", "common/wx/media/videoDialog.js", "common/wx/media/audio.js", "common/wx/media/img.js", "common/wx/media/video.js", "common/wx/media/appmsg.js", "cardticket/send_card.js", "common/wx/time.js", "tpl/media/dialog/file_layout.html.js", "tpl/media/dialog/appmsg_layout.html.js", "tpl/media/dialog/videomsg_layout.html.js", "tpl/media/dialog/file.html.js"], function(e) {
	"use strict";

	function i(e, i, t, o, n) {
		{
			var a = e / i + 1;
			new _({
				container: $(".pageNavigator", r.popup("get")),
				perPage: i,
				first: !1,
				last: !1,
				isSimple: !0,
				initShowPage: a,
				totalItemsNum: t,
				callback: function(e) {
					var t = e.currentPage;
					t != a && (t--, n.begin = i * t, K.key && (n.key = K.key), o(n));
				}
			});
		}
	}

	function t(e, i, t, n, a, s) {
		r && r.popup("remove"), 15 == t && (e = "videomsg");
		var m = T++;
		if (r = $(c(F[e], {
				tpl: i,
				upload_id: m,
				type: t,
				token: wx.data.t
			}).trim()).popup({
				title: "选择素材",
				className: u,
				width: 960,
				onOK: function() {
					return a && !a() ? !0 : (this.remove(), r = null, void(document.body.style.overflow = document.documentElement.style.overflow = "auto"));
				},
				onCancel: function() {
					this.remove(), r = null, document.body.style.overflow = document.documentElement.style.overflow = "auto";
				}
			}), document.body.style.overflow = document.documentElement.style.overflow = "hidden",
			p = r.popup("get"), j({
				container: "#js_media_dialog_upload" + m,
				type: t,
				onAllComplete: function() {
					g.suc("上传成功"), s.begin = 0, d(s);
				}
			}), n) {
			if ("file" == e && ($(".js_media_list", p).html(c(J, {
				list: n
			})), $(".frm_radio[type=radio]", p).checkbox(!1), $(".media_content", p).each(function() {
				var e = $(this),
					i = e.data("id"),
					t = e.data("type"),
					o = E[i];
				o && t && P[t] && P[t](e, o);
			})), "appmsg" == e) {
				for (var l = n.length, f = $(".js_appmsg_list .inner", p), v = 0; l > v; ++v) {
					var _ = n[v],
						h = f.eq(v % 2),
						w = _.app_id,
						y = $('<div id="appmsg%s"></div>'.sprintf(w), h).appendTo(h);
					new b({
						container: y,
						data: _,
						showMask: !0
					});
				}
				K.key && ($("#msgSearchInput").val(K.key), $(".appmsg_title>a").each(function(e, i) {
					$(i).html($(i).text().replace(new RegExp(K.key, "g"), '<span class="highlight">' + K.key + "</span>"));
				}));
			}
			if ("videomsg" == e) {
				var x = p.find("#js_videomsg_list").find(".inner");
				n.each(function(e, i) {
					var o = x.eq(i % 2),
						n = $('<div id="appmsg%s"></div>'.sprintf(e.app_id), o).appendTo(o);
					P[t] && P[t](n, e);
				});
			}
			r.popup("resetPosition"), o();
		}
	}

	function o() {
		(10 == K.type || 11 == K.type) && ($("#searchCloseBt").click(function() {
			$("#msgSearchInput").val(""), $("#msgSearchBtn").trigger("click");
		}), $("#msgSearchBtn").click(function() {
			K.key = $("#msgSearchInput").val().length > 0 ? $("#msgSearchInput").val() : "", m(K);
		}), $("#msgSearchInput").keydown(function(e) {
			var i = "which" in e ? e.which : e.keyCode;
			13 == i && $("#msgSearchBtn").trigger("click");
		}));
	}

	function n(e) {
		h({
			scene: "biz",
			maxSelect: 1,
			desc: "大小: 不超过2M,    格式: bmp, png, jpeg, jpg, gif",
			onOK: function(i) {
				var t = {
					file_id: i[0].file_id,
					source: "file"
				};
				e.onSelect && e.onSelect(e.type, t), this.destroy();
			},
			onHide: function() {
				this.destroy();
			}
		});
	}

	function a(e) {
		new w({
			onOK: function(i, t) {
				var o = $.extend({}, t);
				return o ? (e.onSelect && e.onSelect(i, o), !0) : !1;
			}
		});
	}

	function d(e) {
		var o = e.type,
			s = e.onSelect,
			m = e.count || 10,
			l = e.begin || 0;
		return 2 == o ? void n(e) : 21 == o ? void a(e) : (t("file", "loading", o), void f.getList(o, l, m, function(n) {
			if (r) {
				var a = {
						2: "img_cnt",
						3: "voice_cnt",
						4: "video_cnt"
					},
					c = n.file_item,
					u = n.file_cnt[a[o]];
				c.length <= 0 ? t("file", "no-media", o, c, null, e) : (t("file", "files", o, c, function() {
					var e = p.find('[name="media"]:checked').val(),
						i = $("#fileItem" + e).data("opt");
					return i ? (s(o, i), !0) : !1;
				}, e), i(l, m, u, d, e));
			}
		}));
	}

	function s(e) {
		return e.find(".appmsg.selected,.Js_videomsg.selected");
	}

	function m(e) {
		var o = e.type,
			n = e.onSelect,
			d = e.count || 10,
			l = e.key || "",
			c = e.begin || 0;
		return K = $.extend(!0, {}, e), 15 == o ? void a(e) : (t("appmsg", "loading", o), void f.appmsg.getList(o, c, d, function(a) {
			if (r) {
				var l = {
						10: "app_msg_cnt",
						11: "commondity_msg_cnt",
						15: "video_msg_cnt"
					},
					u = a.item,
					f = a.file_cnt[l[o]];
				K.key && (f = a.search_cnt), u.length <= 0 ? t("appmsg", "no-media", o, u, null, e) : (t("appmsg", "files", o, u, function() {
					var e = s(p).parent().data("opt");
					return e ? (n(o, e), !0) : !1;
				}), i(c, d, f, m, e), 15 == o ? (p.on("click", ".Js_videomsg", function() {
					$(this).find(".loading_tips").length ? g.err("视频在转码中，不能选择") : "" != $(this).find(".title").text().trim() && (p.find(".Js_videomsg").removeClass("selected"),
						$(this).addClass("selected"));
				}), p.on("mouseenter", ".Js_videomsg", function() {
					"" == $(this).find(".title").text().trim() && $(this).addClass("no_title");
				}), p.on("mouseleave", ".Js_videomsg", function() {
					$(this).removeClass("no_title");
				})) : p.on("click", ".appmsg", function() {
					s(p).removeClass("selected"), $(this).addClass("selected");
				}));
			}
		}, l));
	}

	function l(e) {
		var i = e.onSelect,
			t = e.type,
			o = new S({
				multi: !1,
				selectComplete: function(e) {
					return e ? (i(t, e), void(o = null)) : void g.err("请选择卡券");
				},
				param: {
					need_member_card: 1
				},
				source: "直接群发卡券"
			});
		o.show();
	}
	e("widget/media/media_dialog.css"), e("widget/media/richvideo.css"), e("common/wx/popup.js");
	var c = wx.T,
		r = null,
		p = null,
		u = "media align_edge",
		g = e("common/wx/Tips.js"),
		f = e("media/media_cgi.js"),
		v = e("biz_web/utils/upload.js"),
		_ = (e("biz_web/ui/checkbox.js"),
			e("common/wx/pagebar.js")),
		h = e("common/wx/media/imageDialog.js"),
		w = e("common/wx/media/videoDialog.js"),
		j = v.uploadBizFile,
		y = (template.render,
			e("common/wx/media/audio.js")),
		x = e("common/wx/media/img.js"),
		k = e("common/wx/media/video.js"),
		b = e("common/wx/media/appmsg.js"),
		S = e("cardticket/send_card.js"),
		C = e("common/wx/time.js"),
		I = C.timeFormat,
		z = e("tpl/media/dialog/file_layout.html.js"),
		D = e("tpl/media/dialog/appmsg_layout.html.js"),
		B = e("tpl/media/dialog/videomsg_layout.html.js"),
		J = e("tpl/media/dialog/file.html.js"),
		T = 1,
		E = {},
		F = {
			appmsg: D,
			videomsg: B,
			file: z
		};
	template.helper("mediaDialogtimeFormat", function(e) {
		return I(e);
	}), template.helper("mediaDialogInit", function(e) {
		return e.file_id ? (E[e.file_id] = e, "") : "";
	});
	var P = {
			2: function(e, i) {
				return new x({
					container: $("#" + e.attr("id")),
					file_id: i.file_id,
					source: "file",
					fakeid: i.fakeid
				});
			},
			3: function(e, i) {
				var t = i;
				return t.selector = "#" + e.attr("id"), t.source = "file", new y(t);
			},
			4: function(e, i) {
				var t = i;
				return t.selector = "#" + e.attr("id"), t.id = t.file_id, t.source = "file", new k(t);
			},
			15: function(e, i) {
				var t = i;
				return t.selector = e, t.id = t.app_id, t.tpl = "videomsg", t.for_selection = !0, t.for_transfer = !!t.content,
					t.hide_transfer = !!t.content, t.video_id = t.content, new k(t);
			}
		},
		K = {};
	return {
		getFile: d,
		getAppmsg: m,
		getCardList: l
	};
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
define("common/qq/jquery.plugin/tab.js", ["tpl/tab.html.js", "widget/msg_tab.css"], function(t) {
	"use strict"; {
		var a = {
				index: 0
			},
			n = t("tpl/tab.html.js");
		t("widget/msg_tab.css");
	}
	$.fn.tab = function(t) {
		if (t && t.tabs) {
			this.html(wx.T(n, {
				tabs: t.tabs,
				token: wx.data.t
			}));
			var e = this,
				s = e.find(".tab_navs"),
				i = s.find(".tab_nav"),
				d = i.length,
				c = null,
				r = null,
				l = function(a) {
					var n = a.data("tab"),
						s = a.data("type");
					n && (c != a && (c && c.removeClass("selected"), r && r.hide(), c = a, r = e.find(n).parent(), r.show(),
						c.addClass("selected")), !!t.select && t.select(a, r, n, s));
				},
				u = function(a) {
					var n = a.data("tab"),
						s = a.data("type");
					return t.click ? t.click(a, e.find(n), n, s) : !0;
				};
			return t = $.extend(!0, {}, a, t), i.each(function(a) {
				var n = t.index,
					s = $(this).addClass("width" + d),
					i = s.data("tab");
				a == n ? l(s) : e.find(i).parent().hide(), a == d - 1 && s.addClass("no_extra");
			}), s.on("click", ".tab_nav", function() {
				var t = u($(this));
				return 0 != t && l($(this));
			}), {
				getLen: function() {
					return d;
				},
				getTabs: function() {
					return i;
				},
				select: function(t) {
					return l(i.eq(t));
				}
			};
		}
	};
});