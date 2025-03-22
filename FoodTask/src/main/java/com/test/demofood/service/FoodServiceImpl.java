package com.test.demofood.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.test.demofood.entity.Food;
import com.test.demofood.repository.FoodRepository;

@Service

public class FoodServiceImpl implements FoodService {

	@Autowired
	FoodRepository foodRepository;
	@Override
	public Food createFood(Food food) {
		return foodRepository.save(food);
		
	}

	@Override
	public List<Food> getAllFood() {
		return foodRepository.findAll();
	}

	@Override
	public List<Food> updateFood(Food food) {
		foodRepository.save(food);
		return getAllFood();
	}

	@Override
	public List<Food> deleteFood(Long fid) {
		foodRepository.deleteById(fid);
		return getAllFood();
	}

	



}
