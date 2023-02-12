package com.boot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boot.exception.NoteNotFoundException;
import com.boot.exception.NotealreadyExistsException;
import com.boot.model.Note;
import com.boot.repository.INoteRepository;

@Service
public class NoteServiceImpl implements INoteService 
{
	@Autowired
	private INoteRepository noterepository;

	@Override
	public Note saveNote(Note noteObj) throws NotealreadyExistsException
	{
		Optional<Note> noteOptional = this.noterepository.findById(noteObj.getNoteId());

		Note nObj=null;
		
		
			if(noteOptional.isPresent())
			{
				throw new NotealreadyExistsException();
			}
			else
			{
				nObj = this.noterepository.save(noteObj);
			}
	        
        return nObj;
	}

	@Override
	public Note updateNote(Note noteObj, String nid) {
		
    	Optional<Note> noteOptional = this.noterepository.findById(nid);

    	Note nObj = null;
    	Note updatedData = null;
    	
    	try
    	{
    		if(noteOptional.isPresent())
    		{
    			System.out.println("Record Exists and ready for Update !!!");
        	
    			nObj = noteOptional.get();
 
    			nObj.setNoteTitle(noteObj.getNoteTitle());
    			nObj.setNoteDesc(noteObj.getNoteDesc());
        	
    			updatedData = this.noterepository.save(nObj);
    		}
    		else
    		{
    			throw new NoteNotFoundException();
    		}
        }
    	catch(NoteNotFoundException nnfe)
    	{
    		System.out.println(nnfe.getMessage());
    	}
    	
        return updatedData;		
	}

	@Override
	public List<Note> getAllNotes() {
		return this.noterepository.findAll();
	}

	@Override
	public Note getNoteById(String nid) {
		 Optional<Note> noteOptional = this.noterepository.findById(nid);

		 Note nObj=null;
		 
		 try
		 {
	           
	        if(noteOptional.isPresent())
	        {
	        	nObj = noteOptional.get();
	        }
	        else
	        {
	        	throw new NoteNotFoundException();
	        }
		 }
		 catch(NoteNotFoundException nnfe)
		 {
			 System.out.println(nnfe.getMessage());
		 }
	        return nObj;
	}

	@Override
	public boolean deleteNote(String nid) {
		Optional<Note> noteOptional = this.noterepository.findById(nid);

        boolean deleteStatus = false;
      try
      {
    	  if(noteOptional.isPresent())
    	  {
    		  this.noterepository.delete(noteOptional.get());
    		  deleteStatus = true;
    	  }
    	  else
    	  {
    		  throw new NoteNotFoundException();
    	  }
      }
      catch(NoteNotFoundException nnfe)
      {
		 System.out.println(nnfe.getMessage());
	 }

        return deleteStatus;
	}
}