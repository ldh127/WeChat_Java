package com.action.wechat;

import java.util.Iterator;
import java.util.List;

import org.apache.struts2.ServletActionContext;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.Dao.webchat.HibernateUtil;
import com.beans.wechat.sysUser;
import com.beans.wechat.wxUserlist;
import com.beans.wechat.wxUserlistId;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
@Component
public class mana_userAction extends ActionSupport {
	private String openid;
	private String nickname;
	private String remark;
	private String city;
	private String country;
	private boolean sex;
	private Integer groupid;
	private String province;
	private List<wxUserlist> list;
	
	public List<wxUserlist> getList() {
		return list;
	}
	public void setList(List<wxUserlist> list) {
		this.list = list;
	}
	public String getOpenid() {
		return openid;
	}
	public void setOpenid(String openid) {
		this.openid = openid;
	}
	public String getNickname() {
		return nickname;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public boolean isSex() {
		return sex;
	}
	public void setSex(boolean sex) {
		this.sex = sex;
	}
	public Integer getGroupid() {
		return groupid;
	}
	public void setGroupid(Integer groupid) {
		this.groupid = groupid;
	}
	public String getProvince() {
		return province;
	}
	public void setProvince(String province) {
		this.province = province;
	}

	@Override
	public String execute() throws Exception {
		Session session = HibernateUtil.currentSession();
		Transaction tx = session.beginTransaction();
		sysUser user = (sysUser) ServletActionContext.getServletContext().getAttribute("user");
		String mpID=user.getRemark();
		String hql="From wxUserlist as xu where xu.id.mpId='"+mpID+"'";
		Query query=session.createQuery(hql);
		list=query.list();
		ActionContext.getContext().put("user_list", list);
		ServletActionContext.getServletContext().setAttribute("list_user", list);
		
		
		
		
		
		/*for (Iterator<wxUserlist> i = list.iterator(); i.hasNext();) {  
			   String integerRef = i.next().getUserName(); // line 1  
			   System.out.println(integerRef); // line 2  
			  }  */
		/*for(wxUserlist oa : list) {
			for(int i = 0;i < list.size();i++) {


			}
		}  */
		tx.commit();
		HibernateUtil.closeSession();
		return SUCCESS;
	}
}
