package com.test.demofood.service;

import java.util.List;
import java.util.Optional;

import com.test.demofood.entity.Food;

public interface FoodService {
	
	public Food createFood(Food food);
	public List<Food> getAllFood();
	public List<Food> updateFood(Food food);
	public List<Food> deleteFood(Long fid);
	
	
	
	

}
