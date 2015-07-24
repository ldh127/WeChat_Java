package com.beans.wechat;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.stereotype.Component;


/**
 * WxMess entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name="wx_mess"
    ,catalog="wxdb"
)
@Component
public class wxMess  implements java.io.Serializable {
	
    // Fields    

     private String fromUserName;
     private String nickName;
     private String content;
     private Timestamp createTime;
     private Timestamp dealTime;
     private String toUserName;


    // Constructors

    /** default constructor */
    public wxMess() {
    }

    
    /** full constructor */
    public wxMess(String nickName, String content, Timestamp createTime, Timestamp dealTime, String toUserName) {
        this.nickName = nickName;
        this.content = content;
        this.createTime = createTime;
        this.dealTime = dealTime;
        this.toUserName = toUserName;
    }

   
    // Property accessors
    @GenericGenerator(name="generator", strategy="uuid.hex")@Id @GeneratedValue(generator="generator")
    
    @Column(name="FromUserName", unique=true, nullable=false, length=80)

    public String getFromUserName() {
        return this.fromUserName;
    }
    
    public void setFromUserName(String fromUserName) {
        this.fromUserName = fromUserName;
    }
    
    @Column(name="NickName", length=80)

    public String getNickName() {
        return this.nickName;
    }
    
    public void setNickName(String nickName) {
        this.nickName = nickName;
    }
    
    @Column(name="Content", length=80)

    public String getContent() {
        return this.content;
    }
    
    public void setContent(String content) {
        this.content = content;
    }
    
    @Column(name="CreateTime", length=19)

    public Timestamp getCreateTime() {
        return this.createTime;
    }
    
    public void setCreateTime(Timestamp createTime) {
        this.createTime = createTime;
    }
    
    @Column(name="DealTime", length=19)

    public Timestamp getDealTime() {
        return this.dealTime;
    }
    
    public void setDealTime(Timestamp dealTime) {
        this.dealTime = dealTime;
    }
    
    @Column(name="ToUserName", length=80)

    public String getToUserName() {
        return this.toUserName;
    }
    
    public void setToUserName(String toUserName) {
        this.toUserName = toUserName;
    }
   








}