<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta charset=UTF-8 "utf-8">
		<meta name="baidu-site-verification" content="DLH0DxvBfi">
		<title>微信公众平台</title>
		<meta name="keywords" content="微信公众平台,微信公众平台官方网站,公众号注册,微信公众号注册,微信订阅号注册,微信公众号申请,微信服务号申请,微信订阅号申请,微信企业号申请,微信服务号注册,微信企业号注册,订阅号注册,公众号申请,服务号申请,订阅号申请,企业号申请,服务号注册,企业号注册,微信">
		<meta name="description" content="微信公众平台，给个人、企业和组织提供业务服务与用户管理能力的全新服务平台。">
		<link href="/img/old/logo.ico" rel="Shortcut Icon">
		<link onerror="wx_loaderror(this)" rel="stylesheet" href="css/page_login.css">
	</head>

	<body class="zh_CN">
		<div class="head" id="header">
			<div class="head_box">
				<div class="inner wrp">
					<h1 class="logo">
                        <a href="index.htm" title="微信公众平台">微信公众平台</a>
                    </h1>
					<div class="account">
						<div class="account_meta account_faq">
							第一次使用公众平台？ <a href="register.jsp">立即注册</a>
						</div>
					</div>
				</div>
			</div>
			<div class="banner">
				<div class="inner wrp">

					<div class="login_frame">
						<h3>登录</h3>
						<div  class="login_err_panel" style="display:none;" id="err"> </div>
						<form action="login" class="login_form" id="loginForm" method="post">
							<div class="login_input_panel" id="js_mainContent">
								<div class="login_input">
									<i class="icon_login un"> </i>
									<input type="text" placeholder="账号" id="account" name="username">
								</div>
								<div class="login_input">
									<i class="icon_login pwd"> </i>
									<input type="password" placeholder="密码" id="pwd" name="password">
								</div>
							</div>
							
							<div class="login_btn_panel btn_login">
								<input class="btn_login" type="submit" value="登录"
   onclick="this.form.action='login';"/>
							</div>
						</form>
					</div>

					<dl class="qrcode_panel">
						<dt>
                            <img src="img/wxewm.jpg">
                        </dt>
						<dd>
							扫描并关注
							<br>微信公众平台 </dd>
					</dl>
				</div>
			</div>
		</div>

		<div class="foot" id="footer">
			<ul class="links ft">
				<li class="links_item">
					<p class="copyright">一切的版权都不归我</p>
				</li>
			</ul>

		</div>
		
	</body>

</html>