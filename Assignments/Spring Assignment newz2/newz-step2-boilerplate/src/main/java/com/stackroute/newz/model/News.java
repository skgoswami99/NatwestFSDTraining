package com.stackroute.newz.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/*
 * The class "News" will be acting as the data model for the news Table in the database. Please
 * note that this class is annotated with @Entity annotation. Hibernate will scan all package for 
 * any Java objects annotated with the @Entity annotation. If it finds any, then it will begin the 
 * process of looking through that particular Java object to recreate it as a table in your database.
 */
@Entity
@Table(name="News")
public class News
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int newsId;
	@Column
	private String name;
	@Column
	private String author;
	@Column
	private String description;
	@Column
	private String content;
	@Column
	private LocalDateTime publishedAt;
	
	public News() {	
    	this.publishedAt = LocalDateTime.now();
	}

	public News(int newsId, String name, String author, String description, String content, LocalDateTime publishedAt) {
		this.newsId = newsId;
		this.name = name;
		this.author = author;
		this.description = description;
		this.content = content;
		this.publishedAt = publishedAt;
	}
	
	public News(String name, String author, String description, String content) {
		this.name = name;
		this.author = author;
		this.description = description;
		this.content = content;
		this.publishedAt = LocalDateTime.now();
	}

	public int getNewsId() {
		return this.newsId;
	}

	public void setNewsId(int newzId) {
		this.newsId = newzId;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAuthor() {
		return this.author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public LocalDateTime getPublishedAt() {
		return this.publishedAt;
	}

	public void setPublishedAt(LocalDateTime publishedAt) {
		this.publishedAt = publishedAt;
	}

	public String getContent() {
		return this.content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	@Override
	public String toString() {
		return "News [newsId=" + newsId + ", name=" + name + ", author=" + author + ", description=" + description
				+ ", content=" + content + ", publishedAt=" + publishedAt + "]";
	}

	
}
