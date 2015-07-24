define("tpl/richEditor/emotionEditor.html.js", [], function() {
	return '<div class="emotion_editor">\n    <div class="edit_area js_editorArea"></div>\n    <div class="editor_toolbar">\n        {if !hideEmotion}\n        <a href="javascript:void(0);" class="icon_emotion emotion_switch js_switch">表情</a>\n        {/if}\n        {if !hideUpload}\n        <div class="upload_box">\n            <div class="upload_area">\n                <a id="emotionEditor_{gid}_" href="javascript:void(0);" class="js_upload upload_access">\n                    <i class="icon18_common upload_gray"></i>\n                    上传图片                </a>\n            </div>\n        </div>\n        {/if}\n        <p class="editor_tip opr_tips">，按下Shift+Enter键换行</p>\n        <p class="editor_tip js_editorTip"></p>\n        <div class="emotion_wrp js_emotionArea">\n			\n		</div>\n    </div>\n</div>\n\n';
});
define("tpl/tooltip.html.js", [], function(e, t, n) {
	return '<div class="tooltip">\n    <div class="tooltip_inner">{content}</div>\n    <i class="tooltip_arrow"></i>\n</div>\n';
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
! function() {
	if (!window.define) {
		var t = {};
		window.define = function(e, i, n) {
			t[e] = n;
		}, window.seajs = {
			use: function(e) {
				function i(e) {
					return t[e] && t[e](i);
				}
				return t[e] && t[e](i);
			}
		};
	}
}(), define("biz_common/utils/norefererimg.js", [], function() {
	function t(t) {
		return window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle;
	}

	function e(t, e, i, n) {
		if (t && i) {
			if (t == window && "load" == e && /complete|loaded/.test(document.readyState)) return void i({
				type: "load"
			});
			var o = function(t) {
				var e = i.call(this, t);
				e === !1 && (t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault());
			};
			return i[e + "_handler"] = o, t.addEventListener ? void t.addEventListener(e, o, !!n) : t.attachEvent ? void t.attachEvent("on" + e, o, !!n) : void 0;
		}
	}
	return function(i) {
		var n = i.img,
			o = i.imgurl,
			r = i.onload,
			d = o || n.getAttribute("data-src"),
			a = /^http:\/\/mmbiz\.qpic\.cn\/|https:\/\/mmbiz\.qlogo\.cn\//;
		if (d) {
			if (n.length && (n = n[0]), a.test(d)) return e(n, "load", r), void n.setAttribute("src", d);
			var s = t(n),
				l = ["javascript:\"<html><body style='margin:0;padding:0;'><img style='width:", s.width, ";height:", s.height, ";' src='", d + "' /></body></html>\""].join(" "),
				u = document.createElement("iframe");
			u.setAttribute("frameBorder", "0"), u.setAttribute("scrolling", "no"), u.style.width = "60px",
				u.style.width = s.width + "", u.style.height = s.height, u.style.display = s.display, u.style.borderRadius = s.borderRadius,
				u.style.webkitBorderRadius = s.borderRadius, "function" == typeof r && (u.attachEvent ? u.attachEvent("onload", r) : u.onload = r),
				u.className = n.className;
			var c = n.parentNode;
			c.insertBefore(u, n), u.src = l, c.removeChild(n);
		}
	};
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
		var n = e.base_info.date_info || {};
		o.time_type = f[n.type] || n.type, 1 == o.time_type && (o.begin_time = n.begin_timestamp, o.end_time = n.end_timestamp),
			o.from_day = n.fixed_begin_term || 0, o.fixed_term = n.fixed_term || 30, o.quantity = e.base_info.sku.quantity,
			o.shop_id_list = e.base_info.shop_id_list, o.location_id_list = e.base_info.location_id_list;
		var c = l[o.code_type];
		if (o.code_type = "undefined" != typeof c ? c : o.code_type, "undefined" == typeof o.code_type && (o.code_type = 1),
			o.least_cost = e.least_cost && e.least_cost / 100, o.reduce_cost = e.reduce_cost && e.reduce_cost / 100,
			"0" == o.least_cost && (o.least_cost = ""), o.discount = o.discount && (100 - o.discount) / 10,
			o.detail = 1 == o.type ? o.deal_detail : o.default_detail, /^http/.test(o.logo_url) || (o.logo_url = ""),
			o.shop_type || (o.shop_type = o.location_id_list && o.location_id_list.length ? 2 : 3), o.auto_update_new_location && (o.shop_type = 1),
			o.isnew = o.func_flag ? 16 & o.func_flag : !1, o.ispay = o.func_flag ? 64 & o.func_flag : !1, o.func_flag && (o.show_in_nearby = 32 & o.func_flag),
			o.ispay && (o.can_share = !0), o.ispay && (o.detail = o.detail ? o.detail.replace(/\n微信价：.*?元$/gm, "") : ""),
			o.price = _(e.base_info.sku.price / 100), o.original_price = _(e.base_info.sku.original_price / 100),
			1 == o.create_source && (o.isnew = !0), 1 == o.time_type && o.end_time < new Date / 1e3 && (o.is_expire = !0),
			o.is_intercomm = 16384 & o.func_flag, "undefined" != typeof e.base_info.task_info && (o.is_from_intercomm = !0,
				o.task_info = e.base_info.task_info), o.is_from_intercomm && (o.isnew = !0), o.isnew || (o.quantity = "--"),
			o.status = u[o.status] || o.status, o.discount && (o.supply_discount = !0), o.can_edit_quantity = 10 != o.type,
			10 == o.type) {
			if (o.promotion_url_name) {
				var p = {
					name: o.promotion_url_name,
					tips: o.promotion_url_sub_title,
					url: o.promotion_url
				};
				p.url_type = i(p.url), p.url = a(p.url);
				var d = [p];
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
			o.require_keywords = s.flag2info(m.info_flag), o.option_keywords = s.flag2info(y.info_flag),
				o.require_self_keywords = m.field_list, o.option_self_keywords = y.field_list, o.must_activate = !o.auto_activate,
				o.supply_discount && (o.prerogative = o.prerogative.replace(/^用卡可享受.*?折优惠\n/, "")), o.quantity = "--";
		}
		return o;
	}

	function r(e, t) {
		for (var _ in t) t.hasOwnProperty(_) && "object" != typeof t[_] && (e[_] = t[_]);
		return e;
	}

	function n(e) {
		for (var t = {}, _ = [], i = 0; i < e.length; i++) {
			var a = o(e[i]);
			a && (t[a.id] = a, _.push(a));
		}
		return {
			card_cache: t,
			card_list: _
		};
	}
	var s = e("cardticket/add/member_info_flag.js"),
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
		f = {
			DATE_TYPE_FIX_TIME_RANGE: 1,
			DATE_TYPE_FIX_TERM: 2,
			DATE_TYPE_PERMANENT: 100
		};
	return {
		parse_cardticket: o,
		parse_cardlist: n,
		url_type: i
	};
});
define("tpl/media/cardmsg.html.js", [], function() {
	return '<div class="msg_card{if _className} {_className}{/if}">\n	<div class="card_content" style="background-color: {color};">\n		<img class="logo js_logourl" data-src="{logo_url}" />\n		<div class="card_info">\n			<h4 class="card_title">{title}</h4>\n		</div>\n		<div class="deco"></div>\n	</div>\n	<p class="store">{brand_name}</p>\n</div>\n';
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