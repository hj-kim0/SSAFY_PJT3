package com.ssafy.comssa.repository;

import com.ssafy.comssa.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findUserById(Long userId);
}
