package com.service.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;

import com.Dao.webchat.HibernateUtil;
import com.beans.wechat.sysUser;
import com.beans.wechat.wxClickEvent;
import com.beans.wechat.wxKeywordlist;
import com.beans.wechat.wxWelcome;

@Repository
public class userKey {
	
	public Session session;
	public Transaction tx;
	
	public void init() {
		session = HibernateUtil.currentSession();
		tx = session.beginTransaction();
	}
	
	public String getUserKeyString(String key,String uid){
		init();
		String hql = "FROM wxKeywordlist key WHERE key.userId = :user_id AND key.keyword like :keyword";
		Query query = session.createQuery(hql);
		int user_id = Integer.valueOf(uid);
		System.out.println(user_id);
		query.setInteger("user_id", user_id);
		query.setString("keyword","%"+key+"%");
		List<wxKeywordlist> list = query.list();
		session.flush();
		session.clear();
		HibernateUtil.closeSession();
		String result = null;
		if (list.size()==0) {
			return null;
		}else{
			wxKeywordlist keyWord = list.get(0);
			result = keyWord.getResponse();
		}
		return result;
	}
	
	public String getUserWelcome(String uid){
		init();
		String hql = "FROM wxWelcome wel WHERE wel.wechatUid = :wechatUid";
		Query query = session.createQuery(hql);
		int user_id = Integer.valueOf(uid);
		query.setInteger("wechatUid", user_id);
		List<wxWelcome> list = query.list();
		session.flush();
		session.clear();
		HibernateUtil.closeSession();
		String result = null;
		if (list.size()==0) {
			return null;
		}else{
			wxWelcome keyWord = list.get(0);
			result = keyWord.getContent();
		}
		return result;
	}
	
	public String getButtonClickEvent(String uid,String key){
		init();
		String hql = "FROM wxClickEvent ev WHERE ev.wechatUid = :wechatUid AND ev.key =:key";
		Query query = session.createQuery(hql);
		int user_id = Integer.valueOf(uid);
		query.setInteger("wechatUid", user_id);
		query.setString("key", key);
		List<wxClickEvent> list = query.list();
		HibernateUtil.closeSession();
		String result = null;
		if (list.size()==0) {
			return null;
		}else{
			wxClickEvent keyWord = list.get(0);
			result = keyWord.getContent();
		}
		return result;
	}
	
	public List takeAllKey(String uid){
		init();
		String hql = "FROM wxKeywordlist ev WHERE ev.userId = :wechatUid";
		Query query = session.createQuery(hql);
		int user_id = Integer.valueOf(uid);
		query.setInteger("wechatUid", user_id);
		List<wxKeywordlist> result = query.list();
		System.out.println(result);
		return null;
	}
	
	public void ModifyKey(String action,String keyID){
		init();
		wxKeywordlist keyword = (wxKeywordlist) session.get(wxKeywordlist.class,Integer.valueOf(keyID));
		if (action.equals("delete")) {
			session.delete(keyword);
			
		}else if (action.equals("update")) {
			session.update(keyword);
		}
		session.flush();
		session.clear();
		HibernateUtil.closeSession();
	}
	
}
