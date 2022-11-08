package com.ssafy.comssa.controller;



import com.ssafy.comssa.dto.ApiResponse;
import com.ssafy.comssa.dto.UserResponseDto;
import com.ssafy.comssa.service.UserService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user")
@CrossOrigin("*")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping
    @ApiOperation(value="유저 정보 가져오기", notes="딱히 넘겨줄 것 없음")
    public ApiResponse getUser() {
        UserResponseDto userdto = userService.getUser();
        return ApiResponse.success("user", userdto);
    }

}

