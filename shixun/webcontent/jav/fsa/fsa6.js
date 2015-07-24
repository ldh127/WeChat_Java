define("common/wx/region.js", ["common/wx/Cgi.js", "biz_web/ui/dropdown.js"], function(t, e, i) {
	"use strict";
	var n = t("common/wx/Cgi.js"),
		o = t("biz_web/ui/dropdown.js"),
		a = {
			disabled: !1
		},
		c = function(t) {
			this.opt = $.extend(!0, {}, a, t), this.container = $(t.container), this._action = null, u.call(this);
		},
		r = "/cgi-bin/getregions?t=setting/ajax-getregions&id={id}",
		s = {
			country: "����",
			province: "ʡ��",
			city: "����"
		},
		l = function(t) {
			return void 0 === t && (t = ""), t += "", t && t.replace(/(\u00a0|&nbsp;)/g, " ").replace(/&quot;/gi, '"').replace(/&#39;/gi, "'");
		},
		p = function(t, e) {
			var i = wx.url(r.format({
				id: t || -1
			}));
			n.get({
				url: i,
				mask: !1
			}, e);
		},
		u = function() {
			var t = this;
			t.opt.cgi && (r = t.opt.cgi + "?t=setting/ajax-getregions&id={id}"), t.opt.list ? $.each(["country", "province", "city"], function(e, i) {
				t.opt.list[i] = t.opt.list[i] || [];
			}) : t.opt.list = {
				country: [],
				province: [],
				city: []
			}, t.opt.display = t.opt.display || {
				country: !0,
				province: !0,
				city: !0
			}, t.selectors = {}, $.each(["country", "province", "city"], function(e, i) {
				var n = "js_" + i + (1e4 * Math.random() | 0);
				$('<div id="' + n + '" style="display:none"></div>').appendTo(t.container), t.selectors[i] = "#" + n;
			}), d.call(this, "0", "country");
		},
		d = function(t, e) {
			var i = this;
			i._action = t, i.status = "loading", p(t, function(n) {
				if (n && n.base_resp && 0 == n.base_resp.ret && i._action == t) {
					i.status = "loaded";
					var o = [],
						a = i.opt.list[e];
					$.each(n.data, function(t, n) {
						var a = l($.trim(n.name)).replace(/"/g, "&quot;"),
							c = !0;
						i.opt.retain && i.opt.retain[e] && i.opt.retain[e].length > 0 ? i.opt.retain[e].indexOf(parseInt(n.id, 10)) > -1 ? "�й�" == a ? o.unshift({
							name: a,
							value: n.id
						}) : o.push({
							name: a,
							value: n.id
						}) : c = !1 : "�й�" == a ? o.unshift({
							name: a,
							value: n.id
						}) : o.push({
							name: a,
							value: n.id
						}), c && i.opt.remove && i.opt.remove[e] && i.opt.remove[e].length > 0 && -1 != i.opt.remove[e].indexOf(parseInt(n.id, 10)) && ("�й�" == a ? o.shift() : o.pop());
					}), o = a.concat(o), h.call(i, e, o);
					var c = i.opt.data;
					c && c[e] && i[e].selected(c[e]), (v.call(i, e) || 0 == i.opt.display[e]) && i[e].container.hide(), (v.call(i, e) || "city" == e) && i.opt.onComplete && i.opt.onComplete.call(i), i.opt.onLoadComplete && i.opt.onLoadComplete.call(i, e, t);
				}
			});
		},
		h = function(t, e) {
			var i = this;
			i[t] = new o({
				container: i.selectors[t],
				label: s[t],
				data: e,
				disabled: i.opt.disabled,
				callback: function(e, n) {
					switch (t) {
						case "country":
							d.call(i, e, "province");
							break;

						case "province":
							d.call(i, e, "city");
					}
					switch (t) {
						case "country":
							i.province && i.province.container.hide(), i.province = null;

						case "province":
							i.city && i.city.container.hide(), i.city = null;
					}
					i.opt.onChange && i.opt.onChange(t, e, n);
				}
			}), i[t].container.show();
		},
		v = function(t) {
			return "loading" != this.status && (null == this[t] || 0 == this[t].opt.data.length);
		},
		g = {
			get: function(t) {
				return v.call(this, t) ? "" : this[t] && this[t].name || -1;
			},
			getAll: function() {
				return {
					country: this.get("country"),
					province: this.get("province"),
					city: this.get("city")
				};
			}
		};
	$.extend(c.prototype, g), i.exports = c;
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
			name: "�ʺ�����",
			url: "/cgi-bin/settingpage?t=setting/index&action=index"
		}, {
			id: "function",
			name: "��������",
			url: "/cgi-bin/settingpage?t=setting/function&action=function"
		}],
		mass: [{
			id: "send",
			name: "Ⱥ����Ϣ",
			url: "/cgi-bin/masssendpage?t=mass/send"
		}, {
			id: "list",
			name: "�ѷ���",
			url: "/cgi-bin/masssendpage?t=mass/list&action=history&begin=0&count=10"
		}],
		message: [{
			id: "total",
			name: "ȫ����Ϣ",
			url: "/cgi-bin/message?t=message/list&count=20&day=7"
		}, {
			id: "star",
			name: "���ղص���Ϣ",
			url: "/cgi-bin/message?t=message/list&count=20&action=star"
		}, {
			id: "search",
			name: "�������"
		}],
		media: [{
			id: "media11",
			name: "��Ʒ��Ϣ",
			acl: s && s.msg_acl && s.msg_acl.can_commodity_app_msg,
			url: "/cgi-bin/appmsg?begin=0&count=10&t=media/appmsg_list&type=11&action=list"
		}, {
			id: "media10",
			name: "ͼ����Ϣ",
			acl: s && s.msg_acl && s.msg_acl.can_app_msg,
			url: "/cgi-bin/appmsg?begin=0&count=10&t=media/appmsg_list2&type=10&action=list_card"
		}, {
			id: "media2",
			name: "ͼƬ��",
			acl: s && s.msg_acl && s.msg_acl.can_image_msg,
			url: "/cgi-bin/filepage?type=2&begin=0&count=12&t=media/img_list"
		}, {
			id: "media3",
			name: "����",
			acl: s && s.msg_acl && s.msg_acl.can_voice_msg,
			url: "/cgi-bin/filepage?type=3&begin=0&count=20&t=media/list"
		}, {
			id: "media15",
			name: "��Ƶ",
			acl: s && s.msg_acl && s.msg_acl.can_video_msg,
			url: "/cgi-bin/appmsg?begin=0&count=10&t=media/appmsg_list&type=15&action=list"
		}],
		business: [{
			id: "overview",
			name: "���ݸ���",
			url: "/merchant/business?t=business/overview&action=overview"
		}, {
			id: "order",
			name: "������ˮ",
			url: "/merchant/business?t=business/order&action=order"
		}, {
			id: "info",
			name: "�̻���Ϣ",
			url: "/merchant/business?t=business/info&action=info"
		}, {
			id: "test",
			name: "֧������",
			url: "/merchant/business?t=business/whitelist&action=whitelist"
		}, {
			id: "rights",
			name: "άȨ�ٲ�",
			url: "/merchant/shop_rights?t=business/rights_list&action=batchgetpayfeedback"
		}, {
			id: "course",
			name: "ʹ�ý̳�",
			url: "/merchant/business?t=business/course&action=course"
		}],
		user: [{
			id: "useradmin",
			name: "�ѹ�ע",
			url: "/cgi-bin/contactmanage?t=user/index&pagesize=10&pageidx=0&type=0&groupid=0"
		}],
		statistics: {
			user: [{
				id: "summary",
				name: "�û�����",
				url: "/misc/pluginloginpage?action=stat_user_summary&pluginid=luopan&t=statistics/index"
			}, {
				id: "attr",
				name: "�û�����",
				url: "/misc/pluginloginpage?action=stat_user_attr&pluginid=luopan&t=statistics/index"
			}],
			article: [{
				id: "detail",
				name: "ͼ��Ⱥ��",
				url: "/misc/pluginloginpage?action=stat_article_detail&pluginid=luopan&t=statistics/index"
			}, {
				id: "analyse",
				name: "ͼ��ͳ��",
				url: "/misc/pluginloginpage?action=stat_article_analyse&pluginid=luopan&t=statistics/index"
			}],
			message: [{
				id: "message",
				name: "��Ϣ����",
				url: "/misc/pluginloginpage?action=stat_message&pluginid=luopan&t=statistics/index"
			}, {
				id: "key",
				name: "��Ϣ�ؼ���",
				url: "/misc/pluginloginpage?action=ctr_keyword&pluginid=luopan&t=statistics/index"
			}],
			"interface": [{
				id: "interface",
				name: "�ӿڷ���",
				url: "/misc/pluginloginpage?action=stat_interface&pluginid=luopan&t=statistics/index"
			}]
		},
		notification: [{
			id: "notification",
			name: "֪ͨ����",
			url: "/cgi-bin/frame?t=notification/index_frame"
		}],
		templateMessage: [{
			id: "my_template",
			name: "�ҵ�ģ��",
			url: "/advanced/tmplmsg?action=list&t=tmplmsg/list"
		}, {
			id: "template_message",
			name: "ģ���",
			url: "/advanced/tmplmsg?action=tmpl_store&t=tmplmsg/store"
		}],
		assistant: [{
			id: "mphelper",
			name: "���ں�����",
			url: "/misc/assistant?t=setting/mphelper&action=mphelper"
		}, {
			id: "warning",
			name: "�ӿڸ澯",
			url: "/misc/assistant?t=setting/warning&action=warning"
		}],
		shop: [{
			id: "shopoverview",
			name: "С��ſ�",
			url: "/merchant/merchantstat?t=shop/overview&action=getoverview"
		}, {
			id: "addGoods",
			name: "�����Ʒ",
			url: "/merchant/goods?type=11&t=shop/precreate",
			target: "_blank"
		}, {
			id: "goodsManagement",
			name: "��Ʒ����",
			url: "/merchant/goodsgroup?t=shop/category&type=1"
		}, {
			id: "shelfManagement",
			name: "���ܹ���",
			url: "/merchant/shelf?status=0&action=get_shelflist&t=shop/myshelf&offset=0&count=5"
		}, {
			id: "orderManagement",
			name: "��������",
			url: "/merchant/productorder?action=getlist&t=shop/order_list&last_days=30&count=10&offset=0"
		}, {
			id: "deliverylist",
			name: "�˷�ģ�����",
			url: "/merchant/delivery?action=getlist&t=shop/delivery_list"
		}, {
			id: "images",
			name: "ͼƬ��",
			url: "/merchant/goodsimage?action=getimage&t=shop/shop_img&count=20&offset=0"
		}],
		adClient: [{
			id: "adclientreport",
			name: "����ͳ��",
			url: "/merchant/ad_client_report?t=ad_system/client_report&action=list"
		}, {
			id: "adclientmanage",
			name: "������",
			url: "/merchant/advert?t=ad_system/promotion_list&action=get_advert_count"
		}, {
			id: "materialmanage",
			name: "�ƹ�ҳ����",
			url: "/merchant/ad_material?t=material/list&action=get_material_list"
		}, {
			id: "adclientpay",
			name: "�������",
			url: "/cgi-bin/frame?nav=10026&t=ad_system/host_frame"
		}, {
			id: "adservice",
			name: "��������",
			acl: s && s.ad_system && s.ad_system.can_use_sp,
			url: "/cgi-bin/frame?nav=10026&t=ad_system/client_service_frame"
		}],
		adHost: [{
			id: "adhostreport",
			name: "����ͳ��",
			url: "/merchant/ad_host_report?t=ad_system/host_report"
		}, {
			id: "adhostmanage",
			name: "��������",
			url: "/merchant/ad_host_manage?t=ad_system/host_manage"
		}, {
			id: "adhostpay",
			name: "�������",
			url: "/merchant/ad_host_pay?action=ad_host_pay&t=ad_system/host_pay"
		}],
		advanced: [{
			id: "dev",
			name: "������",
			url: "/advanced/advanced?action=dev&t=advanced/dev"
		}, {
			id: "group-alert",
			name: "�ӿڱ���",
			url: "/advanced/advanced?action=alarm&t=advanced/alarm"
		}],
		cardticket: [{
			id: "cardmgr",
			name: "��ȯ����",
			url: "/merchant/electroniccardmgr?action=batch&t=cardticket/batch_card"
		}, {
			id: "permission",
			name: "��ȯ����",
			url: "/merchant/carduse?action=listchecker&t=cardticket/permission"
		}, {
			id: "carduse",
			name: "������¼",
			url: "/merchant/carduserecord?action=listrecord&t=cardticket/carduse_record"
		}, {
			id: "cardreport",
			name: "���ݱ���",
			url: "/merchant/ecardreport?action=overviewpage&t=cardticket/overviewpage"
		}],
		infringement: [{
			id: "infringement",
			name: "��ҪͶ��",
			url: "/acct/infringement?action=getmanual&t=infringement/manual&type=1"
		}, {
			id: "antiinfringement",
			name: "��Ҫ����",
			url: "/acct/infringement?action=getmanual&t=infringement/manual&type=2"
		}, {
			id: "list",
			name: "�ύ��¼",
			url: "/acct/infringement?action=getlist&t=infringement/ingringement_list&type=1"
		}],
		scan: [{
			id: "overview",
			name: "���ݸſ�",
			url: "/merchant/scandataoverview?action=keydata"
		}, {
			id: "product_list",
			name: "��Ʒ����",
			url: "/merchant/scanproductlist?action=list&page=1&status=1"
		}, {
			id: "barcode_list",
			name: "���ʹ���",
			url: "/merchant/scanqualification?action=getbusinesscategorylist&offset=0&limit=16"
		}, {
			id: "whitelist",
			name: "���԰�����",
			url: "/merchant/scanwhitelist?t=home/index&action=list"
		}],
		rumor: [{
			id: "list",
			name: "ҥ�Գ�",
			url: "/misc/rumor?action=rumorlist&t=rumor/list"
		}, {
			id: "result",
			name: "��ҥ���",
			url: "/misc/rumor?action=summarylist&t=rumor/result"
		}],
		reward: [{
			id: "list",
			name: "���ݸſ�",
			url: "/merchant/rewardstat?action=getoverview&t=reward/overview"
		}, {
			id: "invite",
			name: "����",
			url: "/merchant/invitation?action=info&t=reward/invitation"
		}, {
			id: "setting",
			name: "��������",
			url: "/merchant/reward?action=rewardsetting"
		}]
	}, s && s.merchant_acl && s.merchant_acl.can_use_account_manage && i.DATA.adClient.push({
		id: "adclientaccountmanage",
		name: "�˻�����",
		acl: s && s.ad_system && s.ad_system.can_use_account_manage,
		url: "/cgi-bin/frame?nav=10026&t=ad_system/account_frame"
	}), s && s.merchant_acl && s.merchant_acl.can_use_pay_tmpl && i.DATA.templateMessage.push({
		id: "template_pay_list",
		name: "֧��ģ����Ϣ",
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
define("mass/send.js", ["common/qq/mask.js", "common/wx/Tips.js", "common/wx/top.js", "common/wx/region.js", "biz_web/ui/dropdown.js", "safe/safe_check.js", "message/message_cgi.js", "common/wx/richEditor/msgSender.js", "common/wx/dialog.js", "biz_web/ui/checkbox.js", "common/wx/Cgi.js", "cardticket/parse_data.js", "common/wx/verifycode.js"], function(e) {
	"use strict";

	function t() {
		var e = {
			acl: wx.acl.msg_acl,
			onClick: function(e, t, s, n) {
				1 == n && ($("#ifDiscuss").hide(), p.checked(!1));
			},
			onSelect: function(e) {
				10 != e ? ($("#ifDiscuss").hide(), p.checked(!1)) : ($("#ifDiscuss").show(), p.checked(!0));
			}
		};
		"10" == wx.cgiData.type ? (j = new d($("#js_msgSender"), $.extend({
			data: {
				type: 10,
				data: wx.cgiData.info
			}
		}, e)), $("#ifDiscuss").show()) : j = new d($("#js_msgSender"), $.extend({
			data: {
				type: 10
			}
		}, e)), $("#appmsgPopBt").click(function() {
			j.op[10].pop();
		});
	} {
		var s = wx.cgiData,
			n = (s.need_verify_code, e("common/qq/mask.js"), e("common/wx/Tips.js")),
			c = e("common/wx/top.js"),
			o = e("common/wx/region.js"),
			a = e("biz_web/ui/dropdown.js"),
			i = e("safe/safe_check.js"),
			r = e("message/message_cgi.js"),
			d = e("common/wx/richEditor/msgSender.js"),
			u = e("common/wx/dialog.js");
		e("biz_web/ui/checkbox.js");
	}
	new c("#topTab", c.DATA.mass).selected(0);
	for (var m = $("#toTencentMicroblog").checkbox(), l = $("#toTencentNews").checkbox(), _ = $("#js_toQQBrowser").checkbox(), p = $("#forDiscuss").checkbox(), g = new o({
		container: "#js_region",
		data: {},
		list: {
			country: [{
				id: -1,
				name: "ȫ��"
			}],
			province: [],
			city: []
		}
	}), f = [], w = 0; w < s.group.length; ++w) {
		var b = s.group[w];
		f.push({
			name: b.name,
			value: b.id
		});
	}
	var h = new a({
			container: "#js_group",
			data: f,
			callback: function() {}
		}),
		x = new a({
			container: "#js_sex",
			data: [{
				name: "ȫ��",
				value: "0"
			}, {
				name: "��",
				value: "1"
			}, {
				name: "Ů",
				value: "2"
			}],
			callback: function() {}
		}),
		y = new a({
			container: "#js_sendObj",
			data: [{
				name: "ȫ���û�",
				value: "-1"
			}, {
				name: "������ѡ��",
				value: "group"
			}],
			callback: function(e) {
				"-1" == e ? $("#js_group").hide() : $("#js_group").show();
			}
		});
	y.selected(0), h.selected(0), x.selected(0), $("#leftNum").html(s.mass_send_left), s.mass_send_left <= 0 && $("#js_submit").disable("btn_disabled");
	var j, v = e("common/wx/Cgi.js"),
		k = e("cardticket/parse_data.js");
	s.cardid ? v.get({
		url: "/merchant/electroniccardmgr?action=get&card_id=" + s.cardid,
		error: function() {
			t();
		}
	}, function(e) {
		if (0 == e.base_resp.ret) {
			var n = $.parseJSON(e.card_detail);
			n = k.parse_cardticket(n), n.card_type = n.type, n.cardnum = s.cardnum, n.type = 16, j = new d($("#js_msgSender"), {
				data: n,
				acl: wx.acl.msg_acl
			});
		} else t();
	}) : t(); {
		var q = null,
			C = $("#verifycode");
		e("common/wx/verifycode.js");
	}
	$("#js_submit").click(function() {
			function e(e) {
				r.masssend(o, function() {
					C.html("").hide(), q = null, e || (location.href = wx.url("/cgi-bin/masssendpage?t=mass/list&action=history&begin=0&count=10"));
				}, function(e) {
					a.btn(!0), e && e.base_resp && "-8" == e.base_resp.ret && (q = C.html("").show().verifycode().data("verifycode"),
						q.focus());
				});
			}

			function t() {
				u.show({
					type: "info",
					msg: "����ȷ��|��Ϣ��ʼȺ�����޷��������Ƿ�ȷ��Ⱥ����",
					mask: !0,
					buttons: [{
						text: "ȷ��",
						click: function() {
							a.btn(!1), e(!1), this.remove();
						}
					}, {
						text: "ȡ��",
						type: "normal",
						click: function() {
							a.btn(!0), this.remove();
						}
					}]
				});
			}
			var c = j.getData(),
				o = {},
				a = $(this);
			if (!a.hasClass("btn_disabled") && !c.error) {
				a.btn(!1), c = c.data, o.type = c.type, o.appmsgid = c.app_id, o.fileid = c.file_id, o.content = c.content,
					o.cardid = c.cardid, o.cardquantity = c.cardnum, o.cardlimit = 0 == c.cardnum ? 0 : 1, o.sex = x.value,
					o.groupid = y.value, "group" == y.value && (o.groupid = h.value), o.synctxweibo = m.value() ? 1 : 0,
					o.enablecomment = p.value() ? 1 : 0, $("#toTencentNews").length && (o.synctxnews = l.value() ? 1 : 0),
					$("#js_toQQBrowser").length && (o.syncqqbrowser = _.value() ? 1 : 0);
				var d = g.getAll();
				if (o.country = "-1" == d.country || "ȫ��" == d.country ? "" : d.country, o.province = "-1" == d.province ? "" : d.province,
					o.city = "-1" == d.city ? "" : d.city, null != q && q.getCode().trim().length <= 0) return n.err("��������֤��"),
					q.focus(), void a.btn(!0);
				o.imgcode = q && q.getCode().trim(), o.operation_seq = s.operation_seq;
				var f = s.strategy_status;
				f.third_status = s.third_status, f.bind_mail = s.bind_mail, f ? f.wx_protect && f.wx_alias ? (f.source = "msgs",
					f.msgid = s.operation_seq, f.distinguish = !0, i.check(f, function(s) {
						s && s.code && "wx.pass" != s.code ? (o.code = s.code, e(-1 == s.type ? !0 : !1), a.btn(!0)) : t();
					}, {
						onClose: function() {
							a.btn(!0);
						},
						checkdom: ".js_wxcheck0"
					})) : f.wx_alias && "1" == s.gray_status ? i.off_protect_tip(function() {
					i.bind("bind_masssend", f, function(e) {
						n.suc("΢�ű��������ɹ�"), s.strategy_status.wx_alias = e.wx_name, s.strategy_status.wx_protect = 1,
							s.strategy_status.protect_status = 2, a.btn(!0);
					}, {
						onClose: function() {
							a.btn(!0);
						}
					});
				}, {
					onClose: function() {
						a.btn(!0);
					}
				}) : "1" == s.gray_status ? i.no_helper_tip(function() {
					i.bind("bind_masssend", f, function(e) {
						n.suc("΢�ű��������ɹ�"), s.strategy_status.wx_alias = e.wx_name, s.strategy_status.wx_protect = 1,
							s.strategy_status.protect_status = 2, a.btn(!0);
					}, {
						onClose: function() {
							a.btn(!0);
						}
					});
				}, {
					onClose: function() {
						a.btn(!0);
					}
				}) : t() : t();
			}
		}),
		function() {
			var e = "https://mp.weixin.qq.com/misc/setsyncweibo?type=bind&from=masssendpage&token=" + wx.data.t;
			$("#bindTencentMicroblog").attr("href", "https://open.t.qq.com/cgi-bin/oauth2/authorize?client_id=801271399&response_type=code&redirect_uri=" + encodeURIComponent(e));
			var t = wx.cgiData.errcode;
			"" != t && n.err("10000" == t ? "ѡ������Ѷ΢���ʺ��Ѿ����������ںŰ󶨣���ʧ��" : "��ʧ�ܣ����Ժ�����");
		}();
});