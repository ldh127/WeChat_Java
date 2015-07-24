define("tpl/media/dialog/file.html.js", [], function() {
	return '{each list as item}\n{mediaDialogInit item}\n<li class="media_item">\n    <div class="media_info">\n        <label class="media_name frm_radio_label">\n        	<i class="icon_radio"></i>\n        	<input name="media" type="radio" class="frm_radio" value="{item.file_id}">\n            {item.name}\n        </label>\n        <span class="media_size">{item.size}</span>\n        <span class="media_time">{mediaDialogtimeFormat item.update_time}</span>\n    </div>\n    <div id="fileItem{item.file_id}" data-id="{item.file_id}" data-type="{item.type}" class="media_content"></div>\n</li>\n{/each}\n';
});
define("tpl/media/dialog/videomsg_layout.html.js", [], function() {
	return '<div class="dialog_media_container">\n    <div class="sub_title_bar in_dialog">\n        <div class="title_tab js_videotab"></div>\n        <div class="search_bar dn">\n            <span class="frm_input_box search with_del append">\n                <a class="del_btn" href="javascript:"><i class="icon_search_del"></i>&nbsp;</a>\n                <a id="msgSearchBtn" href="javascript:" class="frm_input_append"><i class="icon16_common search_gray">搜索</i>&nbsp;</a>\n                <input id="msgSearchInput" type="text" placeholder="关键字" value="" class="frm_input">\n            </span>\n        </div>\n        <div class="richvideo_create js_video_create {if scene != \'default\'}dn{/if}">\n            <a class="" target="_blank" href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&type=15&lang=zh_CN&token={token}">\n                <i class="icon_richvideo_small"></i><strong>新建视频消息</strong>\n            </a>\n        </div>\n    </div>\n    <div class="js_video_status js_video_content dn">\n        <div class="richvideo_list media_dialog" id="js_videomsg_list">\n            <div class="richvideo_col"><div class="inner"></div></div>&nbsp;\n            <div class="richvideo_col"><div class="inner"></div></div>\n        </div>\n    </div>\n    <div class="js_video_status js_video_tencent dn">\n        <div class="video">\n            <div class="frm_control_group">\n                <label for="" class="frm_label">视频网址</label>\n                <div class="frm_controls">\n                    <span class="frm_input_box"><input type="text" class="frm_input js_video_txurl"></span>\n                    <p class="frm_tips">支持腾讯视频和微视频</p>\n                </div>\n            </div>\n			<div class="video_preview js_video_preview"></div>\n		</div>\n    </div>\n    <div class="js_video_status js_video_loading">\n        <i class="icon_loading_small white">loading...</i>\n    </div>\n    <div class="js_video_status js_video_none dn">\n        <div class="no_media_wrp">\n            <p class="empty_tips js_empty_tips"></p>\n            <!--\n            <div class="richvideo_create js_video_create">\n                <a class="" target="_blank" href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&type=15&lang=zh_CN&token={token}">\n                    <i class="icon_richvideo_small"></i><strong>新建视频消息</strong>\n                </a>\n            </div>\n            -->\n        </div>\n        <span class="vm_box"></span>\n    </div>\n    \n    <div class="pagination_wrp pageNavigator js_pagebar"></div>\n</div>\n';
});
define("tpl/media/dialog/appmsg_layout.html.js", [], function() {
	return '<div class="dialog_media_container appmsg_media_dialog">\n    <div class="sub_title_bar in_dialog">\n        <div class="search_bar">\n            <span class="frm_input_box search with_del append">\n                <a class="del_btn" href="javascript:" id="searchCloseBt"><i class="icon_search_del"></i>&nbsp;</a>\n                <a id="msgSearchBtn" href="javascript:" class="frm_input_append"><i class="icon16_common search_gray">搜索</i>&nbsp;</a>\n                <input id="msgSearchInput" type="text" placeholder="标题/作者/摘要" value="" class="frm_input">\n            </span>\n        </div>\n        <div class="appmsg_create tr">\n            {if type==10}\n            <!--\n            <a class="" target="_blank" href="/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&type=10&lang=zh_CN&token={token}">\n                <i class="icon_appmsg_small"></i><strong>新建单图文消息</strong>\n            </a>\n            -->\n            <a class="" target="_blank" href="/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&type=10&isMul=1&lang=zh_CN&token={token}">\n                <i class="icon_appmsg_small multi"></i><strong>新建图文消息</strong>\n            </a>\n            {else if type==11}\n            <a class="" target="_blank" href="/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&type=11&lang=zh_CN&token={token}">\n                <i class="icon_shopmsg_small"></i><strong>新建单商品消息</strong>\n            </a>\n            <a class="" target="_blank" href="/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&type=11&isMul=1&lang=zh_CN&token={token}">\n                <i class="icon_shopmsg_small multi"></i><strong>新建多商品消息</strong>\n            </a>\n            {/if}\n        </div>\n    </div>\n    <div class="dialog_media_inner">\n        {if tpl=="loading"}\n        <i class="icon_loading_small white">loading...</i>\n        {else if tpl=="no-media"}\n        <div class="no_media_wrp">\n            <p class="tips">暂无素材</p>\n        </div>\n        <span class="vm_box"></span>\n        {else}\n        <div class="js_appmsg_list appmsg_list media_dialog">\n            <div class="appmsg_col"><div class="inner"></div></div>&nbsp;\n            <div class="appmsg_col"><div class="inner"></div></div>\n        </div>\n        <div class="pagination_wrp pageNavigator"></div>\n        {/if}\n    </div>\n</div>\n';
});
define("tpl/media/dialog/file_layout.html.js", [], function() {
	return '<div class=\'dialog_media_container {if tpl=="no-media"}no_media{/if}\'>\n    {if tpl=="loading"}\n    <i class="icon_loading_small white">loading...</i>\n    {else if tpl=="no-media"}\n    <div class="no_media_wrp">\n        <p class="tips">\n        暂无素材        </p>\n        <div class="upload_box">\n            <span class="upload_area"><a id="js_media_dialog_upload{upload_id}" class="btn btn_upload" data-gid="">上传</a></span>\n            <div class="bubble_tips bubble_right warn">\n                <div class="bubble_tips_inner">\n                    {if type=="2"}\n                        大小: 不超过2M,&nbsp;&nbsp;&nbsp;&nbsp;格式: bmp, png, jpeg, jpg, gif                    {/if}\n                    {if type=="3"}\n                        大小: 不超过5M,&nbsp;&nbsp;&nbsp;&nbsp;长度: 不超过60s,&nbsp;&nbsp;&nbsp;&nbsp;格式: mp3, wma, wav, amr                    {/if}\n                    {if type=="4"}\n                        大小: 不超过20M,&nbsp;&nbsp;&nbsp;&nbsp;格式: rm, rmvb, wmv, avi, mpg, mpeg, mp4                    {/if}\n                </div> \n                <i class="bubble_tips_arrow out"></i>\n                <i class="bubble_tips_arrow in"></i>\n            </div>\n        </div>\n    </div>\n    <span class="vm_box"></span>\n    {else}\n    <div class="sub_title_bar in_dialog">\n        <div class="search_bar dn">\n            <span class="frm_input_box search with_del append">\n                <a class="del_btn" href="javascript:"><i class="icon_search_del"></i>&nbsp;</a>\n                <a id="msgSearchBtn" href="javascript:" class="frm_input_append"><i class="icon16_common search_gray">搜索</i>&nbsp;</a>\n                <input id="msgSearchInput" type="text" placeholder="关键字" value="" class="frm_input">\n            </span>\n        </div>\n        <div class="upload_box">\n            <span class="upload_area"><a id="js_media_dialog_upload{upload_id}" class="btn btn_upload" data-gid="">上传</a></span>&nbsp;\n            <div class="bubble_tips bubble_left warn">\n                <div class="bubble_tips_inner">\n                    {if type=="2"}\n                        大小: 不超过2M,&nbsp;&nbsp;&nbsp;&nbsp;格式: bmp, png, jpeg, jpg, gif                    {/if}\n                    {if type=="3"}\n                        大小: 不超过5M,&nbsp;&nbsp;&nbsp;&nbsp;长度: 不超过60s,&nbsp;&nbsp;&nbsp;&nbsp;格式: mp3, wma, wav, amr                    {/if}\n                    {if type=="4"}\n                        大小: 不超过20M,&nbsp;&nbsp;&nbsp;&nbsp;格式: rm, rmvb, wmv, avi, mpg, mpeg, mp4                    {/if}\n                </div>\n                <i class="bubble_tips_arrow out"></i>\n                <i class="bubble_tips_arrow in"></i>\n            </div>\n        </div>&nbsp;\n    </div>\n    <ul class=\'dialog_media_list js_media_list\'></ul>\n    <div class="pagination_wrp pageNavigator"></div>\n    {/if}\n</div>\n';
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