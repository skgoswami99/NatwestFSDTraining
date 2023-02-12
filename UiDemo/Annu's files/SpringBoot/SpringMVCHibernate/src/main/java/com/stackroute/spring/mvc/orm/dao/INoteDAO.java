package com.stackroute.spring.mvc.orm.dao;

import java.util.List;

import com.stackroute.spring.mvc.orm.model.Note;

public interface INoteDAO 
{
	public boolean saveNote(Note note);

	public boolean deleteNote(int noteId);
	
	public List<Note> getAllNote();
}
