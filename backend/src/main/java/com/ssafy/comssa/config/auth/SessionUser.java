package com.ssafy.comssa.config.auth;

import com.ssafy.comssa.domain.User;
import lombok.Getter;

import java.io.Serializable;

//User클래스를 그대로 사용하면 직렬화를 구현하지 않았기 때문에 에러가 발생한다. 그래서 직렬화된 SessionUser클래스 만들어준다.
@Getter
public class SessionUser implements Serializable {
    private String name;
    private String email;
    private String picture;

    public SessionUser(User user) {
        this.name = user.getName();
        this.email = user.getEmail();
        this.picture = user.getPicture();
    }
}
