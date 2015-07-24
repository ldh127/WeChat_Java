package Test;

import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.util.List;
import java.util.Scanner;

import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Component;

import com.Dao.webchat.HibernateUtil;
import com.beans.wechat.sysUser;
import com.beans.wechat.wxKeywordlist;
import com.opensymphony.xwork2.ActionContext;
import com.service.dao.userKey;
import com.service.wechat.wechatBase;
public class testUnit {

	public ApplicationContext ctx = null;
	
	{
		ctx = new ClassPathXmlApplicationContext("ApplicationContext.xml");
	}

//	@Test
//	public void testGetKey(){
//		userKey key =ctx.getBean(userKey.class);
//		key.takeAllKey("5201314");
//	}
	@Test
	public void send_to_people(){
		wechatBase weBase = ctx.getBean(wechatBase.class);
		Session session = HibernateUtil.currentSession();
//		Transaction tx = session.beginTransaction();
//		sysUser user = (sysUser) ServletActionContext.getServletContext().getAttribute("user");
//		String mpID=user.getRemark();
		String content = "你好吗 谢谢";
;		weBase.send_to_people("o56A5wCIybUYuaYSCE1E4tGjCuLw","5201314", content);
	}
	
//	@Test
//	public void testGetUserKeyString() {
//		userKey key = ctx.getBean(userKey.class);
////		String result = key.getUserKeyString("Test");
//	}
//	
//	@Test
//	public void testGetUserWelcome(){
//		userKey key = ctx.getBean(userKey.class);
//		String result = key.getUserWelcome("5201314");
//	}
	
//	@Test
//	public void testgetAccess_token(){
//		wechatBase base = ctx.getBean(wechatBase.class);
////		String token = base.getAccess_token("5201314");
////		System.out.println(token);
//		try {
//			URL url = new URL("https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token="+"FBcqmfF5Aafy3fyOAk0JLHR730GVWBfiZlgD0kqGR8jgoJF0AhgmlLvVW18KKuQudX2J231cgNCxzz-zeHTjQcpu3gUv6gUFuFe6NM3yq4I");
//			URLConnection conn = url.openConnection();
//			conn.setDoOutput(true);
//			conn.connect();
//			
//			OutputStream out = conn.getOutputStream();
//			PrintWriter pw =new PrintWriter(out,true);
//			
//			String json = "{\"touser\":\""+"o56A5wEVfBWGlDU9lW15ZTZwighk"+"\",\"msgtype\":\"text\",\"text\":{\"content\":\"收到没有\"}}";
//			pw.print(json);
//			pw.close();
//			Scanner sc = new Scanner(conn.getInputStream());
//			while (sc.hasNextLine()) {
//				System.out.println(sc.nextLine());
//			}
//			sc.close();
//		} catch (MalformedURLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		
//	}
	
//	@Test
//	public void send_to_all(){
//		try {
//			URL url = new URL("https://api.weixin.qq.com/cgi-bin/message/mass/sendall?access_token="+"FBcqmfF5Aafy3fyOAk0JLHR730GVWBfiZlgD0kqGR8jgoJF0AhgmlLvVW18KKuQudX2J231cgNCxzz-zeHTjQcpu3gUv6gUFuFe6NM3yq4I");
//			URLConnection conn = url.openConnection();
//			conn.setDoOutput(true);
//			conn.connect();
//			
//			OutputStream out = conn.getOutputStream();
//			PrintWriter pw =new PrintWriter(out,true);
//			
//			String json = "{\"filter\":{\"is_to_all\":true},\"text\":{\"content\":\"群发测试\"},\"msgtype\":\"text\"}";
//			pw.print(json);
//			pw.close();
//			Scanner sc = new Scanner(conn.getInputStream());
//			while (sc.hasNextLine()) {
//				System.out.println(sc.nextLine());
//			}
//			sc.close();
//		} catch (MalformedURLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//	}
	
//	@Test
//	public void get_qr(){
//		String qr_url = "";
//		try {
//			URL url = new URL("https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token="+"FBcqmfF5Aafy3fyOAk0JLHR730GVWBfiZlgD0kqGR8jgoJF0AhgmlLvVW18KKuQudX2J231cgNCxzz-zeHTjQcpu3gUv6gUFuFe6NM3yq4I");
//			URLConnection conn = url.openConnection();
//			conn.setDoOutput(true);
//			conn.connect();
//			
//			OutputStream out = conn.getOutputStream();
//			PrintWriter pw =new PrintWriter(out,true);
//			
//			String json = "{\"expire_seconds\": 604800, \"action_name\": \"QR_SCENE\", \"action_info\": {\"scene\": {\"scene_id\": 123}}}";
//			pw.print(json);
//			pw.close();
//			Scanner sc = new Scanner(conn.getInputStream());
//			String result ="";
//			while (sc.hasNextLine()) {
//				result+=sc.nextLine();
//			}
//			sc.close();
//			System.out.println(result);
//			
//			JSONObject jsonReply = JSONObject.fromObject(result);
//			qr_url = jsonReply.getString("ticket");
//			if (qr_url==null) {
//				System.out.println("error");//获取不到二维码则返回错误
//			}
//		} catch (MalformedURLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		System.out.println("https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket="+qr_url);
//	}

//	@Test
//	public void getToken(){
//		wechatBase base = ctx.getBean(wechatBase.class);
//		String access_token =base.getAccess_token("5201314");
//		System.out.println(access_token);
//	}
	
//	@Test
//	public void del_menu(){
//		wechatBase base = ctx.getBean(wechatBase.class);
//		System.out.println(base.del_menu("5201314"));
//	}
//	@Before
//	public void begin(){
//		System.out.println("begin");
//	}
//	@After
//	public void end(){
//		System.out.println("End");
//	}
//	@Test
//	public void fun(){
//		System.out.println("funa");
//	}
	/*Transaction tx=null;
	Session session;*/
//	public  void testFun() {
//		ApplicationContext ctx = new ClassPathXmlApplicationContext("ApplicationContext.xml");
//		Session session= HibernateUtil.currentSession();
//		Transaction tx = session.beginTransaction();
//		wxKeywordlist keyword = ctx.getBean(wxKeywordlist.class);
//		/*wxKeywordlist demoKeywordlist=(wxKeywordlist)session.get(wxKeywordlist.class, 2);
//		System.out.println(demoKeywordlist.getUserId());*/
//		/*wxKeywordlist keyword=ctx.getBean(wxKeywordlist.class);*/
//		keyword.setKeyword("KeyWord");
//		keyword.setUserId("5201314");
//		keyword.setResponse("Conan is here");
//		keyword.setMatchMode(1);
//		session.save(keyword);
//		tx.commit();
//	}
	
	/*@Test
	public void testKey(){
		
	}*/
}
