package com.beans.wechat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.stereotype.Component;

/**
 * WxKeywordlist entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "wx_keywordlist", catalog = "wxdb")
@Component
public class wxKeywordlist implements java.io.Serializable {

	// Fields

	private Integer keywordId;
	private String ruleId;
	private String keyword;
	private Integer matchMode;
	private String userId;
	private String response;

	// Constructors

	/** default constructor */
	public wxKeywordlist() {
	}

	/** minimal constructor */
	public wxKeywordlist(String keyword, Integer matchMode, String userId,
			String response) {
		this.keyword = keyword;
		this.matchMode = matchMode;
		this.userId = userId;
		this.response = response;
	}

	/** full constructor */
	public wxKeywordlist(String ruleId, String keyword, Integer matchMode,
			String userId, String response) {
		this.ruleId = ruleId;
		this.keyword = keyword;
		this.matchMode = matchMode;
		this.userId = userId;
		this.response = response;
	}

	// Property accessors
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "KeywordID", unique = true, nullable = false)
	public Integer getKeywordId() {
		return this.keywordId;
	}

	public void setKeywordId(Integer keywordId) {
		this.keywordId = keywordId;
	}

	@Column(name = "RuleID", length = 50)
	public String getRuleId() {
		return this.ruleId;
	}

	public void setRuleId(String ruleId) {
		this.ruleId = ruleId;
	}

	@Column(name = "Keyword", nullable = false, length = 50)
	public String getKeyword() {
		return this.keyword;
	}

	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}

	@Column(name = "MatchMode", nullable = false)
	public Integer getMatchMode() {
		return this.matchMode;
	}

	public void setMatchMode(Integer matchMode) {
		this.matchMode = matchMode;
	}

	@Column(name = "User_id", nullable = false)
	public String getUserId() {
		return this.userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	@Column(name = "Response", nullable = false, length = 65535)
	public String getResponse() {
		return this.response;
	}

	public void setResponse(String response) {
		this.response = response;
	}

}
