package com.beans.wechat;

import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.springframework.stereotype.Component;


/**
 * WxGroup entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name="wx_group"
    ,catalog="wxdb"
)
@Component
public class wxGroup  implements java.io.Serializable {


    // Fields    

     private wxGroupId id;
     private String groupName;
     private Integer count;


    // Constructors

    /** default constructor */
    public wxGroup() {
    }

    
    /** full constructor */
    public wxGroup(wxGroupId id, String groupName, Integer count) {
        this.id = id;
        this.groupName = groupName;
        this.count = count;
    }

   
    // Property accessors
    @EmbeddedId
    
    @AttributeOverrides( {
        @AttributeOverride(name="mpId", column=@Column(name="MpID", nullable=false, length=50) ), 
        @AttributeOverride(name="groupId", column=@Column(name="GroupId", nullable=false) ) } )

    public wxGroupId getId() {
        return this.id;
    }
    
    public void setId(wxGroupId id) {
        this.id = id;
    }
    
    @Column(name="GroupName", nullable=false, length=50)

    public String getGroupName() {
        return this.groupName;
    }
    
    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }
    
    @Column(name="Count", nullable=false)

    public Integer getCount() {
        return this.count;
    }
    
    public void setCount(Integer count) {
        this.count = count;
    }
   








}