package com.ssafy.comssa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication(
		exclude={DataSourceAutoConfiguration.class}
////		,scanBasePackages = {"com.ssafy.comssa.repository"}
)
@RestController
@CrossOrigin(origins="*")
public class BackendApplication {

	public static void main(String[] args) {
		System.out.println("hello fucking world");
		SpringApplication.run(BackendApplication.class, args);
		System.out.println("shut down fucking world");
	}

}
