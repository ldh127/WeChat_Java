package com.beans.wechat;

import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.springframework.stereotype.Component;


/**
 * WxRulefile entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name="wx_rulefile"
    ,catalog="wxdb"
)
@Component
public class wxRulefile  implements java.io.Serializable {


    // Fields    

     private wxRulefileId id;


    // Constructors

    /** default constructor */
    public wxRulefile() {
    }

    
    /** full constructor */
    public wxRulefile(wxRulefileId id) {
        this.id = id;
    }

   
    // Property accessors
    @EmbeddedId
    
    @AttributeOverrides( {
        @AttributeOverride(name="ruleId", column=@Column(name="RuleID", nullable=false, length=50) ), 
        @AttributeOverride(name="fileId", column=@Column(name="FileID", nullable=false, length=50) ) } )

    public wxRulefileId getId() {
        return this.id;
    }
    
    public void setId(wxRulefileId id) {
        this.id = id;
    }
   








}