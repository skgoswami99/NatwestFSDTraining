package com.boot.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Note 
{
	@Id
	private String noteId;
	
	private String noteTitle;
	private String noteDesc;
	private String noteCategory;
	
	public String getNoteId() {
		return noteId;
	}
	public void setNoteId(String noteId) {
		this.noteId = noteId;
	}
	public String getNoteTitle() {
		return noteTitle;
	}
	public void setNoteTitle(String noteTitle) {
		this.noteTitle = noteTitle;
	}
	public String getNoteDesc() {
		return noteDesc;
	}
	public void setNoteDesc(String noteDesc) {
		this.noteDesc = noteDesc;
	}
	public String getNoteCategory() {
		return noteCategory;
	}
	public void setNoteCategory(String noteCategory) {
		this.noteCategory = noteCategory;
	}
	
	@Override
	public String toString() {
		return "Note [noteId=" + noteId + ", noteTitle=" + noteTitle + ", noteDesc=" + noteDesc + ", noteCategory="
				+ noteCategory + "]";
	}
}
