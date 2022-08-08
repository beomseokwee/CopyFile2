package com.example.Base;

import com.example.Base.domain.dto.UserDTO;
import com.example.Base.domain.entity.CategoryEntity;
import com.example.Base.domain.entity.RoleEntity;
import com.example.Base.service.CategoryService;
import com.example.Base.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class BaseApplication {

	public static void main(String[] args) {
		SpringApplication.run(BaseApplication.class, args);
	}

	@Bean
	PasswordEncoder passwordEncoder() { //application실행 할 떄 마다
		return new BCryptPasswordEncoder();
	}

	@Bean //spring이 pickup하게
	CommandLineRunner run(UserService userService, CategoryService categoryService) {
		return args -> {
			userService.saveRole(new RoleEntity(null, "ROLE_USER"));
			userService.saveRole(new RoleEntity(null, "ROLE_HELPER"));
			userService.saveRole(new RoleEntity(null, "ROLE_ADMIN"));

			userService.saveUser(new UserDTO(null , "user","user@gmail.com","1234","ROLE_USER"));
			userService.saveUser(new UserDTO(null , "helper","helper@gmail.com","1234","ROLE_HELPER"));
			userService.saveUser(new UserDTO(null , "admin","admin@gmail.com","1234","ROLE_ADMIN"));
			userService.saveUser(new UserDTO(null, "winter", "winter@beomseok.com", "010101","ROLE_ADMIN"));

			categoryService.create(new CategoryEntity(null, "편의점 알바", 4.4, 123, 456, 789, "/images/4.jpg"));
		};
	}
}
