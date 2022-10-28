package com.ssafy.comssa.service;

import com.ssafy.comssa.auth.service.AuthService;
import com.ssafy.comssa.domain.User;
import com.ssafy.comssa.dto.User.UserInfo;
import com.ssafy.comssa.dto.User.UserInfoResponse;
import com.ssafy.comssa.repository.UserQuerydslRepository;
import com.ssafy.comssa.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class UserService {
    private final UserQuerydslRepository userQuerydslRepository;
    private final UserRepository userRepository;
    private final AuthService authService;
    @Transactional(readOnly = true)
    public UserInfoResponse getUserInfo(String token) {
        Long userId = authService.getUserId(token);

        return Optional.ofNullable(userQuerydslRepository.findByUserId(userId))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "해당 유저 정보가 존재하지 않습니다."));
    }

    public UserInfo updateUserInfo(String token, UserInfo userInfo) {
        Long userId = authService.getUserId(token);

        User user = Optional.ofNullable(userRepository.findUserById(userId))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "해당 유저 정보가 존재하지 않습니다."));

        // TODO 추후 닉네임 지정 기능 생기면 그때는 닉네임 빈칸 막을지 고려 필요
        if(userInfo.getNickName() == null || userInfo.getNickName().equals("")) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "닉네임이 누락되어 수정이 불가능합니다.");
        }

        user.updateName(userInfo.getNickName());

        return UserInfo.builder()
                .nickName(user.getName())
                .build();
    }
}
