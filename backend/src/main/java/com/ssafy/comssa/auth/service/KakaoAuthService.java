package com.ssafy.comssa.auth.service;

import com.ssafy.comssa.auth.client.ClientKakao;
import com.ssafy.comssa.auth.dto.AuthRequest;
import com.ssafy.comssa.auth.dto.AuthResponse;
import com.ssafy.comssa.domain.User;
import com.ssafy.comssa.repository.UserRepository;
import com.ssafy.comssa.repository.UserQuerydslRepository;
import com.ssafy.comssa.auth.jwt.AuthToken;
import com.ssafy.comssa.auth.jwt.AuthTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@RequiredArgsConstructor
public class KakaoAuthService {

    private final ClientKakao clientKakao;
    private final UserQuerydslRepository userQuerydslRepository;
    private final AuthTokenProvider authTokenProvider;
    private final UserRepository userRepository;

    @Transactional
    public AuthResponse login(AuthRequest authRequest) {
        User kakaoUser = clientKakao.getUserData(authRequest.getAccessToken());
        String socialId = kakaoUser.getSocialId();
        User user = userQuerydslRepository.findBySocialId(socialId);

        AuthToken appToken = authTokenProvider.createUserAppToken(socialId);

        if (user == null) {
            userRepository.save(kakaoUser);
            return AuthResponse.builder()
                    .appToken(appToken.getToken())
                    .isNewMember(Boolean.TRUE)
                    .build();
        }

        return AuthResponse.builder()
                .appToken(appToken.getToken())
                .isNewMember(Boolean.FALSE)
                .build();
    }
}
