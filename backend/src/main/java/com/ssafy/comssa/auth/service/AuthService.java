package com.ssafy.comssa.auth.service;

import com.ssafy.comssa.auth.dto.AuthResponse;
import com.ssafy.comssa.auth.jwt.AuthToken;
import com.ssafy.comssa.auth.jwt.AuthTokenProvider;
import com.ssafy.comssa.domain.User;
import com.ssafy.comssa.repository.UserQuerydslRepository;
import io.jsonwebtoken.Claims;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final AuthTokenProvider authTokenProvider;
    private final UserQuerydslRepository userQuerydslRepository;

    public AuthResponse updateToken(AuthToken authToken) {
        Claims claims = authToken.getTokenClaims();
        if (claims == null) {
            return null;
        }

        String socialId = claims.getSubject();

        AuthToken newAppToken = authTokenProvider.createUserAppToken(socialId);

        return AuthResponse.builder()
                .appToken(newAppToken.getToken())
                .build();
    }

    public Long getMemberId(String token) {
        AuthToken authToken = authTokenProvider.convertAuthToken(token);

        Claims claims = authToken.getTokenClaims();
        if (claims == null) {
            return null;
        }

        try {
            User user =  userQuerydslRepository.findBySocialId(claims.getSubject());
            return user.getId();

        } catch (NullPointerException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "사용자가 존재하지 않습니다.");
        }
    }
}
