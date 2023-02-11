package com.stackroute.service;

import com.stackroute.domain.Blog;

import java.util.List;

public interface BlogService {
    Blog saveBlog(Blog blog);
    List<Blog> getAllBlogs();
    Blog getBlogById(int id);
    Blog deleteBlog(int id);
    Blog updateBlog(Blog blog);
}
