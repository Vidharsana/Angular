package com.test.demofood.controller;

import java.util.List;
import java.util.Optional;

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
import org.springframework.web.bind.annotation.RestController;

import com.test.demofood.entity.Food;
import com.test.demofood.service.FoodService;


@RestController
@RequestMapping("/food")
public class FoodController {
	
	@Autowired
	private FoodService foodService;
	
	@PostMapping("/addfood")
	public Food addFood(@RequestBody Food food){
		return foodService.createFood(food);
	}
	
	@GetMapping("/listallfood")
	public ResponseEntity<List<Food>> getAllFood() {
		List<Food> foodlist = foodService.getAllFood();
		return ResponseEntity.ok(foodlist);
	}

	@PutMapping("/updatefood")
	public ResponseEntity<List<Food>> updateFood(@RequestBody Food food) {
		List<Food> updatedfood = foodService.updateFood(food);
		return ResponseEntity.ok(updatedfood);
	}
	@DeleteMapping("/deletebyid/{fid}")
	public ResponseEntity<List<Food>> deletefood(@PathVariable  Long fid) {
		List<Food> existinfood  =foodService.deleteFood(fid);
		return ResponseEntity.ok(existinfood);
	}

	
	
	
	

}
