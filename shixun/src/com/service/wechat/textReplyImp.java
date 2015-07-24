package com.service.wechat;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Component;

import com.Dao.webchat.HibernateUtil;
import com.Entity.wechat.xmlEntity;
import com.beans.wechat.wxUserlist;
import com.beans.wechat.wxUserlistId;
import com.service.dao.userKey;
import com.service.wechat.tuLing;

/**
 * @author Conan
 * 
 */
@Component
public class textReplyImp {
	@Autowired
	private xmlEntity wechat; // get wechat xml
	@Autowired
	private tuLing rebot;
	@Autowired
	private userKey userKey;
	@Autowired
	private wechatBase weBase;

	private String content; // get User text request

	public void init(xmlEntity wechat) {
		this.wechat = wechat;
		content = wechat.getContent();
	}

	public String do_text(String uid) {
		String response = userKey.getUserKeyString(this.content, uid);
		if (response == null) {
			response = rebot.getTulingResult(this.content);
		}
		return response;
	}

	public String do_event(String uid) {
		String event = wechat.getEvent();
		String response = "";
		switch (event) {
		case "subscribe":
		{
			//添加公众号和关注者的信息
			ApplicationContext ctxApplicationContext =new ClassPathXmlApplicationContext("ApplicationContext.xml");
			Session session = HibernateUtil.currentSession();
			Transaction tx = session.beginTransaction();
			wxUserlist userlist=ctxApplicationContext.getBean(wxUserlist.class);
			wxUserlistId userlistId=ctxApplicationContext.getBean(wxUserlistId.class);
			userlistId.setMpId(uid);
			userlistId.setUserId(wechat.getFromUserName());
			userlist.setId(userlistId);
			session.save(userlist);
			
			tx.commit();
			response = userKey.getUserWelcome(uid);
			if (response == null) {
				content = "欢迎关注";
				
			} else {
				content = response;
				weBase.get_user_info(uid, wechat.getFromUserName());
			}
			
			break;
		}
		case "CLICK":
			response = userKey.getButtonClickEvent(uid, wechat.getEventKey());
			if (response == null) {
				content = "管理员尚未添加该按钮事件";
			} else {
				content = response;
			}
			break;
		}
		return content;
	}
}
