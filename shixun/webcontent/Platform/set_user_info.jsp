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
		<meta charset="utf-8">

		<title>微信公众平台</title>
		<link href="../img/old/logo.ico" rel="Shortcut Icon">
		<link onerror="wx_loaderror(this)" rel="stylesheet" type="text/css" href="<%=basePath%>/css/layout_head.css" />
		<link onerror="wx_loaderror(this)" rel="stylesheet" type="text/css" href="<%=basePath%>/css/base.css" />
		<link onerror="wx_loaderror(this)" rel="stylesheet" type="text/css" href="<%=basePath%>/css/lib.css" />
		<link rel="stylesheet" href="<%=basePath%>/css/set_user_info.css" />
	</head>

	<body class="zh_CN">
		<div class="head" id="header">
			
			<div class="head_box">
				<div class="inner wrp">
					<h1 class="logo"><a href="/" title="微信公众平台"></a></h1>
					<div class="account">
						<div class="account_meta account_info account_meta_primary">
							<a href="" class="nickname">${user.loginName}</a>
							<span class="type_wrp">

                                        <a href="" class="type icon_subscribe_label">订阅号</a>

                                        

                                        <a href="" class="type icon_verify_label fail">未认证</a>

                                        

                </span>
							<a href="">
								<img src="<%=basePath%>img/ourself.jpg" class="avatar">
							</a>
						</div>
						<div id="accountArea" class="account_meta account_inbox account_meta_primary">
							<a href="" class="account_inbox_switch">
								<i class="icon_inbox">通知</i>&nbsp;
							</a>
						</div>
						<div class="account_meta account_logout account_meta_primary"><a id="logout" href="quit">退出</a>
						</div>
					</div>
				</div>
			</div>

		</div>
		<div id="body" class="body page_setting index">
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


							<dd class="menu_item selected"><a data-id="10019" href="info_set_page.action">公众号设置</a>

							</dd>
							<dd class="menu_item "><a data-id="10022" href="/cgi-bin/safecenterstatus?action=view&amp;t=setting/safe-index&amp;token=1055897610&amp;lang=zh_CN">安全中心</a>
							</dd>
						</dl>
						<dl class="menu ">
							<dt class="menu_title clickable">

        <a href="/advanced/advanced?action=dev&t=advanced/dev&token=923771532&lang=zh_CN">

    </a>        </dt>

						</dl>
					</div>

				</div>

				<div class="col_main">

					<div class="main_hd">
						<h2>公众号设置</h2>
						<div id="topTab"></div>
					</div>

					<div class="main_bd">
					<form action="info_submit_info" method="POST">
						<div class="account_setting_area" id="settingArea">
							<h3 class="sub_title">公开信息</h3>
							<ul>
								<li class="account_setting_item wrp_pic_item_spe1">
									<h4>二维码</h4>
									<div class="meta_opr">
										<a id="GET_QR" onclick="alert('请确认APPID和APPSCRET是否正确');">点击获取</a>
										<!-- <button type="button" id="GET_QR">点击获取</button> -->
										<a id="more_size" class="more_size" href="javascript:;"></a>
									</div>
									<div class="meta_content">
										<a target="_blank" class="verifyInfo" title="点击下载" href="">
											<!--二维码地址-->
											<img src="${QR}" class="qrcode_pic" width="90" height="90" />
										</a>
									</div>
								</li>

								<li class="account_setting_item">
									<h4>用户名</h4>
									<div class="meta_opr">
									</div>
									<div class="meta_content">
										<input type="text" name="nickName" value="${setting.nickName}"/>
									</div>
								</li>

								<li class="account_setting_item">
									<h4>微信号</h4>
									<div class="meta_content">
										<input type="text"  name="wechatId" value="${setting.wechatId}"/> <!--value="${wechatId}"-->
									</div>
								</li>

								<li class="account_setting_item">
									<h4>类型</h4>

									<div class="meta_opr">
										<div class="modify_wrapper">
											主要分为订阅号(0) 和 服务号(1)
										</div>
									</div>

									<div class="meta_content">
										<input type="text" name="type" value="${setting.type}"/><!--value="${type}"-->
										<span class="mini_tips weak_text">(类型不可变更)</span>

									</div>
								</li>

								<li class="account_setting_item">
									<h4>介绍</h4>
									<div class="meta_content">
										<input type="text" name="introduction" value="${setting.introduction}"/><!--value="${introduction}"-->
									</div>
								</li>

								<li class="account_setting_item">
									<h4>APPID</h4>
									<div class="meta_content">
										<input type="text" name="APPID" value="${setting.APPID}"/> <!--value="${APPID}"-->
									</div>
								</li>

								<li class="account_setting_item">
									<h4>APPSCRET</h4>
									<div class="meta_opr">
										<!-- <a href="/cgi-bin/settingpage?action=sosomap&lang=zh_CN&token=923771532">设置</a> -->
									</div>
									<div class="meta_content">
										<input type="text" name="APPSCRET" value="${setting.APPSCRET}"/><!--value="${APPSCRET}"-->
									</div>
								</li>

								<li class="account_setting_item">
									<h4>token</h4>
									<div class="meta_content">
										<input type="text" name="token" value="${setting.token}"/> <!--value="${token}"-->
									</div>
								</li>
								<li class="account_setting_item">
									<h4>url</h4>
									<div class="meta_content">
										<input type="hidden" name="url" value="http://texclouds.com/shixun/shixun/valid?wechat_uid=${user.remark}"/>
										http://texclouds.com/shixun/shixun/valid?wechat_uid=${user.remark}
									</div>
								</li>
								<li class="account_setting_item">
									<div class="meta_content">
											<span class="btn  btn_primary btn_input"><button id="js_nextBtn" type="submit">确认提交</button></span>
									</div>
								</li>

							</ul>
							
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
		
	</body>

</html>