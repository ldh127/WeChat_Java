<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s" %>
<%  
   String path = request.getContextPath(); 
   String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<c:forEach items="${keyList}" var="user" varStatus="vs">
		<tr>
			
			 <td>
				<s:property value="#vs.index+1"/>
			 </td>
			 <td align = "center">${user.PId}</td>
			 <td align = "center">${user.PLoginname}</td>
			 <td align = "center">${user.PUserName}</td>
			 <td align = "center">${user.PEmail}</td>
			 <td align = "center"><html:department pdeptid="${user.PDeptid}"></html:department></td> <!-- 自定义标签 -->
		 </tr>
</c:forEach>

