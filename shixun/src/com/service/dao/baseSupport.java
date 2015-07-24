package com.service.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.Dao.webchat.HibernateUtil;
import com.beans.wechat.wxKeywordlist;
import com.beans.wechat.wxMpset;
import com.beans.wechat.wxWelcome;

/**
 * @author Conan
 * 用于从数据库获取基本信息 APPID APPSCRET神马的
 */
@Service
public class baseSupport {
	
	public Session session;
	public Transaction tx;
	@Autowired
	private wxKeywordlist keyword;
	@Autowired
	private wxWelcome wel;
	
	public void init() {
		session = HibernateUtil.currentSession();
		tx = session.beginTransaction();
	}
	
	public wxMpset getWechatInfo(String uid){
		init();
		wxMpset wxinfo = null;
		String hql = "FROM wxMpset wx WHERE wx.mpId = :user_id";
		Query query = session.createQuery(hql);
		int user_id = Integer.valueOf(uid);
		query.setInteger("user_id", user_id);
		List<wxMpset> list = query.list();
		HibernateUtil.closeSession();
		String result = null;
		if (list.size()==0) {
			wxinfo =  null;
		}else{
			wxinfo = list.get(0);
		}
		return wxinfo;
	}
	
	public void saveKey(String User_id,String KeyWord,String Response){
		init();
		keyword.setKeyword(KeyWord);
		keyword.setUserId(User_id);
		keyword.setResponse(Response);
		keyword.setMatchMode(1);
		session.save(keyword);
		tx.commit();
		session.flush();
		session.clear();
		HibernateUtil.closeSession();
	}
	
	public void saveWelcome(String User_id,String Response){
		init();
		wel.setContent(Response);
		wel.setWechatUid(User_id);
		session.save(wel);
		tx.commit();
		session.flush();
		session.clear();
		HibernateUtil.closeSession();
	}
	
}
