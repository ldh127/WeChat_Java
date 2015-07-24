package com.action.wechat;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

public class imgAction extends ActionSupport {

	private File upload;	//获得文件对象,上传文件的临时文件对象  /temp
	private String uploadFileName;	//获得文件名字
	public String getUploadFileName() {
		return uploadFileName;
	}
	public void setUpload(File upload) {
		this.upload = upload;
		System.out.println("临时文件："+upload.getAbsolutePath());
	}
	public File getUpload() {
		return upload;
	}
	public void setUploadFileName(String uploadFileName) {
		this.uploadFileName = uploadFileName;
	}
	
	
	public String execute(){
		
		//将临时目录下的文件拷贝到指定的一个目录
		String uploadFile = ServletActionContext.getServletContext().getRealPath("/upload");
		System.out.println(uploadFile);
		File destFile = new File(uploadFile,uploadFileName);
		//判断文件父目录是否存在，如果不存在就创建
		if(!destFile.getParentFile().exists()){
			destFile.getParentFile().mkdirs();
		}
		try {
			FileUtils.copyFile(upload, destFile);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println("文件上传成功："+destFile.getAbsolutePath());
		
		return SUCCESS;
	}
	
	
}
