package com.stackroute.newz.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.stackroute.newz.dao.NewsDAO;
import com.stackroute.newz.model.News;

/*
 * Annotate the class with @Controller annotation. @Controller annotation is used to mark 
 * any POJO class as a controller so that Spring can recognize this class as a Controller
 */
@Controller
public class NewsController {
	
	/*
	 * From the problem statement, we can understand that the application requires
	 * us to implement the following functionalities.
	 * 
	 * 1. display the list of existing news from the persistence data. Each news element
	 * should contain News Name, News Author, description, content and published date. 
	 * 2. Add a new news which should contain the News Name, News Author, description, content and 
	 * published date. 
	 * 3. Delete an existing news 
	 * 4. Update an existing news
	 * 
	 */

	/*
	 * Autowiring should be implemented for the NewsDAO.
	 * Create a News object.
	 */
	@Autowired
	private NewsDAO newsDao;
	
	/*
	 * Define a handler method to read the existing news from the database and add
	 * it to the ModelMap which is an implementation of Map, used when building
	 * model data for use with views. it should map to the default URL i.e. "/"
	 */
	@GetMapping("/")
	public String readNews(ModelMap map){
		map.addAttribute("AllNews", newsDao.getAllNews());
		map.addAttribute("NewsById", newsDao.getNewsById(0));
		return "index";
	}

	/*
	 * Define a handler method which will read the News Name, News Author, description, 
	 * content from request parameters and save the news in news table in
	 * database. Please note that the publishedAt should always be auto populated with
	 * system time and should not be accepted from the user. Also, after saving the
	 * news, it should show the same along with existing news items. Hence, this handler
	 * method should redirect to the default URL i.e. "/".
	 */
	@PostMapping("/add")
	public String addNews(@RequestParam("name") String name, @RequestParam("author") String author,
						@RequestParam("description") String description, 
						@RequestParam("content") String content, ModelMap map) {
		Integer newsId = (Integer) map.get("NewsById");
		if(newsId == null) {
			Boolean ifNewsSaved = newsDao.addNews(new News(name, author, description, content));
			if(ifNewsSaved ==  true)
				return "redirect:/";
			else
				return "index";
		}
		else {
			News newsToUpdate = newsDao.getNewsById(newsId);
			newsToUpdate.setNewsId(newsId);
			newsToUpdate.setName(name);
			newsToUpdate.setAuthor(author);
			newsToUpdate.setContent(content);
			newsToUpdate.setDescription(description);
			Boolean ifNewsUpdated = newsDao.updateNews(newsToUpdate);
			if(ifNewsUpdated ==  true)
				return "/";
			else
				return "index";
		}
	}

	/*
	 * Define a handler method which will read the newsId from request parameters
	 * and remove an existing news by calling the deleteNews() method of the
	 * NewsRepository class.This handler method should map to the URL "/delete". Post 
	 * deletion, the handler method should be redirected to the default URL i.e. "/"
	 */
	@RequestMapping(value="/delete", method = {RequestMethod.GET, RequestMethod.POST})
	public String deleteNews(@RequestParam(value = "newsId") int newsId) {
		Boolean ifNewsDeleted = newsDao.deleteNews(newsId);
		if(ifNewsDeleted == true)
			return "redirect:/";
		else
			return "/";
	}
	
	/*
	 * Define a handler method which will update the existing news. This handler
	 * method should map to the URL "/update".
	 */
	@RequestMapping(value="/update", method = {RequestMethod.GET, RequestMethod.POST})
	public String updateNews(@RequestParam(value = "newsId", required = false) int newsId, ModelMap map) {
		map.addAttribute("NewsById", newsDao.getNewsById(newsId));
		return "index";
	}

}