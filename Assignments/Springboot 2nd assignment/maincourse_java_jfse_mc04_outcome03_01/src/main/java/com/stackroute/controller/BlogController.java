package com.stackroute.controller;

import com.stackroute.domain.Blog;
import com.stackroute.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class BlogController {
    private BlogService blogService;

    @Autowired
    public BlogController(BlogService blogService){
        this.blogService = blogService;
    }

    @PostMapping("/blog")
    public ResponseEntity<Blog> saveBlog(@RequestBody Blog blog) {
        return new ResponseEntity<>(this.blogService.saveBlog(blog), HttpStatus.CREATED);
    }

    @GetMapping("/blogs")
    public ResponseEntity<List<Blog>> getAllBlogs() {
        return new ResponseEntity<>(this.blogService.getAllBlogs(), HttpStatus.OK);
    }

    @GetMapping("/blog/{id}")
    public ResponseEntity<Blog> getBlogById(@PathVariable int id){
        return new ResponseEntity<>(this.blogService.getBlogById(id), HttpStatus.FOUND);
    }

    @DeleteMapping("/blog/{id}")
    public ResponseEntity<Blog> getBlogAfterDeleting(@PathVariable int id) {
        return new ResponseEntity<>(this.blogService.deleteBlog(id), HttpStatus.OK);
    }

    @PutMapping("/blog")
    public ResponseEntity<Blog> updateBlog(@RequestBody Blog blog) {
        return new ResponseEntity<>(this.blogService.updateBlog(blog), HttpStatus.OK);
    }
}