package com.boot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boot.exception.NoteNotFoundException;
import com.boot.exception.NotealreadyExistsException;
import com.boot.model.Note;
import com.boot.service.INoteService;

@RestController
@RequestMapping("api/v1")
public class NoteController 
{
	
	@Autowired
	private INoteService noteservice;
	
	private ResponseEntity<?> responseentity;
	
	
	
	@PostMapping("/addNote")
	public ResponseEntity<?> addNoteHandler(@RequestBody Note noteObj)
	{
		Note notecreated=null;
		try {
			
			notecreated = this.noteservice.saveNote(noteObj);
					
			responseentity = new ResponseEntity(notecreated,HttpStatus.CREATED);

			if(notecreated == null)
			{
				throw new NotealreadyExistsException();
			}
			
		} catch (NotealreadyExistsException e) {
			// TODO Auto-generated catch block
			
			System.out.println("Error ..........."+ e.getMessage());
			
			e.printStackTrace();
			
			responseentity = new ResponseEntity("Note Tryng to add already exists ",HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return responseentity;
	}
	

	@GetMapping("/getUDetails")
	public ResponseEntity<?> getAllNoteHandler()
	{
		responseentity = new ResponseEntity(this.noteservice.getAllNotes(),HttpStatus.OK);
		return responseentity;
	}
	
	@GetMapping("/getNoteById/{nid}")
	public ResponseEntity<?> getNoteByIdHandler(@PathVariable String nid)
	{
		Note nObj=null;
		try {
			nObj = this.noteservice.getNoteById(nid);
		} catch (NoteNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		responseentity = new ResponseEntity(nObj,HttpStatus.OK);
		return responseentity;
	}
	
	@DeleteMapping("/delNoteById/{nid}")
	public ResponseEntity<?> deleteNoteByIdHandler(@PathVariable String nid) throws NoteNotFoundException
	{
		boolean status = this.noteservice.deleteNote(nid);
		responseentity = new ResponseEntity("Note deleted successfully !!!",HttpStatus.OK);
		return responseentity;
	}
	

	@PutMapping("/updateNoteById/{nid}")
	public ResponseEntity<?> updateNoteByIdHandler(@RequestBody Note noteObj, @PathVariable String nid) throws NoteNotFoundException
	{
		Note nObj = this.noteservice.updateNote(noteObj,nid);
		responseentity = new ResponseEntity(nObj,HttpStatus.OK);
		return responseentity;
	}
}