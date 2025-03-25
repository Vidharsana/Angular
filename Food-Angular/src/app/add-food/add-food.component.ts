import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';  
import { FoodService } from '../food.service';  
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-food',
  standalone: true,
  imports: [CommonModule, FormsModule],  
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})

export class AddFoodComponent {
  foodName: string = '';
  foodId: number = 0;
  message: string = '';

  constructor(private foodService: FoodService) { }

  addFood() {
    if (this.foodName && this.foodId) {
      const newFood = { food_id: this.foodId, food_name: this.foodName };
  
      this.foodService.addFood(newFood).subscribe(
        (response: any) => {
          this.message = `Food added successfully: ${response.food_name}`;
        },
        (error: HttpErrorResponse) => {
          console.error('HTTP Error:', error); 
          this.message = `Error adding food: ${error.message || 'Unknown error'}`;
        }
      );
    } else {
      this.message = 'Please enter food name and ID.';
    }
  }
}
