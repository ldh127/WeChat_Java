package com.beans.wechat;

import java.sql.Timestamp;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;


/**
 * WxData entity. @author MyEclipse Persistence Tools
 */
@SuppressWarnings("serial")
@Entity
@Table(name="wx_data"
    ,catalog="wxdb"
)
@Component
public class wxData  implements java.io.Serializable {


    // Fields    

     private Long dataId;
     private Timestamp dealTime;
     private Boolean getOrPut;
     private Boolean dataType;
     private String dataContent;
     private String toUserName;
     private String fromUserName;
     private Date createTime;
     private String msgType;
     private String content;
     private Long msgId;
     private String mediaId;
     private String format;
     private Float locationX;
     private Float locationY;
     private String label;
     private String description;
     private String picUrl;
     private String musicUrl;
     private String hqmusicUrl;
     private String event;
     private String eventKey;
     private Float latitude;
     private Float longitude;


    // Constructors

    /** default constructor */
    public wxData() {
    }

    
    /** full constructor */
 

   
    // Property accessors
    @Id @GeneratedValue(strategy=GenerationType.AUTO)
    
    @Column(name="DataID", unique=true, nullable=false)

    public Long getDataId() {
        return this.dataId;
    }
    
    public void setDataId(Long dataId) {
        this.dataId = dataId;
    }
    
    @Column(name="DealTime", length=19)

    public Timestamp getDealTime() {
        return this.dealTime;
    }
    
    public void setDealTime(Timestamp dealTime) {
        this.dealTime = dealTime;
    }
    
    @Column(name="GetOrPut")

    public Boolean getGetOrPut() {
        return this.getOrPut;
    }
    
    public void setGetOrPut(Boolean getOrPut) {
        this.getOrPut = getOrPut;
    }
    
    @Column(name="DataType")

    public Boolean getDataType() {
        return this.dataType;
    }
    
    public void setDataType(Boolean dataType) {
        this.dataType = dataType;
    }
    
    @Column(name="DataContent", length=65535)

    public String getDataContent() {
        return this.dataContent;
    }
    
    public void setDataContent(String dataContent) {
        this.dataContent = dataContent;
    }
    
    @Column(name="ToUserName", length=50)

    public String getToUserName() {
        return this.toUserName;
    }
    
    public void setToUserName(String toUserName) {
        this.toUserName = toUserName;
    }
    
    @Column(name="FromUserName", length=50)

    public String getFromUserName() {
        return this.fromUserName;
    }
    
    public void setFromUserName(String fromUserName) {
        this.fromUserName = fromUserName;
    }
    
    @Column(name="CreateTime", length=19)

    public Date getCreateTime() {
        return this.createTime;
    }
    
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
    
    @Column(name="MsgType", length=50)

    public String getMsgType() {
        return this.msgType;
    }
    
    public void setMsgType(String msgType) {
        this.msgType = msgType;
    }
    
    @Column(name="Content", length=65535)

    public String getContent() {
        return this.content;
    }
    
    public void setContent(String content) {
        this.content = content;
    }
    
    @Column(name="MsgId")

    public Long getMsgId() {
        return this.msgId;
    }
    
    public void setMsgId(Long msgId) {
        this.msgId = msgId;
    }
    
    @Column(name="MediaId")

    public String getMediaId() {
        return this.mediaId;
    }
    
    public void setMediaId(String mediaId) {
        this.mediaId = mediaId;
    }
    

    
    @Column(name="Format", length=50)

    public String getFormat() {
        return this.format;
    }
    
    public void setFormat(String format) {
        this.format = format;
    }
    
    @Column(name="Location_X", precision=12, scale=0)

    public Float getLocationX() {
        return this.locationX;
    }
    
    public void setLocationX(Float locationX) {
        this.locationX = locationX;
    }
    
    @Column(name="Location_Y", precision=12, scale=0)

    public Float getLocationY() {
        return this.locationY;
    }
    
    public void setLocationY(Float locationY) {
        this.locationY = locationY;
    }
    

    
    @Column(name="Label")

    public String getLabel() {
        return this.label;
    }
    
    public void setLabel(String label) {
        this.label = label;
    }
    
    @Column(name="Description")

    public String getDescription() {
        return this.description;
    }
    
    public void setDescription(String description) {
        this.description = description;
    }
    

    
    @Column(name="PicUrl")

    public String getPicUrl() {
        return this.picUrl;
    }
    
    public void setPicUrl(String picUrl) {
        this.picUrl = picUrl;
    }
    
    @Column(name="MusicURL")

    public String getMusicUrl() {
        return this.musicUrl;
    }
    
    public void setMusicUrl(String musicUrl) {
        this.musicUrl = musicUrl;
    }
    
    @Column(name="HQMusicUrl")

    public String getHqmusicUrl() {
        return this.hqmusicUrl;
    }
    
    public void setHqmusicUrl(String hqmusicUrl) {
        this.hqmusicUrl = hqmusicUrl;
    }
    
    @Column(name="Event", length=50)

    public String getEvent() {
        return this.event;
    }
    
    public void setEvent(String event) {
        this.event = event;
    }
    
    @Column(name="EventKey")

    public String getEventKey() {
        return this.eventKey;
    }
    
    public void setEventKey(String eventKey) {
        this.eventKey = eventKey;
    }

    
    @Column(name="Latitude", precision=12, scale=0)

    public Float getLatitude() {
        return this.latitude;
    }
    
    public void setLatitude(Float latitude) {
        this.latitude = latitude;
    }
    
    @Column(name="Longitude", precision=12, scale=0)

    public Float getLongitude() {
        return this.longitude;
    }
    
    public void setLongitude(Float longitude) {
        this.longitude = longitude;
    }

    









}