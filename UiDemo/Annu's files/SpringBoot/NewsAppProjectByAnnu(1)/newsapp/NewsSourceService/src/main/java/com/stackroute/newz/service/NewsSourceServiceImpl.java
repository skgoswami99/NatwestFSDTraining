package com.stackroute.newz.service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.newz.model.NewsSource;
import com.stackroute.newz.repository.NewsSourceRepository;
import com.stackroute.newz.util.exception.NewsSourceNotFoundException;


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
public class NewsSourceServiceImpl implements NewsSourceService {

	/*
	 * Autowiring should be implemented for the NewsDao and MongoOperation.
	 * (Use Constructor-based autowiring) Please note that we should not create any
	 * object using the new keyword.
	 */
	private NewsSourceRepository newsSourceRepository;
	
	@Autowired
	public NewsSourceServiceImpl(NewsSourceRepository newsSourceRepository) {
		this.newsSourceRepository=newsSourceRepository;
	}


	/*
	 * This method should be used to save a newsSource.
	 */

	@Override
	public boolean addNewsSource(NewsSource newsSource) {
		List<NewsSource> srcList = newsSourceRepository.findAll();
		Optional<NewsSource> existSrc = srcList.stream().filter(n->n.getNewsSourceName().equals(newsSource.getNewsSourceName())).findAny();
		if(existSrc.isPresent()) {
			return false;
		}
		if(newsSource!=null) {
			newsSourceRepository.insert(newsSource);
		return true;
		}else {
			return false;
		}
	}


	/* This method should be used to delete an existing newsSource. */

	@Override
	public boolean deleteNewsSource(int newsSourceId) {
		if(newsSourceRepository.findById(newsSourceId)!=null) {
		newsSourceRepository.deleteById(newsSourceId);
		return true;
		}else {
			return false;
		}
	}


	/* This method should be used to update an existing newsSource. */
	
	@Override
	public NewsSource updateNewsSource(NewsSource newsSource, int newsSourceId) throws NewsSourceNotFoundException {
		Optional<NewsSource> result =  newsSourceRepository.findById(newsSourceId);
		if(result.isPresent()) {
			NewsSource newsSourceObj = result.get();
			newsSourceObj=newsSource;
			newsSourceRepository.save(newsSourceObj);
			return newsSourceObj;
		}else {
			throw new NewsSourceNotFoundException("Exception Occurred in updateNewsSource");
		}
	}


	/* This method should be used to get a specific newsSource for an user. */

	@Override
	public NewsSource getNewsSourceById(String userId, int newsSourceId) throws NewsSourceNotFoundException {
		try {
			List<NewsSource> nSourceObj = newsSourceRepository.findAllNewsSourceByNewsSourceCreatedBy(userId);
			return nSourceObj.stream().filter(n->n.getNewsSourceId()==newsSourceId).findAny().get();
		} catch (NoSuchElementException e) {
			//throw new NewsSourceNotFoundException("Exception Occurred in getNewsSourceById");
			return null;
		}
		
	}


	
	 /* This method should be used to get all newsSource for a specific userId.*/

	@Override
	public List<NewsSource> getAllNewsSourceByUserId(String createdBy) {
		return newsSourceRepository.findAllNewsSourceByNewsSourceCreatedBy(createdBy);
		
	}


}
