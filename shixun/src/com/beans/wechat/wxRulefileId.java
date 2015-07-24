package com.beans.wechat;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import org.springframework.stereotype.Component;


/**
 * WxRulefileId entity. @author MyEclipse Persistence Tools
 */
@Embeddable
@Component
public class wxRulefileId  implements java.io.Serializable {


    // Fields    

     private String ruleId;
     private String fileId;


    // Constructors

    /** default constructor */
    public wxRulefileId() {
    }

    
    /** full constructor */
    public wxRulefileId(String ruleId, String fileId) {
        this.ruleId = ruleId;
        this.fileId = fileId;
    }

   
    // Property accessors

    @Column(name="RuleID", nullable=false, length=50)

    public String getRuleId() {
        return this.ruleId;
    }
    
    public void setRuleId(String ruleId) {
        this.ruleId = ruleId;
    }

    @Column(name="FileID", nullable=false, length=50)

    public String getFileId() {
        return this.fileId;
    }
    
    public void setFileId(String fileId) {
        this.fileId = fileId;
    }
   



   public boolean equals(Object other) {
         if ( (this == other ) ) return true;
		 if ( (other == null ) ) return false;
		 if ( !(other instanceof wxRulefileId) ) return false;
		 wxRulefileId castOther = ( wxRulefileId ) other; 
         
		 return ( (this.getRuleId()==castOther.getRuleId()) || ( this.getRuleId()!=null && castOther.getRuleId()!=null && this.getRuleId().equals(castOther.getRuleId()) ) )
 && ( (this.getFileId()==castOther.getFileId()) || ( this.getFileId()!=null && castOther.getFileId()!=null && this.getFileId().equals(castOther.getFileId()) ) );
   }
   
   public int hashCode() {
         int result = 17;
         
         result = 37 * result + ( getRuleId() == null ? 0 : this.getRuleId().hashCode() );
         result = 37 * result + ( getFileId() == null ? 0 : this.getFileId().hashCode() );
         return result;
   }   





}