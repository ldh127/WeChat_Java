package com.service.wechat;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;

/**
 * @author Conan
 *
 */
@Service("getXml")
public class getXmlService {
	
	public String getXml(HttpServletRequest request){
		
		StringBuilder sb = new StringBuilder();
		InputStream in;
		try {
			in = request.getInputStream();
			InputStreamReader isr = new InputStreamReader(in,"UTF-8");
			BufferedReader br = new BufferedReader(isr);
			String s = "";
			while((s = br.readLine())!=null){
				sb.append(s);
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		String xml = sb.toString();
		
		return xml;
	}
	
}
