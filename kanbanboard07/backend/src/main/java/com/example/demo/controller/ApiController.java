package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.JsonResult;
import com.example.demo.repository.CardRepository;
import com.example.demo.repository.TaskRepository;
import com.example.demo.vo.TaskVo;

@RestController
@RequestMapping("/api")
public class ApiController {

	@Autowired
	private CardRepository cardRepository;
	
	@Autowired
	private TaskRepository taskRepository;
	
	@GetMapping("/card")
	public ResponseEntity<JsonResult> readCard() {
		
		System.out.println(cardRepository.findAll());
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(cardRepository.findAll()));
	}
	
	@GetMapping("/card/{no}")
	public ResponseEntity<JsonResult> readTaskList(@PathVariable(value="no") Long cardNo) {
		
		System.out.println(taskRepository.findAll(cardNo));
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskRepository.findAll(cardNo)));
	}

	@PostMapping("/card/insert/{no}") 
	public ResponseEntity<JsonResult> createTask(@PathVariable(value="no") Long cardNo, @RequestBody TaskVo vo) {
		
		taskRepository.insert(vo);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(vo));
	}
	
	@DeleteMapping("/task/delete/{no}")
	public ResponseEntity<JsonResult> deleteTask(@PathVariable(value="no") Long taskNo){
		
		taskRepository.delete(taskNo);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskNo));
	}
	
	@PutMapping("/task/update/{no}")
	public ResponseEntity<JsonResult> updateTask(@PathVariable (value="no") Long taskNo){
		
		taskRepository.update(taskNo);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskNo));
	}
}