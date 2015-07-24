package com.action.wechat;

import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.beans.wechat.sysUser;
import com.opensymphony.xwork2.ActionSupport;
import com.service.wechat.wechatBase;

@Controller("setMenu")
public class setMenuAction extends ActionSupport{
	
	private String json_code;
	@Autowired
	private wechatBase base;
	
	public String load_page(){
		return SUCCESS;
	}
	
	public String make_menu(){
		sysUser user = (sysUser) ServletActionContext.getServletContext().getAttribute("user");
		String wechat_uid = user.getRemark();
		base.make_menu(wechat_uid, json_code);
		return null;
	}

	public String getJson_code() {
		return json_code;
	}

	public void setJson_code(String json_code) {
		this.json_code = json_code;
	}
	
}
