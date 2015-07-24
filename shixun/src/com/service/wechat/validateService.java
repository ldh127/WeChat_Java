package com.service.wechat;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.beans.wechat.wxMpset;
import com.service.dao.baseSupport;

/**
 * @author Conan
 *
 */
@Service
public class validateService {
	
	private String signature;
	private String timestamp;
	private String nonce;
	private String echostr;
	private String token;
	private String wechat_uid;
	@Autowired
	private baseSupport base;
	
	public String checkValid(String signature,String timestamp,String nonce,String echostr,String token, String wechat_uid){
		
		wxMpset mp = base.getWechatInfo(wechat_uid);
		token = mp.getToken();    //Defined your Token
		
		//Arrange the request Params And token Then Connect to the result of Assignment And get the Final String
		String[] strSet = new String[]{token, timestamp, nonce};
		java.util.Arrays.sort(strSet);
		String total = "";
		for (String string : strSet) {
			total = total + string;
		}
		//SHA-1
		MessageDigest sha1=null;
		try {
			sha1 = MessageDigest.getInstance("SHA-1");
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		sha1.update(total.getBytes());
		byte[] codedBytes = sha1.digest();
		String codedString = new BigInteger(1, codedBytes).toString(16);
		if (codedString.equals(signature)) { //Compare the result If equals,Just echo echostr
			return echostr;
		}
		
		return null;
	}
	
}
