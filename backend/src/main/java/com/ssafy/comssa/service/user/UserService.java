package com.ssafy.comssa.service.user;

import com.ssafy.comssa.advice.assertThat.DefaultAssert;
import com.ssafy.comssa.config.security.token.UserPrincipal;
import com.ssafy.comssa.domain.entity.user.User;
import com.ssafy.comssa.dto.auth.response.ApiResponse;
import com.ssafy.comssa.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserService {
    private final UserRepository userRepository;

    public ResponseEntity<?> readByUser(UserPrincipal userPrincipal){
        Optional<User> user = userRepository.findById(userPrincipal.getId());
        DefaultAssert.isOptionalPresent(user);
        ApiResponse apiResponse = ApiResponse.builder().check(true).information(user.get()).build();
        return ResponseEntity.ok(apiResponse);
    }
}
