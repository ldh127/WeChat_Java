package com.beans.wechat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.stereotype.Component;


/**
 * WxFilelist entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name="wx_filelist"
    ,catalog="wxdb"
)
@Component
public class wxFilelist  implements java.io.Serializable {


    // Fields    

     private String fileId;
     private String fileName;
     private String fileType;
     private Boolean fileSource;
     private String title;
     private String description;
     private String picUrl;
     private String musicUrl;
     private String hqmusicUrl;
     private String mediaId;
     private String thumbMediaId;
     private String content;
     private String sourceUrl;
     private Boolean noAdv;
     private Boolean isLock;


    // Constructors

    /** default constructor */
    public wxFilelist() {
    }

    
    /** full constructor */
    public wxFilelist(String fileName, String fileType, Boolean fileSource, String title, String description, String picUrl, String musicUrl, String hqmusicUrl, String mediaId, String thumbMediaId, String content, String sourceUrl, Boolean noAdv, Boolean isLock) {
        this.fileName = fileName;
        this.fileType = fileType;
        this.fileSource = fileSource;
        this.title = title;
        this.description = description;
        this.picUrl = picUrl;
        this.musicUrl = musicUrl;
        this.hqmusicUrl = hqmusicUrl;
        this.mediaId = mediaId;
        this.thumbMediaId = thumbMediaId;
        this.content = content;
        this.sourceUrl = sourceUrl;
        this.noAdv = noAdv;
        this.isLock = isLock;
    }

   
    // Property accessors
    @GenericGenerator(name="generator", strategy="uuid.hex")@Id @GeneratedValue(generator="generator")
    
    @Column(name="FileID", unique=true, nullable=false, length=50)

    public String getFileId() {
        return this.fileId;
    }
    
    public void setFileId(String fileId) {
        this.fileId = fileId;
    }
    
    @Column(name="FileName", nullable=false, length=500)

    public String getFileName() {
        return this.fileName;
    }
    
    public void setFileName(String fileName) {
        this.fileName = fileName;
    }
    
    @Column(name="FileType", nullable=false, length=50)

    public String getFileType() {
        return this.fileType;
    }
    
    public void setFileType(String fileType) {
        this.fileType = fileType;
    }
    
    @Column(name="FileSource", nullable=false)

    public Boolean getFileSource() {
        return this.fileSource;
    }
    
    public void setFileSource(Boolean fileSource) {
        this.fileSource = fileSource;
    }
    
    @Column(name="Title", nullable=false, length=500)

    public String getTitle() {
        return this.title;
    }
    
    public void setTitle(String title) {
        this.title = title;
    }
    
    @Column(name="Description", nullable=false, length=500)

    public String getDescription() {
        return this.description;
    }
    
    public void setDescription(String description) {
        this.description = description;
    }
    
    @Column(name="PicURL", nullable=false, length=500)

    public String getPicUrl() {
        return this.picUrl;
    }
    
    public void setPicUrl(String picUrl) {
        this.picUrl = picUrl;
    }
    
    @Column(name="MusicURL", nullable=false, length=500)

    public String getMusicUrl() {
        return this.musicUrl;
    }
    
    public void setMusicUrl(String musicUrl) {
        this.musicUrl = musicUrl;
    }
    
    @Column(name="HQMusicURL", nullable=false, length=500)

    public String getHqmusicUrl() {
        return this.hqmusicUrl;
    }
    
    public void setHqmusicUrl(String hqmusicUrl) {
        this.hqmusicUrl = hqmusicUrl;
    }
    
    @Column(name="MediaId", nullable=false, length=500)

    public String getMediaId() {
        return this.mediaId;
    }
    
    public void setMediaId(String mediaId) {
        this.mediaId = mediaId;
    }
    
    @Column(name="ThumbMediaId", nullable=false, length=500)

    public String getThumbMediaId() {
        return this.thumbMediaId;
    }
    
    public void setThumbMediaId(String thumbMediaId) {
        this.thumbMediaId = thumbMediaId;
    }
    
    @Column(name="Content", nullable=false, length=65535)

    public String getContent() {
        return this.content;
    }
    
    public void setContent(String content) {
        this.content = content;
    }
    
    @Column(name="SourceURL", nullable=false, length=500)

    public String getSourceUrl() {
        return this.sourceUrl;
    }
    
    public void setSourceUrl(String sourceUrl) {
        this.sourceUrl = sourceUrl;
    }
    
    @Column(name="NoAdv", nullable=false)

    public Boolean getNoAdv() {
        return this.noAdv;
    }
    
    public void setNoAdv(Boolean noAdv) {
        this.noAdv = noAdv;
    }
    
    @Column(name="IsLock", nullable=false)

    public Boolean getIsLock() {
        return this.isLock;
    }
    
    public void setIsLock(Boolean isLock) {
        this.isLock = isLock;
    }
   








}