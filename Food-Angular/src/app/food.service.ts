import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Food {
  food_id: number;
  food_name: string;
}

@Injectable({
  providedIn: 'root'  
})
export class FoodService {

  private apiUrl = 'http://localhost:8180/api/food';  

  constructor(private http: HttpClient) { }

  
  addFood(food: Food): Observable<Food> {
    return this.http.post<Food>(this.apiUrl, food);
  }
  
  getFoodList(): Observable<Food[]> {
    return this.http.get<Food[]>(this.apiUrl);
  }
}
