package com.shraddha.mescoe.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shraddha.mescoe.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

}
