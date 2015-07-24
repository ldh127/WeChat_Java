package com.beans.wechat;

import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.springframework.stereotype.Component;


/**
 * WxMenu entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name="wx_menu"
    ,catalog="wxdb"
)
@Component
public class wxMenu  implements java.io.Serializable {


    // Fields    

     private wxMenuId id;
     private String menuName;
     private String jsondata;
     private String remark;
     private Boolean isUpload;
     private Boolean isLock;


    // Constructors

    /** default constructor */
    public wxMenu() {
    }

    
    /** full constructor */
    public wxMenu(wxMenuId id, String menuName, String jsondata, String remark, Boolean isUpload, Boolean isLock) {
        this.id = id;
        this.menuName = menuName;
        this.jsondata = jsondata;
        this.remark = remark;
        this.isUpload = isUpload;
        this.isLock = isLock;
    }

   
    // Property accessors
    @EmbeddedId
    
    @AttributeOverrides( {
        @AttributeOverride(name="menuId", column=@Column(name="MenuID", nullable=false, length=50) ), 
        @AttributeOverride(name="mpId", column=@Column(name="MpID", nullable=false, length=50) ) } )

    public wxMenuId getId() {
        return this.id;
    }
    
    public void setId(wxMenuId id) {
        this.id = id;
    }
    
    @Column(name="MenuName", nullable=false, length=50)

    public String getMenuName() {
        return this.menuName;
    }
    
    public void setMenuName(String menuName) {
        this.menuName = menuName;
    }
    
    @Column(name="JSONData", nullable=false, length=65535)

    public String getJsondata() {
        return this.jsondata;
    }
    
    public void setJsondata(String jsondata) {
        this.jsondata = jsondata;
    }
    
    @Column(name="Remark", nullable=false, length=500)

    public String getRemark() {
        return this.remark;
    }
    
    public void setRemark(String remark) {
        this.remark = remark;
    }
    
    @Column(name="IsUpload", nullable=false)

    public Boolean getIsUpload() {
        return this.isUpload;
    }
    
    public void setIsUpload(Boolean isUpload) {
        this.isUpload = isUpload;
    }
    
    @Column(name="IsLock", nullable=false)

    public Boolean getIsLock() {
        return this.isLock;
    }
    
    public void setIsLock(Boolean isLock) {
        this.isLock = isLock;
    }
   








}