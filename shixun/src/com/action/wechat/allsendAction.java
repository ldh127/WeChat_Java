package com.action.wechat;

import java.io.UnsupportedEncodingException;

import org.apache.struts2.ServletActionContext;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.Dao.webchat.HibernateUtil;
import com.beans.wechat.sysUser;
import com.opensymphony.xwork2.ActionSupport;
import com.service.wechat.wechatBase;
@SuppressWarnings("serial")
@Controller("allsendAction")
public class allsendAction extends ActionSupport {
	private String content;
	private String wechat_uid;
	private String send_all_state;
	@Autowired
	private wechatBase send_all;
	public String getWechat_uid() {
		return wechat_uid;
	}
	public void setWechat_uid(String wechat_uid) {
		this.wechat_uid = wechat_uid;
	}
	public String getSend_all_state() {
		return send_all_state;
	}
	public void setSend_all_state(String send_all_state) {
		this.send_all_state = send_all_state;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	@Override
	public String execute() throws UnsupportedEncodingException{
		sysUser sendUser=(sysUser) ServletActionContext.getServletContext().getAttribute("user");
		content = new String(content.getBytes("UTF-8"),"UTF-8");
		this.send_all_state =  send_all.send_to_all(sendUser.getRemark(), content);
		return SUCCESS;
	}
}
