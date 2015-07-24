package com.action.wechat;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.beans.wechat.wxKeywordlist;
import com.opensymphony.xwork2.ActionSupport;
import com.service.dao.baseSupport;
import com.service.dao.userKey;

@Controller("setKey")
public class setKeyAction extends ActionSupport{

	private String User_id;
	private String KeyWord;
	private String Response;
	private String action;
	private List<wxKeywordlist> keyList;
	@Autowired
	private baseSupport base;
	@Autowired
	private userKey keyaction;
	
	private String keyid;
	
	public String set_page(){
		return SUCCESS;
	}
	
	public String set_welcome(){
		return "welcome";
	}
	
	public String submit_key(){
		
		base.saveKey(User_id, KeyWord, Response);
		return null;
//		return "key set";
	}
	
	public String submit_welcome(){
		base.saveWelcome(User_id,Response);
		return null;
	}
	//修改关键字
	public String modifyKey(){
		keyaction.ModifyKey(action, keyid);
		return null;
	}
	//拿关键字
	public String takeKey(){
		keyList = keyaction.takeAllKey(User_id);
//		return "take";
		return null;
	}

	public String getUser_id() {
		return User_id;
	}

	public void setUser_id(String user_id) {
		User_id = user_id;
	}

	public String getKeyWord() {
		return KeyWord;
	}

	public void setKeyWord(String keyWord) {
		KeyWord = keyWord;
	}

	public String getResponse() {
		return Response;
	}

	public void setResponse(String response) {
		Response = response;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	public String getKeyid() {
		return keyid;
	}

	public void setKeyid(String keyid) {
		this.keyid = keyid;
	}

	public List<wxKeywordlist> getKeyList() {
		return keyList;
	}

	public void setKeyList(List<wxKeywordlist> keyList) {
		this.keyList = keyList;
	}
	
}
