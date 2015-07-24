package com.action.wechat;

import java.io.Writer;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.Entity.wechat.xmlEntity;
import com.opensymphony.xwork2.ActionSupport;
import com.service.wechat.getXmlService;
import com.service.wechat.validateService;
import com.service.wechat.wechatProcess;

/**
 * @author Conan
 *
 */
@Controller("wechat")
public class wechatAction extends ActionSupport{

	private String signature;
	private String timestamp;
	private String nonce;
	private String echostr;
	private String token;
	private String wechat_uid;
	private int Age;
	@Autowired
	private getXmlService getXml;
	@Autowired
	private validateService checkValid;
	@Autowired
	private wechatProcess process;
	
	
	@Override
	public String execute() throws Exception {
		String result="";
		
		HttpServletResponse response = ServletActionContext.getResponse();
		HttpServletRequest request = ServletActionContext.getRequest();
		response.setCharacterEncoding("UTF-8");
		request.setCharacterEncoding("UTF-8");
		
		if (echostr!=null) {
			result = checkValid.checkValid(signature, timestamp, nonce, echostr, token, wechat_uid);
		}else {
			//非验证处理流
			result = getXml.getXml(request);
			xmlEntity wechat_xml = process.init(result);
			process.processWechatXml(wechat_xml, wechat_uid);
			result = process.getFinalResult();
		}
		
		Writer writer = response.getWriter();
		writer.write(new String(result.getBytes("UTF-8"),"UTF-8"));
		writer.flush();
		writer.close();
		
		return SUCCESS;
	}

	public int getAge() {
		return Age;
	}


	public void setAge(int age) {
		Age = age;
	}

	public String getSignature() {
		return signature;
	}

	public void setSignature(String signature) {
		this.signature = signature;
	}

	public String getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(String timestamp) {
		this.timestamp = timestamp;
	}

	public String getNonce() {
		return nonce;
	}

	public void setNonce(String nonce) {
		this.nonce = nonce;
	}

	public String getEchostr() {
		return echostr;
	}

	public void setEchostr(String echostr) {
		this.echostr = echostr;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getWechat_uid() {
		return wechat_uid;
	}

	public void setWechat_uid(String wechat_uid) {
		this.wechat_uid = wechat_uid;
	}
	
}
