package com.service.wechat;

import java.io.PrintWriter;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.util.Scanner;

import net.sf.json.JSONObject;

import org.springframework.stereotype.Component;

/**
 * @author Conan
 *
 */
@Component
public class tuLing {
	//Use this API to get Tuling rebot response
		//Tuling Rebot Response
		public String getTulingResult(String content){  
			String apiUrl = "http://www.tuling123.com/openapi/api?key=5a554a96da71b0e5e58fe797303ec64e";
			String result = "";
			try {  
				URL url = new URL(apiUrl);
				String para = URLEncoder.encode(content, "utf-8"); 
				//Convert content into UTF-8
				URLConnection conn = url.openConnection();
				conn.setDoOutput(true);
				
				PrintWriter out = new PrintWriter(conn.getOutputStream());
				out.print("info="+para);
				
				out.close();
				
				StringBuilder sb = new StringBuilder();
				
				Scanner in = new Scanner(conn.getInputStream(),"UTF-8");
				while (in.hasNextLine()) {
					sb.append(in.nextLine());
				}
				result = sb.toString();
				in.close();
	        } catch (Exception e1) {  
	            // TODO Auto-generated catch block  
	            e1.printStackTrace();  
	        } 
			result = this.getContent(result);
			return result;
		}
		
		//Parse Tuling Rebot Response Json And get Reply Content
		public String getContent(String content){
			String str = "";
			JSONObject json = JSONObject.fromObject(content);
			if (100000==json.getInt("code")) {
				str = json.getString("text");
			}else {
				str = "I don`t know what`s you say?";
			}
			return str;
		}
}
