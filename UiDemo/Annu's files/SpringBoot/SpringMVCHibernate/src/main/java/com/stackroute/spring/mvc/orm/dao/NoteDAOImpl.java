package com.stackroute.spring.mvc.orm.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.stackroute.spring.mvc.orm.model.Note;

@Repository
@Transactional
public class NoteDAOImpl implements INoteDAO 
{	

	@Autowired
	private SessionFactory sessionFactory;

//	public NoteDAOImpl(SessionFactory sessionFactory)
//	{
//		this.sessionFactory=sessionFactory;
//	}

	
	public boolean saveNote(Note note) 
	{
		try
		{
			this.sessionFactory.getCurrentSession().save(note);
			return true;
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return false;
		}
	}

//	public boolean updateNote(Note note) 
//	{
//		// TODO Auto-generated method stub
//		return false;
//	}

	public boolean deleteNote(int noteId) 
	{
		try
		{
			Note note = this.sessionFactory.getCurrentSession().load(Note.class,noteId);
			this.sessionFactory.getCurrentSession().delete(note);
			return true;
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return false;
		}
	}

//	public Note getNoteById(int noteId) 
//	{
//		// TODO Auto-generated method stub
//		return null;
//	}

	public List<Note> getAllNote() 
	{
		return this.sessionFactory.getCurrentSession().createQuery("from Note").list();
	}
}