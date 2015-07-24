package com.beans.wechat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.stereotype.Component;


/**
 * WxMpset entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name="wx_mpset"
    ,catalog="wxdb"
)
@Component
public class wxMpset  implements java.io.Serializable {


    // Fields    

     private String mpId;
     private String wechatId;
     private String nickName;
     private Integer type;
     private String introduction;
     private String APPID;
     private String APPSCRET;
     private String token;
     private String url;


    // Constructors

    /** default constructor */
    public wxMpset() {
    }

    
    /** full constructor */
    public wxMpset(String wechatId, String nickName, Integer type, String introduction, String APPID, String APPSCRET, String token, String url) {
        this.wechatId = wechatId;
        this.nickName = nickName;
        this.type = type;
        this.introduction = introduction;
        this.APPID = APPID;
        this.APPSCRET = APPSCRET;
        this.token = token;
        this.url = url;
    }

   
    // Property accessors
    @Id
    
    @Column(name="MpID", unique=true, nullable=false, length=50)

    public String getMpId() {
        return this.mpId;
    }
    
    public void setMpId(String mpId) {
        this.mpId = mpId;
    }
    
    @Column(name="WechatID", nullable=false, length=50)

    public String getWechatId() {
        return this.wechatId;
    }
    
    public void setWechatId(String wechatId) {
        this.wechatId = wechatId;
    }
    
    @Column(name="NickName", nullable=false, length=50)

    public String getNickName() {
        return this.nickName;
    }
    
    public void setNickName(String nickName) {
        this.nickName = nickName;
    }
    
    @Column(name="Type", nullable=false)

    public Integer getType() {
        return this.type;
    }
    
    public void setType(Integer type) {
        this.type = type;
    }
    
    @Column(name="Introduction", nullable=false, length=500)

    public String getIntroduction() {
        return this.introduction;
    }
    
    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }
    
    @Column(name="APPID", nullable=false, length=50)

    public String getAPPID() {
        return this.APPID;
    }
    
    public void setAPPID(String APPID) {
        this.APPID = APPID;
    }
    
    @Column(name="APPSCRET", nullable=false, length=500)

    public String getAPPSCRET() {
        return this.APPSCRET;
    }
    
    public void setAPPSCRET(String APPSCRET) {
        this.APPSCRET = APPSCRET;
    }
    
    @Column(name="Token", nullable=false, length=50)

    public String getToken() {
        return this.token;
    }
    
    public void setToken(String token) {
        this.token = token;
    }
    
    @Column(name="Url", nullable=true, length=500)

    public String getUrl() {
        return this.url;
    }
    
    public void setUrl(String url) {
        this.url = url;
    }


	@Override
	public String toString() {
		return "wxMpset [mpId=" + mpId + ", wechatId=" + wechatId
				+ ", nickName=" + nickName + ", type=" + type
				+ ", introduction=" + introduction + ", APPID=" + APPID
				+ ", APPSCRET=" + APPSCRET + ", token=" + token + ", url="
				+ url + "]";
	}
   








}