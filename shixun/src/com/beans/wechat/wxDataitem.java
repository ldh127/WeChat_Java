package com.beans.wechat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.stereotype.Component;


/**
 * WxDataitem entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name="wx_dataitem"
    ,catalog="wxdb"
)
@Component
public class wxDataitem  implements java.io.Serializable {


    // Fields    

     private Long dataId;
     private String title;
     private String description;
     private String url;
     private String picUrl;


    // Constructors

    /** default constructor */
    public wxDataitem() {
    }

    
    /** full constructor */
    public wxDataitem(String title, String description, String url, String picUrl) {
        this.title = title;
        this.description = description;
        this.url = url;
        this.picUrl = picUrl;
    }

   
    // Property accessors
    @GenericGenerator(name="generator", strategy="uuid.hex")@Id @GeneratedValue(generator="generator")
    
    @Column(name="DataID", unique=true, nullable=false)

    public Long getDataId() {
        return this.dataId;
    }
    
    public void setDataId(Long dataId) {
        this.dataId = dataId;
    }
    
    @Column(name="Title", nullable=false, length=100)

    public String getTitle() {
        return this.title;
    }
    
    public void setTitle(String title) {
        this.title = title;
    }
    
    @Column(name="Description", nullable=false, length=500)

    public String getDescription() {
        return this.description;
    }
    
    public void setDescription(String description) {
        this.description = description;
    }
    
    @Column(name="Url", nullable=false, length=500)

    public String getUrl() {
        return this.url;
    }
    
    public void setUrl(String url) {
        this.url = url;
    }
    
    @Column(name="PicUrl", nullable=false, length=500)

    public String getPicUrl() {
        return this.picUrl;
    }
    
    public void setPicUrl(String picUrl) {
        this.picUrl = picUrl;
    }
   








}