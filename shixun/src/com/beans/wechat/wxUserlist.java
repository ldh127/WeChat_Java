package com.beans.wechat;

import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.springframework.stereotype.Component;


/**
 * WxUserlist entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name="wx_userlist"
    ,catalog="wxdb"
)
@Component
public class wxUserlist  implements java.io.Serializable {


    // Fields    

     private wxUserlistId id;
     private String userName;
     private String nickName;
     private String remarkName;
     private String city;
     private String province;
     private String country;
     private Boolean gender;
     private Integer groupId;
     private Boolean userState;


    // Constructors

    /** default constructor */
    public wxUserlist() {
    }

    
    /** full constructor */
    public wxUserlist(wxUserlistId id, String userName, String nickName, String remarkName, String city, String province, String country, Boolean gender, Integer groupId, Boolean userState) {
        this.id = id;
        this.userName = userName;
        this.nickName = nickName;
        this.remarkName = remarkName;
        this.city = city;
        this.province = province;
        this.country = country;
        this.gender = gender;
        this.groupId = groupId;
        this.userState = userState;
    }

   
    // Property accessors
    @EmbeddedId
    
    @AttributeOverrides( {
        @AttributeOverride(name="mpId", column=@Column(name="MpID", nullable=false, length=50) ), 
        @AttributeOverride(name="userId", column=@Column(name="UserID", nullable=false, length=50) ) } )

    public wxUserlistId getId() {
        return this.id;
    }
    
    public void setId(wxUserlistId id) {
        this.id = id;
    }
    
    @Column(name="UserName", nullable=true, length=50)

    public String getUserName() {
        return this.userName;
    }
    
    public void setUserName(String userName) {
        this.userName = userName;
    }
    
    @Column(name="NickName", nullable=true, length=50)

    public String getNickName() {
        return this.nickName;
    }
    
    public void setNickName(String nickName) {
        this.nickName = nickName;
    }
    
    @Column(name="RemarkName", nullable=true, length=50)

    public String getRemarkName() {
        return this.remarkName;
    }
    
    public void setRemarkName(String remarkName) {
        this.remarkName = remarkName;
    }
    
    @Column(name="City", nullable=true, length=50)

    public String getCity() {
        return this.city;
    }
    
    public void setCity(String city) {
        this.city = city;
    }
    
    @Column(name="Province", nullable=true, length=50)

    public String getProvince() {
        return this.province;
    }
    
    public void setProvince(String province) {
        this.province = province;
    }
    
    @Column(name="Country", nullable=true, length=50)

    public String getCountry() {
        return this.country;
    }
    
    public void setCountry(String country) {
        this.country = country;
    }
    
    @Column(name="Gender", nullable=true)

    public Boolean getGender() {
        return this.gender;
    }
    
    public void setGender(Boolean gender) {
        this.gender = gender;
    }
    
    @Column(name="GroupId", nullable=true)

    public Integer getGroupId() {
        return this.groupId;
    }
    
    public void setGroupId(Integer groupId) {
        this.groupId = groupId;
    }
    
    @Column(name="UserState", nullable=true)

    public Boolean getUserState() {
        return this.userState;
    }
    
    public void setUserState(Boolean userState) {
        this.userState = userState;
    }
   








}