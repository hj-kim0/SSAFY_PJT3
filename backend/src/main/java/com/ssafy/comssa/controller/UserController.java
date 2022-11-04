package com.ssafy.comssa.controller;


import com.ssafy.comssa.domain.User;
import com.ssafy.comssa.dto.ApiResponse;
import com.ssafy.comssa.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping
    public ApiResponse getUser() {
        org.springframework.security.core.userdetails.User p = (org.springframework.security.core.userdetails.User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//        userService.getUser(user.getUserId());
        User user = userService.getUser(p.getUsername());
        return ApiResponse.success("user", user);
    }
}
