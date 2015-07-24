<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%  
   String path = request.getContextPath(); 
   String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html>

	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="renderer" content="webkit">
		<meta charset="utf-8">
		<script type="text/javascript">
				var content = $('#content2').html();
				document.getElementById("#temp").value=content;
		</script>
		<script type="text/javascript">
			
		</script>
		<script type="text/javascript">
			//上报测速 --初始点
			window._points = [+new Date()];
			 //上报测速 --js加载完成点,通过编译工具加在seajs.use回调中
			function wx_main(mod) {
				window._points && (window._points[3] = +new Date());
			};
		</script>
		<title>微信公众平台</title>
		<link href="https://res.wx.qq.com/mpres/htmledition/images/favicon218877.ico" rel="Shortcut Icon">
		<link  rel="stylesheet" type="text/css" href="<%=basePath%>css/layout_head.css" />
		<link  rel="stylesheet" type="text/css" href="<%=basePath%>css/base.css" />
		<link  rel="stylesheet" type="text/css" href="<%=basePath%>css/lib.css" />
		<link  rel="stylesheet" href="<%=basePath%>css/mass_send.css">
		<link rel="stylesheet" type="text/css" href="<%=basePath%>css/emoji.css" />
		<link rel="stylesheet" type="text/css" href="<%=basePath%>css/send_2.css" />
		<script type="text/javascript" src="<%=basePath%>miss/Log2254d3.js"></script>
	</head>

	<body class="zh_CN">
		<div class="head" id="header">
			<script type="text/javascript">
				//上报测速 --css加载完成点
				window._points && (window._points[1] = +new Date());
			</script>
			<div class="head_box">
				<div class="inner wrp">
					<h1 class="logo"><a href="/" title="微信公众平台"></a></h1>
					<div class="account">
						<div class="account_meta account_info account_meta_primary">
							<a href="/cgi-bin/settingpage?t=setting/index&action=index&token=938922762&lang=zh_CN" class="nickname">${user.loginName}</a>
							<span class="type_wrp">
                                        <a href="/cgi-bin/settingpage?t=setting/index&action=index&token=938922762&lang=zh_CN" class="type icon_subscribe_label">订阅号</a>
                                        
                                        <a href="/merchant/store?action=detail&t=wxverify/detail&info=verify&lang=zh_CN&token=938922762" class="type icon_verify_label fail">未认证</a>
                                        
                </span>
							<a href="/cgi-bin/settingpage?t=setting/index&action=index&token=938922762&lang=zh_CN">
								<img src="../img/ourself.jpg" class="avatar">
							</a>
						</div>
						<div id="accountArea" class="account_meta account_inbox account_meta_primary">
							<a href="/cgi-bin/frame?t=notification/index_frame&lang=zh_CN&token=938922762" class="account_inbox_switch">
								<i class="icon_inbox">通知</i>&nbsp;
							</a>
						</div>
						<div class="account_meta account_logout account_meta_primary"><a id="logout" href="../quit">退出</a>
						</div>
					</div>
				</div>
			</div>

		</div>
		<div id="body" class="body page_mass_send">
			<div id="js_container_box" class="container_box cell_layout side_l">

				<div class="col_side">
					<div class="menu_box" id="menuBar">
						<dl class="menu no_extra">
							<dt class="menu_title">
        <i class="icon_menu" style="background:url(../img/icon_menu_function.png) no-repeat;">
    </i>功能
            </dt>


							<dd class="menu_item "><a data-id="10005" href="Platform/funtion_send_all.jsp">群发功能</a>

							</dd>
							<dd class="menu_item "><a data-id="10006" href="key_set_page">自动回复</a>
							</dd>
							<dd class="menu_item "><a data-id="10007" href="menu_load_page">自定义菜单</a>
							</dd>
						</dl>
						<dl class="menu ">
							<dt class="menu_title">
        <i class="icon_menu" style="background:url(../img/icon_menu_management.png) no-repeat;">
    </i>管理
            </dt>

							<dd class="menu_item "><a data-id="10012" href="mana_mess">消息管理</a>
							</dd>
							<dd class="menu_item "><a data-id="10013" href="mana_user">用户管理</a>
							</dd>
							<dd class="menu_item "><a data-id="10014" href="/cgi-bin/appmsg?begin=0&amp;count=10&amp;t=media/appmsg_list&amp;type=11&amp;action=list&amp;token=1055897610&amp;lang=zh_CN">素材管理</a>
							</dd>
						</dl>
						<dl class="menu ">
							<dt class="menu_title">
        <i class="icon_menu" style="background:url(../img/icon_menu_setup.png) no-repeat;">
    </i>设置
            </dt>

							<dd class="menu_item "><a data-id="10019" href="info_set_page.action">公众号设置</a>
							</dd>
							<dd class="menu_item "><a data-id="10022" href="/cgi-bin/safecenterstatus?action=view&amp;t=setting/safe-index&amp;token=1055897610&amp;lang=zh_CN">安全中心</a>
							</dd>
						</dl>
						<dl class="menu ">
							<dt class="menu_title clickable">
        <a href="/advanced/advanced?action=dev&t=advanced/dev&token=938922762&lang=zh_CN">
        <i class="icon_menu" style="background:url(../img/icon_menu_developer.png) no-repeat;">
    </i>开发者中心
    </a>        </dt>

						</dl>
					</div>

				</div>

				<div class="col_main">

					<div class="main_hd">
						<h2>群发功能</h2>
						<div class="title_tab" id="topTab"></div>

						<div class="extra_info mini_tips icon_after">
							<a href="http://kf.qq.com/faq/120911VrYVrA131025QniAfu.html" target="_blank">群发消息规则说明</a><i class="icon_mini_tips document_link"></i>
						</div>

					</div>
					<div class="main_bd">
						<!--<form action="../allsend" method="post">-->
						<div class="highlight_box">
							<p class="desc">
								为保障用户体验，微信公众平台严禁恶意营销以及诱导分享朋友圈，严禁发布色情低俗、暴力血腥、政治谣言等各类违反法律法规及相关政策规定的信息。一旦发现，我们将严厉打击和处理。 </p>
						</div>

						<div class="grid_line send_filter">
							<div id="js_msgSender" class="msg_sender">
								<div class="msg_tab">
									<ul class="tab_navs">
										<li class="tab_nav tab_text width5 selected" data-type="1" data-tab=".js_textArea" data-tooltip="文字">
											<a href="javascript:void(0);" onclick="return false;">&nbsp;<i class="icon_msg_sender"></i><span class="msg_tab_title">文字</span></a>
										</li>
									</ul>
									<div class="tab_panel">

										<div class="tab_content" style="display: none;">
											<div class="js_appmsgArea inner ">
												<!--type 10图文 2图片  3语音 15视频 11商品消息-->

												<div class="tab_cont_cover jsMsgSendTab" data-index="0">
													<div class="media_cover">
														<span class="create_access">
			                <a class="add_gray_wrp jsMsgSenderPopBt" href="javascript:;" data-type="10" data-index="0">
                                <i class="icon36_common add_gray"></i>
                                <strong>从素材库中选择</strong>
                            </a>
			            </span>
													</div>
													<div class="media_cover">
														<span class="create_access">
                            <a target="_blank" class="add_gray_wrp" href="/cgi-bin/appmsg?t=media/appmsg_edit&amp;action=edit&amp;type=10&amp;isMul=1&amp;isNew=1&amp;lang=zh_CN&amp;token=938922762">
			                    <i class="icon36_common add_gray"></i>
			                    <strong>新建图文消息</strong>
			                </a>
                            <!--
			                <a target="_blank" href="/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&type=10&isMul=0&isNew=1&lang=zh_CN&token=938922762"><i class="icon_shopmsg_create"></i><strong>单图文消息</strong></a>
			                <a target="_blank" href="/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&type=10&isMul=1&isNew=1&lang=zh_CN&token=938922762"><i class="icon_shopmsg_create multi"></i><strong>多图文消息</strong></a>
                            -->
			            </span>
													</div>
												</div>

											</div>
										</div>

										<div class="tab_content" style="display: block;">
											<div class="js_textArea inner no_extra">
												<div class="emotion_editor">
													<div class="edit_area js_editorArea" style="display: none;"></div>
													<!--取值点-->
													<div id="content2" class="edit_area js_editorArea" contenteditable="true" style="overflow-y: auto; overflow-x: hidden;"></div>
													<div class="editor_toolbar">

														<a href="javascript:void(0);" class="icon_emotion emotion_switch js_switch">表情</a>

														<p class="editor_tip opr_tips">，按下Shift+Enter键换行</p>
														<div class="emotion_wrp js_emotionArea"><span class="hook">
	<span class="hook_dec hook_top"></span>
															<span class="hook_dec hook_btm"></span>
															</span>
															<span class="emotions_preview js_emotionPreviewArea"></span>
														</div>
													</div>
												</div>

											</div>
										</div>

										<div class="tab_content" style="display: none;">
										</div>

										<div class="tab_content" style="display: none;">
											<div class="js_audioArea inner ">
												<!--type 10图文 2图片  3语音 15视频 11商品消息-->

											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
						<div id="js_msgSender" class="msg_sender"></div>
						<form action="allsend" method="post">
						<div class="tool_bar">
							
							<div id="verifycode"></div>
							
							<span style="margin-left: 30px;" id="" class="btn btn_input btn_primary">
  								<input type="text" id="a" name="content" hidden="hidden"/>
  								<button id="submit" type="button" >群发</button>
							</span>
							
							<div class="bubble_tips bubble_left warn">
								<div class="bubble_tips_inner">
									<p class="mass_send_tips">你今天还能群发无限条消息</p>
								</div>
								<i class="bubble_tips_arrow out"></i>
								<i class="bubble_tips_arrow in"></i>
							</div>
						</div>
						</form>
					</div>

				</div>
			</div>

		</div>
		<div class="foot" id="footer">
			<ul class="links ft">
				<li class="links_item">
					<p class="copyright">Copyright &copy; 2012-2015 Tencent. All Rights Reserved.</p>
				</li>
			</ul>

		</div>
		<script type="text/javascript">
			//上报测速 --dom加载完成点
			window._points && (window._points[2] = +new Date());
		</script>

		<script type="text/javascript">
			window.wx = {
				version: "4.0.0",
				data: {
					t: "938922762",
					ticket: "5215d0ca896ec7a2fd27f2c7a3ce696dc1553e1c",
					lang: 'zh_CN',
					param: ["&token=938922762", '&lang=zh_CN'].join(""),
					uin: "3088008258",
					uin_base64: "MzA4ODAwODI1OA==",
					user_name: "gh_773789eeddab",
					nick_name: "永远的遗书",
					time: "1436013792" || new Date().getTime() / 1000
				},
				path: {
					video: "https://res.wx.qq.com/mpres/zh_CN/htmledition/plprecorder/biz_web/video-js218877.swf",
					audio: "https://res.wx.qq.com/mpres/zh_CN/htmledition/plprecorder/biz_web/audiojs218877.swf",
					uploadify: "https://res.wx.qq.com/mpres/zh_CN/htmledition/plprecorder/biz_web/uploadify218877.swf",
					webuploader: "https://res.wx.qq.com/mpres/zh_CN/htmledition/plprecorder/biz_web/webuploader230dc3.swf",
					zoom: "https://res.wx.qq.com/mpres/zh_CN/htmledition/plprecorder/biz_web/zoom230dc3.swf",
					rimgcrop: "https://res.wx.qq.com/mpres/htmledition/images/cut-round218877.gif"
				},
				acl: {
					"msg_acl": {
						"can_text_msg": 1,
						"can_image_msg": 1,
						"can_voice_msg": 1,
						"can_video_msg": 1,
						"can_app_msg": 1,
						"can_commodity_app_msg": 0,
						"can_card_msg": "0" * 1 || 0, // @cunjinli改掉
						"can_use_shortvideo": "0" * 1
					},
					"ivr_acl": {
						"can_text_msg": 1,
						"can_image_msg": 1,
						"can_voice_msg": 1,
						"can_video_msg": 1,
						"can_app_msg": 1,
						"can_commodity_app_msg": 0
					},
					"merchant_acl": {
						"can_use_pay_tmpl": "" * 1,
						"can_use_account_manage": "" * 1
					},
					"ad_system": {
						"can_use_sp": "" * 1
					}
				},
				events: {} //全局的事件绑定
			};
		</script>
		<script  type="text/javascript" src="../js/sea.js"></script>
		<script  type="text/javascript" src="../js/lib.js"></script>
		<script  type="text/javascript" src="../js/wx.js"></script>

		<script type="text/javascript">
			define('widget/emoji.css', [], function() {
				return null;
			});
			define('page/cardticket/dialog_choose_card.css', [], function() {
				return null;
			});
			define('page/smallvideo/dialog_select_video.css', [], function() {
				return null;
			});
			define('page/media/dialog_img_pick.css', [], function() {
				return null;
			});
			define('widget/pagination.css', [], function() {
				return null;
			});
			define('widget/upload.css', [], function() {
				return null;
			});
			define('widget/tooltip.css', [], function() {
				return null;
			});
			define('widget/media.css', [], function() {
				return null;
			});
			define('widget/media/richvideo.css', [], function() {
				return null;
			});
			define('widget/media/media_dialog.css', [], function() {
				return null;
			});
			define('widget/emotion_editor.css', [], function() {
				return null;
			});
			define('widget/msg_tab.css', [], function() {
				return null;
			});
			define('widget/processor_bar.css', [], function() {
				return null;
			});
			define('widget/qrcode_scan.css', [], function() {
				return null;
			});
			define('widget/verifycode.css', [], function() {
				return null;
			});
			define('widget/msg_sender.css', [], function() {
				return null;
			});
			define('biz_web/widget/dropdown.css', [], function() {
				return null;
			});
		</script>
		<script  charset="UTF-8" type="text/javascript" src="../jav/fsa/fsa.js"></script>
		<script  charset="UTF-8" type="text/javascript" src="../jav/fsa/fsa2.js"></script>
		<script  charset="UTF-8" type="text/javascript" src="../jav/fsa/fsa3.js"></script>
		<script  charset="UTF-8" type="text/javascript" src="../jav/fsa/fsa4.js"></script>
		<script  charset="UTF-8" type="text/javascript" src="../jav/fsa/fsa5.js"></script>
		<!--<script  type="text/javascript" src="<%=basePath%>/jav/fsa/fsa6.js" charset="utf-8"></script>-->
		<script  charset="UTF-8" type="text/javascript" src="../jav/fsa/fsa1.js"></script>
		<script  charset="UTF-8" type="text/javascript" src="../miss/json218878.js"></script>
		<script type="text/javascript" charset="UTF-8" src="../miss/store21a6f0.js"></script>
		<script type="text/javascript" charset="UTF-8" src="../miss/webuploader234186.js"></script>

		<script type="text/javascript">
			var can_verify_apply = "1" * 1;
			wx.cgiData = {
				can_use_shortvideo: "" * 1,
				errcode: "",
				mass_send_left: can_verify_apply ? '1' * 1 : 0,
				need_verify_code: '' * 1,
				group: ({
					"groups": [{
						"id": 0,
						"name": "未分组",
						"cnt": 0
					}, {
						"id": 1,
						"name": "黑名单",
						"cnt": 0
					}, {
						"id": 2,
						"name": "星标组",
						"cnt": 0
					}]
				}).groups,
				strategy_status: ({
					"strategy_status": {
						"mobile": "+86136******39",
						"wx_alias": "shm*****dl"
					}
				}).strategy_status,
				operation_seq: "206679621",
				gray_status: "1",
				third_status: "",
				bind_mail: "xudaolong@vip.qq.com"
			};
			seajs.use('mass/send', wx_main);;
			 //wx.selectMenu('masssend');
		</script>
		<script >
			$("#submit").click(function() {
  			//$("#a").val($("#content2").html());
  			var content = $("#content2").text();
  			var wechat_uid = ${user.remark};
  			$.post("allsend",
  				  {
  					content:content,
  					wechat_uid:wechat_uid
  				  },
  				  function(data,status){
  				    if(data=="ok"){
  				    	alert("发送完成");
  				    }else{
  				    	alert("发送失败:请确认今天是否已经到达发送上限");
  				    }
  				  });
  			
			});
		</script>

	</body>

</html>