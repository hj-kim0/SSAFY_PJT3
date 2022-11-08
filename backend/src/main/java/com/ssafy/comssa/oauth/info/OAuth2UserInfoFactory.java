package com.ssafy.comssa.oauth.info;

import com.ssafy.comssa.oauth.entity.ProviderType;
import com.ssafy.comssa.oauth.info.impl.KakaoOAuth2UserInfo;
import com.ssafy.comssa.oauth.info.impl.NaverOAuth2UserInfo;

import java.util.Map;

public class OAuth2UserInfoFactory {
    public static OAuth2UserInfo getOAuth2UserInfo(ProviderType providerType, Map<String, Object> attributes) {
        switch (providerType) {
            case NAVER: return new NaverOAuth2UserInfo(attributes);
            case KAKAO: return new KakaoOAuth2UserInfo(attributes);
            default: throw new IllegalArgumentException("Invalid Provider Type.");
        }
    }
}

