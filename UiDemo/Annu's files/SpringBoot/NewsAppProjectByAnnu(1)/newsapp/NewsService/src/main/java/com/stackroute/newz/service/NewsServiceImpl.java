package com.stackroute.newz.service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.newz.model.News;
import com.stackroute.newz.model.UserNews;
import com.stackroute.newz.repository.NewsRepository;
import com.stackroute.newz.util.exception.NewsNotFoundException;
import com.stackroute.newz.util.exception.NewsNotFoundException;

/*
* Service classes are used here to implement additional business logic/validation 
* This class has to be annotated with @Service annotation.
* @Service - It is a specialization of the component annotation. It doesn't currently 
* provide any additional behavior over the @Component annotation, but it's a good idea 
* to use @Service over @Component in service-layer classes because it specifies intent 
* better. Additionally, tool support and additional behavior might rely on it in the 
* future.
* */

@Service
public class NewsServiceImpl implements NewsService {

	/*
	 * Autowiring should be implemented for the NewsDao and MongoOperation.
	 * (Use Constructor-based autowiring) Please note that we should not create any
	 * object using the new keyword.
	 */
	private NewsRepository newsRepository;
	
	
	@Autowired
	public NewsServiceImpl(NewsRepository newsRepository) {
		this.newsRepository=newsRepository;
	}

	/*
	 * This method should be used to save a new news.
	 */
	@Override	
	public boolean addNews(News news) {		
		Optional<UserNews> userObj = newsRepository.findById(news.getAuthor());		
		UserNews userNews=null;		
		List<News> newsList= null;
		if(userObj.isPresent()) {			
			userNews = userObj.get();			
			newsList = userNews.getNewslist();			
			if(newsList == null) {				
				newsList = new ArrayList<>();			
				}
			Optional<News> existNews = newsList.stream().filter(n->n.getTitle().equals(news.getTitle())).findAny();
			if(existNews.isPresent()) {
				return false;
			}
			newsList.add(news);			
			userNews.setNewslist(newsList);			
			newsRepository.save(userNews);	
			return true;
			}else {			
				userNews = new UserNews();			
				userNews.setUserId(news.getAuthor());			
				newsList = new ArrayList<>();			
				newsList.add(news);			
				userNews.setNewslist(newsList);			
				newsRepository.save(userNews);	
				return true;
				}
			
		}

/* This method should be used to delete an existing news. */
	
	public boolean deleteNews(String userId, int newsId) {
		UserNews userNews = newsRepository.findById(userId).get();
		if(userNews!=null) {
		List<News> newsList = userNews.getNewslist();
		newsList = newsList.stream().filter(n->n.getNewsId()!=newsId).collect(Collectors.toList());
		userNews.setNewslist(newsList);
		newsRepository.save(userNews);
		return true;
		}else {
			return false;
		}
	}

	/* This method should be used to delete all news for a  specific userId. */
	
	public boolean deleteAllNews(String userId) throws NewsNotFoundException {
		try {
			UserNews userNews = newsRepository.findById(userId).get();
			if(userNews!=null) {
			userNews.setNewslist(null);
			newsRepository.save(userNews);
			return true;
			}else {
				return false;
			}
		} catch (Exception e) {
			throw new NewsNotFoundException("Exception Occurred updateNews");
		}
		
	}

	/*
	 * This method should be used to update a existing news.
	 */

	public News updateNews(News news, int newsId, String userId) throws NewsNotFoundException {
		try {
			UserNews userNews = newsRepository.findById(userId).get();
			List<News> newsList = userNews.getNewslist();
			News newsObj = newsList.stream().filter(n->n.getNewsId()==newsId).findAny().get();
			newsList.remove(newsObj);
			newsList.add(news);
			userNews.setNewslist(newsList);
			newsRepository.save(userNews);
			return newsObj;
		} catch (NoSuchElementException e) {
			throw new NewsNotFoundException("Exception Occurred updateNews");
		}
		
	}

	/*
	 * This method should be used to get a news by newsId created by specific user
	 */

	public News getNewsByNewsId(String userId, int newsId) throws NewsNotFoundException {
		try {
			if(newsRepository.findById(userId).isPresent()) {
				UserNews userNews = newsRepository.findById(userId).get();
				
				List<News> newsList = userNews.getNewslist();
				
				return newsList.stream().filter(n->n.getNewsId()==newsId).findAny().get();
				}else {
					throw new NewsNotFoundException("Exception Occurred in getNewsByNewsId");
				}
		} catch (NoSuchElementException e) {
			throw new NewsNotFoundException("Exception Occurred in getNewsByNewsId");
			}
		
	}

	/*
	 * This method should be used to get all news for a specific userId.
	 */

	public List<News> getAllNewsByUserId(String userId) {
		UserNews userNews = newsRepository.findById(userId).get();
		return userNews.getNewslist();
	}

}
