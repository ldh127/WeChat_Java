define("home/index.js", ["common/wx/Cgi.js", "common/wx/dialog.js", "biz_common/moment.js", "biz_common/cookie.js", "common/wx/pagebar.js", "common/wx/popup.js", "common/wx/Tips.js", "common/wx/popover.js"], function(e) {
	"use strict";
	var n = template.render,
		t = e("common/wx/Cgi.js"),
		i = e("common/wx/dialog.js"),
		o = e("biz_common/moment.js"),
		a = e("biz_common/cookie.js"),
		s = e("common/wx/pagebar.js"),
		r = (e("common/wx/popup.js"),
			e("common/wx/Tips.js")),
		c = e("common/wx/popover.js"),
		m = wx.cgiData;
	! function() {
		var e, i, o = $("#js_div_bank_verify"),
			a = new Date(1e3 * wx.cgiData.bank_deadline),
			s = a.getMonth() + 1 + "鏈�" + a.getDate() + "鏃�";
		$("#js_div_bank_deadline").html(s);
		var m, u = !0;
		$("#js_btn_show_bank_verify").length > 0 && (m = new c({
				dom: "#js_btn_show_bank_verify",
				content: n("tpl_bank_verify", {}),
				place: "bottom",
				margin: "center",
				hover: !1
			}), m.hide(), e = $("#js_btn_bank_verify_submit"), i = $("#js_input_bank_verify_code"),
			$("#js_btn_show_bank_verify").on("click", function() {
				u ? m.show() : m.hide(), u = !u;
			}), e.click(function() {
				var n = $.trim(i.val());
				return "" == n ? (r.err("璇疯緭鍏ラ獙璇佺爜"), !1) : n.length < 6 ? (r.err("楠岃瘉鐮佷负6浣嶆暟瀛�"), !1) : (e.btn(!1), void t.post({
					url: "/acct/bankacctinfo",
					data: {
						action: "verify",
						code: n
					},
					mask: !1
				}, function(n) {
					e.btn(!0);
					var t = 5;
					0 == n.base_resp.ret ? 1 == n.success ? (r.suc("楠岃瘉鎴愬姛锛屽彲姝ｅ父浣跨敤鍏紬骞冲彴"), m.remove(), o.hide()) : r.err("楠岃瘉鐮佽緭鍏ラ敊璇紝浣犺繕鏈�" + n.left_times + "娆℃満浼氬～鍐欙紝3娆￠敊璇笎鍙峰皢琚喕缁�", t) : 91 == n.base_resp.ret ? r.suc("浣犲凡缁忔垚鍔熼獙璇佽繃鎵撴鐨勫娉ㄧ爜锛岃鍕块噸澶嶉獙璇�", t) : 72 == n.base_resp.ret ? r.suc("浣犲凡鎴愬姛楠岃瘉杩囨墦娆惧娉ㄧ爜锛岃鍕块噸澶嶉獙璇�", t) : 63 == n.base_resp.ret ? r.suc("鎮ㄥ凡缁忕敤瀹�3娆″～鍐欐満浼氾紝甯愬彿灏嗚鍐荤粨", t) : 62 == n.base_resp.ret ? r.suc("鎮ㄥ凡缁忓娆￠噸濉け璐ワ紝鏃犳硶鍐嶆鎻愪氦瀵瑰叕甯愬彿淇℃伅锛屽笎鍙峰皢琚喕缁�", t) : 61 == n.base_resp.ret ? r.suc("宸茬粡杩囨湡锛屾棤娉曟彁浜ゅ鍏笎鍙蜂俊鎭紝甯愬彿灏嗚鍐荤粨", t) : r.err("绯荤粺閿欒锛岃閲嶈瘯");
				}));
			}));
	}(),
	function() {
		if (1 == m.show_verify_warning) {
			var e = new Date(1e3 * m.verify_deadline),
				n = "%s骞�%s鏈�%s鏃�".sprintf(e.getFullYear(), e.getMonth() + 1, e.getDate()),
				t = "璁よ瘉鎻愰啋|鐢变簬鏈獙璇佷富浣撶湡瀹炴€э紝鏆傛椂鏃犳硶浣跨敤鍏紬骞冲彴缇ゅ彂鍔熻兘鍜岄珮绾у姛鑳斤紝璇峰敖蹇敵璇峰井淇¤璇併€傚鏋滃湪%s涔嬪墠鏈敵璇峰井淇¤璇侊紝璇ュ叕浼楀笎鍙峰皢琚敞閿€銆�".sprintf(n);
			1 == wx.cgiData.nickname_invade && (t += "浣犵敵璇风殑鍏紬甯愬彿鍚嶇О闇€瑕佽繘涓€姝ユ彁浜ょ浉搴旇祫鏂欙紝浣犲彲鍦ㄨ璇佹祦绋嬩腑瀹屾垚鍚嶇О淇敼銆�"); {
				i.show({
					type: "info",
					title: "鎻愰啋",
					msg: t,
					buttons: [{
						text: "鍘昏璇�",
						click: function() {
							location.href = wx.url("/acct/wxverify?action=step&t=wxverify/index&step=proto");
						}
					}, {
						text: "鍙栨秷",
						type: "normal",
						click: function() {
							this.hide();
						}
					}]
				});
			}
		}
	}(),
	function() {
		var e = a.get("annual_review_dialog");
		if (1 == m.wxverify_annual_review && !e) {
			a.set("annual_review_dialog", 1, 1, {
				domain: "mp.weixin.qq.com"
			});
			var n;
			n = 1e3 * m.wxverify_expired_time > +new Date ? "浣犵殑寰俊璁よ瘉鍗冲皢鍒版湡锛岃灏藉揩杩涜骞村|浣犲ソ锛屼綘鐨勫井淇¤璇佸皢浜�%s鍒版湡锛岃灏藉揩杩涜璁よ瘉骞村锛屽惁鍒欏皢澶卞幓璁よ瘉鏍囪瘑鍜岀浉鍏虫帴鍙ｆ潈闄愨€斺€旇闃呭彿灏嗘棤娉曚娇鐢ㄨ嚜瀹氫箟鑿滃崟锛屾湇鍔″彿鐨勯珮绾ф帴鍙ｃ€佸瀹㈡湇鎺ュ彛鍙婂井淇℃敮浠樻帴鍙ｅ皢琚仠鐢ㄣ€�".sprintf("<span class='mini_tips warn'>" + o.unix(m.wxverify_expired_time).format("YYYY骞碝M鏈圖D鏃�") + "</span>") : "浣犵殑寰俊璁よ瘉鍗冲皢鍒版湡锛岃灏藉揩杩涜骞村|浣犲ソ锛岃灏藉揩杩涜璁よ瘉骞村锛屽惁鍒欏皢澶卞幓璁よ瘉鏍囪瘑鍜岀浉鍏虫帴鍙ｆ潈闄愨€斺€旇闃呭彿灏嗘棤娉曚娇鐢ㄨ嚜瀹氫箟鑿滃崟锛屾湇鍔″彿鐨勯珮绾ф帴鍙ｃ€佸瀹㈡湇鎺ュ彛鍙婂井淇℃敮浠樻帴鍙ｅ皢琚仠鐢ㄣ€�"; {
				i.show({
					type: "info",
					title: "寰俊璁よ瘉鎻愮ず",
					msg: n,
					buttons: [{
						text: "鍘昏璇�",
						click: function() {
							location.href = wx.url("/acct/wxverify?action=step&t=wxverify/index&step=proto");
						}
					}, {
						text: "鍙栨秷",
						type: "normal",
						click: function() {
							this.hide();
						}
					}]
				});
			}
		}
	}(),
	function() {
		var e = a.get("noticeLoginFlag");
		seajs.use("biz_web/lib/store.js", function() {
			"0" != e && e && t.get({
				mask: !1,
				url: wx.url("/cgi-bin/sysnotify?f=json&begin=0&count=5")
			}, function(e) {
				if (e && e.base_resp && 0 == e.base_resp.ret && e.Count) {
					for (var n = [], t = e.List, i = e.Count, o = function(e, n) {
						var t = {
								1: "浣犵殑缇ゅ彂",
								2: "浣犵殑寮€鍙戣€呯敵璇�",
								3: "浣犵殑澶村儚鏇存敼",
								4: "浣犵殑鏄电О淇敼",
								5: "浣犵殑鍔熻兘浠嬬粛鏇存敼",
								6: "浣犵殑淇℃伅鐧昏",
								7: "浣犵殑淇℃伅鐧昏",
								8: "浣犵殑淇℃伅鐧昏",
								9: "浣犵殑淇℃伅鐧昏",
								10: "浣犵殑淇℃伅鐧昏",
								11: "浣犵殑鑷畾涔夎彍鍗曠敵璇�",
								12: "浣犵殑鍟嗘埛鍔熻兘鏉冮檺鐢宠",
								14: "寰俊鏀粯",
								15: "寰俊鏀粯",
								16: "寰俊鏀粯",
								18: "寰俊璁よ瘉",
								19: "寰俊璁よ瘉",
								22: "鍟嗘埛鍔熻兘鍒濆",
								23: "妯℃澘娑堟伅鐢宠",
								24: "鍟嗗搧璐拱娴嬭瘯閾炬帴",
								26: "淇敼鍟嗘埛鍔熻兘璁剧疆"
							},
							i = "";
						return 3 == n ? i = "宸茬粡閫氳繃瀹℃牳" : 2 == n && (i = "瀹℃牳涓嶉€氳繃"), "undefined" != typeof t[e] ? t[e] + i : "";
					}, s = 0; i > s; ++s) {
						var r = t[s];
						n.push({
							text: 1 == r.NotifyMsgType ? o(r.CheckType, r.CheckStatus) : r.Title,
							url: wx.url("/cgi-bin/frame?t=notification/index_frame&selectid=" + r.Id),
							level: r.Level
						});
					}
					seajs.use("common/wx/noticeBox", function(e) {
						new e({
							container: "#accountArea",
							list: n
						}), $("#accountArea .jsNoticeClose").click(function() {
							a.set("noticeLoginFlag", 0, null, {
								path: "/"
							}), $("#accountArea").unbind("mouseover").removeClass("on").find(".account_message_box").remove();
						});
					});
				}
			});
		});
	}(),
	function() {
		{
			var e = wx.cgiData.total_count,
				n = wx.cgiData.count,
				t = wx.cgiData.begin;
			new s({
				container: ".pageNavigator",
				perPage: n,
				first: !1,
				last: !1,
				isSimple: !0,
				initShowPage: t,
				totalItemsNum: e,
				callback: function(e) {
					var n = e.currentPage;
					if (n != t) return n--, location.href = wx.url("/cgi-bin/home?t=home/index&start=" + (n + 1)), !1;
				}
			});
		}
	}();
});