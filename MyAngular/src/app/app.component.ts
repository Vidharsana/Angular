
import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';
import { FactorailService } from './factorail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  sum : number;
  n : number;
  constructor(private calc : CalculatorService,private fact : FactorailService){
    this.sum = calc.getAddition(10,20);
    this.n = fact.getFactorial(3);
  }
}

/**
export class AppComponent {
    flag : boolean;
    vehicles : string[];
    selectedVehicle : string = "";
    myStyle : {};
    myClass : string;

    constructor(){
      this.flag = true;
      this.vehicles = ["TwoWheeler" , "ThreeWheeler" , "FourWheeler"];
      this.myStyle = {'width' : '20%' , 'border' : '2px solid blue'};
      this.myClass = "MyClass1";
    }

    changeFlag(){
      this.flag = ! this.flag;
    }
    setSelectedItem(vec : string){
      this.selectedVehicle = vec;
    }
    changeClass(){
      this.myClass = "MyClass2";
    }

}


  name : string;
  age : number;
  email : string;
  txtColor : string;
  imgPath : string;
  fname : string = "";

  constructor(){
    this.name = "Vidhu";
    this.age = 20;
    this.email = "vidhu@gmail.com";
    this.txtColor = "blue";
    this.imgPath = "./assets/logo1.png";
  }

  getAddition(a : number, b : number){
    let sum = a + b;
    return sum;
  }

  changeName(){
    this.name = "Ani";
  }
  changeAge(){
    this.age = 25;
  }
  changeEmail(){
    this.email = "ani@gmail.com";
  }
  changeImage(){
      this.imgPath = "./assets/logo2.png";
  }
}
*/


