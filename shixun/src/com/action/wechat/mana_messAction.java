package com.action.wechat;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.struts2.ServletActionContext;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.stereotype.Component;

import com.Dao.webchat.HibernateUtil;
import com.beans.wechat.sysUser;
import com.beans.wechat.wxMess;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
@SuppressWarnings("serial")
@Component
public class mana_messAction extends ActionSupport{
	
	@Override
	public String execute() throws Exception {
		Session session = HibernateUtil.currentSession();
		Transaction tx = session.beginTransaction();
		sysUser user = (sysUser) ServletActionContext.getServletContext().getAttribute("user");
		String mpID=user.getRemark();
		String sql = 
		"SELECT distinct u.NickName,d.Content,d.CreateTime,d.DealTime,d.FromUserName,d.ToUserName from wx_mpset m inner join sys_user s on s.Remark = m.MpID inner join wx_data d  on m.WechatID = d.ToUserName and s.Remark ="+mpID+" INNER JOIN wx_userlist u on u.UserName=d.FromUserName order by d.createTime desc";
		@SuppressWarnings("unchecked")
		List list = session.createSQLQuery(sql).list();
		List<wxMess> wList=new ArrayList<>();
		for (int i = 0; i < list.size(); i++) {
			wxMess mess=new wxMess();
			Object [] oo=(Object[])(list.get(i));
			mess.setNickName((String) oo[0]);
			mess.setContent((String) oo[1]);
			mess.setCreateTime((Timestamp) oo[2]);
			mess.setDealTime((Timestamp) oo[3]);
			mess.setFromUserName((String) oo[4]);
			mess.setToUserName((String) oo[5]);
			wList.add(mess);
		}
		
		ActionContext.getContext().put("user_mess", wList);
		ServletActionContext.getServletContext().setAttribute("user_mess", wList);
		tx.commit();
		session.flush();
/*		session.flush();
		session.close();*/
		return SUCCESS;
	}
}
