package com.ssafy.comssa.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class KakaoUserResponse {

    private Long id;
    private Properties properties;
    private KakaoAccount kakaoAccount;

    @ToString
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Properties {
        private String nickname;
//        private String profileImage;
    }

    @ToString
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class KakaoAccount {
        private String email;
        private String gender;
    }
}
