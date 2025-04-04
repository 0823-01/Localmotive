package com.dh.Localmotive.controller;

import com.dh.Localmotive.entity.User;
import com.dh.Localmotive.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @ResponseBody
    @GetMapping("/user")
    public List<User> userApi() {

        return userService.getUserApi();
    }
}
