package com.beans.wechat;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import org.springframework.stereotype.Component;


/**
 * WxUserlistId entity. @author MyEclipse Persistence Tools
 */
@Embeddable
@Component
public class wxUserlistId  implements java.io.Serializable {


    // Fields    

     private String mpId;
     private String userId;


    // Constructors

    /** default constructor */
    public wxUserlistId() {
    }

    
    /** full constructor */
    public wxUserlistId(String mpId, String userId) {
        this.mpId = mpId;
        this.userId = userId;
    }

   
    // Property accessors

    @Column(name="MpID", nullable=false, length=50)

    public String getMpId() {
        return this.mpId;
    }
    
    public void setMpId(String mpId) {
        this.mpId = mpId;
    }

    @Column(name="UserID", nullable=false, length=50)

    public String getUserId() {
        return this.userId;
    }
    
    public void setUserId(String userId) {
        this.userId = userId;
    }
   



   public boolean equals(Object other) {
         if ( (this == other ) ) return true;
		 if ( (other == null ) ) return false;
		 if ( !(other instanceof wxUserlistId) ) return false;
		 wxUserlistId castOther = ( wxUserlistId ) other; 
         
		 return ( (this.getMpId()==castOther.getMpId()) || ( this.getMpId()!=null && castOther.getMpId()!=null && this.getMpId().equals(castOther.getMpId()) ) )
 && ( (this.getUserId()==castOther.getUserId()) || ( this.getUserId()!=null && castOther.getUserId()!=null && this.getUserId().equals(castOther.getUserId()) ) );
   }
   
   public int hashCode() {
         int result = 17;
         
         result = 37 * result + ( getMpId() == null ? 0 : this.getMpId().hashCode() );
         result = 37 * result + ( getUserId() == null ? 0 : this.getUserId().hashCode() );
         return result;
   }   





}