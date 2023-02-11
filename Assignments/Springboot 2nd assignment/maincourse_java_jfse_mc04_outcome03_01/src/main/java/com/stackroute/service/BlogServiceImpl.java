package com.stackroute.service;

import com.stackroute.domain.Blog;
import com.stackroute.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BlogServiceImpl implements BlogService{
    private BlogRepository blogRepository;

    @Autowired
    public BlogServiceImpl(BlogRepository blogRep){
        this.blogRepository = blogRep;
    }
    @Override
    public Blog getBlogById(int id) {
        return this.blogRepository.findById(id).get();
    }
    @Override
    public List<Blog> getAllBlogs() {
        List<Blog> result;
        Iterable<Blog> itr = this.blogRepository.findAll();
        if(itr != null){
            result = new ArrayList<>();
            itr.forEach(blog -> result.add(blog));
        }
        else{
            result = null;
        }
        return result;
    }

    @Override
    public Blog deleteBlog(int id) {
        Optional<Blog> find_blog = this.blogRepository.findById(id);
        if(find_blog.isPresent()) {
            this.blogRepository.deleteById(id);
            return this.blogRepository.findById(id).get();
        }
        return null;
    }
    @Override
    public Blog saveBlog(Blog blog) {
        return this.blogRepository.save(blog);
    }
    @Override
    public Blog updateBlog(Blog blog) {
        Optional<Blog> find_blog = this.blogRepository.findById(blog.getBlogId());
        if(find_blog.isPresent()){
            this.blogRepository.save(blog);
            return this.blogRepository.findById(blog.getBlogId()).get();
        }
        return null;
    }
}

