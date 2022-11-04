package com.ssafy.comssa.dto;

import com.ssafy.comssa.domain.User;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UserResponseDto {
    private String userId;
    private String username;
    private String password;
    private String email;
    private String emailVerifiedYn;
    private String profileImageUrl;

    @Builder
    public UserResponseDto(User user){
        this.userId = user.getUserId();
        this.email = user.getEmail();
        this.username = user.getUsername();
        this.password = user.getPassword();
        this.emailVerifiedYn = user.getEmailVerifiedYn();
        this.profileImageUrl = user.getProfileImageUrl();


    }

}