package com.DEMO.xdl;

import java.util.List;

import javax.persistence.Id;

import org.apache.struts2.ServletActionContext;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Component;

import com.Dao.webchat.HibernateUtil;
import com.beans.wechat.sysUser;
import com.beans.wechat.wxData;
import com.beans.wechat.wxMess;
import com.beans.wechat.wxMpset;
import com.beans.wechat.wxUserlist;
import com.beans.wechat.wxUserlistId;

@Component
public class xudaolong {
/*	@Autowired
	private static wxUserlistId userlistId;*/
	
	@Autowired
	private sysUser user;
	private static List<wxMess> list;
	public static void main(String[] args) throws Exception {
		/*ApplicationContext ctx =new ClassPathXmlApplicationContext("ApplicationContext.xml");
		Session session = HibernateUtil.currentSession();
		Transaction tx = session.beginTransaction();
		    
		wxData user_text=(wxData)ctx.getBean(wxData.class);
		user_text.setToUserName("dasdfds");
		 session.save(user_text);
		tx.commit(); //事物必须提交 
			   session.flush();
			   session.close();*/
		
		
		/*sysUser wxData wxMpset*/
		Session session = HibernateUtil.currentSession();
		Transaction tx = session.beginTransaction();
		/*sysUser user = (sysUser) ServletActionContext.getServletContext().getAttribute("user");*/
		/*String mpID="5201314";
		String hql="select * from sys_user s,wx_data d,wx_mpset m where s.Remark = m.MpID and m.WechatID = d.ToUserName and s.Remark ="+mpID;*/
		/*Query query=session.createQuery(hql);*/
		/*List<wxMpset> list=query.list();
		for(wxMpset list2:list){
		    System.out.println(list2.getWechatId());
		  }*/
		String sql = 
		"SELECT distinct u.NickName,d.Content,d.CreateTime,d.DealTime,d.FromUserName,d.ToUserName from wx_mpset m inner join sys_user s on s.Remark = m.MpID inner join wx_data d  on m.WechatID = d.ToUserName and s.Remark =5201314 INNER JOIN wx_userlist u on u.UserName=d.FromUserName ";
		@SuppressWarnings("unchecked")
		Query query=session.createSQLQuery(sql);
		list=(List<wxMess>)query.list();
		System.out.println(list);
		/*for(wxMess list2:list){
		    System.out.println(list2.getContent());
		  }*/
		
		/*List<wxMess> list = session.createSQLQuery(sql).list();*/
		
		tx.commit();
		session.flush();
		session.close();
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	/*	ApplicationContext ctxApplicationContext =new ClassPathXmlApplicationContext("ApplicationContext.xml");
		Session session = HibernateUtil.currentSession();
		Transaction tx = session.beginTransaction();
	
	    	wxUserlistId userlistId=ctxApplicationContext.getBean(wxUserlistId.class);
			userlistId.setMpId("5201314");
			userlistId.setUserId("22222");
		    wxUserlist list = (wxUserlist)session.get(wxUserlist.class, userlistId); 
		    list.setUserName("openid");
		    list.setNickName("nickname");
		    list.setRemarkName("remark");
		    list.setCity("city");
		    list.setCountry("country");
		    list.setGender(Boolean.valueOf("sex"));
		    list.setProvince("province");
		    session.update(list); 
		    System.out.println("1");
		    tx.commit(); 
		    System.out.println("2");
		    session.flush();  
	        session.clear();*/
        
	   
	
	    
	    
		/*Session session = HibernateUtil.currentSession();
		Transaction tx = session.beginTransaction();
		sysUser user= (sysUser)session.get(sysUser.class, 1); 
		System.out.println(user.getLoginName());
		String mpID="1111";
		String hql="From wxUserlist as xu where xu.id.mpId='"+mpID+"'";
		Query query=session.createQuery(hql);
		List<wxUserlist> list=query.list();
		for(wxUserlist list2:list){
		    System.out.println(list2.getNickName());
		  }*/
		
		/*wxUserlistId list_id = new wxUserlistId(); 
		list_id.setMpId("1111");
		list_id.setUserId("11111");
	    wxUserlist list = (wxUserlist)session.get(wxUserlist.class, list_id); 
	    list.setUserName("xudaolong");
	    list.setNickName("许道龙");
	    session.update(user); */
		
		/*wxUserlist userlist=ctxApplicationContext.getBean(wxUserlist.class);
		wxUserlistId userlistId=ctxApplicationContext.getBean(wxUserlistId.class);
		userlistId.setMpId("111");
		userlistId.setUserId("111");
		userlist.setId(userlistId);
		session.save(userlist);
		tx.commit();
		HibernateUtil.closeSession();*/
		
		//删除数据库中的user
		/*session.delete(user);*/
		
		//双表级联
		/*String hql = "from Student where Class.className = '二班'";*/
				
		
		//遍历某列
		/*Query query = session.createQuery("from sysUser");
		List<sysUser> list=query.list();
		for(sysUser user2:list){
		    System.out.println(user2.getLoginName());
		  }*/
		
		/*hd.find("from sysUser as s order by s.UserID")*/
		/*根据某id查*/
		/*String hql="select userId from sysUser ";
		Query query=session.createQuery(hql);
		List<String> list=query.list();*/
		/*String hql="select loginPasswd from sysUser as s "+"where s.loginName ='xudaolong'";
		Query query=session.createQuery(hql);
		List list=query.list();
		System.out.println(list.toString().contains("XIAOlong2010"));*/
		
	}
	public sysUser getUser() {
		return user;
	}
	public void setUser(sysUser user) {
		this.user = user;
	}
	public List<wxMess> getList() {
		return list;
	}
	public void setList(List<wxMess> list) {
		this.list = list;
	}
}
