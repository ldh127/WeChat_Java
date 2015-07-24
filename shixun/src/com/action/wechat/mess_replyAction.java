package com.action.wechat;

import org.apache.struts2.ServletActionContext;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.Dao.webchat.HibernateUtil;
import com.beans.wechat.sysUser;
import com.opensymphony.xwork2.ActionSupport;
import com.service.wechat.wechatBase;

@Component
public class mess_replyAction extends ActionSupport {

	private String fromUserName;
	private String content;
	@Autowired
	private wechatBase weBase;
	public String getFromUserName() {
		return fromUserName;
	}

	public void setFromUserName(String fromUserName) {
		this.fromUserName = fromUserName;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public wechatBase getWeBase() {
		return weBase;
	}

	public void setWeBase(wechatBase weBase) {
		this.weBase = weBase;
	}


	@Override
	public String execute() throws Exception {
		sysUser user = (sysUser) ServletActionContext.getServletContext().getAttribute("user");
		String mpID = user.getRemark();
		String conString=new String(content.getBytes("UTF-8"),"UTF-8");
		weBase.send_to_people(fromUserName, mpID, conString);
		System.out.println(conString);
		System.out.println("回复成功");
		
		return SUCCESS;
	}
}
