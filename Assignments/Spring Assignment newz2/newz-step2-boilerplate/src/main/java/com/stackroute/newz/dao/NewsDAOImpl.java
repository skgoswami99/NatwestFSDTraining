package com.stackroute.newz.dao;

import java.time.LocalDateTime;
import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.stackroute.newz.model.News;

/*
 * This class is implementing the NewsDAO interface. This class has to be annotated with @Repository
 * annotation.
 * @Repository - is an annotation that marks the specific class as a Data Access Object, thus 
 * 				 clarifying it's role.
 * @Transactional - The transactional annotation itself defines the scope of a single database 
 * 					transaction. The database transaction happens inside the scope of a persistence 
 * 					context.  
 * */
@Repository
@Transactional("txManager")
public class NewsDAOImpl implements NewsDAO {

	/*
	 * Autowiring should be implemented for the SessionFactory.
	 */
	
	private SessionFactory sessionFactory;
	
	@Autowired
	public NewsDAOImpl(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	
	/*
	 * Save the news in the database(news) table.
	 */
	public boolean addNews(News news) {
		sessionFactory.getCurrentSession().save(news);
		return true;
	}

	/*
	 * retrieve all existing news sorted by created Date in descending
	 * order(showing latest news first)
	 */
	public List<News> getAllNews() {
		return sessionFactory.getCurrentSession().createQuery("from News", News.class).getResultList();
	}

	/*
	 * retrieve specific news from the database(news) table
	 */
	public News getNewsById(int newsId) {
		News news = sessionFactory.getCurrentSession().get(News.class, newsId);
		System.out.println("NewsById: "+news);
		return news;
	}

	public boolean updateNews(News news) {
		News newsById = sessionFactory.getCurrentSession().get(News.class, news.getNewsId());
		System.out.println("NewsById: "+newsById);
		if(newsById == null) {
			System.out.println("News by "+news.getNewsId()+ " is not in database. Cannot Update.");
			return false;
		}
		else {
			newsById.setName(news.getName());
			newsById.setAuthor(news.getAuthor());
			newsById.setDescription(news.getDescription());
			newsById.setContent(news.getContent());
			newsById.setPublishedAt(LocalDateTime.now());
			sessionFactory.getCurrentSession().update(newsById);
			return true;
		}
	}

	/*
	 * Remove the news from the database(news) table.
	 */
	public boolean deleteNews(int newsId) {
		News news = getNewsById(newsId);
		if(news == null) {
			System.out.println("News by "+newsId+ " is not in database. Cannot Delete.");
			return false;
		}
		sessionFactory.getCurrentSession().delete(news);
		return true;
	}
	
}