package com.ssafy.comssa.service.user;


import com.ssafy.comssa.entity.User;
import com.ssafy.comssa.dto.user.UserResponseDto;

public interface UserService {

    UserResponseDto getUser();
    User getUserEntity();

}
