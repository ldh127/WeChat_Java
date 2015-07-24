package com.beans.wechat;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

/**
 * SysUser entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "sys_user", catalog = "wxdb")
@Component
public class sysUser implements java.io.Serializable {

	// Fields

	private Integer userId;
	private String loginPasswd;
	private String loginName;
	private String remark;
	private Boolean isLock;
	private Date last_time;
	private Date curr_time;

	// Constructors

	/** default constructor */
	public sysUser() {
	}

	/** full constructor */
	public sysUser(String loginPasswd, String loginName, String remark,
			Boolean isLock) {
		this.loginPasswd = loginPasswd;
		this.loginName = loginName;
		this.remark = remark;
		this.isLock = isLock;
	}

	// Property accessors
	@Id @GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "UserID", unique = true, nullable = false)
	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	@Column(name = "LoginPasswd", nullable = false, length = 50)
	public String getLoginPasswd() {
		return this.loginPasswd;
	}

	public void setLoginPasswd(String loginPasswd) {
		this.loginPasswd = loginPasswd;
	}

	@Column(name = "LoginName", nullable = false, length = 50)
	public String getLoginName() {
		return this.loginName;
	}

	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}

	@Column(name = "Remark", nullable = true, length = 500)
	public String getRemark() {
		return this.remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	@Column(name = "IsLock", nullable = true)
	public Boolean getIsLock() {
		return this.isLock;
	}

	public void setIsLock(Boolean isLock) {
		this.isLock = isLock;
	}
	@Column(name = "last_time", nullable = true, length = 0)
	public Date getLast_time() {
		return last_time;
	}

	public void setLast_time(Date last_time) {
		this.last_time = last_time;
	}
	@Column(name = "curr_time", nullable = true, length = 0)
	public Date getCurr_time() {
		return curr_time;
	}

	public void setCurr_time(Date curr_time) {
		this.curr_time = curr_time;
	}

}