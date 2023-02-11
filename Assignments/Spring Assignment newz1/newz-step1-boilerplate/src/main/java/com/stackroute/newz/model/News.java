package com.stackroute.newz.model;

import java.time.LocalDateTime;

import org.springframework.stereotype.Component;

/* 
 * Annotate the class with @Component annotation. 
 * @Component annotation is used to crete singleton instance of of the class
 *
 */


/*
 * The class "News" will be acting as the data model for the News data in the ArrayList.
 */
@Component
public class News {
	
	/*
	 * This class should have five fields (newsId, title, author,
	 * description, content and publishedAt). This class should also contain the getters and
	 * setters for the fields. The value of publishedAt should not be accepted from
	 * the user but should be always initialized with the system date
	 */
	
	private Integer newsId;
	private String title;
	private String author;
	private String description;
	private String content;
	private LocalDateTime publishedAt = LocalDateTime.now();
	
	
	
    public News(Integer newsId, String title, String author, String description, String content,
			LocalDateTime publishedAt) {
		super();
		this.newsId = newsId;
		this.title = title;
		this.author = author;
		this.description = description;
		this.content = content;
		this.publishedAt = publishedAt;
	}


	public News() {
    	/* default constructor */
    }

    
    /* All the getters/setters definition should be implemented here */
	public Integer getNewsId() {
		return newsId;
	}


	public void setNewsId(Integer newsId) {
		this.newsId = newsId;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getAuthor() {
		return author;
	}


	public void setAuthor(String author) {
		this.author = author;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public String getContent() {
		return content;
	}


	public void setContent(String content) {
		this.content = content;
	}


	public LocalDateTime getPublishedAt() {
		return publishedAt;
	}


	public void setPublishedAt(LocalDateTime publishedAt) {
		this.publishedAt = publishedAt;
	}

    /* Override the toString() method */
	@Override
	public String toString() {
		return "News [newsId=" + newsId + ", title=" + title + ", author=" + author + ", description=" + description
				+ ", content=" + content + ", publishedAt=" + publishedAt + "]";
	}
    


	
}
