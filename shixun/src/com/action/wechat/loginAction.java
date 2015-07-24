package com.action.wechat;

import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.Dao.webchat.HibernateUtil;
import com.beans.wechat.sysUser;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

@Component
public class loginAction extends ActionSupport {
	private String username;
	private String password;
	private String password2;
	// 封装处理结果的tip成员变量
	private String tip;
	@Autowired
	private sysUser user;
	public sysUser getUser() {
		return user;
	}

	public void setUser(sysUser user) {
		this.user = user;
	}
	private Session session;
	

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getTip() {
		return tip;
	}

	public void setTip(String tip) {
		this.tip = tip;
	}
	public String getPassword2() {
		return password2;
	}

	public void setPassword2(String password2) {
		this.password2 = password2;
	}
	public String regist() throws Exception {
		Session session = HibernateUtil.currentSession();
		Transaction tx = session.beginTransaction();
		if (getPassword().equals(getPassword2())) {
			String loginName =getUsername();
			String loginPasswd=getPassword();
			user.setLoginName(loginName);
			user.setLoginPasswd(loginPasswd);
			user.setCurr_time(new Date());
			session.save(user);
			tx.commit();
			session.close();
			ActionContext.getContext().getSession().put("user", getUsername());
			return SUCCESS;
		}
		return ERROR;
	}
	public String quit() throws Exception {
		HttpSession map = ServletActionContext.getRequest().getSession(); 
		map.removeAttribute("username");
		map.invalidate();
		System.out.println("退出成功！");
		return super.execute();
	}
	public String execute() throws Exception {
		Session session = HibernateUtil.currentSession();
		Transaction tx = session.beginTransaction();
		
		try { 
		String loginName =getUsername();
		String loginPass =getPassword();
		String hql="from sysUser as s "+"where s.loginName ='"+loginName+"' and s.loginPasswd='"+loginPass+"'";
		Query query=session.createQuery(hql);
		List list=query.list();
		
		if (list.size()!=0) {
			user = (sysUser) list.get(0);
			ServletActionContext.getServletContext().setAttribute("user", user);
			user.setCurr_time(new Date());
			session.save(user);
			user.getUserId();
			tx.commit();
			return SUCCESS;
		}
		 }catch (Exception ef) { 
		      if (null != tx) { 
		          tx.rollback();//撤销事务 
		          ef.printStackTrace(); 
		       } 
		 }
		return ERROR;
	}
	

}
