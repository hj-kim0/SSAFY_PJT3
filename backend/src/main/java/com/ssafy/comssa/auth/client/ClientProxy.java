package com.ssafy.comssa.auth.client;

import com.ssafy.comssa.domain.User;
public interface ClientProxy {
    User getUserData(String accessToken);
}
