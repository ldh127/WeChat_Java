package com.beans.wechat;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.stereotype.Component;


/**
 * WxRuleslist entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name="wx_ruleslist"
    ,catalog="wxdb"
)
@Component
public class wxRuleslist  implements java.io.Serializable {


    // Fields    

     private String ruleId;
     private String ruleName;
     private Boolean ruleType;
     private Boolean source;
     private String keyWordList;
     private Boolean replyType;
     private Timestamp effectiveDate;
     private Timestamp expiryDate;
     private String dataLabel;
     private Boolean isLock;


    // Constructors

    /** default constructor */
    public wxRuleslist() {
    }

    
    /** full constructor */
    public wxRuleslist(String ruleName, Boolean ruleType, Boolean source, String keyWordList, Boolean replyType, Timestamp effectiveDate, Timestamp expiryDate, String dataLabel, Boolean isLock) {
        this.ruleName = ruleName;
        this.ruleType = ruleType;
        this.source = source;
        this.keyWordList = keyWordList;
        this.replyType = replyType;
        this.effectiveDate = effectiveDate;
        this.expiryDate = expiryDate;
        this.dataLabel = dataLabel;
        this.isLock = isLock;
    }

   
    // Property accessors
    @GenericGenerator(name="generator", strategy="uuid.hex")@Id @GeneratedValue(generator="generator")
    
    @Column(name="RuleID", unique=true, nullable=false, length=50)

    public String getRuleId() {
        return this.ruleId;
    }
    
    public void setRuleId(String ruleId) {
        this.ruleId = ruleId;
    }
    
    @Column(name="RuleName", nullable=false, length=50)

    public String getRuleName() {
        return this.ruleName;
    }
    
    public void setRuleName(String ruleName) {
        this.ruleName = ruleName;
    }
    
    @Column(name="RuleType", nullable=false)

    public Boolean getRuleType() {
        return this.ruleType;
    }
    
    public void setRuleType(Boolean ruleType) {
        this.ruleType = ruleType;
    }
    
    @Column(name="Source", nullable=false)

    public Boolean getSource() {
        return this.source;
    }
    
    public void setSource(Boolean source) {
        this.source = source;
    }
    
    @Column(name="KeyWordList", nullable=false, length=500)

    public String getKeyWordList() {
        return this.keyWordList;
    }
    
    public void setKeyWordList(String keyWordList) {
        this.keyWordList = keyWordList;
    }
    
    @Column(name="ReplyType", nullable=false)

    public Boolean getReplyType() {
        return this.replyType;
    }
    
    public void setReplyType(Boolean replyType) {
        this.replyType = replyType;
    }
    
    @Column(name="EffectiveDate", nullable=false, length=19)

    public Timestamp getEffectiveDate() {
        return this.effectiveDate;
    }
    
    public void setEffectiveDate(Timestamp effectiveDate) {
        this.effectiveDate = effectiveDate;
    }
    
    @Column(name="ExpiryDate", nullable=false, length=19)

    public Timestamp getExpiryDate() {
        return this.expiryDate;
    }
    
    public void setExpiryDate(Timestamp expiryDate) {
        this.expiryDate = expiryDate;
    }
    
    @Column(name="DataLabel", nullable=false, length=50)

    public String getDataLabel() {
        return this.dataLabel;
    }
    
    public void setDataLabel(String dataLabel) {
        this.dataLabel = dataLabel;
    }
    
    @Column(name="IsLock", nullable=false)

    public Boolean getIsLock() {
        return this.isLock;
    }
    
    public void setIsLock(Boolean isLock) {
        this.isLock = isLock;
    }
   








}