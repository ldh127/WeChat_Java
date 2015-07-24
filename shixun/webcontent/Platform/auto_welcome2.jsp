<!DOCTYPE html>
<html>

	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="renderer" content="webkit">
		<meta charset="utf-8">

		<script type="text/javascript">
			 //上报测速 --初始点
			window._points = [+new Date()];
			 //上报测速 --js加载完成点,通过编译工具加在seajs.use回调中
			function wx_main(mod) {
				window._points && (window._points[3] = +new Date ());
			};
		</script>
		<title>微信公众平台</title>
		<link href="../img/logo.ico" rel="Shortcut Icon">
		<link onerror="wx_loaderror(this)" rel="stylesheet" type="text/css" href="../css/layout_head.css" />
		<link onerror="wx_loaderror(this)" rel="stylesheet" type="text/css" href="../css/base.css" />
		<link onerror="wx_loaderror(this)" rel="stylesheet" type="text/css" href="../css/lib.css" />
		<link onerror="wx_loaderror(this)" rel="stylesheet" href="../css/advanced_reply_common.css">
		<link onerror="wx_loaderror(this)" rel="stylesheet" href="../css/advanced_reply_keywords.css">
		<link rel="stylesheet" href="../css/conan.css" />
		<link rel="stylesheet" type="text/css" href="../css/akr.css" />
		<script type="text/javascript" src="../js/jq.min.js"></script>
		<script type="text/javascript" src="../js/set_key2.js" ></script>
	</head>

	<body class="zh_CN">
		<div class="head" id="header">
			<div class="head_box">
				<div class="inner wrp">
					<h1 class="logo"><a href="/" title="微信公众平台"></a></h1>
					<div class="account">
						<div class="account_meta account_info account_meta_primary">
							<a href="info_set_page.action" class="nickname">${user.loginName}</a>
							<span class="type_wrp">

                                        <a href="info_set_page.action" class="type icon_subscribe_label">订阅号</a>

                                        

                                        <a href="/merchant/store?action=detail&t=wxverify/detail&info=verify&lang=zh_CN&token=82694193" class="type icon_verify_label fail">未认证</a>

                                        

                </span>
							<a href="info_set_page.action">
								<img src="../img/ourself.jpg" class="avatar">
							</a>
						</div>
						<div id="accountArea" class="account_meta account_inbox account_meta_primary">
							<a href="/cgi-bin/frame?t=notification/index_frame&lang=zh_CN&token=82694193" class="account_inbox_switch">
								<i class="icon_inbox">通知</i>&nbsp;
							</a>
						</div>
						<div class="account_meta account_logout account_meta_primary"><a id="logout" href="quit">退出</a>
						</div>
					</div>
				</div>
			</div>

		</div>
		<div id="body" class="body page_advanced_reply">
			<div id="js_container_box" class="container_box cell_layout side_l">

				<div class="col_side">
					<div class="menu_box" id="menuBar">
						<dl class="menu no_extra">
							<dt class="menu_title">


    </i>功能

            </dt>

							<dd class="menu_item "><a data-id="10005" href="Platform/funtion_send_all.jsp">群发功能</a>
							</dd>
							<dd class="menu_item selected"><a data-id="10006" href="key_set_page">自动回复</a>
							</dd>
							<dd class="menu_item "><a data-id="10007" href="menu_load_page">自定义菜单</a>
							</dd>
						</dl>
						<dl class="menu ">
							<dt class="menu_title">

        <i class="icon_menu" style="background:url(../img/icon_menu_management.png) no-repeat;">

    </i>管理

            </dt>

							<dd class="menu_item "><a data-id="10012" href="/cgi-bin/message?t=message/list&count=20&day=7&token=82694193&lang=zh_CN">消息管理</a>
							</dd>
							<dd class="menu_item "><a data-id="10013" href="/cgi-bin/contactmanage?t=user/index&pageidx=0&type=0&token=82694193&lang=zh_CN">用户管理</a>
							</dd>
							<dd class="menu_item "><a data-id="10014" href="/cgi-bin/appmsg?begin=0&count=10&t=media/appmsg_list&type=11&action=list&token=82694193&lang=zh_CN">素材管理</a>
							</dd>
						</dl>
						<dl class="menu ">
							<dt class="menu_title">

        <i class="icon_menu" style="background:url(../img/icon_menu_setup.png) no-repeat;">

    </i>设置

            </dt>

							<dd class="menu_item "><a data-id="10019" href="info_set_page.action">公众号设置</a>
							</dd>
							<dd class="menu_item "><a data-id="10022" href="/cgi-bin/safecenterstatus?action=view&t=setting/safe-index&token=82694193&lang=zh_CN">安全中心</a>
							</dd>
						</dl>
						<dl class="menu ">
							<dt class="menu_title clickable">

        <a href="/advanced/advanced?action=dev&t=advanced/dev&token=82694193&lang=zh_CN">

        <i class="icon_menu" style="background:url(../img/icon_menu_developer.png) no-repeat;">

    </i>开发者中心

    </a>        </dt>

						</dl>
					</div>

				</div>

				<div class="col_main">

					<div class="main_hd">
						<h2>自动回复</h2>
					</div>
					<div class="main_bd">
						<div class="highlight_box icon_wrap icon_small border" id="div_stop" style="display:none">
							<div class="opr">
								<a href="javascript:;" class="btn btn_primary" id="btn_start">开启</a>
							</div>
							<span class="icon unlock">

            

        </span>
							<h4 class="title">未开启自动回复设置</h4>
							<p class="desc">
								通过编辑内容或关键词规则，快速进行自动回复设置。如具备开发能力，可更灵活地使用该功能。<a href="javascript:;" class="detail_desc">查看详情</a>
							</p>
						</div>
						<div class="reply_pop_tips popover normal_flow pos_right" id="div_alertTips" style="display:none">
							<div class="popover_inner">
								<div class="popover_content">
									<p class="">由于在开发者中心开启了回调URL和Token，当前自动回复设置已失效。你可以前往开发者中心进行停用。</p>
								</div>
							</div>
							<i class="popover_arrow popover_arrow_out"></i>
							<i class="popover_arrow popover_arrow_in"></i>
						</div>

						<div class="highlight_box icon_wrap icon_small border" id="div_start" style="">
							<div class="opr">
							</div>
							<span class="icon lock">

            

        </span>
							<h4 class="title">自动回复设置</h4>
							<p class="desc">
								通过编辑内容或关键词规则，快速进行自动回复设置。
							</p>
						</div>
						<div class="content_wrap" id="div_replyContent">
							<div class="global_mod mt_layout reply_tab_wrp">
								<div class="section_tab">
									<ul class="tab_navs">
										<li class="tab_nav">
											<a href="key_set_welcome.action">被添加自动回复</a>
										</li>
										<li class="tab_nav no_extra  selected">
											<a href="key_set_page.action">关键词自动回复</a>
										</li>
									</ul>
								</div>

								<div class="global_extra">
									<span class="reply_title_tips mini_tips icon_after"><a href="http://kf.qq.com/faq/120322fu63YV130422rYNjYB.html" target="_blank">公众平台如何设置关键词自动回复 <i class="icon_mini_tips document_link"></i></a></span>
								</div>

							</div>
							<div class="btn_wrp">

								<a href="javascript:void(0);" class="btn btn_add btn_primary" id="Js_rule_add" data-status="not">查看历史</a>
							</div>
							
							<div class="add_frame">
							
									<div class="new_rule_header">
										新规则
									</div>
									
									<div class="rule_detail">
									
										<div class="content">
											回复类型:
											<select id="reply_type" name="content_type">
												<option value="normal" selected>纯文字</option>
												<option value="music">音乐</option>
												<option value="mutil">多图文</option>
											</select>
											<div class="bottom_hr"></div>
											回复内容:
											<br />
											<div id="content_normal" style="display: none;">
												<textarea id="normal_content"></textarea>
											</div>
											<div id="content_music" style="display: none;">
												<p>
												<label>语音标题:</label>
												<input name="music_title" />
												</p>
												<p>
												<label>语音Url:</label>
												<input name="music_url" />
												</p>
												<p>
												<label>语音描述:</label>
												<input name="music_desp" />
												</p>
											</div>
											<div id="content_mutil" style="display: none;">
												<p>
												<label>标题:</label>
												<input name="news_title" />
												</p>
												<p>
												<label>描述:</label>
												<input name="news_desp" />
												</p>
												<p>
												<label>图片Url:</label>
												<input name="news_pic_url" />
												</p>
												<p>
												<label>连接Url:</label>
												<input name="news_url" />
												</p>
											</div>
											<input type="hidden" name="User_id" value="${user.remark}"></input>
											<button id="check" class="check_content">查看多图文</button>
											<button id="save" class="save_muti">保存该图文</button>
											<button id="save_db" class="save_db" style="display: ;">提交发布</button>
										</div>
										
									</div>
									
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
	</body>
</html>