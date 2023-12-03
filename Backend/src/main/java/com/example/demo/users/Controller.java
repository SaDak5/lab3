package com.example.demo.users;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin("*")
@RestController
public class Controller {

	public String getMsg() {
		return "sadak aziz mghirbi";
	}
}
