package com.stackroute.newz.model;

import java.time.LocalDateTime;

public class NewsSource {
	
	/*
	 * This class should have five fields
	 * (newssourceId,newssourceName,newssourceDesc,newssourceCreatedBy,newssourceCreationDate).
	 * This class should also contain the getters and setters for the 
	 * fields along with the parameterized	constructor and toString method.
	 * The value of newssourceCreationDate should not be accepted from the user but should be
	 * always initialized with the system date.
	 */
	private int newsSourceId;
	private String newsSourceName;
	private String newsSourceDesc;
	private String newsSourceCreatedBy;
	private LocalDateTime newsSourceCreationDate;

public NewsSource() {
		
	}
	
	
	public NewsSource(int newsSourceId, String newsSourceName, String newsSourceDesc, String newsSourceCreatedBy,
			LocalDateTime newsSourceCreationDate) {
		super();
		this.newsSourceId = newsSourceId;
		this.newsSourceName = newsSourceName;
		this.newsSourceDesc = newsSourceDesc;
		this.newsSourceCreatedBy = newsSourceCreatedBy;
		this.newsSourceCreationDate = newsSourceCreationDate;
	}


	public int getNewsSourceId() {
		return newsSourceId;
	}

	public void setNewsSourceId(int newsSourceId) {
		this.newsSourceId=newsSourceId;
	}

	public String getNewsSourceName() {
		return newsSourceName;
	}

	public void setNewsSourceName(String newsSourceName) {
		this.newsSourceName=newsSourceName;
	}

	public String getNewsSourceDesc() {
		return newsSourceDesc;
	}

	public void setNewsSourceDesc(String newsSourceDesc) {
		this.newsSourceDesc=newsSourceDesc;
	}

	public String getNewsSourceCreatedBy() {
		return newsSourceCreatedBy;
	}

	public void setNewsSourceCreatedBy(String newsSourceCreatedBy) {
		this.newsSourceCreatedBy=newsSourceCreatedBy;
	}
	

	public LocalDateTime getNewsSourceCreationDate() {
		return LocalDateTime.now();
	}

	public void setNewsSourceCreationDate() {
	}


	@Override
	public String toString() {
		return "NewsSource [newsSourceId=" + newsSourceId + ", newsSourceName=" + newsSourceName + ", newsSourceDesc="
				+ newsSourceDesc + ", newsSourceCreatedBy=" + newsSourceCreatedBy + ", newsSourceCreationDate="
				+ newsSourceCreationDate + "]";
	}

}
