package com.beans.wechat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.stereotype.Component;


/**
 * WxMenubutton entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name="wx_menubutton"
    ,catalog="wxdb"
)
@Component
public class wxMenubutton  implements java.io.Serializable {


    // Fields    

     private Integer menuButtonId;
     private String menuId;
     private String buttonName;
     private String buttonType;
     private String target;
     private String orderNum;
     private Integer parentId;


    // Constructors

    /** default constructor */
    public wxMenubutton() {
    }

    
    /** full constructor */
    public wxMenubutton(String menuId, String buttonName, String buttonType, String target, String orderNum, Integer parentId) {
        this.menuId = menuId;
        this.buttonName = buttonName;
        this.buttonType = buttonType;
        this.target = target;
        this.orderNum = orderNum;
        this.parentId = parentId;
    }

   
    // Property accessors
    @GenericGenerator(name="generator", strategy="uuid.hex")@Id @GeneratedValue(generator="generator")
    
    @Column(name="MenuButtonID", unique=true, nullable=false)

    public Integer getMenuButtonId() {
        return this.menuButtonId;
    }
    
    public void setMenuButtonId(Integer menuButtonId) {
        this.menuButtonId = menuButtonId;
    }
    
    @Column(name="MenuID", nullable=false, length=50)

    public String getMenuId() {
        return this.menuId;
    }
    
    public void setMenuId(String menuId) {
        this.menuId = menuId;
    }
    
    @Column(name="ButtonName", nullable=false, length=50)

    public String getButtonName() {
        return this.buttonName;
    }
    
    public void setButtonName(String buttonName) {
        this.buttonName = buttonName;
    }
    
    @Column(name="ButtonType", nullable=false, length=50)

    public String getButtonType() {
        return this.buttonType;
    }
    
    public void setButtonType(String buttonType) {
        this.buttonType = buttonType;
    }
    
    @Column(name="Target", nullable=false, length=50)

    public String getTarget() {
        return this.target;
    }
    
    public void setTarget(String target) {
        this.target = target;
    }
    
    @Column(name="OrderNum", nullable=false, length=50)

    public String getOrderNum() {
        return this.orderNum;
    }
    
    public void setOrderNum(String orderNum) {
        this.orderNum = orderNum;
    }
    
    @Column(name="ParentID", nullable=false)

    public Integer getParentId() {
        return this.parentId;
    }
    
    public void setParentId(Integer parentId) {
        this.parentId = parentId;
    }
   








}