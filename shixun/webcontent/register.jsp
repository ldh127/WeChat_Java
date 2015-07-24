<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html>
<html>

	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="renderer" content="webkit">
		<meta charset=UTF-8 "utf-8">
		<title>微信公众平台</title>
		<link href="img/old/logo.ico" rel="Shortcut Icon">
		<link rel="stylesheet" type="text/css" href="css/layout_head.css" />
		<link rel="stylesheet" type="text/css" href="css/base.css" />
		<link rel="stylesheet" href="css/page_register.css">

	</head>

	<body class="zh_CN">
		<div class="head" id="header">
			<div class="head_box">
				<div class="inner wrp">
					<h1 class="logo"><a href="index.htm" title="微信公众平台"></a></h1>
					<div class="account">
					</div>
				</div>
			</div>

		</div>
		<div id="body" class="body page_simple ">
			<div class="container_box">
				<div class="col_main">
					<div class="main_bd">
						<div id="stepItems">
							<div class="info_box">
								<div class="form_wrp">
									<form action="regist" class="form" id="js_registerStep1">
										<fieldset class="frm_fieldset">
											<div class="frm_title mini_tips"><i class="icon_msg_mini info"></i>每个邮箱仅能申请一种帐号：服务号、订阅号或企业号</div>
											<div class="frm_control_group">
												<label for="" class="frm_label">用户名</label>
												<div class="frm_controls">
													<span class="frm_input_box">

								<input name="username" id="js_email" type="text" placeholder="" class="frm_input">

							</span>
													<p class="frm_tips">作为登录帐号，请填写未被微信公众平台注册，未被微信开放平台注册，未被个人微信号绑定的邮箱</p>
												</div>
											</div>

											<div class="frm_control_group">
												<label for="" class="frm_label">密码</label>
												<div class="frm_controls">
													<span class="frm_input_box">

								<input name="password" id="pw1" type="password" placeholder="" autocomplete="off" class="frm_input" onpaste="return false">

							</span>
													<p class="frm_tips">字母、数字或者英文符号，最短6位，区分大小写</p>
												</div>
											</div>

											<div class="frm_control_group">
												<label for="" class="frm_label">确认密码</label>
												<div class="frm_controls">
													<span class="frm_input_box">

								<input name="password2" id="pw2" type="password" placeholder="" autocomplete="off" class="frm_input" onpaste="return false" >

							</span>
													<p class="frm_tips">请再次输入密码</p>
												</div>
											</div>
										</fieldset>
										<div class="tool_bar border with_form">
											<span class="btn  btn_primary btn_input"><button id="js_nextBtn" type="submit" class="" onclick="this.form.action='regist';">注册</button></span>
										</div>
									</form>
								</div>
								<div class="tips_show">
									<p>已有微信公众帐号？<a href="index.jsp">立即登录</a>
									</p>

								</div>
							</div>
						</div>
						<div id="register"></div>
					</div>
				</div>

			</div>
		</div>
		<div class="foot" id="footer">
			<ul class="links ft">
				<li class="links_item">
					<p class="copyright">一切版权不归于我</p>
				</li>
			</ul>

		</div>

		<script id="step2" type="text/html">
			<div class="mail_box">
				<div class="page_msg simple default">
					<div class="inner group">
						<div class="msg_icon_wrapper"><i class="icon_msg mail"></i>
						</div>
						<div class="msg_content">
							<h4>激活公众平台帐号</h4>
							<p>
								感谢注册！确认邮件已发送至你的注册邮箱 : <span id="js_confirmEmail"></span>。请进入邮箱查看邮件，并激活公众平台帐号。 </p>
							<p class="spacing">
								<a href="javascript:;" id="js_loginEmail" class="btn btn_primary">登录邮箱</a>
							</p>
							<dl class="qa_list">
								<dt>没有收到邮件？</dt>
								<dd>1、请检查邮箱地址是否正确，你可以返回<a id="js_returnEmail" href="javascript:;">重新填写</a>。</dd>
								<dd>2、检查你的邮件垃圾箱</dd>
								<dd>3、若仍未收到确认，请尝试<a id="js_reSendEmail" href="javascript:;">重新发送</a>
								</dd>
							</dl>
						</div>
					</div>
				</div>
			</div>
		</script>
	</body>

</html>