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
		<link href="img/old/logo.ico" rel="Shortcut Icon">
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
							<dd class="menu_item "><a data-id="10006" href="/advanced/autoreply?t=ivr/reply&amp;action=beadded&amp;token=1055897610&amp;lang=zh_CN">自动回复</a>
							</dd>
							<dd class="menu_item "><a data-id="10007" href="/advanced/selfmenu?action=index&amp;t=advanced/menu-setting&amp;token=1055897610&amp;lang=zh_CN">自定义菜单</a>
							</dd>
						</dl>
						<dl class="menu ">
							<dt class="menu_title">

        <i class="icon_menu" style="background:url(../img/icon_menu_management.png) no-repeat;">

    </i>管理

            </dt>

							<dd class="menu_item "><a data-id="10012" href="/cgi-bin/message?t=message/list&amp;count=20&amp;day=7&amp;token=1055897610&amp;lang=zh_CN">消息管理</a>
							</dd>
							<dd class="menu_item "><a data-id="10013" href="/cgi-bin/contactmanage?t=user/index&amp;pageidx=0&amp;type=0&amp;token=1055897610&amp;lang=zh_CN">用户管理</a>
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