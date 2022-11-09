package com.ssafy.comssa.service.user;

import com.ssafy.comssa.entity.User;
import com.ssafy.comssa.dto.user.UserResponseDto;
import com.ssafy.comssa.repository.user.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    private final ModelMapper modelMapper;

    public UserServiceImpl(UserRepository userRepository, ModelMapper modelMapper) {
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public UserResponseDto getUser() {
//        org.springframework.security.core.userdetails.User principal = (org.springframework.security.core.userdetails.User) SecurityContextHolder
//                .getContext().getAuthentication().getPrincipal();
//        User user = userRepository.findByUserId(principal.getUsername());

//        Authentication loggedInUser = SecurityContextHolder.getContext().getAuthentication();
//        System.out.println(loggedInUser);
//        String username = loggedInUser.getName();
//        System.out.println(username);
//        User user = userRepository.findByUserId((username));

        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username;
        if (principal instanceof UserDetails) {
            username = ((UserDetails)principal).getUsername();
        } else {
            username = principal.toString();
        }
                System.out.println(username);

        User user = userRepository.findByUserId((username));

        return modelMapper.map(user, UserResponseDto.class);
    }

    @Override
    public User getUserEntity() {
        org.springframework.security.core.userdetails.User principal = (org.springframework.security.core.userdetails.User) SecurityContextHolder
                .getContext().getAuthentication().getPrincipal();
        User user = userRepository.findByUserId(principal.getUsername());
        return user;
    }
}
