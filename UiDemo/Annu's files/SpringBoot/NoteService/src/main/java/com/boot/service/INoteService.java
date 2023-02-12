package com.boot.service;

import java.util.List;

import com.boot.exception.NoteNotFoundException;
import com.boot.exception.NotealreadyExistsException;
import com.boot.model.Note;

public interface INoteService 
{
  public Note saveNote(Note noteObj) throws NotealreadyExistsException;

  public Note updateNote(Note noteObj,String nid) throws NoteNotFoundException;

  public List<Note> getAllNotes();

  public Note getNoteById(String nid) throws NoteNotFoundException;

  public boolean deleteNote(String nid) throws NoteNotFoundException;
  

}