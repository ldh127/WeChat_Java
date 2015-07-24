package com.beans.wechat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.stereotype.Component;


/**
 * WxWelcome entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name="wx_welcome"
    ,catalog="wxdb"
)
@Component
public class wxWelcome  implements java.io.Serializable {


    // Fields    
	
     private Integer id;
     private String wechatUid;
     private String content;


    // Constructors

    /** default constructor */
    public wxWelcome() {
    }

    
    /** full constructor */
    public wxWelcome(String wechatUid, String content) {
        this.wechatUid = wechatUid;
        this.content = content;
    }

   
    // Property accessors
    @Id @GeneratedValue(strategy=GenerationType.AUTO)
    
    @Column(name="id", unique=true, nullable=false)

    public Integer getId() {
        return this.id;
    }
    
    public void setId(Integer id) {
        this.id = id;
    }
    
    @Column(name="wechat_uid")

    public String getWechatUid() {
        return this.wechatUid;
    }
    
    public void setWechatUid(String wechatUid) {
        this.wechatUid = wechatUid;
    }
    
    @Column(name="content")

    public String getContent() {
        return this.content;
    }
    
    public void setContent(String content) {
        this.content = content;
    }
   








}