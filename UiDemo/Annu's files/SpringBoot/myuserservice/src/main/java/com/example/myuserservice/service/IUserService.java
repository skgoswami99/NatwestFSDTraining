package com.example.myuserservice.service;

import com.example.myuserservice.model.User;

import java.util.List;

public interface IUserService
{

//    insert user values()
    public User saveUser(User userObj);

//    update user set username = ""
    public User updateUser(User userObj,int uid);

//    Select * from user
    public List<User> getAllUsers();

//    Select * from user where userid = 1
    public User getUserById(int uid);

//    delete from User where userid = 1
    public boolean deleteUser(int uid);

}