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

		<style type="text/css" adt="123"></style>
		<title>微信公众平台</title>
		<link href="<%=basePath%>img/logo.ico" rel="Shortcut Icon">

		<link onerror="wx_loaderror(this)" rel="stylesheet" type="text/css" href="<%=basePath%>css/layout_head.css">
		<link onerror="wx_loaderror(this)" rel="stylesheet" type="text/css" href="<%=basePath%>css/base.css">
		<link onerror="wx_loaderror(this)" rel="stylesheet" type="text/css" href="<%=basePath%>css/lib.css">
		<link rel="stylesheet" href="<%=basePath%>css/define_menu.css">
		<link rel="stylesheet" href="<%=basePath%>css/conan.css" />
		<script type="text/javascript" src="<%=basePath%>js/jquery-1.9.1.js"></script>
		<script type="text/javascript" src="<%=basePath%>js/jstree.min.js"></script>
		<script type="text/javascript" src="<%=basePath%>js/add_menu.js"></script>

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
                                        
                                        <a href="/merchant/store?action=detail&amp;t=wxverify/detail&amp;info=verify&amp;lang=zh_CN&amp;token=938922762" class="type icon_verify_label fail">未认证</a>
                                        
                </span>
							<a href="info_set_page.action">
								<img src="<%=basePath%>img/ourself.jpg" class="avatar">
							</a>
						</div>
						<div id="accountArea" class="account_meta account_inbox account_meta_primary">
							<a href="/cgi-bin/frame?t=notification/index_frame&amp;lang=zh_CN&amp;token=938922762" class="account_inbox_switch">
								<i class="icon_inbox">通知</i>&nbsp;
							</a>
						</div>
						<div class="account_meta account_logout account_meta_primary"><a id="logout" href="quit">退出</a>
						</div>
					</div>
				</div>
			</div>

		</div>
		<div id="body" class="body page_menu_setting">
			<div id="js_container_box" class="container_box cell_layout side_l">

				<div class="col_side">
					<div class="menu_box" id="menuBar">
						<dl class="menu no_extra">
							<dt class="menu_title">
        <i class="icon_menu" style="background:url(<%=basePath%>img/icon_menu_function.png) no-repeat;">
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
        <i class="icon_menu" style="background:url(<%=basePath%>img/icon_menu_management.png) no-repeat;">
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
        <i class="icon_menu" style="background:url(<%=basePath%>img/icon_menu_setup.png) no-repeat;">
    </i>设置
            </dt>

							<dd class="menu_item "><a data-id="10019" href="info_set_page.action">公众号设置</a>
							</dd>
							<dd class="menu_item "><a data-id="10022" href="/cgi-bin/safecenterstatus?action=view&amp;t=setting/safe-index&amp;token=1055897610&amp;lang=zh_CN">安全中心</a>
							</dd>
						</dl>
						<dl class="menu ">
							<dt class="menu_title clickable">
        <a href="/advanced/advanced?action=dev&amp;t=advanced/dev&amp;token=938922762&amp;lang=zh_CN">
        <i class="icon_menu" style="background:url(<%=basePath%>img/icon_menu_developer.png) no-repeat;">
    </i>开发者中心
    </a>        </dt>

						</dl>
					</div>

				</div>

				<div class="col_main">

					<div class="main_hd">
						<h2>自定义菜单</h2>

						<p class="extra_info mini_tips align_title icon_after">
							<a href="http://kf.qq.com/faq/120911VrYVrA150210BBJvei.html" target="_blank">使用说明<i class="icon_mini_tips document_link"></i></a>
						</p>

					</div>
					<div class="main_bd">
						<div class="highlight_box_wrp" id="menu_setting">

							<div class="highlight_box icon_wrap icon_small border" id="div_start" style="">
								<span class="icon unlock">

           						 </span>
								<h4 class="title">自定义菜单</h4>
								<p class="desc">
									通过编辑和发布自定义菜单来进行便携管理。</p>
							</div>

						</div>
						<div class="menu_setting_area_wrp" id="menu_container" style="">
							<div class="menu_setting_area edit">
								<p class="menu_setting_tips">可创建最多3个一级菜单，每个一级菜单下可创建最多5个二级菜单。</p>
							</div>

							<div class="menu_cotaner">
								<div class="new_rule_header">菜单内容</div>
								<div class="menu_preview">
									<div class="preview_header">
										<a href="javascript:void(0);" class="btn btn_default" id="add_conan">添加</a>
										<a href="javascript:void(0);" class="btn btn_primary" id="add_conan">删除</a>
									</div>
									<!--按钮列表-->
									<div class="menu_detail">
										<!--
                                        	作者：Conan
                                        	时间：2015-07-08
                                        	描述：菜单内容
                                        -->
									</div>
								</div>
								<!--按钮设置-->
								<div class="button_set">
									<div class="new_button_set">
										<input type="text" name="button_name" placeholder="输入按钮名称"/>
										<br />
										<select id="button_type" class="set_menu_class">
											<option value="0">--请选择按钮类型--</option>
											<option value="click">点击</option>
											<option value="view">连接</option>
											<option value="sub_menu">子菜单</option>
										</select>
										<br />
										<input type="text" name="button_event"/>
										
										<div id="sub_menu_set" style="display: none;">
											<select id="sub_button_type" class="set_menu_class">
											<option value="0">--请选择按钮类型--</option>
											<option value="click">点击</option>
											<option value="view">连接</option>
											</select>
											<input name="sub_menu_name" placeholder="子菜单按钮名字">
											<input type="text" name="sub_button_event"/>
											
											<a id="add_sub_menu" class="btn">添加子菜单</a>
											<a id="add_sub_menu_btn" class="btn">添加子菜单按钮</a>
											<a id="add_sub_menu_end" class="btn btn_primary">完成子菜单编辑</a>
										</div>
										
									</div>
								</div>
								
							</div>

							<div class="tool_bar tc js_totaltool_bar">
								<a href="javascript:void(0);" class="btn" id="end_curr">结束当前按钮编辑</a>
								<a href="javascript:void(0);" class="btn btn_primary" id="save_curr">保存当前</a>
								<a href="javascript:void(0);" class="btn btn_primary" id="pubBt">保存发布</a>
								<a href="javascript:void(0);" class="btn btn_default" id="viewBt">预览</a>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
		<div class="foot" id="footer">
			<ul class="links ft">
				<li class="links_item">
					<p class="copyright">Copyright © 2012-2015 Tencent. All Rights Reserved.</p>
				</li>
			</ul>

		</div>
	</body>

</html>