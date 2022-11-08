package com.ssafy.comssa.service;


import com.ssafy.comssa.entity.User;
import com.ssafy.comssa.dto.UserResponseDto;

public interface UserService {

    UserResponseDto getUser();
    User getUserEntity();

}
