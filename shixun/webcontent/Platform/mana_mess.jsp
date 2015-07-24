<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
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
			 //上报测速 --初始点
			window._points = [+new Date()];
			 //上报测速 --js加载完成点,通过编译工具加在seajs.use回调中
			function wx_main(mod) {
				window._points && (window._points[3] = +new Date());
			};
		</script>
		<title>微信公众平台</title>
		<link href="../img/logo.ico" rel="Shortcut Icon">
		<link onerror="wx_loaderror(this)" rel="stylesheet" type="text/css" href="<%=basePath%>/css/layout_head.css" />
		<link onerror="wx_loaderror(this)" rel="stylesheet" type="text/css" href="<%=basePath%>/css/base.css" />
		<link onerror="wx_loaderror(this)" rel="stylesheet" type="text/css" href="<%=basePath%>/css/lib.css" />
		<link onerror="wx_loaderror(this)" rel="stylesheet" href="<%=basePath%>/css/mana_mess.css">

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
								<img src="<%=basePath%>/img/ourself.jpg" class="avatar">
							</a>
						</div>
						<div id="accountArea" class="account_meta account_inbox account_meta_primary">
							<a href="/cgi-bin/frame?t=notification/index_frame&lang=zh_CN&token=938922762" class="account_inbox_switch">
								<i class="icon_inbox">通知</i>&nbsp;
							</a>
						</div>
						<div class="account_meta account_logout account_meta_primary"><a id="logout" href="quit">退出</a>
						</div>
					</div>
				</div>
			</div>

		</div>
		<div id="body" class="body page_message">
			<div id="js_container_box" class="container_box cell_layout side_l">

				<div class="col_side">
					<div class="menu_box" id="menuBar">
						<dl class="menu no_extra">
							<dt class="menu_title">

        <i class="icon_menu" style="background:url(<%=basePath%>/img/icon_menu_function.png) no-repeat;">

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

        <i class="icon_menu" style="background:url(<%=basePath%>/img/icon_menu_management.png) no-repeat;">

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

        <i class="icon_menu" style="background:url(<%=basePath%>/img/icon_menu_setup.png) no-repeat;">

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

        <i class="icon_menu" style="background:url(<%=basePath%>/img/icon_menu_developer.png) no-repeat;">

    </i>开发者中心

    </a>        </dt>

						</dl>
					</div>

				</div>

				<div class="col_main">

					<div class="main_hd">
						<h2>消息管理</h2>
						<div class="title_tab" id="topTab"></div>

						<div class="extra_info search_bar" id="searchBar">

						</div>
					</div>
					<div class="main_bd">
						<div class="filter_bar">
							<div class="dropdown_wrp dropdown_menu" id="dayselect"><a href="javascript:;" class="btn dropdown_switch jsDropdownBt"><label class="jsBtLabel">最近五天</label><i class="arrow"></i></a>
<div class="dropdown_data_container jsDropdownList" style="display: none;">
    <ul class="dropdown_data_list">
        
            
            <li class="dropdown_data_item ">  
                <a onclick="return false;" href="javascript:;" class="jsDropdownItem" data-value="7" data-index="0" data-name="最近五天">最近五天</a>
            </li>
            
            <li class="dropdown_data_item ">  
                <a onclick="return false;" href="javascript:;" class="jsDropdownItem" data-value="0" data-index="1" data-name="今天">今天</a>
            </li>
            
            <li class="dropdown_data_item ">  
                <a onclick="return false;" href="javascript:;" class="jsDropdownItem" data-value="1" data-index="2" data-name="昨天">昨天</a>
            </li>
            
            <li class="dropdown_data_item ">  
                <a onclick="return false;" href="javascript:;" class="jsDropdownItem" data-value="2" data-index="3" data-name="前天">前天</a>
            </li>
            
            <li class="dropdown_data_item ">  
                <a onclick="return false;" href="javascript:;" class="jsDropdownItem" data-value="3" data-index="4" data-name="更早">更早</a>
            </li>
                    
        
    </ul>
</div>
</div>
						</div>
						<div class="sub_title_bar white">
							<div class="info">
								<h3 id="page_title">全部消息<span>(文字消息保存5天，其它类型消息只保存3天)</span></h3>
								<label for="" class="frm_checkbox_label selected" style=""><i class="icon_checkbox"></i>
									<input type="checkbox" class="frm_checkbox" data-label="不提醒">隐藏关键词消息</label>
							</div>
						</div>

						<div id="newMsgTip" style="display:none;" class="msg_box">
							<div class="inner">
								<a href="/cgi-bin/message?t=message/list&amp;token=938922762&amp;count=20&amp;day=7"><span id="newMsgNum"></span>条新消息，点击查看</a>
								
							</div>
						</div>

						<ul class="message_list" id="listContainer">
							<c:forEach items="${user_mess}" var="item">

							<li class="message_item replyed" id="msgListItem206683885" data-id="206683885">
        <div class="message_opr">
        	<!--回复的内容-->
        	<form action="mess_reply" method="post">
        	<input type="hidden" name="fromUserName" value="${item.fromUserName}" />
            <input type="text" name="content" value=""/>
            <span class="btn  btn_primary btn_input">
            <button id="submit" type="submit">回复</button>
            </span>
            </form>
        </div>
        <div class="message_info">
            <div class="message_status"><em class="tips">${item.dealTime}</em></div>
            <div class="message_time">${item.createTime}
</div>
            <div class="user_info">
                
                <a href="/cgi-bin/singlesendpage?tofakeid=天空&amp;t=message/send&amp;action=indexundefined" target="_blank" data-fakeid="天空" data-id="206683885" class="remark_name">${item.nickName} </a>
                <span class="nickname" data-fakeid="天空" data-id="206683885"></span>
                <a href="javascript:;" class="icon14_common edit_gray js_changeRemark" data-fakeid="天空" title="修改备注" style="display:none;"></a>
                
            </div>
        </div>

        <div class="message_content text">
            <div id="wxMsg206683885" data-id="206683885" class="wxMsg">${item.content}</div>
        </div>
    </li></c:forEach>

						</ul>
						<div class="tool_area">
							<div class="pagination_wrp pageNavigator" style="display: none;"><div class="pagination" id="wxPagebar_1436376407601">
    <span class="page_nav_area">
        <a href="javascript:void(0);" class="btn page_first" style="display: none;"></a>
        <a href="javascript:void(0);" class="btn page_prev" style="display: none;"><i class="arrow"></i></a>
        
            <span class="page_num">
                <label>1</label>
                <span class="num_gap">/</span>
                <label>1</label>
            </span>
        
        <a href="javascript:void(0);" class="btn page_next" style="display: none;"><i class="arrow"></i></a>
        <a href="javascript:void(0);" class="btn page_last" style="display: none;"></a>            
    </span>
    
</div>
</div>
						</div>

						<div id="searchMore" href="javascript:;" class="search_more ">
							<div class="msg_box">
								<div class="inner">
									<a href="javascript:void(0);" id="moreTxt">查看更多</a>
								</div>
							</div>
							<i id="moreLoading" class="icon_loading_small white"></i>
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
		<script type="text/javascript">
			 //上报测速 --dom加载完成点
			window._points && (window._points[2] = +new Date());
		</script>

		<script type="text/javascript">
			var MODULES = {};
		</script>
		<script type="text/javascript">
			window.wx = {
				version: "4.0.0",
				data: {},
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
		<script onerror="wx_loaderror(this)" type="text/javascript" src="<%=basePath%>/js/sea.js"></script>
		<script onerror="wx_loaderror(this)" type="text/javascript" src="<%=basePath%>/js/lib.js"></script>
		<script onerror="wx_loaderror(this)" type="text/javascript" src="<%=basePath%>/js/wx.js"></script>
		<script onerror="wx_loaderror(this)" type="text/javascript" src="<%=basePath%>/jav/mana_mess.js"></script>
		<script onerror="wx_loaderror(this)" type="text/javascript" src="<%=basePath%>/miss/json218878.js"></script>
		<script type="text/javascript" src="<%=basePath%>/miss/store21a6f0.js"></script>
		<script type="text/javascript" src="<%=basePath%>/miss/webuploader234186.js"></script>
		





	</body>

</html>