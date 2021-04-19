package com.shraddha.mescoe.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shraddha.mescoe.model.*;
import com.shraddha.mescoe.repository.*;
//import com.example.shraddhabackend.model.*;
//import com.example.shraddhabackend.repository.*;
import com.shraddha.mescoe.model.Student;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class StudentController {

	@Autowired
	private com.shraddha.mescoe.repository.StudentRepository studentRepository;
	@GetMapping("/students")
	public List<Student> getAllStudent(){
		return studentRepository.findAll();
	}
	
}
