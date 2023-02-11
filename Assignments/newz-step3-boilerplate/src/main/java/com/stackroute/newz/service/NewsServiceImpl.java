package com.stackroute.newz.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.newz.model.News;
import com.stackroute.newz.repository.NewsRepository;
import com.stackroute.newz.service.NewsService;
import com.stackroute.newz.util.exception.NewsAlreadyExistsException;
import com.stackroute.newz.util.exception.NewsNotExistsException;


/*
 * This class is implementing the NewsService interface. This class has to be annotated with 
 * @Service annotation.
 * @Service - is an annotation that annotates classes at the service layer, thus 
 * clarifying it's role.
 * 
 * */
@Service
public class NewsServiceImpl implements NewsService {

	/*
	 * Autowiring should be implemented for the NewsRepository.
	 */
	@Autowired
	private NewsRepository newsRepo;

	/*
	 * Add a new news. Throw NewsAlreadyExistsException if the news with specified
	 * newsId already exists.
	 */
	public News addNews(News news) throws NewsAlreadyExistsException {
		News newsbyid = newsRepo.getOne(news.getNewsId());
		if(newsbyid == null)
			return newsRepo.save(news);
		else {
			throw new NewsAlreadyExistsException("Can not Add the news. The news with "+news.getNewsId() +" already exists in the database.");
	}}

	/*
	 * Retrieve an existing news by it's newsId. Throw NewsNotExistsException if the 
	 * news with specified newsId does not exist.
	 */
	public News getNews(int newsId) throws NewsNotExistsException {
		Optional<News> news = newsRepo.findById(newsId);
		if(news.isEmpty()) {
			throw new NewsNotExistsException("Can not Retrieve the news. The news with "+newsId +" does not exists in the database.");
		}
		return news.get();
	}

	/*
	 * Retrieve all existing news
	 */
	public List<News> getAllNews() {
		return newsRepo.findAll();
	}

	/*
	 * Update an existing news by it's newsId. Throw NewsNotExistsException if the 
	 * news with specified newsId does not exist.
	 */
	public News updateNews(News news) throws NewsNotExistsException {
		News newsToUpdate = newsRepo.getOne(news.getNewsId());
		if(newsToUpdate == null) {
			throw new NewsNotExistsException("Can not Update the news. The news with "+news.getNewsId() +" does not exists in the database.");
		}else {
			newsToUpdate.setAuthor(news.getAuthor());
			newsToUpdate.setContent(news.getContent());
			newsToUpdate.setDescription(news.getDescription());
			newsToUpdate.setTitle(news.getTitle());
			newsToUpdate.setUrl(news.getUrl());
			newsToUpdate.setUrlToImage(news.getUrlToImage());
			newsToUpdate.setReminder(news.getReminder());
			newsToUpdate.setUser(news.getUser());
		return newsRepo.saveAndFlush(newsToUpdate);
		}
	}

	/*
	 * Delete an existing news by it's newsId. Throw NewsNotExistsException if the 
	 * news with specified newsId does not exist.
	 */
	public void deleteNews(int newsId) throws NewsNotExistsException {
		News newsById = newsRepo.getOne(newsId);
		if(newsById == null) {
			throw new NewsNotExistsException("Can not Delete the news. The news with "+newsId +" does not exists in the database.");
		}
		newsRepo.deleteById(newsId);
	}

}
