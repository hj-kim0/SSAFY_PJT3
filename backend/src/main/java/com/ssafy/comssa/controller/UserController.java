package com.ssafy.comssa.controller;



import com.ssafy.comssa.domain.User;
import com.ssafy.comssa.exception.ResourceNotFoundException;
import com.ssafy.comssa.repository.UserRepository;
import com.ssafy.comssa.security.CurrentUser;
import com.ssafy.comssa.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        return userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
    }
}
