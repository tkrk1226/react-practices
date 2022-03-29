package com.example.demo.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.vo.TaskVo;

@Repository
public class TaskRepository {

	@Autowired
	private SqlSession sqlSession;
	
	public List<TaskVo> findAll(Long cardNo) {
		return sqlSession.selectList("task.findAll", cardNo);
	}
	
	public Boolean insert(TaskVo vo) {
		return sqlSession.insert("task.insert", vo) == 1;
	}

	public Boolean delete(Long taskNo) {
		return sqlSession.delete("task.delete", taskNo) == 1;
	}

	public Boolean update(TaskVo vo) {
		
		if("Y".equals(vo.getDone())) {
			vo.setDone("N");
		} else {
			vo.setDone("Y");
		}
		
		return sqlSession.update("task.update", vo) == 1;
	}
	
}
