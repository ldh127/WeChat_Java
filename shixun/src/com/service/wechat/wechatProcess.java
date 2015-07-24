package com.service.wechat;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Date;
import java.util.Iterator;

import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import com.Dao.webchat.HibernateUtil;
import com.Entity.wechat.xmlEntity;
import com.beans.wechat.wxData;
import com.beans.wechat.wxUserlist;

/**
 * @author Conan
 * 
 */
@Service
public class wechatProcess {
	@Autowired
	private xmlEntity xml;
	@Autowired
	private textReplyImp reply;
	String toUser;
	String fromUser;

	private String result;

	// 将字符串转换成xml映射bean
	public xmlEntity init(String str) {

		// Convert String into XML Document Object
		try {
			if (str.length() == 0 || str == null) {
				return null;
			}
			Document document;
			document = DocumentHelper.parseText(str);
			// Get Node
			Element root = document.getRootElement();
			// Read subNode under the Root Node
			Iterator it = root.elementIterator();

			// assemble the XML Entity Bean Start
			xml = new xmlEntity();
			// Use reflection to get XML Entity
			Class c = Class.forName("com.Entity.wechat.xmlEntity");
			xml = (xmlEntity) c.newInstance();

			while (it.hasNext()) {
				Element e = (Element) it.next();
				Field field = c.getDeclaredField(e.getName());
				// Use set Method��field.getType()) To get the types of Params
				Method method = c.getDeclaredMethod("set" + e.getName(),
						field.getType());
				// Use set Method
				method.invoke(xml, e.getText());
			}

			this.toUser = xml.getFromUserName();
			this.fromUser = xml.getToUserName();

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return xml;
	}

	public void processWechatXml(xmlEntity wechat, String userID) {
		// TODO Auto-generated method stub
		reply.init(wechat);
		result = "";
		String msgtype = wechat.getMsgType();
		switch (msgtype) {
		case "text": {
			/*存消息的逻辑*/
			ApplicationContext ctx =new ClassPathXmlApplicationContext("ApplicationContext.xml");
			Session session = HibernateUtil.currentSession();
			Transaction tx = session.beginTransaction();
			    
			wxData user_text=(wxData)ctx.getBean(wxData.class);
			
			user_text.setToUserName(wechat.getToUserName());
			user_text.setFromUserName(wechat.getFromUserName());
			user_text.setCreateTime(new Date());
			user_text.setMsgType(wechat.getMsgId());
			user_text.setContent(wechat.getContent());
			user_text.setMsgId(Long.valueOf(wechat.getMsgId()));
				   
			session.save(user_text);
			tx.commit(); 
			   
			result = reply.do_text(userID);
			break;
		}
		case "event":
			result = reply.do_event(userID);
			break;
		default:
			break;
		}
	}

	public String getFinalResult() {
		// TODO Auto-generated method stub
		if (result.contains("@title#")) {
			result = make_mutil_text(result);
		} else if (result.contains("@music")) {
			result = make_music(result);
			System.out.println("Here is music");
		} else {
			result = make_text(result);
		}
		System.out.println(result);
		return result;
	}

	// 模板制作
	public String make_text(String result) {
		String tmp = "<xml><ToUserName><![CDATA["
				+ toUser
				+ "]]></ToUserName><FromUserName><![CDATA["
				+ fromUser
				+ "]]></FromUserName><CreateTime>12345678</CreateTime><MsgType><![CDATA[text]]></MsgType><Content><![CDATA["
				+ result + "]]></Content></xml>";
		return tmp;
	}

	// 多图文模板 @title#Here is title#desp|Here is desp#pic|Here is pic#url|Url is
	// Here
	public String make_mutil_text(String result) {
		int itemNum = 0;
		String strarr[] = result.split("@title#");
		itemNum = strarr.length - 1;// 获得item数目
		// mutil_text tmplate outside
		String tmp = "<xml><ToUserName><![CDATA["
				+ toUser
				+ "]]></ToUserName><FromUserName><![CDATA["
				+ fromUser
				+ "]]></FromUserName><CreateTime>12345678</CreateTime><MsgType><![CDATA[news]]></MsgType>"
				+ "<ArticleCount>{itemNum}</ArticleCount>"
				+ "<Articles>{items}</Articles></xml>";
		tmp = tmp.replace("{itemNum}", Integer.toString(itemNum));
		// item template inside
		String itemTmp = "<item>" + "<Title><![CDATA[title1]]></Title>"
				+ "<Description><![CDATA[description1]]></Description>"
				+ "<PicUrl><![CDATA[picurl]]></PicUrl>"
				+ "<Url><![CDATA[url]]></Url>" + "</item>";
		// make items
		StringBuilder sb = new StringBuilder("");
		for (int i = 1; i < strarr.length; i++) {
			String item = itemTmp;
			String sub = strarr[i];
			String title = sub.substring(0, sub.indexOf("#desp"));
			String description = sub.substring(
					sub.indexOf("#desp|") + "#desp|".length(),
					sub.indexOf("#pic|"));
			String pic = sub.substring(sub.indexOf("#pic|") + "#pic|".length(),
					sub.indexOf("#url|"));
			String url = sub.substring(sub.indexOf("#url|") + "#url|".length(),
					sub.length());
			item = item.replace("title1", title);
			item = item.replace("description1", description);
			item = item.replace("picurl", pic);
			item = item.replace("url", url);
			sb.append(item);
		}
		tmp = tmp.replace("{items}", sb.toString());
		return tmp;
	}

	// 音乐回复模板 @music|#desp|...#title|...#murl|...
	public String make_music(String result) {
		String tmp = "<xml>" + "<ToUserName><![CDATA[" + toUser
				+ "]]></ToUserName>" + "<FromUserName><![CDATA[" + fromUser
				+ "]]></FromUserName>" + "<CreateTime>12345678</CreateTime>"
				+ "<MsgType><![CDATA[music]]></MsgType>" + "<Music>"
				+ "<Title><![CDATA[TITLE]]></Title>"
				+ "<Description><![CDATA[DESCRIPTION]]></Description>"
				+ "<MusicUrl><![CDATA[NM_MUSIC_Url]]></MusicUrl>"
				+ "<HQMusicUrl><![CDATA[HQ_MUSIC_Url]]></HQMusicUrl>"
				+ "</Music>" + "</xml>";
		String title = result.substring(
				result.indexOf("#title|") + "#title|".length(),
				result.indexOf("#murl|"));
		String description = result.substring(result.indexOf("#desp|")
				+ "#desp|".length(), result.indexOf("#title|"));
		String murl = result.substring(
				result.indexOf("#murl|") + "#murl|".length(), result.length());
		String hmurl = murl;
		tmp = tmp.replace("TITLE", title);
		tmp = tmp.replace("DESCRIPTION", description);
		tmp = tmp.replace("NM_MUSIC_Url", murl);
		tmp = tmp.replace("HQ_MUSIC_Url", hmurl);
		return tmp;
	}
}
