import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFoodComponent } from './add-food/add-food.component';
import { FoodListComponent } from './food-list/food-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/food-list', pathMatch: 'full' },
  { path: 'add-food', component: AddFoodComponent },
  { path: 'food-list', component: FoodListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
