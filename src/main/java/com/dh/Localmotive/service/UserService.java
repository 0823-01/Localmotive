package com.dh.Localmotive.service;

import com.dh.Localmotive.entity.User;
import com.dh.Localmotive.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getUserApi() {

        return userRepository.findAll();
    }
}
