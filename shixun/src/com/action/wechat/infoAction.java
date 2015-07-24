package com.action.wechat;

import org.apache.struts2.ServletActionContext;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.Dao.webchat.HibernateUtil;
import com.beans.wechat.sysUser;
import com.beans.wechat.wxMpset;
import com.opensymphony.xwork2.ActionSupport;
import com.service.wechat.wechatBase;
@Controller("infoAction")
public class infoAction extends ActionSupport {

	private String nickName;
	private String wechatId;
	private String type;
	private String introduction;
	private String APPID;
	private String APPSCRET;
	private String token;
	private String url;
	private String QR;
	@Autowired
	private wechatBase base;
	@Autowired
	private wxMpset mpset;
	
	public String set_page(){
		sysUser user = (sysUser)ServletActionContext.getServletContext().getAttribute("user");
		String 	mpID = user.getRemark();
		QR = base.make_QR(mpID);
		Session session =HibernateUtil.currentSession();
		wxMpset tmp = (wxMpset) session.get(wxMpset.class,mpID);
		if(tmp!=null){
			ServletActionContext.getServletContext().setAttribute("setting", tmp);
		}
		return "success";
	}
	
	public String submit_info(){
		sysUser user = (sysUser)ServletActionContext.getServletContext().getAttribute("user");
		String 	mpID = user.getRemark();
		Session session = HibernateUtil.currentSession();
		Transaction tx = (Transaction) session.beginTransaction();
		wxMpset tmp = (wxMpset) session.get(wxMpset.class,mpID);
		if (tmp==null) {
			mpset.setAPPSCRET(APPSCRET);
			mpset.setAPPID(APPID);
			mpset.setIntroduction(introduction);
			mpset.setMpId(mpID);
			mpset.setNickName(nickName);
			mpset.setToken(token);
			mpset.setType(Integer.valueOf(type));
			mpset.setWechatId(wechatId);
			mpset.setUrl(url);
			session.save(mpset);
		}else if (tmp!=null) {
			tmp.setAPPSCRET(APPSCRET);
			tmp.setAPPID(APPID);
			tmp.setIntroduction(introduction);
			tmp.setMpId(mpID);
			tmp.setNickName(nickName);
			tmp.setToken(token);
			tmp.setType(Integer.valueOf(type));
			tmp.setWechatId(wechatId);
//			session.refresh(mpset);
			tx.commit();
			return "update_ok";
		}
		tx.commit();
		return "submit";
	}

	public String getNickName() {
		return nickName;
	}

	public void setNickName(String nickName) {
		this.nickName = nickName;
	}

	public String getWechatId() {
		return wechatId;
	}

	public void setWechatId(String wechatId) {
		this.wechatId = wechatId;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
	public String getIntroduction() {
		return introduction;
	}

	public void setIntroduction(String introduction) {
		this.introduction = introduction;
	}

	public String getAPPID() {
		return APPID;
	}

	public void setAPPID(String aPPID) {
		APPID = aPPID;
	}

	public String getAPPSCRET() {
		return APPSCRET;
	}

	public void setAPPSCRET(String aPPSCRET) {
		APPSCRET = aPPSCRET;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getQR() {
		return QR;
	}

	public void setQR(String qR) {
		QR = qR;
	}
}
