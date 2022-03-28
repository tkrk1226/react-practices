package com.example.demo.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class EmaillistVo {
	private Long no;
	private String firstName;
	private String lastName;
	private String email;
	
	public EmaillistVo(Long no, String firstName, String lastName, String email) {
		this.no = no;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
	}
	
}
