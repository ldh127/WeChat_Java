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
			url: "/cgi-bin/appmsg?begin=0&count=10&t=media/appmsg_list2&type=10&action=list_new"
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
define("tpl/media/dialog/image_group.html.js", [], function() {
	return '{each file_group_list.file_group as item}\n<dd id="js_group{item.id}" class="inner_menu_item js_groupitem{if item.id == group} selected{/if}" data-groupid="{item.id}">\n    <a href="javascript:;" class="inner_menu_link" title="{item.name}" onclick="return false">\n        <strong>{item.name}</strong><em class="num">(<span>{item.count}</span>)</em>\n    </a>\n</dd>\n{/each}\n';
});
define("tpl/media/dialog/image_list.html.js", [], function() {
	return '{if file_item.length == 0}\n<div class="empty_tips">该分组暂时没有图片素材</div>\n{else}\n{each file_item as item}\n<li class="img_item js_imageitem" data-id="{item.file_id}" data-url="{item.cdn_url}" data-format="{item.img_format}">\n    <label class="frm_checkbox_label{if item.selected} selected{/if} img_item_bd">\n        {if scene == \'cdn\' && item.cdn_url}\n        <img src="{item.cdn_url}" alt="{item.name}" class="pic">\n        {else}\n        <img src="{item.img_url}" alt="{item.name}" class="pic">\n        {/if}\n        <span class="lbl_content">{item.name}</span>\n        <div class="selected_mask">\n            <div class="selected_mask_inner"></div>\n            <div class="selected_mask_icon"></div>\n        </div>\n    </label>\n</li>\n{/each}\n{/if}\n';
});
define("tpl/media/dialog/image_layout.html.js", [], function() {
	return '<div class="img_pick_panel inner_container_box side_l cell_layout">\n    <div class="inner_side">\n        <div class="group_list">\n            <div class="inner_menu_box">\n                <dl class="inner_menu js_group"></dl>\n            </div>                    \n        </div>\n    </div>\n    <div class="inner_main">\n        <div class="img_pick_area">\n            <div class="sub_title_bar in_dialog">\n                <div class="upload_box r align_right">\n                    <span class="upload_area"><a id="js_imageupload" class="btn btn_primary js_imageupload" data-groupid="">本地上传</a></span>\n                </div>\n                {if desc}\n                <div class="bubble_tips bubble_right warn r">\n                    <div class="bubble_tips_inner">{desc}</div> \n                    <i class="bubble_tips_arrow out"></i>\n                    <i class="bubble_tips_arrow in"></i>\n                </div>\n                {/if}\n            </div>\n            <div>\n                <div class="img_pick">\n                    <i class="icon_loading_small white js_loading"></i>\n                    <ul class="group js_list img_list"></ul>\n                </div>\n                <div class="js_pagebar"></div>\n            </div>\n        </div>\n    </div>\n    <p class="dialog_ft_desc">已选<span class="js_selected">0</span>个，可选{maxSelect}个</p>\n</div>\n';
});
define("tpl/pagebar.html.js", [], function(e, t, n) {
	return '<div class="pagination">\n    <span class="page_nav_area">\n        <a href="javascript:void(0);" class="btn page_first">{firstButtonText}</a>\n        <a href="javascript:void(0);" class="btn page_prev"><i class="arrow"></i></a>\n        {if isSimple}\n            <span class="page_num">\n                <label>{initShowPage}</label>\n                <span class="num_gap">/</span>\n                <label>{endPage}</label>\n            </span>\n        {else}\n            {each startRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav">{pageIndex}</a>\n            {/each}\n            <span class="gap_prev">...</span>\n            {each midRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav js_mid">{pageIndex}</a>\n            {/each}\n            <span class="gap_next">...</span>\n            {each endRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav">{pageIndex}</a>\n            {/each}\n        {/if}\n        <a href="javascript:void(0);" class="btn page_next"><i class="arrow"></i></a>\n        <a href="javascript:void(0);" class="btn page_last">{lastButtonText}</a>            \n    </span>\n    {if (endPage>1)}\n    <span class="goto_area">\n        <input type="text">\n        <a href="javascript:void(0);" class="btn page_go">跳转</a>\n    </span>\n    {/if}\n</div>\n';
});
define("tpl/biz_web/ui/checkbox.html.js", [], function(e, t, n) {
	return '<label for="_checkbox_{index}" class="frm_{type}_label">\n	<i class="icon_{type}"></i>\n	<input type="{type}" class="frm_{type}" name="{name}" id="_checkbox_{index}">\n	<span class="lbl_content">{label}</span>\n</label>';
});
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
define("tpl/media/appmsg.html.js", [], function() {
	return '<div class="appmsg {if isMul}multi{/if}" data-id="{id}" data-fileid="{file_id}">\n    <div class="appmsg_content">\n        {if isMul}\n            <div class="appmsg_info">\n                <em class="appmsg_date">{time}</em>\n            </div>\n            <div class="cover_appmsg_item">\n                <h4 class="appmsg_title js_title"><a href="{first.content_url}" target="_blank">{first.title}</a></h4>\n                <div class="appmsg_thumb_wrp"><img src="{first.cover}" alt="" class="appmsg_thumb"></div>\n            </div>\n            {each list as item}\n            <div class="appmsg_item">\n                <img src="{item.cover}" alt="" class="appmsg_thumb">\n                <h4 class="appmsg_title js_title"><a href="{item.content_url}" target="_blank">{item.title}</a></h4>\n            </div>\n            {/each}\n        {else}\n            <h4 class="appmsg_title js_title"><a href="{first.content_url}" target="_blank">{first.title}</a></h4>\n            <div class="appmsg_info">\n                <em class="appmsg_date">{time}</em>\n            </div>\n            <div class="appmsg_thumb_wrp"><img src="{first.cover}" alt="" class="appmsg_thumb" /></div>\n            <p class="appmsg_desc">{first.digest}</p>\n        {/if}\n    </div>\n    {if showEdit}\n    <div class="appmsg_opr">\n        <ul>\n            <li class="appmsg_opr_item grid_item size1of2">\n            <a class="js_tooltip" href="/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&lang=zh_CN&token={token}&type={type}&appmsgid={id}&isMul=1" data-tooltip="编辑">&nbsp;<i class="icon18_common edit_gray">编辑</i></a>\n            </li>\n            <li class="appmsg_opr_item grid_item size1of2 no_extra">\n                <a class="js_del no_extra js_tooltip" data-id="{id}" href="javascript:void(0);" data-tooltip="删除">&nbsp;<i class="icon18_common del_gray">删除</i></a>\n            </li>\n        </ul>\n    </div>\n    {/if}\n    {if showMask}\n    <div class="appmsg_mask"></div>\n    <i class="icon_card_selected">已选择</i>\n    {/if}\n</div>\n';
});
define("tpl/tooltip.html.js", [], function(e, t, n) {
	return '<div class="tooltip">\n    <div class="tooltip_inner">{content}</div>\n    <i class="tooltip_arrow"></i>\n</div>\n';
});