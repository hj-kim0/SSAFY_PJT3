package com.ssafy.comssa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
<<<<<<< HEAD
import com.ssafy.comssa.config.AppProperties;
import com.ssafy.comssa.config.CorsProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableConfigurationProperties({
		CorsProperties.class,
		AppProperties.class
})
@SpringBootApplication
@EnableJpaAuditing
=======
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;


import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication(
		exclude={DataSourceAutoConfiguration.class}
////		,scanBasePackages = {"com.ssafy.comssa.repository"}
)
@RestController
>>>>>>> 23fcd63e8ef371ba97e13444ebcee11451668734
public class BackendApplication {
	public static void main(String[] args) {
		System.out.println("hello fucking world");
		SpringApplication.run(BackendApplication.class, args);
		System.out.println("shut down fucking world");
	}

}
