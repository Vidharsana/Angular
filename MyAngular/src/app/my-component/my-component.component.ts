import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class MyComponentComponent {
  sum : number;
  sub : number;
  constructor(private calc : CalculatorService){
    this.sum = calc.getAddition(10,20);
    this.sub = calc.getSubtraction(10,20);
  }
}
