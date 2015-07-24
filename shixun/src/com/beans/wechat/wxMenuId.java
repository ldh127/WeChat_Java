package com.beans.wechat;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import org.springframework.stereotype.Component;


/**
 * WxMenuId entity. @author MyEclipse Persistence Tools
 */
@Embeddable
@Component
public class wxMenuId  implements java.io.Serializable {


    // Fields    

     private String menuId;
     private String mpId;


    // Constructors

    /** default constructor */
    public wxMenuId() {
    }

    
    /** full constructor */
    public wxMenuId(String menuId, String mpId) {
        this.menuId = menuId;
        this.mpId = mpId;
    }

   
    // Property accessors

    @Column(name="MenuID", nullable=false, length=50)

    public String getMenuId() {
        return this.menuId;
    }
    
    public void setMenuId(String menuId) {
        this.menuId = menuId;
    }

    @Column(name="MpID", nullable=false, length=50)

    public String getMpId() {
        return this.mpId;
    }
    
    public void setMpId(String mpId) {
        this.mpId = mpId;
    }
   



   public boolean equals(Object other) {
         if ( (this == other ) ) return true;
		 if ( (other == null ) ) return false;
		 if ( !(other instanceof wxMenuId) ) return false;
		 wxMenuId castOther = ( wxMenuId ) other; 
         
		 return ( (this.getMenuId()==castOther.getMenuId()) || ( this.getMenuId()!=null && castOther.getMenuId()!=null && this.getMenuId().equals(castOther.getMenuId()) ) )
 && ( (this.getMpId()==castOther.getMpId()) || ( this.getMpId()!=null && castOther.getMpId()!=null && this.getMpId().equals(castOther.getMpId()) ) );
   }
   
   public int hashCode() {
         int result = 17;
         
         result = 37 * result + ( getMenuId() == null ? 0 : this.getMenuId().hashCode() );
         result = 37 * result + ( getMpId() == null ? 0 : this.getMpId().hashCode() );
         return result;
   }   





}