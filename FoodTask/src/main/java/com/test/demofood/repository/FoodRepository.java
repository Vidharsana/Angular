package com.test.demofood.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.test.demofood.entity.Food;

@Repository
public interface FoodRepository extends JpaRepository<Food ,Long>{

}
