define("tpl/cardticket/card_quantity.html.js", [], function() {
	return '<div class="pop_store">\n	<!--增减库存-->\n	{if setquantity}\n	<div class="frm_control_group">\n        <div class="frm_controls">\n			<label class="frm_radio_label selected">\n				<i class="icon_radio"></i>\n				<span class="lbl_content">增加</span>\n				<input type="radio" name="isadd" checked value="1" class="frm_radio js_quantity_type">\n			</label>\n			<label class="frm_radio_label">\n				<i class="icon_radio"></i>\n				<span class="lbl_content">减少</span>\n				<input type="radio" name="isadd" value="0" class="frm_radio js_quantity_type">\n			</label>\n		</div>\n	</div>\n	{/if}\n	<div class="frm_control_group">                        \n		<div class="frm_controls">\n			<div class="frm_controls_hint group">\n				<span class="frm_input_box"><input type="text" class="frm_input js_value"></span>\n				<span class="frm_hint">份</span>\n			</div>\n			<p class="frm_tips fail">库存不能少于1</p>\n		</div>\n	</div>\n	<!--增减库存 end-->\n</div>';
});
define("common/wx/tooltipsManager.js", ["common/wx/tooltips.js"], function(e, t, n) {
	try {
		var r = +(new Date);
		"use strict";
		var i = e("common/wx/tooltips.js"),
			s = {
				tooltips: [],
				init: function(e, t) {
					var n = this;
					$(e).each(function() {
						t.container = this, n.add(new i(t));
					});
				},
				add: function(e) {
					this.tooltips.push(e);
				},
				hideAll: function() {
					for (var e = 0; e < this.tooltips.length; e++) this.tooltips[e].hide();
				},
				removeItem: function(e) {
					for (var t = 0; t < this.tooltips.length; t++)
						if (this.tooltips[t] === e) return this.tooltips.splice(t, 1), e.$dom.remove(), !0;
					return !1;
				},
				removeIndex: function(e) {
					if (e >= this.tooltips.length || e < 0) return;
					var t = this.tooltips[e];
					this.tooltips.splice(e, 1), t.$dom.remove();
				},
				current: function() {},
				hide: function() {},
				removeAll: function() {
					for (var e = 0; e < this.tooltips.length; e++) this.tooltips[e].$dom.remove();
					this.tooltips = [];
				}
			};
		return s;
	} catch (o) {
		wx.jslog({
			src: "common/wx/tooltipsManager.js"
		}, o);
	}
});
define("tpl/biz_web/ui/dateRange.html.js", [], function() {
	return '<div class="ta_date" id="div_{title_id}">\n	<span class="date_title" id="{title_id}"></span>\n	<a class="opt_sel" id="{inputTrigger}" href="#">\n		<i class="i_orderd"></i>\n	</a>\n</div>\n';
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
define("cardticket/add/member_info_flag.js", [], function() {
	"use strict";

	function n(n, f) {
		for (var i = 0; i < n.length; i++)
			if (n[i] === f) return i;
		return -1;
	}
	var f = [1, 4096, 2, 4, 8, 0, 32, 64, 128, 256, 512, 1024, 2048];
	return {
		sys_info: ["手机号", "姓名", "性别", "所在地区", "生日", "身份证号", "邮箱", "详细地址", "学历", "职业", "行业", "收入", "爱好"],
		info_flag: f,
		flag2info: function(n) {
			for (var f = [], i = 0; i < this.info_flag.length; i++) {
				var r = this.info_flag[i];
				r & n && f.push(this.sys_info[i]);
			}
			return f;
		},
		info2flag: function(f) {
			for (var i = 0, r = 0; r < f.length; r++) {
				var t = n(this.sys_info, f[r]);
				t >= 0 && (i |= this.info_flag[t]);
			}
			return i;
		}
	};
});
define("tpl/cardticket/send_card.html.js", [], function() {
	return '<div>\n<div class="wrp_processor js_step_container"></div>\n	<div class="first_step js_step_content js_step1">\n	    <!--选择投放方式弹窗-->\n		<div class="js_card_list"></div>\n		<!--选择投放方式弹窗 end-->\n	</div>\n	\n</div>';
});
define("cardticket/card_quantity.js", ["common/wx/Cgi.js", "common/wx/Tips.js", "biz_web/ui/checkbox.js", "tpl/cardticket/card_quantity.html.js", "common/wx/tooltips.js", "common/wx/tooltipsManager.js"], function(t) {
	"use strict";
	var e = t("common/wx/Cgi.js"),
		o = t("common/wx/Tips.js"),
		n = (t("biz_web/ui/checkbox.js"),
			template.compile(t("tpl/cardticket/card_quantity.html.js"))),
		i = {
			container: "",
			quantityChange: $.noop,
			setquantity: !0
		},
		a = t("common/wx/tooltips.js"),
		c = t("common/wx/tooltipsManager.js"),
		r = function(t) {
			t = $.extend(!0, {}, i, t), this.opt = t;
			var r = this;
			$(t.container).on("click", function(i) {
				var s, u = $(this).data("cid");
				if (t.before && t.before(u) === !1) return !1;
				var d = new a({
					container: this,
					content: n({
						setquantity: t.setquantity
					}),
					container_mode: t.mode || "absolute",
					type: "click",
					onclose: function(t) {
						if (t) {
							for (var e = this.$dom.get(0), o = t.target, n = !1; o && o !== document.body;) {
								if (o == e) {
									n = !0;
									break;
								}
								o = o.parentNode;
							}
							n ? this.show() : this.hide();
						}
					},
					buttons: [{
						text: "确定",
						type: "btn_primary",
						click: function() {
							var n = d.$dom,
								i = n.find(".js_value"),
								a = parseInt($.trim(i.val()));
							if (isNaN(a) || 0 >= a) return o.err("库存必须是不能小于1的整数"), !1;
							var m = 1e9;
							return a >= m ? (o.err("库存不能大于10亿"), i.focus(), !1) : void e.post({
								url: "/merchant/electroniccardmgr",
								data: {
									action: t.setquantity ? "modifyquantity" : "setquantity",
									card_id: u,
									value: a,
									isadd: s.value()
								}
							}, function(n) {
								0 == n.base_resp.ret ? (o.suc("设置库存成功"), c.removeAll(), t.quantityChange && t.quantityChange.call(r, u, !t.setquantity || s.value() ? a : -a)) : 1e4 == n.base_resp.ret ? o.err("库存不能小于0") : e.show(n);
							});
						}
					}, {
						text: "取消",
						type: "btn_default",
						click: function() {
							c.removeAll();
						}
					}]
				});
				d.show(), c.removeAll(), c.add(d), $(".popover").css("z-index", "10000"), s = d.$dom.find(".js_quantity_type").checkbox(),
					d.$dom.find(".js_value").focus(), i.stopPropagation();
			});
		};
	return r;
});
define("tpl/cardticket/card_preview.html.js", [], function() {
	return '<div class="pop_card_preview js_pop_card_preview">\n	<span class="hook hook_right_top js_arrow">\n	<!--\n		箭头位置 \n		hook_right_top      右偏上\n		\n	-->\n		<span class="hook_top"></span>\n		<span class="hook_btm"></span>\n	</span>\n	<div class="card_preview">\n		<div class="client_side">\n			<div class="banner">{convert_type card.type}</div>\n			<div class="wrp">\n				<div class="top" style="background-color: {card.color};border-bottom-color: {card.color};">\n					<div class="logo group">\n						<div class="avartar l"><img src="{http2https card.logo_url}"></div>\n						<p>{card.brand_name}</p>\n					</div>\n					<div class="msg">\n						<div class="main_msg">\n							<p>{card.title}</p>\n							<p class="title_sub">{card.sub_title}</p>\n						</div>\n						<p class="time">有效期 {validtime card \'YYYY-MM-DD\'}</p>\n					</div>\n					<div class="deco"></div>\n				</div>\n				<div class="wrp_content">\n					<div class="wrp_section section_dispose">\n						{if card.code_type==0}\n							<div class="main_msg sn">1513-2290-1878</div>\n						{else if card.code_type==1}\n							<div class="bar_code_panel">\n								<div class="main_msg bar_code"></div>\n								<p class="sn">1513-2290-1878</p>\n							</div>\n						{else if card.code_type==2}\n							<div class="qr_code_panel">\n								<div class="main_msg qr_code"></div>\n								<p class="sn">1513-2290-1878</p>\n							</div>\n						{/if}\n						<p>{card.notice}</p>\n					</div>\n					<div class="wrp_section">\n						<ul class="info_list">\n							<li class="info_li">\n								<p class="info">{convert_type card.type}详情</p>\n								<span class="supply_area"><i class="ic ic_go"></i></span>\n							</li>\n							<li class="info_li">\n								<p class="info">适用门店</p>\n								<span class="supply_area">{card.location_id_list.length}家<i class="ic ic_go"></i></span>\n							</li>\n						</ul>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>';
});
define("tpl/cardticket/card_table.html.js", [], function() {
	return '<div class="release_method js_card_container">\n	{if loading}\n	<i class="icon_loading_small white">loading...</i>\n	{else}\n	<div class="sub_title_bar group">\n		<!-- <span class="frm_input_box search append">\n			<a href="javascript:void(0);" class="js_search frm_input_append">\n				<i class="icon16_common search_gray">搜索</i>\n				&nbsp;\n			</a>\n			<input type="text" placeholder="请输入卡券名称" class="frm_input js_keyword">\n		</span> -->\n	</div>\n	<div class="table_wrp release_method_select_table_wrp">\n		<table class="table" cellspacing="0">\n			<thead class="thead">\n				<tr>\n					<th class="table_cell release_method_select_box">&nbsp;</th>\n					<th class="table_cell release_method_kind"><div class="td_panel">卡券类型</div></th>\n					<th class="table_cell release_method_name"><div class="td_panel">卡券名称</div></th>\n					<th class="table_cell release_method_time"><div class="td_panel">卡券有效期</div></th>\n					<th class="table_cell release_method_stock"><div class="td_panel">库存</div></th>\n					{if payflag==1||payflag==2}<th class="table_cell release_method_price"><div class="td_panel">微信价(元)</div></th>{/if}\n					<!-- <th class="table_cell release_method_preview"><div class="td_panel">预览</div></th> -->\n					<th class="table_cell release_method_state"><div class="td_panel">卡券状态</div></th>\n				</tr>\n			</thead>\n			<tbody class="tbody">\n			{if !data.length}\n				<tr>\n					<td class="empty_tips" colspan="6">暂无卡券</td>\n				</tr>\n			{else}\n			{each data as card i}\n            <tr  {if hasdata && (i<pageInfo.begin||i>=pageInfo.begin+pageInfo.count)}class="dn"{/if} id="js_ct_tr_{card.id}">\n					<td class="table_cell release_method_select_box"><div class="td_panel">\n						{if !multi}\n						<label class="frm_radio_label">\n							<i class="icon_radio"></i>\n							<input type="radio" data-id="{card.id}" value="{card.id}" class="frm_radio js_select">\n						</label>\n						{else}\n						<label class="frm_checkbox_label">\n							<i class="icon_checkbox"></i>\n							<input type="checkbox" data-id="{card.id}" value="{card.id}" class="frm_checkbox js_select">\n						</label>\n						{/if}\n					</div></td>\n					<td class="table_cell release_method_kind"><div class="td_panel">{convert_type card.type}</div></td>\n					<td class="table_cell release_method_name"><div class="td_panel">{card.title}</div></td>\n					<td class="table_cell release_method_time"><div class="td_panel">{validtime card \'YYYY-MM-DD\'}</div></td>\n					<td class="table_cell release_method_stock"><div class="td_panel"><span class="js_sendcard_quantity">{card.quantity}</span>\n						{if editquantity && !card.is_from_intercomm && card.can_edit_quantity}<a class="icon14_common edit_gray js_modify_quantity" href="javascript:;" data-new="{if card.isnew}1{/if}" data-cid="{card.id}" data-x="-126"></a>{/if}</div>\n					</td>\n					{if payflag==1||payflag==2}<td class="table_cell release_method_price"><div class="td_panel">{if card.ispay}{card.price}{else}--{/if}</div></td>{/if}\n					<!-- <td class="table_cell release_method_preview"><div class="td_panel"><a data-cid="{card.id}" data-x="-125" class="js_card_preview" href="javascript:void(0);">预览</a></div></td> -->\n					<td class="table_cell release_method_state"><div class="td_panel"><span class="fail pass"><i></i>{convert_state card.status}</span></div></td></td>\n				</tr>\n			{/each}\n			{/if}\n			</tbody>\n		</table>\n        <div class="js_pager"></div>\n        {if multi}\n        <p class="dialog_bt_tip">已选<span class="js_selectcount">{defaultValues.length||0}</span>个</p>\n        {/if}\n	</div>\n	{/if}\n</div>\n';
});
define("cardticket/common_template_helper.js", ["common/wx/upload.js", "biz_common/moment.js"], function(e) {
	"use strict";

	function t(e) {
		return e.replace(/\\n/g, "<br/>");
	}

	function r(e) {
		var t = "YYYY-MM-DD HH:mm:ss",
			r = p(e, t);
		return r ? r.format("YYYY-MM-DD") : "";
	}
	var n = e("common/wx/upload.js"),
		p = e("biz_common/moment.js"),
		a = {
			10: "会员卡",
			21: "门票",
			22: "电影票",
			4: "代金券",
			1: "团购券",
			2: "折扣券",
			3: "礼品券",
			0: "优惠券"
		},
		i = {
			1: "审核中",
			2: "未通过",
			3: "待投放",
			4: "已删除",
			5: "待投放",
			6: "已投放",
			8: "已过期"
		},
		p = e("biz_common/moment.js");
	template.helper("convert_state", function(e) {
		return i[e] || e;
	}), template.helper("convert_type", function(e) {
		return a[e] || e;
	}), template.helper("card_type_map", function(e) {
		return e;
	}), template.helper("unixFormat", function(e, t) {
		return t && (t = t.replace(",", " ")), p.unix(e).format(t);
	}), template.helper("validtime", function(e, t) {
		if (1 == e.time_type) {
			var r = p.unix(e.begin_time).format(t) + "至" + p.unix(e.end_time).format(t);
			return e.end_time < p().unix() && (r += "(已过期)"), r;
		}
		return 2 == e.time_type ? (e.from_day = 0 == e.from_day ? "当" : e.from_day, "领取后{from_day}天生效{fixed_term}天有效".format(e)) : "";
	}), template.helper("addtoken", function(e) {
		return wx.url(e);
	}), template.helper("nl2br", function(e) {
		return t(e);
	});
	var m = {
		1: "50万以下",
		2: "50-100万",
		3: "100-500万",
		4: "500-1000万",
		5: "1000万以上"
	};
	template.helper("convert_business_volume_type", function(e) {
		return m[e] || e;
	});
	var l = {
		0: "未审核",
		2: "审核中",
		3: "生效",
		4: "审核失败"
	};
	template.helper("convert_store_state", function(e) {
		return l[e] || e;
	}), template.helper("$preview", function(e) {
		if (!e) return "无";
		var t;
		return 0 === e.indexOf("temp_") ? (e = e.replace(/^temp_/, ""), t = n.tmpFileUrl(e)) : t = n.multimediaFileUrl(e),
			"<a href='%s' target='_blank'><img src='%s' /></a>".sprintf(t, t);
	}), template.helper("$upload_preview", function(e) {
		if (!e) return "";
		var t;
		return 0 === e.indexOf("temp_") ? (e = e.replace(/^temp_/, ""), t = n.tmpFileUrl(e)) : t = n.multimediaFileUrl(e),
			"<img src='%s' style='width:260px;' />".sprintf(t);
	}), template.helper("$preview_stuffs", function(e) {
		for (var t = [], r = e.stuffs, n = 0; n < r.length; n++) {
			var p = r[n] + "_preview_tpl";
			$("#" + p).length && t.push(template.render(p, e));
		}
		return t.join("");
	});
	var u = {
		2: "女",
		1: "男"
	};
	template.helper("convert_gender", function(e) {
		return u[e] || "未知";
	}), template.helper("percentage", function(e, t, r, n) {
		var r = e / t * 100;
		return n && r > n && (r = n), r.toFixed(2);
	});
	var o = {
		"": "全部",
		0: "API渠道",
		1: "嵌入图文消息",
		2: "直接群发卡券",
		3: "下载二维码"
	};
	template.helper("convert_channel", function(e) {
		return o[e] || e;
	}), template.helper("convert_provide_time", r), template.helper("http2https", function(e) {
		return e ? (e + "").http2https() : "";
	}), template.helper("https2http", function(e) {
		return e ? (e + "").https2http() : "";
	}), template.helper("codepad", function(e) {
		var t = new RegExp("([^s]{4})(?=([^s])+$)", "ig");
		return e.replace(t, "$1-");
	}), template.helper("yuan", function(e) {
		if (!e) return "--";
		var e = e / 100;
		return e.toFixed(2);
	}), template.helper("is_paycard", function() {
		return window.wx_is_paycard;
	});
	var c = {
			0: "等待接收",
			1: "已接收",
			3: "过期退回",
			2: "已拒绝"
		},
		_ = {
			0: "等待接收",
			2: "已拒绝",
			1: "已接收",
			3: "过期退回"
		};
	return template.helper("convert_intercard_status", function(e) {
		return c[e] || e;
	}), template.helper("convert_intercard_rec_status", function(e) {
		return _[e] || e;
	}), {
		type_map: a,
		status_map: i,
		store_status: l,
		gender_map: u,
		source_map: o,
		convert_provide_time: r,
		nl2br: t
	};
});
define("cardticket/store_cgi.js", ["common/wx/Cgi.js", "common/wx/Tips.js", "common/wx/tooltips.js", "common/wx/tooltipsManager.js", "common/wx/dialog.js"], function(t) {
	"use strict";
	var e = t("common/wx/Cgi.js"),
		s = t("common/wx/Tips.js"),
		o = t("common/wx/tooltips.js"),
		n = t("common/wx/tooltipsManager.js"),
		c = (t("common/wx/dialog.js"), {
			deleteStore: function(t) {
				e.post({
					url: "/merchant/entityshop?action=delete",
					data: {
						id: t.store_id
					},
					btn: t.btn
				}, function(o) {
					0 == o.base_resp.ret ? (s.suc("删除门店成功"), t.success && t.success()) : e.show(o);
				});
			},
			deleteWithConfirm: function(t) {
				if (3 == t.state || 4 == t.state) {
					var e = new o({
						container: t.container,
						content: "删除将影响在用此门店的相关业务。<br />你确定要删除吗？",
						type: "click",
						buttons: [{
							text: "确定",
							type: "btn_primary",
							click: function() {
								if (t.success) {
									var e = t.success;
									t.success = function() {
										e && e(), n.removeAll();
									};
								}
								c.deleteStore(t);
							}
						}, {
							text: "取消",
							type: "btn_default",
							click: function() {
								n.removeAll();
							}
						}]
					});
					e.show(), n.removeAll(), n.add(e);
				}
			},
			listStore: function(t) {
				var s = $.extend({}, {
					action: "list",
					begin: 0,
					count: 9999999,
					keyword: t.keyword,
					task_id: t.task_id,
					audit_state: t.audit_state || 3
				}, t.getDataExtra);
				e.get({
					url: "/merchant/entityshop",
					data: s
				}, function(s) {
					if (0 == s.base_resp.ret) {
						var o = $.parseJSON(s.data),
							n = o.store_location;
						t.success && t.success({
							shop_list: n,
							total_num: s.total_count
						});
					} else e.show(s);
				});
			},
			canSendCard: function(t) {
				t.success && t.success(!0);
			}
		});
	return c;
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
define("common/wx/upload.js", ["widget/upload.css", "biz_web/lib/webuploader.js", "common/wx/dialog.js", "common/wx/Tips.js", "tpl/uploader.html.js"], function(e) {
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
		m = function(e) {
			var i = n.Uploader;
			0 == i.support("flash") ? p("<p>未安装或未正确配置flash插件，请检查后重试。<br><a href='http://get.adobe.com/cn/flashplayer/' target='_blank'>到adobe去下载flash插件</a></p>") : 0 == i.support() ? p("<p>您的浏览器不支持上传</p>") : e.refresh();
		},
		u = function(e) {
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
					Math.random() < .1 && u(12), m(t);
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
				return Math.random() < .1 && u(13), e.canContinueUpload && !e.canContinueUpload() ? !1 : !(e.onSelect && e.onSelect(null, i.id, i) === !1);
			}), t.on("fileQueued", function(e) {
				var i = {
					id: e.id,
					fileName: e.name,
					size: n.formatSize(e.size)
				};
				p.append(r(o, i)).show();
			}), t.on("fileDequeued", function() {
				Math.random() < .1 && u(14), e.onCancel && e.onCancel();
			}), t.on("uploadProgress", function(i, n) {
				var t = "#uploadItem%s".sprintf(i.id),
					a = p.find(t).find(".progress_bar_thumb");
				a.width("%s%".sprintf(100 * n)), 1 == n && p.find(t).find(".js_cancel").remove(), e.onProgress && e.onProgress(null, i.id, i, {
					percentage: n
				});
			}), t.on("uploadStart", function(e) {
				g[e.id] = +new Date;
			}), t.on("uploadSuccess", function(n, t, o) {
				if (Math.random() < .1 && u(16), t && t.base_resp) {
					var r = +t.base_resp.ret;
					if (0 == r) Math.random() < .1 && (u(17), g[n.id] && i(+new Date - g[n.id]));
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
				Math.random() < .1 && u(15), e.onError && e.onError();
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
define("biz_web/ui/dateRange.js", ["tpl/biz_web/ui/dateRange.html.js", "biz_web/widget/date_range.css"], function(t, e, a) {
	function s(t) {
		t.title_id = "js_dateRangeTitle" + r, t.inputTrigger = "js_dateRangeTrigger" + r, r++, $(t.container).html(template.compile(d)(t));
		var e = new i(t.title_id, t);
		return e.initOpt = t, e;
	}

	function i(t, e) {
		var a = {
				aToday: "aToday",
				aYesterday: "aYesterday",
				aRecent7Days: "aRecent7Days",
				aRecent14Days: "aRecent14Days",
				aRecent30Days: "aRecent30Days",
				aRecent90Days: "aRecent90Days",
				aDirectDay: [],
				startDate: "",
				endDate: "",
				startCompareDate: "",
				endCompareDate: "",
				minValidDate: "315507600",
				maxValidDate: "",
				success: function() {
					return !0;
				},
				startDateId: "startDate",
				startCompareDateId: "startCompareDate",
				endDateId: "endDate",
				endCompareDateId: "endCompareDate",
				target: "",
				needCompare: !1,
				suffix: "",
				inputTrigger: "input_trigger",
				compareTrigger: "compare_trigger",
				compareCheckboxId: "needCompare",
				calendars: 2,
				dayRangeMax: 0,
				monthRangeMax: 12,
				dateTable: "dateRangeDateTable",
				selectCss: "dateRangeSelected",
				compareCss: "dateRangeCompare",
				coincideCss: "dateRangeCoincide",
				firstCss: "first",
				lastCss: "last",
				clickCss: "today",
				disableGray: "dateRangeGray",
				isToday: "dateRangeToday",
				joinLineId: "joinLine",
				isSingleDay: !1,
				defaultText: " 至 ",
				singleCompare: !1,
				stopToday: !0,
				isTodayValid: !1,
				weekendDis: !1,
				disCertainDay: [],
				disCertainDate: [],
				shortOpr: !1,
				noCalendar: !1,
				theme: "gri",
				autoCommit: !1,
				autoSubmit: !1,
				replaceBtn: "btn_compare",
				onsubmit: $.noop,
				beforeSelect: $.noop
			},
			s = this;
		if (this.inputId = t, this.inputCompareId = t + "Compare", this.compareInputDiv = "div_compare_" + t,
			this.mOpts = $.extend({}, a, e), this.mOpts.calendars = Math.min(this.mOpts.calendars, 3),
			this.mOpts.compareCss = "ta" == this.mOpts.theme ? this.mOpts.selectCss : this.mOpts.compareCss,
			this.periodObj = {}, s.mOpts.aDirectDay)
			for (var i = s.mOpts.aDirectDay, d = 0, r = i.length; r > d; d++) this.periodObj[i[d].id] = i[d].value;
		else this.periodObj[s.mOpts.aToday] = 0,
			this.periodObj[s.mOpts.aYesterday] = 1, this.periodObj[s.mOpts.aRecent7Days] = 6, this.periodObj[s.mOpts.aRecent14Days] = 13,
			this.periodObj[s.mOpts.aRecent30Days] = 29, this.periodObj[s.mOpts.aRecent90Days] = 89;
		this.startDefDate = "";
		var n = "" == this.mOpts.suffix ? (new Date).getTime() : this.mOpts.suffix;
		this.calendarId = "calendar_" + n, this.dateListId = "dateRangePicker_" + n, this.dateRangeCompareDiv = "dateRangeCompareDiv_" + n,
			this.dateRangeDiv = "dateRangeDiv_" + n, this.compareCheckBoxDiv = "dateRangeCompareCheckBoxDiv_" + n,
			this.submitBtn = "submit_" + n, this.closeBtn = "closeBtn_" + n, this.preMonth = "dateRangePreMonth_" + n,
			this.nextMonth = "dateRangeNextMonth_" + n, this.startDateId = this.mOpts.startDateId + "_" + n,
			this.endDateId = this.mOpts.endDateId + "_" + n, this.compareCheckboxId = this.mOpts.compareCheckboxId + "_" + n,
			this.startCompareDateId = this.mOpts.startCompareDateId + "_" + n, this.endCompareDateId = this.mOpts.endCompareDateId + "_" + n;
		var p = {
				gri: ['<div id="' + this.calendarId + '" class="gri_dateRangeCalendar">', '<table class="gri_dateRangePicker"><tr id="' + this.dateListId + '"></tr></table>', '<div class="gri_dateRangeOptions" ' + (this.mOpts.autoSubmit ? ' style="display:none" ' : "") + ">", '<div class="gri_dateRangeInput" id="' + this.dateRangeDiv + '" >', '<input type="text" class="gri_dateRangeInput" name="' + this.startDateId + '" id="' + this.startDateId + '" value="' + this.mOpts.startDate + '" readonly />', '<span id="' + this.mOpts.joinLineId + '"> - </span>', '<input type="text" class="gri_dateRangeInput" name="' + this.endDateId + '" id="' + this.endDateId + '" value="' + this.mOpts.endDate + '" readonly /><br />', "</div>", '<div class="gri_dateRangeInput" id="' + this.dateRangeCompareDiv + '">', '<input type="text" class="gri_dateRangeInput" name="' + this.startCompareDateId + '" id="' + this.startCompareDateId + '" value="' + this.mOpts.startCompareDate + '" readonly />', '<span class="' + this.mOpts.joinLineId + '"> - </span>', '<input type="text" class="gri_dateRangeInput" name="' + this.endCompareDateId + '" id="' + this.endCompareDateId + '" value="' + this.mOpts.endCompareDate + '" readonly />', "</div>", "<div>", '<input type="button" name="' + this.submitBtn + '" id="' + this.submitBtn + '" value="确定" />', '&nbsp;<a id="' + this.closeBtn + '" href="javascript:;">关闭</a>', "</div>", "</div>", "</div>"],
				ta: ['<div id="' + this.calendarId + '" class="ta_calendar ta_calendar2 cf">', '<div class="ta_calendar_cont cf" id="' + this.dateListId + '">', "</div>", '<div class="ta_calendar_footer cf" ' + (this.mOpts.autoSubmit ? ' style="display:none" ' : "") + ">", '<div class="frm_msg">', '<div id="' + this.dateRangeDiv + '">', '<input type="text" class="ta_ipt_text_s" name="' + this.startDateId + '" id="' + this.startDateId + '" value="' + this.mOpts.startDate + '" readonly />', '<span class="' + this.mOpts.joinLineId + '"> - </span>', '<input type="text" class="ta_ipt_text_s" name="' + this.endDateId + '" id="' + this.endDateId + '" value="' + this.mOpts.endDate + '" readonly /><br />', "</div>", '<div id="' + this.dateRangeCompareDiv + '">', '<input type="text" class="ta_ipt_text_s" name="' + this.startCompareDateId + '" id="' + this.startCompareDateId + '" value="' + this.mOpts.startCompareDate + '" readonly />', '<span class="' + this.mOpts.joinLineId + '"> - </span>', '<input type="text" class="ta_ipt_text_s" name="' + this.endCompareDateId + '" id="' + this.endCompareDateId + '" value="' + this.mOpts.endCompareDate + '" readonly />', "</div>", "</div>", '<div class="frm_btn">', '<input class="ta_btn ta_btn_primary" type="button" name="' + this.submitBtn + '" id="' + this.submitBtn + '" value="确定" />', '<input class="ta_btn" type="button" id="' + this.closeBtn + '" value="取消"/>', "</div>", "</div>", "</div>"]
			},
			m = {
				gri: ['<label class="gri_contrast" for ="' + this.compareCheckboxId + '">', '<input type="checkbox" class="gri_pc" name="' + this.compareCheckboxId + '" id="' + this.compareCheckboxId + '" value="1"/>对比', "</label>", '<input type="text" name="' + this.inputCompareId + '" id="' + this.inputCompareId + '" value="" class="gri_date"/>'],
				ta: ['<label class="contrast" for ="' + this.compareCheckboxId + '">', '<input type="checkbox" class="pc" name="' + this.compareCheckboxId + '" id="' + this.compareCheckboxId + '" value="1"/>对比', "</label>", '<div class="ta_date" id="' + this.compareInputDiv + '">', '	<span name="dateCompare" id="' + this.inputCompareId + '" class="date_title"></span>', '	<a class="opt_sel" id="' + this.mOpts.compareTrigger + '" href="#">', '		<i class="i_orderd"></i>', "	</a>", "</div>"]
			};
		if ($(m[this.mOpts.theme].join("")).insertAfter("ta" == this.mOpts.theme ? $("#div_" + this.inputId) : $("#" + this.inputId)),
			this.mOpts.noCalendar && ($("#" + this.inputId).css("display", "none"), $("#" + this.compareCheckboxId).parent().css("display", "none")),
			$(0 < $("#appendParent").length ? "#appendParent" : document.body).append(p[this.mOpts.theme].join("")),
			$("#" + this.calendarId).css("z-index", 9999), 1 > $("#" + this.mOpts.startDateId).length ? $("" != this.mOpts.target ? "#" + this.mOpts.target : "body").append('<input type="hidden" id="' + this.mOpts.startDateId + '" name="' + this.mOpts.startDateId + '" value="' + this.mOpts.startDate + '" />') : $("#" + this.mOpts.startDateId).val(this.mOpts.startDate),
			1 > $("#" + this.mOpts.endDateId).length ? $("" != this.mOpts.target ? "#" + this.mOpts.target : "body").append('<input type="hidden" id="' + this.mOpts.endDateId + '" name="' + this.mOpts.endDateId + '" value="' + this.mOpts.endDate + '" />') : $("#" + this.mOpts.endDateId).val(this.mOpts.endDate),
			1 > $("#" + this.mOpts.compareCheckboxId).length && $("" != this.mOpts.target ? "#" + this.mOpts.target : "body").append('<input type="checkbox" id="' + this.mOpts.compareCheckboxId + '" name="' + this.mOpts.compareCheckboxId + '" value="0" style="display:none;" />'),
			0 == this.mOpts.needCompare ? ($("#" + this.compareInputDiv).css("display", "none"), $("#" + this.compareCheckBoxDiv).css("display", "none"),
				$("#" + this.dateRangeCompareDiv).css("display", "none"), $("#" + this.compareCheckboxId).attr("disabled", !0),
				$("#" + this.startCompareDateId).attr("disabled", !0), $("#" + this.endCompareDateId).attr("disabled", !0),
				$("#" + this.compareCheckboxId).parent().css("display", "none"), $("#" + this.mOpts.replaceBtn).length > 0 && $("#" + this.mOpts.replaceBtn).hide()) : (1 > $("#" + this.mOpts.startCompareDateId).length ? $("" != this.mOpts.target ? "#" + this.mOpts.target : "body").append('<input type="hidden" id="' + this.mOpts.startCompareDateId + '" name="' + this.mOpts.startCompareDateId + '" value="' + this.mOpts.startCompareDate + '" />') : $("#" + this.mOpts.startCompareDateId).val(this.mOpts.startCompareDate),
				1 > $("#" + this.mOpts.endCompareDateId).length ? $("" != this.mOpts.target ? "#" + this.mOpts.target : "body").append('<input type="hidden" id="' + this.mOpts.endCompareDateId + '" name="' + this.mOpts.endCompareDateId + '" value="' + this.mOpts.endCompareDate + '" />') : $("#" + this.mOpts.endCompareDateId).val(this.mOpts.endCompareDate), ("" == this.mOpts.startCompareDate || "" == this.mOpts.endCompareDate) && ($("#" + this.compareCheckboxId).attr("checked", !1),
					$("#" + this.mOpts.compareCheckboxId).attr("checked", !1))), this.dateInput = this.startDateId,
			this.changeInput(this.dateInput), $("#" + this.startDateId).bind("click", function() {
				return s.endCompareDateId == s.dateInput && $("#" + s.startCompareDateId).val(s.startDefDate),
					s.startDefDate = "", s.removeCSS(1), s.changeInput(s.startDateId), !1;
			}), $("#" + this.calendarId).bind("click", function(t) {
				t.stopPropagation();
			}), $("#" + this.startCompareDateId).bind("click", function() {
				return s.endDateId == s.dateInput && $("#" + s.startDateId).val(s.startDefDate), s.startDefDate = "",
					s.removeCSS(0), s.changeInput(s.startCompareDateId), !1;
			}), $("#" + this.submitBtn).bind("click", function() {
				return s.close(1), s.mOpts.success({
					startDate: $("#" + s.mOpts.startDateId).val(),
					endDate: $("#" + s.mOpts.endDateId).val(),
					needCompare: $("#" + s.mOpts.compareCheckboxId).val(),
					startCompareDate: $("#" + s.mOpts.startCompareDateId).val(),
					endCompareDate: $("#" + s.mOpts.endCompareDateId).val()
				}), s.mOpts.onsubmit({
					startDate: $("#" + s.mOpts.startDateId).val(),
					endDate: $("#" + s.mOpts.endDateId).val(),
					needCompare: $("#" + s.mOpts.compareCheckboxId).val(),
					startCompareDate: $("#" + s.mOpts.startCompareDateId).val(),
					endCompareDate: $("#" + s.mOpts.endCompareDateId).val()
				}), !1;
			}), $("#" + this.closeBtn).bind("click", function() {
				return s.close(), !1;
			}), $("#" + this.inputId).bind("click", function() {
				return s.init(), s.show(!1, s), !1;
			}), $("#" + this.mOpts.inputTrigger).bind("click", function() {
				return "none" == $("#" + s.calendarId).css("display") ? (s.init(), s.show(!1, s)) : s.close(), !1;
			}), $("#" + this.mOpts.compareTrigger).bind("click", function() {
				return s.init(!0), s.show(!0, s), !1;
			}), $("#" + this.inputCompareId).bind("click", function() {
				return s.init(!0), s.show(!0, s), !1;
			}), this.mOpts.singleCompare && ("ta" === this.mOpts.theme ? ($("#" + s.startDateId).val(s.mOpts.startDate),
				$("#" + s.endDateId).val(s.mOpts.startDate), $("#" + s.startCompareDateId).val(s.mOpts.startCompareDate),
				$("#" + s.endCompareDateId).val(s.mOpts.startCompareDate)) : ($("#" + s.startDateId).val(s.mOpts.startDate),
				$("#" + s.endDateId).val(s.mOpts.startDate), $("#" + s.startCompareDateId).val(s.mOpts.startCompareDate),
				$("#" + s.endCompareDateId).val(s.mOpts.startCompareDate), $("#" + this.compareCheckboxId).attr("checked", !0),
				$("#" + this.mOpts.compareCheckboxId).attr("checked", !0))), $("#" + this.dateRangeCompareDiv).css("display", $("#" + this.compareCheckboxId).attr("checked") ? "" : "none"),
			$("#" + this.compareInputDiv).css("display", $("#" + this.compareCheckboxId).attr("checked") ? "" : "none"),
			$("#" + this.compareCheckboxId).bind("click", function() {
				$("#" + s.inputCompareId).css("display", this.checked ? "" : "none"), $("#" + s.dateRangeCompareDiv).css("display", this.checked ? "" : "none"),
					$("#" + s.compareInputDiv).css("display", this.checked ? "" : "none"), $("#" + s.startCompareDateId).css("disabled", this.checked ? !1 : !0),
					$("#" + s.endCompareDateId).css("disabled", this.checked ? !1 : !0), $("#" + s.mOpts.compareCheckboxId).attr("checked", $("#" + s.compareCheckboxId).attr("checked")),
					$("#" + s.mOpts.compareCheckboxId).val($("#" + s.compareCheckboxId).attr("checked") ? 1 : 0),
					$("#" + s.compareCheckboxId).attr("checked") ? (sDate = s.str2date($("#" + s.startDateId).val()),
						sTime = sDate.getTime(), eDate = s.str2date($("#" + s.endDateId).val()), eTime = eDate.getTime(),
						scDate = $("#" + s.startCompareDateId).val(), ecDate = $("#" + s.endCompareDateId).val(), ("" == scDate || "" == ecDate) && (ecDate = s.str2date(s.date2ymd(sDate).join("-")), ecDate.setDate(ecDate.getDate() - 1),
							scDate = s.str2date(s.date2ymd(sDate).join("-")), scDate.setDate(scDate.getDate() - (eTime - sTime) / 864e5 - 1),
							ecDate.getTime() < 1e3 * s.mOpts.minValidDate && (scDate = sDate, ecDate = eDate), ecDate.getTime() >= 1e3 * s.mOpts.minValidDate && scDate.getTime() < 1e3 * s.mOpts.minValidDate && (scDate.setTime(1e3 * s.mOpts.minValidDate),
								scDate = s.str2date(s.date2ymd(scDate).join("-")), ecDate.setDate(scDate.getDate() + (eTime - sTime) / 864e5 - 1)),
							$("#" + s.startCompareDateId).val(s.formatDate(s.date2ymd(scDate).join("-"))), $("#" + s.endCompareDateId).val(s.formatDate(s.date2ymd(ecDate).join("-")))),
						s.addCSS(1), s.changeInput(s.startCompareDateId)) : (s.removeCSS(1), s.changeInput(s.startDateId)),
					s.close(1), s.mOpts.success({
						startDate: $("#" + s.mOpts.startDateId).val(),
						endDate: $("#" + s.mOpts.endDateId).val(),
						needCompare: $("#" + s.mOpts.compareCheckboxId).val(),
						startCompareDate: $("#" + s.mOpts.startCompareDateId).val(),
						endCompareDate: $("#" + s.mOpts.endCompareDateId).val()
					});
			}), this.init(), this.close(1), this.mOpts.replaceBtn && $("#" + this.mOpts.replaceBtn).length > 0) {
			var h = $(this.mOpts.container);
			$("#" + s.compareCheckboxId).hide(), h.find(".contrast").hide(), $("#" + this.mOpts.replaceBtn).bind("click", function() {
				var t = this,
					e = $("#" + s.compareCheckboxId);
				e.click(), e.attr("checked") ? function() {
					e.removeAttr("checked"), h.find(".contrast").hide(), $(t).text("按时间对比");
				}() : function() {
					e.attr("checked", "checked"), h.find(".contrast").show(), $(t).text("取消对比");
				}();
			});
		}
		this.mOpts.autoCommit && this.mOpts.success({
			startDate: $("#" + s.mOpts.startDateId).val(),
			endDate: $("#" + s.mOpts.endDateId).val(),
			needCompare: $("#" + s.mOpts.compareCheckboxId).val(),
			startCompareDate: $("#" + s.mOpts.startCompareDateId).val(),
			endCompareDate: $("#" + s.mOpts.endCompareDateId).val()
		}), $(document).bind("click", function() {
			s.close();
		});
	}
	var d = t("tpl/biz_web/ui/dateRange.html.js");
	t("biz_web/widget/date_range.css");
	var r = 0;
	a.exports = s, i.prototype.init = function(t) {
		var e = this,
			a = "undefined" != typeof t ? t && $("#" + e.compareCheckboxId).attr("checked") : $("#" + e.compareCheckboxId).attr("checked");
		$("#" + this.dateListId).empty();
		var s = "" == this.mOpts.endDate ? new Date : this.str2date(this.mOpts.endDate);
		this.calendar_endDate = new Date(s.getFullYear(), s.getMonth() + 1, 0);
		for (var i = 0; i < this.mOpts.calendars; i++) {
			var d = null;
			if ("ta" == this.mOpts.theme ? d = this.fillDate(s.getFullYear(), s.getMonth(), i) : (d = document.createElement("td"),
					$(d).append(this.fillDate(s.getFullYear(), s.getMonth(), i)), $(d).css("vertical-align", "top")),
				0 == i) $("#" + this.dateListId).append(d);
			else {
				var r = "ta" == this.mOpts.theme ? $("#" + this.dateListId).find("table").get(0) : $("#" + this.dateListId).find("td").get(0);
				$(r).before(d);
			}
			s.setMonth(s.getMonth() - 1, 1);
		}
		$("#" + this.preMonth).bind("click", function() {
				return e.calendar_endDate.setMonth(e.calendar_endDate.getMonth() - 1, 1), e.mOpts.endDate = e.date2ymd(e.calendar_endDate).join("-"),
					e.init(t), 1 == e.mOpts.calendars && e.changeInput("" == $("#" + e.startDateId).val() ? e.startDateId : e.endDateId), !1;
			}), $("#" + this.nextMonth).bind("click", function() {
				return e.calendar_endDate.setMonth(e.calendar_endDate.getMonth() + 1, 1), e.mOpts.endDate = e.date2ymd(e.calendar_endDate).join("-"),
					e.init(t), 1 == e.mOpts.calendars && e.changeInput("" == $("#" + e.startDateId).val() ? e.startDateId : e.endDateId), !1;
			}), this.calendar_startDate = new Date(s.getFullYear(), s.getMonth() + 1, 1), this.endDateId != this.dateInput && this.endCompareDateId != this.dateInput && this.addCSS(a && "undefined" != typeof t ? 1 : 0),
			e.addCSS(a && "undefined" != typeof t ? 1 : 0), $("#" + e.inputCompareId).css("display", a ? "" : "none"),
			$("#" + this.compareInputDiv).css("display", $("#" + this.compareCheckboxId).attr("checked") ? "" : "none");
		for (var n in e.periodObj) $("#" + n).length > 0 && ($("#" + n).unbind("click"), $("#" + n).bind("click", function() {
			var t = "ta" == e.mOpts.theme ? "active" : "a";
			$(this).parent().nextAll().removeClass(t), $(this).parent().prevAll().removeClass(t),
				$(this).parent().addClass(t);
			var a = e.getSpecialPeriod(e.periodObj[$(this).attr("id")]);
			$("#" + e.startDateId).val(e.formatDate(a.otherday)), $("#" + e.endDateId).val(e.formatDate(a.today)),
				$("#" + e.mOpts.startDateId).val($("#" + e.startDateId).val()), $("#" + e.mOpts.endDateId).val($("#" + e.endDateId).val()),
				"ta" == e.mOpts.theme ? $("#" + e.compareInputDiv).hide() : $("#" + e.inputCompareId).css("display", "none"),
				$("#" + e.compareCheckboxId).attr("checked", !1), $("#" + e.mOpts.compareCheckboxId).attr("checked", !1),
				$("#" + this.compareInputDiv).css("display", $("#" + this.compareCheckboxId).attr("checked") ? "" : "none"),
				e.close(1), $("#" + e.startCompareDateId).val(""), $("#" + e.endCompareDateId).val(""),
				$("#" + e.mOpts.startCompareDateId).val(""), $("#" + e.mOpts.endCompareDateId).val(""),
				$("#" + e.mOpts.compareCheckboxId).val(0), $("#" + e.mOpts.replaceBtn).length > 0 && ($(".contrast").hide(),
					$("#" + e.mOpts.replaceBtn).text("按时间对比")), e.mOpts.success({
					startDate: $("#" + e.mOpts.startDateId).val(),
					endDate: $("#" + e.mOpts.endDateId).val(),
					needCompare: $("#" + e.mOpts.compareCheckboxId).val(),
					startCompareDate: $("#" + e.mOpts.startCompareDateId).val(),
					endCompareDate: $("#" + e.mOpts.endCompareDateId).val()
				});
		}));
		$(document).bind("click", function() {
			e.close();
		}), $("#" + this.inputId).bind("change", function() {
			"" === $(this).val() && ($("#" + e.startDateId).val(""), $("#" + e.endDateId).val(""), $("#" + e.startCompareDateId).val(""),
				$("#" + e.endCompareDateId).val(""));
		});
	}, i.prototype.getSpecialPeriod = function(t) {
		var e = this,
			a = new Date;
		1 == e.mOpts.isTodayValid && "" != e.mOpts.isTodayValid || 2 > t ? "" : a.setTime(a.getTime() - 864e5);
		var s = a.getTime() - 24 * t * 60 * 60 * 1e3 < 1e3 * e.mOpts.minValidDate ? 1e3 * e.mOpts.minValidDate : a.getTime() - 24 * t * 60 * 60 * 1e3,
			i = a.getFullYear() + "-" + (a.getMonth() + 1) + "-" + a.getDate();
		a.setTime(s);
		var d = a.getFullYear() + "-" + (a.getMonth() + 1) + "-" + a.getDate();
		return t == e.periodObj.aYesterday && (i = d), {
			today: i,
			otherday: d
		};
	}, i.prototype.getCurrentDate = function() {
		return {
			startDate: $("#" + this.startDateId).val(),
			endDate: $("#" + this.endDateId).val(),
			needCompare: $("#" + this.mOpts.compareCheckboxId).val(),
			startCompareDate: $("#" + this.mOpts.startCompareDateId).val(),
			endCompareDate: $("#" + this.mOpts.endCompareDateId).val()
		};
	}, i.prototype.removeCSS = function(t, e) {
		"undefined" == typeof e && (e = this.mOpts.theme + "_" + this.mOpts.coincideCss), "undefined" == typeof t && (t = 0);
		for (var a = new Date(this.calendar_startDate.getFullYear(), this.calendar_startDate.getMonth(), this.calendar_startDate.getDate()), s = "", i = new Date(a); i.getTime() <= this.calendar_endDate.getTime(); i.setDate(i.getDate() + 1)) s = 0 == t ? this.mOpts.theme + "_" + this.mOpts.selectCss : this.mOpts.theme + "_" + this.mOpts.compareCss,
			$("#" + this.calendarId + "_" + this.date2ymd(i).join("-")).removeClass(s), $("#" + this.calendarId + "_" + this.date2ymd(i).join("-")).removeClass(this.mOpts.firstCss).removeClass(this.mOpts.lastCss).removeClass(this.mOpts.clickCss);
	}, i.prototype.addCSS = function(t, e) {
		"undefined" == typeof e && (e = this.mOpts.theme + "_" + this.mOpts.coincideCss), "undefined" == typeof t && (t = 0);
		for (var a = this.str2date($("#" + this.startDateId).val()), s = this.str2date($("#" + this.endDateId).val()), i = this.str2date($("#" + this.startCompareDateId).val()), d = this.str2date($("#" + this.endCompareDateId).val()), r = 0 == t ? a : i, n = 0 == t ? s : d, p = "", m = new Date(r); m.getTime() <= n.getTime(); m.setDate(m.getDate() + 1)) 0 == t ? (p = this.mOpts.theme + "_" + this.mOpts.selectCss,
				$("#" + this.calendarId + "_" + this.date2ymd(m).join("-")).removeClass(this.mOpts.firstCss).removeClass(this.mOpts.lastCss).removeClass(this.mOpts.clickCss),
				$("#" + this.calendarId + "_" + this.date2ymd(m).join("-")).removeClass(p)) : p = this.mOpts.theme + "_" + this.mOpts.compareCss,
			$("#" + this.calendarId + "_" + this.date2ymd(m).join("-")).attr("class", p);
		"ta" == this.mOpts.theme && ($("#" + this.calendarId + "_" + this.date2ymd(new Date(r)).join("-")).removeClass().addClass(this.mOpts.firstCss),
			$("#" + this.calendarId + "_" + this.date2ymd(new Date(n)).join("-")).removeClass().addClass(this.mOpts.lastCss),
			r.getTime() == n.getTime() && $("#" + this.calendarId + "_" + this.date2ymd(new Date(n)).join("-")).removeClass().addClass(this.mOpts.clickCss));
	}, i.prototype.checkDateRange = function(t, e) {
		var a = this.str2date(t),
			s = this.str2date(e),
			i = a.getTime(),
			d = s.getTime(),
			r = 31 * this.mOpts.monthRangeMax + this.mOpts.dayRangeMax,
			n = Math.abs(d - i) / 864e5;
		return r > 0 && n > r ? (alert("所选日期跨度最大不能超过" + r + "天"), !1) : !0;
	}, i.prototype.selectDate = function(t) {
		this.changeInput(this.dateInput);
		var e = this.formatDate(t);
		if (this.startDateId == this.dateInput) this.removeCSS(0), this.removeCSS(1), $("#" + this.calendarId + "_" + t).attr("class", "ta" == this.mOpts.theme ? this.mOpts.clickCss : this.mOpts.theme + "_" + this.mOpts.selectCss),
			this.startDefDate = $("#" + this.dateInput).val(), $("#" + this.dateInput).val(e), 1 == this.mOpts.singleCompare || 1 == this.mOpts.isSingleDay ? (this.dateInput = this.startDateId,
				$("#" + this.endDateId).val(e), (this.mOpts.shortOpr || this.mOpts.autoSubmit) && this.close(1),
				this.mOpts.success({
					startDate: $("#" + this.mOpts.startDateId).val(),
					endDate: $("#" + this.mOpts.endDateId).val(),
					needCompare: $("#" + this.mOpts.compareCheckboxId).val(),
					startCompareDate: $("#" + this.mOpts.startCompareDateId).val(),
					endCompareDate: $("#" + this.mOpts.endCompareDateId).val()
				})) : this.dateInput = this.endDateId;
		else if (this.endDateId == this.dateInput) {
			if ("" == $("#" + this.startDateId).val()) return this.dateInput = this.startDateId, this.selectDate(t), !1;
			if (0 == this.checkDateRange($("#" + this.startDateId).val(), t)) return !1; - 1 == this.compareStrDate(t, $("#" + this.startDateId).val()) && ($("#" + this.dateInput).val($("#" + this.startDateId).val()),
					$("#" + this.startDateId).val(e), e = $("#" + this.dateInput).val()), $("#" + this.dateInput).val(e),
				this.dateInput = this.startDateId, this.removeCSS(0), this.addCSS(0), this.startDefDate = "",
				this.mOpts.autoSubmit && (this.close(1), this.mOpts.success({
					startDate: $("#" + this.mOpts.startDateId).val(),
					endDate: $("#" + this.mOpts.endDateId).val(),
					needCompare: $("#" + this.mOpts.compareCheckboxId).val(),
					startCompareDate: $("#" + this.mOpts.startCompareDateId).val(),
					endCompareDate: $("#" + this.mOpts.endCompareDateId).val()
				}));
		} else if (this.startCompareDateId == this.dateInput) this.removeCSS(1), this.removeCSS(0),
			$("#" + this.calendarId + "_" + t).attr("class", "ta" == this.mOpts.theme ? this.mOpts.clickCss : this.mOpts.theme + "_" + this.mOpts.compareCss),
			this.startDefDate = $("#" + this.dateInput).val(), $("#" + this.dateInput).val(e), 1 == this.mOpts.singleCompare || 1 == this.mOpts.isSingleDay ? (this.dateInput = this.startCompareDateId,
				$("#" + this.endCompareDateId).val(e), (this.mOpts.shortOpr || this.mOpts.autoSubmit) && this.close(1),
				this.mOpts.success({
					startDate: $("#" + this.mOpts.startDateId).val(),
					endDate: $("#" + this.mOpts.endDateId).val(),
					needCompare: $("#" + this.mOpts.compareCheckboxId).val(),
					startCompareDate: $("#" + this.mOpts.startCompareDateId).val(),
					endCompareDate: $("#" + this.mOpts.endCompareDateId).val()
				})) : this.dateInput = this.endCompareDateId;
		else if (this.endCompareDateId == this.dateInput) {
			if ("" == $("#" + this.startCompareDateId).val()) return this.dateInput = this.startCompareDateId,
				this.selectDate(t), !1;
			if (0 == this.checkDateRange($("#" + this.startCompareDateId).val(), t)) return !1; - 1 == this.compareStrDate(t, $("#" + this.startCompareDateId).val()) && ($("#" + this.dateInput).val($("#" + this.startCompareDateId).val()),
					$("#" + this.startCompareDateId).val(e), e = $("#" + this.dateInput).val()), $("#" + this.dateInput).val(e),
				this.dateInput = this.startCompareDateId, this.removeCSS(1), this.addCSS(1), this.startDefDate = "",
				this.mOpts.autoSubmit && (this.close(1), this.mOpts.success({
					startDate: $("#" + this.mOpts.startDateId).val(),
					endDate: $("#" + this.mOpts.endDateId).val(),
					needCompare: $("#" + this.mOpts.compareCheckboxId).val(),
					startCompareDate: $("#" + this.mOpts.startCompareDateId).val(),
					endCompareDate: $("#" + this.mOpts.endCompareDateId).val()
				}));
		}
	}, i.prototype.show = function(t, e) {
		if (!this._disabled) {
			$("#" + e.dateRangeDiv).css("display", t ? "none" : ""), $("#" + e.dateRangeCompareDiv).css("display", t ? "" : "none");
			var a = t ? $("#" + this.inputCompareId).offset() : $("#" + this.inputId).offset(),
				s = (t ? $("#" + this.inputCompareId).height() : $("#" + this.inputId).height(),
					parseInt($(document.body)[0].clientWidth)),
				i = a.left;
			return $("#" + this.calendarId).css("display", "block"), (1 == this.mOpts.singleCompare || 1 == this.mOpts.isSingleDay) && ($("#" + this.endDateId).css("display", "none"),
					$("#" + this.endCompareDateId).css("display", "none"), $("#" + this.mOpts.joinLineId).css("display", "none"),
					$("." + this.mOpts.joinLineId).css("display", "none")), s > 0 && $("#" + this.calendarId).width() + a.left > s && (i = a.left + $("#" + this.inputId).width() - $("#" + this.calendarId).width() + (/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? 5 : 0),
					"ta" == e.mOpts.theme && (i += 50)), $("#" + this.calendarId).css("left", i + "px"), $("#" + this.calendarId).css("top", a.top + ("ta" == e.mOpts.theme ? 35 : 22) + "px"),
				this.changeInput(t ? this.startCompareDateId : this.startDateId), !1;
		}
	}, i.prototype.close = function(t) {
		if (t) {
			this.mOpts.shortOpr === !0 ? ($("#" + this.inputId).val($("#" + this.startDateId).val()),
				$("#" + this.inputCompareId).val($("#" + this.startCompareDateId).val())) : $("#" + this.inputId).val($("#" + this.startDateId).val() + ("" == $("#" + this.endDateId).val() ? "" : this.mOpts.defaultText + $("#" + this.endDateId).val()));
			var e = 1 == this.mOpts.isTodayValid && "" != this.mOpts.isTodayValid ? (new Date).getTime() : (new Date).getTime() - 864e5,
				a = this.str2date($("#" + this.startDateId).val()).getTime(),
				s = this.str2date($("#" + this.endDateId).val()).getTime();
			if (a > s) {
				var i = $("#" + this.startDateId).val();
				$("#" + this.startDateId).val($("#" + this.endDateId).val()), $("#" + this.endDateId).val(i);
			}
			var d = this.str2date($("#" + this.startCompareDateId).val()).getTime(),
				r = this.str2date($("#" + this.endCompareDateId).val()).getTime();
			if (d > r) {
				var i = $("#" + this.startCompareDateId).val();
				$("#" + this.startCompareDateId).val($("#" + this.endCompareDateId).val()), $("#" + this.endCompareDateId).val(i);
			}
			var n = 1 == this.mOpts.shortOpr ? $("#" + this.startDateId).val() : $("#" + this.startDateId).val() + ("" == $("#" + this.endDateId).val() ? "" : this.mOpts.defaultText + $("#" + this.endDateId).val()),
				p = document.getElementById(this.inputId);
			if (p && "INPUT" == p.tagName ? ($("#" + this.inputId).val(n), $("#" + this.inputCompareId).is(":visible") && $("#" + this.inputCompareId).val(c)) : ($("#" + this.inputId).html(n),
				$("#" + this.inputCompareId).is(":visible") && $("#" + this.inputCompareId).html(c)), "ta" != this.mOpts.theme && "" != $("#" + this.startCompareDateId).val() && "" != $("#" + this.endCompareDateId).val()) {
				var m = this.str2date($("#" + this.startCompareDateId).val()).getTime(),
					h = this.str2date($("#" + this.endCompareDateId).val()).getTime(),
					o = m + s - a;
				o > e && (o = e, $("#" + this.startCompareDateId).val(this.formatDate(this.date2ymd(new Date(o + a - s)).join("-")))),
					$("#" + this.endCompareDateId).val(this.formatDate(this.date2ymd(new Date(o)).join("-")));
				var m = this.str2date($("#" + this.startCompareDateId).val()).getTime(),
					h = this.str2date($("#" + this.endCompareDateId).val()).getTime();
				if (m > h) {
					var i = $("#" + this.startCompareDateId).val();
					$("#" + this.startCompareDateId).val($("#" + this.endCompareDateId).val()), $("#" + this.endCompareDateId).val(i);
				}
			}
			var c = 1 == this.mOpts.shortOpr ? $("#" + this.startCompareDateId).val() : $("#" + this.startCompareDateId).val() + ("" == $("#" + this.endCompareDateId).val() ? "" : this.mOpts.defaultText + $("#" + this.endCompareDateId).val());
			p && "INPUT" == p.tagName ? $("#" + this.inputCompareId).val(c) : $("#" + this.inputCompareId).html(c);
			$("#" + this.mOpts.startDateId).val($("#" + this.startDateId).val()), $("#" + this.mOpts.endDateId).val($("#" + this.endDateId).val()),
				$("#" + this.mOpts.startCompareDateId).val($("#" + this.startCompareDateId).val()), $("#" + this.mOpts.endCompareDateId).val($("#" + this.endCompareDateId).val());
			for (var l in this.periodObj) $("#" + this.mOpts[l]) && $("#" + this.mOpts[l]).parent().removeClass("a");
		}
		return $("#" + this.calendarId).css("display", "none"), !1;
	}, i.prototype.fillDate = function(t, e, a) {
		var s = this,
			i = "ta" == this.mOpts.theme,
			d = new Date(t, e, 1),
			r = new Date(t, e, 1),
			n = r.getDay();
		r.setDate(1 - n);
		var p = new Date(t, e + 1, 0),
			m = new Date(t, e + 1, 0);
		n = m.getDay(), m.setDate(m.getDate() + 6 - n);
		var h = new Date,
			o = h.getDate(),
			c = h.getMonth(),
			l = h.getFullYear(),
			D = document.createElement("table");
		if (i) {
			D.className = this.mOpts.dateTable, cap = document.createElement("caption"), $(cap).append(t + "年" + (e + 1) + "月"),
				$(D).append(cap), thead = document.createElement("thead"), tr = document.createElement("tr");
			for (var I = ["日", "一", "二", "三", "四", "五", "六"], C = 0; 7 > C; C++) th = document.createElement("th"),
				$(th).append(I[C]), $(tr).append(th);
			$(thead).append(tr), $(D).append(thead), tr = document.createElement("tr"), td = document.createElement("td"),
				0 == a && $(td).append('<a href="javascript:void(0);" id="' + this.nextMonth + '"><i class="i_next"></i></a>'),
				a + 1 == this.mOpts.calendars && $(td).append('<a href="javascript:void(0);" id="' + this.preMonth + '"><i class="i_pre"></i></a>'),
				$(td).attr("colSpan", 7), $(td).css("text-align", "center"), $(tr).append(td), $(D).append(tr);
		} else {
			D.className = this.mOpts.theme + "_" + this.mOpts.dateTable, tr = document.createElement("tr"),
				td = document.createElement("td"), 0 == a && $(td).append('<a href="javascript:void(0);" id="' + this.nextMonth + '" class="gri_dateRangeNextMonth"><span>next</span></a>'),
				a + 1 == this.mOpts.calendars && $(td).append('<a href="javascript:void(0);" id="' + this.preMonth + '" class="gri_dateRangePreMonth"><span>pre</span></a>'),
				$(td).append(t + "年" + (e + 1) + "月"), $(td).attr("colSpan", 7), $(td).css("text-align", "center"),
				$(td).css("background-color", "#F9F9F9"), $(tr).append(td), $(D).append(tr);
			var I = ["日", "一", "二", "三", "四", "五", "六"];
			tr = document.createElement("tr");
			for (var C = 0; 7 > C; C++) td = document.createElement("td"), $(td).append(I[C]), $(tr).append(td);
			$(D).append(tr);
		}
		for (var v = "", O = 0, u = "", g = r; g.getTime() <= m.getTime(); g.setDate(g.getDate() + 1)) {
			if (g.getTime() < d.getTime()) v = this.mOpts.theme + "_" + this.mOpts.disableGray, O = "-1";
			else if (g.getTime() > p.getTime()) v = this.mOpts.theme + "_" + this.mOpts.disableGray,
				O = "1";
			else if (1 == this.mOpts.stopToday && g.getTime() > h.getTime() || g.getTime() < 1e3 * s.mOpts.minValidDate || "" !== s.mOpts.maxValidDate && g.getTime() > 1e3 * s.mOpts.maxValidDate) v = this.mOpts.theme + "_" + this.mOpts.disableGray,
				O = "2";
			else {
				if (O = "0", g.getDate() == o && g.getMonth() == c && g.getFullYear() == l ? 1 == this.mOpts.isTodayValid ? v = this.mOpts.theme + "_" + this.mOpts.isToday : (v = this.mOpts.theme + "_" + this.mOpts.disableGray,
					O = "2") : v = "", !this.mOpts.weekendDis || 6 != g.getDay() && 0 != g.getDay() || (v = this.mOpts.theme + "_" + this.mOpts.disableGray,
					O = "3"), this.mOpts.disCertainDay && this.mOpts.disCertainDay.length > 0)
					for (var y in this.mOpts.disCertainDay) isNaN(this.mOpts.disCertainDay[y]) || g.getDay() !== this.mOpts.disCertainDay[y] || (v = this.mOpts.theme + "_" + this.mOpts.disableGray,
						O = "4");
				if (this.mOpts.disCertainDate && this.mOpts.disCertainDate.length > 0) {
					var f = !1;
					for (var y in this.mOpts.disCertainDate)
						if (!isNaN(this.mOpts.disCertainDate[y]) || isNaN(parseInt(this.mOpts.disCertainDate[y])))
							if (this.mOpts.disCertainDate[0] === !0) {
								if (f = !(g.getDate() === this.mOpts.disCertainDate[y]), !f) break;
							} else if (f = !(g.getDate() !== this.mOpts.disCertainDate[y])) break;
					f && (v = this.mOpts.theme + "_" + this.mOpts.disableGray, O = "4");
				}
			}
			0 == g.getDay() && (tr = document.createElement("tr")), td = document.createElement("td"),
				td.innerHTML = g.getDate(), "" != v && $(td).attr("class", v), 0 == O && (u = g.getFullYear() + "-" + (g.getMonth() + 1) + "-" + g.getDate(),
					$(td).attr("id", s.calendarId + "_" + u), $(td).css("cursor", "pointer"), function(t) {
						$(td).bind("click", t, function() {
							return s.mOpts.beforeSelect.call(s, t) === !1 ? !1 : (s.selectDate(t), !1);
						});
					}(u)), $(tr).append(td), 6 == g.getDay() && $(D).append(tr);
		}
		return D;
	}, i.prototype.str2date = function(t) {
		var e = t.split("-");
		return new Date(e[0], e[1] - 1, e[2]);
	}, i.prototype.compareStrDate = function(t, e) {
		var a = this.str2date(t),
			s = this.str2date(e);
		return a.getTime() > s.getTime() ? 1 : a.getTime() == s.getTime() ? 0 : -1;
	}, i.prototype.date2ymd = function(t) {
		return [t.getFullYear(), t.getMonth() + 1, t.getDate()];
	}, i.prototype.changeInput = function(t) {
		1 == this.mOpts.isSingleDay && (t = this.startDateId);
		var e = [this.startDateId, this.startCompareDateId, this.endDateId, this.endCompareDateId],
			a = "";
		a = t == this.startDateId || t == this.endDateId ? this.mOpts.theme + "_" + this.mOpts.selectCss : this.mOpts.theme + "_" + this.mOpts.compareCss,
			t == this.endDateId && this.mOpts.singleCompare && (a = this.mOpts.theme + "_" + this.mOpts.compareCss);
		for (var s in e) e.hasOwnProperty(s) && ($("#" + e[s]).removeClass(this.mOpts.theme + "_" + this.mOpts.selectCss),
			$("#" + e[s]).removeClass(this.mOpts.theme + "_" + this.mOpts.compareCss));
		$("#" + t).addClass(a), $("#" + t).css("background-repeat", "repeat"), this.dateInput = t;
	}, i.prototype.formatDate = function(t) {
		return t.replace(/(\d{4})\-(\d{1,2})\-(\d{1,2})/g, function(t, e, a, s) {
			return 10 > a && (a = "0" + a), 10 > s && (s = "0" + s), e + "-" + a + "-" + s;
		});
	}, i.prototype.setDate = function(t) {
		return t = $.extend({}, this.initOpt || {}, t), s(t);
	};
});
define("tpl/vote/vote_item.html.js", [], function() {
	return '<div class="frm_control_group vote_op_third">\n	<div class="frm_label">选项{itemSize}</div>\n	<div class="frm_controls">\n		<span class="frm_input_box with_counter counter_in append"><input type="text" placeholder="" class="frm_input" name="optionss"><em class="frm_input_append frm_counter">43/43</em></span>\n		<span class="btn btn_input btn_default">\n			<button>上传图片</button>\n		</span>\n		<a href="javascript:;" class="js_delete_item" data-tag="{index}" data-item="{itemSize}">删除选项</a>\n	</div>\n</div>';
});
define("tpl/vote/vote_question.html.js", [], function() {
	return '<form id="question_{index}" class="vote_form">\n	<div class="vote_meta_title group">\n		<div class="vote_meta_title_opr">\n			<a href="javascript:;" class="js_question_edit" data-tag="{index}">收起</a>\n			{if index > 0}\n			<a href="javascript:;" class="js_question_delete" data-tag="{index}">删除</a>\n			{/if}\n		</div>\n		<span class="vote_warn" style="display:none">问题填写完整才能添加下一个问题</span>\n		<span class="vote_num">问题{size}</span>\n		<span class="vote_question js_vote_question"></span>\n	</div>\n	<div class="vote_meta js_item_container vote_meta_content" style="display:{if show == false}none{/if}">\n		<div class="vote_meta_detail">\n			<div class="frm_control_group">\n				<label for="" class="frm_label">标题</label>\n				<div class="frm_controls">\n					<span class="frm_input_box with_counter counter_in append vote_title js_question_title">\n						<input autofocus="" type="text" placeholder="" class="frm_input js_option_input" name="question_title" value="{title}"><em class="frm_input_append frm_counter">0/35</em>\n					</span>\n					<span class="frm_tips"></span>\n				</div>\n			</div>\n		</div>\n		<div class="vote_meta_detail js_vote_type vote_meta_radio">\n			<div class="frm_control_group">\n				<div class="frm_controls vote_meta_radio">\n					<label class="vote_radio_label selected">\n						<i class="icon_radio"></i>\n						<span type="label_content">单选</span>\n						<input name="isMlt" type="radio" value="1" class="vote_radio" {if type == 1}checked{/if}>\n					</label>\n					<label class="vote_radio_label">\n						<i class="icon_radio"></i>\n						<span type="label_content">多选</span>\n						<input name="isMlt" type="radio" value="2" class="vote_radio" {if type == 2}checked{/if}>\n					</label>\n				</div>\n			</div>	\n		</div>\n		{each options as item ids}\n		<div class="vote_meta_detail js_vote_option">\n			<div class="frm_control_group">\n				<div class="frm_label">选项{formartNum ids+1}</div>\n				<div class="frm_controls">\n					<span class="frm_input_box with_counter counter_in append">\n						<input type="text" placeholder="" class="frm_input js_option_input" name="option{ids}" value="{item.name}"><em class="frm_input_append frm_counter">0/35</em>\n					</span>\n					<!-- <span class="frm_num warning">0/35</span> -->\n					<!-- <span class="btn btn_input btn_default">\n						<a href="javascript:;" id="123">上传图片</a>\n					</span> -->\n					<div class="upload_area">\n						{if item.url}\n						<a class="btn btn_upload js_vote_upload_btn" id="js_upload_{index}_{ids}">重新上传</a>\n						{else}\n						<a class="btn btn_upload js_vote_upload_btn" id="js_upload_{index}_{ids}">上传图片</a>\n						{/if}\n					</div>\n					\n					{if ids >=2 }\n					<a href="javascript:;" class="link_delete js_delete_item" data-tag="{index}" data-item="{ids}">删除选项</a>\n					{/if}\n					<span class="frm_tips"></span>\n				</div>\n\n				<div class="img_container" id="js_upload_{index}_{ids}" style="display:{if item.url}\'\'{else}none{/if}">\n					<span class="img_panel"><img class="preview" src="{item.url}"/></span>\n					<a href="javascript:;" class="link_dele" id="js_delete_{index}_{ids}">删除</a>\n				</div>\n			</div>\n		</div>\n		{/each}\n		<div class="vote_meta_detail tips_wrp">\n			<p id="voteAdd" class="tips_global option_tips">\n				<a href="javascript:;" class="js_add_item" data-tag="{index}">添加选项</a>\n			</p>\n			<!--<p id="voteFull" class="tips_global option_tips">选项已满，不可继续添加</p>-->\n		</div>\n	</div>\n</form>	';
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
define("tpl/verifycode.html.js", [], function() {
	return '<div class="verifycode">\n	<span class="frm_input_box"><input id="imgcode" name="imgcode" type="text" value="" class="frm_input"></span>\n    <div class="verifyimg_wrp">\n        <img src="">\n        <a href="javascript:;" class="changeVerifyCode">换一张</a>\n    </div>\n</div>\n';
});
define("tpl/step.html.js", [], function(e, t, n) {
	return '<ul class="processor_bar grid_line">\n    {each stepArr as item index}\n    <li class="{if (index+1==length)}no_extra{/if} step grid_item size1of{length} {item.cls}">\n        <h4>{item.name}</h4>\n    </li>\n    {/each}\n</ul>\n';
});
define("tpl/dialog.html.js", [], function() {
	return '<div class="dialog_wrp {className}" style="{if width}width:{width}px;{/if}{if height}height:{height}px;{/if};display:none;">\n  <div class="dialog" id="{id}">\n    <div class="dialog_hd">\n      <h3>{title}</h3>\n      {if !hideClose}\n      <!--#0001#-->\n      <a href="javascript:;" class="pop_closed" onclick="return false;">关闭</a>\n      <!--%0001%-->\n      {/if}\n    </div>\n    <div class="dialog_bd">\n      <div class="page_msg large simple default {msg.msgClass}">\n        <div class="inner group">\n          <span class="msg_icon_wrapper"><i class="icon_msg {icon} "></i></span>\n          <div class="msg_content ">\n          {if msg.title}<h4>{=msg.title}</h4>{/if}\n          {if msg.text}<p>{=msg.text}</p>{/if}\n          </div>\n        </div>\n      </div>\n    </div> \n    <div class="dialog_ft">\n  	{if !hideClose}\n      {each buttons as bt index}\n      <a href="javascript:;" class="btn {bt.type} js_btn" onclick="return false;">{bt.text}</a>\n      {/each}\n  	{/if}\n    </div>\n  </div>\n</div>\n{if mask}<div class="mask"></div>{/if}\n\n';
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
define("tpl/popover.html.js", [], function() {
	return '<div class="popover {className}">\n    <div class="popover_inner">\n        <div class="popover_content jsPopOverContent">{=content}</div>\n		<!--#0001#-->\n        {if close}<a href="javascript:;" class="popover_close icon16_common close_flat jsPopoverClose">关闭</a>{/if}\n        <!--%0001%-->\n\n        <div class="popover_bar">{each buttons as bt index}<a href="javascript:;" class="btn btn_{bt.type} jsPopoverBt">{bt.text}</a>{if index < buttons.length-1}&nbsp;{/if}{/each}</div>\n    </div>\n    <i class="popover_arrow popover_arrow_out"></i>\n    <i class="popover_arrow popover_arrow_in"></i> \n</div>\n';
});
define("tpl/tooltip.html.js", [], function(e, t, n) {
	return '<div class="tooltip">\n    <div class="tooltip_inner">{content}</div>\n    <i class="tooltip_arrow"></i>\n</div>\n';
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
define("tpl/media/dialog/videomsg_layout.html.js", [], function() {
	return '<div class="dialog_media_container">\n    <div class="sub_title_bar in_dialog">\n        <div class="title_tab js_videotab"></div>\n        <div class="search_bar dn">\n            <span class="frm_input_box search with_del append">\n                <a class="del_btn" href="javascript:"><i class="icon_search_del"></i>&nbsp;</a>\n                <a id="msgSearchBtn" href="javascript:" class="frm_input_append"><i class="icon16_common search_gray">搜索</i>&nbsp;</a>\n                <input id="msgSearchInput" type="text" placeholder="关键字" value="" class="frm_input">\n            </span>\n        </div>\n        <div class="richvideo_create js_video_create {if scene != \'default\'}dn{/if}">\n            <a class="" target="_blank" href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&type=15&lang=zh_CN&token={token}">\n                <i class="icon_richvideo_small"></i><strong>新建视频消息</strong>\n            </a>\n        </div>\n    </div>\n    <div class="js_video_status js_video_content dn">\n        <div class="richvideo_list media_dialog" id="js_videomsg_list">\n            <div class="richvideo_col"><div class="inner"></div></div>&nbsp;\n            <div class="richvideo_col"><div class="inner"></div></div>\n        </div>\n    </div>\n    <div class="js_video_status js_video_tencent dn">\n        <div class="video">\n            <div class="frm_control_group">\n                <label for="" class="frm_label">视频网址</label>\n                <div class="frm_controls">\n                    <span class="frm_input_box"><input type="text" class="frm_input js_video_txurl"></span>\n                    <p class="frm_tips">支持腾讯视频和微视频</p>\n                </div>\n            </div>\n			<div class="video_preview js_video_preview"></div>\n		</div>\n    </div>\n    <div class="js_video_status js_video_loading">\n        <i class="icon_loading_small white">loading...</i>\n    </div>\n    <div class="js_video_status js_video_none dn">\n        <div class="no_media_wrp">\n            <p class="empty_tips js_empty_tips"></p>\n            <!--\n            <div class="richvideo_create js_video_create">\n                <a class="" target="_blank" href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&type=15&lang=zh_CN&token={token}">\n                    <i class="icon_richvideo_small"></i><strong>新建视频消息</strong>\n                </a>\n            </div>\n            -->\n        </div>\n        <span class="vm_box"></span>\n    </div>\n    \n    <div class="pagination_wrp pageNavigator js_pagebar"></div>\n</div>\n';
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
define("tpl/media/dialog/image_group.html.js", [], function() {
	return '{each file_group_list.file_group as item}\n<dd id="js_group{item.id}" class="inner_menu_item js_groupitem{if item.id == group} selected{/if}" data-groupid="{item.id}">\n    <a href="javascript:;" class="inner_menu_link" title="{item.name}" onclick="return false">\n        <strong>{item.name}</strong><em class="num">(<span>{item.count}</span>)</em>\n    </a>\n</dd>\n{/each}\n';
});
define("tpl/media/dialog/image_list.html.js", [], function() {
	return '{if file_item.length == 0}\n<div class="empty_tips">该分组暂时没有图片素材</div>\n{else}\n{each file_item as item}\n<li class="img_item js_imageitem" data-id="{item.file_id}" data-url="{item.cdn_url}" data-format="{item.img_format}">\n    <label class="frm_checkbox_label{if item.selected} selected{/if} img_item_bd">\n        {if scene == \'cdn\' && item.cdn_url}\n        <img src="{item.cdn_url}" alt="{item.name}" class="pic">\n        {else}\n        <img src="{item.img_url}" alt="{item.name}" class="pic">\n        {/if}\n        <span class="lbl_content">{item.name}</span>\n        <div class="selected_mask">\n            <div class="selected_mask_inner"></div>\n            <div class="selected_mask_icon"></div>\n        </div>\n    </label>\n</li>\n{/each}\n{/if}\n';
});
define("tpl/media/dialog/image_layout.html.js", [], function() {
	return '<div class="img_pick_panel inner_container_box side_l cell_layout">\n    <div class="inner_side">\n        <div class="group_list">\n            <div class="inner_menu_box">\n                <dl class="inner_menu js_group"></dl>\n            </div>                    \n        </div>\n    </div>\n    <div class="inner_main">\n        <div class="img_pick_area">\n            <div class="sub_title_bar in_dialog">\n                <div class="upload_box r align_right">\n                    <span class="upload_area"><a id="js_imageupload" class="btn btn_primary js_imageupload" data-groupid="">本地上传</a></span>\n                </div>\n                {if desc}\n                <div class="bubble_tips bubble_right warn r">\n                    <div class="bubble_tips_inner">{desc}</div> \n                    <i class="bubble_tips_arrow out"></i>\n                    <i class="bubble_tips_arrow in"></i>\n                </div>\n                {/if}\n            </div>\n            <div>\n                <div class="img_pick">\n                    <i class="icon_loading_small white js_loading"></i>\n                    <ul class="group js_list img_list"></ul>\n                </div>\n                <div class="js_pagebar"></div>\n            </div>\n        </div>\n    </div>\n    <p class="dialog_ft_desc">已选<span class="js_selected">0</span>个，可选{maxSelect}个</p>\n</div>\n';
});
define("tpl/biz_web/ui/dropdown.html.js", [], function(e, t, n) {
	return '<a href="javascript:;" class="btn dropdown_switch jsDropdownBt"><label class="jsBtLabel" {if search}contenteditable="true"{/if}>{label}</label><i class="arrow"></i></a>\n<div class="dropdown_data_container jsDropdownList">\n    <ul class="dropdown_data_list">\n        {if renderHtml}\n        {renderHtml}\n        {else}\n            {each data as o index}\n            <li class="dropdown_data_item {if o.className}{o.className}{/if}">  \n                <a onclick="return false;" href="javascript:;" class="jsDropdownItem" data-value="{o.value}" data-index="{index}" data-name="{o.name}">{o.name}</a>\n            </li>\n            {/each}        \n        {/if}\n    </ul>\n</div>\n';
});
define("tpl/biz_web/ui/checkbox.html.js", [], function(e, t, n) {
	return '<label for="_checkbox_{index}" class="frm_{type}_label">\n	<i class="icon_{type}"></i>\n	<input type="{type}" class="frm_{type}" name="{name}" id="_checkbox_{index}">\n	<span class="lbl_content">{label}</span>\n</label>';
});
define("tpl/top.html.js", [], function(e, t, n) {
	return '<ul class="tab_navs title_tab" data-index="{itemIndex=0}">\n    {each data as o index}\n    {if (typeof o.acl == "undefined" || o.acl == 1)}\n    <li data-index="{itemIndex++}" class="tab_nav {if (itemIndex == 1)}first{/if} js_top {o.className}" data-id="{o.id}"><a href="{o.url}" {if o.target==\'_blank\'}target="_blank"{/if}>{o.name}</a></li>\n    {/if}\n    {/each}\n</ul>\n';
});
define("tpl/uploader.html.js", [], function() {
	return '<li id="uploadItem{id}" data-status="{className}" class="upload_file">\n    <strong class="upload_file_name">{fileName}</strong>\n    <span class="upload_file_size">({size})</span>\n    <div class="progress_bar"><div class="progress_bar_thumb" style="width:0%"></div></div>\n    <a href="javascript:;" data-id="{id}" class="upload_file_cancel js_cancel">取消</a>\n</li>\n';
});
define("tpl/tooltips.html.js", [], function() {
	return '<div class="popover {parentClass}" style="display:none;position:{container_mode};{if offset.left}left:{offset.left}px;top:{offset.top}px;{/if}">\n    <div class="popover_inner">\n        <div class="popover_content">{=content}</div>\n        {if container_close}\n        <!--#0001#-->\n        <a href="javascript:;" class="popover_close icon16_common close_flat js_popover_close">关闭</a>\n        <!--%0001%-->\n        {/if}\n        {if buttons.length > 0}\n        <div class="popover_bar">\n			{each buttons as o index}\n			<a onclick="return false;" href="javascript:;" class="btn {o.type}">{o.text}</a>\n			{/each}\n        </div>\n        {/if}\n    </div>\n    <i class="popover_arrow popover_arrow_out"></i>\n    <i class="popover_arrow popover_arrow_in"></i>\n</div>\n';
});
define("tpl/popup.html.js", [], function() {
	return '<div class="dialog_wrp {className}" style="{if width}width:{width}px;{/if}{if height}height:{height}px;{/if}">\n	<div class="dialog">\n		<div class="dialog_hd">\n			<h3>{title}</h3>\n			<!--#0001#-->\n			<a href="javascript:;" onclick="return false" class="icon16_opr closed pop_closed">关闭</a>\n			<!--%0001%-->\n		</div>\n		<div class="dialog_bd">{=content}</div>\n		{if buttons && buttons.length}\n		<div class="dialog_ft">\n			{each buttons as bt index}\n            <span class="btn {bt.type} btn_input js_btn_p"><button type="button" class="js_btn" data-index="{index}">{bt.text}</button></span>\n	        {/each}\n		</div>\n		{/if}\n	</div>\n</div>{if mask}<div class="mask"><iframe frameborder="0" style="filter:progid:DXImageTransform.Microsoft.Alpha(opacity:0);position:absolute;top:0px;left:0px;width:100%;height:100%;" src="about:blank"></iframe></div>{/if}\n';
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
define("cardticket/parse_data.js", ["cardticket/add/member_info_flag.js"], function(e) {
	"use strict";

	function t(e) {
		var t = c[e.card_type] || e.card_type;
		switch (t += "") {
			case "2":
				e = e.discount;
				break;

			case "1":
				e = e.groupon;
				break;

			case "3":
				e = e.gift;
				break;

			case "4":
				e = e.cash;
				break;

			case "0":
				e = e.general_coupon;
				break;

			case "10":
				e = e.member_card;
				break;

			case "21":
				e = e.scenic_ticket;
				break;

			case "22":
				e = e.movie_ticket;
				break;

			default:
				e = e.general_coupon || e.coupon;
		}
		return e ? (e.type = t, e) : null;
	}

	function _(e, t) {
		return "number" != typeof e && (e = praseFloat(e), isNaN(e)) ? 0 : (t || (t = 2), parseFloat(e.toFixed(t)));
	}

	function i(e) {
		var t = /^https?:\/\/mp.weixin.qq.com\/s/,
			_ = /^http:\/\/mp.weixin.qq.com\/bizmall\/cardshelf/,
			i = /^http:\/\/mp.weixin.qq.com\/bizmall\/mallshelf/;
		return t.test(e) ? 1 : _.test(e) ? 2 : i.test(e) ? 3 : 4;
	}

	function a(e, t) {
		return 4 == t ? e.replace("http://", "") : e;
	}

	function o(e) {
		var o = {},
			e = t(e);
		if (!e) return null;
		r(o, e), r(o, e.base_info);
		var s = e.base_info.date_info || {};
		o.time_type = p[s.type] || s.type, 1 == o.time_type && (o.begin_time = s.begin_timestamp, o.end_time = s.end_timestamp),
			o.from_day = s.fixed_begin_term || 0, o.fixed_term = s.fixed_term || 30, o.quantity = e.base_info.sku.quantity,
			o.shop_id_list = e.base_info.shop_id_list, o.location_id_list = e.base_info.location_id_list;
		var c = l[o.code_type];
		if (o.code_type = "undefined" != typeof c ? c : o.code_type, "undefined" == typeof o.code_type && (o.code_type = 1),
			o.least_cost = e.least_cost && e.least_cost / 100, o.reduce_cost = e.reduce_cost && e.reduce_cost / 100,
			"0" == o.least_cost && (o.least_cost = ""), o.discount = o.discount && (100 - o.discount) / 10,
			o.detail = 1 == o.type ? o.deal_detail : o.default_detail, /^http/.test(o.logo_url) || (o.logo_url = ""),
			o.shop_type || (o.shop_type = o.location_id_list && o.location_id_list.length ? 2 : 3), o.auto_update_new_location && (o.shop_type = 1),
			o.isnew = o.func_flag ? 16 & o.func_flag : !1, o.ispay = o.func_flag ? 64 & o.func_flag : !1, o.func_flag && (o.show_in_nearby = !1),
			o.ispay && (o.can_share = !0), o.ispay && (o.detail = o.detail ? o.detail.replace(/\n微信价：.*?元$/gm, "") : ""),
			o.price = _(e.base_info.sku.price / 100), o.original_price = _(e.base_info.sku.original_price / 100),
			1 == o.create_source && (o.isnew = !0), 1 == o.time_type && o.end_time < new Date / 1e3 && (o.is_expire = !0),
			o.is_intercomm = 16384 & o.func_flag, "undefined" != typeof e.base_info.task_info && (o.is_from_intercomm = !0,
				o.task_info = e.base_info.task_info), o.is_from_intercomm && (o.isnew = !0), o.isnew || (o.quantity = "--"),
			o.status = u[o.status] || o.status, o.discount && (o.supply_discount = !0), o.can_edit_quantity = 10 != o.type,
			10 == o.type) {
			if (o.promotion_url_name) {
				var f = {
					name: o.promotion_url_name,
					tips: o.promotion_url_sub_title,
					url: o.promotion_url
				};
				f.url_type = i(f.url), f.url = a(f.url);
				var d = [f];
			} else var d = [];
			e.custom_cell1 && (e.custom_cell1.url_type = i(e.custom_cell1.url), e.custom_cell1.url = a(e.custom_cell1.url),
				d.push(e.custom_cell1)), e.custom_cell2 && (e.custom_cell2.url_type = i(e.custom_cell2.url),
				e.custom_cell2.url = a(e.custom_cell2.url), d.push(e.custom_cell2)), o.config_url = d;
			var m = e.required_info || {
					info_flag: 0
				},
				y = e.optional_info || {
					info_flag: 0
				};
			o.require_keywords = n.flag2info(m.info_flag), o.option_keywords = n.flag2info(y.info_flag),
				o.require_self_keywords = m.field_list, o.option_self_keywords = y.field_list, o.must_activate = !o.auto_activate,
				o.supply_discount && (o.prerogative = o.prerogative.replace(/^用卡可享受.*?折优惠\n/, "")), o.quantity = "--";
		}
		return o;
	}

	function r(e, t) {
		for (var _ in t) t.hasOwnProperty(_) && "object" != typeof t[_] && (e[_] = t[_]);
		return e;
	}

	function s(e) {
		for (var t = {}, _ = [], i = 0; i < e.length; i++) {
			var a = o(e[i]);
			a && (t[a.id] = a, _.push(a));
		}
		return {
			card_cache: t,
			card_list: _
		};
	}
	var n = e("cardticket/add/member_info_flag.js"),
		c = {
			DISCOUNT: "2",
			MEMBER_CARD: "10",
			GROUPON: "1",
			GIFT: "3",
			CASH: "4",
			GENERAL_COUPON: "0",
			SCENIC_TICKET: "21",
			MOVIE_TICKET: "22"
		},
		l = {
			CODE_TYPE_TEXT: 0,
			CODE_TYPE_BARCODE: 1,
			CODE_TYPE_QRCODE: 2
		},
		u = {
			CARD_STATUS_INIT: 0,
			CARD_STATUS_NOT_VERIFY: 1,
			CARD_STATUS_VERIFY_FAIL: 2,
			CARD_STATUS_VERIFY_OK: 3,
			CARD_STATUS_DELETE: 4,
			CARD_STATUS_SYS_DELETE: 5,
			CARD_STATUS_DISPATCH: 6,
			CARD_STATUS_EXPIRED: 8
		},
		p = {
			DATE_TYPE_FIX_TIME_RANGE: 1,
			DATE_TYPE_FIX_TERM: 2,
			DATE_TYPE_PERMANENT: 100
		};
	return {
		parse_cardticket: o,
		parse_cardlist: s,
		url_type: i
	};
});
define("cardticket/send_card.js", ["common/wx/popup.js", "common/wx/Tips.js", "common/wx/Cgi.js", "common/wx/Step.js", "common/wx/pagebar.js", "cardticket/parse_data.js", "cardticket/store_cgi.js", "cardticket/common_template_helper.js", "tpl/cardticket/card_table.html.js", "tpl/cardticket/card_preview.html.js", "page/cardticket/dialog_choose_card.css", "biz_web/ui/checkbox.js", "cardticket/card_quantity.js", "tpl/cardticket/send_card.html.js"], function(t) {
	"use strict";

	function e(t) {
		{
			var e;
			t.opt;
		}
		e = t.$send_popup.popup("get"), e.find(".js_card_list").html(v({
			loading: !0
		}));
	}

	function a(t, a) {
		var i = a.opt,
			n = $.extend(!0, {
				action: "batch",
				begin: t.begin,
				count: t.count
			}, i.param);
		j = !0, e(a), s.get({
			url: i.url || "/merchant/electroniccardmgr",
			data: n,
			complete: function() {
				j = !1;
			}
		}, function(t) {
			if (0 == t.base_resp.ret) {
				t = "string" == typeof t.batch_card ? $.parseJSON(t.batch_card) : t.batch_card, i.data = t.card_list;
				var e = u.parse_cardlist(i.data);
				m = e.card_cache, i.data = e.card_list, i.pageInfo.total_count = t.total_num, o(i.pageInfo, a);
			} else s.show(t);
		});
	}

	function o(t, e, a) {
		var o, p = e.opt;
		if (p.payflag = p.param.flag, o = e.$send_popup.popup("get"), a) {
			var s = o.find(".js_select");
			return s.each(function(e) {
				e >= t.begin && e < t.begin + t.count ? $(this).closest("tr").show() : $(this).closest("tr").hide();
			}), e.$send_popup.popup("resetPosition"), e.pagebar = null, void r(p.pageInfo, e);
		}
		o.find(".js_card_list").html(v(p));
		var d = p.defaultValues,
			s = o.find(".js_select");
		d.length && s.each(function() {
			for (var t = $(this), e = 0; e < d.length; e++)
				if (d[e] == t.attr("data-id")) {
					t.prop("checked", !0);
					break;
				}
		}), e.select_card_checkbox = s.checkbox({
			onChanged: function() {
				if (p.multi) {
					var t = 0;
					s.each(function() {
						$(this).prop("checked") && t++;
					}), $(".js_selectcount", o).text(t);
				}
			}
		}), e.pagebar = null, r(p.pageInfo, e), i(e), n(e), c(e), e.$send_popup.popup("resetPosition");
	}

	function i(t) {
		function e(e) {
			var o = $.trim(n.val());
			(!e || e && wx.isHotkey(e, "enter")) && (c.param.keyword = o, a(c.pageInfo, t));
		}
		var o = t.$send_popup.popup("get"),
			i = $(".js_search", o),
			n = $(".js_keyword", o),
			c = t.opt;
		i.click(function() {
			e();
		}), n.keyup(function(t) {
			e(t);
		}), n.val(c.param.keyword);
	}

	function n(t) {
		var e = t.$send_popup.popup("get"),
			a = e.find(".js_card_preview");
		a.on("click", function(t) {
			var e = $(this).data("cid"),
				a = m[e];
			if (a) {
				var o = ($(this), $(this).offset());
				$(".js_pop_card_preview").remove();
				var i = $(h({
					card: a
				})).appendTo(document.body).hide();
				i.css({
					position: "fixed",
					left: o.left - i.outerWidth() - 10,
					top: "50%",
					"margin-top": -1 * i.outerHeight() / 2,
					"z-index": "10000"
				}).show();
				var n = i.offset();
				return i.find(".js_arrow").css({
					top: o.top - n.top
				}), $(document).one("click", function() {
					i.remove();
				}), t.stopPropagation(), !1;
			}
		});
	}

	function c(t) {
		var e = t.$send_popup.popup("get"),
			a = e.find(".js_modify_quantity");
		a.each(function() {
			var t = $(this),
				e = 1 * t.attr("data-new") || 0;
			new k({
				container: t,
				setquantity: e ? !0 : !1,
				quantityChange: function(e, a) {
					var o = m[e];
					o && (o.quantity = this.opt.setquantity ? o.quantity + a : a, t.attr("data-new", 1), o.isnew = !0,
						this.opt.setquantity = !0, $("#js_ct_tr_" + e).find(".js_sendcard_quantity").text(o.quantity));
				}
			});
		});
	}

	function r(t, e) {
		var i = t.total_count,
			n = e.$send_popup.popup("get");
		if (t.count && i > t.count) {
			var c = t.begin / t.count;
			e.pagebar = new d({
				container: $(".js_pager", n),
				first: !1,
				last: !1,
				midRange: 5,
				initShowPage: c + 1,
				perPage: t.count,
				totalItemsNum: i,
				callback: function(i) {
					if (j) return !1;
					var n = i.currentPage;
					return n != c + 1 && (t.begin = (n - 1) * t.count, e.opt.hasdata && e.opt.data ? o(t, e, !0) : a(t, e)),
						e.$send_popup.popup("resetPosition"), !0;
				}
			});
		}
	}
	var p = (t("common/wx/popup.js"), t("common/wx/Tips.js")),
		s = t("common/wx/Cgi.js"),
		d = (t("common/wx/Step.js"),
			t("common/wx/pagebar.js")),
		u = t("cardticket/parse_data.js"),
		l = t("cardticket/store_cgi.js"),
		_ = (t("cardticket/common_template_helper.js"), {
			multi: !1,
			pageInfo: {
				begin: 0,
				count: 5,
				total_count: 0
			},
			param: {
				keyword: "",
				status: "3|6",
				flag: 2
			},
			neednew: !0,
			noexpire: !0,
			editquantity: !0,
			onHide: $.noop,
			selectComplete: $.noop,
			data: null,
			hasdata: !1,
			maxcount: 10,
			defaultValues: [],
			url: "",
			removeOnHide: !0,
			source: ""
		}),
		f = t("tpl/cardticket/card_table.html.js"),
		h = template.compile(t("tpl/cardticket/card_preview.html.js")),
		m = {};
	t("page/cardticket/dialog_choose_card.css"), t("biz_web/ui/checkbox.js");
	var g = function(t) {
			this.opt = $.extend(!0, {}, _, t), this.init();
		},
		v = template.compile(f),
		j = !1,
		k = t("cardticket/card_quantity.js");
	return g.prototype = {
		_html: t("tpl/cardticket/send_card.html.js"),
		init: function() {
			var t = this.opt,
				e = this,
				i = $(template.compile(this._html)()).popup({
					title: "选择卡券",
					autoShow: !1,
					buttons: [{
						text: "确定",
						type: "primary",
						click: function(a) {
							if (!j) {
								var o = e.select_card_checkbox.values()[0],
									i = this,
									n = i.get(),
									c = m[o];
								if (!o || !c) return void p.err("请选择卡券");
								if (t.multi)
									for (var r = e.select_card_checkbox.values(), s = 0; s < r.length; s++) {
										var d = m[r[s]];
										if (t.neednew && (!d.isnew || 0 == d.quantity)) return p.err("卡券库存不能为0，请先设置库存再投放"), void a.stopPropagation();
									} else if (t.neednew && (!c.isnew || 0 == c.quantity)) {
										p.err("请先设置库存再投放卡券");
										var u = n.find("input[data-id=" + o + "]");
										return $(u.closest("tr").find(".js_modify_quantity")[0]).click(), void a.stopPropagation();
									}
								if (!t.multi && t.noexpire && c.is_expire) return void p.err("卡券已过期，无法投放，请到卡券详情去延长有效期再投放");
								if (t.multi && t.noexpire)
									for (var r = e.select_card_checkbox.values(), s = 0; s < r.length; s++) {
										var d = m[r[s]];
										if (d.is_expire) return p.err("不能选择已过期的卡券，请先到卡券详情去延长有效期"), void a.stopPropagation();
									}
								var r = e.select_card_checkbox.values();
								return r.length > t.maxcount ? (p.err("最多只能选择%s个卡券".sprintf(t.maxcount)), void a.stopPropagation()) : void l.canSendCard({
									card_id: o,
									success: function(a) {
										if (a === !1) p.err("没有“审核通过”的门店。确认有至少一个“审核通过”的门店后可进行投放。");
										else if (a === !0) {
											var o = e.select_card_checkbox.values(),
												n = t.multi ? o : o,
												c = [];
											if (t.multi)
												for (var r = 0; r < n.length; r++) m[n[r]].cardid = m[n[r]].id, c.push(m[n[r]]);
											else c = m[n],
												c.cardid = m[n].id;
											t.selectComplete && t.selectComplete(c, 0), i.hide();
										}
									}
								});
							}
						}
					}, {
						text: "取消",
						type: "default",
						click: function() {
							j || this.hide();
						}
					}],
					onHide: function() {
						t.onHide.call(e), t.removeOnHide && this.remove();
					},
					className: "send_card align_edge",
					width: 960
				});
			if (this.$send_popup = i, t.hasdata && t.data) {
				t.pageInfo.total_count = t.data.length, m = {};
				for (var n = 0; n < t.data.length; n++) {
					var c = t.data[n];
					m[c.id] = c;
				}
				o(t.pageInfo, this);
			} else a(t.pageInfo, this);
		},
		show: function() {
			this.$send_popup.popup("show"), this.$send_popup.popup("resetPosition");
		},
		hide: function() {
			this.$send_popup.popup("hide");
		},
		destroy: function() {
			this.$send_popup.popup("remove");
		}
	}, g;
});
define("tpl/vote/vote_table.html.js", [], function() {
	return '<div class="">\n	{if loading}\n	<i class="icon_loading_small white">loading...</i>\n	{else}\n	<div class="table_wrp">\n		<table class="table" cellspacing="0">\n			<thead class="thead">\n				<tr>\n					<th class="table_cell vote_check">&nbsp;</th>\n					<th class="table_cell vote_title"><div class="td_panel">投票名称</div></th>\n					<th class="table_cell vote_time"><div class="td_panel">截至时间</div></th>\n					<th class="table_cell vote_num"><div class="td_panel">投票人数</div></th>\n				</tr>\n			</thead>\n			<tbody class="tbody">\n			{if !data.super_vote_info.length}\n				<tr>\n					<td class="empty_tips" colspan="4">暂无有效投票</td>\n				</tr>\n			{else}\n			{each data.super_vote_info as vote i}\n				<!--Begin 现在的-->\n				<tr id="js_ct_tr_{vote.super_vote_id}">\n					<td class="table_cell" colspan="4">\n						<label class="frm_radio_label">\n							<span class="td_panel vote_check">\n								<i class="icon_radio"></i>\n							</span>\n							<input type="radio" data-id="{vote.super_vote_id}" data-biz="{biz}" value="{vote.super_vote_id}" class="frm_radio js_select" data-height="{vote.height}">\n\n							<span class="td_panel vote_title">\n								<a target="_blank" href="/cgi-bin/newoperatevote?action=show&supervoteid={vote.super_vote_id}{token}">{vote.title}</a>\n							</span>\n							<span class="td_panel vote_time">\n								{datestring vote.expire_time*1000}\n							</span>\n							<span class="td_panel vote_num">\n								{vote.person_count}\n							</span>\n						</label>\n					</td>\n				</tr>\n				<!--End 现在的-->\n				\n				<!--Begin 原来的-->\n				<!--<tr id="js_ct_tr_{vote.super_vote_id}">\n					<td class="table_cell vote_check">\n						<div class="td_panel">\n							<label class="frm_radio_label">\n								<i class="icon_radio"></i>\n								<input type="radio" data-id="{vote.super_vote_id}" data-biz="{biz}" value="{vote.super_vote_id}" class="frm_radio js_select" data-height="{vote.height}">\n							</label>\n						</div>\n					</td>\n					<td class="table_cell vote_title"><div class="td_panel"><a target="_blank" href="/cgi-bin/newoperatevote?action=show&supervoteid={vote.super_vote_id}{token}">{vote.title}</a></div></td>\n					<td class="table_cell vote_time"><div class="td_panel">{datestring vote.expire_time*1000}</div></td>\n					<td class="table_cell vote_num"><div class="td_panel">{vote.person_count}</div></td>\n				</tr>-->\n				<!--End 原来的-->\n			{/each}\n			{/if}\n			</tbody>\n		</table>\n		<div class="js_pager"></div>\n	</div>\n	{/if}\n</div>\n\n\n';
});
define("vote/new.js", ["common/wx/popup.js", "tpl/vote/vote.html.js", "tpl/vote/vote_question.html.js", "tpl/vote/vote_item.html.js", "biz_web/ui/checkbox.js", "common/lib/datepicker.js", "biz_web/ui/dateRange.js", "biz_web/ui/dropdown.js", "common/wx/upload.js", "common/wx/media/imageDialog.js", "biz_common/moment.js", "common/qq/mask.js", "common/wx/Tips.js", "biz_common/jquery.validate.js", "common/wx/dialog.js", "common/wx/Cgi.js", "common/wx/inputCounter.js", "common/wx/tooltip.js", "biz_web/lib/json.js"], function(e) {
	"use strict";

	function t() {
		$(".js_new_vote").html(""), $(".js_new_vote").html(template.compile(s)({})), h = $(".js_question_container"),
			n(), b = [], 0 == b.length && b.push(new a({})), a.refresh(), i();
	}

	function n() {
		var e = $(".vote_container");
		e.find(".js_vote_auth .vote_radio").checkbox({
			multi: !1
		});
		var t = e.find("#jsVoteDate").datepicker();
		t.datepicker("setDate", 3), t.parent().find(".icon_datepicker").click(function() {
			t.datepicker("show");
		});
		var n = new d({
			container: e.find("#jsVoteHour"),
			data: $.map("00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23".split(","), function(e) {
				return {
					name: e,
					value: e
				};
			}),
			callback: function(e) {
				this.container.data("val", e);
			},
			search: !1
		});
		n.selected(0);
		var o = new d({
			container: e.find("#jsVoteMin"),
			data: $.map("00,05,10,15,20,25,30,35,40,45,50,55".split(","), function(e) {
				return {
					name: e,
					value: e
				};
			}),
			callback: function(e) {
				this.container.data("val", e);
			},
			search: !1
		});
		o.selected(0);
	}

	function o() {
		var e = $(".js_question_container");
		$("#js_add_question").on("click", function() {
			var e = $(".js_question").size();
			if (e >= _) return c.err("最多只能添加%s个问题".sprintf(_)), !1;
			if (!f.form()) return !1;
			for (var t = 0; t < x.length; t++)
				if (x[t]) {
					var n = $(".js_question").eq(t);
					if (!x[t].form()) return n.find(".vote_warn").show(), $("#js_error").show(), !1;
					n.find(".vote_warn").hide(), $("#js_error").hide();
				}
			return a.fold(), b.push(new a({})), b[b.length - 1].init(), i(), !1;
		}), e.delegate(".js_add_item", "click", function(e) {
			var t = $(e.target),
				n = t.data("tag");
			return b[n].save(), b[n].add(), b[n].refresh(), i(), !1;
		}), e.delegate(".js_delete_item", "click", function(e) {
			var t = $(e.target),
				n = t.data("tag"),
				o = t.data("item");
			return b[n].save(), b[n].remove(n, o), b[n].refresh(), i(), !1;
		}), e.delegate(".js_question_edit", "click", function(e) {
			var t = $(e.target),
				n = t.data("tag");
			return "编辑" == t.html() ? (t.html("收起"), $(".js_question").eq(n).removeClass("close_vote"),
				b[n].open()) : (t.html("编辑"), $(".js_question").eq(n).addClass("close_vote"), b[n].fold()), !1;
		}), e.delegate(".js_question_delete", "click", function(e) {
			var t = $(e.target),
				n = t.data("tag");
			return a.save(), b.splice(n, 1), a.turn(), a.refresh(), a.fold(), i(), !1;
		}), $(".js_complete_bnt").click(function() {
			var e = r();
			return "disabled" == $(".js_complete_bnt").attr("disabled") ? !1 : void(e && ($(".js_complete_bnt").btn(!1),
				m.post({
					url: wx.url("/cgi-bin/newoperatevote?action=create"),
					dataType: "json",
					data: {
						action: "create",
						json: e
					},
					mask: !1
				}, function(e) {
					0 == e.base_resp.ret ? (c.suc("操作成功"), location.href = wx.url("/cgi-bin/newoperatevote?action=list")) : ($(".js_complete_bnt").btn(!0),
						c.err(e.base_resp.err_msg));
				})));
		}), e.delegate(".link_dele", "click", function(e) {
			var t = $(e.target).parents(".img_container"),
				n = $(e.target).attr("id"),
				o = n.replace(/delete/gi, "upload");
			return t.hide(), t.find(".preview").attr("src", ""), $("#" + o).html("上传图片"), !1;
		});
	}

	function r() {
		a.save();
		var e = $("#jsVoteDate").val().split("-").concat([$("#jsVoteHour").data("val"), $("#jsVoteMin").data("val")]).join(""),
			e = g(e, "YYYYMMDDHHmm").unix(),
			t = window.wx.data.time;
		if (e - t > 15811200 || 0 > e - t) return c.err("投票截止时间只能在当前时间之后，半年之内"), !1;
		if (!f.form()) return !1;
		for (var n = 0; n < x.length; n++)
			if (x[n]) {
				var o = $(".js_question").eq(n);
				if (!x[n].form()) return o.find(".vote_warn").show(), !1;
				o.find(".vote_warn").hide();
			}
		for (var r = {
			title: $("input[name=vote_title]").val(),
			vote_permission: $("input[name=permission][checked]").val(),
			expire_time: e,
			vote_subject: []
		}, n = 0; n < b.length; n++) r.vote_subject[n] = {}, r.vote_subject[n].title = b[n].title, r.vote_subject[n].type = b[n].type,
			r.vote_subject[n].options = b[n].options;
		return JSON.stringify2(r);
	}

	function i() {
		f = $("#voteForm").validate({
			rules: {
				vote_title: {
					required: !0,
					rangelength: [1, 35]
				}
			},
			messages: {
				vote_title: {
					required: "请填写投票名称",
					rangelength: $.validator.format("需要在{0}到{1}个字之间")
				}
			},
			ignore: [],
			errorPlacement: function(e, t) {
				var n = t.parent().parent();
				e.insertBefore(n.find(".frm_tips"));
			}
		}), x = [];
		for (var e = 0; _ > e; e++) x.push($("#question_" + e).validate({
			rules: {
				question_title: {
					required: !0,
					rangelength: [1, 35]
				},
				option0: {
					required: !0,
					rangelength: [1, 35]
				},
				option1: {
					required: !0,
					rangelength: [1, 35]
				},
				option2: {
					required: !0,
					rangelength: [1, 35]
				},
				option3: {
					required: !0,
					rangelength: [1, 35]
				},
				option4: {
					required: !0,
					rangelength: [1, 35]
				},
				option5: {
					required: !0,
					rangelength: [1, 35]
				},
				option6: {
					required: !0,
					rangelength: [1, 35]
				},
				option7: {
					required: !0,
					rangelength: [1, 35]
				},
				option8: {
					required: !0,
					rangelength: [1, 35]
				},
				option9: {
					required: !0,
					rangelength: [1, 35]
				},
				option10: {
					required: !0,
					rangelength: [1, 35]
				},
				option11: {
					required: !0,
					rangelength: [1, 35]
				},
				option12: {
					required: !0,
					rangelength: [1, 35]
				},
				option13: {
					required: !0,
					rangelength: [1, 35]
				},
				option14: {
					required: !0,
					rangelength: [1, 35]
				},
				option15: {
					required: !0,
					rangelength: [1, 35]
				},
				option16: {
					required: !0,
					rangelength: [1, 35]
				},
				option17: {
					required: !0,
					rangelength: [1, 35]
				},
				option18: {
					required: !0,
					rangelength: [1, 35]
				},
				option19: {
					required: !0,
					rangelength: [1, 35]
				},
				option20: {
					required: !0,
					rangelength: [1, 35]
				},
				option21: {
					required: !0,
					rangelength: [1, 35]
				},
				option22: {
					required: !0,
					rangelength: [1, 35]
				},
				option23: {
					required: !0,
					rangelength: [1, 35]
				},
				option24: {
					required: !0,
					rangelength: [1, 35]
				},
				option25: {
					required: !0,
					rangelength: [1, 35]
				},
				option26: {
					required: !0,
					rangelength: [1, 35]
				},
				option27: {
					required: !0,
					rangelength: [1, 35]
				},
				option28: {
					required: !0,
					rangelength: [1, 35]
				},
				option29: {
					required: !0,
					rangelength: [1, 35]
				}
			},
			messages: {
				question_title: {
					required: "请填写问题的标题",
					rangelength: $.validator.format("需要在{0}到{1}个字之间")
				},
				option0: {
					required: "请填写问题的选项",
					rangelength: $.validator.format("需要在{0}到{1}个字之间")
				},
				option1: {
					required: "请填写问题的选项",
					rangelength: $.validator.format("需要在{0}到{1}个字之间")
				},
				option2: {
					required: "请填写问题的选项",
					rangelength: $.validator.format("需要在{0}到{1}个字之间")
				},
				option3: {
					required: "请填写问题的选项",
					rangelength: $.validator.format("需要在{0}到{1}个字之间")
				},
				option4: {
					required: "请填写问题的选项",
					rangelength: $.validator.format("需要在{0}到{1}个字之间")
				},
				option5: {
					required: "请填写问题的选项",
					rangelength: $.validator.format("需要在{0}到{1}个字之间")
				},
				option6: {
					required: "请填写问题的选项",
					rangelength: $.validator.format("需要在{0}到{1}个字之间")
				},
				option7: {
					required: "请填写问题的选项",
					rangelength: $.validator.format("需要在{0}到{1}个字之间")
				},
				option8: {
					required: "请填写问题的选项",
					rangelength: $.validator.format("需要在{0}到{1}个字之间")
				},
				option9: {
					required: "请填写问题的选项",
					rangelength: $.validator.format("需要在{0}到{1}个字之间")
				},
				option10: {
					required: "请填写问题的选项",
					rangelength: $.validator.format("需要在{0}到{1}个字之间")
				},
				option11: {
					required: "请填写问题的选项",
					rangelength: $.validator.format("需要在{0}到{1}个字之间")
				},
				option12: {
					required: "请填写问题的选项",
					rangelength: $.validator.format("需要在{0}到{1}个字之间")
				},
				option13: {
					required: "请填写问题的选项",
					rangelength: $.validator.format("需要在{0}到{1}个字之间")
				},
				option14: {
					required: "请填写问题的选项",
					rangelength: $.validator.format("需要在{0}到{1}个字之间")
				},
				option15: {
					required: "请填写问题的选项",
					rangelength: $.validator.format("需要在{0}到{1}个字之间")
				},
				option16: {
					required: "请填写问题的选项",
					rangelength: $.validator.format("需要在{0}到{1}个字之间")
				},
				option17: {
					required: "请填写问题的选项",
					rangelength: $.validator.format("需要在{0}到{1}个字之间")
				},
				option18: {
					required: "请填写问题的选项",
					rangelength: $.validator.format("需要在{0}到{1}个字之间")
				},
				option19: {
					required: "请填写问题的选项",
					rangelength: $.validator.format("需要在{0}到{1}个字之间")
				},
				option20: {
					required: "请填写问题的选项",
					rangelength: $.validator.format("需要在{0}到{1}个字之间")
				},
				option21: {
					required: "请填写问题的选项",
					rangelength: $.validator.format("需要在{0}到{1}个字之间")
				},
				option22: {
					required: "请填写问题的选项",
					rangelength: $.validator.format("需要在{0}到{1}个字之间")
				},
				option23: {
					required: "请填写问题的选项",
					rangelength: $.validator.format("需要在{0}到{1}个字之间")
				},
				option24: {
					required: "请填写问题的选项",
					rangelength: $.validator.format("需要在{0}到{1}个字之间")
				},
				option25: {
					required: "请填写问题的选项",
					rangelength: $.validator.format("需要在{0}到{1}个字之间")
				},
				option26: {
					required: "请填写问题的选项",
					rangelength: $.validator.format("需要在{0}到{1}个字之间")
				},
				option27: {
					required: "请填写问题的选项",
					rangelength: $.validator.format("需要在{0}到{1}个字之间")
				},
				option28: {
					required: "请填写问题的选项",
					rangelength: $.validator.format("需要在{0}到{1}个字之间")
				},
				option29: {
					required: "请填写问题的选项",
					rangelength: $.validator.format("需要在{0}到{1}个字之间")
				}
			},
			ignore: [],
			errorPlacement: function(e, t) {
				var n = t.parent().parent();
				e.insertBefore(n.find(".frm_tips"));
			}
		}));
		for (var t = $(".js_vote_upload_btn"), n = t.length, e = 0; n > e; e++) {
			var o = t.eq(e).attr("id");
			! function(e) {
				p.uploadCdnFile({
					container: "#" + e,
					url: wx.url("/cgi-bin/filetransfer?action=upload_material"),
					multi: !1,
					type: 2,
					accept: {
						extensions: "png,jpeg,jpg,gif",
						mimeType: "image/*"
					},
					fileSingleSizeLimit: 1048576,
					imageSize: !1,
					onAllComplete: function() {},
					onComplete: function(t, n, o, r, i) {
						return function(e, t) {
							switch (+t.base_resp.ret) {
								case 0:
									var n = t.content;
									c.suc("上传成功");
									var o = (e.replace(/upload/gi, "delete"), $("#" + e).parent().parent().siblings(".img_container"));
									o.show(), $("#" + e).html("重新上传"), o.find(".preview").attr("src", n);
									break;

								case -34:
									c.err("尺寸建议为300*300像素，大小不能超过1M。");
									break;

								case 1:
									c.err("图片太大");
									break;

								case -11:
									c.err("请上传合法的图片格式");
									break;

								default:
									c.err("上传图片失败");
							}
						}(e, r, i);
					},
					onProgress: function() {},
					onSelect: function() {},
					canContinueUpload: function() {
						return !0 / !1;
					}
				});
			}(o);
		}
		l($("input[type=text][name=vote_title]"), 35);
		var r = $("input[type=text]");
		r.each(function() {
			$(this).hasClass("js_option_input") && l($(this), 35);
		});
	}

	function a(e) {
		this.index = e.index || $(".js_question").size(), this.title = e.title || "", this.type = e.type || 1,
			this.options = e.options || [{
				name: "",
				url: ""
			}, {
				name: "",
				url: ""
			}, {
				name: "",
				url: ""
			}];
		var t = this.index + 1,
			n = t % 10,
			o = (t - t % 10) / 10;
		this.size = w[o] + j[n], this.show = !0, a.prototype.init = function() {
			var e = this.index;
			h.append(template.compile('<div class="vote_meta option_setting js_question">' + u + "</div>")(b[e]));
			var t = $(".js_question").eq(e);
			t.find(".js_vote_type .vote_radio").checkbox({
				multi: !1
			});
		}, a.prototype.check = function() {}, a.prototype.add = function() {
			var e = this.index,
				t = b[e].options.length;
			q > t ? b[e].options.push({
				name: "",
				url: ""
			}) : c.err("最多只能添加%s个选项".sprintf(q));
		}, a.prototype.remove = function(e, t) {
			b[e].options.splice(t, 1);
		}, a.prototype.turn = function() {}, a.prototype.refresh = function() {
			var e = this.index;
			$(".js_question").eq(e).html(template.compile(u)(b[e]));
			var t = $(".js_question").eq(e);
			t.find(".js_vote_type .vote_radio").checkbox({
				multi: !1
			});
		}, a.prototype.save = function() {
			var e = this.index;
			b[e].title = $(".js_question").eq(e).find("input[name=question_title]").val(), b[e].type = $(".js_question").eq(e).find("input[name=isMlt][checked]").val();
			var t = $(".js_question").eq(e).find(".js_vote_option"),
				n = t.find(".frm_input"),
				o = [];
			n.each(function(e, n) {
				o.push({
					name: n.value,
					url: t.eq(e).find(".preview").attr("src")
				});
			}), b[e].options = o;
		}, a.prototype.fold = function() {
			var e = this.index,
				t = $(".js_question").eq(e);
			t.find(".js_item_container").slideUp(), t.find(".js_vote_question").text(t.find("input[name=question_title]").val());
		}, a.prototype.open = function() {
			var e = this.index,
				t = $(".js_question").eq(e);
			t.find(".js_item_container").slideDown(), t.find(".js_vote_question").text("");
		}, a.refresh = function() {
			h.html(""), $(b).each(function(e, t) {
				t.init();
			});
		}, a.fold = function() {
			h.find(".js_question_edit").html("编辑"), $(".js_question").addClass("close_vote");
			for (var e = b.length, t = 0; e > t; t++) b[t].fold();
		}, a.save = function() {
			for (var e = b.length, t = 0; e > t; t++) b[t].save();
		}, a.turn = function() {
			for (var e = b.length, t = 0; e > t; t++) {
				b[t].index = t;
				var n = t + 1,
					o = n % 10,
					r = (n - n % 10) / 10;
				b[t].size = w[r] + j[o], b[t].show = !1;
			}
		};
	}

	function l(e, t) {
		return new v(e, {
			maxLength: t,
			showCounter: !0
		});
	}
	e("common/wx/popup.js"); {
		var s = e("tpl/vote/vote.html.js"),
			u = e("tpl/vote/vote_question.html.js"),
			d = (e("tpl/vote/vote_item.html.js"),
				e("biz_web/ui/checkbox.js"), e("common/lib/datepicker.js"), e("biz_web/ui/dateRange.js"),
				e("biz_web/ui/dropdown.js")),
			p = e("common/wx/upload.js"),
			g = (e("common/wx/media/imageDialog.js"),
				e("biz_common/moment.js")),
			c = (e("common/qq/mask.js"), e("common/wx/Tips.js")),
			m = (e("biz_common/jquery.validate.js"),
				e("common/wx/dialog.js"), e("common/wx/Cgi.js")),
			v = e("common/wx/inputCounter.js");
		e("common/wx/tooltip.js");
	}
	e("biz_web/lib/json.js");
	var f, h, _ = 10,
		q = 30,
		j = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
		w = ["", "十", "二十", "三十", "四十", "五十"],
		b = [],
		x = [];
	return template && template.helper("formartNum", function(e) {
		var t = e % 10,
			n = (e - e % 10) / 10;
		return w[n] + j[t];
	}), {
		initPage: t,
		eventBind: o,
		getFullData: r
	};
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
define("tpl/media/appmsg_edit/editor.html.js", [], function() {
	return '<div class="appmsg_editor">\n	<div class="inner">\n		<div class="appmsg_edit_item">\n			<label for="" class="frm_label">标题</label>\n            <span class="frm_input_box with_counter counter_in append">\n                <input type="text" class="frm_input js_title js_counter" max-length="64">\n                <em class="frm_input_append frm_counter">0/64</em>\n            </span>\n            <div class="frm_msg fail js_title_error" style="display:none;">标题不能为空且长度不能超过64字</div>\n		</div>\n		<div class="appmsg_edit_item">\n			<label for="" class="frm_label">\n				<strong class="title">作者</strong>\n				<p class="tips l">（选填）</p>\n			</label>\n            <span class="frm_input_box with_counter counter_in append">\n                <input type="text" class="frm_input js_author js_counter" max-length="8">\n                <em class="frm_input_append frm_counter">0/8</em>\n            </span>\n            <div class="frm_msg fail js_author_error" style="display:none;">作者不能超过8个字</div>\n		</div>\n		<div class="appmsg_edit_item">\n			<label for="" class="frm_label">\n				<strong class="title">封面</strong>\n				<p class="js_cover_tip tips"></p>\n			</label>\n			<!--<div class="upload_wrap">\n                <div class="upload_box">\n                    <div class="upload_area">\n                        <a id="js_appmsg_upload_cover" href="javascript:void(0);" onclick="return false;" class="btn btn_upload">\n                            上传                        </a>\n                    </div>\n                </div>&nbsp;\n                <p class="js_cover upload_preview">\n					<a class="js_removeCover" href="javascript:void(0);" onclick="return false;">删除</a>\n                </p>\n			</div>\n            <a id="js_imagedialog" href="javascript:void(0);" onclick="return false;" class="btn btn_upload">从图片库选择</a>-->\n			<div class="upload_wrap">\n                <div class="upload_box">\n                    <div class="upload_area">\n                        <a id="js_appmsg_upload_cover" href="javascript:void(0);" onclick="return false;" class="btn btn_upload">\n                            上传                        </a>\n                    </div>\n                </div>&nbsp;&nbsp;<a id="js_imagedialog" href="javascript:void(0);" onclick="return false;" class="btn btn_upload">从图片库选择</a>\n                <p class="js_cover upload_preview">\n					<a class="js_removeCover" href="javascript:void(0);" onclick="return false;">删除</a>\n                </p>\n			</div>\n            \n            <p class="frm_tips">\n                <label for="" class="frm_checkbox_label js_show_cover_pic selected">\n                    <i class="icon_checkbox"></i>\n                    <input type="checkbox" class="frm_checkbox" checked>\n                   封面图片显示在正文中 \n                </label>\n            </p>\n            <div class="frm_msg fail js_cover_error" style="display:none;">必须插入一张图片</div>\n		</div>\n        {if type==10}\n        <!--\n		<p><a class="js_addDesc" href="javascript:void(0);" onclick="return false;">添加摘要</a></p>\n        -->\n		<div class="js_desc_area appmsg_edit_item align_counter">\n            <label for="" class="frm_label">\n				<strong class="title">摘要</strong>\n				<p class="tips l">（选填，该摘要只在发送图文消息为单条时显示）</p>\n            </label>\n            <span class="frm_textarea_box with_counter counter_out">\n                <textarea class="frm_textarea js_desc js_counter" max-length="120"></textarea>\n                <em class="frm_input_append frm_counter">0/120</em>\n            </span>\n            <div class="frm_msg fail js_desc_error" style="display:none;"></div>\n		</div>\n		<div id="js_ueditor" class="appmsg_edit_item content_edit">\n            <label for="" class="frm_label">\n                <strong class="title">正文</strong>\n                <p class="tips l">\n                    <em id="js_auto_tips"></em> \n                	<a id="js_cancle" style="display:none;" href="javascript:void(0);" onclick="return false;">取消</a>\n                </p>\n            </label>\n            <div class="frm_msg fail js_catch_tips" style="display:none;">有5张图片粘贴失败</div>\n            <div class="frm_msg fail js_content_error" style="display:none;">正文不能为空且长度不能超过20000字</div>\n			<div id="js_editor" class="edui_editor_wrp">\n				\n			</div>\n        </div>\n        <!--\n		<p><a class="js_addURL" href="javascript:void(0);" onclick="return false;">添加原文链接</a></p>\n        -->\n		<div class="js_url_area appmsg_edit_item">\n            <label for="" class="frm_label">\n				<strong class="title">原文链接</strong>\n				<p class="tips l">（选填）</p>\n            </label>\n			<span class="frm_input_box"><input type="text" class="js_url frm_input"></span>\n            <div class="frm_msg fail js_url_error" style="display:none;">链接不合法</div>\n		</div>\n        {else}\n		<div class="js_desc_area appmsg_edit_item">\n			<label for="" class="frm_label">描述</label>\n			<span class="frm_textarea_box"><textarea class="js_desc frm_textarea"></textarea></span>\n            <div class="frm_msg fail js_desc_error" style="display:none;"></div>\n		</div>\n		<div class="js_url_area appmsg_edit_item">\n			<label for="" class="frm_label">商品链接</label>\n			<span class="frm_input_box"><input type="text" class="js_url frm_input"></span>\n            <div class="frm_msg fail js_url_error" style="display:none;">链接不合法</div>\n		</div>\n        {/if}\n        {if type == 10 && can_use_copyright}\n        <div id="js_original" class="appmsg_edit_item original_area">\n            <label class="frm_label js_original_type">\n                <a href="javascript:;" onclick="return false;" class="mini_tips icon_before js_original_apply"><i class="icon_original access"></i>申请原创声明</a>\n            </label>\n            <label class="frm_label js_original_type" style="display:none;">\n                <span href="javascript:;" class="mini_tips icon_before l" id="js"><i class="icon_original success"></i>本文已声明原创</span>\n                <a href="javascript:;" onclick="return false;" class="js_original_cancel r">取消</a>\n            </label>\n            <div class="popover normal_flow original_preview_pop pos_left js_original_content" style="display:none">\n                <div class="popover_inner">\n                    <div class="popover_content">\n                        <ul class="simple_preview_list tips_global">\n                            <li class="simple_preview_item">\n                            <label class="simple_preview_label" for="">原文链接</label>\n                            <div class="simple_preview_value js_url"></div>\n                            </li>\n                            <li class="simple_preview_item">\n                            <label class="simple_preview_label" for="">首发平台</label>\n                            <div class="simple_preview_value js_platform"></div>\n                            </li>\n                            <li class="simple_preview_item">\n                            <label class="simple_preview_label" for="">作者</label>\n                            <div class="simple_preview_value js_author"></div>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <i class="popover_arrow popover_arrow_out"></i>\n                <i class="popover_arrow popover_arrow_in"></i> \n            </div>\n            <input type="hidden" class="js_original_publish">\n        </div>\n        {/if}\n        {if type == 10 && can_use_copyright && can_use_reward}\n        <label class="frm_checkbox_label" for="reward">\n            <input type="checkbox" id="reward" class="frm_checkbox js_reward" value="1">\n            <i class="icon_checkbox"></i>\n\n            <span class="lbl_content">\n                接受用户赞赏                <span class="mini_tips weak_text">（申请原创声明后才可勾选）</span>\n            </span>\n        </label>\n        <div class="appmsg_edit_item js_reward_div" style=\'display:none\'>\n            <label class="frm_label">赞赏引导语<span class="mini_tips weak_text">（选填）</span></label>\n            <span class="frm_input_box"><input type="text"  class="frm_input  js_counter js_reward_wording" max-length="15" ></span>\n        </div>\n        {/if}\n\n        <!--\n        <div class="appmsg_edit_item" style="display:none;">\n            <label for="" class="frm_label">\n                <strong class="title">来源和作者</strong>\n                <p class="tips mini_tips icon_after gap_left">\n                    文章不申明来源，系统可能会给文章自动注明出处                    <i class="icon_msg_mini ask" id="js_original_desc"></i>\n                </p>\n            </label>\n            <p>\n                <label class="frm_radio_label">\n                    <i class="icon_radio"></i>\n                    <span class="lbl_content">不申明来源</span>\n                    <input type="radio" name="" class="js_original_type frm_radio" value="0">\n                </label>\n                <label class="frm_radio_label">\n                    <i class="icon_radio"></i>\n                    <span class="lbl_content">原创</span>\n                    <input type="radio" name="" class="js_original_type frm_radio" value="1">\n                </label>\n                <label class="frm_radio_label">\n                    <i class="icon_radio"></i>\n                    <span class="lbl_content">转载</span>\n                    <input type="radio" name="" class="js_original_type frm_radio" value="2">\n                </label>\n            </p>\n        </div>\n        <div class="original_edit_box js_original" style="display:none;">\n            <div class="frm_control_group frm_control_block">\n                <label class="frm_label" for="">作者</label>\n                <div class="frm_controls">\n                    <span class="frm_input_box with_counter counter_in append">\n                        <input type="text" class="frm_input js_counter js_author">\n                        <em class="frm_input_append frm_counter">0/8</em>\n                    </span>\n                    <div class="frm_msg fail js_author_error" style="display:none;">作者不能为空且不超过8个字</div>\n                </div>\n            </div>\n            <div class="frm_control_group frm_control_block">\n                <label class="frm_label" for="">原文链接</label>\n                <div class="frm_controls">\n                    <span class="frm_input_box"><input class="frm_input js_url" type="text"></span>\n                    <div class="frm_msg fail js_url_error" style="display:none;">链接不合法</div>\n                </div>\n            </div>\n        </div>\n        <div class="original_edit_box js_original" style="display:none;">\n            <div class="frm_control_group">\n                <label class="frm_label" for="">公众平台首发</label>\n                <div class="frm_controls frm_vertical_pt">\n                    <label class="frm_radio_label">\n                        <i class="icon_radio"></i>\n                        <span class="lbl_content">是</span>\n                        <input type="radio" name="" class="js_original_publish frm_radio" value="0" checked>\n                    </label>\n                    <label class="frm_radio_label">\n                        <i class="icon_radio"></i>\n                        <span class="lbl_content">否</span>\n                        <input type="radio" name="" class="js_original_publish frm_radio" value="1">\n                    </label>\n                </div>\n            </div>\n            <div class="original_edit_inner_box js_original_inner">\n                <div class="frm_control_group frm_control_block">\n                    <label class="frm_label" for="">作者</label>\n                    <div class="frm_controls">\n                        <span class="frm_input_box with_counter counter_in append">\n                            <input type="text" class="frm_input js_counter js_author">\n                            <em class="frm_input_append frm_counter">0/8</em>\n                        </span>\n                        <div class="frm_msg fail js_author_error" style="display:none;">作者不能为空且不超过8个字</div>\n                    </div>\n                </div>\n            </div>\n            <div class="original_edit_inner_box js_original_inner" style="display:none;">\n                <div class="frm_control_group frm_control_block">\n                    <label class="frm_label" for="">本文链接</label>\n                    <div class="frm_controls">\n                        <span class="frm_input_box"><input class="frm_input js_url" placeholder="该文章在其它网站的地址" type="text"></span>\n                        <div class="frm_msg fail js_url_error" style="display:none;">链接不合法</div>\n                    </div>\n                </div>\n                <div class="frm_control_group frm_control_block">\n                    <label class="frm_label" for="">平台名称</label>\n                    <div class="frm_controls ">\n                        <span class="frm_input_box with_counter counter_in append">\n                            <input placeholder="该网站的名称" type="text" class="frm_input js_counter js_platform">\n                            <em class="frm_input_append frm_counter">0/10</em>\n                        </span>\n                        <div class="frm_msg fail js_platform_error" style="display:none;"></div>\n                    </div>\n                </div>\n                <div class="frm_control_group frm_control_block">\n                    <label class="frm_label" for="">作者</label>\n                    <div class="frm_controls">\n                        <span class="frm_input_box with_counter counter_in append">\n                            <input type="text" class="frm_input js_counter js_author">\n                            <em class="frm_input_append frm_counter">0/8</em>\n                        </span>\n                        <div class="frm_msg fail js_author_error" style="display:none;">作者不能为空且不超过8个字</div>\n                    </div>\n                </div>\n                <div class="frm_control_group">\n                    <label class="frm_label" for="">发表时间</label>\n                    <div class="frm_controls frm_vertical_pt">\n                        <span class="btn datepicker_switch">\n                            <input type="text" class="frm_input" style="ime-mode:disabled" onpaste="return false" id="js_original_date">\n                            <i class="icon_datepicker"></i>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="original_edit_box js_original" style="display:none;">\n            <div class="frm_control_group frm_control_block">\n                <label class="frm_label" for="">原文链接</label>\n                <div class="frm_controls">\n                    <span class="frm_input_box"><input class="frm_input js_url" placeholder="该转载文章的源地址" type="text"></span>\n                    <div class="frm_msg fail js_url_error" style="display:none;">链接不合法</div>\n                </div>\n            </div>\n            <div class="frm_control_group frm_control_block">\n                <label class="frm_label" for="">转载出处</label>\n                <div class="frm_controls ">\n                    <span class="frm_input_box with_counter counter_in append test">\n                        <input placeholder="原文发表的网站名" type="text" class="frm_input js_counter js_platform">\n                        <em class="frm_input_append frm_counter">0/10</em>\n                    </span>\n                    <div class="frm_msg fail js_platform_error" style="display:none;"></div>\n                </div>\n            </div>\n            <div class="frm_control_group frm_control_block">\n                <label class="frm_label" for="">作者</label>\n                <div class="frm_controls">\n                    <span class="frm_input_box with_counter counter_in append test">\n                        <input type="text" class="frm_input js_counter js_author">\n                        <em class="frm_input_append frm_counter">0/8</em>\n                    </span>\n                    <div class="frm_msg fail js_author_error" style="display:none;">作者不能为空且不超过8个字</div>\n                </div>\n            </div>\n\n        </div>\n        -->\n	</div>\n	<i class="arrow arrow_out"></i>\n	<i class="arrow arrow_in"></i>\n</div>\n';
});
define("tpl/media/dialog/audiomsg_layout.html.js", [], function() {
	return '{if curnum == 0}\n<div class="media_list_tips_wrp tips_global">\n    <span class="tips">暂无素材</span>\n    <span class="vm_box"></span>\n</div>\n{else}\n<div class="media_list_tips_wrp" style="display:none;">\n    <i class="icon_loading_small white">loading...</i>\n    <span class="vm_box"></span>\n</div>\n<div class="qqmusic_list" id="js_audiomsg_list">\n    {each list as item}\n    <label class="frm_radio_label qqmusic_item">\n        <i class="icon_radio"></i>\n        <span class="lbl_content">\n            <span class="qqmusic_meta qqmusic_thumb_info">\n                <span class="songname" id=\'songname_{item.songid}\'>{item.songname}</span> \n                <span class="singername" id=\'singername_{item.songid}\'>{item.singername}</span> \n            </span>\n            <span class="qqmusic_meta qqmusic_songsize">{item.songsize}</span> \n            <span class="qqmusic_meta qqmusic_songtime">{item.songtime}</span> \n            <span class=\'qqmusic_meta qqmusic_audioplay\' id=\'url_{item.songid}\' audioid=\'{item.songid}\' audiourl=\'{item.m4a}\' mid=\'{item.mid}\' songid=\'{item.songid}\' albumurl=\'{item.albumurl}\'></span>\n        </span>\n        <input type="radio" class="frm_radio" value=\'{item.songid}\'>\n    </label>\n    {/each}\n</div>\n<div class="js_pagebar pagination_wrp" id=\'js_pagebar\'></div>\n{/if}\n';
});
define("tpl/media/appmsg_edit/small_appmsg.html.js", [], function() {
	return '<div id="appmsgItem{id}" data-fileId="{file_id}" data-id="{id}" class="appmsg_item js_appmsg_item {if cover}has_thumb{/if}">\n    <img class="js_appmsg_thumb appmsg_thumb" src="{cover}">\n    <i class="appmsg_thumb default">缩略图</i>\n    <h4 class="appmsg_title"><a onclick="return false;" href="javascript:void(0);" target="_blank">{title || \'标题\'}</a></h4>\n    <div class="appmsg_edit_mask">\n        <a class="icon18_common edit_gray js_edit" data-id="{id}" onclick="return false;" href="javascript:void(0);">编辑</a>\n        <a class="icon18_common del_gray js_del" data-id="{id}" onclick="return false;" href="javascript:void(0);">删除</a>\n    </div>\n</div>\n';
});
define("tpl/media/appmsg_edit/first_appmsg.html.js", [], function() {
	return '<div id="appmsgItem{id}" data-fileId="{file_id}" data-id="{id}" class="first_appmsg_item js_appmsg_item {if cover}has_thumb{/if}">\n    <!-- {if isMul}\n        <div class="appmsg_info">\n            <em class="appmsg_date">{create_time}</em>\n        </div>\n        <div class="cover_appmsg_item">\n            <h4 class="appmsg_title"><a href="javascript:void(0);" onclick="return false;" target="_blank">{title || \'标题\'}</a></h4>\n            <div class="appmsg_thumb_wrp">\n                <img class="js_appmsg_thumb appmsg_thumb" src="{cover}">\n                <i class="appmsg_thumb default">封面图片</i>\n            </div>\n            <div class="appmsg_edit_mask">\n                <a onclick="return false;" class="icon18_common edit_gray js_edit" data-id="{id}" href="javascript:;">编辑</a>\n            </div>\n        </div>\n    {else}{/if} -->\n        <div class="cover_appmsg_item">\n            <h4 class="appmsg_title"><a href="javascript:void(0);" onclick="return false;" target="_blank">{title || \'标题\'}</a></h4>\n            <div class="appmsg_thumb_wrp">\n                <img class="js_appmsg_thumb appmsg_thumb" src="{cover}">\n                <i class="appmsg_thumb default">封面图片</i>\n            </div>        \n        </div>\n        \n        <!--<div class="appmsg_info">\n            <em class="appmsg_date">{create_time}</em>\n        </div>-->\n        \n        <div class="appmsg_edit_mask">\n                <a onclick="return false;" class="icon18_common edit_gray js_edit" data-id="{id}" href="javascript:;">编辑</a>\n        </div>\n        <!--<p class="appmsg_desc">{=digest.html(true)}</p>-->\n</div>\n';
});
define("tpl/simplePopup.html.js", [], function() {
	return '<div class="simple_dialog_content">\n    <form id="popupForm_{id}"  method="post"  class="form" onSubmit="return false;">\n         <div class="frm_control_group">\n            {if label}<label class="frm_label">{label}</label>{/if}\n            <span class="frm_input_box">\n                <input type="text" class="frm_input" name="popInput" value="{value&&value.html(true)}"/>\n                <input style="display:none"/>\n            </span>\n            {if tips}<p class="frm_tips">{tips}</p>{/if}\n        </div>       \n        <div class="js_verifycode"></div>\n    </form>\n</div>\n';
});
define("tpl/vote/vote.html.js", [], function() {
	return ' <div class="tc_dialog_content vote_container">\n    <form id="voteForm">\n		<div class="vote_meta">\n	        <div class="vote_meta_detail">\n				<div class="frm_control_group">\n					<label for="" class="frm_label">投票名称</label>\n					<div class="frm_controls">\n						<span class="frm_input_box with_counter counter_in append vote_title"><input autofocus="" type="text" placeholder="" class="frm_input" name="vote_title" id=""><em class="frm_input_append frm_counter">0/35</em></span>\n						<p class="frm_tips">投票名称只用于管理，不显示在下发的投票内容中</p>\n					</div>\n				</div>\n	        </div>\n	    </div>\n	\n		<div class="vote_meta time_setting">\n	        <div class="vote_meta_detail">\n				<div class="frm_control_group">\n					<label for="" class="frm_label">截止时间</label>\n					<div class="frm_controls">\n						<div class="date_select timepicker">\n							<div class="datepicker_area">\n								<span class="btn datepicker_switch">\n									<input type="text" class="frm_input" style="ime-mode:disabled" onpaste="return false" id="jsVoteDate">\n									<i class="icon_datepicker"></i>\n								</span>\n							</div>\n							<!-- <div id="js_begin_time_container"><div class="ta_date">\n								<span class="date_title" id=""></span>\n								<a class="opt_sel" id="" href="#">\n									<i class="i_orderd"></i>\n								</a>\n							</div></div> -->\n							<div class="dropdown_menu time" id="jsVoteHour"></div>\n							<span class="date_select_gap">时</span>\n\n							<div class="dropdown_menu time" id="jsVoteMin"></div>\n							<span class="date_select_gap">分</span>\n						</div>\n					</div>\n				</div>\n	        </div>\n	    </div>\n		<div class="vote_meta js_vote_auth">\n	        <div class="vote_meta_detail">\n				<div class="frm_control_group">\n					<label for="" class="frm_label frm_label_top">投票权限</label>\n					<div class="frm_controls">\n						<label class="vote_radio_label selected">\n							<i class="icon_radio"></i>\n							<span type="label_content">所有人都可参与</span>\n							<input name="permission" type="radio" value="1" class="vote_radio" checked>\n						</label>\n						<label class="vote_radio_label">\n							<i class="icon_radio"></i>\n							<span type="label_content">仅关注我的人可参与</span>\n							<input name="permission" type="radio" value="2" class="vote_radio">\n						</label>\n					</div>\n				</div>\n	        </div>\n	    </div>\n		 <p class="frm_tips frm_tips_btm">上传图片的最佳尺寸：300像素*300像素，其他尺寸会影响页面效果，格式png，jpeg，jpg，gif。大小不超过1M  </p>\n	</form>		\n	   \n	<div class="">\n		<div class="vote_meta_container js_question_container">\n			\n		</div>\n		<div class="vote_container_dec">\n			<a class="btn btn_default btn_add btn_vote_add" href="javascript:;" id="js_add_question"><i class="icon14_common add_gray"></i>添加问题</a>\n			<p id="js_error" style="display:none;" class="frm_tips">问题填写完整才能添加下一个问题</p>\n			<!--<div id="js_error" style="display:none;" class="bubble_tips bubble_left warn">\n				<div class="bubble_tips_inner">\n					<p>问题填写完整才能添加下一个问题</p>\n				</div>\n				<i class="bubble_tips_arrow out"></i>\n				<i class="bubble_tips_arrow in"></i>\n			</div>-->\n		</div>\n	</div>\n   \n</div>\n';
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
define("common/wx/inputCounter.js", [], function(t, n, i) {
	"use strict";

	function o(t, n) {
		this.$input = $(t), this.opts = $.extend(!0, {}, e, n), this.init();
	}
	var e = {
		maxLength: 20,
		showCounter: !0
	};
	o.prototype.init = function() {
		var t = this;
		this.$input && this.$input.length > 0 ? (this.$inputBox = this.$input.parent("textarea" == this.$input.prop("tagName").toLowerCase() ? ".frm_textarea_box" : ".frm_input_box"),
			this.count = this.$input.val().length, this.$counter = this.$inputBox.find(".frm_counter"),
			this.counterExist = !0, 0 == this.$counter.length && (this.counterExist = !1, this.$counter = $('<em class="frm_input_append frm_counter"></em>'),
				this.$inputBox.append(this.$counter)), 1 == this.opts.showCounter ? this.show() : this.hide(),
			this.setCount(this.count), this.inputEvent = function() {
				t.setCount($(this).val().length);
			}, this.$input.on("keydown keyup", this.inputEvent)) : console.log("inputCounter Err,input does not exist");
	}, o.prototype.getCount = function() {
		return this.count || 0;
	}, o.prototype.setCount = function(t) {
		this.count = t, this.$counter.html(this.count + "&#47;" + this.opts.maxLength), this.count > this.opts.maxLength ? (this.overflowed = !0,
			this.$inputBox.addClass("warn")) : (this.overflowed = !1, this.$inputBox.removeClass("warn"));
	}, o.prototype.hasOverflowed = function() {
		return this.overflowed;
	}, o.prototype.show = function() {
		this.$inputBox.addClass("with_counter counter_in append count"), this.$counter.show();
	}, o.prototype.hide = function() {
		this.$inputBox.removeClass("with_counter counter_in append count warn"), this.$counter.hide();
	}, o.prototype.destroy = function() {
		this.$input.off("input propertychange", this.inputEvent), 0 == this.counterExist && (this.hide(),
			this.$counter.remove());
	}, i.exports = o;
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
define("common/wx/media/videoDialog.js", ["common/wx/popup.js", "page/smallvideo/dialog_select_video.css", "widget/media/media_dialog.css", "common/wx/top.js", "common/wx/Tips.js", "common/wx/media/video.js", "common/wx/pagebar.js", "media/media_cgi.js", "tpl/media/dialog/videomsg_layout.html.js"], function(e) {
	"use strict";

	function i(e, i, t) {
		e = e.replace(/^\s+|\s+$/g, ""), e = e.replace(/^v\.qq\.com/, "http://v.qq.com"), -1 != e.indexOf("http://v.qq.com") ? n(e, i, t) : (-1 != e.indexOf("http://www.weishi.com") || -1 != e.indexOf("http://weishi.com") || -1 != e.indexOf("http://www.weishi.qq.com") || -1 != e.indexOf("http://weishi.qq.com")) && d(e, i, t);
	}

	function t(e, i) {
		var i = i || document.location.toString(),
			t = e + "=",
			o = i.indexOf(t);
		if (-1 != o) {
			var n = i.indexOf("&", o),
				d = i.indexOf("?", o);
			return -1 != d && (-1 == n || n > d) && (n = d), d = i.indexOf("#", o), -1 != d && (-1 == n || n > d) && (n = d), -1 == n ? i.substring(o + t.length) : i.substring(o + t.length, n);
		}
		return "";
	}

	function o(e) {
		e = e || window.location.toString();
		var i, o = t("vid", e);
		return o || (i = e.match(/\/\w{15}\/(\w+)\.html/)) && (o = i[1]), o || ((i = e.match(/\/page\/\w{1}\/\w{1}\/\w{1}\/(\w+)\.html/)) ? o = i[1] : (i = e.match(/\/(page|play)\/+(\w{11})\.html/)) && (o = i[2])),
			o || (i = e.match(/\/boke\/gplay\/\w+_\w+_(\w+)\.html/)) && (o = i[1]), encodeURIComponent(o);
	}

	function n(e, i, t) {
		var n, d, s = "",
			a = t.width,
			c = t.height;
		if (n = e.match(new RegExp("(^|&|\\\\?)vid=([^&]*)(&|$|#)"))) s = encodeURIComponent(n[2]),
			t.vid = s, d = "http://v.qq.com/iframe/player.html?vid=" + s + "&width=" + a + "&height=" + c + "&auto=0",
			i(d, t);
		else if ((n = e.match(new RegExp("(http://)?v\\.qq\\.com/cover[^/]*/\\w+/([^/]*)\\.html"))) || (n = e.match(new RegExp("(http://)?v\\.qq\\.com/prev[^/]*/\\w+/([^/]*)\\.html")))) {
			var r = encodeURIComponent(n[2]),
				m = "https://sec.video.qq.com/p/sns.video/fcgi-bin/dlib/dataout_ex?auto_id=137&cid=" + r + "&otype=json",
				l = document.getElementsByTagName("head")[0],
				h = document.createElement("script");
			h.type = "text/javascript", h.src = m, h.async = !0, void 0 !== h.onreadystatechange ? h.onreadystatechange = function() {
				if ("loaded" == h.readyState) try {
					s = QZOutputJson.videos[0].vid, t.vid = s, d = "http://v.qq.com/iframe/player.html?vid=" + s + "&width=" + a + "&height=" + c + "&auto=0",
						i(d, t);
				} catch (e) {}
			} : h.onload = function() {
				try {
					s = QZOutputJson.videos[0].vid, t.vid = s, d = "http://v.qq.com/iframe/player.html?vid=" + s + "&width=" + a + "&height=" + c + "&auto=0",
						i(d, t);
				} catch (e) {}
			}, l.appendChild(h);
		} else s = o(e), "" != s && (t.vid = s, d = "http://v.qq.com/iframe/player.html?vid=" + s + "&width=" + a + "&height=" + c + "&auto=0",
			i(d, t));
	}

	function d(e, i, t) {
		var o, n = "",
			d = t.width,
			s = t.height,
			c = e.match(/\/t\/(\d+)/) || e.match(/\/#show\/(\d+)/);
		c && "object" == typeof c && c.length > 1 ? (n = c[1], t.vid = n, o = "http://z.weishi.com/weixin/player.html?msgid=" + n + "&width=" + d + "&height=" + s + "&auto=0",
			i(o, t)) : a.err("微视频仅支持 www.weishi.com/t 开头的网址");
	}
	e("common/wx/popup.js"), e("page/smallvideo/dialog_select_video.css"), e("widget/media/media_dialog.css");
	var s = e("common/wx/top.js"),
		a = e("common/wx/Tips.js"),
		c = e("common/wx/media/video.js"),
		r = e("common/wx/pagebar.js"),
		m = e("media/media_cgi.js"),
		l = e("tpl/media/dialog/videomsg_layout.html.js"),
		h = 15,
		p = 21,
		v = {};
	v[h] = "video_msg_cnt", v[p] = "short_video_cnt";
	var f = function(e, i) {
			var t = $.extend({}, i);
			return t.selector = e, t.id = t.app_id, t.tpl = "videomsg", t.for_selection = !0, t.for_transfer = !!t.content,
				t.hide_transfer = !!t.content, t.video_id = t.content, t.source = "file", new c(t);
		},
		u = 548,
		_ = 280,
		g = function(e) {
			this.scene = e.scene || "default", this.onOK = e.onOK, this.can_use_shortvideo = e.can_use_shortvideo,
				this.create();
		},
		w = {
			create: function() {
				var e = this,
					t = $.parseHTML(wx.T(l, {
						scene: e.scene,
						token: wx.data.t
					}));
				e.dialog && e.dialog.popup("remove"), e.dialog = $(t[0]).popup({
						title: "选择视频",
						className: "dialog_select_video",
						width: 960,
						onOK: function() {
							var t = this,
								o = e.$dom.find(".js_top.selected").data("id"),
								n = e.$dom.find(".Js_videomsg.selected").parent().data("opt"),
								d = e.$dom.find(".js_video_txurl").val();
							if (o) {
								if (!n) return a.err("请选择视频"), !0;
								if (e.onOK && !e.onOK(o, n)) return !0;
								t.remove(), e.dialog = null;
							} else {
								if (!d) return a.err("请输入视频网址"), !0;
								var s = !1;
								if (i(d, function(i, n) {
									if (0 == i.indexOf("http://v.qq.com/")) {
										var d = i.match(/[\?&]vid\=([^&]*)/);
										if (null != d && d[1]) {
											var c = d[1],
												r = e.$dom.find(".js_btn");
											c ? (r.attr("disabled", !0), $.ajax({
												url: wx.url("/cgi-bin/registertopic?id=" + c + "&type=2"),
												type: "post",
												dataType: "json",
												success: function(d) {
													console.log("success"), console.log(d), d && d.base_resp && 0 == d.base_resp.ret ? (n = $.extend({
														url: i
													}, n), e.onOK && e.onOK(o, n), t.remove(), e.dialog = null) : a.err("系统繁忙，请稍后再试");
												},
												error: function() {
													a.err("系统繁忙，请稍后再试");
												},
												complete: function() {
													r.attr("disabled", !1);
												}
											})) : a.err("无效视频地址");
										} else a.err("无效视频地址");
										s = !0;
									}
									return s ? !0 : (n = $.extend({
										url: i
									}, n), e.onOK && e.onOK(o, n), t.remove(), void(e.dialog = null));
								}, {
									width: 500,
									height: 375,
									align: "none"
								}), s) return !0;
							}
						},
						onCancel: function() {
							this.remove(), e.dialog = null;
						},
						onHide: function() {
							this.remove(), e.dialog = null;
						}
					}), e.$dom = e.dialog.popup("get"), e.$dom.find(".js_btn_p").eq(0).addClass("btn_disabled"),
					e.init(), e.dialog.popup("resetPosition");
			},
			init: function() {
				var e = this,
					i = e.can_use_shortvideo ? [{
						name: "小视频",
						id: p
					}] : [];
				"ueditor" == e.scene ? (i.unshift({
						name: "视频网址"
					}), e.initTencentVideo()) : (i.unshift({
						name: "视频",
						id: h
					}), e.getList(h, 0, 10)), e.tab = new s(e.$dom.find(".js_videotab"), i), e.tab.selected(0),
					e.tab.dom.find("a").on("click", function(e) {
						e.preventDefault();
					}), e.$dom.on("click", ".js_top", function() {
						var i = $(this).data("id");
						e.$dom.find(".js_video_status").hide(), e.$dom.find(".js_video_create").hide(), e.$dom.find(".js_pagebar").empty(),
							e.$dom.find(".js_btn_p").eq(0).addClass("btn_disabled"), i ? (i == h && e.$dom.find(".js_video_create").show(),
								e.getList(i, 0, 10)) : e.$dom.find(".js_video_tencent").show(), e.tab.selected($(this).data("index"));
					}), e.$dom.on("click", ".Js_videomsg", function() {
						e.$dom.find(".Js_videomsg.selected").removeClass("selected"), e.$dom.find(".js_btn_p").eq(0).removeClass("btn_disabled"),
							$(this).addClass("selected");
					}), e.$dom.on("mousewheel", "#js_videomsg_list", function(e) {
						this.scrollTop -= e.originalEvent.wheelDelta > 0 ? 60 : -60, e.preventDefault();
					}).on("DOMMouseScroll", "#js_videomsg_list", function(e) {
						this.scrollTop += e.originalEvent.detail > 0 ? 60 : -60, e.preventDefault();
					});
			},
			initTencentVideo: function() {
				var e = this;
				e.$dom.find(".js_video_loading").hide(), e.$dom.find(".js_video_tencent").show(),
					e.$dom.find(".js_video_txurl").on("input propertychange", function() {
						var t = $(this).val();
						t ? (e.$dom.find(".js_btn_p").eq(0).removeClass("btn_disabled"), i(t, function(i) {
							var t = "<iframe height=" + _ + " width=" + u + ' frameborder=0 src="' + i + '" allowfullscreen></iframe>';
							e.$dom.find(".js_video_preview").html(t), e.dialog.popup("resetPosition");
						}, {
							width: u,
							height: _
						})) : e.$dom.find(".js_btn_p").eq(0).addClass("btn_disabled");
					});
			},
			initPagebar: function(e, i, t) {
				var o = this,
					n = e / i + 1;
				return i >= t ? void o.$dom.find(".js_pagebar").hide() : void new r({
					container: o.$dom.find(".js_pagebar").show(),
					perPage: i,
					first: !1,
					last: !1,
					isSimple: !0,
					initShowPage: n,
					totalItemsNum: t,
					callback: function(t) {
						var d = t.currentPage,
							s = o.$dom.find(".js_top.selected").data("id");
						d != n && s && (e = i * --d, o.getList(s, e, i));
					}
				});
			},
			getList: function(e, i, t) {
				var o = this,
					n = e == h ? m.appmsg : m;
				o.$dom.find(".js_video_content").hide(), o.$dom.find(".js_video_loading").show(),
					n.getList(e, i, t, function(n) {
						if (o.dialog && e == o.$dom.find(".js_top.selected").data("id")) {
							var d = n.file_item || n.item,
								s = o.$dom.find("#js_videomsg_list").find(".inner").empty();
							d.length ? (d.each(function(e, i) {
									var t = s.eq(i % 2),
										o = $('<div id="appmsg%s"></div>'.sprintf(e.app_id || e.file_id), t).appendTo(t);
									f(o, e);
								}), o.$dom.find(".js_video_content").show(), o.dialog.popup("resetPosition")) : o.$dom.find(".js_video_none").show().find(".js_empty_tips").html(e == p ? "暂无素材<br />（素材来源：通过微信用户上传给公众帐号）" : "暂无素材"),
								o.$dom.find(".js_video_loading").hide(), o.initPagebar(i, t, n.file_cnt[v[e]]);
						}
					});
			}
		};
	return $.extend(g.prototype, w), g;
});
define("common/wx/media/imageDialog.js", ["common/wx/Cgi.js", "common/wx/Tips.js", "common/wx/popup.js", "common/wx/pagebar.js", "biz_web/utils/upload.js", "tpl/media/dialog/image_layout.html.js", "tpl/media/dialog/image_list.html.js", "tpl/media/dialog/image_group.html.js", "page/media/dialog_img_pick.css"], function(e) {
	"use strict";
	var i = e("common/wx/Cgi.js"),
		t = e("common/wx/Tips.js"),
		n = (e("common/wx/popup.js"),
			e("common/wx/pagebar.js")),
		o = e("biz_web/utils/upload.js"),
		a = e("tpl/media/dialog/image_layout.html.js"),
		r = e("tpl/media/dialog/image_list.html.js"),
		l = e("tpl/media/dialog/image_group.html.js"),
		s = (template.render,
			template.compile(l)),
		d = template.compile(r);
	e("page/media/dialog_img_pick.css");
	var g = function(e) {
			return new p(e);
		},
		p = function(e) {
			this.options = e, this.events = [], this.imgArr = [], this.converting = 0, this.fromUpload = [],
				c.init.call(this);
		},
		c = {
			init: function() {
				var e = this,
					i = e.options = $.extend(!0, {
						tpl: a,
						title: "选择图片",
						scene: "cdn",
						maxSelect: 1,
						perPage: 10,
						group: 1,
						onOK: null,
						onCancel: null
					}, e.options);
				i.tpl = template.compile(i.tpl)(i), e.on("ok", i.onOK), e.on("cancel", i.onCancel), e.on("hide", i.onHide),
					e.dialog = $(i.tpl.trim()).popup({
						title: i.title,
						className: "img_dialog_wrp",
						width: 846,
						buttons: [{
							text: "确定",
							type: "disabled",
							click: function() {
								var n = this.get().find(".js_btn").eq(0).parent();
								return n.hasClass("btn_disabled") ? void t.err("请选择图片") : (e.popup = this, $.each(e.imgArr, function(i, t) {
									t.source = -1 != e.fromUpload.indexOf(t.file_id + "") ? "upload" : "lib";
								}), void("cdn" == i.scene && e.converting > 0 ? (n.btn(!1), e.on("converted", function() {
									0 == e.converting && (e.trigger("ok", e.imgArr || []), n.btn(!0));
								})) : e.trigger("ok", e.imgArr || [])));
							}
						}, {
							text: "取消",
							click: function() {
								e.trigger("cancel"), this.hide();
							}
						}],
						onHide: function() {
							e.trigger("hide");
						}
					}), e.dialog.popup("get").find(".js_loading").show(), u.getImagesByGroupId({
						group_id: i.group,
						count: i.perPage
					}, function(t) {
						if (e.dialog) {
							var n = t.page_info;
							n.scene = i.scene, n.group = i.group;
							var o = e.dialog.popup("get"),
								a = s(n);
							o.find(".js_loading").hide(), o.find(".js_group").append(a).find(".js_total").text("(%s)".sprintf(n.file_cnt.img_cnt)),
								c.renderImageList(o.find(".js_list"), n, e.imgArr), c.initEvent.call(e, t), c.initPageBar.call(e, n, i.group),
								e.dialog.popup("resetPosition");
						}
					}), c.initUpload.call(e, i.group);
			},
			initEvent: function() {
				var e = this,
					i = e.dialog.popup("get"),
					n = e.options;
				i.on("click", ".js_imageitem", function() {
					var o, a = $(this),
						r = a.find("label"),
						l = i.find(".js_btn_p").eq(0),
						s = a.data("url"),
						d = a.data("id"),
						g = a.data("format");
					r.hasClass("selected") ? (s || e.converting--, r.removeClass("selected"), o = m.indexOf(e.imgArr, d),
							o >= 0 && e.imgArr.splice(o, 1), i.find(".js_selected").text(e.imgArr.length)) : 1 == n.maxSelect ? (s || (e.converting = 1),
							r.addClass("selected"), a.siblings().find("label").removeClass("selected"), e.imgArr = [{
								url: s,
								file_id: d,
								format: g
							}], i.find(".js_selected").text(e.imgArr.length)) : n.maxSelect > e.imgArr.length ? (s || e.converting++,
							r.addClass("selected"), e.imgArr.push({
								url: s,
								file_id: d,
								format: g
							}), i.find(".js_selected").text(e.imgArr.length)) : t.err("最多可选%s张".sprintf(n.maxSelect)),
						e.imgArr.length > 0 ? l.enable().addClass("btn_primary") : l.disable(), "cdn" == n.scene && r.hasClass("selected") && !s && u.getCdnUrlByFileId({
							file_id: d,
							group_id: i.find(".js_groupitem.selected").data("groupid")
						}, function(i) {
							0 == i.errcode ? (e.converting--, a.data("url", i.url), o = m.indexOf(e.imgArr, d), o >= 0 && (e.imgArr[o].url = i.url),
								e.trigger("converted")) : (t.err("转存失败"), a.click());
						});
				}), i.on("click", ".js_groupitem", function(t, o) {
					var a = $(this),
						r = i.find(".js_list"),
						l = i.find(".js_loading"),
						s = i.find(".js_pagebar"),
						d = a.data("groupid");
					a.hasClass("selected") || (a.addClass("selected").siblings(".selected").removeClass("selected"),
						$("#js_imageupload").data("groupid", d), r.hide(), s.hide(), l.show(), u.getImagesByGroupId({
							group_id: d,
							count: n.perPage
						}, function(t) {
							if (e.dialog && d == i.find(".js_groupitem.selected").data("groupid")) {
								t = t.page_info, t.scene = n.scene, l.hide(), s.show(), c.renderImageList(r, t, e.imgArr),
									c.initPageBar.call(e, t, d), c.initUpload.call(e);
								for (var a = 0; o && "upload" == o.source && a < o.count; ++a) r.children().eq(a).click();
							}
						}));
				});
			},
			initPageBar: function(e, i) {
				var t = this,
					o = t.dialog.popup("get"),
					a = t.options;
				c.pagebar && c.pagebar.destroy();
				var r = 0;
				return 0 == i ? r = e.file_cnt.img_cnt : e.file_group_list.file_group.each(function(e) {
					e.id == i && (r = e.count);
				}), a.perPage >= r ? void o.find(".js_pagebar").empty() : void(c.pagebar = new n({
					container: o.find(".js_pagebar"),
					perPage: a.perPage,
					initShowPage: 1,
					totalItemsNum: r,
					first: !1,
					last: !1,
					isSimple: !0,
					callback: function(e) {
						var i = o.find(".js_groupitem.selected").data("groupid"),
							n = o.find(".js_list"),
							r = o.find(".js_loading"),
							l = o.find(".js_pagebar");
						n.hide(), l.hide(), r.show(), u.getImagesByGroupId({
							group_id: i,
							begin: e.perPage * (e.currentPage - 1),
							count: a.perPage
						}, function(e) {
							e = e.page_info, e.scene = a.scene, r.hide(), l.show(), c.renderImageList(n, e, t.imgArr);
						});
					}
				}));
			},
			initUpload: function(e) {
				var i = this,
					n = i.dialog.popup("get"),
					a = n.find(".js_imageupload"),
					r = "js_imageupload" + Math.random().toString().substr(2),
					l = n.find(".js_groupitem.selected").data("groupid") || e || 1;
				a.attr("id", r).off().children().remove(), o.uploadImageLibFile({
					container: "#" + r,
					multi: !0,
					type: 2,
					doublewrite: !0,
					groupid: l,
					onComplete: function(e, n, o, a) {
						0 == a.base_resp.ret && t.suc("上传成功"), i.fromUpload.push(a.content);
					},
					onAllComplete: function(e, i) {
						var t, o = n.find(".js_groupitem.selected");
						i.filesUploaded > 0 && (t = +o.find("span").text(), o.removeClass("selected").trigger("click", {
							source: "upload",
							count: i.filesUploaded
						}), o.find("span").text(t + i.filesUploaded));
					},
					showError: !0
				});
			},
			renderImageList: function(e, i, t) {
				i.file_item.each(function(e) {
					e.img_url = wx.url("/cgi-bin/getimgdata?mode=small&source=file&fileId=%s".sprintf(e.file_id)), -1 != m.indexOf(t, e.file_id) && (e.selected = 1);
				}), e.html(d(i)).show();
			}
		},
		u = {
			getImagesByGroupId: function(e, t) {
				e = $.extend({
					group_id: 1,
					begin: 0,
					count: 8,
					type: 2
				}, e), i.get({
					url: wx.url("/cgi-bin/filepage"),
					data: e,
					mask: !1
				}, function(e) {
					0 != e.base_resp.ret ? i.show(e) : t(e);
				});
			},
			getCdnUrlByFileId: function(e, t) {
				e.group_id = e.group_id || 1, i.post({
					url: wx.url("/cgi-bin/uploadimg2cdn?action=duplicate"),
					data: e,
					mask: !1
				}, function(e) {
					t(e);
				});
			}
		},
		m = {
			indexOf: function(e, i) {
				for (var t = 0, n = e.length; n > t; ++t)
					if (e[t].file_id == i) return t;
				return -1;
			}
		},
		f = {
			on: function(e, i) {
				if (i) {
					var t = this.events;
					return t[e] = t[e] || [], t[e].push(i), this;
				}
			},
			trigger: function(e) {
				var i = this,
					t = arguments,
					n = i.events[e];
				return n ? ($.each(n, function(e, n) {
					n.apply(i, Array.prototype.slice.call(t, 1));
				}), this) : void 0;
			},
			hide: function() {
				return this.dialog.popup("hide"), this;
			},
			show: function() {
				return this.dialog.popup("show"), this;
			},
			destroy: function() {
				this.dialog.popup("remove"), this.dialog = null;
			}
		};
	return $.extend(p.prototype, f), g;
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
define("common/lib/datepicker.js", ["widget/datepicker.css"], function(e, t, n) {
	try {
		var r = +(new Date);
		e("widget/datepicker.css"),
			function(e, t) {
				function n(t, n) {
					var i, s, o, u = t.nodeName.toLowerCase();
					return "area" === u ? (i = t.parentNode, s = i.name, !t.href || !s || i.nodeName.toLowerCase() !== "map" ? !1 : (o = e("img[usemap=#" + s + "]")[0], !!o && r(o))) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || n : n) && r(t);
				}

				function r(t) {
					return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
						return e.css(this, "visibility") === "hidden";
					}).length;
				}
				var i = 0,
					s = /^ui-id-\d+$/;
				e.ui = e.ui || {}, e.extend(e.ui, {
					version: "1.10.3",
					keyCode: {
						BACKSPACE: 8,
						COMMA: 188,
						DELETE: 46,
						DOWN: 40,
						END: 35,
						ENTER: 13,
						ESCAPE: 27,
						HOME: 36,
						LEFT: 37,
						NUMPAD_ADD: 107,
						NUMPAD_DECIMAL: 110,
						NUMPAD_DIVIDE: 111,
						NUMPAD_ENTER: 108,
						NUMPAD_MULTIPLY: 106,
						NUMPAD_SUBTRACT: 109,
						PAGE_DOWN: 34,
						PAGE_UP: 33,
						PERIOD: 190,
						RIGHT: 39,
						SPACE: 32,
						TAB: 9,
						UP: 38
					}
				}), e.fn.extend({
					focus: function(t) {
						return function(n, r) {
							return typeof n == "number" ? this.each(function() {
								var t = this;
								setTimeout(function() {
									e(t).focus(), r && r.call(t);
								}, n);
							}) : t.apply(this, arguments);
						};
					}(e.fn.focus),
					scrollParent: function() {
						var t;
						return e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? t = this.parents().filter(function() {
							return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"));
						}).eq(0) : t = this.parents().filter(function() {
							return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"));
						}).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t;
					},
					zIndex: function(n) {
						if (n !== t) return this.css("zIndex", n);
						if (this.length) {
							var r = e(this[0]),
								i, s;
							while (r.length && r[0] !== document) {
								i = r.css("position");
								if (i === "absolute" || i === "relative" || i === "fixed") {
									s = parseInt(r.css("zIndex"), 10);
									if (!isNaN(s) && s !== 0) return s;
								}
								r = r.parent();
							}
						}
						return 0;
					},
					uniqueId: function() {
						return this.each(function() {
							this.id || (this.id = "ui-id-" + ++i);
						});
					},
					removeUniqueId: function() {
						return this.each(function() {
							s.test(this.id) && e(this).removeAttr("id");
						});
					}
				}), e.extend(e.expr[":"], {
					data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
						return function(n) {
							return !!e.data(n, t);
						};
					}) : function(t, n, r) {
						return !!e.data(t, r[3]);
					},
					focusable: function(t) {
						return n(t, !isNaN(e.attr(t, "tabindex")));
					},
					tabbable: function(t) {
						var r = e.attr(t, "tabindex"),
							i = isNaN(r);
						return (i || r >= 0) && n(t, !i);
					}
				}), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(n, r) {
					function i(t, n, r, i) {
						return e.each(s, function() {
							n -= parseFloat(e.css(t, "padding" + this)) || 0, r && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), i && (n -= parseFloat(e.css(t, "margin" + this)) || 0);
						}), n;
					}
					var s = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
						o = r.toLowerCase(),
						u = {
							innerWidth: e.fn.innerWidth,
							innerHeight: e.fn.innerHeight,
							outerWidth: e.fn.outerWidth,
							outerHeight: e.fn.outerHeight
						};
					e.fn["inner" + r] = function(n) {
						return n === t ? u["inner" + r].call(this) : this.each(function() {
							e(this).css(o, i(this, n) + "px");
						});
					}, e.fn["outer" + r] = function(t, n) {
						return typeof t != "number" ? u["outer" + r].call(this, t) : this.each(function() {
							e(this).css(o, i(this, t, !0, n) + "px");
						});
					};
				}), e.fn.addBack || (e.fn.addBack = function(e) {
					return this.add(e == null ? this.prevObject : this.prevObject.filter(e));
				}), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
					return function(n) {
						return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this);
					};
				}(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({
					disableSelection: function() {
						return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
							e.preventDefault();
						});
					},
					enableSelection: function() {
						return this.unbind(".ui-disableSelection");
					}
				}), e.extend(e.ui, {
					plugin: {
						add: function(t, n, r) {
							var i, s = e.ui[t].prototype;
							for (i in r) s.plugins[i] = s.plugins[i] || [], s.plugins[i].push([n, r[i]]);
						},
						call: function(e, t, n) {
							var r, i = e.plugins[t];
							if (!i || !e.element[0].parentNode || e.element[0].parentNode.nodeType === 11) return;
							for (r = 0; r < i.length; r++) e.options[i[r][0]] && i[r][1].apply(e.element, n);
						}
					},
					hasScroll: function(t, n) {
						if (e(t).css("overflow") === "hidden") return !1;
						var r = n && n === "left" ? "scrollLeft" : "scrollTop",
							i = !1;
						return t[r] > 0 ? !0 : (t[r] = 1, i = t[r] > 0, t[r] = 0, i);
					}
				});
			}(jQuery),
			function(e, t) {
				function n() {
					this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
						closeText: "Done",
						prevText: "Prev",
						nextText: "Next",
						currentText: "Today",
						monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
						monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
						dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
						dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
						dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
						weekHeader: "Wk",
						dateFormat: "mm/dd/yy",
						firstDay: 0,
						isRTL: !1,
						showMonthAfterYear: !1,
						yearSuffix: ""
					}, this._defaults = {
						showOn: "focus",
						showAnim: "fadeIn",
						showOptions: {},
						defaultDate: null,
						appendText: "",
						buttonText: "...",
						buttonImage: "",
						buttonImageOnly: !1,
						hideIfNoPrevNext: !1,
						navigationAsDateFormat: !1,
						gotoCurrent: !1,
						changeMonth: !1,
						changeYear: !1,
						yearRange: "c-10:c+10",
						showOtherMonths: !1,
						selectOtherMonths: !1,
						showWeek: !1,
						calculateWeek: this.iso8601Week,
						shortYearCutoff: "+10",
						minDate: null,
						maxDate: null,
						duration: "fast",
						beforeShowDay: null,
						beforeShow: null,
						onSelect: null,
						onChangeMonthYear: null,
						onClose: null,
						numberOfMonths: 1,
						showCurrentAtPos: 0,
						stepMonths: 1,
						stepBigMonths: 12,
						altField: "",
						altFormat: "",
						constrainInput: !0,
						showButtonPanel: !1,
						autoSize: !1,
						disabled: !1
					}, e.extend(this._defaults, this.regional[""]), this.dpDiv = r(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
				}

				function r(t) {
					var n = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
					return t.delegate(n, "mouseout", function() {
						e(this).removeClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && e(this).removeClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && e(this).removeClass("ui-datepicker-next-hover");
					}).delegate(n, "mouseover", function() {
						e.datepicker._isDisabledDatepicker(o.inline ? t.parent()[0] : o.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && e(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && e(this).addClass("ui-datepicker-next-hover"));
					});
				}

				function i(t, n) {
					e.extend(t, n);
					for (var r in n) n[r] == null && (t[r] = n[r]);
					return t;
				}
				e.extend(e.ui, {
					datepicker: {
						version: "1.10.3"
					}
				});
				var s = "datepicker",
					o;
				e.extend(n.prototype, {
					markerClassName: "hasDatepicker",
					maxRows: 4,
					_widgetDatepicker: function() {
						return this.dpDiv;
					},
					setDefaults: function(e) {
						return i(this._defaults, e || {}), this;
					},
					_attachDatepicker: function(t, n) {
						var r, i, s;
						r = t.nodeName.toLowerCase(), i = r === "div" || r === "span", t.id || (this.uuid += 1, t.id = "dp" + this.uuid), s = this._newInst(e(t), i), s.settings = e.extend({}, n || {}), r === "input" ? this._connectDatepicker(t, s) : i && this._inlineDatepicker(t, s);
					},
					_newInst: function(t, n) {
						var i = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
						return {
							id: i,
							input: t,
							selectedDay: 0,
							selectedMonth: 0,
							selectedYear: 0,
							drawMonth: 0,
							drawYear: 0,
							inline: n,
							dpDiv: n ? r(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
						};
					},
					_connectDatepicker: function(t, n) {
						var r = e(t);
						n.append = e([]), n.trigger = e([]);
						if (r.hasClass(this.markerClassName)) return;
						this._attachments(r, n), r.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(n), e.data(t, s, n), n.settings.disabled && this._disableDatepicker(t);
					},
					_attachments: function(t, n) {
						var r, i, s, o = this._get(n, "appendText"),
							u = this._get(n, "isRTL");
						n.append && n.append.remove(), o && (n.append = e("<span class='" + this._appendClass + "'>" + o + "</span>"), t[u ? "before" : "after"](n.append)), t.unbind("focus", this._showDatepicker), n.trigger && n.trigger.remove(), r = this._get(n, "showOn"), (r === "focus" || r === "both") && t.focus(this._showDatepicker);
						if (r === "button" || r === "both") i = this._get(n, "buttonText"), s = this._get(n, "buttonImage"), n.trigger = e(this._get(n, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
							src: s,
							alt: i,
							title: i
						}) : e("<button type='button'></button>").addClass(this._triggerClass).html(s ? e("<img/>").attr({
							src: s,
							alt: i,
							title: i
						}) : i)), t[u ? "before" : "after"](n.trigger), n.trigger.click(function() {
							return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1;
						});
					},
					_autoSize: function(e) {
						if (this._get(e, "autoSize") && !e.inline) {
							var t, n, r, i, s = new Date(2009, 11, 20),
								o = this._get(e, "dateFormat");
							o.match(/[DM]/) && (t = function(e) {
								n = 0, r = 0;
								for (i = 0; i < e.length; i++) e[i].length > n && (n = e[i].length, r = i);
								return r;
							}, s.setMonth(t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), s.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - s.getDay())), e.input.attr("size", this._formatDate(e, s).length);
						}
					},
					_inlineDatepicker: function(t, n) {
						var r = e(t);
						if (r.hasClass(this.markerClassName)) return;
						r.addClass(this.markerClassName).append(n.dpDiv), e.data(t, s, n), this._setDate(n, this._getDefaultDate(n), !0), this._updateDatepicker(n), this._updateAlternate(n), n.settings.disabled && this._disableDatepicker(t), n.dpDiv.css("display", "block");
					},
					_dialogDatepicker: function(t, n, r, o, u) {
						var a, f, l, c, h, p = this._dialogInst;
						return p || (this.uuid += 1, a = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, e.data(this._dialogInput[0], s, p)), i(p.settings, o || {}), n = n && n.constructor === Date ? this._formatDate(p, n) : n, this._dialogInput.val(n), this._pos = u ? u.length ? u : [u.pageX, u.pageY] : null, this._pos || (f = document.documentElement.clientWidth, l = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, h = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [f / 2 - 100 + c, l / 2 - 150 + h]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = r, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], s, p), this;
					},
					_destroyDatepicker: function(t) {
						var n, r = e(t),
							i = e.data(t, s);
						if (!r.hasClass(this.markerClassName)) return;
						n = t.nodeName.toLowerCase(), e.removeData(t, s), n === "input" ? (i.append.remove(), i.trigger.remove(), r.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (n === "div" || n === "span") && r.removeClass(this.markerClassName).empty();
					},
					_enableDatepicker: function(t) {
						var n, r, i = e(t),
							o = e.data(t, s);
						if (!i.hasClass(this.markerClassName)) return;
						n = t.nodeName.toLowerCase();
						if (n === "input") t.disabled = !1, o.trigger.filter("button").each(function() {
							this.disabled = !1;
						}).end().filter("img").css({
							opacity: "1.0",
							cursor: ""
						});
						else if (n === "div" || n === "span") r = i.children("." + this._inlineClass), r.children().removeClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1);
						this._disabledInputs = e.map(this._disabledInputs, function(e) {
							return e === t ? null : e;
						});
					},
					_disableDatepicker: function(t) {
						var n, r, i = e(t),
							o = e.data(t, s);
						if (!i.hasClass(this.markerClassName)) return;
						n = t.nodeName.toLowerCase();
						if (n === "input") t.disabled = !0, o.trigger.filter("button").each(function() {
							this.disabled = !0;
						}).end().filter("img").css({
							opacity: "0.5",
							cursor: "default"
						});
						else if (n === "div" || n === "span") r = i.children("." + this._inlineClass), r.children().addClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0);
						this._disabledInputs = e.map(this._disabledInputs, function(e) {
							return e === t ? null : e;
						}), this._disabledInputs[this._disabledInputs.length] = t;
					},
					_isDisabledDatepicker: function(e) {
						if (!e) return !1;
						for (var t = 0; t < this._disabledInputs.length; t++)
							if (this._disabledInputs[t] === e) return !0;
						return !1;
					},
					_getInst: function(t) {
						try {
							return e.data(t, s);
						} catch (n) {
							throw "Missing instance data for this datepicker";
						}
					},
					_optionDatepicker: function(n, r, s) {
						var o, u, a, f, l = this._getInst(n);
						if (arguments.length === 2 && typeof r == "string") return r === "defaults" ? e.extend({}, e.datepicker._defaults) : l ? r === "all" ? e.extend({}, l.settings) : this._get(l, r) : null;
						o = r || {}, typeof r == "string" && (o = {}, o[r] = s), l && (this._curInst === l && this._hideDatepicker(), u = this._getDateDatepicker(n, !0), a = this._getMinMaxDate(l, "min"), f = this._getMinMaxDate(l, "max"), i(l.settings, o), a !== null && o.dateFormat !== t && o.minDate === t && (l.settings.minDate = this._formatDate(l, a)), f !== null && o.dateFormat !== t && o.maxDate === t && (l.settings.maxDate = this._formatDate(l, f)), "disabled" in o && (o.disabled ? this._disableDatepicker(n) : this._enableDatepicker(n)), this._attachments(e(n), l), this._autoSize(l), this._setDate(l, u), this._updateAlternate(l), this._updateDatepicker(l));
					},
					_changeDatepicker: function(e, t, n) {
						this._optionDatepicker(e, t, n);
					},
					_refreshDatepicker: function(e) {
						var t = this._getInst(e);
						t && this._updateDatepicker(t);
					},
					_setDateDatepicker: function(e, t) {
						var n = this._getInst(e);
						n && (this._setDate(n, t), this._updateDatepicker(n), this._updateAlternate(n));
					},
					_getDateDatepicker: function(e, t) {
						var n = this._getInst(e);
						return n && !n.inline && this._setDateFromField(n, t), n ? this._getDate(n) : null;
					},
					_doKeyDown: function(t) {
						var n, r, i, s = e.datepicker._getInst(t.target),
							o = !0,
							u = s.dpDiv.is(".ui-datepicker-rtl");
						s._keyEvent = !0;
						if (e.datepicker._datepickerShowing) switch (t.keyCode) {
							case 9:
								e.datepicker._hideDatepicker(), o = !1;
								break;
							case 13:
								return i = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", s.dpDiv), i[0] && e.datepicker._selectDay(t.target, s.selectedMonth, s.selectedYear, i[0]), n = e.datepicker._get(s, "onSelect"), n ? (r = e.datepicker._formatDate(s), n.apply(s.input ? s.input[0] : null, [r, s])) : e.datepicker._hideDatepicker(), !1;
							case 27:
								e.datepicker._hideDatepicker();
								break;
							case 33:
								e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(s, "stepBigMonths") : -e.datepicker._get(s, "stepMonths"), "M");
								break;
							case 34:
								e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(s, "stepBigMonths") : +e.datepicker._get(s, "stepMonths"), "M");
								break;
							case 35:
								(t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey;
								break;
							case 36:
								(t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey;
								break;
							case 37:
								(t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, u ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(s, "stepBigMonths") : -e.datepicker._get(s, "stepMonths"), "M");
								break;
							case 38:
								(t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey;
								break;
							case 39:
								(t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, u ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(s, "stepBigMonths") : +e.datepicker._get(s, "stepMonths"), "M");
								break;
							case 40:
								(t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey;
								break;
							default:
								o = !1;
						} else t.keyCode === 36 && t.ctrlKey ? e.datepicker._showDatepicker(this) : o = !1;
						o && (t.preventDefault(), t.stopPropagation());
					},
					_doKeyPress: function(t) {
						var n, r, i = e.datepicker._getInst(t.target);
						if (e.datepicker._get(i, "constrainInput")) return n = e.datepicker._possibleChars(e.datepicker._get(i, "dateFormat")), r = String.fromCharCode(t.charCode == null ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || r < " " || !n || n.indexOf(r) > -1;
					},
					_doKeyUp: function(t) {
						var n, r = e.datepicker._getInst(t.target);
						if (r.input.val() !== r.lastVal) try {
							n = e.datepicker.parseDate(e.datepicker._get(r, "dateFormat"), r.input ? r.input.val() : null, e.datepicker._getFormatConfig(r)), n && (e.datepicker._setDateFromField(r), e.datepicker._updateAlternate(r), e.datepicker._updateDatepicker(r));
						} catch (i) {}
						return !0;
					},
					_showDatepicker: function(t) {
						t = t.target || t, t.nodeName.toLowerCase() !== "input" && (t = e("input", t.parentNode)[0]);
						if (e.datepicker._isDisabledDatepicker(t) || e.datepicker._lastInput === t) return;
						var n, r, s, o, u, a, f;
						n = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== n && (e.datepicker._curInst.dpDiv.stop(!0, !0), n && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), r = e.datepicker._get(n, "beforeShow"), s = r ? r.apply(t, [t, n]) : {};
						if (s === !1) return;
						i(n.settings, s), n.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(n), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), o = !1, e(t).parents().each(function() {
							return o |= e(this).css("position") === "fixed", !o;
						}), u = {
							left: e.datepicker._pos[0],
							top: e.datepicker._pos[1]
						}, e.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({
							position: "absolute",
							display: "block",
							top: "-1000px"
						}), e.datepicker._updateDatepicker(n), u = e.datepicker._checkOffset(n, u, o), n.dpDiv.css({
							position: e.datepicker._inDialog && e.blockUI ? "static" : o ? "fixed" : "absolute",
							display: "none",
							left: u.left + "px",
							top: u.top + "px"
						}), n.inline || (a = e.datepicker._get(n, "showAnim"), f = e.datepicker._get(n, "duration"), n.dpDiv.zIndex(e(t).zIndex() + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[a] ? n.dpDiv.show(a, e.datepicker._get(n, "showOptions"), f) : n.dpDiv[a || "show"](a ? f : null), e.datepicker._shouldFocusInput(n) && n.input.focus(), e.datepicker._curInst = n);
					},
					_updateDatepicker: function(t) {
						this.maxRows = 4, o = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t), t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
						var n, r = this._getNumberOfMonths(t),
							i = r[1],
							s = 17;
						t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), i > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + i).css("width", s * i + "em"), t.dpDiv[(r[0] !== 1 || r[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (n = t.yearshtml, setTimeout(function() {
							n === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), n = t.yearshtml = null;
						}, 0));
					},
					_shouldFocusInput: function(e) {
						return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus");
					},
					_checkOffset: function(t, n, r) {
						var i = t.dpDiv.outerWidth(),
							s = t.dpDiv.outerHeight(),
							o = t.input ? t.input.outerWidth() : 0,
							u = t.input ? t.input.outerHeight() : 0,
							a = document.documentElement.clientWidth + (r ? 0 : e(document).scrollLeft()),
							f = document.documentElement.clientHeight + (r ? 0 : e(document).scrollTop());
						return n.left -= this._get(t, "isRTL") ? i - o : 0, n.left -= r && n.left === t.input.offset().left ? e(document).scrollLeft() : 0, n.top -= r && n.top === t.input.offset().top + u ? e(document).scrollTop() : 0, n.left -= Math.min(n.left, n.left + i > a && a > i ? Math.abs(n.left + i - a) : 0), n.top -= Math.min(n.top, n.top + s > f && f > s ? Math.abs(s + u) : 0), n;
					},
					_findPos: function(t) {
						var n, r = this._getInst(t),
							i = this._get(r, "isRTL");
						while (t && (t.type === "hidden" || t.nodeType !== 1 || e.expr.filters.hidden(t))) t = t[i ? "previousSibling" : "nextSibling"];
						return n = e(t).offset(), [n.left, n.top];
					},
					_hideDatepicker: function(t) {
						var n, r, i, o, u = this._curInst;
						if (!u || t && u !== e.data(t, s)) return;
						this._datepickerShowing && (n = this._get(u, "showAnim"), r = this._get(u, "duration"), i = function() {
							e.datepicker._tidyDialog(u);
						}, e.effects && (e.effects.effect[n] || e.effects[n]) ? u.dpDiv.hide(n, e.datepicker._get(u, "showOptions"), r, i) : u.dpDiv[n === "slideDown" ? "slideUp" : n === "fadeIn" ? "fadeOut" : "hide"](n ? r : null, i), n || i(), this._datepickerShowing = !1, o = this._get(u, "onClose"), o && o.apply(u.input ? u.input[0] : null, [u.input ? u.input.val() : "", u]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
							position: "absolute",
							left: "0",
							top: "-100px"
						}), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1);
					},
					_tidyDialog: function(e) {
						e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
					},
					_checkExternalClick: function(t) {
						if (!e.datepicker._curInst) return;
						var n = e(t.target),
							r = e.datepicker._getInst(n[0]);
						(n[0].id !== e.datepicker._mainDivId && n.parents("#" + e.datepicker._mainDivId).length === 0 && !n.hasClass(e.datepicker.markerClassName) && !n.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || n.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== r) && e.datepicker._hideDatepicker();
					},
					_adjustDate: function(t, n, r) {
						var i = e(t),
							s = this._getInst(i[0]);
						if (this._isDisabledDatepicker(i[0])) return;
						this._adjustInstDate(s, n + (r === "M" ? this._get(s, "showCurrentAtPos") : 0), r), this._updateDatepicker(s);
					},
					_gotoToday: function(t) {
						var n, r = e(t),
							i = this._getInst(r[0]);
						this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear) : (n = new Date, i.selectedDay = n.getDate(), i.drawMonth = i.selectedMonth = n.getMonth(), i.drawYear = i.selectedYear = n.getFullYear()), this._notifyChange(i), this._adjustDate(r);
					},
					_selectMonthYear: function(t, n, r) {
						var i = e(t),
							s = this._getInst(i[0]);
						s["selected" + (r === "M" ? "Month" : "Year")] = s["draw" + (r === "M" ? "Month" : "Year")] = parseInt(n.options[n.selectedIndex].value, 10), this._notifyChange(s), this._adjustDate(i);
					},
					_selectDay: function(t, n, r, i) {
						var s, o = e(t);
						if (e(i).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0])) return;
						s = this._getInst(o[0]), s.selectedDay = s.currentDay = e("a", i).html(), s.selectedMonth = s.currentMonth = n, s.selectedYear = s.currentYear = r, this._selectDate(t, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear));
					},
					_clearDate: function(t) {
						var n = e(t);
						this._selectDate(n, "");
					},
					_selectDate: function(t, n) {
						var r, i = e(t),
							s = this._getInst(i[0]);
						n = n != null ? n : this._formatDate(s), s.input && s.input.val(n), this._updateAlternate(s), r = this._get(s, "onSelect"), r ? r.apply(s.input ? s.input[0] : null, [n, s]) : s.input && s.input.trigger("change"), s.inline ? this._updateDatepicker(s) : (this._hideDatepicker(), this._lastInput = s.input[0], typeof s.input[0] != "object" && s.input.focus(), this._lastInput = null);
					},
					_updateAlternate: function(t) {
						var n, r, i, s = this._get(t, "altField");
						s && (n = this._get(t, "altFormat") || this._get(t, "dateFormat"), r = this._getDate(t), i = this.formatDate(n, r, this._getFormatConfig(t)), e(s).each(function() {
							e(this).val(i);
						}));
					},
					noWeekends: function(e) {
						var t = e.getDay();
						return [t > 0 && t < 6, ""];
					},
					iso8601Week: function(e) {
						var t, n = new Date(e.getTime());
						return n.setDate(n.getDate() + 4 - (n.getDay() || 7)), t = n.getTime(), n.setMonth(0), n.setDate(1), Math.floor(Math.round((t - n) / 864e5) / 7) + 1;
					},
					parseDate: function(t, n, r) {
						if (t == null || n == null) throw "Invalid arguments";
						n = typeof n == "object" ? n.toString() : n + "";
						if (n === "") return null;
						var i, s, o, u = 0,
							a = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff,
							f = typeof a != "string" ? a : (new Date).getFullYear() % 100 + parseInt(a, 10),
							l = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort,
							c = (r ? r.dayNames : null) || this._defaults.dayNames,
							h = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort,
							p = (r ? r.monthNames : null) || this._defaults.monthNames,
							d = -1,
							v = -1,
							m = -1,
							g = -1,
							y = !1,
							b, w = function(e) {
								var n = i + 1 < t.length && t.charAt(i + 1) === e;
								return n && i++, n;
							},
							E = function(e) {
								var t = w(e),
									r = e === "@" ? 14 : e === "!" ? 20 : e === "y" && t ? 4 : e === "o" ? 3 : 2,
									i = new RegExp("^\\d{1," + r + "}"),
									s = n.substring(u).match(i);
								if (!s) throw "Missing number at position " + u;
								return u += s[0].length, parseInt(s[0], 10);
							},
							S = function(t, r, i) {
								var s = -1,
									o = e.map(w(t) ? i : r, function(e, t) {
										return [
											[t, e]
										];
									}).sort(function(e, t) {
										return -(e[1].length - t[1].length);
									});
								e.each(o, function(e, t) {
									var r = t[1];
									if (n.substr(u, r.length).toLowerCase() === r.toLowerCase()) return s = t[0], u += r.length, !1;
								});
								if (s !== -1) return s + 1;
								throw "Unknown name at position " + u;
							},
							x = function() {
								if (n.charAt(u) !== t.charAt(i)) throw "Unexpected literal at position " + u;
								u++;
							};
						for (i = 0; i < t.length; i++)
							if (y) t.charAt(i) === "'" && !w("'") ? y = !1 : x();
							else switch (t.charAt(i)) {
								case "d":
									m = E("d");
									break;
								case "D":
									S("D", l, c);
									break;
								case "o":
									g = E("o");
									break;
								case "m":
									v = E("m");
									break;
								case "M":
									v = S("M", h, p);
									break;
								case "y":
									d = E("y");
									break;
								case "@":
									b = new Date(E("@")), d = b.getFullYear(), v = b.getMonth() + 1, m = b.getDate();
									break;
								case "!":
									b = new Date((E("!") - this._ticksTo1970) / 1e4), d = b.getFullYear(), v = b.getMonth() + 1, m = b.getDate();
									break;
								case "'":
									w("'") ? x() : y = !0;
									break;
								default:
									x();
							}
						if (u < n.length) {
							o = n.substr(u);
							if (!/^\s+/.test(o)) throw "Extra/unparsed characters found in date: " + o;
						}
						d === -1 ? d = (new Date).getFullYear() : d < 100 && (d += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (d <= f ? 0 : -100));
						if (g > -1) {
							v = 1, m = g;
							do {
								s = this._getDaysInMonth(d, v - 1);
								if (m <= s) break;
								v++, m -= s;
							} while (!0);
						}
						b = this._daylightSavingAdjust(new Date(d, v - 1, m));
						if (b.getFullYear() !== d || b.getMonth() + 1 !== v || b.getDate() !== m) throw "Invalid date";
						return b;
					},
					ATOM: "yy-mm-dd",
					COOKIE: "D, dd M yy",
					ISO_8601: "yy-mm-dd",
					RFC_822: "D, d M y",
					RFC_850: "DD, dd-M-y",
					RFC_1036: "D, d M y",
					RFC_1123: "D, d M yy",
					RFC_2822: "D, d M yy",
					RSS: "D, d M y",
					TICKS: "!",
					TIMESTAMP: "@",
					W3C: "yy-mm-dd",
					_ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1e7,
					formatDate: function(e, t, n) {
						if (!t) return "";
						var r, i = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
							s = (n ? n.dayNames : null) || this._defaults.dayNames,
							o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
							u = (n ? n.monthNames : null) || this._defaults.monthNames,
							a = function(t) {
								var n = r + 1 < e.length && e.charAt(r + 1) === t;
								return n && r++, n;
							},
							f = function(e, t, n) {
								var r = "" + t;
								if (a(e))
									while (r.length < n) r = "0" + r;
								return r;
							},
							l = function(e, t, n, r) {
								return a(e) ? r[t] : n[t];
							},
							c = "",
							h = !1;
						if (t)
							for (r = 0; r < e.length; r++)
								if (h) e.charAt(r) === "'" && !a("'") ? h = !1 : c += e.charAt(r);
								else switch (e.charAt(r)) {
									case "d":
										c += f("d", t.getDate(), 2);
										break;
									case "D":
										c += l("D", t.getDay(), i, s);
										break;
									case "o":
										c += f("o", Math.round(((new Date(t.getFullYear(), t.getMonth(), t.getDate())).getTime() - (new Date(t.getFullYear(), 0, 0)).getTime()) / 864e5), 3);
										break;
									case "m":
										c += f("m", t.getMonth() + 1, 2);
										break;
									case "M":
										c += l("M", t.getMonth(), o, u);
										break;
									case "y":
										c += a("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
										break;
									case "@":
										c += t.getTime();
										break;
									case "!":
										c += t.getTime() * 1e4 + this._ticksTo1970;
										break;
									case "'":
										a("'") ? c += "'" : h = !0;
										break;
									default:
										c += e.charAt(r);
								}
						return c;
					},
					_possibleChars: function(e) {
						var t, n = "",
							r = !1,
							i = function(n) {
								var r = t + 1 < e.length && e.charAt(t + 1) === n;
								return r && t++, r;
							};
						for (t = 0; t < e.length; t++)
							if (r) e.charAt(t) === "'" && !i("'") ? r = !1 : n += e.charAt(t);
							else switch (e.charAt(t)) {
								case "d":
								case "m":
								case "y":
								case "@":
									n += "0123456789";
									break;
								case "D":
								case "M":
									return null;
								case "'":
									i("'") ? n += "'" : r = !0;
									break;
								default:
									n += e.charAt(t);
							}
						return n;
					},
					_get: function(e, n) {
						return e.settings[n] !== t ? e.settings[n] : this._defaults[n];
					},
					_setDateFromField: function(e, t) {
						if (e.input.val() === e.lastVal) return;
						var n = this._get(e, "dateFormat"),
							r = e.lastVal = e.input ? e.input.val() : null,
							i = this._getDefaultDate(e),
							s = i,
							o = this._getFormatConfig(e);
						try {
							s = this.parseDate(n, r, o) || i;
						} catch (u) {
							r = t ? "" : r;
						}
						e.selectedDay = s.getDate(), e.drawMonth = e.selectedMonth = s.getMonth(), e.drawYear = e.selectedYear = s.getFullYear(), e.currentDay = r ? s.getDate() : 0, e.currentMonth = r ? s.getMonth() : 0, e.currentYear = r ? s.getFullYear() : 0, this._adjustInstDate(e);
					},
					_getDefaultDate: function(e) {
						return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date));
					},
					_determineDate: function(t, n, r) {
						var i = function(e) {
								var t = new Date;
								return t.setDate(t.getDate() + e), t;
							},
							s = function(n) {
								try {
									return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), n, e.datepicker._getFormatConfig(t));
								} catch (r) {}
								var i = (n.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date,
									s = i.getFullYear(),
									o = i.getMonth(),
									u = i.getDate(),
									a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
									f = a.exec(n);
								while (f) {
									switch (f[2] || "d") {
										case "d":
										case "D":
											u += parseInt(f[1], 10);
											break;
										case "w":
										case "W":
											u += parseInt(f[1], 10) * 7;
											break;
										case "m":
										case "M":
											o += parseInt(f[1], 10), u = Math.min(u, e.datepicker._getDaysInMonth(s, o));
											break;
										case "y":
										case "Y":
											s += parseInt(f[1], 10), u = Math.min(u, e.datepicker._getDaysInMonth(s, o));
									}
									f = a.exec(n);
								}
								return new Date(s, o, u);
							},
							o = n == null || n === "" ? r : typeof n == "string" ? s(n) : typeof n == "number" ? isNaN(n) ? r : i(n) : new Date(n.getTime());
						return o = o && o.toString() === "Invalid Date" ? r : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o);
					},
					_daylightSavingAdjust: function(e) {
						return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null;
					},
					_setDate: function(e, t, n) {
						var r = !t,
							i = e.selectedMonth,
							s = e.selectedYear,
							o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
						e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), (i !== e.selectedMonth || s !== e.selectedYear) && !n && this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(r ? "" : this._formatDate(e));
					},
					_getDate: function(e) {
						var t = !e.currentYear || e.input && e.input.val() === "" ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
						return t;
					},
					_attachHandlers: function(t) {
						var n = this._get(t, "stepMonths"),
							r = "#" + t.id.replace(/\\\\/g, "\\");
						t.dpDiv.find("[data-handler]").map(function() {
							var t = {
								prev: function() {
									e.datepicker._adjustDate(r, -n, "M");
								},
								next: function() {
									e.datepicker._adjustDate(r, +n, "M");
								},
								hide: function() {
									e.datepicker._hideDatepicker();
								},
								today: function() {
									e.datepicker._gotoToday(r);
								},
								selectDay: function() {
									return e.datepicker._selectDay(r, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1;
								},
								selectMonth: function() {
									return e.datepicker._selectMonthYear(r, this, "M"), !1;
								},
								selectYear: function() {
									return e.datepicker._selectMonthYear(r, this, "Y"), !1;
								}
							};
							e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")]);
						});
					},
					_generateHTML: function(e) {
						var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F, I, q = new Date,
							R = this._daylightSavingAdjust(new Date(q.getFullYear(), q.getMonth(), q.getDate())),
							U = this._get(e, "isRTL"),
							z = this._get(e, "showButtonPanel"),
							W = this._get(e, "hideIfNoPrevNext"),
							X = this._get(e, "navigationAsDateFormat"),
							V = this._getNumberOfMonths(e),
							$ = this._get(e, "showCurrentAtPos"),
							J = this._get(e, "stepMonths"),
							K = V[0] !== 1 || V[1] !== 1,
							Q = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
							G = this._getMinMaxDate(e, "min"),
							Y = this._getMinMaxDate(e, "max"),
							Z = e.drawMonth - $,
							et = e.drawYear;
						Z < 0 && (Z += 12, et--);
						if (Y) {
							t = this._daylightSavingAdjust(new Date(Y.getFullYear(), Y.getMonth() - V[0] * V[1] + 1, Y.getDate())), t = G && t < G ? G : t;
							while (this._daylightSavingAdjust(new Date(et, Z, 1)) > t) Z--, Z < 0 && (Z = 11, et--);
						}
						e.drawMonth = Z, e.drawYear = et, n = this._get(e, "prevText"), n = X ? this.formatDate(n, this._daylightSavingAdjust(new Date(et, Z - J, 1)), this._getFormatConfig(e)) : n, r = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "e" : "w") + "'>" + n + "</span></a>" : W ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "e" : "w") + "'>" + n + "</span></a>", i = this._get(e, "nextText"), i = X ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z + J, 1)), this._getFormatConfig(e)) : i, s = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "w" : "e") + "'>" + i + "</span></a>" : W ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "w" : "e") + "'>" + i + "</span></a>", o = this._get(e, "currentText"), u = this._get(e, "gotoCurrent") && e.currentDay ? Q : R, o = X ? this.formatDate(o, u, this._getFormatConfig(e)) : o, a = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", f = z ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (U ? a : "") + (this._isInRange(e, u) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (U ? "" : a) + "</div>" : "", l = parseInt(this._get(e, "firstDay"), 10), l = isNaN(l) ? 0 : l, c = this._get(e, "showWeek"), h = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), d = this._get(e, "monthNames"), v = this._get(e, "monthNamesShort"), m = this._get(e, "beforeShowDay"), g = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), w = "", E;
						for (S = 0; S < V[0]; S++) {
							x = "", this.maxRows = 4;
							for (T = 0; T < V[1]; T++) {
								N = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), C = " ui-corner-all", k = "";
								if (K) {
									k += "<div class='ui-datepicker-group";
									if (V[1] > 1) switch (T) {
										case 0:
											k += " ui-datepicker-group-first", C = " ui-corner-" + (U ? "right" : "left");
											break;
										case V[1] - 1:
											k += " ui-datepicker-group-last", C = " ui-corner-" + (U ? "left" : "right");
											break;
										default:
											k += " ui-datepicker-group-middle", C = "";
									}
									k += "'>";
								}
								k += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + C + "'>" + (/all|left/.test(C) && S === 0 ? U ? s : r : "") + (/all|right/.test(C) && S === 0 ? U ? r : s : "") + this._generateMonthYearHeader(e, Z, et, G, Y, S > 0 || T > 0, d, v) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", L = c ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "";
								for (E = 0; E < 7; E++) A = (E + l) % 7, L += "<th" + ((E + l + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + h[A] + "'>" + p[A] + "</span></th>";
								k += L + "</tr></thead><tbody>", O = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, O)), M = (this._getFirstDayOfMonth(et, Z) - l + 7) % 7, _ = Math.ceil((M + O) / 7), D = K ? this.maxRows > _ ? this.maxRows : _ : _, this.maxRows = D, P = this._daylightSavingAdjust(new Date(et, Z, 1 - M));
								for (H = 0; H < D; H++) {
									k += "<tr>", B = c ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(P) + "</td>" : "";
									for (E = 0; E < 7; E++) j = m ? m.apply(e.input ? e.input[0] : null, [P]) : [!0, ""], F = P.getMonth() !== Z, I = F && !y || !j[0] || G && P < G || Y && P > Y, B += "<td class='" + ((E + l + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (P.getTime() === N.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === P.getTime() && b.getTime() === N.getTime() ? " " + this._dayOverClass : "") + (I ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !g ? "" : " " + j[1] + (P.getTime() === Q.getTime() ? " " + this._currentClass : "") + (P.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!F || g) && j[2] ? " title='" + j[2].replace(/'/g, "&#39;") + "'" : "") + (I ? "" : " data-handler='selectDay' data-event='click' data-month='" + P.getMonth() + "' data-year='" + P.getFullYear() + "'") + ">" + (F && !g ? "&#xa0;" : I ? "<span class='ui-state-default'>" + P.getDate() + "</span>" : "<a class='ui-state-default" + (P.getTime() === R.getTime() ? " ui-state-highlight" : "") + (P.getTime() === Q.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + P.getDate() + "</a>") + "</td>", P.setDate(P.getDate() + 1), P = this._daylightSavingAdjust(P);
									k += B + "</tr>";
								}
								Z++, Z > 11 && (Z = 0, et++), k += "</tbody></table>" + (K ? "</div>" + (V[0] > 0 && T === V[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += k;
							}
							w += x;
						}
						return w += f, e._keyEvent = !1, w;
					},
					_generateMonthYearHeader: function(e, t, n, r, i, s, o, u) {
						var a, f, l, c, h, p, d, v, m = this._get(e, "changeMonth"),
							g = this._get(e, "changeYear"),
							y = this._get(e, "showMonthAfterYear"),
							b = "<div class='ui-datepicker-title'>",
							w = "";
						if (s || !m) w += "<span class='ui-datepicker-month'>" + o[t] + "</span>";
						else {
							a = r && r.getFullYear() === n, f = i && i.getFullYear() === n, w += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
							for (l = 0; l < 12; l++)(!a || l >= r.getMonth()) && (!f || l <= i.getMonth()) && (w += "<option value='" + l + "'" + (l === t ? " selected='selected'" : "") + ">" + u[l] + "</option>");
							w += "</select>";
						}
						y || (b += w + (s || !m || !g ? "&#xa0;" : ""));
						if (!e.yearshtml) {
							e.yearshtml = "";
							if (s || !g) b += "<span class='ui-datepicker-year'>" + n + "</span>";
							else {
								c = this._get(e, "yearRange").split(":"), h = (new Date).getFullYear(), p = function(e) {
									var t = e.match(/c[+\-].*/) ? n + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? h + parseInt(e, 10) : parseInt(e, 10);
									return isNaN(t) ? h : t;
								}, d = p(c[0]), v = Math.max(d, p(c[1] || "")), d = r ? Math.max(d, r.getFullYear()) : d, v = i ? Math.min(v, i.getFullYear()) : v, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
								for (; d <= v; d++) e.yearshtml += "<option value='" + d + "'" + (d === n ? " selected='selected'" : "") + ">" + d + "</option>";
								e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null;
							}
						}
						return b += this._get(e, "yearSuffix"), y && (b += (s || !m || !g ? "&#xa0;" : "") + w), b += "</div>", b;
					},
					_adjustInstDate: function(e, t, n) {
						var r = e.drawYear + (n === "Y" ? t : 0),
							i = e.drawMonth + (n === "M" ? t : 0),
							s = Math.min(e.selectedDay, this._getDaysInMonth(r, i)) + (n === "D" ? t : 0),
							o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(r, i, s)));
						e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), (n === "M" || n === "Y") && this._notifyChange(e);
					},
					_restrictMinMax: function(e, t) {
						var n = this._getMinMaxDate(e, "min"),
							r = this._getMinMaxDate(e, "max"),
							i = n && t < n ? n : t;
						return r && i > r ? r : i;
					},
					_notifyChange: function(e) {
						var t = this._get(e, "onChangeMonthYear");
						t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e]);
					},
					_getNumberOfMonths: function(e) {
						var t = this._get(e, "numberOfMonths");
						return t == null ? [1, 1] : typeof t == "number" ? [1, t] : t;
					},
					_getMinMaxDate: function(e, t) {
						return this._determineDate(e, this._get(e, t + "Date"), null);
					},
					_getDaysInMonth: function(e, t) {
						return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate();
					},
					_getFirstDayOfMonth: function(e, t) {
						return (new Date(e, t, 1)).getDay();
					},
					_canAdjustMonth: function(e, t, n, r) {
						var i = this._getNumberOfMonths(e),
							s = this._daylightSavingAdjust(new Date(n, r + (t < 0 ? t : i[0] * i[1]), 1));
						return t < 0 && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())), this._isInRange(e, s);
					},
					_isInRange: function(e, t) {
						var n, r, i = this._getMinMaxDate(e, "min"),
							s = this._getMinMaxDate(e, "max"),
							o = null,
							u = null,
							a = this._get(e, "yearRange");
						return a && (n = a.split(":"), r = (new Date).getFullYear(), o = parseInt(n[0], 10), u = parseInt(n[1], 10), n[0].match(/[+\-].*/) && (o += r), n[1].match(/[+\-].*/) && (u += r)), (!i || t.getTime() >= i.getTime()) && (!s || t.getTime() <= s.getTime()) && (!o || t.getFullYear() >= o) && (!u || t.getFullYear() <= u);
					},
					_getFormatConfig: function(e) {
						var t = this._get(e, "shortYearCutoff");
						return t = typeof t != "string" ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
							shortYearCutoff: t,
							dayNamesShort: this._get(e, "dayNamesShort"),
							dayNames: this._get(e, "dayNames"),
							monthNamesShort: this._get(e, "monthNamesShort"),
							monthNames: this._get(e, "monthNames")
						};
					},
					_formatDate: function(e, t, n, r) {
						t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
						var i = t ? typeof t == "object" ? t : this._daylightSavingAdjust(new Date(r, n, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
						return this.formatDate(this._get(e, "dateFormat"), i, this._getFormatConfig(e));
					}
				}), e.fn.datepicker = function(t) {
					if (!this.length) return this;
					e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), e("#" + e.datepicker._mainDivId).length === 0 && e("body").append(e.datepicker.dpDiv);
					var n = Array.prototype.slice.call(arguments, 1);
					return typeof t != "string" || t !== "isDisabled" && t !== "getDate" && t !== "widget" ? t === "option" && arguments.length === 2 && typeof arguments[1] == "string" ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n)) : this.each(function() {
						typeof t == "string" ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(n)) : e.datepicker._attachDatepicker(this, t);
					}) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n));
				}, e.datepicker = new n, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.10.3", e.datepicker.regional.zh_CN = {
					closeText: "关闭",
					prevText: "&#x3C;上月",
					nextText: "下月&#x3E;",
					currentText: "今天",
					monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
					monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
					dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
					dayNamesShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
					dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
					weekHeader: "周",
					dateFormat: "yy-mm-dd",
					firstDay: 1,
					isRTL: !1,
					showMonthAfterYear: !0,
					yearSuffix: "年"
				}, e.datepicker.setDefaults(e.datepicker.regional.zh_CN);
			}(jQuery);
	} catch (i) {
		wx.jslog({
			src: "common/lib/datepicker.js"
		}, i);
	}
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
define("biz_common/moment.js", [], function(t, e, n) {
	function s(t, e) {
		return function(n) {
			return c(t.call(this, n), e);
		};
	}

	function r(t) {
		return function(e) {
			return this.lang().ordinal(t.call(this, e));
		};
	}

	function a() {}

	function i(t) {
		u(this, t);
	}

	function o(t) {
		var e = this._data = {},
			n = t.years || t.year || t.y || 0,
			s = t.months || t.month || t.M || 0,
			r = t.weeks || t.week || t.w || 0,
			a = t.days || t.day || t.d || 0,
			i = t.hours || t.hour || t.h || 0,
			o = t.minutes || t.minute || t.m || 0,
			u = t.seconds || t.second || t.s || 0,
			c = t.milliseconds || t.millisecond || t.ms || 0;
		this._milliseconds = c + 1e3 * u + 6e4 * o + 36e5 * i, this._days = a + 7 * r, this._months = s + 12 * n, e.milliseconds = c % 1e3,
			u += d(c / 1e3), e.seconds = u % 60, o += d(u / 60), e.minutes = o % 60, i += d(o / 60), e.hours = i % 24, a += d(i / 24),
			a += 7 * r, e.days = a % 30, s += d(a / 30), e.months = s % 12, n += d(s / 12), e.years = n;
	}

	function u(t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
		return t;
	}

	function d(t) {
		return 0 > t ? Math.ceil(t) : Math.floor(t);
	}

	function c(t, e) {
		for (var n = t + ""; n.length < e;) n = "0" + n;
		return n;
	}

	function h(t, e, n) {
		var s, r = e._milliseconds,
			a = e._days,
			i = e._months;
		r && t._d.setTime(+t + r * n), a && t.date(t.date() + a * n), i && (s = t.date(), t.date(1).month(t.month() + i * n).date(Math.min(s, t.daysInMonth())));
	}

	function f(t) {
		return "[object Array]" === Object.prototype.toString.call(t);
	}

	function l(t, e) {
		var n, s = Math.min(t.length, e.length),
			r = Math.abs(t.length - e.length),
			a = 0;
		for (n = 0; s > n; n++) ~~t[n] !== ~~e[n] && a++;
		return a + r;
	}

	function _(t, e) {
		return e.abbr = t, A[t] || (A[t] = new a), A[t].set(e), A[t];
	}

	function m(e) {
		return e ? (!A[e] && Z && t("./lang/" + e), A[e]) : C.fn._lang;
	}

	function M(t) {
		return t.match(/\[.*\]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "");
	}

	function y(t) {
		var e, n, s = t.match(E);
		for (e = 0, n = s.length; n > e; e++) s[e] = ie[s[e]] ? ie[s[e]] : M(s[e]);
		return function(r) {
			var a = "";
			for (e = 0; n > e; e++) a += "function" == typeof s[e].call ? s[e].call(r, t) : s[e];
			return a;
		};
	}

	function Y(t, e) {
		function n(e) {
			return t.lang().longDateFormat(e) || e;
		}
		for (var s = 5; s-- && J.test(e);) e = e.replace(J, n);
		return se[e] || (se[e] = y(e)), se[e](t);
	}

	function D(t) {
		switch (t) {
			case "DDDD":
				return $;

			case "YYYY":
				return I;

			case "YYYYY":
				return X;

			case "S":
			case "SS":
			case "SSS":
			case "DDD":
				return N;

			case "MMM":
			case "MMMM":
			case "dd":
			case "ddd":
			case "dddd":
			case "a":
			case "A":
				return j;

			case "X":
				return G;

			case "Z":
			case "ZZ":
				return R;

			case "T":
				return B;

			case "MM":
			case "DD":
			case "YY":
			case "HH":
			case "hh":
			case "mm":
			case "ss":
			case "M":
			case "D":
			case "d":
			case "H":
			case "h":
			case "m":
			case "s":
				return V;

			default:
				return new RegExp(t.replace("\\", ""));
		}
	}

	function p(t, e, n) {
		var s, r = n._a;
		switch (t) {
			case "M":
			case "MM":
				r[1] = null == e ? 0 : ~~e - 1;
				break;

			case "MMM":
			case "MMMM":
				s = m(n._l).monthsParse(e), null != s ? r[1] = s : n._isValid = !1;
				break;

			case "D":
			case "DD":
			case "DDD":
			case "DDDD":
				null != e && (r[2] = ~~e);
				break;

			case "YY":
				r[0] = ~~e + (~~e > 68 ? 1900 : 2e3);
				break;

			case "YYYY":
			case "YYYYY":
				r[0] = ~~e;
				break;

			case "a":
			case "A":
				n._isPm = "pm" === (e + "").toLowerCase();
				break;

			case "H":
			case "HH":
			case "h":
			case "hh":
				r[3] = ~~e;
				break;

			case "m":
			case "mm":
				r[4] = ~~e;
				break;

			case "s":
			case "ss":
				r[5] = ~~e;
				break;

			case "S":
			case "SS":
			case "SSS":
				r[6] = ~~(1e3 * ("0." + e));
				break;

			case "X":
				n._d = new Date(1e3 * parseFloat(e));
				break;

			case "Z":
			case "ZZ":
				n._useUTC = !0, s = (e + "").match(te), s && s[1] && (n._tzh = ~~s[1]), s && s[2] && (n._tzm = ~~s[2]),
					s && "+" === s[0] && (n._tzh = -n._tzh, n._tzm = -n._tzm);
		}
		null == e && (n._isValid = !1);
	}

	function g(t) {
		var e, n, s = [];
		if (!t._d) {
			for (e = 0; 7 > e; e++) t._a[e] = s[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
			s[3] += t._tzh || 0, s[4] += t._tzm || 0, n = new Date(0), t._useUTC ? (n.setUTCFullYear(s[0], s[1], s[2]),
					n.setUTCHours(s[3], s[4], s[5], s[6])) : (n.setFullYear(s[0], s[1], s[2]), n.setHours(s[3], s[4], s[5], s[6])),
				t._d = n;
		}
	}

	function w(t) {
		var e, n, s = t._f.match(E),
			r = t._i;
		for (t._a = [], e = 0; e < s.length; e++) n = (D(s[e]).exec(r) || [])[0], n && (r = r.slice(r.indexOf(n) + n.length)),
			ie[s[e]] && p(s[e], n, t);
		t._isPm && t._a[3] < 12 && (t._a[3] += 12), t._isPm === !1 && 12 === t._a[3] && (t._a[3] = 0), g(t);
	}

	function T(t) {
		for (var e, n, s, r, a = 99; t._f.length;) {
			if (e = u({}, t), e._f = t._f.pop(), w(e), n = new i(e), n.isValid()) {
				s = n;
				break;
			}
			r = l(e._a, n.toArray()), a > r && (a = r, s = n);
		}
		u(t, s);
	}

	function k(t) {
		var e, n = t._i;
		if (q.exec(n)) {
			for (t._f = "YYYY-MM-DDT", e = 0; 4 > e; e++)
				if (Q[e][1].exec(n)) {
					t._f += Q[e][0];
					break;
				}
			R.exec(n) && (t._f += " Z"), w(t);
		} else t._d = new Date(n);
	}

	function v(t) {
		var e = t._i,
			n = P.exec(e);
		void 0 === e ? t._d = new Date : n ? t._d = new Date(+n[1]) : "string" == typeof e ? k(t) : f(e) ? (t._a = e.slice(0),
			g(t)) : t._d = new Date(e instanceof Date ? +e : e);
	}

	function S(t, e, n, s, r) {
		return r.relativeTime(e || 1, !!n, t, s);
	}

	function L(t, e, n) {
		var s = U(Math.abs(t) / 1e3),
			r = U(s / 60),
			a = U(r / 60),
			i = U(a / 24),
			o = U(i / 365),
			u = 45 > s && ["s", s] || 1 === r && ["m"] || 45 > r && ["mm", r] || 1 === a && ["h"] || 22 > a && ["hh", a] || 1 === i && ["d"] || 25 >= i && ["dd", i] || 45 >= i && ["M"] || 345 > i && ["MM", U(i / 30)] || 1 === o && ["y"] || ["yy", o];
		return u[2] = e, u[3] = t > 0, u[4] = n, S.apply({}, u);
	}

	function b(t, e, n) {
		var s = n - e,
			r = n - t.day();
		return r > s && (r -= 7), s - 7 > r && (r += 7), Math.ceil(C(t).add("d", r).dayOfYear() / 7);
	}

	function F(t) {
		var e = t._i,
			n = t._f;
		return null === e || "" === e ? null : ("string" == typeof e && (t._i = e = m().preparse(e)), C.isMoment(e) ? (t = u({}, e),
			t._d = new Date(+e._d)) : n ? f(n) ? T(t) : w(t) : v(t), new i(t));
	}

	function H(t, e) {
		C.fn[t] = C.fn[t + "s"] = function(t) {
			var n = this._isUTC ? "UTC" : "";
			return null != t ? (this._d["set" + n + e](t), this) : this._d["get" + n + e]();
		};
	}

	function O(t) {
		C.duration.fn[t] = function() {
			return this._data[t];
		};
	}

	function z(t, e) {
		C.duration.fn["as" + t] = function() {
			return +this / e;
		};
	}
	for (var C, W, x = "2.0.0", U = Math.round, A = {}, Z = "undefined" != typeof n && n.exports, P = /^\/?Date\((\-?\d+)/i, E = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g, J = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, V = /\d\d?/, N = /\d{1,3}/, $ = /\d{3}/, I = /\d{1,4}/, X = /[+\-]?\d{1,6}/, j = /[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF]+\s*?[\u0600-\u06FF]+/i, R = /Z|[\+\-]\d\d:?\d\d/i, B = /T/i, G = /[\+\-]?\d+(\.\d{1,3})?/, q = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/, K = "YYYY-MM-DDTHH:mm:ssZ", Q = [
		["HH:mm:ss.S", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
		["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
		["HH:mm", /(T| )\d\d:\d\d/],
		["HH", /(T| )\d\d/]
	], te = /([\+\-]|\d\d)/gi, ee = "Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"), ne = {
		Milliseconds: 1,
		Seconds: 1e3,
		Minutes: 6e4,
		Hours: 36e5,
		Days: 864e5,
		Months: 2592e6,
		Years: 31536e6
	}, se = {}, re = "DDD w W M D d".split(" "), ae = "M D H h m s w W".split(" "), ie = {
		M: function() {
			return this.month() + 1;
		},
		MMM: function(t) {
			return this.lang().monthsShort(this, t);
		},
		MMMM: function(t) {
			return this.lang().months(this, t);
		},
		D: function() {
			return this.date();
		},
		DDD: function() {
			return this.dayOfYear();
		},
		d: function() {
			return this.day();
		},
		dd: function(t) {
			return this.lang().weekdaysMin(this, t);
		},
		ddd: function(t) {
			return this.lang().weekdaysShort(this, t);
		},
		dddd: function(t) {
			return this.lang().weekdays(this, t);
		},
		w: function() {
			return this.week();
		},
		W: function() {
			return this.isoWeek();
		},
		YY: function() {
			return c(this.year() % 100, 2);
		},
		YYYY: function() {
			return c(this.year(), 4);
		},
		YYYYY: function() {
			return c(this.year(), 5);
		},
		a: function() {
			return this.lang().meridiem(this.hours(), this.minutes(), !0);
		},
		A: function() {
			return this.lang().meridiem(this.hours(), this.minutes(), !1);
		},
		H: function() {
			return this.hours();
		},
		h: function() {
			return this.hours() % 12 || 12;
		},
		m: function() {
			return this.minutes();
		},
		s: function() {
			return this.seconds();
		},
		S: function() {
			return ~~(this.milliseconds() / 100);
		},
		SS: function() {
			return c(~~(this.milliseconds() / 10), 2);
		},
		SSS: function() {
			return c(this.milliseconds(), 3);
		},
		Z: function() {
			var t = -this.zone(),
				e = "+";
			return 0 > t && (t = -t, e = "-"), e + c(~~(t / 60), 2) + ":" + c(~~t % 60, 2);
		},
		ZZ: function() {
			var t = -this.zone(),
				e = "+";
			return 0 > t && (t = -t, e = "-"), e + c(~~(10 * t / 6), 4);
		},
		X: function() {
			return this.unix();
		}
	}; re.length;) W = re.pop(), ie[W + "o"] = r(ie[W]);
	for (; ae.length;) W = ae.pop(), ie[W + W] = s(ie[W], 2);
	for (ie.DDDD = s(ie.DDD, 3), a.prototype = {
		set: function(t) {
			var e, n;
			for (n in t) e = t[n], "function" == typeof e ? this[n] = e : this["_" + n] = e;
		},
		_months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
		months: function(t) {
			return this._months[t.month()];
		},
		_monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
		monthsShort: function(t) {
			return this._monthsShort[t.month()];
		},
		monthsParse: function(t) {
			var e, n, s;
			for (this._monthsParse || (this._monthsParse = []), e = 0; 12 > e; e++)
				if (this._monthsParse[e] || (n = C([2e3, e]),
						s = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[e] = new RegExp(s.replace(".", ""), "i")),
					this._monthsParse[e].test(t)) return e;
		},
		_weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
		weekdays: function(t) {
			return this._weekdays[t.day()];
		},
		_weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
		weekdaysShort: function(t) {
			return this._weekdaysShort[t.day()];
		},
		_weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
		weekdaysMin: function(t) {
			return this._weekdaysMin[t.day()];
		},
		_longDateFormat: {
			LT: "h:mm A",
			L: "MM/DD/YYYY",
			LL: "MMMM D YYYY",
			LLL: "MMMM D YYYY LT",
			LLLL: "dddd, MMMM D YYYY LT"
		},
		longDateFormat: function(t) {
			var e = this._longDateFormat[t];
			return !e && this._longDateFormat[t.toUpperCase()] && (e = this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(t) {
				return t.slice(1);
			}), this._longDateFormat[t] = e), e;
		},
		meridiem: function(t, e, n) {
			return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
		},
		_calendar: {
			sameDay: "[Today at] LT",
			nextDay: "[Tomorrow at] LT",
			nextWeek: "dddd [at] LT",
			lastDay: "[Yesterday at] LT",
			lastWeek: "[last] dddd [at] LT",
			sameElse: "L"
		},
		calendar: function(t, e) {
			var n = this._calendar[t];
			return "function" == typeof n ? n.apply(e) : n;
		},
		_relativeTime: {
			future: "in %s",
			past: "%s ago",
			s: "a few seconds",
			m: "a minute",
			mm: "%d minutes",
			h: "an hour",
			hh: "%d hours",
			d: "a day",
			dd: "%d days",
			M: "a month",
			MM: "%d months",
			y: "a year",
			yy: "%d years"
		},
		relativeTime: function(t, e, n, s) {
			var r = this._relativeTime[n];
			return "function" == typeof r ? r(t, e, n, s) : r.replace(/%d/i, t);
		},
		pastFuture: function(t, e) {
			var n = this._relativeTime[t > 0 ? "future" : "past"];
			return "function" == typeof n ? n(e) : n.replace(/%s/i, e);
		},
		ordinal: function(t) {
			return this._ordinal.replace("%d", t);
		},
		_ordinal: "%d",
		preparse: function(t) {
			return t;
		},
		postformat: function(t) {
			return t;
		},
		week: function(t) {
			return b(t, this._week.dow, this._week.doy);
		},
		_week: {
			dow: 0,
			doy: 6
		}
	}, C = function(t, e, n) {
		return F({
			_i: t,
			_f: e,
			_l: n,
			_isUTC: !1
		});
	}, C.utc = function(t, e, n) {
		return F({
			_useUTC: !0,
			_isUTC: !0,
			_l: n,
			_i: t,
			_f: e
		});
	}, C.unix = function(t) {
		return C(1e3 * t);
	}, C.duration = function(t, e) {
		var n, s = C.isDuration(t),
			r = "number" == typeof t,
			a = s ? t._data : r ? {} : t;
		return r && (e ? a[e] = t : a.milliseconds = t), n = new o(a), s && t.hasOwnProperty("_lang") && (n._lang = t._lang),
			n;
	}, C.version = x, C.defaultFormat = K, C.lang = function(t, e) {
		return t ? (e ? _(t, e) : A[t] || m(t), void(C.duration.fn._lang = C.fn._lang = m(t))) : C.fn._lang._abbr;
	}, C.langData = function(t) {
		return t && t._lang && t._lang._abbr && (t = t._lang._abbr), m(t);
	}, C.isMoment = function(t) {
		return t instanceof i;
	}, C.isDuration = function(t) {
		return t instanceof o;
	}, C.fn = i.prototype = {
		clone: function() {
			return C(this);
		},
		valueOf: function() {
			return +this._d;
		},
		unix: function() {
			return Math.floor(+this._d / 1e3);
		},
		toString: function() {
			return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
		},
		toDate: function() {
			return this._d;
		},
		toJSON: function() {
			return C.utc(this).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
		},
		toArray: function() {
			var t = this;
			return [t.year(), t.month(), t.date(), t.hours(), t.minutes(), t.seconds(), t.milliseconds()];
		},
		isValid: function() {
			return null == this._isValid && (this._isValid = this._a ? !l(this._a, (this._isUTC ? C.utc(this._a) : C(this._a)).toArray()) : !isNaN(this._d.getTime())), !!this._isValid;
		},
		utc: function() {
			return this._isUTC = !0, this;
		},
		local: function() {
			return this._isUTC = !1, this;
		},
		format: function(t) {
			var e = Y(this, t || C.defaultFormat);
			return this.lang().postformat(e);
		},
		add: function(t, e) {
			var n;
			return n = "string" == typeof t ? C.duration(+e, t) : C.duration(t, e), h(this, n, 1), this;
		},
		subtract: function(t, e) {
			var n;
			return n = "string" == typeof t ? C.duration(+e, t) : C.duration(t, e), h(this, n, -1), this;
		},
		diff: function(t, e, n) {
			var s, r, a = this._isUTC ? C(t).utc() : C(t).local(),
				i = 6e4 * (this.zone() - a.zone());
			return e && (e = e.replace(/s$/, "")), "year" === e || "month" === e ? (s = 432e5 * (this.daysInMonth() + a.daysInMonth()),
					r = 12 * (this.year() - a.year()) + (this.month() - a.month()), r += (this - C(this).startOf("month") - (a - C(a).startOf("month"))) / s,
					"year" === e && (r /= 12)) : (s = this - a - i, r = "second" === e ? s / 1e3 : "minute" === e ? s / 6e4 : "hour" === e ? s / 36e5 : "day" === e ? s / 864e5 : "week" === e ? s / 6048e5 : s),
				n ? r : d(r);
		},
		from: function(t, e) {
			return C.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!e);
		},
		fromNow: function(t) {
			return this.from(C(), t);
		},
		calendar: function() {
			var t = this.diff(C().startOf("day"), "days", !0),
				e = -6 > t ? "sameElse" : -1 > t ? "lastWeek" : 0 > t ? "lastDay" : 1 > t ? "sameDay" : 2 > t ? "nextDay" : 7 > t ? "nextWeek" : "sameElse";
			return this.format(this.lang().calendar(e, this));
		},
		isLeapYear: function() {
			var t = this.year();
			return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0;
		},
		isDST: function() {
			return this.zone() < C([this.year()]).zone() || this.zone() < C([this.year(), 5]).zone();
		},
		day: function(t) {
			var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
			return null == t ? e : this.add({
				d: t - e
			});
		},
		startOf: function(t) {
			switch (t = t.replace(/s$/, "")) {
				case "year":
					this.month(0);

				case "month":
					this.date(1);

				case "week":
				case "day":
					this.hours(0);

				case "hour":
					this.minutes(0);

				case "minute":
					this.seconds(0);

				case "second":
					this.milliseconds(0);
			}
			return "week" === t && this.day(0), this;
		},
		endOf: function(t) {
			return this.startOf(t).add(t.replace(/s?$/, "s"), 1).subtract("ms", 1);
		},
		isAfter: function(t, e) {
			return e = "undefined" != typeof e ? e : "millisecond", +this.clone().startOf(e) > +C(t).startOf(e);
		},
		isBefore: function(t, e) {
			return e = "undefined" != typeof e ? e : "millisecond", +this.clone().startOf(e) < +C(t).startOf(e);
		},
		isSame: function(t, e) {
			return e = "undefined" != typeof e ? e : "millisecond", +this.clone().startOf(e) === +C(t).startOf(e);
		},
		zone: function() {
			return this._isUTC ? 0 : this._d.getTimezoneOffset();
		},
		daysInMonth: function() {
			return C.utc([this.year(), this.month() + 1, 0]).date();
		},
		dayOfYear: function(t) {
			var e = U((C(this).startOf("day") - C(this).startOf("year")) / 864e5) + 1;
			return null == t ? e : this.add("d", t - e);
		},
		isoWeek: function(t) {
			var e = b(this, 1, 4);
			return null == t ? e : this.add("d", 7 * (t - e));
		},
		week: function(t) {
			var e = this.lang().week(this);
			return null == t ? e : this.add("d", 7 * (t - e));
		},
		lang: function(t) {
			return void 0 === t ? this._lang : (this._lang = m(t), this);
		}
	}, W = 0; W < ee.length; W++) H(ee[W].toLowerCase().replace(/s$/, ""), ee[W]);
	H("year", "FullYear"), C.fn.days = C.fn.day, C.fn.weeks = C.fn.week, C.fn.isoWeeks = C.fn.isoWeek,
		C.duration.fn = o.prototype = {
			weeks: function() {
				return d(this.days() / 7);
			},
			valueOf: function() {
				return this._milliseconds + 864e5 * this._days + 2592e6 * this._months;
			},
			humanize: function(t) {
				var e = +this,
					n = L(e, !t, this.lang());
				return t && (n = this.lang().pastFuture(e, n)), this.lang().postformat(n);
			},
			lang: C.fn.lang
		};
	for (W in ne) ne.hasOwnProperty(W) && (z(W, ne[W]), O(W.toLowerCase()));
	return z("Weeks", 6048e5), C.lang("zh-cn", {
		months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
		monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
		weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
		weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
		weekdaysMin: "日_一_二_三_四_五_六".split("_"),
		longDateFormat: {
			LT: "Ah点mm",
			L: "YYYY年MMMD日",
			LL: "YYYY年MMMD日",
			LLL: "YYYY年MMMD日LT",
			LLLL: "YYYY年MMMD日ddddLT",
			l: "YYYY年MMMD日",
			ll: "YYYY年MMMD日",
			lll: "YYYY年MMMD日LT",
			llll: "YYYY年MMMD日ddddLT"
		},
		meridiem: function(t, e) {
			return 9 > t ? "早上" : 11 > t && 30 > e ? "上午" : 13 > t && 30 > e ? "中午" : 18 > t ? "下午" : "晚上";
		},
		calendar: {
			sameDay: "[今天]LT",
			nextDay: "[明天]LT",
			nextWeek: "[下]ddddLT",
			lastDay: "[昨天]LT",
			lastWeek: "[上]ddddLT",
			sameElse: "L"
		},
		ordinal: function(t, e) {
			switch (e) {
				case "d":
				case "D":
				case "DDD":
					return t + "日";

				case "M":
					return t + "月";

				case "w":
				case "W":
					return t + "周";

				default:
					return t;
			}
		},
		relativeTime: {
			future: "%s内",
			past: "%s前",
			s: "几秒",
			m: "1分钟",
			mm: "%d分钟",
			h: "1小时",
			hh: "%d小时",
			d: "1天",
			dd: "%d天",
			M: "1个月",
			MM: "%d个月",
			y: "1年",
			yy: "%d年"
		}
	}), C;
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
define("biz_web/lib/store.js", ["biz_web/lib/json.js"], function(e, t, n) {
	try {
		var r = +(new Date),
			i = e("biz_web/lib/json.js"),
			s = {},
			o = window.document,
			u = "localStorage",
			a = "__storejs__",
			f;
		s.disabled = !1, s.set = function(e, t) {}, s.get = function(e) {}, s.remove = function(e) {}, s.clear = function() {}, s.transact = function(e, t, n) {
			var r = s.get(e);
			n == null && (n = t, t = null), typeof r == "undefined" && (r = t || {}), n(r), s.set(e, r);
		}, s.getAll = function() {}, s.serialize = function(e) {
			return i.stringify2(e);
		}, s.deserialize = function(e) {
			if (typeof e != "string") return undefined;
			try {
				return i.parse(e);
			} catch (t) {
				return e || undefined;
			}
		};

		function l() {
			try {
				return u in window && window[u];
			} catch (e) {
				return !1;
			}
		}
		if (l()) f = window[u], s.set = function(e, t) {
			if (t === undefined) return s.remove(e);
			try {
				f.setItem(e, s.serialize(t));
			} catch (n) {
				f.clear(), f.setItem(e, s.serialize(t));
			}
			return t;
		}, s.get = function(e) {
			return s.deserialize(f.getItem(e));
		}, s.remove = function(e) {
			f.removeItem(e);
		}, s.clear = function() {
			f.clear();
		}, s.getAll = function() {
			var e = {};
			for (var t = 0; t < f.length; ++t) {
				var n = f.key(t);
				e[n] = s.get(n);
			}
			return e;
		};
		else if (o.documentElement.addBehavior) {
			var c, h;
			try {
				h = new ActiveXObject("htmlfile"), h.open(), h.write('<script>document.w=window</script><iframe src="/favicon.ico"></iframe>'), h.close(), c = h.w.frames[0].document, f = c.createElement("div");
			} catch (p) {
				f = o.createElement("div"), c = o.body;
			}

			function d(e) {
				return function() {
					var t = Array.prototype.slice.call(arguments, 0);
					t.unshift(f), c.appendChild(f), f.addBehavior("#default#userData"), f.load(u);
					var n = e.apply(s, t);
					return c.removeChild(f), n;
				};
			}
			var v = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");

			function m(e) {
				return e.replace(v, "___");
			}
			s.set = d(function(e, t, n) {
				return t = m(t), n === undefined ? s.remove(t) : (e.setAttribute(t, s.serialize(n)), e.save(u), n);
			}), s.get = d(function(e, t) {
				return t = m(t), s.deserialize(e.getAttribute(t));
			}), s.remove = d(function(e, t) {
				t = m(t), e.removeAttribute(t), e.save(u);
			}), s.clear = d(function(e) {
				var t = e.XMLDocument.documentElement.attributes;
				e.load(u);
				for (var n = 0, r; r = t[n]; n++) e.removeAttribute(r.name);
				e.save(u);
			}), s.getAll = d(function(e) {
				var t = e.XMLDocument.documentElement.attributes,
					n = {};
				for (var r = 0, i; i = t[r]; ++r) {
					var o = m(i.name);
					n[i.name] = s.deserialize(e.getAttribute(o));
				}
				return n;
			});
		}
		try {
			s.set(a, a), s.get(a) != a && (s.disabled = !0), s.remove(a);
		} catch (p) {
			s.disabled = !0;
		}
		s.enabled = !s.disabled, n.exports = s;
	} catch (p) {
		wx.jslog({
			src: "biz_web/lib/store.js"
		}, p);
	}
});
define("media/media_cgi.js", ["common/wx/Tips.js", "common/wx/Cgi.js"], function(e) {
	"use strict";
	var r = e("common/wx/Tips.js"),
		s = e("common/wx/Cgi.js"),
		a = {
			del: function(e, a) {
				s.post({
					mask: !1,
					url: wx.url("/cgi-bin/operate_appmsg?sub=del&t=ajax-response"),
					data: {
						AppMsgId: e
					},
					error: function() {
						r.err("删除失败");
					}
				}, function(e) {
					"0" == e.ret ? (r.suc("删除成功"), a && a(e)) : r.err("删除失败");
				});
			},
			del_sv: function(e, a) {
				s.post({
					mask: !1,
					url: wx.url("/cgi-bin/modifyfile?oper=del&t=ajax-response"),
					data: {
						fileid: e
					},
					error: function() {
						r.err("删除失败");
					}
				}, function(e) {
					e.base_resp && 0 == +e.base_resp.ret ? (r.suc("删除成功"), a.suc && a.suc(e)) : (r.err("删除失败"),
						a.fail && a.fail(e));
				});
			},
			edit_sv: function(e, a) {
				s.post({
					mask: !1,
					url: wx.url("/cgi-bin/modifyfile?oper=rename&t=ajax-response"),
					data: {
						fileid: e.id,
						filename: e.name
					},
					error: function() {
						r.err("编辑失败");
					}
				}, function(e) {
					e.base_resp && 0 == +e.base_resp.ret ? (r.suc("编辑成功"), a.suc && a.suc(e)) : (r.err("编辑失败"),
						a.fail && a.fail(e));
				});
			},
			save: function(e, a, t, i, n, o) {
				var c = wx.url(t.AppMsgId ? "/cgi-bin/operate_appmsg?t=ajax-response&sub=update&type=%s".sprintf(a) : "/cgi-bin/operate_appmsg?t=ajax-response&sub=create&type=%s".sprintf(a));
				t.ajax = 1, s.post({
					url: c,
					data: t,
					dataType: "html",
					error: function(e, s) {
						"timeout" != s && r.err("保存失败"), n && n(!1, -1);
					},
					complete: o
				}, function(s) {
					if (s = $.parseJSON(s), "0" == s.ret) r.suc("保存成功"), i && i(s);
					else {
						var a = !1;
						switch (s.ret) {
							case "64506":
								r.err("保存失败,链接不合法");
								break;

							case "64507":
								r.err("内容不能包含链接，请调整");
								break;

							case "64508":
								r.err("查看原文链接可能具备安全风险，请检查");
								break;

							case "-99":
								r.err("内容超出字数，请调整");
								break;

							case "10801":
								r.err("标题不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。"), a = s.msg;
								break;

							case "10802":
								r.err("作者不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。"), a = s.msg;
								break;

							case "10803":
								r.err("敏感链接，请重新添加。"), a = s.msg;
								break;

							case "10804":
								r.err(e ? "正文不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。" : "摘要不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。"),
									a = s.msg;
								break;

							case "10806":
								r.err("正文不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。"), a = s.msg;
								break;

							case "-20000":
								r.err("登录态超时，请重新登录。");
								break;

							case "15801":
							case "15802":
							case "15803":
							case "15804":
							case "15805":
							case "15806":
								break;

							default:
								r.err("保存失败");
						}
						n && n(a, s.ret);
					}
				});
			},
			preview: function(e, a, t, i, n) {
				s.post({
					url: wx.url("/cgi-bin/operate_appmsg?sub=preview&t=ajax-appmsg-preview&type=%s".sprintf(a)),
					data: t,
					dataType: "html",
					error: function() {
						r.err("发送失败，请稍后重试"), n && n();
					}
				}, function(s) {
					if (s = $.parseJSON(s), "0" == s.ret) r.suc("发送预览成功，请留意你的手机微信"), i && i(s);
					else {
						switch (s.ret) {
							case "64501":
								s.word = "你输入的帐号不存在，请重新输入";
								break;

							case "64502":
								s.word = "你输入的微信号不存在，请重新输入";
								break;

							case "10700":
							case "64503":
								s.word = "你尚未关注公众号，请先关注";
								break;

							case "10703":
								s.word = "对方关闭了接收消息";
								break;

							case "10701":
								s.word = "用户已被加入黑名单，无法向其发送消息";
								break;

							case "10704":
							case "10705":
								s.word = "该素材已被删除";
								break;

							case "64504":
								s.word = "保存图文消息发送错误，请稍后再试";
								break;

							case "64505":
								s.word = "发送预览失败，请稍后再试";
								break;

							case "64507":
								s.word = "内容不能包含链接，请调整";
								break;

							case "-99":
								s.word = "内容超出字数，请调整";
								break;

							case "62752":
								s.word = "可能含有具备安全风险的链接，请检查";
								break;

							case "10801":
								s.word = "标题不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。", s.antispam = !0;
								break;

							case "10802":
								s.word = "作者不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。", s.antispam = !0;
								break;

							case "10803":
								s.word = "敏感链接，请重新添加。", s.antispam = !0;
								break;

							case "10804":
								s.word = e ? "正文不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。" : "摘要不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。",
									s.antispam = !0;
								break;

							case "10806":
								s.word = "正文不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。", s.antispam = !0;
								break;

							case "-8":
							case "-6":
								s.ret = "-6", s.word = "请输入验证码";
								break;

							case "15801":
							case "15802":
							case "15803":
							case "15804":
							case "15805":
							case "15806":
								break;

							default:
								s.word = "系统繁忙，请稍后重试";
						}
						15 == a && r.err(s.word), n && n(s);
					}
				});
			},
			getList: function(e, a, t, i, n) {
				var o = "";
				o = wx.url(n ? "/cgi-bin/appmsg?type=%s&action=list&begin=%s&count=%s&query=%s&f=json".sprintf(e, a, t, n) : "/cgi-bin/appmsg?type=%s&action=list&begin=%s&count=%s&f=json".sprintf(e, a, t)),
					s.get({
						mask: !1,
						url: o,
						error: function() {
							r.err("获取列表失败");
						}
					}, function(e) {
						e && e.base_resp && 0 == e.base_resp.ret ? i && i(e.app_msg_info) : r.err("获取列表失败");
					});
			},
			getSingleList: function(e, a, t, i) {
				s.get({
					mask: !1,
					url: wx.url("/cgi-bin/appmsg?type=%s&action=for_advert&begin=%s&count=%s&f=json".sprintf(e, a, t)),
					error: function() {
						r.err("获取列表失败");
					}
				}, function(e) {
					e && e.base_resp && 0 == e.base_resp.ret ? i && i(e.app_msg_info) : r.err("获取列表失败");
				});
			}
		},
		t = {
			save: function(e, a, t) {
				var i = wx.url("/cgi-bin/operate_vote");
				e.ajax = 1, s.post({
					url: i,
					data: e,
					error: function() {
						r.err("保存失败"), t && t();
					}
				}, function(e) {
					e && e.base_resp && 0 == e.base_resp.ret ? (r.suc("保存成功"), a && a(e)) : (r.err("保存失败"), t && t(e));
				});
			}
		};
	return {
		rename: function(e, a, t) {
			s.post({
				mask: !1,
				url: wx.url("/cgi-bin/modifyfile?oper=rename&t=ajax-response"),
				data: {
					fileid: e,
					fileName: a
				},
				error: function() {
					r.err("重命名失败");
				}
			}, function(e) {
				if (!e || !e.base_resp) return void r.err("重命名失败");
				var s = e.base_resp.ret;
				if ("0" == s) r.suc("重命名成功"), t && t(e);
				else switch (s) {
					case "-2":
						r.err("素材名不能包含空格");
						break;

					default:
						r.err("重命名失败");
				}
			});
		},
		del: function(e, a) {
			s.post({
				mask: !1,
				url: wx.url("/cgi-bin/modifyfile?oper=del&t=ajax-response"),
				data: {
					fileid: e
				},
				error: function() {
					r.err("删除失败");
				}
			}, function(e) {
				return e && e.base_resp ? void("0" == e.base_resp.ret ? (r.suc("删除成功"), a && a(e)) : r.err("删除失败")) : void r.err("删除失败");
			});
		},
		getList: function(e, a, t, i) {
			s.get({
				mask: !1,
				url: wx.url("/cgi-bin/filepage?type=%s&begin=%s&count=%s&f=json".sprintf(e, a, t)),
				error: function() {
					r.err("获取列表失败");
				}
			}, function(e) {
				e && e.base_resp && 0 == e.base_resp.ret ? i && i(e.page_info) : r.err("获取列表失败");
			});
		},
		appmsg: a,
		vote: t
	};
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
define("media/appmsg_edit.js", ["widget/media/appmsg_editor.css", "page/vote/dialog_vote_table.css", "widget/date_select.css", "common/wx/popup.js", "biz_web/lib/json.js", "common/wx/time.js", "common/qq/Class.js", "media/media_cgi.js", "biz_web/lib/store.js", "common/wx/Tips.js", "common/wx/tooltips.js", "biz_common/moment.js", "biz_web/utils/upload.js", "biz_common/jquery.validate.js", "common/wx/top.js", "biz_web/ui/checkbox.js", "common/lib/datepicker.js", "biz_web/ui/dropdown.js", "common/wx/media/imageDialog.js", "common/wx/media/videoDialog.js", "common/qq/mask.js", "common/wx/pagebar.js", "common/wx/tooltip.js", "common/wx/inputCounter.js", "common/wx/popover.js", "common/wx/media/audio.js", "tpl/vote/vote.html.js", "tpl/simplePopup.html.js", "tpl/media/appmsg_edit/first_appmsg.html.js", "tpl/media/appmsg_edit/small_appmsg.html.js", "tpl/media/dialog/audiomsg_layout.html.js", "tpl/media/appmsg_edit/editor.html.js", "common/wx/dialog.js", "common/wx/Step.js", "common/wx/verifycode.js", "vote/new.js", "common/wx/Cgi.js", "tpl/vote/vote_table.html.js", "cardticket/send_card.js", "cardticket/parse_data.js"], function(require, exports, module) {
	"use strict";

	function iframeUrlSwitcher(e) {
		for (var t = e.content, i = e.returnValue || "content", r = e.wrapper || "add", a = t.split(/<\/?iframe/), o = "", s = " TMP_NAME=", n = [], c = [], d = [], l = 0; l < a.length; l++) {
			if (-1 !== a[l].indexOf("js_editor_vote_card") || -1 !== a[l].indexOf("js_editor_card")) {
				a[l] = a[l].replace(" src=", s).replace(" data-display-src=", " src=").replace(s, " data-display-src="),
					a[l] = a[l].replace(" style=", s).replace(" data-display-style=", " style=").replace(s, " data-display-style=");
				var m = a[l].match(/data-voteid=\"([^\"]*)/);
				m && m[1] && n.push(m[1]);
				var p = a[l].match(/isMlt=(\d)/);
				p && p[1] && c.push(p[1]), a[l] = a[l].replace(/token=(\d+)&/gi, "token=" + wx.getUrl("token") + "&");
				var u = a[l].match(/data-supervoteid=\"([^\"]*)/);
				u && u[1] && d.push(u[1]);
			}
			o += a[l], l < a.length - 1 && (o += (l % 2 ? "</" : "<") + "iframe");
		}
		switch (o = "add" === r ? o.replace(/(<iframe[\s\S]*js_editor_vote_card[\s\S]*<\/iframe>)/gi, function(e) {
				return ['<span class="vote_area">', e, '<span class="vote_box skin_help po_left"></span>', '<span class="vote_box skin_help po_right"></span>', "</span>"].join("");
			}) : o.replace('<span class="vote_area">', "").replace('<span class="vote_box skin_help po_left"></span><span class="vote_box skin_help po_right"></span></span>', ""),
			i) {
			case "voteid":
				return n;

			case "isMlt":
				return c;

			case "supervoteid":
				return d;

			case "content":
			default:
				return o;
		}
	}

	function _formatData(e) {
		var t = e && e.multi_item;
		if (!t) return !1;
		t[0].create_time = Time.getFullTime(e.create_time) || moment().format("YYYY-MM-DD HH:mm:ss");
		for (var i = 0; i < t.length; ++i)
			for (var r in t[i]) t[i][r].html && (t[i][r] = t[i][r].html(!1));
		return t ? t : !1;
	}

	function setIframeHeight() {
		setTimeout(function() {
			var e = $("#ueditor_0").get(0).contentWindow.document.getElementsByTagName("iframe");
			if (e && e.length > 0)
				for (var t = 0; t < e.length; t++)
					if ($(e[t]).hasClass("js_editor_vote_card")) {
						var i = e[t],
							r = $(i).height();
						i.contentDocument && i.contentDocument.body.offsetHeight ? r = i.contentDocument.body.offsetHeight : i.Document && i.Document.body && i.Document.body.scrollHeight ? r = i.Document.body.scrollHeight : i.document && i.document.body && i.document.body.scrollHeight && (r = i.document.body.scrollHeight),
							i.style.height = r + "px";
					}
		}, 5e3);
	}
	require("widget/media/appmsg_editor.css"), require("page/vote/dialog_vote_table.css"),
		require("widget/date_select.css"), require("common/wx/popup.js"), require("biz_web/lib/json.js");
	var T = wx.T,
		cgiData = wx.cgiData,
		type = cgiData.type,
		app_id = cgiData.app_id,
		appmsg_data = cgiData.appmsg_data,
		can_use_vote = cgiData.can_use_vote,
		can_use_hyperlink = cgiData.can_use_hyperlink,
		render = template.render,
		Time = require("common/wx/time.js"),
		Clazz = require("common/qq/Class.js"),
		mediaCgi = require("media/media_cgi.js"),
		store = require("biz_web/lib/store.js"),
		Tips = require("common/wx/Tips.js"),
		Tooltips = require("common/wx/tooltips.js"),
		moment = require("biz_common/moment.js"),
		Upload = require("biz_web/utils/upload.js"),
		uploadBizFile = Upload.uploadImageLibFile,
		Validate = require("biz_common/jquery.validate.js"),
		validator = Validate.rules,
		Top = require("common/wx/top.js"),
		Checkbox = require("biz_web/ui/checkbox.js"),
		datepicker = require("common/lib/datepicker.js"),
		Dropdown = require("biz_web/ui/dropdown.js"),
		ImageDialog = require("common/wx/media/imageDialog.js"),
		VideoDialog = require("common/wx/media/videoDialog.js"),
		Mask = require("common/qq/mask.js"),
		PageBar = require("common/wx/pagebar.js"),
		Tooltip = require("common/wx/tooltip.js"),
		Pagebar = require("common/wx/pagebar.js"),
		InputCounter = require("common/wx/inputCounter.js"),
		Popover = require("common/wx/popover.js"),
		Audio = require("common/wx/media/audio.js"),
		_vote_pop_html = require("tpl/vote/vote.html.js"),
		_simple_popup_tpl = require("tpl/simplePopup.html.js"),
		_first_appmsg_html = require("tpl/media/appmsg_edit/first_appmsg.html.js"),
		_small_appmsg_html = require("tpl/media/appmsg_edit/small_appmsg.html.js"),
		_audio_appmsg_html = require("tpl/media/dialog/audiomsg_layout.html.js"),
		_editor_html = require("tpl/media/appmsg_edit/editor.html.js"),
		Dialog = require("common/wx/dialog.js"),
		Step = require("common/wx/Step.js");
	new Top("#topTab", Top.DATA.media).selected("media" + type);
	var itemID = "#appmsgItem",
		itemClassName = ".js_appmsg_item",
		dataID = "appmsg",
		_defaultOpt = {
			maxNum: 8
		},
		currentMsgId = 0;
	template.helper("datestring", function(e) {
		function t(e, t) {
			for (var i = 0, r = t - (e + "").length; r > i; i++) e = "0" + e;
			return e + "";
		}
		var i = new Date(e),
			r = ["日", "一", "二", "三", "四", "五", "六"],
			a = "yyyy年mm月dd日".replace(/yyyy|YYYY/, i.getFullYear()).replace(/yy|YY/, t(i.getFullYear() % 100, 2)).replace(/mm|MM/, t(i.getMonth() + 1, 2)).replace(/m|M/g, i.getMonth() + 1).replace(/dd|DD/, t(i.getDate(), 2)).replace(/d|D/g, i.getDate()).replace(/hh|HH/, t(i.getHours(), 2)).replace(/h|H/g, i.getHours()).replace(/ii|II/, t(i.getMinutes(), 2)).replace(/i|I/g, i.getMinutes()).replace(/ss|SS/, t(i.getSeconds(), 2)).replace(/s|S/g, i.getSeconds()).replace(/w/g, i.getDay()).replace(/W/g, r[i.getDay()]);
		return a;
	});
	var URL_PLATFORM_MAP = {
			"www.guokr.com": "果壳",
			"www.zhihu.com": "知乎",
			"blog.sina.com.cn": "新浪博客",
			"www.huxiu.com": "虎嗅网",
			"www.dreamore.com": "追梦网",
			"cn.engadget.com": "瘾科技",
			"www.cnbeta.com": "cnBeta",
			"www.199it.com": "199IT",
			"www.36kr.com": "36氪",
			"www.tmtpost.com": "钛媒体",
			"www.iheima.com": "i黑马",
			"www.cyzone.cn": "创业邦",
			"www.ikanchai.com": "砍柴网",
			"www.iresearch.cn": "艾瑞网",
			"xianguo.com": "鲜果网",
			"www.myzaker.com": "ZAKER",
			"jandan.net": "煎蛋网",
			"pianke.me": "片刻网",
			"www.techweb.com.cn": " TechWeb",
			"www.leiphone.com": "雷锋网",
			"www.douban.com": "豆瓣",
			"www.mop.com": "猫扑",
			"www.tianya.cn": "天涯",
			"jingyan.baidu.com": "百度经验",
			"baike.baidu.com": "百度百科",
			"wenku.baidu.com": "百度文库",
			"tieba.baidu.com": "百度贴吧",
			"zhidao.baidu.com": "百度知道",
			"news.sina.com.cn": " 新浪新闻",
			"news.qq.com": "腾讯新闻",
			"news.ifeng.com": "凤凰资讯",
			"news.163.com": "网易新闻",
			"www.xinhuanet.com": "新华社",
			"www.people.com.cn": "人民网",
			"www.huanqiu.com": "环球时报",
			"www.gov.cn": "中国政府网",
			"www.china.com": "中华网",
			"www.takungpao.com": "大公网",
			"www.81.cn": "中国军网",
			"www.zaobao.com": "联合早报",
			"d.weibo.com": "新浪微博",
			"weibo.com": "新浪微博",
			"www.baidu.com": "百度",
			"www.sina.com.cn": "新浪",
			"www.163.com": "网易",
			"news.sohu.com": "搜狐新闻",
			"www.sohu.com": "搜狐",
			"www.ifeng.com": "凤凰网",
			"qzone.qq.com": "QQ空间"
		},
		_Draft = Clazz.declare({
			init: function(e, t, i) {
				var r = this;
				if (!r._supportUserData() && "undefined" == typeof localStorage) return !1;
				r.isMul = e, r.app_id = t, r.draftId = wx.data.uin + (t ? t : "") + (e ? "m" : "") + i, r.timeKey = "Time" + r.draftId,
					r.appKey = "App" + r.draftId, r.isDropped = !1, store.get(r.timeKey) && (r._showTips("（已载入" + r._getSaveTime() + "的草稿）"),
						$("#js_cancle").show());
				var a = Math.floor(wx.cgiData.svr_time - new Date / 1e3);
				store.get(r.timeKey) && Number(wx.cgiData.updateTime) > moment(store.get(r.timeKey), "YYYY-MM-DD HH:mm:ss").unix() + a && confirm("当前图文消息本地草稿保存后，服务器图文消息有更新。请确认是否放弃保存本地草稿？") && (store.remove(r.timeKey),
					store.remove(r.appKey));
			},
			_supportUserData: function() {
				try {
					var e = document.createElement("input");
					e.addBehavior("#default#userData");
				} catch (t) {
					return !1;
				}
				return !0;
			},
			_getSaveTime: function() {
				return store.get(this.timeKey);
			},
			_showTips: function(e) {
				$("#js_auto_tips").html(e).show();
			},
			clear: function() {
				store.remove(this.timeKey), store.remove(this.appKey);
			},
			save: function(e) {
				var t = this;
				t.clear(), store.set(t.timeKey, moment().format("YYYY-MM-DD HH:mm:ss")), store.set(t.appKey, e),
					t._showTips("（自动保存：" + store.get(t.timeKey) + "）"), $("#js_cancle").hide();
			},
			get: function() {
				var e = store.get(this.appKey);
				return e ? e : !1;
			}
		}),
		_Appmsg = Clazz.declare({
			init: function(e) {
				var t = this;
				if (t.gid = 1, $.extend(!0, t, _defaultOpt, e), t.maxNum = t.isMul ? t.maxNum : 1, t.editor$ = $(t.editor_selector).html(T(_editor_html, {
						can_use_copyright: cgiData.can_use_copyright,
						can_use_reward: cgiData.can_use_reward,
						isMul: t.isMul,
						type: type
					})), t._initEditor(), t.appmsg$ = $(t.appmsg_selector), t.nowitem$ = null, t.uploadImgItem$ = null,
					t.isNew = !0, t.isFirst = !0, t.unHandleCatches = {}, t.list = _formatData(t.appmsg_data), window.Draft = t.draft = new _Draft(t.isMul, t.app_id, type),
					10 == type) {
					var i = t.get_draft();
					if (i) {
						for (var r, a = 0; r = i[a]; ++a) r.content = r.content.replace(/\\{64,}/g, "\\");
						t.list = i;
					}
				}
				if (t.list)
					for (var o = t.list, a = 0; a < o.length; ++a) t.add(o[a]);
				else t.add();
				t._refreshUI(0), t.appmsg$.on("click", ".js_edit", function() {
					var e = $(this),
						i = e.data("id");
					currentMsgId = i, t.nowitem$ && i != t.nowitem$.data("id") && (t._refreshUI($(itemID + i)),
						t._hideErrorTips());
				}), t.appmsg$.on("click", ".js_del", function() {
					var e = $(this),
						i = e.data("id");
					t.remove($(itemID + i));
				}), t.isMul ? $("#js_add_appmsg").click(function() {
					t.add();
				}) : $("#js_add_appmsg").addClass("dn"), 10 == type && (setInterval(function() {
					t.auto_save();
				}, 12e4), window.onbeforeunload = function() {
					var e = !0,
						i = t._getEditData();
					for (var r in i)
						if (i[r]) {
							e = !1;
							break;
						}
					if (!e && !t.draft.isDropped) {
						t.auto_save();
						var a = store.get(t.draft.timeKey);
						return "已自动保存" + a + "时的内容。";
					}
					t.draft.clear();
				});
			},
			_initEditor: function() {
				var e = this,
					t = e.editor$;
				if ($(".js_title", t).keyup(function() {
					var t = $(this).val().trim().html(!0);
					e.nowitem$ && e.nowitem$.find(".appmsg_title a").html(t || "标题"), $(".js_title_error", this.editor$).hide();
				}), $(".js_author", t).keyup(function() {
					$(".js_author_error", this.editor$).hide();
				}), $(".js_desc", t).keyup(function() {
					var i = $(this).val().trim().html(!0);
					e.nowitem$ && e.nowitem$.find(".appmsg_desc").html(i), $(".js_desc_error", t).hide();
				}), $(".js_addURL", t).click(function() {
					$(this).hide(), $(".js_url_area", t).show();
				}), $(".js_url", t).keyup(function() {
					$(".js_url_error", this.editor$).hide();
				}), $(".js_show_cover_pic", t).on("click", function() {
					var e = $(this).find("input");
					e.is(":checked") ? (e.prop("checked", !1), $(this).removeClass("selected")) : (e.prop("checked", !0),
						$(this).addClass("selected"));
				}), $(".js_reward", t).checkbox({
					multi: !0,
					onChanged: function(e) {
						e.checkbox("value") ? (e.checkbox("checked", !1), Dialog.show({
							type: "info",
							msg: "文章赞赏须知|赞赏是读者认可原创文章和原创作者而自愿赠予，用于鼓励作者的无偿行为。禁止用赞赏来进行募捐、赌博抽奖、售卖商品（任何实物或虚拟商品）等，包括但不限于在文章中说明会给赞赏金额最多的用户提供粉丝见面会的门票、进入某个粉丝群的权限等。",
							buttons: [{
								text: "确定",
								click: function() {
									$(".js_reward_div", t).show(), e.checkbox("checked", !0), this.remove();
								}
							}, {
								text: "取消",
								type: "normal",
								click: function() {
									this.remove();
								}
							}]
						})) : $(".js_reward_div", t).hide();
					}
				}), $(".js_addDesc", t).show().click(e.isMul ? function() {
					$(this).hide(), $(".js_desc_area", t).show(), $(".js_desc_error", t).hide();
				} : function() {
					$(this).hide(), $(".js_desc_area", t).show(), $(".js_desc_error", t).hide();
				}), $(".js_removeCover", t).click(function() {
					$(".js_cover", t).data("file_id", !1).hide().find("img").remove(), e.nowitem$ && e.nowitem$.removeClass("has_thumb");
				}), uploadBizFile({
					multi: !1,
					type: 2,
					doublewrite: !0,
					container: "#js_appmsg_upload_cover",
					onSelect: function() {
						e.uploadImgItem$ = e.nowitem$, $.post("/misc/jslog?1=1" + wx.data.param, {
							id: 37,
							val: 1,
							level: "trace",
							content: "[file=media/appmsg_edit]"
						});
					},
					onComplete: function(i, r, a, o) {
						if (0 == o.base_resp.ret) {
							var s = o.content,
								n = wx.url("/cgi-bin/getimgdata?mode=large&source=file&fileId=%s".sprintf(s));
							$(".js_cover", t).find("img").remove(), $(".js_cover", t).show().prepend('<img src="%s">'.sprintf(n)).data("file_id", s),
								e.nowitem$ && (e.nowitem$.find("img.js_appmsg_thumb").attr("src", n), e.nowitem$.addClass("has_thumb")),
								$(".js_cover_error", t).hide();
						}
					}
				}), $("#js_imagedialog").on("click", function() {
					document.body.style.overflow = document.documentElement.style.overflow = "hidden", ImageDialog({
						scene: "biz",
						maxSelect: 1,
						desc: "建议尺寸：900像素 * 500像素",
						onOK: function(i) {
							var r = i[0].file_id,
								a = wx.url("/cgi-bin/getimgdata?mode=large&source=file&fileId=%s".sprintf(r));
							$(".js_cover", t).find("img").remove(), $(".js_cover", t).show().prepend('<img src="%s">'.sprintf(a)).data("file_id", r),
								e.nowitem$ && (e.nowitem$.find("img.js_appmsg_thumb").attr("src", a), e.nowitem$.addClass("has_thumb")),
								$(".js_cover_error", t).hide(), $.post("/misc/jslog?1=1" + wx.data.param, {
									id: 38,
									val: 1,
									level: "trace",
									content: "[file=media/appmsg_edit]"
								}), this.destroy(), document.body.style.overflow = document.documentElement.style.overflow = "auto";
						},
						onCancel: function() {
							this.destroy(), document.body.style.overflow = document.documentElement.style.overflow = "auto";
						}
					});
				}), $(".js_counter", t).each(function() {
					new InputCounter(this, {
						maxLength: $(this).attr("max-length")
					});
				}), document.domain = "qq.com", 10 == type) {
					UEDITOR_CONFIG.toolbars[0].splice(8, 0, "|"), UEDITOR_CONFIG.toolbarsPermission.insertaudio = wx.cgiData.qqmusic_flag;
					var i = new baidu.editor.ui.Editor({
						wordCount: !1,
						elementPathEnabled: !1,
						customDomain: !0
					});
					i.render("js_editor"), e.ueditor = i, window._ueditor = i, i.addListener("begincatchimage", function() {
						Tips.suc("内容已上传完成");
					}), i.addListener("catchremotesuccess", function(t, r, a, o, s) {
						var n = i.window.document,
							c = n.getElementById(r);
						if (null == c) return void(e.unHandleCatches[r] = {
							ret: 0,
							src: a,
							url: o
						});
						var d = {
							src: o
						};
						s && (d["data-type"] = s), $(c).attr(d).removeAttr("_src").removeAttr("data-src").removeClass("js_catchingremoteimage").trigger("catchremotesuccess", a);
						var l = $(n).find(".js_catchremoteimageerror").length;
						0 == l ? $(".js_catch_tips", e.editor$).hide() : $(".js_catch_tips", e.editor$).text("有%s张图片粘贴失败".sprintf(l)).show();
					}), i.addListener("catchremoteerror", function(t, r) {
						var a = i.window.document,
							o = a.getElementById(r);
						if (null == o) return void(e.unHandleCatches[r] = {
							ret: -1
						});
						$(o).css({
							width: "497px",
							height: "auto"
						}).attr({
							src: "http://mmbiz.qpic.cn/mmbiz/G1lssUsxJOsVVJNUIuKfUP7bLm5EVWxXl5znicMum6Os0CMJHPdeHicicZ4W5MGOVa8ooSXYuE61Ek/0"
						}).removeAttr("_src").removeAttr("data-src").addClass("js_catchremoteimageerror").trigger("catchremoteerror", o);
						var s = $(a).find(".js_catchremoteimageerror").length;
						$(".js_catch_tips", e.editor$).text("有%s张图片粘贴失败".sprintf(s)).show(), $(".js_content_error", e.editor$).hide();
					}), i.addListener("keyup aftersetcontent", function() {
						var t = i.window.document;
						$.each(e.unHandleCatches, function(r, a) {
							var o = t.getElementById(r);
							null != o && (delete e.unHandleCatches[r], 0 == a.ret ? i.fireEvent("catchremotesuccess", r, a.src, a.url) : i.fireEvent("catchremoteerror", r));
						});
						var r = $(t).find(".js_catchremoteimageerror").length;
						r > 0 ? $(".js_catch_tips", e.editor$).text("有%s张图片粘贴失败".sprintf(r)).show() : $(".js_catch_tips", e.editor$).hide();
					}), i.addListener("keyup", function() {
						$(".js_content_error", e.editor$).hide();
					}), i.addListener("openimagedialog", function() {
						document.body.style.overflow = document.documentElement.style.overflow = "hidden", ImageDialog({
							maxSelect: 100,
							onOK: function(e) {
								i.execCommand("insertimage", e.map(function(e) {
									return e.src = e._src = e.url, e;
								}));
								var t = 0,
									r = 0;
								$.each(e, function(e, i) {
									"upload" == i.source ? t++ : r++;
								}), t > 0 && $.post("/misc/jslog?1=1" + wx.data.param, {
									id: 39,
									val: t,
									level: "trace",
									content: "[file=media/appmsg_edit]"
								}), r > 0 && $.post("/misc/jslog?1=1" + wx.data.param, {
									id: 40,
									val: r,
									level: "trace",
									content: "[file=media/appmsg_edit]"
								}), this.destroy(), document.body.style.overflow = document.documentElement.style.overflow = "auto";
							},
							onHide: function() {
								this.destroy(), document.body.style.overflow = document.documentElement.style.overflow = "auto";
							}
						});
					}), i.addListener("openvideodialog", function() {
						var e = i.window.document;
						$(e).find("iframe.video_iframe").length < 3 ? new VideoDialog({
							can_use_shortvideo: !!(wx && wx.acl && wx.acl.msg_acl && wx.acl.msg_acl.can_use_shortvideo),
							scene: "ueditor",
							onOK: function(e, t) {
								if (e) {
									var r = "//mp.weixin.qq.com/mp/getcdnvideourl?__biz=%s&cdn_videoid=%s&thumb=%s".sprintf(cgiData.biz_uin, encodeURIComponent(t.video_cdn_id), encodeURIComponent(t.video_thumb_cdn_url)),
										a = r + "&shortvideo_sn=" + cgiData.shortvideo_sn,
										o = '<iframe data-shortvideofileid="%s" class="video_iframe" style="height:240px;width:320px !important;" frameborder=0 scrolling="no" src="%s" data-src="%s" allowfullscreen></iframe><br/>'.sprintf(t.file_id, a, r);
									i.execCommand("inserthtml", o, !0);
								} else i.execCommand("insertvideo", t);
								return !0;
							}
						}) : Tips.err("最多添加3个小视频、腾讯视频或微视频");
					});
					var r = function() {
						var e = $(".edui-for-insertvote");
						e.length ? e.remove() : setTimeout(r, 100);
					};
					if (!can_use_vote && r(), !wx.cgiData.can_use_card) {
						var a = function() {
							var e = $(".edui-for-insertcard");
							e.length ? e.remove() : setTimeout(a, 100);
						};
						a();
					}
					UEDITOR_CONFIG.toolbarsPermission && (UEDITOR_CONFIG.toolbarsPermission.link = UEDITOR_CONFIG.toolbarsPermission.unlink = wx.cgiData.can_use_copyright || can_use_hyperlink,
							"1" == wx.cgiData.is_link_white && (UEDITOR_CONFIG.toolbarsPermission.link = UEDITOR_CONFIG.toolbarsPermission.unlink = 1)),
						e._initOriginal();
				}
			},
			_initOriginal: function() {
				var e = this,
					t = e.editor$;
				$(".js_original_apply").on("click", function() {
					var i = $("#tpl_original").popup({
							title: "声明原创",
							width: 960,
							className: "simple align_edge original_dialog",
							data: {
								url: $(".js_url", e.editor$).val(),
								author: $(".js_author", e.editor$).val()
							},
							buttons: [{
								text: "下一步",
								type: "primary",
								click: function() {
									r.find(".js_step_panel").hide().eq(1).show(), r.find(".js_btn_p").eq(0).hide(), r.find(".js_btn_p").eq(1).show(),
										r.find(".js_btn_p").eq(2).show(), a.setStep(2);
								}
							}, {
								text: "上一步",
								click: function() {
									r.find(".js_step_panel").hide().eq(0).show(), r.find(".js_btn_p").eq(0).show(), r.find(".js_btn_p").eq(1).hide(),
										r.find(".js_btn_p").eq(2).hide(), a.setStep(1);
								}
							}, {
								text: "确定",
								type: "primary",
								click: function() {
									e._checkOriginal(r) && ($(".js_original_type").hide().eq(1).show(), $(".js_original_content").show(),
										$(".js_author", t).closest(".appmsg_edit_item").eq(0).hide(), $(".js_url_area", t).hide(),
										$(".js_reward", t).checkbox("disabled", !1), this.remove());
								}
							}],
							onHide: function() {
								this.remove();
							}
						}),
						r = i.popup("get");
					r.find(".js_btn_p").eq(1).hide(), r.find(".js_btn_p").eq(2).hide();
					var a = new Step({
						container: r.find(".js_step"),
						selected: 1,
						names: ["1 须知", "2 原创声明信息"]
					});
					r.find(".js_original_publish").checkbox({
						multi: !1,
						onChanged: function(e) {
							r.find(".js_platform").parent().hide().eq(e.val()).show(), r.find(".js_url").attr("placeholder", +e.val() ? "选填" : "该原创文章在其他网站的地址").trigger("blur");
						}
					}), r.find(".js_counter").each(function() {
						$(this).hasClass("js_author") ? new InputCounter($(this), {
							maxLength: 8
						}) : new InputCounter($(this), {
							maxLength: 10
						});
					}), r.on("input propertychange blur", ".js_url", function() {
						if (1 != r.find(".js_original_publish:checked").val()) {
							var e = $.trim($(this).val()),
								t = e.match(/^(https?:\/\/)?((([\da-z]+\.)+)?(([\da-z]+)\.[\da-z]+))/),
								i = "";
							t && (i = i || URL_PLATFORM_MAP[t[5]], i = i || URL_PLATFORM_MAP[t[2]], i = i || t[6]), i && $(this).closest(".js_step_panel").find(".js_platform").eq(0).val(i).trigger("keyup");
						}
					}), r.on("keyup", ".js_platform,.js_url,.js_author", function() {
						$(this).closest(".frm_controls").find(".fail").hide();
					});
				}), $(".js_original_cancel").on("click", function() {
					$(".js_original_type").hide().eq(0).show(), $(".js_original_content").hide(), $(".js_author", t).closest(".appmsg_edit_item").eq(0).show(),
						$(".js_url_area", t).show(), $(".js_reward", t).checkbox("disabled", !0), $(".js_reward", t).checkbox("checked", !1),
						$(".js_reward_div", this.editor$).hide(), $(".js_reward_wording", t).val();
				}), 1 != cgiData.can_use_copyright && $("#js_original").hide();
			},
			_checkOriginal: function(e) {
				var t = !0,
					i = e.find(".js_original_publish:checked").val(),
					r = e.find(".js_url").val(),
					a = e.find(".js_platform").eq(i).val(),
					o = e.find(".js_author").val();
				if (r && !/https?\:\/\//.test(r) && (r = "http://" + r), validator.rangelength(o, [1, 8]) ? e.find(".js_author_error").hide() : (e.find(".js_author_error").show(),
					t = !1), 0 != i && !r || validator.url(r) ? e.find(".js_url_error").hide() : (e.find(".js_url_error").show(),
					t = !1), validator.rangelength(a, [1, 10]) ? e.find(".js_platform_error").hide() : (e.find(".js_platform_error").show(),
					t = !1), t) {
					var s = $("#js_original");
					s.find(".js_original_publish").val(i), s.find(".js_url").text(r).closest("li")[r ? "show" : "hide"](),
						s.find(".js_platform").text(a), s.find(".js_author").text(o);
				}
				return t;
			},
			_getItem$: function(e) {
				var t = this,
					i = null;
				return i = $.isNumeric(e) ? t.appmsg$.find(itemClassName).eq(e) : $(e);
			},
			_getNextItem$: function(e) {
				for (var t = this, i = t.appmsg$.find(itemClassName), r = i.length, a = 0; r > a && i.eq(a).data("id") != e.data("id"); ++a);
				return r > a ? (a = (a + 1) % r, i.eq(a)) : null;
			},
			_getItemIdx: function(e) {
				for (var t = this, i = t.appmsg$.find(itemClassName), r = i.length, a = 0; r > a; ++a)
					if (i.eq(a).data("id") == e.data("id")) return a;
				return -1;
			},
			_getEditData: function() {
				var e = this.editor$,
					t = {};
				if (t.title = $(".js_title", e).val().trim(), t.author = $(".js_author", e).val().trim(),
					t.file_id = $(".js_cover", e).data("file_id"), t.show_cover_pic = $(".js_show_cover_pic", e).hasClass("selected") ? 1 : 0,
					10 == type ? t.source_url = $(".js_url", e).val().trim() : t.content_url = $(".js_url", e).val().trim(),
					t.digest = $(".js_desc", e).val().trim(), 10 == type) {
					! function() {
						var e = $("#js_editor").find("iframe")[0];
						if (e) {
							var t = $(e.contentDocument || e.document),
								i = t.find("body").width(),
								r = t.find("img");
							r.each(function() {
								var e = $(this),
									t = e.width(),
									r = e.height();
								e.attr("data-ratio", r / t), e.attr("data-w", i == t ? "" : t);
							});
						}
					}();
					for (var i = t.content = this.ueditor.getContent().replace(/<img(.*?)\s+src="/g, '<img$1 data-src="').replace(/&nbsp;/g, " ").replace(/https:\/\/mmbiz\.qlogo\.cn\//g, "http://mmbiz.qpic.cn/"), r = /<iframe\s(?:[\s\S]*?)musicid\=[\'\"]([\d]*?)[\'\"](?:[\s\S]*?)>/g, a = [], o = "", s = null; null != (s = r.exec(i));) s[1] && -1 == o.indexOf(s[1] + ",") && (a.push(s[1]),
						o += s[1] + ",");
					t.music_id = a.join(",");
					for (var n = /src\=(\'|\")http\:\/\/v\.qq\.com\/iframe\/player\.html\?(.*?)vid\=([^&]+)/g, c = [], d = "", l = null; null != (l = n.exec(i));) l[3] && -1 == d.indexOf(l[3] + ",") && (c.push(l[3]),
						d += l[3] + ",");
					if (t.video_id = c.join(","), t.content = t.content.replace(/<iframe([^>]*?)(\s)+src=\"http:\/\/v\.qq\.com\/iframe/g, '<iframe$1data-src="http://v.qq.com/iframe'),
						t.content = t.content.replace(/<iframe([^>]*?)(\s)+src=\"http:\/\/z\.weishi\.com\/weixin\/player\.html/g, '<iframe$1data-src="http://z.weishi.com/weixin/player.html'),
						t.content = t.content.replace(/(<\w+[^>]*)\sid=\"([^\">]*)\"([^>]*>)/g, "$1$3"), t.content = t.content.replace(/<iframe([^>]*?)js_editor_qqmusic([^>]*?)><\/iframe>/g, "<qqmusic $1js_editor_qqmusic$2></qqmusic>"),
						t.content = t.content.replace(/<iframe (data-shortvideofileid[^>]*?)\ssrc=\"([^\"]+)\"([^>]*)>/g, "<iframe $1$3>"),
						t.content = t.content.replace(/<iframe ([^>]*)\ssrc=\"([^\"]+)\"([^>]*data-shortvideofileid[^>]*)>/g, "<iframe $1$3>"),
						t.content = iframeUrlSwitcher({
							content: t.content,
							wrapper: "add"
						}), 1 == can_use_hyperlink) {
						var m = t.content.match(/<a([^>]*)>(.*?)<\/a>/g);
						m && (t.link_count = m.length);
					}
					t.can_reward = $(".js_reward", e).checkbox("value") ? 1 : 0, t.reward_wording = $.trim($(".js_reward_wording", e).val());
				}
				return this.nowitem$.is("#appmsgItem1") && (t.isFirst = !0), 10 == type && (t.digest = t.isFirst ? t.digest || t.content.text().html(!1).substr(0, 54) : t.content.text().html(!1).substr(0, 54)),
					t.copyright_type = $(".js_original_type:visible").index(), t.copyright_type = t.copyright_type < 0 ? 0 : t.copyright_type,
					t.copyright_type && (t.releasefirst = $("#js_original").find(".js_original_publish").val(),
						t.author = $("#js_original").find(".js_author").text(), t.source_url = $("#js_original").find(".js_url").text(),
						t.platform = +t.releasefirst ? "" : $("#js_original").find(".js_platform").text()), t;
			},
			_fillEditArea: function(e) {
				var t = this,
					i = t.editor$;
				if (e) {
					if (i.find(".js_cover_tip").html(e.isFirst ? "（大图片建议尺寸：900像素 * 500像素）" : "（小图片建议尺寸：200像素 * 200像素）"),
						$(".js_title", i).val(e.title).trigger("keydown"), $(".js_author", i).val(e.author).trigger("keydown"),
						0 == e.show_cover_pic ? $(".js_show_cover_pic", i).removeClass("selected").find("input").prop("checked", !1) : $(".js_show_cover_pic", i).addClass("selected").find("input").prop("checked", !0),
						1 == e.can_reward ? ($(".js_reward", i).checkbox("checked", !0), $(".js_reward_div", i).show()) : ($(".js_reward", i).checkbox("checked", !1),
							$(".js_reward_div", i).hide()), $(".js_reward_wording", i).val(e.reward_wording).trigger("keydown"),
						$(".js_cover", i).find("img").remove(), e.file_id) {
						var r = wx.url("/cgi-bin/getimgdata?mode=large&source=file&fileId=%s>".sprintf(e.file_id));
						$(".js_cover", i).show().prepend('<img src="%s">'.sprintf(r)).data("file_id", e.file_id);
					} else $(".js_cover", i).data("file_id", !1).hide();
					$(".js_desc", i).val(e.digest).trigger("keydown"), !t.isMul && 10 == type, $(".js_url", i).val(10 == type ? e.source_url || "" : e.content_url || ""),
						10 == type && (t._setEditorContent(e.content), t._setOriginal(e));
				}
			},
			_setEditorContent: function(e) {
				var t = this;
				t.ueditor.ready(function() {
					var i = iframeUrlSwitcher({
						content: e,
						wrapper: "remove"
					});
					if (i = i.replace(/<img(.*?)\s+data\-src="/g, '<img$1 src="').replace(/http:\/\/mmbiz\.qpic\.cn\//g, "https://mmbiz.qlogo.cn/") || "",
						i = i.replace(/background\-image:\s*url\(https\:\/\/mp\.weixin\.qq\.com\/cgi\-bin\/appmsg(.*?)\)/g, ""),
						i = i.replace(/<iframe (data-shortvideofileid[^>]*?data\-src=\")([^\"]+)(\")([^>]*)>/g, '<iframe $1$2$3 src="%s" $4>'.sprintf("%s&shortvideo_sn=%s".sprintf("$2", wx.cgiData.shortvideo_sn))),
						i = i.replace(/<iframe ([^>]*data\-src=\")([^\"]+)(\")([^>]*data-shortvideofileid[^>]*)>/g, '<iframe $1$2$3 src="%s" $4>'.sprintf("%s&shortvideo_sn=%s".sprintf("$2", wx.cgiData.shortvideo_sn))),
						i = i.replace(/<iframe([^>]*?)data\-src=\"http:\/\/v\.qq\.com\/iframe/g, '<iframe$1src="http://v.qq.com/iframe'),
						i = i.replace(/<iframe([^>]*?)data\-src=\"http:\/\/z\.weishi\.com\/weixin\/player\.html/g, '<iframe$1src="http://z.weishi.com/weixin/player.html'),
						i = i.replace(/<qqmusic([^>]*?)js_editor_qqmusic([^>]*?)><\/qqmusic>/g, "<iframe $1js_editor_qqmusic$2></iframe>"),
						t.ueditor.setContent(i), cgiData.ueditorReady = !0, window.initCard(), setIframeHeight(), !t.initZoomArea) {
						var r = '<a id="js_zoomout" href="javascript:;" onclick="return false;" class="icon_edui_zoom zoom_out_switch js_tooltip" data-tooltip="全屏模式">全屏</a>';
						r += '<a id="js_zoomin"  href="javascript:;" onclick="return false;" class="icon_edui_zoom zoom_in_switch  js_tooltip" data-tooltip="缩小">还原</a>',
							$("#js_toolbar_0").append(r);
						var a = $("#js_ueditor"),
							o = Mask.show({
								parent: $("#js_appmsg_editor .appmsg_editor"),
								spin: !1
							});
						o.hide(), $("#js_zoomout").click(function() {
							a.addClass("zoom_edit").css({
								marginTop: -(a.outerHeight() / 2),
								marginLeft: -(a.outerWidth() / 2)
							}), o.show(), document.body.style.overflow = document.documentElement.style.overflow = "hidden";
						}), $("#js_zoomin,#js_finish_zoom,.jsClose").click(function() {
							a.removeClass("zoom_edit").css({
								marginTop: 0,
								marginLeft: 0
							}), o.hide(), document.body.style.overflow = document.documentElement.style.overflow = "auto";
						}), t.initZoomArea = !0;
					}
					new Tooltip({
						dom: $(this.container).find(".js_tooltip"),
						position: {
							x: 0,
							y: 5
						}
					});
				});
			},
			_setOriginal: function(e) {
				var t = $("#js_original");
				$(".js_original_type").hide().eq(e.copyright_type || 0).show(), e.copyright_type ? (t.find(".js_original_content").show(),
					t.find(".js_original_publish").val(e.releasefirst), t.find(".js_url").text(e.source_url).closest("li")[e.source_url ? "show" : "hide"](),
					t.find(".js_author").text(e.author), t.find(".js_platform").text(+e.releasefirst ? "微信公众平台" : e.platform),
					$(".js_author", this.editor$).closest(".appmsg_edit_item").eq(0).hide(), $(".js_url_area", this.editor$).hide(),
					$(".js_reward", this.editor$).checkbox("disabled", !1)) : (t.find(".js_original_content").hide(),
					$(".js_author", this.editor$).closest(".appmsg_edit_item").eq(0).show(), $(".js_url_area", this.editor$).show(),
					$(".js_reward", this.editor$).checkbox("disabled", !0), $(".js_reward_div", this.editor$).hide());
			},
			_flush: function() {
				var e = this;
				e.nowitem$ && e._setData(e.nowitem$, e._getEditData());
			},
			_refreshUI: function(e) {
				var t = this,
					i = t._getItem$(e),
					r = t._getData(i);
				t._flush(), t.nowitem$ = i,
					function() {
						e = t._getItemIdx(i);
						var r, a = i.offset(),
							o = (t.editor$.offset(), 10 == type ? 580 : 390),
							s = i.outerHeight(),
							n = t.appmsg$.offset();
						a && (r = a.top - n.top), e >= t.maxNum / 2 ? (t.editor$.find(".arrow").css({
							marginTop: o - s
						}), t.editor$.find(".appmsg_editor").css({
							marginTop: r + s - o
						})) : (t.editor$.find(".arrow").css({
							marginTop: 0
						}), t.editor$.find(".appmsg_editor").css({
							marginTop: 0 == e ? 0 : r
						})), t.editor$.find(".appmsg_editor").append($("#js_editor_extra_info"));
					}(), 0 == t.nowitem$.index() ? ($(".js_desc_area", t.editor$).show(), t.isFirst = !0) : (10 == type ? $(".js_desc_area", t.editor$).hide() : $(".js_desc_area", t.editor$).show(),
						t.isFirst = !1), t._fillEditArea(r);
			},
			_setData: function(e, t) {
				var i = this,
					r = i._getItem$(e);
				return r.data(dataID, t);
			},
			_getData: function(e) {
				var t = this,
					i = t._getItem$(e);
				return i.data(dataID);
			},
			_getDatalist: function() {
				this._flush();
				for (var e = this, t = [], i = e.appmsg$.find(itemClassName), r = 0; r < i.length; ++r) t.push(e._getData(i[r]));
				return t;
			},
			_validate: function(e) {
				return "" == e.title ? !1 : "" == e.content ? !1 : "" == e.app_id ? !1 : !0;
			},
			_validateList: function(e) {
				for (var t = this, i = 0; i < e.length; ++i)
					if (!t._validate(e[i])) return _refreshUI(i), !1;
				return !0;
			},
			_initData: function(e) {
				return e.file_id && (e.cover = wx.url("/cgi-bin/getimgdata?mode=large&source=file&fileId=%s".sprintf(e.file_id))),
					$.extend({
						author: "",
						file_id: "",
						content: "",
						content_url: "",
						source_url: "",
						digest: "",
						title: ""
					}, e);
			},
			_hideErrorTips: function() {
				$(".js_title_error", this.editor$).hide(), $(".js_author_error", this.editor$).hide(),
					$(".js_desc_error", this.editor$).hide(), $(".js_cover_error", this.editor$).hide(),
					$(".js_url_error", this.editor$).hide(), $(".js_content_error", this.editor$).hide(),
					$(".js_platform_error", this.editor$).hide();
			},
			add: function(e) {
				var t = this,
					i = (t._getDatalist().length, t.maxNum);
				if (t._getDatalist().length >= i) return void Tips.err("你最多只可以加入%s条图文消息".sprintf(i));
				var e = t._initData(e || {});
				e.id = t.gid++, e.isMul = t.isMul, e.isFirst = t.isFirst, $(".js_appmsg_item").length > 0 && (t.isFirst = !1);
				var r = t.isFirst ? _first_appmsg_html : _small_appmsg_html,
					a = $(T(r, e).trim()).appendTo(t.appmsg$);
				t._setData(a, e), a.find(".js_edit").length > 0 && a.find(".js_edit").trigger("click"),
					1 == t.isFirst && (t.isFirst = !1);
			},
			remove: function(e) {
				var t = this,
					i = (t._getDatalist().length, t._getItem$(e)),
					r = t._getNextItem$(i);
				i.remove(), r && (t._refreshUI(r), t._hideErrorTips());
			},
			preview: function() {
				var e = this,
					t = e._getDatalist();
				return e._validateList(t) ? void appmsgCgi.preview(t, fakeID, function() {}) : !1;
			},
			auto_save: function() {
				var e = this._getDatalist();
				return this.draft.save(e);
			},
			get_draft: function() {
				return this.draft.get();
			},
			_getItemDataAndValid: function(e, t) {
				var i = this,
					r = {};
				r["title" + t] = e.title, r["content" + t] = e.content, r["digest" + t] = e.digest, r["author" + t] = e.author,
					r["fileid" + t] = e.file_id, r["music_id" + t] = e.music_id, r["video_id" + t] = e.video_id, r["show_cover_pic" + t] = e.show_cover_pic;
				for (var a = /<iframe data-shortvideofileid="(\d+)"[^>]+><\/iframe>/g, o = [], s = null; s = a.exec(e.content);) o.push(s[1]);
				r["shortvideofileid" + t] = o.join("|"), r["copyright_type" + t] = e.copyright_type, r["releasefirst" + t] = e.releasefirst,
					r["platform" + t] = e.platform, r["can_reward" + t] = e.can_reward, r["reward_wording" + t] = e.reward_wording;
				var n = /:\/\//,
					c = 10 == type ? e.source_url : e.content_url;
				if (c && !n.test(c) && (c = "http://" + c), 11 == type) r["contenturl" + t] = c;
				else {
					r["sourceurl" + t] = c;
					var d = iframeUrlSwitcher({
							content: e.content,
							returnValue: "voteid"
						})[0],
						l = iframeUrlSwitcher({
							content: e.content,
							returnValue: "isMlt"
						})[0],
						m = iframeUrlSwitcher({
							content: e.content,
							returnValue: "supervoteid"
						});
					d && "undefined" != typeof l && (r["voteid" + t] = d, r["voteismlt" + t] = l || store.get("appmsg_vote_" + d)),
						m && (r["supervoteid" + t] = m[0]);
					var p = this.getIframeData({
						content: e.content,
						key: "cardid",
						ifrmName: "js_editor_card"
					});
					if (p) {
						var u = this.getIframeData({
							content: e.content,
							key: "num",
							ifrmName: "js_editor_card"
						});
						r["cardid" + t] = p, r["cardquantity" + t] = u, r["cardlimit" + t] = 0 == u ? 0 : 1;
					}
				}
				var _ = !0,
					h = null,
					f = "";
				if (10 == type && $(i.ueditor.window.document).find(".js_catchremoteimageerror").length) {
					var g = $(i.ueditor.window.document).find(".js_catchremoteimageerror").length;
					return Tips.err("保存失败，%s".sprintf("正文有%s张图片粘贴失败".sprintf(g))), setTimeout(function() {
						$("html, body").animate({
							scrollTop: $("#js_ueditor").offset().top - 50
						});
					}), null;
				}
				if (validator.rangelength(e.title, [1, 64]) || ($(".js_title_error", this.editor$).show(),
					h = h || $(".js_title", this.editor$), f = f || "标题不能为空且长度不能超过64字", _ = null), 0 != e.copyright_type || validator.maxlength(e.author, 8) || ($(".js_author_error", this.editor$).show(),
					h = h || $(".js_author", this.editor$), f = f || "作者不能超过8个字", _ = null), e.file_id || (11 == type || "1675779340" != wx.data.uin && "3080043700" != wx.data.uin) && ($(".js_cover_error", this.editor$).show(),
					h = h || $(".js_cover_error", this.editor$), f = f || "必须插入一张图片", _ = null), 10 != type || validator.rangelength(e.content, [1, 1e7]) || ($(".js_content_error", this.editor$).html("正文总大小不得超过10M字节").show(),
					h = h || $(".js_content_error", this.editor$), f = f || "正文总大小不得超过10M字节", _ = null), 10 != type || validator.rangelength(e.content.text(), [1, 2e4]) || ($(".js_content_error", this.editor$).html("正文不能为空且长度不能超过20000字").show(),
					h = h || $(".js_content_error", this.editor$), f = "正文总大小不得超过10M字节" == f ? "正文不能为空且长度不能超过20000字" : f || "正文不能为空且长度不能超过20000字",
					_ = null), i.isMul || validator.rangelength(e.digest, [1, 120]) || ($(".js_desc_error", this.editor$).text("%s长度不能超过%s字".sprintf(10 == type ? "摘要" : "描述不能为空且", 120)).show(),
					h = h || $(".js_desc", this.editor$), f = f || "%s长度不能超过%s字".sprintf(10 == type ? "摘要" : "描述不能为空且", 120),
					_ = null), (11 == type || 0 == e.copyright_type && c) && !validator.url(c) && ($(".js_url_error", this.editor$).text("链接不合法").show(),
					h = h || $(".js_url", this.editor$), f = f || "链接不合法", _ = null), 1 != e.can_reward || validator.maxlength(e.reward_wording, 15) || (f = f || "赞赏引导语不能超过15个字",
					_ = null), !_) return Tips.err("保存失败" + (f ? "，" + f : "")), setTimeout(function() {
					$("html, body").animate({
						scrollTop: h.offset().top - 100
					});
				}), null;
				if (1 == e.copyright_type && e.content.text().length < 300) return Dialog.show({
					type: "warn",
					msg: "很抱歉，原创声明不成功|你的文章内容少于300字，未达到申请原创内容声明的字数要求。",
					buttons: [{
						text: "确定",
						click: function() {
							this.remove();
						}
					}]
				}), null;
				if (10 == type) {
					var v = i.checkIframe(e);
					if (!v) return null;
				}
				return i.checkCard(e) ? r : null;
			},
			checkIframe: function(e, t) {
				var i = $($.parseHTML(e.content)).find("iframe"),
					r = 0,
					a = 0;
				return $.each(i, function(e, t) {
					$(t).hasClass("video_iframe") && r++, $(t).hasClass("js_editor_vote_card") && a++;
				}), r > 3 ? (Tips.err("最多添加3个小视频、腾讯视频或微视频"), !1) : a > 1 || t && a >= 1 ? (Tips.err("正文只能包含%s个投票".sprintf(1)), !1) : !0;
			},
			checkCard: function(e, t) {
				var i = $($.parseHTML(e.content)).find("iframe"),
					r = 0;
				return $.each(i, function(e, t) {
					$(t).hasClass("js_editor_card") && r++;
				}), r > 1 || t && r >= 1 ? (Tips.err("正文只能包含%s个卡券".sprintf(1)), !1) : !0;
			},
			checkRemoteImage: function(e, t, i) {
				if (10 != type) return void i();
				var r = this,
					a = r.ueditor.window.document,
					o = $(a).find(".js_catchingremoteimage"),
					s = o.length;
				return 0 == s ? void i() : void o.on("catchremotesuccess", function(e, a) {
					$(this).off("catchremotesuccess").off("catchremoteerror");
					var o = r._getItemIdx(r.nowitem$),
						n = $(this).attr("src").replace(/https:\/\/mmbiz\.qlogo\.cn\//g, "http://mmbiz.qpic.cn/"),
						c = new RegExp('<img[^>]*?\\s+data-src="%s"[^>]*\\/?>'.sprintf(a)),
						d = t["content" + o].match(c);
					d = d && d[0] || "", d = d.replace(a, n).replace("js_catchingremoteimage", ""), t["content" + o] = t["content" + o].replace(c, d),
						0 == --s && i();
				}).on("catchremoteerror", function() {
					o.off("catchremotesuccess").off("catchremoteerror"), e.btn(!0);
				});
			},
			getIframeData: function(e) {
				var t = e.key,
					i = e.content,
					r = (e.ifrmName, new RegExp("<iframe[^>]*?" + e.ifrmName + "[^>]*?data-" + t + "=('|\")(.*?)('|\").*?>", "g"));
				return r.test(i) ? RegExp.$2 : null;
			},
			getData: function() {
				var e = this,
					t = {},
					i = [],
					r = e._getDatalist();
				t.AppMsgId = e.app_id, t.count = r.length;
				for (var a = 0; a < r.length; ++a) {
					var o = r[a];
					if (o = e._getItemDataAndValid(o, a), !o) return e._refreshUI(a), null;
					$.extend(t, o);
				}
				return $(".js_vid").each(function() {
					var e = $(this).attr("name");
					e && i.indexOf(e) < 0 && i.push(e);
				}), t.vid = i.length > 0 ? i.join(",") : "", t;
			}
		});
	_Appmsg.formatData = _formatData,
		function() {
			function appmsgSubmit(e, t, i) {
				t.btn(!1);
				var r = Math.random();
				.1 > r && $.post("/misc/jslog?1=1" + wx.data.param, {
					id: 30,
					level: "error",
					content: "[file=media/appmsg_edit]"
				}), appmsg.checkRemoteImage(t, e, function() {
					.1 > r && $.post("/misc/jslog?1=1" + wx.data.param, {
						id: 31,
						level: "error",
						content: "[file=media/appmsg_edit]"
					}), mediaCgi.appmsg.save(!!cgiData.isMul, type, e, function(t) {
						Draft.clear(), Draft.isDropped = !0, i(type, t, e);
					}, function(e, i) {
						if (t.btn(!0), 0 != e) {
							var r = 1 * e;
							appmsg._refreshUI(r);
						}
						return "412" == i ? void Tips.err("图文中含非法外链") : void(("15801" == i || "15802" == i || "15803" == i || "15804" == i || "15805" == i || "15806" == i) && Dialog.show({
							type: "warn",
							msg: "图文消息中含有诱导分享内容|为保证用户体验，微信公众平台禁止发布各种诱导分享行为。你所编辑的图文消息可能涉及诱导分享内容。<br/>                            你可以继续保存和发布该图文消息，若发布后被举报并核实确有诱导分享行为，公众平台将根据规定进行处理。<br/>                            <a href='https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot3_3' target='_blank'>诱导分享违规行为说明</a>",
							buttons: [{
								text: "继续保存",
								click: function() {
									this.remove(), confirm = !0, t.trigger("click");
								}
							}, {
								text: "取消",
								type: "normal",
								click: function() {
									this.remove();
								}
							}]
						}));
					});
				});
			}

			function _send(e, t) {
				var i = appmsg.getData();
				i && (confirm && (i.confirm = 1, confirm = !1), e.btn(!1), !appmsg.isNew && appmsg.isOriginal ? Dialog.show({
					title: "文章内容已变更",
					msg: "该文章内容已变更是否继续申请原创?",
					buttons: [{
						text: "确定",
						click: function() {
							this.remove(), appmsgSubmit(i, e, t);
						}
					}, {
						text: "取消",
						type: "normal",
						click: function() {
							this.remove();
						}
					}]
				}) : appmsgSubmit(i, e, t));
			}

			function insertQQMusic(e) {
				console.log("insertQQMusic"), console.log(getMusicIframe(e)), window.insertAudio(getMusicIframe(e));
			}

			function _makeMusicTmpl(e) {
				var t = "";
				return e && e.music_name && e.singer && (t += "<html>", t += "    <head>", t += "    <meta charset=UTF-8>",
					t += "    <link rel=stylesheet href=/htmledition/style/widgets/pages/qqmusic.css?" + Math.random() + ">",
					t += "    <title></title>", t += "    </head>", t += "    <body>", t += "    <div class=qqmusic_wrp>",
					t += "    <i class=icon_qqmusic_switch></i>", t += "    <div class=qqmusic_content>",
					t += "    <strong class=qqmusic_title>" + e.music_name + "</strong>", t += "    <p class=qqmusic_desc>" + e.singer + "</p>",
					t += "    </div>", t += "    </div></body></html>"), t;
			}

			function getMusicIframe(e) {
				var t = e && e.musicid,
					i = e.mid,
					r = e && e.url,
					a = e && e.songname,
					o = e && e.albumurl,
					s = e && e.singername,
					n = e && e.commentid,
					c = "/cgi-bin/readtemplate?t=tmpl/qqmusic_tmpl&singer=" + encodeURIComponent(s) + "&music_name=" + encodeURIComponent(a);
				return ['<iframe class="res_iframe qqmusic_iframe js_editor_qqmusic" ', ' musicid="' + t + '"', ' mid="' + i + '"', ' albumurl="' + o + '"', ' audiourl="' + r + '"', ' music_name="' + a + '"', ' commentid="' + n + '"', ' singer="' + s + '" ', ' src="' + c, '"></iframe>'].join("");
			}

			function insertCard(e, t) {
				window.insertCard(getCardIframe(e, t));
			}

			function getCardIframe(e, t) {
				return ['<iframe class="res_iframe card_iframe js_editor_card" ', 'data-cardid="%s" data-num="%s" '.sprintf(e.id, t), 'src="/cgi-bin/readtemplate?t=cardticket/card_preview_tmpl&logo_url=%s&brand_name=%s&title=%s&color=%s&lang=zh_CN"'.sprintf(encodeURIComponent(e.logo_url), encodeURIComponent(e.brand_name), encodeURIComponent(e.title), encodeURIComponent(e.color)), ' data-src="http://mp.weixin.qq.com/bizmall/appmsgcard?action=show&biz=%s&cardid=%s&wechat_card_js=1#wechat_redirect" '.sprintf(cgiData.biz_uin, e.id), "></iframe>"].join("");
			}
			var editor_selector = "#js_appmsg_editor",
				appmsg_selector = "#js_appmsg_preview",
				appmsg = new _Appmsg({
					app_id: app_id,
					editor_selector: editor_selector,
					appmsg_selector: appmsg_selector,
					isMul: !!cgiData.isMul,
					appmsg_data: appmsg_data
				});
			$("#js_cancle").click(function() {
				return Draft.clear(), Draft.isDropped = !0, window.location.reload(), !1;
			});
			var confirm = !1;
			$("#js_submit").click(function() {
				_send($(this), function(e) {
					var t = 10 == e ? "media/appmsg_list2" : "media/appmsg_list",
						i = 10 == e ? "list_" + wx.cgiData.fromview : "list";
					location.href = wx.url("/cgi-bin/appmsg?begin=0&count=10&t=%s&type=%s&action=%s".sprintf(t, e, i));
				});
			}), $("#js_send").click(function() {
				_send($(this), function(e, t) {
					location.href = wx.url("/cgi-bin/masssendpage?t=mass/send&type=10&appmsgid=%s".sprintf(t.appMsgId));
				});
			});
			var appMsgPreviewName = store.get("appMsgPreviewName"),
				VerifyCode = require("common/wx/verifycode.js");
			$("#js_preview").click(function() {
				var e = appmsg.getData();
				if (e) {
					e.vid = "";
					for (var t = 0, i = 0; i < e.count; i++)
						if (e["copyright_type" + i]) {
							t = 1;
							break;
						}
					var r = null,
						a = null,
						o = [];
					if (store.get(wx.data.uin + "previewAccounts")) try {
						o = store.get(wx.data.uin + "previewAccounts").split("|");
					} catch (s) {
						o = [];
					}
					var n = $(template.render("previewTpl", {
						label: "请输入微信号，此图文消息将发送至该微信号预览。",
						tips: 1 == t ? "本文申请的原创声明还未经平台审核，故预览不会出现原创标识。" : "",
						value: appMsgPreviewName,
						accounts: o
					})).popup({
						title: "发送预览",
						className: "simple label_block",
						onOK: function() {
							var t = this,
								i = t.get(),
								s = i.find(".frm_input"),
								n = s.val().trim();
							if (e.preusername = n, 0 == n.length) return $(".jsAccountFail").text("请输入预览的账号").show(), !0;
							if (null != r && r.getCode().trim().length <= 0) return Tips.err("请输入验证码"), r.focus(), !0;
							var c = i.find(".btn_primary").btn(!1);
							return e.imgcode = r && r.getCode().trim(), confirm && (e.confirm = 1, confirm = !1), mediaCgi.appmsg.preview(!!cgiData.isMul, type, e, function(i) {
								appmsg.app_id = i.appMsgId, t.hide(), setTimeout(function() {
									c.btn(!0);
								}, 500), (o.join("|") + "|").indexOf(n + "|") > -1 || (o.length < 3 ? o.push(e.preusername) : (o.shift(),
									o[2] = e.preusername), store.set(wx.data.uin + "previewAccounts", o.join("|")));
							}, function(e) {
								if ($(".jsAccountFail").text(e.word).show(), c.btn(!0), s.focus(), e) {
									if (!e || "-6" != e.ret && "-8" != e.ret || (a = i.find(".js_verifycode"), r = a.html("").removeClass("dn").verifycode().data("verifycode"),
										r.focus()), e && e.antispam) {
										var o = 1 * e.msg;
										appmsg._refreshUI(o);
									}
									return "412" == e.ret ? void $(".jsAccountFail").text("图文中含非法外链").show() : void(("15801" == e.ret || "15802" == e.ret || "15803" == e.ret || "15804" == e.ret || "15805" == e.ret || "15806" == e.ret) && (t.hide(),
										Dialog.show({
											type: "warn",
											msg: "图文消息中含有诱导分享内容|为保证用户体验，微信公众平台禁止发布各种诱导分享行为。你所编辑的图文消息可能涉及诱导分享内容。<br/>                                你可以继续保存和发布该图文消息，若发布后被举报并核实确有诱导分享行为，公众平台将根据规定进行处理。<br/>                                <a href='https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot3_3' target='_blank'>诱导分享违规行为说明</a>",
											buttons: [{
												text: "继续发送",
												click: function() {
													this.remove(), confirm = !0, c.trigger("click");
												}
											}, {
												text: "取消",
												type: "normal",
												click: function() {
													this.remove(), t.show();
												}
											}]
										})));
								}
							}), !0;
						}
					});
					$(".jsAccount").click(function() {
						$(this).hasClass("selected") ? ($(this).removeClass("selected"), $(".jsAccountInput").val("")) : ($(this).addClass("selected"),
							$(".jsAccountInput").val($(this).data("value")));
					}), $(".jsAccountInput").keyup(function(e) {
						$(".jsAccountFail").hide(), $(".jsAccount").removeClass("selected");
						var t = "which" in e ? e.which : e.keyCode;
						13 == t && $(this).parents(".dialog").find("button:eq(0)").trigger("click");
					}).placeholder(), $(".jsAccountDel").click(function() {
						var e = $(this).data("index");
						return o.length > e && o.splice(e, 1), $(this).parent().remove(), store.set(wx.data.uin + "previewAccounts", o.join("|")), !1;
					}), $(".frm_input", n).focus(), o.length > 0 && $(".jsAccount:last").click();
				}
			}), window.openVotePopup = function() {
				function renderList(begin) {
					$.ajax({
						url: wx.url("/cgi-bin/newoperatevote?action=list&vote_status=1&f=json&count=6&begin=" + begin),
						type: "get",
						dataType: "json",
						success: function(data) {
							if (data.data) {
								for (var voteData = eval("(" + data.data + ")"), iframeH = 0, i = 0; i < voteData.super_vote_info.length; i++) voteData.super_vote_info[i].height = 150 * voteData.super_vote_info[i].vote_id_list.vote_id.length;
								$(".js_vote_list").html(compile_html({
									loading: !1,
									data: voteData,
									iframeH: iframeH,
									biz: data.bizuin,
									token: wx.data.param
								})), $(".js_select").checkbox({
									multi: !1
								});
								var total_count = voteData.total_count,
									count = 6,
									showpage = begin / count + 1,
									pagebar = new Pagebar({
										container: ".js_pager",
										perPage: count,
										first: !1,
										last: !1,
										isSimple: !0,
										initShowPage: showpage,
										totalItemsNum: total_count,
										callback: function(e) {
											var t = e.currentPage;
											if (t != showpage) return t--, renderList(t * count), !1;
										}
									});
							} else $(".js_vote_list").html(compile_html({
								loading: !1,
								data: {
									super_vote_info: []
								}
							}));
						},
						error: function() {}
					});
				}
				var currentMsgContent = appmsg._getEditData();
				if (!appmsg.checkIframe(currentMsgContent, !0)) return null;
				document.body.style.overflow = document.documentElement.style.overflow = "hidden";
				var pop = $("<div class='' id='js_vote_menu'><div class='title_tab'><ul class='tab_navs title_tab' data-index='0'><li data-index='0' class='tab_nav first selected' ><a href='#none' id='js_new_vote'>新投票</a></li><li data-index='1' class='tab_nav'><a href='#none' id='js_vote_list'>已有投票</a></li></ul></div><div class='new_vote js_new_vote'>" + _vote_pop_html + "</div><div class='vote_list js_vote_list' style='display:none'></div></div>").popup({
						title: "发起投票",
						className: "vote_edit tc_dialog dialog_normal_form",
						buttons: [{
							text: "确定",
							click: function() {},
							type: "primary"
						}],
						close: function() {
							this.remove(), document.body.style.overflow = document.documentElement.style.overflow = "auto";
						}
					}),
					vote = require("vote/new.js"),
					Cgi = require("common/wx/Cgi.js");
				vote.initPage(), vote.eventBind();
				var _vote_list_tpl = require("tpl/vote/vote_table.html.js"),
					compile_html = template.compile(_vote_list_tpl);
				$(".js_vote_list").html(compile_html({
					loading: !0
				})), $("#js_new_vote").click(function() {
					$(".js_new_vote").show(), $("#js_new_vote").parent().addClass("selected"), $(".js_vote_list").hide(),
						$("#js_vote_list").parent().removeClass("selected");
				}), $("#js_vote_list").click(function() {
					$(".js_new_vote").hide(), $("#js_new_vote").parent().removeClass("selected"), $(".js_vote_list").show(),
						$("#js_vote_list").parent().addClass("selected");
				}), renderList(0), $(".vote_edit button").click(function() {
					var iframeH = 0,
						saveBtn = pop.find(":button").last();
					saveBtn.removeClass("btn_loading");
					var supervoteid = 0,
						biz = 0;
					if ("none" == $(".js_vote_list").css("display")) {
						var data = vote.getFullData();
						if (data) {
							var tempData = eval("(" + data + ")"),
								optionL = 0;
							iframeH += 70 * tempData.vote_subject.length;
							for (var i = 0; i < tempData.vote_subject.length; i++) optionL += tempData.vote_subject[i].options.length;
							iframeH += 30 * optionL, saveBtn.btn(!1), Cgi.post({
								url: wx.url("/cgi-bin/newoperatevote?action=create"),
								dataType: "json",
								data: {
									action: "create",
									json: data
								},
								mask: !1
							}, function(e) {
								0 == e.base_resp.ret ? (Tips.suc("操作成功"), supervoteid = e.super_vote_id, biz = e.bizuin, window.insertVoteIframe(['<iframe scrolling="no" frameborder="0" class="vote_iframe js_editor_vote_card" style="height:0px;" ', 'src="', wx.url("/cgi-bin/readtemplate?t=vote/vote-new_tmpl&__biz=" + biz + "&supervoteid=%s".sprintf(supervoteid)), '"', 'data-src="', "/mp/newappmsgvote?action=show&__biz=", biz, "&supervoteid=%s#wechat_redirect".sprintf(supervoteid), '"', 'data-supervoteid="%s"'.sprintf(supervoteid), " allowfullscreen >", "</iframe>"]),
									setIframeHeight(), pop.remove(), document.body.style.overflow = document.documentElement.style.overflow = "auto",
									$(".mask").hide()) : (Tips.err(e.base_resp.err_msg), saveBtn.btn(!0));
							});
						}
					} else saveBtn.btn(!1), 1 == $(".js_select:checked").length ? (supervoteid = $(".js_select:checked").val(),
						biz = $(".js_select:checked").data("biz"), iframeH = $(".js_select:checked").data("height"),
						window.insertVoteIframe(['<iframe scrolling="no" frameborder="0" class="vote_iframe js_editor_vote_card" style="height:0px;" ', 'src="', wx.url("/cgi-bin/readtemplate?t=vote/vote-new_tmpl&__biz=" + biz + "&supervoteid=%s".sprintf(supervoteid)), '"', 'data-src="', "/mp/newappmsgvote?action=show&__biz=", biz, "&supervoteid=%s#wechat_redirect".sprintf(supervoteid), '"', 'data-supervoteid="%s"'.sprintf(supervoteid), " allowfullscreen >", "</iframe>"]),
						setIframeHeight(), pop.remove(), document.body.style.overflow = document.documentElement.style.overflow = "auto",
						saveBtn.btn(!0), $(".mask").hide()) : (Tips.err("请选择投票"), saveBtn.btn(!0));
				});
			};
			var SendCard = require("cardticket/send_card.js"),
				Cgi = require("common/wx/Cgi.js"),
				parser = require("cardticket/parse_data.js"),
				card_data = !1;
			cgiData.cardid && Cgi.get({
				url: "/merchant/electroniccardmgr?action=get&card_id=%s".sprintf(cgiData.cardid)
			}, function(e) {
				0 == e.base_resp.ret && (card_data = $.parseJSON(e.card_detail), card_data = parser.parse_cardticket(card_data),
					window.initCard());
			}), window.initCard = function() {
				if (cgiData.ueditorReady && card_data) {
					cgiData.ueditorReady = !0;
					var e = appmsg._getEditData(),
						t = e.content,
						i = /<iframe class=\"res_iframe card_iframe js_editor_card\".*?><\/iframe>/gi;
					i.test(t) ? (t = t.replace(i, getCardIframe(card_data, cgiData.cardnum)), appmsg.ueditor.setContent(t)) : insertCard(card_data, cgiData.cardnum);
				}
			}, window.openCardSelect = function() {
				var e = appmsg._getEditData();
				if (appmsg.checkCard(e, !0)) {
					var t = new SendCard({
						multi: !1,
						param: {
							need_member_card: 1
						},
						selectComplete: insertCard,
						source: "嵌入图文消息素材"
					});
					t.show();
				}
			}, window.openAudioPopup = function() {
				function e(e) {
					t(e);
				}

				function t(e) {
					e.find("#searchDiv").show(), e.find("#keyInput").keydown(function(t) {
						var i = "which" in t ? t.which : t.keyCode;
						13 == i && e.find("#searchBt").trigger("click");
					}), e.find("#searchCloseBt").click(function() {
						e.find("#keyInput").val("");
					}), e.find("#searchBt").click(function() {
						var t = e.find("#keyInput").val();
						t.length > 0 ? r({
							keyword: encodeURIComponent(t),
							perpage: 10,
							currentpage: 1
						}) : alert("请输入搜索条件");
					}), e.find("#reload").click(function() {
						e.find("#searchCloseBt").trigger("click");
					});
				}

				function i(e) {
					{
						var t = d.find("#keyInput").val(),
							i = e && e.currentpage,
							a = e && e.perpage,
							o = e && e.totalnum;
						new PageBar({
							container: "#js_pagebar",
							perPage: a,
							initShowPage: i,
							totalItemsNum: o,
							first: !1,
							last: !1,
							isSimple: !0,
							callback: function(e) {
								var o = e.currentPage;
								o != i && (i = o, r({
									keyword: t,
									perpage: a,
									currentpage: i
								}));
							}
						});
					}
				}

				function r(e) {
					var t = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
						i = document.createElement("script"),
						r = ["https://auth-external.music.qq.com/open/fcgi-bin/fcg_weixin_music_search.fcg?remoteplace=txt.weixin.officialaccount&w=", e.keyword, "&platform=weixin&jsonCallback=MusicJsonCallback&perpage=", e.perpage, "&curpage=", e.currentpage].join("");
					console.log("src=" + r), i.type = "text/javascript", i.src = r, t.appendChild(i);
				}

				function a(e) {
					var t = $.extend({}, e);
					return t && t.list && $.each(t.list, function(e, t) {
						var i = t.f.split("|"),
							r = i[7] || 0,
							a = i[12] || 0,
							n = i[0],
							c = i[i.length - 1],
							d = i[i.length - 3],
							l = "/" + c.charAt(c.length - 2) + "/" + c.charAt(c.length - 1) + "/" + c + ".jpg";
						$.extend(t, {
							songtime: o(r),
							songsize: s(a),
							songid: n,
							mid: d,
							albumurl: l
						});
					}), console.log("formatJsonData"), console.log(t), t;
				}

				function o(e) {
					var t = "";
					if (60 > e) t = "00:" + (10 > e ? "0" : "") + e;
					else {
						var i = Math.floor(e / 60),
							r = e - 60 * i;
						t = (10 > i ? "0" : "") + i + ":" + (10 > r ? "0" : "") + r;
					}
					return t;
				}

				function s(e) {
					var t = "";
					return t = e > 1048576 ? parseInt(e / 1048576) + "M" : "1M";
				}

				function n() {
					d.find(".qqmusic_audioplay").each(function() {
						var e = $(this),
							t = e.attr("audioid"),
							i = e.attr("audiourl"),
							r = {
								selector: "#url_" + t,
								qqmusicurl: i,
								id: t,
								qqmusictpl: !0
							};
						console.log("initMusicfile"), console.log(r);
						new Audio(r);
					}), d.find(".frm_radio").checkbox({
						multi: !1,
						onChanged: function(e) {
							console.log(e), c.musicid = e.val(), c.songname = d.find("#songname_" + c.musicid).html(),
								c.singername = d.find("#singername_" + c.musicid).html(), c.url = d.find("#url_" + c.musicid).attr("audiourl"),
								c.mid = d.find("#url_" + c.musicid).attr("mid"), c.albumurl = d.find("#url_" + c.musicid).attr("albumurl");
						}
					});
				}
				var c = {},
					d = $("#audioPop").popup({
						title: "添加音乐",
						className: "align_edge qqmusic_dialog",
						width: "960",
						buttons: [{
							text: "确定",
							type: "primary",
							click: function() {
								console.log("selected music " + c.mid);
								var e = this;
								console.log(wx.url("/cgi-bin/registertopic?id=" + c.musicid + "&type=1&src=1")), "undefined" != typeof c.musicid ? $.ajax({
									url: wx.url("/cgi-bin/registertopic?id=" + c.musicid + "&type=1&src=1"),
									type: "post",
									dataType: "json",
									success: function(t) {
										console.log("success"), console.log(t), t && "0" == t.base_resp.ret && "undefined" != typeof t.topic_id ? (c.commentid = t.topic_id,
											insertQQMusic(c), console.log(c), c = {}, e.remove()) : alert("系统繁忙，请稍后再试");
									}
								}) : alert("请选择要插入的音乐");
							}
						}, {
							text: "取消",
							click: function() {
								c = {}, this.remove();
							}
						}],
						close: function() {
							c = {}, this.remove();
						}
					});
				e(d), window.MusicJsonCallback = function(e) {
					var t = _audio_appmsg_html;
					a(e), d.find("#dialog_audio_container").html(T(t, e)), n(), i({
						totalnum: e.totalnum,
						perpage: e.perpage,
						currentpage: e.curpage
					});
				};
			};
		}(), window.openLink = function() {
			$("#linkPop").show(), $("#mask").show(), LinkPop.init();
		};
	var LinkPop = function() {
		function e(t, r, a, s) {
			o.post({
				url: "/cgi-bin/appmsg",
				data: {
					action: "list_ex",
					begin: t,
					count: m,
					query: a,
					type: 9
				}
			}, function(t) {
				"0" == t.base_resp.ret ? (i(t.app_msg_list), s && ($("#pageBar").html(""), new n({
					container: "#pageBar",
					perPage: m,
					totalItemsNum: t.app_msg_cnt,
					isSimple: !0,
					callback: function(t) {
						e((t.currentPage - 1) * m, m, $("#keyInput").val().trim(), !1);
					}
				}))) : Tips.err();
			});
		}

		function t() {
			p = !0, c = $("#linkForm").validate({
				rules: {
					title: {
						required: !0
					},
					href: {
						required: !0,
						url: !0
					}
				},
				messages: {
					title: {
						required: "文章标题不能为空"
					},
					href: {
						required: "链接地址不能为空",
						url: "链接地址不合法(必须以http://或https://开头)"
					}
				}
			}), $("#keyInput").keydown(function(e) {
				var t = "which" in e ? e.which : e.keyCode;
				13 == t && $("#searchBt").trigger("click");
			}), $("#searchCloseBt").click(function() {
				$("#keyInput").val(""), e(0, m, "", !0);
			}), $("#searchBt").click(function() {
				e(0, m, $("#keyInput").val().trim(), !0);
			}), $(".jsLinkClose").click(function() {
				$("#linkPop").hide(), $("#mask").hide(), $("#txtHref").val("http://"), $("#txtTitle").val(""),
					$("#keyInput").val(""), $("#linkList").html(""), "1" == can_use_hyperlink ? ($("#hrefDiv").show(),
						$("#linkChoose").hide(), $("#linkArrow").find(".arrow").setClass("arrow down")) : ($("#hrefDiv").hide(),
						$("#linkChoose").show(), $("#linkArrow").find(".arrow").setClass("arrow up"));
			}), $("#linkArrow").click(function() {
				$(this).find(".arrow").hasClass("down") ? ($(this).find(".arrow").setClass("arrow up"),
					$("#linkChoose").show(), $("#linkPop").center()) : ($(this).find(".arrow").setClass("arrow down"),
					$("#linkChoose").hide(), $("#linkPop").center());
			}), $("#linkOk").click(function() {
				if (c.form()) {
					var e = {
						href: $("#txtHref").val().replace(/^\s+|\s+$/g, ""),
						target: "_blank",
						data_ue_src: $("#txtHref").val().replace(/^\s+|\s+$/g, "")
					};
					u && (e.textValue = $("#txtTitle").val().replace(/^\s+|\s+$/g, "")), _ueditor.execCommand("link", e),
						$(".jsLinkClose").trigger("click");
				}
			});
		}

		function i(e) {
			var t = [];
			e.each(function(e) {
				t.push({
					title: e.title,
					time: s.unix(e.update_time).format("YYYY-MM-DD"),
					href: e.link.replace("#rd", "&scene=21#wechat_redirect"),
					aid: e.aid
				});
			}), t.length > 0 ? ($("#linkList").html(template.render("tplMsg", {
				data: t
			})), $("#linkPop").center(), $("input[type=radio]").checkbox({
				onChanged: function(e) {
					1 == u && $("#txtTitle").val($(e).data("title")), $("#txtHref").val($(e).data("href")),
						c.form();
				}
			})) : $("#linkList").html('<li class="empty_tips">暂无数据</li>');
		}

		function r() {
			d = _ueditor.selection.getRange(), l = d.collapsed ? _ueditor.queryCommandValue("link") : _ueditor.selection.getStart(),
				l ? (UE.dom.domUtils.findParentByTagName(l, "a", !0) && (l = UE.dom.domUtils.findParentByTagName(l, "a", !0)),
					$("#txtTitle").val(l.text || "你已选中了添加链接的文本内容").attr("disabled", !0).parent().addClass("disabled"),
					$("#txtHref").val(l.href || "http://"), u = !1) : ($("#txtTitle").attr("disabled", !1).parent().removeClass("disabled"),
					u = !0);
		}

		function a() {
			r(), e(0, m, "", !0), 0 == p && t(), "1" == can_use_hyperlink ? ($("#hrefDiv").show(), $("#linkChoose").hide(),
				$("#linkArrow").find(".arrow").setClass("arrow down"), $("#linkPop").center()) : ($("#hrefDiv").hide(),
				$("#linkChoose").show(), $("#linkArrow").find(".arrow").setClass("arrow up"), $("#linkPop").center());
		}
		var o = require("common/wx/Cgi.js"),
			s = require("biz_common/moment.js"),
			n = require("common/wx/pagebar.js");
		require("biz_common/jquery.validate.js");
		var c, d, l, m = 5,
			p = !1,
			u = !1;
		return {
			init: a
		};
	}();
});