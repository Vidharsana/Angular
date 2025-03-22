import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-list',
  standalone: true,  
  imports: [CommonModule],  
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: any[] = [];

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.fetchFoodList();
  }

  fetchFoodList() {
    this.foodService.getFoodList().subscribe(
      (foods) => {
        this.foodList = foods;
      },
      (error) => {
        console.error('Error fetching food list:', error);
      }
    );
  }
}
