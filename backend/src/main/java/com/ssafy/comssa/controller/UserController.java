package com.ssafy.comssa.controller;


import com.ssafy.comssa.domain.User;
import com.ssafy.comssa.dto.ApiResponse;
import com.ssafy.comssa.dto.UserResponseDto;
import com.ssafy.comssa.oauth.entity.UserPrincipal;
import com.ssafy.comssa.service.UserService;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("")
    public ApiResponse<UserResponseDto> getUser(UserPrincipal principal) {
//        org.springframework.security.core.userdetails.User principal = (org.springframework.security.core.userdetails.User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//        User principal = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        User user = userService.getUser(principal.getUsername());
        User user = userService.getUser(principal.getUserId());

        return ApiResponse.success("user", new UserResponseDto(user));
    }
}
