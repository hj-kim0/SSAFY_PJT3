package com.ssafy.comssa.controller;

import com.depromeet.breadmapbackend.auth.jwt.JwtHeaderUtil;
import com.depromeet.breadmapbackend.common.dto.ApiResponse;
import com.depromeet.breadmapbackend.members.dto.ProfileBakeryResponse;
import com.ssafy.comssa.dto.User.UserInfo;
import com.ssafy.comssa.dto.User.UserInfoResponse;
import com.ssafy.comssa.service.UserService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;


@Slf4j
@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
    /**
     * 현재 로그인한 유저의 정보 조회
     * @param request
     * @return ResponseEntity<UserInfoResponse>
     */
    @ApiOperation(value = "로그인한 유저의 정보 조회", notes = "로그인한 유저의 정보 조회")
    @GetMapping("/info")
    public ResponseEntity<UserInfoResponse> getUserInfo(HttpServletRequest request) {
        String token = JwtHeaderUtil.getAccessToken(request);
        return ApiResponse.success(UserService.getUserInfo(token));
    }

    /**
     * 현재 로그인한 유저의 프로필이미지 & 닉네임 변경 기능
     * @param request
     * @param userInfo
     */
    @ApiOperation(value = "현재 로그인한 유저의 프로필이미지 & 닉네임 변경 기능", notes = "현재 로그인한 유저의 프로필이미지 & 닉네임 변경 기능")
    @PutMapping("/info")
    public ResponseEntity<UserInfo> updateUserInfo(HttpServletRequest request, @RequestBody UserInfo userInfo) {
        String token = JwtHeaderUtil.getAccessToken(request);
        return ApiResponse.success(UserService.updateUserInfo(token, userInfo));
    }
}
