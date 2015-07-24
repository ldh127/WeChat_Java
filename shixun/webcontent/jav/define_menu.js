define("tpl/tooltips.html.js", [], function() {
	return '<div class="popover {parentClass}" style="display:none;position:{container_mode};{if offset.left}left:{offset.left}px;top:{offset.top}px;{/if}">\n    <div class="popover_inner">\n        <div class="popover_content">{=content}</div>\n        {if container_close}\n        <!--#0001#-->\n        <a href="javascript:;" class="popover_close icon16_common close_flat js_popover_close">关闭</a>\n        <!--%0001%-->\n        {/if}\n        {if buttons.length > 0}\n        <div class="popover_bar">\n			{each buttons as o index}\n			<a onclick="return false;" href="javascript:;" class="btn {o.type}">{o.text}</a>\n			{/each}\n        </div>\n        {/if}\n    </div>\n    <i class="popover_arrow popover_arrow_out"></i>\n    <i class="popover_arrow popover_arrow_in"></i>\n</div>\n';
});
define("tpl/homepage/appmsglist.html.js", [], function() {
	return '<div class="select_list">\n	{if app_msg_list.length > 0}\n    {each app_msg_list as item}\n    {if multi}\n    <label class="select_list_item frm_checkbox_label selected">\n        <span class="lbl_content list_item_date ">{item.update_time} </span>\n        <i class="icon_checkbox"> </i>\n        <span class="list_item_title lbl_content"> {item.title} </span>\n        <input type="checkbox" name="appmsgid" class="frm_checkbox js_appmsgid" value="{item.aid}" {if item.checkbox}checked="checked" {/if}>\n    </label>\n    {else}\n    <label class="select_list_item frm_radio_label {if item.checkbox}selected {/if}">\n        <span class="lbl_content list_item_date ">{item.update_time} </span>\n        <i class="icon_radio"></i>\n        <span class="lbl_content list_item_title ">{item.title} </span>\n        <input type="radio" name="appmsgid" value="{item.aid}" class="frm_radio js_appmsgid" {if item.checkbox}checked {/if}>\n	</label>\n    {/if}\n    {/each}\n    {else}\n    <p class="no_appmsg">暂无图文消息</p>\n    {/if}\n</div>\n\n';
});
define("tpl/homepage/appmsgdialog.html.js", [], function() {
	return '<script type="text/html" id="appmsgdialogtpl" >\n    <div class="select_list_container">\n        <div class="select_list_hd global_mod float_layout">\n            <div class="global_info">\n                <span class="frm_input_box search append">\n                    <a href="javascript:;" class="frm_input_append" id="a_search"><i class="icon16_common search_gray">搜索</i>&nbsp; </a>\n                    <input type="text" placeholder="搜索相关文章" value="" class="frm_input js_search">\n                </span>\n            </div>\n            <div class="global_extra">你还可以勾选<span id=\'remaincnt\'></span>篇文章\n                <!--<a href="javascript:;" class="btn btn_add btn_primary">-->\n                    <!--<i class="icon14_common add_white"></i>新建文章-->\n                <!--</a>-->\n            </div>\n        </div>\n        <div class="select_list_bd">\n            <!--BEGIN loading-->\n            <div class="loading_area js_loading" >\n                <span class="vm_box"></span>\n                <i class="icon_loading_small white"></i>\n            </div><!--END loading-->\n            <div id=\'listContainer\' style="display: none;">\n            </div>\n        </div>\n        <div class="select_list_ft">\n            <div class="pagination_wrp js_pager">\n\n            </div>\n        </div>\n    </div>\n</script>\n';
});
define("tpl/cardticket/card_quantity.html.js", [], function() {
	return '<div class="pop_store">\n	<!--增减库存-->\n	{if setquantity}\n	<div class="frm_control_group">\n        <div class="frm_controls">\n			<label class="frm_radio_label selected">\n				<i class="icon_radio"></i>\n				<span class="lbl_content">增加</span>\n				<input type="radio" name="isadd" checked value="1" class="frm_radio js_quantity_type">\n			</label>\n			<label class="frm_radio_label">\n				<i class="icon_radio"></i>\n				<span class="lbl_content">减少</span>\n				<input type="radio" name="isadd" value="0" class="frm_radio js_quantity_type">\n			</label>\n		</div>\n	</div>\n	{/if}\n	<div class="frm_control_group">                        \n		<div class="frm_controls">\n			<div class="frm_controls_hint group">\n				<span class="frm_input_box"><input type="text" class="frm_input js_value"></span>\n				<span class="frm_hint">份</span>\n			</div>\n			<p class="frm_tips fail">库存不能少于1</p>\n		</div>\n	</div>\n	<!--增减库存 end-->\n</div>';
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
define("tpl/step.html.js", [], function(e, t, n) {
	return '<ul class="processor_bar grid_line">\n    {each stepArr as item index}\n    <li class="{if (index+1==length)}no_extra{/if} step grid_item size1of{length} {item.cls}">\n        <h4>{item.name}</h4>\n    </li>\n    {/each}\n</ul>\n';
});
define("biz_web/ui/input/lentips.js", [], function() {
	"use strict";
	var n = "&nbsp;<em>/</em>&nbsp;",
		t = function(t) {
			var e = t.input,
				i = t.tip,
				l = t.className,
				a = t.trim || !0,
				s = t.seg || n,
				m = t.maxlimit,
				u = function() {
					var n = e.val();
					a && (n = $.trim(n)), i.html(n.length + s + m), n.length > m ? i.addClass(l) : i.removeClass(l),
						t.callback && t.callback(n.length > m, {
							len: n.length,
							maxlimit: m,
							value: n
						});
				};
			u(), e.keyup(function() {
				u();
			});
		};
	return t;
});
define("tpl/homepage/plugins/plugin2_edit/cate_list_edit.html.js", [], function() {
	return '<div>\n    <!--BEGIN 填写tab分类-->\n    <div class="section_form">\n        <div class="frm_control_group">\n            <a class="opr js_del_cate" href="javascript:void(0);">删除</a>\n            <label for="" class="frm_label">分类名称</label>\n            <div class="frm_controls">\n                <span class="frm_input_box with_counter counter_in append">\n                    <input type="text" class="frm_input js_cate_input">\n                    <em class="frm_input_append frm_counter js_cate_input_len_tips"></em>\n                </span>\n            </div>\n        </div>\n    </div>\n    <!--END 填写tab分类-->\n    <div class="js_import_appmsglist"></div>\n</div>';
});
define("homepage/appmsgdialog.js", ["common/wx/Cgi.js", "common/wx/Tips.js", "biz_web/ui/checkbox.js", "common/wx/time.js", "common/wx/pagebar.js", "common/wx/popup.js", "tpl/homepage/appmsgdialog.html.js", "tpl/homepage/appmsglist.html.js"], function(t, e, i) {
	"use strict";

	function a(t) {
		return this._init(t), this;
	}
	var c = t("common/wx/Cgi.js"),
		s = t("common/wx/Tips.js"),
		n = (t("biz_web/ui/checkbox.js"),
			t("common/wx/time.js")),
		l = (wx.T, t("common/wx/pagebar.js")),
		o = (t("common/wx/popup.js"),
			t("tpl/homepage/appmsgdialog.html.js")),
		g = t("tpl/homepage/appmsglist.html.js");
	a.prototype._init = function(t) {
		var e = this;
		this.perPage = t.perPage || 10, this._cfg = t, this._cfg.selectData = [], "undefined" == typeof this._cfg.multi && (this._cfg.multi = !0),
			"undefined" == typeof this._cfg.maxNum && 1 == this._cfg.multi && (this._cfg.maxNum = 1e4),
			this.dlgtpl = this._cfg.dlgtpl || o, this.msglisttpl = this._cfg.msglisttpl || g, this._mDlg = e._buildDialog(),
			this._bindEvent(this._mDlg);
	}, a.prototype._buildList = function(t, e) {
		var i = this,
			a = this._formatData(e);
		t.find("#listContainer").html(template.compile(this.msglisttpl)({
			app_msg_list: a,
			multi: i._cfg.multi
		})).show(), t.find(".js_loading").hide();
		t.find(".js_appmsgid").checkbox({
			multi: i._cfg.multi,
			onChanged: function(t) {
				if (i._cfg.multi === !0) {
					if (t[0].checked) i._cfg.selectData.length >= i._cfg.maxNum ? ($(t[0]).checkbox().checked(!1),
						s.err("最多只能选择%s篇文章".sprintf(i._cfg.maxNum))) : $.each(a, function(e, c) {
						c.aid == t[0].value && i._cfg.selectData.push(a[e]);
					});
					else {
						var e = [];
						$.each(i._cfg.selectData, function(a) {
							i._cfg.selectData[a].aid != t[0].value && e.push(i._cfg.selectData[a]);
						}), i._cfg.selectData = e;
					}
					i._countTotal(i._cfg.maxNum - i._cfg.selectData.length);
				} else i._cfg.selectData = [], $.each(a, function(e, c) {
					c.aid == t[0].value && i._cfg.selectData.push(a[e]);
				});
			}
		});
	}, a.prototype._countTotal = function(t) {
		0 == this._cfg.multi && this._mDlg.find(".global_extra").hide(), t >= 0 ? this._mDlg.find("#remaincnt").text(t) : s.err("最多只能选择30篇文章");
	}, a.prototype._getData = function(t, e) {
		"undefined" != typeof this._mDlg && (this._mDlg.find(".js_loading").show(), this._mDlg.find("#listContainer").hide());
		var i = this,
			a = $.extend({
				action: "list_ex",
				begin: 0,
				count: i.perPage,
				query: ""
			}, e);
		c.post({
			url: "/cgi-bin/appmsg",
			data: a,
			success: function(e) {
				e && 0 == e.base_resp.ret ? (console.log(e), i.retData = e.app_msg_list, i.totalnum = e.app_msg_cnt,
					t(e)) : s.err("系统错误");
			}
		});
	}, a.prototype._formatData = function(t) {
		var e = [];
		return t && t.app_msg_list && (e = t.app_msg_list), $.each(this._cfg.selectData, function(t, i) {
			$.each(e, function(t, a) {
				i.aid == a.aid && (e[t].checkbox = !0);
			});
		}), $.each(e, function(t, i) {
			e[t].update_time = n.formatDate(new Date(1e3 * i.update_time), "YYYY年MM月DD日");
		}), e;
	}, a.prototype._buildDialog = function() {
		var t = this,
			e = $(this.dlgtpl).popup({
				title: t._cfg.title || "从素材管理中选择",
				buttons: [{
					text: "确定",
					click: function() {
						t._cfg.selectData.length > 0 && (1 == t._cfg.multi && t._cfg.selectData.length <= t._cfg.maxNum || 0 == t._cfg.multi) ? (t._cb(t._cfg.selectData),
							e.popup("remove")) : 0 == t._cfg.selectData.length ? s.err("请选择至少一篇图文") : 1 == t._cfg.multi && t._cfg.selectData.length > t._cfg.maxNum && s.err("最多只能选择30篇文章");
					},
					type: "primary"
				}, {
					text: "取消",
					click: function() {
						e.popup("remove");
					},
					type: "default"
				}],
				mask: !0,
				className: "align_edge"
			});
		return this._getData(function(i) {
			t._buildList(e, i), t._initPageBar({
				totalnum: t.totalnum,
				perpage: t.perPage,
				currentpage: 1
			});
		}), e;
	}, a.prototype._bindEvent = function(t) {
		var e = this;
		t.find("#a_search").on("click", function() {
			var i = $.trim(t.find(".js_search").val());
			e._getData(function(i) {
				e._buildList(t, i), e._initPageBar({
					totalnum: e.totalnum,
					perpage: e.perPage,
					currentpage: 1
				});
			}, {
				query: i
			});
		}), t.find(".js_search").keyup(function(e) {
			var i = "which" in e ? e.which : e.keyCode;
			console.log(t.find(".js_search").val()), (13 == i || "" == t.find(".js_search").val()) && t.find("#a_search").trigger("click");
		}), e._countTotal(e._cfg.maxNum);
	}, a.prototype._initPageBar = function(t) {
		{
			var e = this,
				i = this._mDlg.find(".js_search").val(),
				a = t && t.currentpage,
				c = t && t.perpage,
				s = t && t.totalnum;
			new l({
				container: e._mDlg.find(".js_pager"),
				perPage: c,
				initShowPage: a,
				totalItemsNum: s,
				first: !1,
				last: !1,
				isSimple: !0,
				callback: function(t) {
					var s = t.currentPage;
					s != a && (a = s, e._getData(function(t) {
						e._buildList(e._mDlg, t);
					}, {
						begin: (a - 1) * c,
						query: i
					}));
				}
			});
		}
	}, a.prototype._cb = function(t) {
		this._cfg && this._cfg.callback && "function" == typeof this._cfg.callback && this._cfg.callback(t);
	}, i.exports = a;
});
define("tpl/homepage/importAppmsgList/item.html.js", [], function() {
	return '{each appmsg_list as item idx}\n    <div class="article js_article" data-idx="{idx}" data-aid="{item.aid}">\n        <a class="opr js_del" href="javascript:;" data-idx="{idx}">删除</a>\n        <a class="opr icon14_common sort_gray js_sort_item" style="display:none;" href="javascript:;">排序</a>\n        <p class="title"><a href="{item.link}" target="_blank">{item.title}</a></p>\n    </div>\n{/each}';
});
define("tpl/homepage/importAppmsgList/layout.html.js", [], function() {
	return '<div>\n    <div class="editor_hd">\n    </div>\n    <div class="editor_bd">\n        <div class="editor_toolbar">\n            <div class="ext">\n                <a class="btn btn_default js_import" href="javascript:;">添加</a>\n                <a class="btn btn_default js_sort" href="javascript:;">排序</a>\n                <a class="btn btn_primary js_sort_sure" href="javascript:;">保存</a>\n                <a class="btn btn_default js_sort_cancle" href="javascript:;">取消</a>\n            </div>\n            <h4 class="title">{title}</h4>\n            <p class="counter"><span class="js_select_num"></span>/<span class="js_max_num"></span></p>\n        </div>\n        <div class="articles js_appmsg_list">\n        </div>\n    </div>\n</div>';
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
define("tpl/media/dialog/image_group.html.js", [], function() {
	return '{each file_group_list.file_group as item}\n<dd id="js_group{item.id}" class="inner_menu_item js_groupitem{if item.id == group} selected{/if}" data-groupid="{item.id}">\n    <a href="javascript:;" class="inner_menu_link" title="{item.name}" onclick="return false">\n        <strong>{item.name}</strong><em class="num">(<span>{item.count}</span>)</em>\n    </a>\n</dd>\n{/each}\n';
});
define("tpl/media/dialog/image_list.html.js", [], function() {
	return '{if file_item.length == 0}\n<div class="empty_tips">该分组暂时没有图片素材</div>\n{else}\n{each file_item as item}\n<li class="img_item js_imageitem" data-id="{item.file_id}" data-url="{item.cdn_url}" data-format="{item.img_format}">\n    <label class="frm_checkbox_label{if item.selected} selected{/if} img_item_bd">\n        {if scene == \'cdn\' && item.cdn_url}\n        <img src="{item.cdn_url}" alt="{item.name}" class="pic">\n        {else}\n        <img src="{item.img_url}" alt="{item.name}" class="pic">\n        {/if}\n        <span class="lbl_content">{item.name}</span>\n        <div class="selected_mask">\n            <div class="selected_mask_inner"></div>\n            <div class="selected_mask_icon"></div>\n        </div>\n    </label>\n</li>\n{/each}\n{/if}\n';
});
define("tpl/media/dialog/image_layout.html.js", [], function() {
	return '<div class="img_pick_panel inner_container_box side_l cell_layout">\n    <div class="inner_side">\n        <div class="group_list">\n            <div class="inner_menu_box">\n                <dl class="inner_menu js_group"></dl>\n            </div>                    \n        </div>\n    </div>\n    <div class="inner_main">\n        <div class="img_pick_area">\n            <div class="sub_title_bar in_dialog">\n                <div class="upload_box r align_right">\n                    <span class="upload_area"><a id="js_imageupload" class="btn btn_primary js_imageupload" data-groupid="">本地上传</a></span>\n                </div>\n                {if desc}\n                <div class="bubble_tips bubble_right warn r">\n                    <div class="bubble_tips_inner">{desc}</div> \n                    <i class="bubble_tips_arrow out"></i>\n                    <i class="bubble_tips_arrow in"></i>\n                </div>\n                {/if}\n            </div>\n            <div>\n                <div class="img_pick">\n                    <i class="icon_loading_small white js_loading"></i>\n                    <ul class="group js_list img_list"></ul>\n                </div>\n                <div class="js_pagebar"></div>\n            </div>\n        </div>\n    </div>\n    <p class="dialog_ft_desc">已选<span class="js_selected">0</span>个，可选{maxSelect}个</p>\n</div>\n';
});
define("tpl/biz_web/ui/checkbox.html.js", [], function(e, t, n) {
	return '<label for="_checkbox_{index}" class="frm_{type}_label">\n	<i class="icon_{type}"></i>\n	<input type="{type}" class="frm_{type}" name="{name}" id="_checkbox_{index}">\n	<span class="lbl_content">{label}</span>\n</label>';
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
define("tpl/homepage/plugins/plugin3_edit.html.js", [], function() {
	return '<div class="portable_editor to_left">\n    <div class="editor_inner">\n        <!--BEGIN editor_bd-->\n        <div class="editor_bd js_import_appmsglist">\n        </div>\n        <!--END editor_bd-->\n        <span class="editor_arrow_wrp">\n            <i class="editor_arrow editor_arrow_out"></i>\n            <i class="editor_arrow editor_arrow_in"></i>\n        </span>\n    </div>\n</div>';
});
define("tpl/homepage/plugins/plugin3.html.js", [], function() {
	return '<div class="article_list">\n    {{each (<name>.plugin3.appmsg_list as key appmsg)}}\n    <a class="list_item" href="javascript:void(0);">\n        <div class="cover">\n            <img class="img" src="{{appmsg.cover}}" alt="">\n            <i class="default_thumb"></i>\n        </div>\n        <div class="cont">\n            <h2 class="title">{{appmsg.title}}</h2>\n            <p class="desc">{{appmsg.digest}}</p>\n        </div>\n    </a>\n    {{/each}}\n</div>';
});
define("homepage/cateList.js", ["homepage/importAppmsgList.js", "tpl/homepage/plugins/plugin2_edit/cate_list_edit.html.js", "biz_web/ui/input/lentips.js", "common/wx/Tips.js", "common/wx/popover.js"], function(t) {
	"use strict";
	var e = t("homepage/importAppmsgList.js"),
		i = t("tpl/homepage/plugins/plugin2_edit/cate_list_edit.html.js"),
		n = t("biz_web/ui/input/lentips.js"),
		s = t("common/wx/Tips.js"),
		a = t("common/wx/popover.js"),
		r = {
			cname: "分类名",
			appmsg_list: [{
				title: "标题示例",
				cover: "http://mmbiz.qpic.cn/mmbiz/Q3auHgzwzM5wLlGTou7JL0oFS9yZGIK6vDmpWKn1M8Sk9tNGOiaGPPmxxPoXR7GM16AFk2lsfiaL2iapIm0RFicCvA/300",
				aid: "0",
				link: "javascript:void(0);",
				digest: "摘要示例"
			}, {
				title: "标题示例",
				cover: "http://mmbiz.qpic.cn/mmbiz/Q3auHgzwzM5wLlGTou7JL0oFS9yZGIK6vDmpWKn1M8Sk9tNGOiaGPPmxxPoXR7GM16AFk2lsfiaL2iapIm0RFicCvA/300",
				aid: "0",
				link: "javascript:void(0);",
				digest: "摘要示例"
			}, {
				title: "标题示例",
				cover: "http://mmbiz.qpic.cn/mmbiz/Q3auHgzwzM5wLlGTou7JL0oFS9yZGIK6vDmpWKn1M8Sk9tNGOiaGPPmxxPoXR7GM16AFk2lsfiaL2iapIm0RFicCvA/300",
				aid: "0",
				link: "javascript:void(0);",
				digest: "摘要示例"
			}]
		},
		o = function(t) {
			this.opt = t;
			var e = t.container,
				n = t.tab_container,
				s = t.idx;
			this.idx = s, this.default_cname = "分类名", this.renderjson = t.data, this.renderjson.cname = this.renderjson.cname || this.default_cname,
				e.append('<div style="display:none;" class="js_edit_cate_list_area js_edit_cate_list_area_' + s + '">' + i + "</div>");
			var a = $('<li class="tab_nav js_tab_nav_item"><a href="javascript:void(0);">' + this.renderjson.cname + "</a></li>");
			this.$li = a, n.find(".js_add_nav").before(a), this._initEditArea(), !!t.setOuterJson && t.setOuterJson(this.getrenderjson());
		};
	return o.prototype.cate_default_json = r, o.prototype._initEditArea = function() {
		var t = this.opt,
			i = this,
			s = t.container,
			r = t.idx,
			o = this.$li,
			p = s.find(".js_edit_cate_list_area_" + r),
			c = p.find(".js_cate_input");
		new n({
			input: c.val(this.renderjson.cname.html(!1)),
			tip: p.find(".js_cate_input_len_tips"),
			maxlimit: 4,
			seg: "/",
			trim: !0,
			className: "",
			callback: function(t, e) {
				t ? (c.parent().addClass("warn"), i.renderjson.cname = "") : (c.parent().removeClass("warn"),
					i.renderjson.cname = e.value), i._renderCname();
			}
		}), i.isSorting = !1;
		var l = this.renderjson.appmsg_list || [];
		i._importAppmsgList = new e({
			container: p.find(".js_import_appmsglist"),
			maxNum: 30,
			title: "内容列表",
			list: l,
			callback: function(t) {
				i._renderTpl(i.getrenderjson(t)), i.show();
			},
			startSort: function() {
				i.isSorting = !0;
			},
			endSort: function() {
				i.isSorting = !1;
			}
		}), o.click(function() {
			i.show();
		}), p.find(".js_del_cate").click(function() {
			var t = $(this);
			new a({
				dom: t,
				content: "确定删除此分类？",
				place: "bottom",
				margin: "center",
				buttons: [{
					text: "确定",
					click: function() {
						this.remove(), i.remove();
					},
					type: "primary"
				}, {
					text: "取消",
					click: function() {
						this.remove();
					}
				}]
			});
		});
	}, o.prototype.getrenderjson = function(t) {
		var e = this.opt,
			i = e.idx,
			n = e.container,
			s = n.find(".js_edit_cate_list_area_" + i),
			a = s.find(".js_cate_input"),
			r = $.extend(!0, {}, this.cate_default_json);
		t = t || this.renderjson.appmsg_list, t && t.length > 0 ? (r.appmsg_list = t, this.renderjson.appmsg_list = t) : this.renderjson.appmsg_list = [];
		var o = $.trim(a.val());
		return o && (r.cname = o, this.renderjson.cname = o), r;
	}, o.prototype._renderCname = function() {
		var t = this.opt,
			e = this.renderjson.cname || this.default_cname;
		this.$li.find("a").text(e), !!t.renderCnameCallback && t.renderCnameCallback(e);
	}, o.prototype._renderTpl = function(t) {
		var e = this.opt;
		!!e.renderCallback && e.renderCallback(t);
	}, o.prototype.initShow = function() {
		this._renderTpl(this.getrenderjson()), this.show();
	}, o.prototype.show = function() {
		var t = this.opt,
			e = t.container,
			i = t.idx;
		e.find(".js_edit_cate_list_area").hide(), e.find(".js_edit_cate_list_area_" + i).show();
		var n = t.tab_container;
		n.find(".selected").removeClass("selected"), this.$li.addClass("selected"), !!t.afterShow && t.afterShow();
	}, o.prototype.remove = function() {
		var t = this.opt;
		t.canRemove() ? (this.$li.remove(), !!t.afterRemove && t.afterRemove()) : s.err("至少保留一个分类");
	}, o.prototype.getEditData = function() {
		if (this.isSorting) return s.err("排序完成后才能发布"), !1;
		var t = this.renderjson,
			e = {};
		if (!t.cname) return s.err("分类名称必须为1-4个字"), !1;
		if (e.cname = t.cname, !t.appmsg_list || t.appmsg_list.length <= 0) return s.err("请至少选择一篇文章"), !1;
		for (var i = [], n = 0, a = t.appmsg_list.length; a > n; ++n) i.push(t.appmsg_list[n].aid);
		return e.aid_list = i, e;
	}, o;
});
define("tpl/homepage/plugins/plugin2_edit.html.js", [], function() {
	return '<div class="portable_editor to_left">\n    <div class="editor_inner">\n        <!--BEGIN editor_hd-->\n        <div class="editor_hd">\n            <!--BEGIN tab分类-->\n            <div class="section_tab">\n                <ul class="tab_navs js_tab_nav">\n                    <li class="tab_nav no_extra js_add_nav">\n                        <a class="add_nav" href="javascript:void(0);">添加</a>\n                    </li>\n                </ul>\n            </div>\n            <!--END tab分类-->\n        </div>\n        <!--END editor_hd-->\n        <!--BEGIN editor_bd-->\n        <div class="editor_bd js_catelist_area">\n        </div>\n        <!--END editor_bd-->\n        <span class="editor_arrow_wrp">\n            <i class="editor_arrow editor_arrow_out"></i>\n            <i class="editor_arrow editor_arrow_in"></i>\n        </span>\n    </div>\n</div>';
});
define("tpl/homepage/plugins/plugin2.html.js", [], function() {
	return '<div class="tab">\n    <!--BEGIN tab_hd-->\n    <div class="tab_hd">\n        <div class="tab_hd_inner">\n            {{each (<name>.plugin2.cate_list as key item)}}\n            <a href="javascript:void(0);" style="width:{{100/<name>.plugin2.cate_list.length}}%" class="js_cname_item item {{if (key==0)}}active{{/if}} {{if (key == <name>.plugin2.cate_list.length-1 && <name>.plugin2.cate_list.length > 1)}}no_extra{{/if}}">{{item.cname}}</a>\n            {{/each}}\n        </div>\n    </div>\n    <!--END tab_hd-->\n    <!--BEGIN tab_bd-->\n    <div class="tab_bd">\n        {{each (<name>.plugin2.cate_list as key item)}}\n        <div class="article_list js_article_list" {{if (key!=0)}}style="display: none;"{{/if}}>\n            {{each (item.appmsg_list as key appmsg)}}\n                <a class="list_item" href="javascript:void(0);">\n                    <div class="cover">\n                        <img class="img" src="{{appmsg.cover}}" alt="">\n                    </div>\n                    <div class="cont">\n                        <h2 class="title">{{appmsg.title}}</h2>\n                        <p class="desc">{{appmsg.digest}}</p>\n                    </div>\n                </a>\n            {{/each}}\n        </div>\n        {{/each}}\n    </div>\n    <!--END tab_bd-->\n</div>\n';
});
define("homepage/importAppmsgList.js", ["biz_common/jquery.ui/jquery.ui.sortable.js", "tpl/homepage/importAppmsgList/layout.html.js", "tpl/homepage/importAppmsgList/item.html.js", "homepage/appmsgdialog.js"], function(t) {
	"use strict";
	t("biz_common/jquery.ui/jquery.ui.sortable.js");
	var s = t("tpl/homepage/importAppmsgList/layout.html.js"),
		i = t("tpl/homepage/importAppmsgList/item.html.js"),
		e = {},
		r = t("homepage/appmsgdialog.js"),
		o = function(t) {
			if (t && !(t.length <= 0))
				for (var s = 0, i = t.length; i > s; ++s) {
					var r = t[s];
					e[r.aid] = r;
				}
		},
		n = function(t) {
			this.opt = t, this.list = t.list || [];
			var e = this,
				n = t.container,
				a = this.list;
			t.maxNum = t.maxNum || 5, o(a), n.html(wx.T(s, {
				title: t.title || ""
			}));
			var l = n.find(".js_appmsg_list");
			l.html(wx.T(i, {
				appmsg_list: this.list
			})), l.sortable({
				items: ".js_article",
				placeholder: "drag_placeholder",
				dropOnEmpty: !0,
				start: function(t, s) {
					s.item.addClass("dragging");
				},
				stop: function(t, s) {
					s.item.removeClass("dragging");
				}
			}), l.sortable("disable"), n.find(".js_max_num").text(t.maxNum), n.find(".js_import").click(function() {
				var s = t.maxNum - e.list.length;
				s = Math.max(0, s), new r({
					ids: t.selectLast ? e._getAidList() : [],
					maxNum: s,
					callback: function(t) {
						e.list = e.list.concat(t), o(t), e._resetSortState(), e._refreshEditArea(), e.opt.callback && e.opt.callback(e.list),
							n.find(".js_select_num").text(e.list.length);
					}
				});
			}), e._endSort(), n.find(".js_select_num").text(this.list.length), n.find(".js_sort").click(function() {
				var t = $(this);
				return t.attr("disabled") ? void e._endSort() : void e._startSort();
			}), n.find(".js_sort_sure").click(function() {
				e._resetList(), e._endSort();
			}), n.find(".js_sort_cancle").click(function() {
				e._refreshEditArea(), e._endSort();
			}), n.on("click", ".js_del", function() {
				$(this).parent().remove(), e._resetList(), n.find(".js_select_num").text(e.list.length);
			});
		};
	return n.prototype._getAidList = function() {
		for (var t = [], s = this.list, i = 0, e = s.length; e > i; ++i) t.push(s[i].aid);
		return t;
	}, n.prototype._startSort = function() {
		var t = this.opt,
			s = t.container,
			i = s.find(".js_appmsg_list");
		i.sortable("enable"), s.find(".js_import,.js_sort,.js_del").hide(), s.find(".js_sort_sure,.js_sort_cancle,.js_sort_item").show(), !!t.startSort && t.startSort();
	}, n.prototype._endSort = function() {
		var t = this.opt,
			s = t.container,
			i = s.find(".js_appmsg_list");
		i.sortable("disable"), s.find(".js_sort_sure,.js_sort_cancle,.js_sort_item").hide(),
			s.find(".js_import,.js_sort,.js_del").show(), this._resetSortState(), !!t.endSort && t.endSort();
	}, n.prototype._resetSortState = function() {
		var t = this.opt,
			s = t.container,
			i = this._getlist(),
			e = s.find(".js_sort");
		i.length <= 0 ? e.disable() : e.enable();
	}, n.prototype._getSortList = function() {
		var t = [],
			s = this.opt,
			i = s.container;
		return i.find(".js_article").each(function() {
			var s = $(this),
				i = s.data("aid");
			e[i] && t.push(e[i]);
		}), t;
	}, n.prototype._resetList = function() {
		var t = this._getSortList(),
			s = this.opt;
		this.list = t, this._resetSortState(), s.callback && s.callback(t);
	}, n.prototype._getlist = function() {
		var t = this.list || {};
		return t;
	}, n.prototype._refreshEditArea = function() {
		var t = this.opt,
			s = t.container,
			e = this.list,
			r = s.find(".js_appmsg_list"),
			o = "";
		e && (o = wx.T(i, {
			appmsg_list: e
		})), r.html(o);
	}, n;
});
define("common/wx/wxt.js", ["biz_web/lib/json.js"], function(e, t, n) {
	try {
		var r = +(new Date);
		"use strict", e("biz_web/lib/json.js");
		var i = function(e, t) {
			return i[typeof t == "object" ? "render" : "compile"].apply(i, arguments);
		};
		return function(e, t) {
			"use strict";
			e.version = "2.0.1", e.openTag = "<#", e.closeTag = "#>", e.isEscape = !1, e.isCompress = !1, e.parser = null, e.render = function(e, t) {
				var n = r(e);
				return n === undefined ? i({
					id: e,
					name: "Render Error",
					message: "No Template"
				}) : n(t);
			}, e.compile = function(t, r) {
				function o(n) {
					try {
						return new l(n) + "";
					} catch (s) {
						return a ? (s.id = t || r, s.name = "Render Error", s.source = r, i(s)) : e.compile(t, r, !0)(n);
					}
				}
				var u = arguments,
					a = u[2],
					f = "anonymous";
				typeof r != "string" && (a = u[1], r = u[0], t = f);
				try {
					var l = s(r, a);
				} catch (c) {
					return c.id = t || r, c.name = "Syntax Error", i(c);
				}
				return o.prototype = l.prototype, o.toString = function() {
					return l.toString();
				}, t !== f && (n[t] = o), o;
			}, e.helper = function(t, n) {
				e.prototype[t] = n;
			}, e.onerror = function(e) {
				var n = "[template]:\n" + e.id + "\n\n[name]:\n" + e.name;
				e.message && (n += "\n\n[message]:\n" + e.message), e.line && (n += "\n\n[line]:\n" + e.line, n += "\n\n[source]:\n" + e.source.split(/\n/)[e.line - 1].replace(/^[\s\t]+/, "")), e.temp && (n += "\n\n[temp]:\n" + e.temp), t.console && console.error(n);
			};
			var n = {},
				r = function(r) {
					var i = n[r];
					if (i === undefined && "document" in t) {
						var s = document.getElementById(r);
						if (s) {
							var o = s.value || s.innerHTML;
							return e.compile(r, o.replace(/^\s*|\s*$/g, ""));
						}
					} else if (n.hasOwnProperty(r)) return i;
				},
				i = function(t) {
					function n() {
						return n + "";
					}
					return e.onerror(t), n.toString = function() {
						return "{Template Error}";
					}, n;
				},
				s = function() {
					e.prototype = {
						$render: e.render,
						$escape: function(e) {
							return typeof e == "string" ? e.replace(/&(?![\w#]+;)|[<>"']/g, function(e) {
								return {
									"<": "&#60;",
									">": "&#62;",
									'"': "&#34;",
									"'": "&#39;",
									"&": "&#38;"
								}[e];
							}) : e;
						},
						$string: function(e) {
							return typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? e : typeof e == "function" ? e() : JSON.stringify2(e);
						}
					};
					var t = Array.prototype.forEach || function(e, t) {
							var n = this.length >>> 0;
							for (var r = 0; r < n; r++) r in this && e.call(t, this[r], r, this);
						},
						n = function(e, n) {
							t.call(e, n);
						},
						r = "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",
						i = /\/\*(?:.|\n)*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|'[^']*'|"[^"]*"|[\s\t\n]*\.[\s\t\n]*[$\w\.]+/g,
						s = /[^\w$\u4e00-\u9fa5]+/g,
						o = new RegExp(["\\b" + r.replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g"),
						u = /\b\d[^,]*/g,
						a = /^,+|,+$/g,
						f = function(e) {
							return e = e.replace(i, "").replace(s, ",").replace(o, "").replace(u, "").replace(a, ""), e = e ? e.split(/,+/) : [], e;
						};
					return function(t, r) {
						function i(t) {
							return d += t.split(/\n/).length - 1, e.isCompress && (t = t.replace(/[\n\r\t\s]+/g, " ")), t = t.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n"), t = w[1] + "'" + t + "'" + w[2], t + "\n";
						}

						function s(t) {
							var n = d;
							c ? t = c(t) : r && (t = t.replace(/\n/g, function() {
								return d++, "$line=" + d + ";";
							}));
							if (t.indexOf("=") === 0) {
								var i = t.indexOf("==") !== 0;
								t = t.replace(/^=*|[\s;]*$/g, "");
								if (i && e.isEscape) {
									var s = t.replace(/\s*\([^\)]+\)/, "");
									!m.hasOwnProperty(s) && !/^(include|print)$/.test(s) && (t = "$escape($string(" + t + "))");
								} else t = "$string(" + t + ")";
								t = w[1] + t + w[2];
							}
							return r && (t = "$line=" + n + ";" + t), o(t), t + "\n";
						}

						function o(e) {
							e = f(e), n(e, function(e) {
								v.hasOwnProperty(e) || (u(e), v[e] = !0);
							});
						}

						function u(e) {
							var t;
							e === "print" ? t = S : e === "include" ? (g.$render = m.$render, t = x) : (t = "$data." + e, m.hasOwnProperty(e) && (g[e] = m[e], e.indexOf("$") === 0 ? t = "$helpers." + e : t = t + "===undefined?$helpers." + e + ":" + t)), y += e + "=" + t + ",";
						}
						var a = e.openTag,
							l = e.closeTag,
							c = e.parser,
							h = t,
							p = "",
							d = 1,
							v = {
								$data: !0,
								$helpers: !0,
								$out: !0,
								$line: !0
							},
							m = e.prototype,
							g = {},
							y = "var $helpers=this," + (r ? "$line=0," : ""),
							b = "".trim,
							w = b ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"],
							E = b ? "if(content!==undefined){$out+=content;return content}" : "$out.push(content);",
							S = "function(content){" + E + "}",
							x = "function(id,data){if(data===undefined){data=$data}var content=$helpers.$render(id,data);" + E + "}";
						n(h.split(a), function(e, t) {
							e = e.split(l);
							var n = e[0],
								r = e[1];
							e.length === 1 ? p += i(n) : (p += s(n), r && (p += i(r)));
						}), h = p, r && (h = "try{" + h + "}catch(e){" + "e.line=$line;" + "throw e" + "}"), h = "'use strict';" + y + w[0] + h + "return new String(" + w[3] + ")";
						try {
							var T = new Function("$data", h);
							return T.prototype = g, T;
						} catch (N) {
							throw N.temp = "function anonymous($data) {" + h + "}", N;
						}
					};
				}();
			e.openTag = "{{", e.closeTag = "}}", e.parser = function(t) {
				t = t.replace(/\s*\(\s*/g, " (").replace(/\s*\)\s*/g, ") ").replace(/^\s/, "");
				var n = t.split(" "),
					r = n.shift(),
					i = e.keywords,
					s = i[r];
				return s && i.hasOwnProperty(r) ? (n = n.join(" "), t = s.call(t, n)) : e.prototype.hasOwnProperty(r) ? (n = n.join(" "), t = "==" + r + "" + n + ";") : (t = t.replace(/[\s;]*$/, ""), t = "=" + t), t;
			}, e.keywords = {
				"if": function(e) {
					return "if(" + e + "){";
				},
				"else": function(e) {
					return e = e.split(" "), e.shift() === "if" ? e = " if(" + e.join(" ") + ")" : e = "", "}else" + e + "{";
				},
				elseif: function(e) {
					return "}else if(" + e + "){";
				},
				"/if": function() {
					return "}";
				},
				each: function(e) {
					e = e.replace(/^\s*\(|\)\s*$/g, "").replace(/\s*\(\s*/g, "("), e = e.split(" ");
					var t = e[0] || "$data",
						n = e[1] || "as",
						r = e[2] || "$index",
						i = e[3] || "$value",
						s = i + "," + r;
					return n !== "as" && (t = "[]"), "$each(" + t + ",function(){" + r + "=arguments[0];" + i + "=arguments[1]},function(" + s + "){";
				},
				"/each": function() {
					return "});";
				},
				echo: function(e) {
					return "print(" + e + ");";
				},
				"break": function(e) {
					return "return true";
				},
				"continue": function(e) {
					return "return false";
				}
			}, e.helper("$each", function(e, t, n) {
				var r = Array.isArray || function(e) {
						return Object.prototype.toString.call(e) === "[object Array]";
					},
					i;
				if (r(e)) {
					for (var s = 0, o = e.length; s < o; s++)
						if (n.call(e, e[s], s, e)) break;
					s--;
				} else {
					if (Object.keys) i = Object.keys(e);
					else
						for (s in e) i.push(s);
					i = i.sort();
					for (var u = 0, o = i.length; u < o; u++) {
						s = i[u];
						if (n.call(e, e[s], s)) break;
					}
				}
				t(s, e[s]);
			}), e.helper("json_encode", JSON.stringify2), e.helper("json_decode", $.parseJSON), e.helper("strlen", function(e) {
				return e.length;
			}), e.helper("str_replace", function(e, t, n) {
				return n.replace(e, t);
			}), e.helper("substr", function(e, t, n) {
				return e.substr(t, n);
			}), e.helper("trim", function(e) {
				return $.trim(e);
			}), e.helper("strpos", function(e, t) {
				return e.indexOf(t);
			}), e.helper("explode", function(e, t) {
				return t.split(e);
			}), e.helper("join", function(e, t) {
				return t.join(e);
			}), e.helper("html_decode", function(e) {
				return e.html(!1);
			}), e.helper("html_encode", function(e) {
				return e.html(!0);
			}), e.helper("getresfullname", function(e) {
				return e;
			});
		}(i, window), i;
	} catch (s) {
		wx.jslog({
			src: "common/wx/wxt.js"
		}, s);
	}
});
define("homepage/plugins/base.js", ["common/wx/wxt.js"], function(t) {
	"use strict";
	var i = t("common/wx/wxt.js");
	i.isEscape = !0;
	var n = 0;
	$("#js_preview_area").length > 0 && (n = $("#js_preview_area").offset().top);
	var e = function(t) {
		var i = this;
		i.opt = t, this.pid = t.pid;
		var n = t.container,
			e = t.js_edit_area,
			s = t.idx,
			o = this.edit_tpl;
		n.html('<div class="plugin_content"><div class="js_plugin_content" id="js_plugin_content_' + s + '"></div><div class="plugin_mask js_plugin_mask" style="display:none;"><a href="javascript:void(0);"><i class="icon18_common edit_gray js_plugin_edit">编辑</i></a></div></div>'),
			this.$content = n.find(".js_plugin_content"), e.append('<div style="display:none;" class="js_plugin_edit_area plugin_edit_area" id="js_plugin_edit_area_' + s + '">' + o + "</div>"),
			this.renderjson = t.renderjson, this._renderTpl(this.renderjson), n.on("click", ".js_plugin_edit,.js_plugin_content", function() {
				i.showEditArea();
			}), n.hover(function() {
				var t = $(this).find(".js_plugin_mask");
				return i.isShowEdit() ? !1 : void t.fadeIn();
			}, function() {
				var t = $(this).find(".js_plugin_mask");
				t.fadeOut();
			});
	};
	e.prototype.isShowEdit = function() {
		var t = this.opt,
			i = t.idx;
		return $("#js_plugin_edit_area_" + i).is(":visible");
	}, e.prototype.showEditArea = function() {
		var t = this.opt,
			i = (t.container, t.js_edit_area),
			e = t.idx;
		i.find(".js_plugin_edit_area").hide(), $("#js_plugin_edit_area_" + e).show().css({
			marginTop: $("#js_plugin_content_" + e).offset().top - n
		});
	}, e.prototype.initData = function() {
		return {};
	}, e.prototype.getEditData = function() {
		return !1;
	}, e.prototype._renderTpl = function(t) {
		{
			var n = this.opt;
			n.container;
		}
		t = this.getRenderJson(t);
		var e = n.idx,
			s = n.name || "plugin_" + e,
			o = this.tpl;
		o = o.replace(/<name>/gi, s);
		var r = {};
		r[s] = t, this.realRenderjson = t, this.$content.html(i.compile(o)(r)), this._afterRenderTpl && this._afterRenderTpl();
	};
	var s = function(t, i) {
		var n = function() {};
		n.prototype = i.prototype, t.prototype = new n, t.prototype.constructor = t, t.uber = i.prototype;
	};
	return {
		base: e,
		inherit: s
	};
});
define("tpl/homepage/plugins/plugin1_edit.html.js", [], function() {
	return '<div class="portable_editor to_left">\n    <div class="editor_inner">\n        <!--BEGIN editor_bd-->\n        <div class="editor_bd js_import_appmsglist">\n        </div>\n        <!--END editor_bd-->\n        <span class="editor_arrow_wrp">\n            <i class="editor_arrow editor_arrow_out"></i>\n            <i class="editor_arrow editor_arrow_in"></i>\n        </span>\n    </div>\n</div>';
});
define("tpl/homepage/plugins/plugin1.html.js", [], function() {
	return '<div class="slider">\n    <div class="swiper">\n    	{{each (<name>.plugin1.appmsg_list as key item)}}\n        <div class="item">\n            <div class="img"\n                 style="background: url({{item.cover}}) center center no-repeat; background-size: cover;"></div>\n            <p class="desc">{{item.title}}</p>\n        </div>\n        {{/each}}\n    </div>\n    <div class="indicator">\n    	{{each (<name>.plugin1.appmsg_list as key item)}}\n        <a href="javascript:void(0);"><i class="icon_dot {{if (key==0)}}active{{/if}}"></i></a>\n        {{/each}}\n    </div>\n</div>';
});
define("tpl/pagebar.html.js", [], function(e, t, n) {
	return '<div class="pagination">\n    <span class="page_nav_area">\n        <a href="javascript:void(0);" class="btn page_first">{firstButtonText}</a>\n        <a href="javascript:void(0);" class="btn page_prev"><i class="arrow"></i></a>\n        {if isSimple}\n            <span class="page_num">\n                <label>{initShowPage}</label>\n                <span class="num_gap">/</span>\n                <label>{endPage}</label>\n            </span>\n        {else}\n            {each startRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav">{pageIndex}</a>\n            {/each}\n            <span class="gap_prev">...</span>\n            {each midRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav js_mid">{pageIndex}</a>\n            {/each}\n            <span class="gap_next">...</span>\n            {each endRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav">{pageIndex}</a>\n            {/each}\n        {/if}\n        <a href="javascript:void(0);" class="btn page_next"><i class="arrow"></i></a>\n        <a href="javascript:void(0);" class="btn page_last">{lastButtonText}</a>            \n    </span>\n    {if (endPage>1)}\n    <span class="goto_area">\n        <input type="text">\n        <a href="javascript:void(0);" class="btn page_go">跳转</a>\n    </span>\n    {/if}\n</div>\n';
});
define("tpl/top.html.js", [], function(e, t, n) {
	return '<ul class="tab_navs title_tab" data-index="{itemIndex=0}">\n    {each data as o index}\n    {if (typeof o.acl == "undefined" || o.acl == 1)}\n    <li data-index="{itemIndex++}" class="tab_nav {if (itemIndex == 1)}first{/if} js_top {o.className}" data-id="{o.id}"><a href="{o.url}" {if o.target==\'_blank\'}target="_blank"{/if}>{o.name}</a></li>\n    {/if}\n    {/each}\n</ul>\n';
});
define("tpl/uploader.html.js", [], function() {
	return '<li id="uploadItem{id}" data-status="{className}" class="upload_file">\n    <strong class="upload_file_name">{fileName}</strong>\n    <span class="upload_file_size">({size})</span>\n    <div class="progress_bar"><div class="progress_bar_thumb" style="width:0%"></div></div>\n    <a href="javascript:;" data-id="{id}" class="upload_file_cancel js_cancel">取消</a>\n</li>\n';
});
define("tpl/media/appmsg.html.js", [], function() {
	return '<div class="appmsg {if isMul}multi{/if}" data-id="{id}" data-fileid="{file_id}">\n    <div class="appmsg_content">\n        {if isMul}\n            <div class="appmsg_info">\n                <em class="appmsg_date">{time}</em>\n            </div>\n            <div class="cover_appmsg_item">\n                <h4 class="appmsg_title js_title"><a href="{first.content_url}" target="_blank">{first.title}</a></h4>\n                <div class="appmsg_thumb_wrp"><img src="{first.cover}" alt="" class="appmsg_thumb"></div>\n            </div>\n            {each list as item}\n            <div class="appmsg_item">\n                <img src="{item.cover}" alt="" class="appmsg_thumb">\n                <h4 class="appmsg_title js_title"><a href="{item.content_url}" target="_blank">{item.title}</a></h4>\n            </div>\n            {/each}\n        {else}\n            <h4 class="appmsg_title js_title"><a href="{first.content_url}" target="_blank">{first.title}</a></h4>\n            <div class="appmsg_info">\n                <em class="appmsg_date">{time}</em>\n            </div>\n            <div class="appmsg_thumb_wrp"><img src="{first.cover}" alt="" class="appmsg_thumb" /></div>\n            <p class="appmsg_desc">{first.digest}</p>\n        {/if}\n    </div>\n    {if showEdit}\n    <div class="appmsg_opr">\n        <ul>\n            <li class="appmsg_opr_item grid_item size1of2">\n            <a class="js_tooltip" href="/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&lang=zh_CN&token={token}&type={type}&appmsgid={id}&isMul=1" data-tooltip="编辑">&nbsp;<i class="icon18_common edit_gray">编辑</i></a>\n            </li>\n            <li class="appmsg_opr_item grid_item size1of2 no_extra">\n                <a class="js_del no_extra js_tooltip" data-id="{id}" href="javascript:void(0);" data-tooltip="删除">&nbsp;<i class="icon18_common del_gray">删除</i></a>\n            </li>\n        </ul>\n    </div>\n    {/if}\n    {if showMask}\n    <div class="appmsg_mask"></div>\n    <i class="icon_card_selected">已选择</i>\n    {/if}\n</div>\n';
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
define("tpl/media/img.html.js", [], function() {
	return '<div class="appmsgSendedItem simple_img">\n    <a class="title_wrp" href="/cgi-bin/getimgdata?token={token}&msgid={msgid}&mode=large&source={source}&fileId={id}&ow={ow}" target="_blank">\n        <img class="icon" src="/cgi-bin/getimgdata?token={token}&msgid={msgid}&mode=small&source={source}&fileId={id}&ow={ow}">\n        <span class="title">[图片]</span>\n    </a>\n</div>';
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
define("tpl/tab.html.js", [], function() {
	return '<div class="msg_tab">\n	<ul class="tab_navs">\n	    {each tabs as tab}\n        <li class="tab_nav {tab.className}" data-type="{tab.type}" data-tab=".{tab.selector}" data-tooltip="{tab.text}">\n		    <a href="javascript:void(0);" onclick="return false;">&nbsp;<i class="icon_msg_sender"></i><span class="msg_tab_title">{tab.text}</span></a>\n	    </li>\n	    {/each}\n	</ul>\n	<div class="tab_panel">\n	    {each tabs as tab i}\n	    <div class="tab_content">\n	    	<div class="{tab.selector} inner {tab.innerClassName}">\n	    		<!--type 10图文 2图片  3语音 15视频 11商品消息-->\n	    		{if tab.type==10}\n			    <div class="tab_cont_cover jsMsgSendTab" data-index="{i}">\n                    <div class="media_cover">\n			            <span class="create_access">\n			                <a class="add_gray_wrp jsMsgSenderPopBt"  href="javascript:;" data-type="10" data-index="{i}">\n                                <i class="icon36_common add_gray"></i>\n                                <strong>从素材库中选择</strong>\n                            </a>\n			            </span>\n                    </div>\n			        <div class="media_cover" >\n			            <span class="create_access">\n                            <a target="_blank" class="add_gray_wrp" href="/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&type=10&isMul=1&isNew=1&lang=zh_CN&token={token}">\n			                    <i class="icon36_common add_gray"></i>\n			                    <strong>新建图文消息</strong>\n			                </a>\n                            <!--\n			                <a target="_blank" href="/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&type=10&isMul=0&isNew=1&lang=zh_CN&token={token}"><i class="icon_shopmsg_create"></i><strong>单图文消息</strong></a>\n			                <a target="_blank" href="/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&type=10&isMul=1&isNew=1&lang=zh_CN&token={token}"><i class="icon_shopmsg_create multi"></i><strong>多图文消息</strong></a>\n                            -->\n			            </span>\n			        </div>\n			    </div>	    		\n	    		{else if tab.type==2}\n                <div class="tab_cont_cover jsMsgSendTab" data-index="{i}" data-type="{tab.type}">\n                    <div class="media_cover">\n			            <span class="create_access">\n			                <a class="add_gray_wrp jsMsgSenderPopBt"   href="javascript:;" data-type="{tab.type}"   data-index="{i}">\n                                <i class="icon36_common add_gray"></i>\n                                <strong>从素材库中选择</strong>\n                            </a>\n			            </span>\n                    </div>\n                    <div class="media_cover">\n			            <span class="create_access" >\n			                <a class="add_gray_wrp" id="msgSendImgUploadBt" data-type="2" href="javascript:;">\n                                <i class="icon36_common add_gray"></i>\n                                <strong>上传图片</strong>\n                            </a>\n			            </span>\n                    </div>\n                </div>\n	    		{else if tab.type==3}\n                <div class="tab_cont_cover jsMsgSendTab" data-index="{i}" data-type="{tab.type}">\n                    <div class="media_cover">\n			            <span class="create_access">\n			                <a class="add_gray_wrp jsMsgSenderPopBt" href="javascript:;"  data-type="{tab.type}" data-index="{i}">\n                                <i class="icon36_common add_gray"></i>\n                                <strong>从素材库中选择</strong>\n                            </a>\n			            </span>\n                    </div>\n                    <div class="media_cover">\n			            <span class="create_access" >\n			                <a class="add_gray_wrp " id="msgSendAudioUploadBt" href="javascript:;">\n                                <i class="icon36_common add_gray"></i>\n                                <strong>上传语音</strong>\n                            </a>\n			            </span>\n                    </div>\n                </div>\n	    		{else if tab.type==15}\n                <div class="tab_cont_cover jsMsgSendTab" data-index="{i}">\n                    <div class="media_cover">\n			            <span class="create_access">\n			                <a class="add_gray_wrp jsMsgSenderPopBt" href="javascript:;"  data-type="15" data-index="{i}">\n                                <i class="icon36_common add_gray"></i>\n                                <strong>从素材库中选择</strong>\n                            </a>\n			            </span>\n                    </div>\n                    <div class="media_cover">\n			            <span class="create_access">\n			                <a target="_blank" class="add_gray_wrp" href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&type=15&lang=zh_CN&token={token}">\n                                <i class="icon36_common add_gray"></i>\n                                <strong>新建视频</strong>\n                            </a>\n			            </span>\n                    </div>\n                </div>\n	    		{else if tab.type==11}\n			    <div class="tab_cont_cover jsMsgSendTab" data-index="{i}">\n                    <div class="media_cover">\n			            <span class="create_access">\n			                <a class="add_gray_wrp jsMsgSenderPopBt"  href="javascript:;" data-type="11" data-index="{i}">\n                                <i class="icon36_common add_gray"></i>\n                                <strong>从素材库中选择</strong>\n                            </a>\n			            </span>\n                    </div>\n			        <div class="appmsg_cover" >\n			            <span class="create_access">\n			                <a class="add_gray_wrp" href="javascript:;">\n			                    <i class="icon36_common add_gray"></i>\n			                    <strong>新建商品消息</strong>\n			                </a>\n			                <a target="_blank" href="/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&type=11&isMul=0&isNew=1&lang=zh_CN&token={token}"><i class="icon_shopmsg_create"></i><strong>单商品消息</strong></a>\n			                <a target="_blank" href="/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&type=11&isMul=1&isNew=1&lang=zh_CN&token={token}"><i class="icon_shopmsg_create multi"></i><strong>多商品消息</strong></a>\n			            </span>\n			        </div>\n			    </div>		    		\n	    		{/if}\n	    	</div>\n	    </div>\n	    {/each}\n	</div>\n</div>\n';
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
define("homepage/plugins/plugin3.js", ["page/homepage/plugins/plugin3.css", "tpl/homepage/plugins/plugin3.html.js", "tpl/homepage/plugins/plugin3_edit.html.js", "homepage/plugins/base.js", "common/wx/wxt.js", "homepage/importAppmsgList.js", "common/wx/Tips.js"], function(i) {
	"use strict";
	i("page/homepage/plugins/plugin3.css");
	var t = i("tpl/homepage/plugins/plugin3.html.js"),
		p = i("tpl/homepage/plugins/plugin3_edit.html.js"),
		e = i("homepage/plugins/base.js"),
		n = i("common/wx/wxt.js"),
		s = e.base,
		o = e.inherit,
		l = i("homepage/importAppmsgList.js"),
		r = i("common/wx/Tips.js"),
		g = {
			plugin3: {
				appmsg_list: [{
					title: "封面示例",
					cover: "http://mmbiz.qpic.cn/mmbiz/Q3auHgzwzM5wLlGTou7JL0oFS9yZGIK6vDmpWKn1M8Sk9tNGOiaGPPmxxPoXR7GM16AFk2lsfiaL2iapIm0RFicCvA/300",
					aid: "0",
					link: "javascript:void(0);",
					digest: "摘要示例"
				}, {
					title: "封面示例",
					cover: "http://mmbiz.qpic.cn/mmbiz/Q3auHgzwzM5wLlGTou7JL0oFS9yZGIK6vDmpWKn1M8Sk9tNGOiaGPPmxxPoXR7GM16AFk2lsfiaL2iapIm0RFicCvA/300",
					aid: "0",
					link: "javascript:void(0);",
					digest: "摘要示例"
				}]
			}
		},
		a = function(i) {
			var t = this;
			t.opt = i, s.apply(this, arguments), this._initEditArea();
		};
	return o(a, s), a.prototype.tpl = t, a.prototype.edit_tpl = p, a.prototype.default_json = g,
		a.prototype._initEditArea = function() {
			var i = this.opt,
				t = this,
				p = i.idx,
				e = $("#js_plugin_edit_area_" + p),
				n = (e.find(".js_appmsg_list"), []);
			t.renderjson.plugin3 && t.renderjson.plugin3.appmsg_list && (n = t.renderjson.plugin3.appmsg_list),
				t.isSorting = !1, t._importAppmsgList = new l({
					container: e.find(".js_import_appmsglist"),
					maxNum: 30,
					title: "内容列表",
					list: n,
					callback: function(i) {
						var p = $.extend(!0, {}, t.default_json);
						i && i.length > 0 ? (p = {
							plugin3: {
								appmsg_list: i
							}
						}, t.renderjson = p) : t.renderjson = {
							plugin3: {
								appmsg_list: []
							}
						}, t._renderTpl(p);
					},
					startSort: function() {
						t.isSorting = !0;
					},
					endSort: function() {
						t.isSorting = !1;
					}
				});
		}, a.prototype._getSelectList = function() {
			var i = !!this.renderjson.plugin3 && this.renderjson.plugin3.appmsg_list;
			if (i && i.length > 0) {
				for (var t = [], p = 0, e = i.length; e > p; ++p) t.push(i[p].aid);
				return t;
			}
			return [];
		}, a.prototype.getRenderJson = function(i) {
			return i && i.plugin3 && i.plugin3.appmsg_list && i.plugin3.appmsg_list.length > 0 ? i : $.extend(!0, {}, this.default_json);
		}, a.prototype.getEditData = function() {
			if (this.isSorting) return r.err("排序完成后才能发布"), !1;
			var i = this._getSelectList();
			return i.length > 0 ? {
				aid_list: i
			} : (r.err("请至少选择一篇文章"), !1);
		}, a.getRenderHTML = function(i) {
			var p = "plugin",
				e = {};
			e[p] = i;
			var s = t.replace(/<name>/gi, p);
			return n.compile(s)(e);
		}, a;
});
define("homepage/plugins/plugin2.js", ["page/homepage/plugins/plugin2.css", "tpl/homepage/plugins/plugin2.html.js", "tpl/homepage/plugins/plugin2_edit.html.js", "homepage/plugins/base.js", "common/wx/wxt.js", "common/wx/Tips.js", "homepage/cateList.js"], function(t) {
	"use strict";
	t("page/homepage/plugins/plugin2.css");
	var e = t("tpl/homepage/plugins/plugin2.html.js"),
		n = t("tpl/homepage/plugins/plugin2_edit.html.js"),
		i = t("homepage/plugins/base.js"),
		s = t("common/wx/wxt.js"),
		a = i.base,
		r = i.inherit,
		o = t("common/wx/Tips.js"),
		p = t("homepage/cateList.js"),
		l = {
			plugin2: {
				cate_list: []
			}
		},
		c = function(t) {
			var e = this;
			e.opt = t, a.apply(this, arguments), this._initEditArea();
		};
	return r(c, a), c.prototype.tpl = e, c.prototype.edit_tpl = n, c.prototype.default_json = l,
		c.prototype._createCateList = function(t, e) {
			var n = this.opt,
				i = this,
				s = n.idx,
				a = $("#js_plugin_edit_area_" + s),
				r = n.container,
				o = a.find(".js_tab_nav");
			e = e || {}, i.json[t] = e;
			var l = new p({
				container: a.find(".js_catelist_area"),
				idx: t,
				tab_container: o,
				data: e,
				setOuterJson: function(t) {
					i.json[this.idx] = t;
				},
				canRemove: function() {
					var t = i._getRenderJson();
					return t.plugin2.cate_list.length > 1;
				},
				renderCallback: function(t) {
					var e = this.idx;
					i.json[e] = t, i.selectTab = e, i._renderTpl(i._getRenderJson());
				},
				renderCnameCallback: function(t) {
					var e = this.idx;
					i.json[e].cname = t;
					var n = i._getRealShowIdx(e);
					r.find(".js_cname_item").eq(n).text(t);
				},
				afterShow: function() {
					var t = i._getRealShowIdx(this.idx);
					r.find(".js_cname_item").eq(t).click(), r.find(".js_article_list").hide().eq(t).show();
				},
				afterRemove: function() {
					i.json[this.idx] = !1, i.selectTab = 0, i._renderTpl(i._getRenderJson()), o.find(".js_tab_nav_item").eq(0).click();
				}
			});
			return l;
		}, c.prototype._initEditArea = function() {
			{
				var t = this.opt,
					e = this,
					n = t.idx,
					i = $("#js_plugin_edit_area_" + n),
					s = t.container;
				i.find(".js_tab_nav");
			}
			this.json = [], this.selectTab = 0, this.cateList = [];
			var a = [];
			e.renderjson.plugin2 && e.renderjson.plugin2.cate_list && (a = e.renderjson.plugin2.cate_list);
			var r = a.length;
			r = r || 2;
			for (var p = 0; r > p; ++p) {
				var l = a[p];
				this.cateList.push(this._createCateList(p, l));
			}
			this._renderTpl(this._getRenderJson()), s.on("click", ".js_cname_item", function() {
				s.find(".js_cname_item").removeClass("active"), $(this).addClass("active");
			}), i.on("click", ".js_add_nav", function() {
				if (e.getCateLen() >= 5) return o.err("最多只能添加5个分类"), !1;
				var t = e.cateList.length,
					n = {
						cname: "",
						appmsg_list: []
					},
					i = e._createCateList(t, n);
				e.cateList.push(i), i.initShow();
			}), r > 0 && this.cateList[0].show();
		}, c.prototype._getRealCateIdx = function(t) {
			for (var e = this.json, n = 0, i = e.length; i > n; ++n)
				if (e[n]) {
					if (0 >= t) return n;
					t--;
				}
			return -1;
		}, c.prototype._getRealShowIdx = function(t) {
			for (var e = this.json, n = 0, i = 0; t > i; ++i) e[i] && n++;
			return n;
		}, c.prototype._getRenderJson = function() {
			for (var t = this.json, e = [], n = 0, i = t.length; i > n; ++n) {
				var s = t[n];
				s && e.push(s);
			}
			return {
				plugin2: {
					cate_list: e
				}
			};
		}, c.prototype._afterRenderTpl = function() {
			var t = this.opt,
				e = t.container,
				n = this.selectTab || 0,
				i = e.find(".js_cname_item"),
				s = i.length;
			if (s > 0 && (i.css({
				width: 100 / s + "%"
			}).removeClass("active").eq(n).addClass("active"), this.cateList)) {
				var a = this._getRealCateIdx(n);
				a >= 0 && a < this.cateList.length && this.cateList[a].show();
			}
		}, c.prototype.getRenderJson = function(t) {
			return t && t.plugin2 && t.plugin2.cate_list && t.plugin2.cate_list.length > 0 ? t : $.extend(!0, {}, this.default_json);
		}, c.prototype.getCateLen = function() {
			for (var t = this.cateList, e = this.json, n = 0, i = 0, s = t.length; s > i; ++i) e[i] && t[i] && n++;
			return n;
		}, c.prototype.getEditData = function() {
			for (var t = this.cateList, e = this.json, n = [], i = 0, s = t.length; s > i; ++i)
				if (e[i] && t[i]) {
					var a = t[i],
						r = a.getEditData();
					if (0 == r) return a.show(), !1;
					n.push(r);
				}
			return {
				cate_list: n
			};
		}, c.getRenderHTML = function(t) {
			var n = "plugin",
				i = {};
			i[n] = t;
			var a = e.replace(/<name>/gi, n);
			return s.compile(a)(i);
		}, c;
});
define("homepage/plugins/plugin1.js", ["page/homepage/plugins/plugin1.css", "tpl/homepage/plugins/plugin1.html.js", "tpl/homepage/plugins/plugin1_edit.html.js", "homepage/plugins/base.js", "common/wx/wxt.js", "homepage/importAppmsgList.js", "common/wx/Tips.js"], function(t) {
	"use strict";
	t("page/homepage/plugins/plugin1.css");
	var i = t("tpl/homepage/plugins/plugin1.html.js"),
		e = t("tpl/homepage/plugins/plugin1_edit.html.js"),
		n = t("homepage/plugins/base.js"),
		p = n.base,
		s = n.inherit,
		o = t("common/wx/wxt.js"),
		g = t("homepage/importAppmsgList.js"),
		r = t("common/wx/Tips.js"),
		l = {
			plugin1: {
				appmsg_list: [{
					title: "封面示例",
					cover: "http://mmbiz.qpic.cn/mmbiz/Q3auHgzwzM5wLlGTou7JL0oFS9yZGIK6gnzTDiaOx5oOeMKOibNZ95hsY9aVozutJUSvqUvRmTxY2OqRvsTFeIyQ/640",
					aid: "0",
					link: "javascript:void(0);",
					digest: "摘要示例"
				}, {
					title: "封面示例",
					cover: "http://mmbiz.qpic.cn/mmbiz/Q3auHgzwzM5wLlGTou7JL0oFS9yZGIK6gnzTDiaOx5oOeMKOibNZ95hsY9aVozutJUSvqUvRmTxY2OqRvsTFeIyQ/640",
					aid: "0",
					link: "javascript:void(0);",
					digest: "摘要示例"
				}]
			}
		},
		a = function(t) {
			var i = this;
			i.opt = t, p.apply(this, arguments), this._initEditArea();
		};
	return s(a, p), a.prototype.tpl = i, a.prototype.edit_tpl = e, a.prototype.default_json = l,
		a.prototype._initEditArea = function() {
			var t = this.opt,
				i = this,
				e = t.idx,
				n = $("#js_plugin_edit_area_" + e),
				p = (n.find(".js_appmsg_list"), []);
			i.renderjson.plugin1 && i.renderjson.plugin1.appmsg_list && (p = i.renderjson.plugin1.appmsg_list),
				i.isSorting = !1, i._importAppmsgList = new g({
					container: n.find(".js_import_appmsglist"),
					maxNum: 3,
					title: "封面文章",
					list: p,
					callback: function(t) {
						var e = $.extend(!0, {}, i.default_json);
						t && t.length > 0 ? (e = {
							plugin1: {
								appmsg_list: t
							}
						}, i.renderjson = e) : i.renderjson = {
							plugin1: {
								appmsg_list: []
							}
						}, i._renderTpl(e);
					},
					startSort: function() {
						i.isSorting = !0;
					},
					endSort: function() {
						i.isSorting = !1;
					}
				});
		}, a.prototype._getSelectList = function() {
			var t = !!this.renderjson.plugin1 && this.renderjson.plugin1.appmsg_list;
			if (t && t.length > 0) {
				for (var i = [], e = 0, n = t.length; n > e; ++e) i.push(t[e].aid);
				return i;
			}
			return [];
		}, a.prototype.getRenderJson = function(t) {
			return t && t.plugin1 && t.plugin1.appmsg_list && t.plugin1.appmsg_list.length > 0 ? t : $.extend(!0, {}, this.default_json);
		}, a.prototype.getEditData = function() {
			if (this.isSorting) return r.err("排序完成后才能发布"), !1;
			var t = this._getSelectList();
			return t.length > 0 ? {
				aid_list: t
			} : (r.err("请至少选择一篇文章"), !1);
		}, a.getRenderHTML = function(t) {
			var e = "plugin",
				n = {};
			n[e] = t;
			var p = i.replace(/<name>/gi, e);
			return o.compile(p)(n);
		}, a;
});
define("tpl/advanced/homepage_list.html.js", [], function() {
	return '{each list as item}\n<div class="col_tpl js_item" data-name="{item.name}" data-hid="{item.hid}" data-sn="{item.signature}">\n    <div class="msg_card">\n        <div class="msg_card_inner">\n            <div class="msg_card_bd">\n                <h4 class="msg_card_title">{item.name}</h4>\n                <div class="msg_card_info">\n                    <strong class="msg_card_info_meta">更新于{item.update_time}</strong>\n                </div>\n                <div class="msg_card_extra_info">\n                    <div class="simulator">\n                        <div class="simulator_hd">\n                            <h4 class="title">{nick_name}</h4>\n                        </div>\n                        <div class="simulator_bd">\n                            {=item.subhtml}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="homepage_mask"></div>\n    <i class="icon_card_selected">已选择</i>\n</div>\n{/each}\n';
});
define("tpl/advanced/appmsg_list.html.js", [], function() {
	return '{each data as item}\n<tr data-link="{item.link}" data-title="{item.title}">\n    <td class="table_cell">\n        <label class="frm_radio_label">\n            <i class="icon_radio"></i>\n            <span class="lbl_content">{item.title}</span>\n            <input type="radio" name="hello" class="frm_radio">\n        </label>\n    </td>\n    <td class="table_cell tr date"> {item.date}</td>\n</tr>\n{/each}\n';
});
define("tpl/advanced/menu_link_dialog.html.js", [], function() {
	return '<div>\n<div class="title_tab js_tab"></div>\n<div class="menu_tab_content">\n    <!--BEGIN 链接\n    <div class="link_insertion" style="display: none;">\n        <div class="frm_control_group">\n            <label class="frm_label" for="">请输入地址：</label>\n        <span class="frm_input_box">\n            <input class="frm_input" type="text"/>\n        </span>\n        </div>\n    </div>\n    END 链接-->\n    <!--BEGIN 素材库-->\n    <div class="media_lib js_content js_appmsg">\n        <div class="search_wrapper">\n            <span class="frm_input_box search append">\n                <a href="javascript:void(0);" class="frm_input_append js_search_btn" onclick="return false;">\n                    <i class="icon16_common search_gray">\n                        搜索\n                    </i>\n                    &nbsp;\n                </a>\n                <input type="text" placeholder="标题/作者/摘要" value="" class="frm_input js_search">\n            </span>\n        </div>\n        <div class="loading js_loading">\n            <i class="icon_loading_small white"></i>\n        </div>\n        <div class="table_wrp js_appmsg_list js_list">\n            <table class="table" cellspacing="0">\n                <thead class="thead">\n                    <tr>\n                        <td class="table_cell">标题</td>\n                        <td class="table_cell">发布日期</td>\n                    </tr>\n                </thead>\n                <tbody class="tbody"></tbody>\n            </table>\n        </div>\n        <div class="pagination_wrp js_pagebar"></div>\n    </div>\n    <!--END 素材库-->\n    <!--BEGIN 历史消息-->\n    <div class="history_msg js_content js_history">\n        <div class="preview_area">\n            <p class="desc">公众帐号历史消息列表示例</p>\n        </div>\n        <div class="form_area">\n            <label class="frm_checkbox_label">\n                <i class="icon_checkbox"></i>\n                <span class="lbl_content">跳转到历史消息列表</span>\n                <input type="checkbox" class="frm_checkbox">\n            </label>\n        </div>\n    </div>\n    <!--END 历史消息-->\n    <!--BEGIN 页面模板-->\n    <div class="homepage js_content js_homepage">\n        <div class="loading js_loading" style="display:none;">\n            <i class="icon_loading_small white"></i>\n        </div>\n        <div class="js_homepage_list js_list"></div>\n    </div>\n    <!--END 页面模板-->\n</div>\n</div>\n';
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
define("tpl/media/cardmsg.html.js", [], function() {
	return '<div class="msg_card{if _className} {_className}{/if}">\n	<div class="card_content" style="background-color: {color};">\n		<img class="logo js_logourl" data-src="{logo_url}" />\n		<div class="card_info">\n			<h4 class="card_title">{title}</h4>\n		</div>\n		<div class="deco"></div>\n	</div>\n	<p class="store">{brand_name}</p>\n</div>\n';
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
define("tpl/popover.html.js", [], function() {
	return '<div class="popover {className}">\n    <div class="popover_inner">\n        <div class="popover_content jsPopOverContent">{=content}</div>\n		<!--#0001#-->\n        {if close}<a href="javascript:;" class="popover_close icon16_common close_flat jsPopoverClose">关闭</a>{/if}\n        <!--%0001%-->\n\n        <div class="popover_bar">{each buttons as bt index}<a href="javascript:;" class="btn btn_{bt.type} jsPopoverBt">{bt.text}</a>{if index < buttons.length-1}&nbsp;{/if}{/each}</div>\n    </div>\n    <i class="popover_arrow popover_arrow_out"></i>\n    <i class="popover_arrow popover_arrow_in"></i> \n</div>\n';
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
define("tpl/tooltip.html.js", [], function(e, t, n) {
	return '<div class="tooltip">\n    <div class="tooltip_inner">{content}</div>\n    <i class="tooltip_arrow"></i>\n</div>\n';
});
define("biz_common/jquery.ui/jquery.ui.sortable.js", [], function() {
	! function(t, e) {
		function i(e, i) {
			var n, o, r, h = e.nodeName.toLowerCase();
			return "area" === h ? (n = e.parentNode, o = n.name, e.href && o && "map" === n.nodeName.toLowerCase() ? (r = t("img[usemap=#" + o + "]")[0], !!r && s(r)) : !1) : (/input|select|textarea|button|object/.test(h) ? !e.disabled : "a" === h ? e.href || i : i) && s(e);
		}

		function s(e) {
			return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
				return "hidden" === t.css(this, "visibility");
			}).length;
		}
		var n = 0,
			o = /^ui-id-\d+$/;
		t.ui = t.ui || {}, t.extend(t.ui, {
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
						for (var s, n, o = t(this[0]); o.length && o[0] !== document;) {
							if (s = o.css("position"), ("absolute" === s || "relative" === s || "fixed" === s) && (n = parseInt(o.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
							o = o.parent();
						}
					return 0;
				},
				uniqueId: function() {
					return this.each(function() {
						this.id || (this.id = "ui-id-" + ++n);
					});
				},
				removeUniqueId: function() {
					return this.each(function() {
						o.test(this.id) && t(this).removeAttr("id");
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
						n = isNaN(s);
					return (n || s >= 0) && i(e, !n);
				}
			}), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(i, s) {
				function n(e, i, s, n) {
					return t.each(o, function() {
						i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0),
							n && (i -= parseFloat(t.css(e, "margin" + this)) || 0);
					}), i;
				}
				var o = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"],
					r = s.toLowerCase(),
					h = {
						innerWidth: t.fn.innerWidth,
						innerHeight: t.fn.innerHeight,
						outerWidth: t.fn.outerWidth,
						outerHeight: t.fn.outerHeight
					};
				t.fn["inner" + s] = function(i) {
					return i === e ? h["inner" + s].call(this) : this.each(function() {
						t(this).css(r, n(this, i) + "px");
					});
				}, t.fn["outer" + s] = function(e, i) {
					return "number" != typeof e ? h["outer" + s].call(this, e) : this.each(function() {
						t(this).css(r, n(this, e, !0, i) + "px");
					});
				};
			}), t.fn.addBack || (t.fn.addBack = function(t) {
				return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
			}), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
				return function(i) {
					return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this);
				};
			}(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
			t.support.selectstart = "onselectstart" in document.createElement("div"), t.fn.extend({
				disableSelection: function() {
					return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(t) {
						t.preventDefault();
					});
				},
				enableSelection: function() {
					return this.unbind(".ui-disableSelection");
				}
			}), t.extend(t.ui, {
				plugin: {
					add: function(e, i, s) {
						var n, o = t.ui[e].prototype;
						for (n in s) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([i, s[n]]);
					},
					call: function(t, e, i) {
						var s, n = t.plugins[e];
						if (n && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)
							for (s = 0; s < n.length; s++) t.options[n[s][0]] && n[s][1].apply(t.element, i);
					}
				},
				hasScroll: function(e, i) {
					if ("hidden" === t(e).css("overflow")) return !1;
					var s = i && "left" === i ? "scrollLeft" : "scrollTop",
						n = !1;
					return e[s] > 0 ? !0 : (e[s] = 1, n = e[s] > 0, e[s] = 0, n);
				}
			});
	}(jQuery),
	function(t, e) {
		var i = 0,
			s = Array.prototype.slice,
			n = t.cleanData;
		t.cleanData = function(e) {
			for (var i, s = 0; null != (i = e[s]); s++) try {
				t(i).triggerHandler("remove");
			} catch (o) {}
			n(e);
		}, t.widget = function(e, i, s) {
			var n, o, r, h, a = {},
				l = e.split(".")[0];
			e = e.split(".")[1], n = l + "-" + e, s || (s = i, i = t.Widget), t.expr[":"][n.toLowerCase()] = function(e) {
				return !!t.data(e, n);
			}, t[l] = t[l] || {}, o = t[l][e], r = t[l][e] = function(t, e) {
				return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new r(t, e);
			}, t.extend(r, o, {
				version: s.version,
				_proto: t.extend({}, s),
				_childConstructors: []
			}), h = new i, h.options = t.widget.extend({}, h.options), t.each(s, function(e, s) {
				return t.isFunction(s) ? void(a[e] = function() {
					var t = function() {
							return i.prototype[e].apply(this, arguments);
						},
						n = function(t) {
							return i.prototype[e].apply(this, t);
						};
					return function() {
						var e, i = this._super,
							o = this._superApply;
						return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i,
							this._superApply = o, e;
					};
				}()) : void(a[e] = s);
			}), r.prototype = t.widget.extend(h, {
				widgetEventPrefix: o ? h.widgetEventPrefix : e
			}, a, {
				constructor: r,
				namespace: l,
				widgetName: e,
				widgetFullName: n
			}), o ? (t.each(o._childConstructors, function(e, i) {
				var s = i.prototype;
				t.widget(s.namespace + "." + s.widgetName, r, i._proto);
			}), delete o._childConstructors) : i._childConstructors.push(r), t.widget.bridge(e, r);
		}, t.widget.extend = function(i) {
			for (var n, o, r = s.call(arguments, 1), h = 0, a = r.length; a > h; h++)
				for (n in r[h]) o = r[h][n],
					r[h].hasOwnProperty(n) && o !== e && (i[n] = t.isPlainObject(o) ? t.isPlainObject(i[n]) ? t.widget.extend({}, i[n], o) : t.widget.extend({}, o) : o);
			return i;
		}, t.widget.bridge = function(i, n) {
			var o = n.prototype.widgetFullName || i;
			t.fn[i] = function(r) {
				var h = "string" == typeof r,
					a = s.call(arguments, 1),
					l = this;
				return r = !h && a.length ? t.widget.extend.apply(null, [r].concat(a)) : r, this.each(h ? function() {
					var s, n = t.data(this, o);
					return n ? t.isFunction(n[r]) && "_" !== r.charAt(0) ? (s = n[r].apply(n, a), s !== n && s !== e ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : void 0) : t.error("no such method '" + r + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; attempted to call method '" + r + "'");
				} : function() {
					var e = t.data(this, o);
					e ? e.option(r || {})._init() : t.data(this, o, new n(r, this));
				}), l;
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
				var n, o, r, h = i;
				if (0 === arguments.length) return t.widget.extend({}, this.options);
				if ("string" == typeof i)
					if (h = {}, n = i.split("."), i = n.shift(), n.length) {
						for (o = h[i] = t.widget.extend({}, this.options[i]), r = 0; r < n.length - 1; r++) o[n[r]] = o[n[r]] || {},
							o = o[n[r]];
						if (i = n.pop(), s === e) return o[i] === e ? null : o[i];
						o[i] = s;
					} else {
						if (s === e) return this.options[i] === e ? null : this.options[i];
						h[i] = s;
					}
				return this._setOptions(h), this;
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
				var n, o = this;
				"boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i,
					i = this.element, n = this.widget()), t.each(s, function(s, r) {
					function h() {
						return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? o[r] : r).apply(o, arguments) : void 0;
					}
					"string" != typeof r && (h.guid = r.guid = r.guid || h.guid || t.guid++);
					var a = s.match(/^(\w+)\s*(.*)$/),
						l = a[1] + o.eventNamespace,
						c = a[2];
					c ? n.delegate(c, l, h) : i.bind(l, h);
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
				var n, o, r = this.options[e];
				if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(),
					i.target = this.element[0], o = i.originalEvent)
					for (n in o) n in i || (i[n] = o[n]);
				return this.element.trigger(i, s), !(t.isFunction(r) && r.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented());
			}
		}, t.each({
			show: "fadeIn",
			hide: "fadeOut"
		}, function(e, i) {
			t.Widget.prototype["_" + e] = function(s, n, o) {
				"string" == typeof n && (n = {
					effect: n
				});
				var r, h = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
				n = n || {}, "number" == typeof n && (n = {
					duration: n
				}), r = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), r && t.effects && t.effects.effect[h] ? s[e](n) : h !== e && s[h] ? s[h](n.duration, n.easing, o) : s.queue(function(i) {
					t(this)[e](), o && o.call(s[0]), i();
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
						n = 1 === i.which,
						o = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1;
					return n && !o && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
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
		function e(t, e, i) {
			return t > e && e + i > t;
		}

		function i(t) {
			return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"));
		}
		t.widget("ui.sortable", t.ui.mouse, {
			version: "1.10.3",
			widgetEventPrefix: "sort",
			ready: !1,
			options: {
				appendTo: "parent",
				axis: !1,
				connectWith: !1,
				containment: !1,
				cursor: "auto",
				cursorAt: !1,
				dropOnEmpty: !0,
				forcePlaceholderSize: !1,
				forceHelperSize: !1,
				grid: !1,
				handle: !1,
				helper: "original",
				items: "> *",
				opacity: !1,
				placeholder: !1,
				revert: !1,
				scroll: !0,
				scrollSensitivity: 20,
				scrollSpeed: 20,
				scope: "default",
				tolerance: "intersect",
				zIndex: 1e3,
				activate: null,
				beforeStop: null,
				change: null,
				deactivate: null,
				out: null,
				over: null,
				receive: null,
				remove: null,
				sort: null,
				start: null,
				stop: null,
				update: null
			},
			_create: function() {
				var t = this.options;
				this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || i(this.items[0].item) : !1,
					this.offset = this.element.offset(), this._mouseInit(), this.ready = !0;
			},
			_destroy: function() {
				this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
				for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
				return this;
			},
			_setOption: function(e, i) {
				"disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments);
			},
			_mouseCapture: function(e, i) {
				var s = null,
					n = !1,
					o = this;
				return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e),
					t(e.target).parents().each(function() {
						return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : void 0;
					}), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), s && (!this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function() {
						this === e.target && (n = !0);
					}), n)) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1);
			},
			_mouseStart: function(e, i, s) {
				var n, o, r = this.options;
				if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e),
					this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(),
					this.offset = this.currentItem.offset(), this.offset = {
						top: this.offset.top - this.margins.top,
						left: this.offset.left - this.margins.left
					}, t.extend(this.offset, {
						click: {
							left: e.pageX - this.offset.left,
							top: e.pageY - this.offset.top
						},
						parent: this._getParentOffset(),
						relative: this._getRelativeOffset()
					}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"),
					this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY,
					r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt), this.domPosition = {
						prev: this.currentItem.prev()[0],
						parent: this.currentItem.parent()[0]
					}, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(),
					r.containment && this._setContainment(), r.cursor && "auto" !== r.cursor && (o = this.document.find("body"),
						this.storedCursor = o.css("cursor"), o.css("cursor", r.cursor), this.storedStylesheet = t("<style>*{ cursor: " + r.cursor + " !important; }</style>").appendTo(o)),
					r.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")),
						this.helper.css("opacity", r.opacity)), r.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")),
						this.helper.css("zIndex", r.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()),
					this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
					for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", e, this._uiHash(this));
				return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e),
					this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0;
			},
			_mouseDrag: function(e) {
				var i, s, n, o, r = this.options,
					h = !1;
				for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"),
					this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < r.scrollSensitivity ? this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop + r.scrollSpeed : e.pageY - this.overflowOffset.top < r.scrollSensitivity && (this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop - r.scrollSpeed),
							this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < r.scrollSensitivity ? this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft + r.scrollSpeed : e.pageX - this.overflowOffset.left < r.scrollSensitivity && (this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft - r.scrollSpeed)) : (e.pageY - t(document).scrollTop() < r.scrollSensitivity ? h = t(document).scrollTop(t(document).scrollTop() - r.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < r.scrollSensitivity && (h = t(document).scrollTop(t(document).scrollTop() + r.scrollSpeed)),
							e.pageX - t(document).scrollLeft() < r.scrollSensitivity ? h = t(document).scrollLeft(t(document).scrollLeft() - r.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < r.scrollSensitivity && (h = t(document).scrollLeft(t(document).scrollLeft() + r.scrollSpeed))),
						h !== !1 && t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)),
					this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
					this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"),
					i = this.items.length - 1; i >= 0; i--)
					if (s = this.items[i], n = s.item[0], o = this._intersectsWithPointer(s),
						o && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
						if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
						this._rearrange(e, s), this._trigger("change", e, this._uiHash());
						break;
					}
				return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()),
					this.lastPositionAbs = this.positionAbs, !1;
			},
			_mouseStop: function(e, i) {
				if (e) {
					if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
						var s = this,
							n = this.placeholder.offset(),
							o = this.options.axis,
							r = {};
						o && "x" !== o || (r.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)),
							o && "y" !== o || (r.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)),
							this.reverting = !0, t(this.helper).animate(r, parseInt(this.options.revert, 10) || 500, function() {
								s._clear(e);
							});
					} else this._clear(e, i);
					return !1;
				}
			},
			cancel: function() {
				if (this.dragging) {
					this._mouseUp({
						target: null
					}), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
					for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)),
						this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)),
							this.containers[e].containerCache.over = 0);
				}
				return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
						"original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(),
						t.extend(this, {
							helper: null,
							dragging: !1,
							reverting: !1,
							_noFinalSort: null
						}), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)),
					this;
			},
			serialize: function(e) {
				var i = this._getItemsAsjQuery(e && e.connected),
					s = [];
				return e = e || {}, t(i).each(function() {
					var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
					i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]));
				}), !s.length && e.key && s.push(e.key + "="), s.join("&");
			},
			toArray: function(e) {
				var i = this._getItemsAsjQuery(e && e.connected),
					s = [];
				return e = e || {}, i.each(function() {
					s.push(t(e.item || this).attr(e.attribute || "id") || "");
				}), s;
			},
			_intersectsWith: function(t) {
				var e = this.positionAbs.left,
					i = e + this.helperProportions.width,
					s = this.positionAbs.top,
					n = s + this.helperProportions.height,
					o = t.left,
					r = o + t.width,
					h = t.top,
					a = h + t.height,
					l = this.offset.click.top,
					c = this.offset.click.left,
					u = "x" === this.options.axis || s + l > h && a > s + l,
					p = "y" === this.options.axis || e + c > o && r > e + c,
					f = u && p;
				return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? f : o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < r && h < s + this.helperProportions.height / 2 && n - this.helperProportions.height / 2 < a;
			},
			_intersectsWithPointer: function(t) {
				var i = "x" === this.options.axis || e(this.positionAbs.top + this.offset.click.top, t.top, t.height),
					s = "y" === this.options.axis || e(this.positionAbs.left + this.offset.click.left, t.left, t.width),
					n = i && s,
					o = this._getDragVerticalDirection(),
					r = this._getDragHorizontalDirection();
				return n ? this.floating ? r && "right" === r || "down" === o ? 2 : 1 : o && ("down" === o ? 2 : 1) : !1;
			},
			_intersectsWithSides: function(t) {
				var i = e(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
					s = e(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
					n = this._getDragVerticalDirection(),
					o = this._getDragHorizontalDirection();
				return this.floating && o ? "right" === o && s || "left" === o && !s : n && ("down" === n && i || "up" === n && !i);
			},
			_getDragVerticalDirection: function() {
				var t = this.positionAbs.top - this.lastPositionAbs.top;
				return 0 !== t && (t > 0 ? "down" : "up");
			},
			_getDragHorizontalDirection: function() {
				var t = this.positionAbs.left - this.lastPositionAbs.left;
				return 0 !== t && (t > 0 ? "right" : "left");
			},
			refresh: function(t) {
				return this._refreshItems(t), this.refreshPositions(), this;
			},
			_connectWith: function() {
				var t = this.options;
				return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith;
			},
			_getItemsAsjQuery: function(e) {
				var i, s, n, o, r = [],
					h = [],
					a = this._connectWith();
				if (a && e)
					for (i = a.length - 1; i >= 0; i--)
						for (n = t(a[i]), s = n.length - 1; s >= 0; s--) o = t.data(n[s], this.widgetFullName),
							o && o !== this && !o.options.disabled && h.push([t.isFunction(o.options.items) ? o.options.items.call(o.element) : t(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
				for (h.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
						options: this.options,
						item: this.currentItem
					}) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]),
					i = h.length - 1; i >= 0; i--) h[i][0].each(function() {
					r.push(this);
				});
				return t(r);
			},
			_removeCurrentsFromItems: function() {
				var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
				this.items = t.grep(this.items, function(t) {
					for (var i = 0; i < e.length; i++)
						if (e[i] === t.item[0]) return !1;
					return !0;
				});
			},
			_refreshItems: function(e) {
				this.items = [], this.containers = [this];
				var i, s, n, o, r, h, a, l, c = this.items,
					u = [
						[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
							item: this.currentItem
						}) : t(this.options.items, this.element), this]
					],
					p = this._connectWith();
				if (p && this.ready)
					for (i = p.length - 1; i >= 0; i--)
						for (n = t(p[i]), s = n.length - 1; s >= 0; s--) o = t.data(n[s], this.widgetFullName),
							o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
								item: this.currentItem
							}) : t(o.options.items, o.element), o]), this.containers.push(o));
				for (i = u.length - 1; i >= 0; i--)
					for (r = u[i][1], h = u[i][0], s = 0, l = h.length; l > s; s++) a = t(h[s]),
						a.data(this.widgetName + "-item", r), c.push({
							item: a,
							instance: r,
							width: 0,
							height: 0,
							left: 0,
							top: 0
						});
			},
			refreshPositions: function(e) {
				this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
				var i, s, n, o;
				for (i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item,
					e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left,
					s.top = o.top);
				if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
				else
					for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(),
						this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top,
						this.containers[i].containerCache.width = this.containers[i].element.outerWidth(),
						this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
				return this;
			},
			_createPlaceholder: function(e) {
				e = e || this;
				var i, s = e.options;
				s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
						element: function() {
							var s = e.currentItem[0].nodeName.toLowerCase(),
								n = t("<" + s + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
							return "tr" === s ? e.currentItem.children().each(function() {
									t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(n);
								}) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"),
								n;
						},
						update: function(t, n) {
							(!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)),
								n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)));
						}
					}), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder),
					s.placeholder.update(e, e.placeholder);
			},
			_contactContainers: function(s) {
				var n, o, r, h, a, l, c, u, p, f, d = null,
					m = null;
				for (n = this.containers.length - 1; n >= 0; n--)
					if (!t.contains(this.currentItem[0], this.containers[n].element[0]))
						if (this._intersectsWith(this.containers[n].containerCache)) {
							if (d && t.contains(this.containers[n].element[0], d.element[0])) continue;
							d = this.containers[n], m = n;
						} else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", s, this._uiHash(this)),
							this.containers[n].containerCache.over = 0);
				if (d)
					if (1 === this.containers.length) this.containers[m].containerCache.over || (this.containers[m]._trigger("over", s, this._uiHash(this)),
						this.containers[m].containerCache.over = 1);
					else {
						for (r = 1e4, h = null, f = d.floating || i(this.currentItem), a = f ? "left" : "top", l = f ? "width" : "height",
							c = this.positionAbs[a] + this.offset.click[a], o = this.items.length - 1; o >= 0; o--) t.contains(this.containers[m].element[0], this.items[o].item[0]) && this.items[o].item[0] !== this.currentItem[0] && (!f || e(this.positionAbs.top + this.offset.click.top, this.items[o].top, this.items[o].height)) && (u = this.items[o].item.offset()[a],
							p = !1, Math.abs(u - c) > Math.abs(u + this.items[o][l] - c) && (p = !0, u += this.items[o][l]), Math.abs(u - c) < r && (r = Math.abs(u - c),
								h = this.items[o], this.direction = p ? "up" : "down"));
						if (!h && !this.options.dropOnEmpty) return;
						if (this.currentContainer === this.containers[m]) return;
						h ? this._rearrange(s, h, null, !0) : this._rearrange(s, null, this.containers[m].element, !0),
							this._trigger("change", s, this._uiHash()), this.containers[m]._trigger("change", s, this._uiHash(this)),
							this.currentContainer = this.containers[m], this.options.placeholder.update(this.currentContainer, this.placeholder),
							this.containers[m]._trigger("over", s, this._uiHash(this)), this.containers[m].containerCache.over = 1;
					}
			},
			_createHelper: function(e) {
				var i = this.options,
					s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
				return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]),
					s[0] === this.currentItem[0] && (this._storedCSS = {
						width: this.currentItem[0].style.width,
						height: this.currentItem[0].style.height,
						position: this.currentItem.css("position"),
						top: this.currentItem.css("top"),
						left: this.currentItem.css("left")
					}), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()),
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
				this.offsetParent = this.helper.offsetParent();
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
					var t = this.currentItem.position();
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
					left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
					top: parseInt(this.currentItem.css("marginTop"), 10) || 0
				};
			},
			_cacheHelperProportions: function() {
				this.helperProportions = {
					width: this.helper.outerWidth(),
					height: this.helper.outerHeight()
				};
			},
			_setContainment: function() {
				var e, i, s, n = this.options;
				"parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === n.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === n.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]),
					/^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(),
						s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]);
			},
			_convertPositionTo: function(e, i) {
				i || (i = this.position);
				var s = "absolute" === e ? 1 : -1,
					n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
					o = /(html|body)/i.test(n[0].tagName);
				return {
					top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
					left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
				};
			},
			_generatePosition: function(e) {
				var i, s, n = this.options,
					o = e.pageX,
					r = e.pageY,
					h = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
					a = /(html|body)/i.test(h[0].tagName);
				return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()),
					this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left),
							e.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top),
							e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left),
							e.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)),
						n.grid && (i = this.originalPageY + Math.round((r - this.originalPageY) / n.grid[1]) * n.grid[1],
							r = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i,
							s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
						top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : h.scrollTop()),
						left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : h.scrollLeft())
					};
			},
			_rearrange: function(t, e, i, s) {
				i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling),
					this.counter = this.counter ? ++this.counter : 1;
				var n = this.counter;
				this._delay(function() {
					n === this.counter && this.refreshPositions(!s);
				});
			},
			_clear: function(t, e) {
				this.reverting = !1;
				var i, s = [];
				if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem),
					this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
					for (i in this._storedCSS)("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
					this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
				} else this.currentItem.show();
				for (this.fromOutside && !e && s.push(function(t) {
					this._trigger("receive", t, this._uiHash(this.fromOutside));
				}), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function(t) {
					this._trigger("update", t, this._uiHash());
				}), this !== this.currentContainer && (e || (s.push(function(t) {
					this._trigger("remove", t, this._uiHash());
				}), s.push(function(t) {
					return function(e) {
						t._trigger("receive", e, this._uiHash(this));
					};
				}.call(this, this.currentContainer)), s.push(function(t) {
					return function(e) {
						t._trigger("update", e, this._uiHash(this));
					};
				}.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) e || s.push(function(t) {
					return function(e) {
						t._trigger("deactivate", e, this._uiHash(this));
					};
				}.call(this, this.containers[i])), this.containers[i].containerCache.over && (s.push(function(t) {
					return function(e) {
						t._trigger("out", e, this._uiHash(this));
					};
				}.call(this, this.containers[i])), this.containers[i].containerCache.over = 0);
				if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor),
						this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity),
					this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex),
					this.dragging = !1, this.cancelHelperRemoval) {
					if (!e) {
						for (this._trigger("beforeStop", t, this._uiHash()), i = 0; i < s.length; i++) s[i].call(this, t);
						this._trigger("stop", t, this._uiHash());
					}
					return this.fromOutside = !1, !1;
				}
				if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
					this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !e) {
					for (i = 0; i < s.length; i++) s[i].call(this, t);
					this._trigger("stop", t, this._uiHash());
				}
				return this.fromOutside = !1, !0;
			},
			_trigger: function() {
				t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel();
			},
			_uiHash: function(e) {
				var i = e || this;
				return {
					helper: i.helper,
					placeholder: i.placeholder || t([]),
					position: i.position,
					originalPosition: i.originalPosition,
					offset: i.positionAbs,
					item: i.currentItem,
					sender: e ? e.element : null
				};
			}
		});
	}(jQuery);
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
define("advanced/menu_link_dialog.js", ["common/wx/popup.js", "common/wx/top.js", "common/wx/Tips.js", "common/wx/Cgi.js", "common/wx/pagebar.js", "common/wx/time.js", "tpl/advanced/menu_link_dialog.html.js", "tpl/advanced/appmsg_list.html.js", "tpl/advanced/homepage_list.html.js", "homepage/plugins/plugin1.js", "homepage/plugins/plugin2.js", "homepage/plugins/plugin3.js"], function(e) {
	"use strict";

	function t(e) {
		this.opt = e, this.biz = e.biz, this.onOK = e.onOK, this.can_use_homepage = e.can_use_homepage,
			this.createDialog();
	}
	e("common/wx/popup.js");
	var i = e("common/wx/top.js"),
		n = e("common/wx/Tips.js"),
		s = e("common/wx/Cgi.js"),
		a = e("common/wx/pagebar.js"),
		o = e("common/wx/time.js"),
		d = e("tpl/advanced/menu_link_dialog.html.js"),
		l = e("tpl/advanced/appmsg_list.html.js"),
		p = e("tpl/advanced/homepage_list.html.js"),
		m = e("homepage/plugins/plugin1.js"),
		r = e("homepage/plugins/plugin2.js"),
		c = e("homepage/plugins/plugin3.js"),
		g = {
			1: m,
			2: r,
			3: c
		},
		h = 0,
		u = "http://mp.weixin.qq.com/mp/getmasssendmsg?__biz=%s#wechat_webview_type=1&wechat_redirect",
		_ = "http://mp.weixin.qq.com/mp/homepage?__biz=%s&hid=%s&sn=%s#wechat_redirect",
		f = {
			createDialog: function() {
				var e = this,
					t = $.parseHTML(wx.T(d, {}));
				this.dialog && this.dialog.popup("remove"), this.dialog = $(t[0]).popup({
						title: "选择图文消息",
						className: "align_edge",
						width: 720,
						onOK: function() {
							if (e.$btn.hasClass("btn_disabled")) return n.err("请选择图文消息"), !0;
							var t = e.currentTab,
								i = {
									type: t,
									name: e.topData[t].name
								},
								s = e.$dom.find(".js_content").eq(t);
							i.title = s.data("title") || "", i.link = s.data("link"), e.onOK && e.onOK(i);
						},
						onCancel: function() {
							this.hide(), e.dialog = null;
						},
						onHide: function() {
							e.$dom.off(), this.remove(), e.dialog = null;
						}
					}), e.$dom = e.dialog.popup("get"), e.$btn = e.$dom.find(".js_btn_p").eq(0).addClass("btn_disabled"),
					e.init();
			},
			init: function() {
				var e = this;
				e.topData = [{
						id: "appmsg",
						name: "素材库"
					}, {
						id: "history",
						name: "历史消息"
					}], e.can_use_homepage && e.topData.push({
						id: "homepage",
						name: "页面模板"
					}), e.tab = new i(e.$dom.find(".js_tab"), e.topData), e.tab.selected(0), e.currentTab = 0,
					e.initEvent(), e.initAppMsg();
			},
			initEvent: function() {
				var e = this;
				e.$dom.on("click", ".js_top", function() {
					var t = $(this).data("id"),
						i = $(this).data("index");
					if (i != e.currentTab) {
						var n = e.$dom.find(".js_content").hide(),
							s = n.eq(i).show();
						switch (s.data("link") ? e.$btn.removeClass("btn_disabled") : e.$btn.addClass("btn_disabled"),
							t) {
							case "history":
								e.initHistory();
								break;

							case "homepage":
								e.initHomePage();
						}
						e.tab.selected(e.currentTab = i), e.resetPos();
					}
				}), e.$dom.on("click", "a", function(e) {
					e.preventDefault();
				}), e.$dom.on("mousewheel", ".js_appmsg_list", function(e) {
					this.scrollTop -= e.originalEvent.wheelDelta > 0 ? 60 : -60, e.preventDefault();
				}).on("DOMMouseScroll", ".js_appmsg_list", function(e) {
					this.scrollTop += e.originalEvent.detail > 0 ? 60 : -60, e.preventDefault();
				}), e.$dom.on("mousewheel", ".js_content", function(e) {
					this.scrollTop -= e.originalEvent.wheelDelta > 0 ? 60 : -60, e.preventDefault();
				}).on("DOMMouseScroll", ".js_content", function(e) {
					this.scrollTop += e.originalEvent.detail > 0 ? 60 : -60, e.preventDefault();
				});
			},
			initAppMsg: function() {
				var e = this;
				e.appMsgInited || (e.getAppMsgList(), e.$dom.on("click", ".js_search_btn", function() {
					e.getAppMsgList({
						query: e.$dom.find(".js_search").val()
					});
				}), e.$dom.on("keyup", ".js_search", function(t) {
					wx.isHotkey(t, "enter") && e.getAppMsgList({
						query: e.$dom.find(".js_search").val()
					});
				}), e.$dom.find(".js_appmsg_list").on("click", "tr", function() {
					if (!$(this).find("label").hasClass("selected")) {
						var t = $(this);
						t.siblings().find("label").removeClass("selected"), t.find("label").addClass("selected");
						var i = t.data("title"),
							n = t.data("link");
						e.$dom.find(".js_appmsg").data("title", i), e.$dom.find(".js_appmsg").data("link", n),
							e.$btn.removeClass("btn_disabled");
					}
				}), e.appMsgInited = !0);
			},
			getAppMsgList: function(e) {
				var t = this,
					i = $.extend({
						action: "list_ex",
						begin: 0,
						count: 10,
						query: "",
						scene: 1
					}, e || {}),
					a = t.loadingFlag = ++h;
				t.$dom.find(".js_appmsg_list").hide(), t.$dom.find(".js_appmsg .js_loading").show(),
					t.resetPos(), s.post({
						url: "/cgi-bin/appmsg",
						data: i,
						complete: function() {
							t.$dom.find(".js_appmsg .js_loading").hide(), t.resetPos();
						}
					}, {
						done: function(e) {
							if (a == t.loadingFlag)
								if (e && e.base_resp) {
									if (0 == e.base_resp.ret) return t.renderAppMsg(e.app_msg_list), void t.renderPageBar(i.begin, e.app_msg_cnt);
									s.show(e);
								} else n.err("系统错误");
						},
						fail: function() {
							n.err("系统错误");
						}
					});
			},
			renderAppMsg: function(e) {
				var t = this;
				$.each(e, function(e, t) {
						t.date = o.formatDate(new Date(1e3 * t.update_time), "YYYY年MM月DD日");
					}), t.$dom.find(".js_appmsg_list").show().find("tbody").html(e.length ? wx.T(l, {
						data: e
					}) : '<tr class="empty_item"><td colspan="10" class="empty_tips">暂无数据</td></tr>'),
					t.$dom.find(".js_appmsg").data("title", null), t.$dom.find(".js_appmsg").data("link", null),
					t.$btn.addClass("btn_disabled"), t.resetPos();
			},
			renderPageBar: function(e, t) {
				var i = this;
				e = e || 0, new a({
					container: i.$dom.find(".js_pagebar"),
					perPage: 10,
					initShowPage: (e / 10 | 0) + 1,
					totalItemsNum: t,
					first: !1,
					last: !1,
					isSimple: !0,
					callback: function(e) {
						var t = e.currentPage;
						i.getAppMsgList({
							begin: 10 * (t - 1),
							query: i.$dom.find(".js_search").val()
						});
					}
				});
			},
			initHistory: function() {
				var e = this;
				e.historyInited || (e.$dom.find(".js_history").on("change", "input", function() {
					var t = "";
					$(this).prop("checked") ? ($(this).closest("label").addClass("selected"), t = u.sprintf(e.biz),
						e.$btn.removeClass("btn_disabled")) : ($(this).closest("label").removeClass("selected"),
						t = null, e.$btn.addClass("btn_disabled")), e.$dom.find(".js_history").data("link", t);
				}), e.historyInited = !0);
			},
			initHomePage: function() {
				var e = this;
				if (!e.homePageInited) {
					var t = e.$dom.find(".js_homepage");
					t.find(".js_homepage_list").hide(), t.find(".js_loading").show(), s.get({
						url: "/advanced/homepage?action=list",
						complete: function() {
							t.find(".js_loading").hide();
						}
					}, {
						done: function(t) {
							0 == t.base_resp.ret ? e.renderHomePage(JSON.parse(t.data).list) : s.show(t);
						},
						fail: function() {
							n.err("网络错误");
						}
					}), t.on("click", ".js_item", function() {
						$(this).addClass("selected").siblings().removeClass("selected"), t.data("link", _.sprintf(e.biz, $(this).data("hid"), $(this).data("sn"))),
							t.data("title", $(this).data("name")), e.$btn.removeClass("btn_disabled");
					}), e.homePageInited = !0;
				}
			},
			renderHomePage: function(e) {
				var t = this;
				$.each(e, function(e, t) {
						var i = [];
						$.each(t.render_json.plugin_data, function(e, t) {
							i.push(g[t.pid].getRenderHTML(t));
						}), t.subhtml = i.join(""), t.update_time = o.formatDate(new Date(1e3 * t.update_time), "YYYY-MM-DD HH:mm:ss");
					}), e.length ? t.$dom.find(".js_homepage_list").html(wx.T(p, {
						list: e,
						nick_name: wx.cgiData.nick_name
					})).show() : t.$dom.find(".js_homepage_list").html('<p class="no_homepage">暂无页面模板</p>').show(),
					t.resetPos();
			},
			resetPos: function() {
				this.dialog && this.dialog.popup("resetPosition");
			}
		};
	return $.extend(t.prototype, f), t;
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
define("biz_common/xss.js", [], function(t, e, i) {
	function s(t, e, i) {
		if ("href" === e || "src" === e) {
			if (p.lastIndex = 0, p.test(i)) return "#";
			if (v.lastIndex = 0, v.test(i)) return "#";
		} else if ("style" === e) {
			if (m.lastIndex = 0, m.test(i)) return "#";
			if (w.lastIndex = 0, w.test(i)) return "";
		}
	}

	function r(t, e) {
		return n(e);
	}

	function n(t) {
		return t.replace(f, "&lt;").replace(u, "&gt;");
	}

	function o(t, e) {
		return String.fromCharCode(parseInt(e));
	}

	function a(t) {
		"use strict";
		this.options = t = t || {}, this.whiteList = t.whiteList || e.whiteList, this.onTagAttr = t.onTagAttr || e.onTagAttr,
			this.onIgnoreTag = t.onIgnoreTag || e.onIgnoreTag;
	}

	function l(t, e) {
		var i = new a(e);
		return i.process(t);
	}
	var c = {
			h1: [],
			h2: [],
			h3: [],
			h4: [],
			h5: [],
			h6: [],
			hr: [],
			span: [],
			strong: [],
			b: [],
			i: [],
			br: [],
			p: [],
			pre: [],
			code: [],
			a: ["target", "href", "title"],
			img: ["src", "alt", "title"],
			div: [],
			table: ["width", "border"],
			tr: [],
			td: ["width", "colspan"],
			th: ["width", "colspan"],
			tbody: [],
			ul: [],
			li: [],
			ol: [],
			dl: [],
			dt: [],
			em: [],
			cite: [],
			section: [],
			header: [],
			footer: [],
			blockquote: [],
			audio: ["autoplay", "controls", "loop", "preload", "src"],
			video: ["autoplay", "controls", "loop", "preload", "src", "height", "width"]
		},
		f = /</g,
		u = />/g,
		h = /"/g,
		g = /[^a-zA-Z0-9_:\.\-]/gim,
		d = /&#([a-zA-Z0-9]*);?/gim,
		p = /\/\*|\*\//gm,
		v = /^[\s"'`]*((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi,
		m = /\/\*|\*\//gm,
		w = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi;
	a.prototype.filterAttributes = function(t, e) {
		"use strict";
		t = t.toLowerCase();
		for (var i = this, s = this.whiteList[t], r = 0, n = "", a = !1, l = !1, c = function(e, r) {
			if (e = e.trim(), !l && "/" === e) return void(l = !0);
			if (e = e.replace(g, "").toLowerCase(), !(e.length < 1) && -1 !== s.indexOf(e)) {
				if (r) {
					r = r.trim().replace(h, "&quote;"), r = r.replace(d, o);
					for (var a = "", c = 0, f = r.length; f > c; c++) a += r.charCodeAt(c) < 32 ? " " : r.charAt(c);
					r = a.trim();
					var u = i.onTagAttr(t, e, r);
					"undefined" != typeof u && (r = u);
				}
				n += e + (r ? '="' + r + '"' : "") + " ";
			}
		}, f = 0, u = e.length; u > f; f++) {
			var p = e.charAt(f);
			if (a !== !1 || "=" !== p)
				if (a === !1 || f !== r || '"' !== p && "'" !== p)
					if (" " !== p);
					else {
						var v = e.slice(r, f).trim();
						a === !1 ? c(v) : c(a, v), a = !1, r = f + 1;
					} else {
				var m = e.indexOf(p, f + 1);
				if (-1 === m) break;
				var v = e.slice(r + 1, m).trim();
				c(a, v), a = !1, f = m, r = f + 1;
			} else a = e.slice(r, f), r = f + 1;
		}
		return r < e.length && (a === !1 ? c(e.slice(r)) : c(a, e.slice(r))), l && (n += "/"), n.trim();
	}, a.prototype.addNewTag = function(t, e, i) {
		"use strict";
		var s = "",
			r = "</" === t.slice(0, 2) ? 2 : 1,
			o = t.indexOf(" ");
		if (-1 === o) var a = t.slice(r, t.length - 1).trim();
		else var a = t.slice(r, o + 1).trim();
		if (a = a.toLowerCase(), a in this.whiteList)
			if (-1 === o) s += t.slice(0, r) + a + ">";
			else {
				var l = this.filterAttributes(a, t.slice(o + 1, t.length - 1).trim());
				s += t.slice(0, r) + a + (l.length > 0 ? " " + l : "") + ">";
			} else {
			var c = {
					isClosing: 2 === r,
					position: i,
					originalPosition: e - t.length + 1
				},
				f = this.onIgnoreTag(a, t, c);
			"undefined" == typeof f && (f = n(t)), s += f;
		}
		return s;
	}, a.prototype.process = function(t) {
		"use strict";
		for (var e = "", i = 0, s = !1, r = !1, o = 0, o = 0, a = t.length; a > o; o++) {
			var l = t.charAt(o);
			if (s === !1) {
				if ("<" === l) {
					s = o;
					continue;
				}
			} else if (r === !1) {
				if ("<" === l) {
					e += n(t.slice(i, o)), s = o, i = o;
					continue;
				}
				if (">" === l) {
					e += n(t.slice(i, s)), e += this.addNewTag(t.slice(s, o + 1), o, e.length), i = o + 1, s = !1;
					continue;
				}
				if ('"' === l || "'" === l) {
					r = l;
					continue;
				}
			} else if (l === r) {
				r = !1;
				continue;
			}
		}
		return i < t.length && (e += n(t.substr(i))), e;
	}, e = i.exports = l, e.FilterXSS = a, e.whiteList = c, e.onTagAttr = s, e.onIgnoreTag = r, e.utils = {
		tagFilter: function(t, e) {
			"function" != typeof e && (e = function() {});
			var i = [],
				s = !1;
			return {
				onIgnoreTag: function(r, n, o) {
					if (-1 !== t.indexOf(r)) {
						var a = "[removed]";
						if (s !== !1 && o.isClosing) {
							var l = o.position + a.length;
							i.push([s, l]), s = !1;
						} else s = o.position;
						return a;
					}
					return e(r, n, o);
				},
				filter: function(t) {
					var e = "",
						s = 0;
					return i.forEach(function(i) {
						e += t.slice(s, i[0]), s = i[1];
					}), e += t.slice(s);
				}
			};
		}
	};
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
define("common/wx/richEditor/msgSender.js", ["common/wx/popup.js", "widget/msg_sender.css", "common/qq/jquery.plugin/tab.js", "common/wx/richEditor/emotionEditor.js", "media/media_dialog.js", "common/wx/media/factory.js", "common/qq/Class.js", "common/wx/Tips.js", "common/wx/media/audio.js", "common/wx/media/img.js", "common/wx/media/video.js", "common/wx/media/cardmsg.js", "common/wx/tooltip.js", "common/wx/media/appmsg.js", "biz_web/utils/upload.js"], function(e) {
	"use strict";

	function t(e, t) {
		for (var i = [], n = 0; n < e.length; ++n) {
			var s = e[n];
			t && t[s.acl] && i.push(s);
		}
		return i;
	}

	function i(e) {
		var t = {},
			i = e.slice();
		i.push({
			acl: "can_video_msg",
			className: "tab_video",
			selector: "js_videoArea",
			text: "视频",
			type: 4,
			index: 3
		}, {
			acl: "can_use_shortvideo",
			className: "tab_video",
			selector: "js_videoArea",
			text: "视频",
			type: 21,
			index: 3
		});
		for (var n = 0; n < i.length; ++n) {
			var s = i[n];
			s.index = s.index || n, t[s.type] = s;
		}
		return t;
	}
	e("common/wx/popup.js"), e("widget/msg_sender.css");
	var n = (e("common/qq/jquery.plugin/tab.js"), e("common/wx/richEditor/emotionEditor.js")),
		s = e("media/media_dialog.js"),
		a = e("common/wx/media/factory.js"),
		o = e("common/qq/Class.js"),
		r = e("common/wx/Tips.js"),
		d = (e("common/wx/media/audio.js"),
			e("common/wx/media/img.js"), e("common/wx/media/video.js"), e("common/wx/media/cardmsg.js")),
		c = (e("common/wx/tooltip.js"),
			e("common/wx/media/appmsg.js"), e("biz_web/utils/upload.js")),
		p = 1,
		l = [{
			text: "图文消息",
			acl: "can_app_msg",
			className: "tab_appmsg",
			selector: "js_appmsgArea",
			type: 10
		}, {
			text: "文字",
			acl: "can_text_msg",
			className: "tab_text",
			selector: "js_textArea",
			innerClassName: "no_extra",
			type: 1
		}, {
			text: "图片",
			acl: "can_image_msg",
			className: "tab_img",
			selector: "js_imgArea",
			type: 2
		}, {
			text: "语音",
			acl: "can_voice_msg",
			className: "tab_audio",
			selector: "js_audioArea",
			type: 3
		}, {
			text: "视频",
			acl: "can_video_msg",
			className: "tab_video",
			selector: "js_videoArea",
			type: 15
		}, {
			text: "商品消息",
			acl: "can_commodity_app_msg",
			className: "tab_commondity_appmsg",
			selector: "js_commondityAppmsgArea",
			type: 11
		}, {
			text: "卡券",
			acl: "can_card_msg",
			className: "tab_cardmsg",
			selector: "js_cardmsgArea",
			type: 16
		}],
		m = a.itemRender,
		g = o.declare({
			select: function() {
				this.msgSender.type = this.type;
			},
			fillData: function() {},
			getData: function() {},
			click: function() {
				this.msgSender.type = this.type;
			}
		}),
		f = g.Inherit({
			init: function(e) {
				this.msgSender = e, this.type = 1, this.info = e.infos[this.type], this.wordlimit = e.opt.wordlimit,
					this.index = this.info && this.info.index;
			},
			fillData: function(e) {
				var t = this.msgSender;
				t.type = this.type, t.select(this.index), t.emotionEditor.setContent(e.content);
			},
			getData: function() {
				var e = this.msgSender.emotionEditor.getContent();
				return {
					type: this.type,
					content: e
				};
			},
			clear: function() {
				return this.fillData({
					content: ""
				});
			},
			isValidate: function(e) {
				var t = e && 1 == e.type && !!("" != e.content && e.content.length <= this.wordlimit);
				return t || r.err("文字必须为1到%s个字".sprintf(this.wordlimit)), t;
			},
			click: function() {
				var e = this;
				this.msgSender.type = this.type, setTimeout(function() {
					e.msgSender.emotionEditor.insertHTML();
				});
			}
		}),
		u = g.Inherit({
			init: function(e, t) {
				this.type = t, this.msgSender = e, this.info = e.infos[t], this.index = this.info && this.info.index;
			},
			click: function() {
				var e = this,
					t = this.type;
				if (this.msgSender.type = t, 2 == t || 3 == t) {
					var i = 2 == t ? "msgSendImgUploadBt" : "msgSendAudioUploadBt";
					c.uploadImageLibFile({
							container: "#" + i,
							type: t,
							doublewrite: !0,
							groupid: 1,
							pick: {
								multiple: !1
							},
							onComplete: function(i, n, s, a) {
								if (0 == a.base_resp.ret) {
									var o, r = "msgSender_media_%s_%s".sprintf(e.msgSender.gid, t);
									o = 2 == t ? {
											file_id: a.content,
											source: "file"
										} : {
											file_id: a.content,
											source: "file",
											name: s.name,
											play_length: s.size
										}, $("." + e.info.selector).find(".jsMsgSendTab").hide().after('<div id="%s"></div>'.sprintf(r)),
										m[t] && m[t]("#" + r, o), $("#" + r).append('<a href="javascript:;" class="jsmsgSenderDelBt link_dele" data-type="%s" onclick="return false;">删除</a>'.sprintf(t)),
										e.msgSender.opt.onSelect && e.msgSender.opt.onSelect(t, o);
								}
							},
							onAllComplete: function() {
								r.suc("上传成功");
							}
						}),
						function() {
							$("#" + i).trigger("click");
						}.delay(.1);
				}
				if (10 != this.type && 2 != this.type && 3 != this.type && 11 != this.type && 15 != this.type) {
					var n = null,
						e = this;
					return n = 10 == e.type || 11 == e.type || 15 == e.type ? s.getAppmsg : s.getFile, n({
						type: e.type,
						begin: 0,
						count: 10,
						onSelect: function(t, i) {
							var n = e.msgSender;
							e.msgSender.type = t, n.select(e.index);
							var s = "msgSender_media_%s_%s".sprintf(n.gid, t);
							$("." + e.info.selector).html('<div id="%s"></div>'.sprintf(s)), m[t] && m[t]("#" + s, i),
								$("#" + s).append('<a href="javascript:;" class="link_dele jsmsgSenderDelBt" onclick="return false;">删除</a>'),
								e.msgSender.opt.onSelect && e.msgSender.opt.onSelect(t, i);
						}
					}), !1;
				}
			},
			fillData: function(e) {
				var t = this.msgSender,
					i = this.type,
					n = "msgSender_media_%s_%s".sprintf(t.gid, i);
				$("." + this.info.selector).find(".jsMsgSendTab").hide().after('<div id="%s"></div>'.sprintf(n)),
					t.select(this.index), this.msgSender.type = i, m[i] && m[i]("#" + n, e), $("#" + n).append('<a href="javascript:;" class="link_dele jsmsgSenderDelBt" onclick="return false;">删除</a>');
			},
			clear: function() {
				this.type;
				return $("." + this.info.selector).html("");
			},
			getData: function(e) {
				var t = this.type,
					i = "msgSender_media_%s_%s".sprintf(this.msgSender.gid, t),
					n = $("#" + i).data("opt");
				if (n) {
					if (e) {
						n.type = t;
						var s = n.data || {};
						return $.extend(n, s);
					}
					return 10 == t || 11 == t ? {
						type: t,
						app_id: n.data.app_id
					} : 15 == t ? {
						type: t,
						app_id: n.app_id
					} : {
						type: t,
						file_id: n.file_id
					};
				}
				return !1;
			},
			isValidate: function(e) {
				var t = !!e;
				if (e) {
					var i = e.type;
					t = 10 == i || 11 == i || 15 == i ? !(!e.type || !e.app_id) : !(!e.type || !e.file_id);
				}
				return t || r.err("请添加素材"), t;
			}
		}),
		h = {
			wordlimit: 600
		},
		_ = o.declare({
			init: function(e, n) {
				var s = this,
					a = 0;
				e = $(e).show(), s.dom = e, s.gid = p++, s.opt = $.extend(!0, {}, h, n);
				var o = l,
					r = n && n.acl || {};
				o = t(o, r), s.infos = i(o), s.op = {
					1: new f(s),
					2: new u(s, 2),
					3: new u(s, 3),
					4: new u(s, 4),
					6: new u(s, 6),
					7: new u(s, 15),
					9: new u(s, 21),
					10: new u(s, 10),
					11: new u(s, 11),
					15: new u(s, 15),
					16: new d(s),
					21: new u(s, 21)
				}, s.tab = e.tab({
					index: a,
					tabs: o,
					select: function() {},
					click: function(e, t, i, a) {
						return n.onClick && n.onClick(e, t, i, a), s.op[a] && s.op[a].click();
					}
				}), s._init(e, n), s.initEvent();
				var c = n.data;
				c ? 10 == this.opt.data.type ? c.data && s.setData(c) : s.setData(c) : s.type = o[0] && o[0].type ? o[0].type : 10;
			},
			initEvent: function() {
				var e = this;
				$(".jsMsgSenderPopBt").click(function() {
					var t, i = $(this).data("type"),
						n = $(this).data("index"),
						a = $(".jsMsgSendTab[data-index=" + n + "]");
					(t = 10 == i || 11 == i || 15 == i ? s.getAppmsg : s.getFile)({
						type: i,
						begin: 0,
						count: 10,
						onSelect: function(t, i) {
							e.type = t, e.select(n);
							var s = "msgSender_media_%s_%s".sprintf(e.gid, t);
							a.hide().after('<div id="%s"></div>'.sprintf(s)), m[t] && m[t]("#" + s, i), $("#" + s).append('<a href="javascript:;" class="jsmsgSenderDelBt link_dele" data-type="%s" onclick="return false;">删除</a>'.sprintf(t)),
								e.opt.onSelect && e.opt.onSelect(t, i);
						}
					});
				}), this.dom.on("click", ".jsmsgSenderDelBt", function() {
					$(this).parent().siblings(".jsMsgSendTab").show(), $(this).parent().remove();
					var t;
					$("#msgSendImgUploadBt").is(":visible") && 0 == $("#msgSendImgUploadBt").parent().find("input[type=file]").length ? t = 2 : $("#msgSendAudioUploadBt").is(":visible") && 0 == $("#msgSendAudioUploadBt").parent().find("input[type=file]").length && (t = 3), (2 == t || 3 == t) && (c.uploadImageLibFile({
						container: 2 == t ? "#msgSendImgUploadBt" : "#msgSendAudioUploadBt",
						type: t,
						doublewrite: !0,
						groupid: 1,
						pick: {
							multiple: !1
						},
						onComplete: function(i, n, s, a) {
							if (0 == a.base_resp.ret) {
								var o, r = "msgSender_media_%s_%s".sprintf(e.gid, t);
								o = 2 == t ? {
										file_id: a.content,
										source: "file"
									} : {
										file_id: a.content,
										source: "file",
										name: s.name,
										play_length: s.size
									}, $(".jsMsgSendTab[data-type=" + t + "]").hide().after('<div id="%s"></div>'.sprintf(r)),
									m[t] && m[t]("#" + r, o), $("#" + r).append('<a href="javascript:;" class="jsmsgSenderDelBt link_dele" data-type="%s" onclick="return false;">删除</a>'.sprintf(t)),
									e.opt.onSelect && e.opt.onSelect(t, o);
							}
						},
						onAllComplete: function() {
							r.suc("上传成功");
						}
					}), function() {
						$(2 == t ? "#msgSendImgUploadBt" : "#msgSendAudioUploadBt").trigger("click");
					}.delay(.1));
				});
			},
			setData: function(e) {
				if (e) {
					var t = this,
						i = null,
						n = e.type || 10;
					t.type = n, (i = t.op[n]) && i.fillData(e);
				}
			},
			_init: function(e) {
				this.dom = e, this.emotionEditor = new n($(".js_textArea", e), {
					wordlimit: this.opt.wordlimit,
					linebreak: !0
				});
			},
			getData: function(e) {
				if (this.type) {
					var t = this.op[this.type].getData(e);
					return {
						error: !this.isValidate(),
						data: t
					};
				}
				return {
					error: !0
				};
			},
			getArea: function(e) {
				return this.dom.find("." + this.infos[e].selector);
			},
			getTabs: function() {
				return this.tab.getTabs();
			},
			isValidate: function() {
				var e = this.type && this.op[this.type].getData();
				return this.type && this.op[this.type].isValidate(e);
			},
			clear: function() {
				return this.type && this.op[this.type].clear();
			},
			select: function(e) {
				return this.tab.select(e);
			}
		});
	return _;
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
define("advanced/menuSetting.js", ["common/wx/Tips.js", "common/wx/tooltip.js", "common/wx/simplePopup.js", "common/wx/popover.js", "common/wx/dialog.js", "common/wx/Cgi.js", "common/wx/richEditor/msgSender.js", "common/wx/media/factory.js", "common/qq/mask.js", "biz_common/xss.js", "biz_common/moment.js", "advanced/menu_link_dialog.js", "cardticket/parse_data.js", "common/qq/emoji.js", "biz_web/lib/json.js", "biz_common/jquery.ui/jquery.ui.sortable.js"], function(e) {
	"use strict";

	function t(e) {
		this.data = e;
	}

	function i(e, t) {
		var i = [],
			n = 0,
			s = 0;
		$.each(e, function(e, t) {
			var a = t.url.html(!1);
			if (a.match(/^http(s)?:\/\/mp.weixin.qq.com\/s/)) n++, l.get({
				url: a.replace(/^http:/, "https:")
			}, {
				done: function(e) {
					s++, e && e.title && i.push({
						i: t.i,
						j: t.j,
						name: "素材库",
						title: e.title
					});
				},
				fail: function() {
					s++;
				}
			});
			else if (a.match(/^http(s)?:\/\/mp.weixin.qq.com\/mp\/getmasssendmsg\?__biz=([^&#]+)#wechat_webview_type=1&wechat_redirect$/)) i.push({
				i: t.i,
				j: t.j,
				name: "历史消息"
			});
			else if (a.match(/^http(s)?:\/\/mp.weixin.qq.com\/mp\/homepage\?__biz=([^&#]+)&hid=([^&#]+)&sn=([^&#]+)#wechat_redirect/)) {
				n++;
				var r = a.html(!1).match(/[\?&]hid=(\d+)/);
				r = r && r[1], l.get({
					url: "/advanced/homepage?t=homepage/edit&action=edit",
					data: {
						hid: r
					},
					dataType: "json"
				}, {
					done: function(e) {
						s++, e && e.name && i.push({
							i: t.i,
							j: t.j,
							name: "页面模板",
							title: e.name
						});
					},
					fail: function() {
						s++;
					}
				});
			}
		});
		var a = setInterval(function() {
			s == n && (t(i), clearInterval(a));
		}, 500);
	}
	var n = e("common/wx/Tips.js"),
		s = e("common/wx/tooltip.js"),
		a = e("common/wx/simplePopup.js"),
		r = e("common/wx/popover.js"),
		o = e("common/wx/dialog.js"),
		l = e("common/wx/Cgi.js"),
		d = e("common/wx/richEditor/msgSender.js"),
		c = e("common/wx/media/factory.js"),
		u = e("common/qq/mask.js"),
		h = (e("biz_common/xss.js"),
			e("biz_common/moment.js"), e("advanced/menu_link_dialog.js")),
		f = e("cardticket/parse_data.js");
	e("common/qq/emoji.js"), e("biz_web/lib/json.js"), e("biz_common/jquery.ui/jquery.ui.sortable.js");
	var m = ("1" == wx.cgiData.service_type || "0" == wx.cgiData.service_type) && "1" != wx.cgiData.is_wx_verify && "1" != wx.cgiData.is_qverify && "3" != wx.cgiData.is_wb_verify,
		p = {
			menuLocation: 0,
			menuStyle: 1,
			menuId: "",
			menuPid: ""
		},
		v = !1;
	t.prototype = {
		cgi: "/advanced/operselfmenu?op=update&f=json",
		get: function(e) {
			var t;
			return this.data.each(function(i) {
				i.id == e && (t = i);
			}), t;
		},
		getSub: function(e, t, i) {
			var n, s;
			return i === !0 ? this.data.each(function(e) {
				e.subs && e.subs.each(function(e) {
					return e.id == t ? (s = e, !1) : void 0;
				});
			}) : (n = this.get(e), n.subs.each(function(e) {
				e.id == t && (s = e);
			})), s;
		},
		add: function(e, t) {
			var i = (new Date).getTime() + "_menu_" + this.data.length;
			this.data.push({
				name: e,
				id: i,
				type: 1
			}), this.post(t, i);
		},
		addSub: function(e, t, i) {
			e.type = 0, e.act = null, e.subs || (e.subs = []);
			var n = (new Date).getTime() + "_subMenu_" + e.id + "_" + e.subs.length;
			e.subs.push({
				name: t,
				id: n,
				type: 1
			}), this.post(i, n);
		},
		del: function(e, t) {
			var i = this;
			$.each(this.data, function(t, n) {
				return n.id == e ? (i.data.splice(t, 1), !1) : void 0;
			}), this.post(t);
		},
		delSub: function(e, t, i) {
			var n = this.get(e);
			n.subs.each(function(e, i) {
				return e.id == t ? (n.subs.splice(i, 1), !1) : void 0;
			}), 0 == n.subs.length && (n.type = 1), this.post(i);
		},
		edit: function(e, t, i) {
			e.name = t, this.post(i);
		},
		sort: function(e, t) {
			var i = this,
				s = [],
				a = !1;
			e.each(function(e) {
				var t = [];
				e.subs.each(function(n) {
					t.push(i.getSub(e.id, n, !0));
				});
				var r = i.get(e.id);
				return r = Object.clone(r, !0), r.subs = t, r.subs.length > 5 ? (n.err("同一个一级菜单下最多只能添加五个二级菜单，当前已达设置上限"),
					a = !0, !1) : void s.push(r);
			}), a || (i.data = s, this.post(t));
		},
		post: function(e, t) {
			var i = this;
			l.post({
				url: i.cgi,
				data: {
					info: i.adapt(i.data)
				}
			}).success(function(i) {
				0 == i.base_resp.ret ? (e(), t && $("#" + t).find(".inner_menu_link").trigger("click")) : 1 == i.base_resp.ret ? n.err("你的帐号尚未通过实名审核或已被警告限制，暂时无法使用该功能;") : 11 == i.base_resp.ret ? n.err("菜单跳转链接URL可能存在安全风险，请检查") : 105 == i.base_resp.ret ? (n.err("保存失败，未认证的订阅号不可添加自定义外链，页面即将重置刷新"),
					setTimeout(function() {
						location.reload(!0);
					}, 3e3)) : (n.err("系统发送异常失败，页面即将重置刷新"), setTimeout(function() {
					location.reload(!0);
				}, 3e3));
			});
		},
		adapt: function(e) {
			function t(e) {
				if (e) {
					var t = {};
					return $.each(e, function(e, i) {
						e.endsWith("_data") || ("value" == e ? t.value = (i + "").html(!1) : t[e] = i);
					}), [t];
				}
				return [];
			}
			var i = [];
			return $.each(e, function(e, n) {
				var s = {
					name: n.name.html(!1),
					type: n.type
				};
				s.act_list = [], n.subs && n.subs.length > 0 ? (s.sub_button_list = [], $.each(n.subs, function(e, i) {
					s.sub_button_list.push({
						name: i.name.html(!1),
						act_list: t(i.act),
						type: i.type,
						sub_button_list: []
					});
				})) : s.act_list = t(n.act), i.push(s);
			}), JSON.stringify2({
				version: wx.cgiData.menu.version,
				name: wx.cgiData.menu.name,
				button_list: i
			});
		},
		getExtraInfo: function(e) {
			var t = this,
				n = [];
			$.each(this.data, function(e, t) {
				return 2 == t.type ? void n.push({
					i: e,
					url: t.act.value
				}) : void(t.subs && $.each(t.subs, function(t, i) {
					2 == i.type && n.push({
						i: e,
						j: t,
						url: i.act.value
					});
				}));
			}), i(n, function(i) {
				$.each(i, function(e, i) {
					var n = null;
					"undefined" != typeof i.i && "undefined" != typeof i.j ? n = t.data[i.i].subs[i.j] : "undefined" != typeof i.i && (n = t.data[i.i]),
						n.act.name = i.name, n.act.title = i.title;
				}), i.length && e();
			});
		}
	};
	var _, b = function() {
			function e() {
				return void 0 == wx.cgiData.menu ? (g.init(), void k.init()) : (i(), j.init(), x.init(), y.init(),
					g.init(), void k.init());
			}

			function i() {
				wx.cgiData.menu = wx.cgiData.menu;
				var e = [];
				$.each(wx.cgiData.menu && wx.cgiData.menu.button_list, function(t, i) {
					var n = {
						name: i.name,
						id: "menu_" + t,
						type: i.type
					};
					if (i.sub_button_list.length > 0) {
						var s = [];
						$.each(i.sub_button_list, function(e, t) {
							s.push({
								name: t.name,
								act: t.act_list[0],
								id: "subMenu_" + n.id + "_" + e,
								type: t.type
							});
						}), n.subs = s;
					} else n.act = i.act_list[0];
					e.push(n);
				}), _ = new t(e), window.myMenu = _, _.getExtraInfo(function() {
					var e, t = $("#menuList .selected");
					t.hasClass("jslevel1") ? e = _.get(t.id) : t.hasClass("jslevel2") && (e = _.getSub(t.siblings("dt").get(0).id, t.get(0).id)),
						$("#view").is(":visible") && x.refresh(e), $("#url").is(":visible") && x.ui.url(e.act.value, e);
				});
			}
			return {
				init: e
			};
		}(),
		g = function() {
			function e() {
				t(), r();
			}

			function t() {
				var e = MenuData;
				e.is.selfMenu ? ($("#menu_container").show(), $("#div_start").show(), $("#div_stop").hide()) : ($("#menu_container").hide(),
						$("#div_start").hide(), $("#div_stop").show()), e.is.isOpen ? $("#div_alertTips").hide() : ($("#div_alertTips").show(),
						$("#btn_start").removeClass("btn_primary").addClass("btn_disabled"), $("#btn_stop").removeClass("btn_warn").addClass("btn_disabled")),
					e.is.isOpen && e.is.selfMenu ? i(e) : $("#menuStatus").hide();
			}

			function i(e) {
				e.selfMenu.hasButton ? ($("#menuStatus").show(), "1" == e.selfMenu.status ? $("#menustatus_1").show() : "2" == e.selfMenu.status ? $("#menustatus_2").show() : "3" == e.selfMenu.status && $("#menustatus_3").html("<p>已发布：" + e.selfMenu.leftTime + "小时后生效</p>").show()) : $("#menuStatus").hide();
			}

			function s() {
				$("#menustatus_1").hide(), $("#menustatus_2").show(), $("#menustatus_3").hide();
			}

			function a(e) {
				var t, i = {
						type: "POST",
						url: "/misc/skeyform?form=advancedswitchform&lang=zh_CN",
						dataType: "json"
					},
					s = e ? 1 : 0,
					a = 3,
					r = ["关闭自定义菜单之后， 将在24小时内对所有用户生效。 确认关闭？ ", "开启自定义菜单之后， 将在24小时内对所有用户生效。 确认开启？ "];
				o.show({
					type: "warn",
					msg: "操作确认|" + r[s ? 1 : 0],
					buttons: [{
						text: "确定",
						click: function() {
							t = $.extend(!0, {}, i, {
								data: {
									flag: s,
									type: a,
									token: wx.data.t
								},
								success: function(e) {
									return 0 == e.base_resp.ret ? (n.suc("操作成功 "), MenuData.is.selfMenu = s, MenuData.is.isOpen || (MenuData.is.isOpen = !0),
										void window.location.reload()) : void n.err("系统发生错误， 请稍后重试 ");
								}
							}), $.ajax(t), this.remove();
						}
					}, {
						text: "取消",
						type: "normal",
						click: function() {
							this.remove();
						}
					}]
				});
			}

			function r() {
				$("#div_stop .btn_primary").click(function() {
					return !$(this).hasClass("btn_disabled") && a(!0), !1;
				}), $("#div_start .btn_warn").click(function() {
					return a(!1), !1;
				}), $(".detail_desc").click(function() {
					$("#detail_pop").popup({
						buttons: [{
							text: "我知道了",
							click: function() {
								this.hide();
							},
							type: "primary"
						}],
						title: "提示"
					});
				});
			}
			return {
				init: e,
				refreshTips: s
			};
		}(),
		w = function() {
			function e(e, i) {
				t[e] && i && i(t[e]), l.get("/merchant/electroniccardmgr?action=get&card_id=" + e, function(n) {
					if (0 == n.base_resp.ret && n.card_detail) {
						var s = $.parseJSON(n.card_detail);
						s = f.parse_cardticket(s), t[e] = s, i && i(s);
					}
				});
			}
			var t = {};
			return {
				getCardData: e
			};
		}(),
		j = function() {
			function e() {
				i(), d(), new s({
					dom: "#addBt",
					content: "添加",
					position: {
						x: 0,
						y: 20
					}
				}), new s({
					dom: "#orderBt",
					content: "排序",
					position: {
						x: 0,
						y: 20
					}
				});
			}

			function i() {
				var e = "";
				if (v) {
					if (v = !1, $(".selected").hasClass("jslevel1")) {
						for (var t = 0, i = $(".jslevel1"); t < i.length; t++)
							if ($(i[t]).hasClass("selected")) {
								p.menuLocation = t, p.menuId = i[t].id;
								break;
							}
						p.menuStyle = 1;
					} else if ($(".selected").hasClass("jslevel2")) {
						for (var t = 0, i = $(".jsMenu").find(".selected").parent("dl").children(".jslevel2"); t < i.length; t++)
							if ($(i[t]).hasClass("selected")) {
								p.menuLocation = t, p.menuId = i[t].id, p.menuPid = $(i[t]).siblings("dt").attr("id");
								break;
							}
						p.menuStyle = 2;
					}
					var e = p.menuId;
					if (1 == p.menuStyle) {
						var n = [];
						$(".jslevel1").each(function(e, t) {
							var i = {
								id: t.id,
								subs: []
							};
							$(t).siblings(".jslevel2").each(function(e, t) {
								i.subs.push(t.id);
							}), n.push(i);
						});
						var i = _.data;
						i.splice(p.menuLocation, 0, i[i.length - 1]), i.splice(i.length - 1, 1);
						for (var t = 0; t < i.length; t++) n[t].name = $("#" + n[t].id).find("strong").text(), n[t].id == p.menuId && (n[t].id = i[t].id);
						_.sort(n, function() {});
					}
					if (2 == p.menuStyle) {
						var n = [];
						$(".jslevel1").each(function(e, t) {
							var i = {
								id: t.id,
								subs: []
							};
							$(t).siblings(".jslevel2").each(function(e, t) {
								i.subs.push(t.id);
							}), n.push(i);
						});
						for (var t = 0, i = _.data; t < i.length; t++) i[t].id == p.menuPid && (i[t].subs.splice(p.menuLocation, 0, i[t].subs[i[t].subs.length - 1]),
								n[t].subs[p.menuLocation] = i[t].subs[p.menuLocation].id, i[t].subs.splice(i[t].subs.length - 1, 1)),
							n[t].name = _.get(n[t].id).name;
						_.sort(n, function() {});
					}
					x.ui.reset(), $(".js_reseting").hide(), x.ui.index();
				}
				$("#menuList").html(template.render("tpl", _)), e && ($("#" + e).addClass("selected"),
					e = ""), $(".js_addSecondMenu").on("click", j.addSecondMenu), $(".jsMenu").sortable({
					items: ".jslevel2",
					placeholder: "sub_drag_placeholder",
					dropOnEmpty: !0,
					start: function(e, t) {
						t.item.addClass("dragging");
					},
					stop: function(e, t) {
						t.item.removeClass("hover").removeClass("dragging");
					}
				}), $(".jsMenu").sortable("disable"), $("#menuList").sortable({
					items: ".jsMenu",
					placeholder: "drag_placeholder",
					dropOnEmpty: !0,
					start: function(e, t) {
						t.item.addClass("dragging");
					},
					stop: function(e, t) {
						t.item.removeClass("dragging");
					}
				}), $("#menuList").sortable("disable"), new s({
					dom: ".jsAddBt, .js_addSecondMenu",
					content: "添加",
					position: {
						x: 0,
						y: 10
					}
				}), new s({
					dom: ".jsEditBt, .jsSubEditBt",
					content: "编辑",
					position: {
						x: 0,
						y: 20
					}
				}), new s({
					dom: ".jsDelBt, .jsSubDelBt",
					content: "删除",
					position: {
						x: 0,
						y: 20
					}
				}), new s({
					dom: ".jsOrderBt",
					content: "排序",
					position: {
						x: 0,
						y: 20
					}
				});
			}

			function r() {
				return c;
			}

			function l() {
				$(this).hasClass("js_addSecondMenu") && ($(this).parents("dt").hasClass("selected") || ($(".selected").length && $(".selected").removeClass("selected"),
					$($(this).parents("dt")[0]).addClass("selected"), x.autoSaveEdit(), $(".js_second_title_bar").show(),
					$("#index .initialCreate").show(), $(".action_setting .js_second_title_bar h4").text("一级菜单：" + $(this).parents("dt").find("strong").text()),
					$("#index .action_tips").text("请设置“" + $($(this).parents("dt")[0]).find("strong").text() + "”菜单的内容"),
					c = _.get($(this).parents("dt")[0].id), x.refresh(c)));
				var e = $("#menuList").find(".selected").attr("id"),
					t = _.get(e),
					s = $("#" + e).siblings(".jslevel2").length;
				return t && t.subs && t.subs.length >= 5 ? n.err("同一个一级菜单下最多只能添加五个二级菜单，当前已达设置上限") : t.act ? o.show({
					type: "warn",
					msg: "二级菜单确认|使用二级菜单后，当前编辑的消息将会被清除。确定使用二级菜单？",
					buttons: [{
						text: "确定",
						click: function() {
							new a({
								title: "添加二级菜单",
								label: "还能添加" + (5 - s) + "个二级菜单，请输入名称（8个汉字或16个字母以内）",
								rule: function(e) {
									return e.len() <= 16;
								},
								msg: "菜单名称应不多于8个汉字或16个字母",
								callback: function(e) {
									_.addSub(t, e, i), n.suc("成功添加二级菜单“" + e + "”");
								}
							}), this.remove(), g.refreshTips();
						}
					}, {
						text: "取消",
						type: "normal",
						click: function() {
							this.hide();
						}
					}]
				}) : new a({
					title: "添加二级菜单",
					label: "还能添加" + (5 - s) + "个二级菜单，请输入名称（8个汉字或16个字母以内）",
					rule: function(e) {
						return e.len() <= 16;
					},
					msg: "菜单名称名字不多于8个汉字或16个字母",
					callback: function(e) {
						_.addSub(t, e, i), n.suc("成功添加二级菜单“" + e + "”"), g.refreshTips();
					}
				}), !1;
			}

			function d() {
				var e;
				$("#orderBt").click(function() {
					return e = Object.clone(_.data, !0), $("#menuList").addClass("sorting"), $("#addBt").hide(),
						$("#orderBt").hide(), $("#finishBt").show(), $("#cancelBt").show(), $(".jsOrderBt").show().siblings().hide(),
						$("#menuList").sortable("enable"), $(".jsMenu").sortable("enable"), x.ui.rankTips(1),
						$(".jslevel2").mousedown(function() {
							$(".menu_mask").show(), $(this).parent("dl").addClass("dragging"), $(this).parent("dl").siblings("dl").length && $(this).parent("dl").siblings("dl").addClass("undragging");
						}), $(".jslevel2").mouseup(function() {
							$(".menu_mask").hide(), $(this).parent("dl").removeClass("dragging"), $(this).parent("dl").siblings("dl").hasClass("undragging") && $(this).parent("dl").siblings("dl").removeClass("undragging");
						}), !1;
				}), $("#cancelBt").click(function() {
					return e && (_ = new t(e), i(), e = null), $("#menuList").removeClass("sorting"), $("#addBt").show(),
						$("#orderBt").show(), $("#finishBt").hide(), $("#cancelBt").hide(), $(".jsOrderBt").hide().siblings().show(),
						$("#menuList").sortable("disable"), x.ui.rankTips(0), !1;
				}), $("#finishBt").click(function() {
					var e = [];
					return $(".jslevel1").each(function(t, i) {
							var n = {
								id: i.id,
								subs: []
							};
							$(i).siblings(".jslevel2").each(function(e, t) {
								n.subs.push(t.id);
							}), e.push(n);
						}), _.sort(e, i), $("#menuList").removeClass("sorting"), $("#addBt").show(), $("#orderBt").show(),
						$("#finishBt").hide(), $("#cancelBt").hide(), $(".jsOrderBt").hide().siblings().show(),
						$("#menuList").sortable("disable"), g.refreshTips(), x.ui.rankTips(0), !1;
				}), $("#menuList").on("click", "dt>a", function() {
					return $(this).parent().hasClass("selected") ? void 0 : (x.autoSaveEdit(), $(".js_second_title_bar").show(),
						$("#menuList").find("dd,dt").removeClass("selected"), $("#index .initialCreate").show(),
						$(this).parent().addClass("selected"), $(".action_setting .js_second_title_bar h4").text("一级菜单：" + $(this).find("strong").text()),
						$("#index .action_tips").text("请设置“" + $(this).find("strong").text() + "”菜单的内容"), c = _.get($(this).parent()[0].id),
						x.refresh(c), !1);
				}), $("#menuList").on("click", "dd>a", function() {
					return $(this).parent().hasClass("selected") ? void 0 : (x.autoSaveEdit(), $(".js_second_title_bar").show(),
						$("#menuList").find("dd,dt").removeClass("selected"), $(this).parent().addClass("selected"),
						$("#index .initialCreate").hide(), $(".action_setting .js_second_title_bar h4").text("二级菜单：" + $(this).find("strong").text()),
						$("#index .action_tips").text("请设置“" + $(this).find("strong").text() + "”菜单的内容"), c = _.getSub($(this).parent().siblings("dt")[0].id, $(this).parent()[0].id),
						x.refresh(c), !1);
				});
				var s = function() {
					return _.data.length >= 3 ? void n.err("最多只能添加三个一级菜单，当前已达设置上限") : void new a({
						title: "添加一级菜单",
						label: "还能添加" + (3 - _.data.length) + "个一级菜单，请输入名称（4个汉字或8个字母以内）",
						rule: function(e) {
							return e.len() <= 8;
						},
						msg: "菜单名称应不多于4个汉字或8个字母"
					}).callback(function(e) {
						_.add(e, i), $(".menu_setting_empty_wrp").hide(), $(".menu_setting_area").show(), $(".js_totaltool_bar").show(),
							$(".js_second_title_bar").show(), g.refreshTips(), n.suc("成功添加一级菜单“" + e + "”");
					});
				};
				$(".addBt").on("click", function() {
					return s(), !1;
				}), $("#jsDelBt").on("click", function() {
					var e = $("#menuList").find(".selected").attr("id");
					if ($("#" + e).hasClass("jslevel1")) o.show({
						type: "warn",
						msg: "删除确认|删除后该菜单下设置的消息将不会被保存",
						buttons: [{
							text: "确定",
							click: function() {
								_.del(e, function() {
									n.suc("成功删除一级菜单“" + $("#" + e).find("strong").text() + "”"), $(".js_second_title_bar").hide(),
										x.ui.none("你可以点击左侧菜单或添加一个新菜单，然后设置菜单内容"), i(), x.refresh(), g.refreshTips();
								}), this.remove();
							}
						}, {
							text: "取消",
							type: "normal",
							click: function() {
								this.hide();
							}
						}]
					});
					else if ($("#" + e).hasClass("jslevel2")) {
						var t = $("#" + e).siblings("dt")[0].id;
						o.show({
							type: "warn",
							msg: "删除确认|删除后该菜单下设置的消息将不会被保存",
							buttons: [{
								text: "确定",
								click: function() {
									_.delSub(t, e, function() {
										n.suc("成功删除二级菜单“" + $("#" + e).find("strong").text() + "”"), $(".js_second_title_bar").hide(),
											x.ui.none("你可以点击左侧菜单或添加一个新菜单，然后设置菜单内容"), i(), x.refresh();
									}), g.refreshTips(), this.remove();
								}
							}, {
								text: "取消",
								type: "normal",
								click: function() {
									this.hide();
								}
							}]
						});
					}
					return !1;
				}), $("#jsChangeBt").on("click", function() {
					var e = $("#menuList").find(".selected").attr("id");
					if ($("#" + e).hasClass("jslevel1")) {
						var t = _.get(e);
						new a({
							title: "修改一级菜单名称",
							value: t.name.html(!1),
							rule: function(e) {
								return e.len() <= 8;
							},
							tips: "不多于4个汉字或8个字母",
							msg: "菜单名称名字不多于4个汉字或8个字母",
							callback: function(e) {
								_.edit(t, e, i), g.refreshTips(), n.suc("成功将一级菜单重命名为“" + e + "”"), $(".js_second_title_bar").hide(),
									$("#initialCreate").hide(), x.ui.none("你可以点击左侧菜单或添加一个新菜单，然后设置菜单内容");
							}
						});
					} else if ($("#" + e).hasClass("jslevel2")) {
						var s = $("#" + e).siblings("dt")[0].id,
							t = _.getSub(s, e);
						new a({
							title: "修改二级菜单名称",
							value: t.name.html(!1),
							rule: function(e) {
								return e.len() <= 16;
							},
							tips: "不多于8个汉字或16个字母",
							msg: "菜单名称名字不多于8个汉字或16个字母",
							callback: function(e) {
								_.edit(t, e, i), g.refreshTips(), n.suc("成功将二级菜单重命名为“" + e + "”"), $(".js_second_title_bar").hide(),
									$("#initialCreate").hide(), x.ui.none("你可以点击左侧菜单或添加一个新菜单，然后设置菜单内容");
							}
						});
					}
					return !1;
				}), $(".initialCreate").on("click", l);
			}
			var c;
			return {
				init: e,
				refresh: i,
				getData: r,
				addSecondMenu: l
			};
		}(),
		x = function() {
			function e() {
				f.none("你可以点击左侧菜单或添加一个新菜单，然后设置菜单内容"), f.initialView(), $("#none .initialCreate").hide(),
					t();
			}

			function t() {
				var e = "disabled";
				m && $("#urlText").attr(e, e).parent().addClass(e), $("#sendMsg").click(function() {
					return f.edit(), g.refreshTips(), !1;
				}), $("#goPage").click(function() {
					return f.url(), g.refreshTips(), !1;
				}), $("#urlBack").click(function() {
					return f.data.act ? f.view() : f.index(), !1;
				}), $(".resetAction").on("click", function() {
					return new r({
						dom: this,
						content: "<p>重设会导致当前菜单内容被清空</p><p>确定重设？</p>",
						place: "bottom",
						margin: "center",
						buttons: [{
							text: "确定",
							click: function() {
								this.hide(), x.ui.reset(), $(".js_reseting").show(), $("#initialCreate").hide(), g.refreshTips();
								var e = $("#menuList").find(".selected").attr("id"),
									t = $("#" + e).find("strong").text();
								if ($("#" + e).hasClass("jslevel1")) _.del(e, function() {
									_.add(t, j.refresh);
								});
								else if ($("#" + e).hasClass("jslevel2")) {
									var i = $("#" + e).siblings("dt")[0].id,
										n = _.get(i);
									_.delSub(i, e, function() {
										_.addSub(n, t, j.refresh);
									});
								}
								return v = !0, !1;
							},
							type: "primary"
						}, {
							text: "取消",
							click: function() {
								return this.hide(), $.support.appendChecked || (window.onbeforeunload = null), !1;
							}
						}]
					}), !1;
				}), $("#changeBt").click(function() {
					return 6 == f.data.act.type ? f.url(f.data.act.value, f.data) : f.edit(), g.refreshTips(), !1;
				}), $("#editBack").click(function() {
					return i(j.getData()), !1;
				}), $("#js_appmsgPop").on("click", function() {
					return new h({
						can_use_homepage: wx.cgiData.can_use_homepage,
						biz: wx.cgiData.biz,
						onOK: function(e) {
							if (e) {
								var t = e,
									i = t.title,
									n = t.link;
								n && ($("#urlText").val(n).data("url", n).closest(".frm_control_group").show(), $("#js_urlTitle").show().find(".js_name").text(t.name),
									i ? $("#js_urlTitle").find(".js_title").text(i).parent().show() : $("#js_urlTitle").find(".js_title").text("").parent().hide(),
									$("#urlUnSelect").hide(), x.autoSaveEdit());
							}
						}
					}), !1;
				}), $("#urlText").on("keyup propertychange", function() {
					var e = $(this),
						t = e.val().trim(),
						i = e.data("url");
					i && t == i ? $("#js_urlTitle").show() : ($("#js_urlTitle").hide(), $("#js_urlTitle").find(".js_name").text(""),
						$("#js_urlTitle").find(".js_title").text(""));
				}).on("blur", function() {
					x.autoSaveEdit();
				});
			}

			function i(e) {
				if (!e) return f.none("你可以点击左侧菜单或添加一个新菜单，然后设置菜单内容"), f.initialView(), void $("#none .initialCreate").hide();
				switch (f.data = e, e && e.type) {
					case 0:
						var t = $("#" + e.id).siblings(".jslevel2").length;
						5 > t ? (f.none("已为“" + $("#" + e.id).find("strong").text().html(!0) + "”添加了二级菜单，无法设置其他内容。<br>你还可以添加" + (5 - t) + "个二级菜单"),
							$("#none .initialCreate").show()) : (f.none("你已添加满5个二级菜单"), $("#none .initialCreate").hide());
						break;

					case 1:
						e.act ? f.view() : f.index();
						break;

					case 2:
						f.view();
						break;

					case 3:
						e.act.source = "file";
						break;

					case 3:
						e.act.source = "file", e.act.id = e.act.file_id;
						break;

					default:
						f.none("你可以点击左侧菜单或添加一个新菜单，然后设置菜单内容"), f.initialView();
				}
			}

			function s(e) {
				if ($("#edit").is(":visible")) {
					for (var t = 0, i = $(".tab_content"); t < i.length; t++)
						if ($(i[t]).is(":visible") && ($($(i[t]).children(".inner").find(".edit_area")[1]).text() || $(i[t]).children(".inner").children("div").length)) {
							var s = u.getData(!0);
							if (!s.error) {
								if (10 == s.data.type ? s.data.type = 5 : 11 == s.data.type ? s.data.type = 8 : 15 == s.data.type ? s.data.type = 9 : 16 == s.data.type ? s.data.type = 10 : 21 == s.data.type && (s.data.type = 11),
									s = s.data, f.data.act = {
										type: s.type,
										value: s.app_id || s.file_id || s.cardid || s.content.html(!0),
										_data: s
									}, f.data.act._data.content && (f.data.act._data.content = f.data.act._data.content.html(!0)),
									e) return _.adapt(_.data);
								_.post(function() {});
							}
							g.refreshTips();
							break;
						}
				} else if ($("#url").is(":visible")) {
					var a = j.getData(),
						r = $("#urlText").val().trim();
					if ("" == r && m) $("#urlUnSelect").show();
					else {
						if ($("#urlUnSelect").hide(), r.startsWith("http://") || r.startsWith("https://") || (r = "http://" + r),
							0 == r.indexOf("http://mp.weixin.qq.com/s") && (r = r.replace(/#rd$/, "#wechat_redirect")), !$.validator.rules.url(r)) return $("#urlFail").show(), n.err("请输入正确的URL"), !1;
						if ($("#urlFail").hide(), a.type = 2, a.act = {
							type: 6,
							value: r,
							name: $("#js_urlTitle").find(".js_name").text(),
							title: $("#js_urlTitle").find(".js_title").text()
						}, r = encodeURIComponent(r), l.get("/misc/checkurl?url=" + r + "&f=json&action=check").success(function(e) {
							return "10302" == e.base_resp.ret ? void n.err("填写url是黑名单地址") : void 0;
						}), e) return _.adapt(_.data);
						_.post(function() {
							$("#urlFail").hide();
						}), g.refreshTips();
					}
				}
			}

			function a(e, t) {
				function i() {
					var i;
					if (i = o(t.act), e) {
						$("#editDiv").html(""), $("#edit").show();
						var n, s = i ? {
							data: i,
							acl: wx.acl.msg_acl
						} : {
							acl: wx.acl.msg_acl
						};
						if (m) {
							var a = $.extend(!0, {}, s);
							a.acl.can_text_msg = 0, n = a;
						} else n = s;
						u = new d("#editDiv", n), $(".tab_nav").children(1).attr("onclick", "return false;");
					} else i && c.render("#viewDiv", i);
					$("a.emotion_switch").on("click", function() {
						return !1;
					});
				}
				if (t.act && 10 == t.act.type && !t.act._data) {
					var n = t.act.value;
					w.getCardData(n, function(e) {
						e._className = "", t.act._data = e, i();
					});
				} else t.act && 10 == t.act.type && (t.act._data._className = ""), i();
			}

			function o(e) {
				if (!e) return null;
				var t = null;
				return Object.each(e, function(e, i) {
						return i.endsWith("_data") ? (t = e, !1) : void 0;
					}), t.type = e.type, 5 == t.type ? t.type = 10 : 8 == t.type ? t.type = 11 : 9 == t.type ? t.type = 15 : 10 == t.type ? t.type = 16 : 11 == t.type && (t.type = 21),
					t;
			}
			var u, f = {
				none: function(e) {
					this.reset(), e.indexOf("<br>") >= 0 ? $("#none").show().find("p").empty().append(e) : $("#none").show().find("p").text(e);
				},
				index: function() {
					this.reset(), $("#index").show();
				},
				url: function(e, t) {
					this.reset(), !e && m ? $("#urlText").val("认证后才可手动输入地址") : $("#urlText").val(e && e.html(!1)).focus(),
						t && t.act.name ? ($("#js_urlTitle").show().find(".js_name").text(t.act.name), t.act.title ? $("#js_urlTitle").find(".js_title").text(t.act.title).parent().show() : $("#js_urlTitle").find(".js_title").text("").parent().hide()) : $("#js_urlTitle").hide(),
						$("#url").show();
				},
				view: function() {
					if (this.reset(), 1 == this.data.type) switch ($("#viewDiv").siblings(".action_tips").text("订阅者点击该子菜单会收到以下消息"),
						this.data.act.type) {
						case 1:
							$("#viewDiv").html(this.data.act.value.emoji());
							break;

						case 7:
							$("#viewDiv").text("发送名片");
							break;

						default:
							a(!1, this.data);
					} else 2 == this.data.type && ($("#viewDiv").html(this.data.act.value), $("#viewDiv").siblings(".action_tips").text("订阅者点击该子菜单会跳到以下链接"),
						this.data.act.name ? ($("#view").find(".frm_tips").show(), $("#view").find(".js_name").text(this.data.act.name),
							this.data.act.title ? $("#view").find(".js_title").text(this.data.act.title).parent().show() : $("#view").find(".js_title").text("").parent().hide()) : $("#view").find(".frm_tips").hide());
					$("#view").show(), $("#changeBt").show();
				},
				initialView: function() {
					0 == $("#menuList").children(".jsMenu").length ? ($(".menu_setting_empty_wrp").show(),
						$(".menu_setting_area").hide(), $(".js_totaltool_bar").hide(), $(".js_second_title_bar").hide()) : ($(".menu_setting_empty_wrp").hide(),
						$(".menu_setting_area").show(), $(".js_totaltool_bar").show(), $("#menuList").find(".selected").length ? $(".js_second_title_bar").show() : $(".js_second_title_bar").hide());
				},
				edit: function() {
					this.reset(), $("#edit").show(), $(".jsmsgSenderDelBt").each(function(e, t) {
						$(t).parent().siblings(".jsMsgSendTab").show(), $(t).parent().remove();
					}), a(!0, this.data);
				},
				reset: function() {
					$(".jsMain").hide(), $("#changeBt").hide(), $("#urlFail").hide(), $("#urlUnSelect").hide(),
						$("#view").find(".frm_tips").hide();
				},
				rankTips: function(e) {
					1 == e ? (this.none("请通过拖拽左边的菜单进行排序"), $(".js_second_title_bar").hide(), $(".initialCreate").hide()) : 0 == e && this.none("你可以点击左侧菜单或添加一个新菜单，然后设置菜单内容");
				}
			};
			return {
				init: e,
				refresh: i,
				getData: o,
				autoSaveEdit: s,
				ui: f
			};
		}(),
		y = function() {
			function e() {
				$("#viewBt").click(function() {
					return $("#mobileDiv:hidden").length > 0 && (u.show({
						spin: !1
					}), $("#viewList").html(template.render("viewTpl", _)), $("#mobileDiv").show()), !1;
				}), $("#viewClose").click(function() {
					return u.hide(), $("#mobileDiv").hide(), $("#viewShow").html(""), !1;
				}), $("#viewList").on("click", ".jsView", function() {
					$(this).parent().siblings().find(".jsSubViewDiv").hide();
					var e = _.get($(this).parent()[0].id);
					return e.act ? t(e.act) : $(this).parent().find(".jsSubViewDiv").toggle(), !1;
				}), $("#viewList").on("click", ".jsSubView", function() {
					var e = _.getSub($(this).parents(".jsViewLi")[0].id, $(this).parent()[0].id);
					return e.act && t(e.act), $(".jsSubViewDiv").hide(), !1;
				});
				var e = function(e) {
					switch (e.base_resp.ret) {
						case 0:
							n.suc("保存并发布成功"), window.onbeforeunload = null, window.location.reload();
							break;

						case 8:
							n.err("空菜单，不能同步");
							break;

						case 9:
							n.err("请设置当前菜单内容");
							for (var t, i = $("#menuList").find(".inner_menu_item"), s = 1, a = 0, r = i.length; r > a; a++)
								if ($(i[a]).hasClass("jslevel1") ? (t = _.get(i[a].id),
									s = 1) : $(i[a]).hasClass("jslevel2") && (t = _.getSub($(i[a]).siblings()[0].id, i[a].id),
									s = 2), !t || !t.act && t.type) {
									x.refresh(t), $(i[a]).hasClass("selected") || ($("#menuList").find("dd,dt").removeClass("selected"),
											$(i[a]).addClass("selected")), 1 == s ? $(".action_setting .js_second_title_bar h4").text("一级菜单：" + $("#" + t.id).find("strong").text()) : 2 == s && $(".action_setting .js_second_title_bar h4").text("二级菜单：" + $("#" + t.id).find("strong").text()),
										$("#index .action_tips").text("请设置“" + $("#" + t.id).find("strong").text() + "”菜单的内容");
									break;
								}
							$(".selected").hasClass("jslevel2") ? $("#index a#initialCreate").hide() : $(".selected").hasClass("jslevel1") && ($("#initialCreate").show(),
								$("#index a#initialCreate").css("display", "inline-block"));
							break;

						case 10:
							n.err("自定义菜单功能处于关闭状态，无法发布");
							break;

						default:
							n.err("系统错误，请稍后再试");
					}
				};
				$("#pubBt").click(function() {
					return $("#edit").is(":visible") && $(".jsMsgSendTab").is(":visible") ? n.err("请添加素材") : $("#edit").is(":visible") && $(".js_editorTip").is(":visible") && !$(".js_editorArea").text() ? n.err("文字必须为1到600个字") : $("#url").is(":visible") && !$("#urlText").val() ? n.err("请输入页面地址") : $(".js_reseting").is(":visible") ? n.err("菜单重置中，请稍候") : $("#index").is(":visible") ? n.err("请设置当前菜单内容") : _.data.length > 0 ? o.show({
						type: "warn",
						msg: "发布确认|本次发布将在24小时内对所有用户生效。确认发布？",
						buttons: [{
							text: "确定",
							click: function() {
								var t = x.autoSaveEdit(!0);
								t ? l.post({
									url: "/advanced/operselfmenu?op=update_sync",
									data: {
										info: t,
										Version: wx.cgiData.menu.version
									}
								}, function(t) {
									e(t);
								}) : l.post({
									url: "/advanced/operselfmenu?op=update_sync",
									data: {
										info: _.adapt(_.data),
										Version: wx.cgiData.menu.version
									}
								}, function(t) {
									e(t);
								}), this.remove();
							}
						}, {
							text: "取消",
							type: "normal",
							click: function() {
								this.hide();
							}
						}]
					}) : n.err("空菜单，不能同步"), !1;
				});
			}

			function t(e) {
				var t = {
					src: $(".head .avatar").attr("src"),
					id: "_view_" + 1 * new Date
				};
				return 6 == e.type ? void window.open(e.value.html(!1)) : ($("#viewShow").append(template.compile(i)(t)).parent().scrollTop($("#viewShow")[0].scrollHeight),
					1 == e.type ? void $("#" + t.id).html(e.value.emoji()) : void(10 == e.type ? w.getCardData(e.value, function(i) {
						i._className = "small_card", e._data = i, i && c.render.defer("#" + t.id, x.getData(e));
					}) : c.render.defer("#" + t.id, x.getData(e))));
			}
			var i = '<li class="show_item"><img class="avatar" src="{src}"><div class="show_content" id="{id}"></div></li>';
			return {
				init: e
			};
		}(),
		k = function() {
			function e() {
				if (wx.cgiData.authrized && "1" == wx.cgiData.authrized) {
					for (var e = $("#js_authrized"), t = "", i = wx.cgiData.auth_info, n = i.length, s = 0; n > s; s++) {
						var a = i[s].component_name || "未知",
							r = i[s].func_category_list || [];
						r.indexOf(1) > -1 && (t = "" == t ? a : t + "、" + a);
					}
					e.find(".js_thirdname").text(t), e.show(), $("#btn_start").removeClass("btn_primary").addClass("btn_disabled");
				}
			}
			return {
				init: e
			};
		}();
	b.init(), window.onbeforeunload = function(e) {
		e = e || window.event;
		var t = "";
		if (!$("#edit").is(":visible") || $(".dialog_wrp").is(":visible") || $(".popover").is(":visible")) $("#url").is(":visible") && !$(".popover").is(":visible") && (t = "你正在编辑的菜单“" + $(".selected").find("strong").text() + "”可能还有未保存的内容");
		else
			for (var i = 0, e = $(".tab_content"); i < e.length; i++)
				if ($(e[i]).is(":visible") && $(e[i]).children(".inner").children("div").length) {
					t = "你正在编辑的菜单“" + $(".selected").find("strong").text() + "”可能还有未保存的内容";
					break;
				}
		return t ? (e && (e.returnValue = t), t) : void 0;
	};
});