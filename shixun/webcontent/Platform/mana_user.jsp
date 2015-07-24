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
		<link href="../img/old/logo.ico" rel="Shortcut Icon">
		<link onerror="wx_loaderror(this)" rel="stylesheet" type="text/css" href="<%=basePath%>/css/layout_head.css" />
		<link onerror="wx_loaderror(this)" rel="stylesheet" type="text/css" href="<%=basePath%>/css/base.css" />
		<link onerror="wx_loaderror(this)" rel="stylesheet" type="text/css" href="<%=basePath%>/css/lib.css" />
		<link rel="stylesheet" href="<%=basePath%>/css/mana_user.css" />

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
		<div id="body" class="body page_user">
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
						<h2>用户管理</h2>
						<div class="title_tab" id="topTab"></div>
					</div>
					<div class="main_bd">

						<div class="search_bar" id="searchBar"><span class="frm_input_box search with_del append ">
    <a class="del_btn jsSearchInputClose" href="javascript:" style="display:none">
        <i class="icon_search_del"></i>&nbsp;
    </a>
    <a href="javascript:" class="frm_input_append jsSearchInputBt">
    	<i class="icon16_common search_gray">搜索</i>&nbsp;
    </a>
    <input type="text" value="" class="frm_input jsSearchInput" placeholder="用户昵称">
</span></div>

						<div class="mod_hd">
						</div>
						<div class="inner_container_box side_r cell_layout ">
							<div class="inner_main">
								<div class="bd">

									<div class="table_wrp user_list">
										<table class="table" cellspacing="0">
											<thead class="thead">
												<tr>
													<th class="table_cell user no_extra" colspan="3">
														<div class="group_select">
															<label for="selectAll" class="group_select_label frm_checkbox_label">
																<i class="icon_checkbox"></i>
																<input type="checkbox" class="frm_checkbox" id="selectAll"> 全选 </label>&nbsp;
															<div id="allGroup" class="dropdown_wrp dropdown_menu disabled"><a href="javascript:;" class="btn dropdown_switch jsDropdownBt"><label class="jsBtLabel">添加到</label><i class="arrow"></i></a>
<div class="dropdown_data_container jsDropdownList" style="display: none;">
    <ul class="dropdown_data_list">
        
            
            <li class="dropdown_data_item ">  
                <a onclick="return false;" href="javascript:;" class="jsDropdownItem" data-value="0" data-index="0" data-name="未分组">未分组</a>
            </li>
            
            <li class="dropdown_data_item ">  
                <a onclick="return false;" href="javascript:;" class="jsDropdownItem" data-value="1" data-index="1" data-name="黑名单">黑名单</a>
            </li>
            
            <li class="dropdown_data_item ">  
                <a onclick="return false;" href="javascript:;" class="jsDropdownItem" data-value="2" data-index="2" data-name="星标组">星标组</a>
            </li>
                    
        
    </ul>
</div>
</div>
														</div>
													</th>
												</tr>
											</thead>
											<tbody class="tbody" id="userGroups">
<tr>
<!--<s:iterator value="list_user" id="u" var="ss">
	<s:iterator value="ss" id="j">
		<s:property value="j.userName" /> 
	</s:iterator>
</s:iterator>-->

		
<c:forEach items="${list_user}" var="item">
    <td class="table_cell user">
        <div class="user_info">
            <a target="_blank" href="" class="remark_name" data-fakeid="910245841">${item.nickName}<span class="emoji emoji1f3b6"></span></a>
            <a target="_blank" href="" class="remark_name" data-fakeid="910245841">${item.remarkName}<span class="emoji emoji1f3b6"></span></a>
            <a target="_blank" href="" class="remark_name" data-fakeid="910245841">${item.city}<span class="emoji emoji1f3b6"></span></a>
            <a target="_blank" href="" class="remark_name" data-fakeid="910245841">${item.province}<span class="emoji emoji1f3b6"></span></a>
            <a target="_blank" href="" class="remark_name" data-fakeid="910245841">${item.gender}<span class="emoji emoji1f3b6"></span></a>
            <a target="_blank" href="" class="remark_name" data-fakeid="910245841">${item.groupId}<span class="emoji emoji1f3b6"></span></a>
        </div>
    </td>

    <td class="table_cell user_category">
        <div id="selectArea910245841" class="js_selectArea dropdown_menu" data-gid="2" data-fid="910245841"><a href="javascript:;" class="btn dropdown_switch jsDropdownBt"><label class="jsBtLabel">星标组</label><i class="arrow"></i></a>
<div class="dropdown_data_container jsDropdownList" style="display: none;">
    <ul class="dropdown_data_list">
        
            
            <li class="dropdown_data_item ">  
                <a onclick="return false;" href="javascript:;" class="jsDropdownItem" data-value="0" data-index="0" data-name="未分组">未分组</a>
            </li>
            
            <li class="dropdown_data_item ">  
                <a onclick="return false;" href="javascript:;" class="jsDropdownItem" data-value="1" data-index="1" data-name="黑名单">黑名单</a>
            </li>
            
            <li class="dropdown_data_item ">  
                <a onclick="return false;" href="javascript:;" class="jsDropdownItem" data-value="2" data-index="2" data-name="星标组">星标组</a>
            </li>
                    
        
    </ul>
</div>
</div>
    </td>
    <td class="table_cell user_opr">
        <a class="btn remark js_msgSenderRemark" data-fakeid="910245841">修改备注</a>
    </td>
  
</tr>
  </c:forEach>

</tbody>
										</table>
									</div>
									<div class="tool_area">
										<div class="pagination_wrp js_pageNavigator"></div>
									</div>
								</div>
							</div>
							<div class="inner_side">
								<div class="bd">
									<div class="group_list">
										<div class="inner_menu_box" id="groupsList"><dl class="inner_menu">
    <dt class="inner_menu_item selected">
		<a href="/cgi-bin/contactmanage?t=user/index&amp;pagesize=20&amp;pageidx=0&amp;type=0undefined" class="inner_menu_link" title="全部用户">
			<strong>全部用户</strong><em class="num">(1)</em>
		</a>
    </dt>
    
	
	
	<dd class="inner_menu_item ">
	
		
        <a href="/cgi-bin/contactmanage?t=user/index&amp;pagesize=20&amp;pageidx=0&amp;type=0&amp;groupid=0undefined" class="inner_menu_link" title="未分组">
		
			<strong>未分组</strong><em class="num">(0)</em>
		</a>		
	</dd>
	
	
	<dd class="inner_menu_item " id="group2">
	
		
		<a href="/cgi-bin/contactmanage?t=user/index&amp;pagesize=20&amp;pageidx=0&amp;type=0&amp;groupid=2undefined" class="inner_menu_link" title="加入该分组中的用户仅作为更重要的用户归类标识">
		
			<strong>星标组</strong><em class="num">(1)</em>
		</a>		
	</dd>
	
    
</dl>


<dl class="inner_menu no_extra">
    <dt class="inner_menu_item">
		<a href="/cgi-bin/contactmanage?t=user/index&amp;pagesize=20&amp;pageidx=0&amp;type=0&amp;groupid=1undefined" class="inner_menu_link" title="黑名单">
			<strong>黑名单</strong><em class="num">(0)</em>
		</a>
    </dt>
</dl>
</div>
									</div>
								</div>
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


		<script onerror="wx_loaderror(this)" type="text/javascript" src="<%=basePath%>/js/sea.js"></script>
		<script onerror="wx_loaderror(this)" type="text/javascript" src="<%=basePath%>/js/lib.js"></script>
		<script onerror="wx_loaderror(this)" type="text/javascript" src="<%=basePath%>/js/wx.js"></script>

		<script type="text/javascript">
			define('widget/emoji.css', [], function() {
				return null;
			});
			define('biz_web/widget/dropdown.css', [], function() {
				return null;
			});
			define('widget/rich_buddy.css', [], function() {
				return null;
			});
			define('widget/pagination.css', [], function() {
				return null;
			});
		</script>
		<script onerror="wx_loaderror(this)" type="text/javascript" src="<%=basePath%>/jav/mana_user.js"></script>
		<script onerror="wx_loaderror(this)" type="text/javascript" src="<%=basePath%>/miss/json218878.js"></script>
		<script type="text/javascript" src="<%=basePath%>/miss/store21a6f0.js"></script>
		<script type="text/javascript" src="<%=basePath%>/miss/webuploader234186.js"></script>

	</body>

</html>