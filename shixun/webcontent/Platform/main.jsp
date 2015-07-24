<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%  
   String path = request.getContextPath(); 
   String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%> 
<html>
	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="renderer" content="webkit">
		<meta charset="utf-8">
		<title>微信公众平台</title>
		<link href="../img/old/logo.ico" rel="Shortcut Icon">
		<link rel="stylesheet" type="text/css" href="<%=basePath%>/css/layout_head.css">
		<link rel="stylesheet" type="text/css" href="<%=basePath%>/css/base.css">
		<link rel="stylesheet" type="text/css" href="<%=basePath%>/css/lib.css">
		<link rel="stylesheet" href="<%=basePath%>/css/page_index.css">

		<style type="text/css" adt="123"></style>
		<link charset="utf-8" rel="stylesheet" href="<%=basePath%>/css/pagination.css">
	</head>
	<body class="zh_CN">
		<div class="head" id="header">
			<div class="head_box">
				<div class="inner wrp">
					<h1 class="logo"><a href="../index.htm" title="微信公众平台"></a></h1>
					<div class="account">
						<div class="account_meta account_info account_meta_primary">
							<a href="#" class="nickname">${user.loginName}</a>
							<span class="type_wrp">

                                        <a href="#" class="type icon_subscribe_label">订阅号</a>

                                        

                                        <a href="/merchant/store?action=detail&amp;t=wxverify/detail&amp;info=verify&amp;lang=zh_CN&amp;token=1055897610" class="type icon_verify_label fail">未认证</a>

                                        

                </span>
							<a href="#">
								<img src="<%=basePath%>/img/ourself.jpg" class="avatar">
							</a>
						</div>
						<div id="accountArea" class="account_meta account_inbox account_meta_primary">
							<a href="/cgi-bin/frame?t=notification/index_frame&amp;lang=zh_CN&amp;token=1055897610" class="account_inbox_switch">
								<i class="icon_inbox">通知</i>&nbsp;
							</a>
						</div>
						<div class="account_meta account_logout account_meta_primary"><a id="logout" href="quit">退出</a>
						</div>
					</div>
				</div>
			</div>

		</div>
		<div id="body" class="body page_index">
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
					</div>

				</div>

				<div class="col_main">

					<div class="index_show_area">
						<div class="index_tap added">
							<ul class="inner">
								<li class="grid_item size1of2 index_tap_item added_message">
									<a href="/cgi-bin/message?t=message/list&amp;count=20&amp;day=7&amp;token=1055897610&amp;lang=zh_CN">
										<span class="tap_inner">

                    <i class="icon_index_tap"></i>

                    <em class="number">0</em>

                    <strong class="title">新消息</strong>

                </span>
									</a>
								</li>
								<li class="grid_item size1of2 no_extra index_tap_item added_fans">
									<a href="/cgi-bin/contactmanage?t=user/index&amp;pagesize=10&amp;pageidx=0&amp;type=0&amp;groupid=0&amp;token=1055897610&amp;lang=zh_CN">
										<span class="tap_inner no_extra">

                    <i class="icon_index_tap"></i>

                                        <em class="number">0</em>

                    <strong class="title">新增人数</strong>

                                    </span>
									</a>
								</li>
							</ul>
						</div>&nbsp;
						<div class="index_tap total">
							<ul class="inner">
								<li class="index_tap_item total_fans extra">
									<a href="/cgi-bin/contactmanage?t=user/index&amp;pagesize=10&amp;pageidx=0&amp;type=0&amp;groupid=0&amp;token=1055897610&amp;lang=zh_CN">
										<span class="tap_inner">

                    <i class="icon_index_tap"></i>

                    <em class="number">0</em>

                    <strong class="title">总用户数</strong>

                </span>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="mp_news_area notices_box">

						<div class="title_bar">
							<h3>系统公告</h3>
						</div>
						<ul class="mp_news_list">

							<li class="mp_news_item">
								<a href="/cgi-bin/announce?action=getannouncement&amp;key=1435633820&amp;version=12&amp;lang=zh_CN" target="_blank">
									<strong>公众平台基础功能优化                                        <i class="icon_common new"></i>

                                    </strong>
									<span class="read_more">2015-06-30</span>
								</a>
							</li>

						</ul>

					</div>

					<div class="pagination_wrp pageNavigator">
						<div class="pagination" id="wxPagebar_1435753735893">
							<span class="page_nav_area">

        <a href="javascript:void(0);" class="btn page_first" style="display: none;"></a>

        <a href="javascript:void(0);" class="btn page_prev" style="display: none;"><i class="arrow"></i></a>

        

            <span class="page_num">

                <label>1</label>

                <span class="num_gap">/</span>
							<label>5</label>
							</span>

							<a href="javascript:void(0);" class="btn page_next"><i class="arrow"></i></a>
							<a href="javascript:void(0);" class="btn page_last" style="display: none;"></a>
							</span>

							<span class="goto_area">

        <input type="text">

        <a href="javascript:void(0);" class="btn page_go">跳转</a>

    </span>

						</div>
					</div>

				</div>
			</div>

			<div class="faq">
				<ul class="links">
					<li class="links_item"><a href="#" target="_blank">客服中心</a>
					</li>
					<li class="links_item"><a href="#" target="_blank">侵权投诉</a>
					</li>
				</ul>
				<p class="tail">反馈官号shmily_xdl</p>
			</div>

		</div>
		<div class="foot" id="footer">
			<ul class="links ft">
				<li class="links_item">
					<p class="copyright">一切版权不归我</p>
				</li>
			</ul>

		</div>

		<script type="text/javascript" src="../js/sea.js"></script>
		<script type="text/javascript" src="../js/lib.js"></script>
		<script type="text/javascript" src="../js/wx.js"></script>
		<script type="text/javascript" src="../js/spin.js"></script>
		<script type="text/javascript" src="../js/index.js"></script>
		<div class="scale_tips" id="zoom_tips" style="display: none;">
			<div class="scale_tips_inner">
				<i class="icon_scale_tips"></i>
				<p class="scale_tips_content"><span id="zoom_msg"></span><a href="javascript:;" id="zoom_prompt">不再提示</a>
				</p>
			</div>
		</div>

	</body>

</html>