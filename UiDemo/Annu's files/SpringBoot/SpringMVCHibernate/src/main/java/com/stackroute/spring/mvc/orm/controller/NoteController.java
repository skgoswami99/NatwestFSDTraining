package com.stackroute.spring.mvc.orm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.stackroute.spring.mvc.orm.model.Note;

@Controller
@RequestMapping("/")
public class NoteController {
	
	@Autowired
	private com.stackroute.spring.mvc.orm.dao.INoteDAO noteDAO;

//	public NoteController(com.stackroute.spring.mvc.orm.dao.INoteDAO noteDAO)
//	{
//		this.noteDAO=noteDAO;
//	}
	
	@GetMapping("/")
	public ModelAndView getHomePage() {
		ModelAndView modelAndView = new ModelAndView("index");
		modelAndView.addObject("noteList", noteDAO.getAllNote());
		return modelAndView;
	}

	@PostMapping("/saveNote")
	public String saveEmployee(@ModelAttribute("note") Note note, ModelMap modelMap) {

		boolean status = noteDAO.saveNote(note);
		modelMap.addAttribute("noteList", noteDAO.getAllNote());
		return "index";
	}

	@GetMapping("/deleteNote")
	public String deleteEmployee(@RequestParam("noteId") int noteId) {
		noteDAO.deleteNote(noteId);
		return "redirect:/";
	}
}