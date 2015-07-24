package com.beans.wechat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

/**
 * WxWelcome entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name="wx_clickEvent"
    ,catalog="wxdb"
)
@Component
public class wxClickEvent {
	
	  private Integer id;
	  private String wechatUid;
	  private String content;
	  private String key;
	
	public wxClickEvent() {
	  }

		public wxClickEvent(Integer id, String wechatUid, String content,String key) {
			this.id = id;
			this.wechatUid = wechatUid;
			this.content = content;
			this.key =key;
		}

		@Id @GeneratedValue(strategy=GenerationType.AUTO)
		    
		@Column(name="id", unique=true, nullable=false)
		
		public Integer getId() {
			return id;
		}

		public void setId(Integer id) {
			this.id = id;
		}

		 @Column(name="wechat_uid")
		
		public String getWechatUid() {
			return wechatUid;
		}

		public void setWechatUid(String wechatUid) {
			this.wechatUid = wechatUid;
		}

		 @Column(name="content")
		public String getContent() {
			return content;
		}

		public void setContent(String content) {
			this.content = content;
		}
		
		 @Column(name="key")
		public String getKey() {
			return key;
		}

		public void setKey(String key) {
			this.key = key;
		}
		 
}
