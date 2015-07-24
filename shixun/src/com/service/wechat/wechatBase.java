package com.service.wechat;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.util.Scanner;

import javassist.expr.NewArray;
import net.sf.json.JSONException;
import net.sf.json.JSONObject;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.Dao.webchat.HibernateUtil;
import com.beans.wechat.wxData;
import com.beans.wechat.wxMpset;
import com.beans.wechat.wxUserlist;
import com.beans.wechat.wxUserlistId;
import com.service.dao.baseSupport;

import freemarker.core.ReturnInstruction.Return;

@Service("wechatBase")
@Component
public class wechatBase {
	
	@Autowired
	private baseSupport base;
	private String APPID;
	private String APPSCRET;
	@Autowired
	private wxUserlistId userlistId;
	
	//通过mpID(就是此处的wechat_uid)去获取mp_set中微信号的设置信息 得到APPID APPSECRET去获取accessToken
	public String getAccess_token(String wechat_uid){
		wxMpset wxinfo = base.getWechatInfo(wechat_uid);
		APPID = wxinfo.getAPPID();
		APPSCRET = wxinfo.getAPPSCRET();
		String access_token=null;
		try {
			URL url = new URL("https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid="+APPID+"&secret="+APPSCRET);
			URLConnection conn = url.openConnection();
			conn.connect();
			
			Scanner sc = new Scanner(conn.getInputStream());
			String getResult = "";
			while (sc.hasNextLine()) {
				getResult+=sc.nextLine();
			}
			JSONObject json = JSONObject.fromObject(getResult);
			
			try {
				access_token = json.getString("access_token");
				return access_token;
			} catch (JSONException e) {
				System.out.println("Exception Rong");
				return "error";
			}
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return access_token;
	}
	
	//wechat_uid 对应mp_set的mpID  此功能是公众号发送消息给指定用户 content是要发送的内容
	public String send_to_people(String openid,String wechat_uid,String content){
		String token = getAccess_token(wechat_uid);
		String send_state=null;
		try {
			URL url = new URL("https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token="+token);
			URLConnection conn = url.openConnection();
			conn.setDoOutput(true);
			conn.connect();
			
			OutputStream out = conn.getOutputStream();
			PrintWriter pw =new PrintWriter(out,true);
			
			String json = "{\"touser\":\""+openid+"\",\"msgtype\":\"text\",\"text\":{\"content\":\""+content+"\"}}";
			json = new String(json.getBytes("UTF-8"),"UTF-8");
			pw.print(json);
			pw.close();
			Scanner sc = new Scanner(conn.getInputStream());
			String result ="";
			while (sc.hasNextLine()) {
				result+=sc.nextLine();
			}
			sc.close();
			
			JSONObject jsonReply = JSONObject.fromObject(result);
			String errmsg = jsonReply.getString("errmsg");
			if (errmsg.equals("ok")) {
				send_state =  "ok";
			}else{
				send_state =  "error"; //如果发送不成功则返回error
			}
			
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return send_state;
	}
	
	//群发消息(普通文本)
	//wechat_uid 对应mp_set的mpID  此功能是公众号发送消息给 全部 用户  content是要发送的内容
	public String send_to_all(String wechat_uid,String content){
		String token = getAccess_token(wechat_uid);
		
		if (token.equals("error")||token==null) {System.out.println("send to all error");
			return "error";
		}
		
		String send_state=null;
		
		try {
			URL url = new URL("https://api.weixin.qq.com/cgi-bin/message/mass/sendall?access_token="+token);
			URLConnection conn = url.openConnection();
			conn.setDoOutput(true);
			conn.connect();
			
			OutputStream out = conn.getOutputStream();
			
			PrintWriter pw =new PrintWriter(out,true);
			
			String json = "{\"filter\":{\"is_to_all\":true},\"text\":{\"content\":\""+content+"\"},\"msgtype\":\"text\"}";
			json = new String(json.getBytes("UTF-8"),"UTF-8");
			
			pw.print(json);
			pw.close();
			Scanner sc = new Scanner(conn.getInputStream());
			String result ="";
			while (sc.hasNextLine()) {
				result+=sc.nextLine();
			}
			sc.close();
			
			JSONObject jsonReply = JSONObject.fromObject(result);
			int errcode = jsonReply.getInt("errcode");
			if (errcode==0) {
				send_state =  "ok";
			}else{
				send_state =  "error"; //如果发送不成功则返回error
			}
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return send_state;
	}
	
	
	
	//生成二维码 这个流程是先获得二维码ticket  然后再通过ticket去获得二维码对应的图片
	public String make_QR(String wechat_uid){
		String token = getAccess_token(wechat_uid);
		String qr_url = "";
		
		try {
			URL url = new URL("https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token="+token);
			URLConnection conn = url.openConnection();
			conn.setDoOutput(true);
			conn.connect();
			
			OutputStream out = conn.getOutputStream();
			PrintWriter pw =new PrintWriter(out,true);
			
			String json = "{\"expire_seconds\": 604800, \"action_name\": \"QR_SCENE\", \"action_info\": {\"scene\": {\"scene_id\": 123}}}";
			pw.print(json);
			pw.close();
			Scanner sc = new Scanner(conn.getInputStream());
			String result ="";
			while (sc.hasNextLine()) {
				result+=sc.nextLine();
			}
			sc.close();
			
			JSONObject jsonReply = JSONObject.fromObject(result);
			try {
				qr_url = jsonReply.getString("ticket");
			} catch (JSONException e) {
				return "";
			}
			if (qr_url==null) {
				return "error";//获取不到二维码则返回错误
			}
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket="+qr_url;
	}
	
	//删除菜单 wechat_uid对应mpID
	public String del_menu(String wechat_uid){
		String token = getAccess_token(wechat_uid);
		String state = "";
		try {
			URL url = new URL("https://api.weixin.qq.com/cgi-bin/menu/delete?access_token="+token);
			URLConnection conn = url.openConnection();
			conn.setDoOutput(true);
			conn.connect();
			
			OutputStream out = conn.getOutputStream();

			Scanner sc = new Scanner(conn.getInputStream());
			String result ="";
			while (sc.hasNextLine()) {
				result+=sc.nextLine();
			}
			sc.close();
			
			JSONObject jsonReply = JSONObject.fromObject(result);
			state = jsonReply.getString("errmsg");
			if (!state.equals("ok")) {
				return "error";
			}
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return state;
		
	}
	//获取用户基本信息
	public void get_user_info(String wechat_uid,String openId){
		String token = getAccess_token(wechat_uid);
		try {
			URL url = new URL("https://api.weixin.qq.com/cgi-bin/user/info?access_token="+token+"&openid="+openId+"&lang=zh_CN");
			URLConnection conn = url.openConnection();
			conn.setRequestProperty("contentType", "utf-8");
			conn.setDoOutput(true);
			conn.connect();
			
			OutputStream out = conn.getOutputStream();
			InputStream inStream = conn.getInputStream(); 
			Scanner sc = new Scanner(conn.getInputStream());
			String result ="";
			while (sc.hasNextLine()) {
				result+=sc.nextLine();
			}
			sc.close();
			/*对用户信息的封装*/
			JSONObject jsonReply = JSONObject.fromObject(result);
			
			ApplicationContext ctxApplicationContext =new ClassPathXmlApplicationContext("ApplicationContext.xml");
			Session session = HibernateUtil.currentSession();
			Transaction tx = session.beginTransaction();
		    wxUserlistId userlistId=ctxApplicationContext.getBean(wxUserlistId.class);
			userlistId.setMpId(wechat_uid);
			userlistId.setUserId(openId);
			
			wxUserlist list = (wxUserlist)session.get(wxUserlist.class, userlistId); 
			    list.setUserName(new String(jsonReply.getString("openid").getBytes("UTF-8"),"UTF-8"));
			    list.setNickName(new String(jsonReply.getString("nickname").getBytes("UTF-8"),"UTF-8"));
			    list.setRemarkName(new String(jsonReply.getString("remark").getBytes("UTF-8"),"UTF-8"));
			    list.setCity(new String(jsonReply.getString("city").getBytes("UTF-8"),"UTF-8"));
			    list.setCountry(new String(jsonReply.getString("country").getBytes("UTF-8"),"UTF-8"));
			    list.setGender(Boolean.valueOf(new String(jsonReply.getString("sex").getBytes("UTF-8"),"UTF-8")));
			    list.setProvince(new String(jsonReply.getString("province").getBytes("UTF-8"),"UTF-8"));
			    session.update(list); 
			    tx.commit(); 
			    session.flush();  
		        session.clear();
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	//制作菜单
	public String make_menu(String wechat_uid,String json){
		String token = getAccess_token(wechat_uid);
		String state = "";
		try {
			URL url = new URL("https://api.weixin.qq.com/cgi-bin/menu/create?access_token="+token);
			URLConnection conn = url.openConnection();
			conn.setDoOutput(true);
			conn.connect();
			
			OutputStream out = conn.getOutputStream();
			PrintWriter pw =new PrintWriter(out,true);
			json = new String(json.getBytes("UTF-8"),"UTF-8");
			pw.print(json);
			pw.close();

			Scanner sc = new Scanner(conn.getInputStream());
			String result ="";
			while (sc.hasNextLine()) {
				result+=sc.nextLine();
				System.out.println(result);
			}
			sc.close();
			
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return state;
		
	}
	
}
