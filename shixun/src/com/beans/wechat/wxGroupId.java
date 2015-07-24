package com.beans.wechat;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import org.springframework.stereotype.Component;


/**
 * WxGroupId entity. @author MyEclipse Persistence Tools
 */
@Embeddable
@Component
public class wxGroupId  implements java.io.Serializable {


    // Fields    

     private String mpId;
     private Integer groupId;


    // Constructors

    /** default constructor */
    public wxGroupId() {
    }

    
    /** full constructor */
    public wxGroupId(String mpId, Integer groupId) {
        this.mpId = mpId;
        this.groupId = groupId;
    }

   
    // Property accessors

    @Column(name="MpID", nullable=false, length=50)

    public String getMpId() {
        return this.mpId;
    }
    
    public void setMpId(String mpId) {
        this.mpId = mpId;
    }

    @Column(name="GroupId", nullable=false)

    public Integer getGroupId() {
        return this.groupId;
    }
    
    public void setGroupId(Integer groupId) {
        this.groupId = groupId;
    }
   



   public boolean equals(Object other) {
         if ( (this == other ) ) return true;
		 if ( (other == null ) ) return false;
		 if ( !(other instanceof wxGroupId) ) return false;
		 wxGroupId castOther = ( wxGroupId ) other; 
         
		 return ( (this.getMpId()==castOther.getMpId()) || ( this.getMpId()!=null && castOther.getMpId()!=null && this.getMpId().equals(castOther.getMpId()) ) )
 && ( (this.getGroupId()==castOther.getGroupId()) || ( this.getGroupId()!=null && castOther.getGroupId()!=null && this.getGroupId().equals(castOther.getGroupId()) ) );
   }
   
   public int hashCode() {
         int result = 17;
         
         result = 37 * result + ( getMpId() == null ? 0 : this.getMpId().hashCode() );
         result = 37 * result + ( getGroupId() == null ? 0 : this.getGroupId().hashCode() );
         return result;
   }   





}