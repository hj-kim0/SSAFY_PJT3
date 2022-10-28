package com.ssafy.comssa.repository;

import com.mongodb.client.model.Projections;
import com.ssafy.comssa.domain.User;
import com.nimbusds.openid.connect.sdk.UserInfoResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import com.ssafy.comssa.dto.UserInfoResponse;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.transaction.annotation.Transactional;

import static com.depromeet.breadmapbackend.flags.domain.QFlags.flags;
import static com.depromeet.breadmapbackend.members.domain.QMembers.members;

@Repository
@RequiredArgsConstructor
public class UserQuerydslRepository {

    private final JPAQueryFactory jpaQueryFactory;

    @Transactional(readOnly = true)
    public User findBySocialId(String socialId) {
        return jpaQueryFactory
                .selectFrom(user)
                .where(user.socialId.eq(socialId))
                .fetchOne();
    }

    public UserInfoResponse findByUserId(Long userId) {
        return jpaQueryFactory
                .select(Projections.fields(UserInfoResponse.class,
                        user.name.as("nickName"),
                        user.email))
                .from(user)
                .where(user.id.eq(userId))
                .fetchOne();
    }
}
