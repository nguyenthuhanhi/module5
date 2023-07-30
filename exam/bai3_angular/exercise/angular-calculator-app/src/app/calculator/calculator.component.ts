import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: number;


  constructor() { }

  ngOnInit(): void {
  }

  caculatorAction(number1, number2, action){
     let Number1= Number.parseFloat(number1);
     let Number2= Number.parseFloat(number2);

     switch (action){
       case "+":
          this.result= Number1+Number2;
          break;
         case "-":
           this.result= Number1+Number2;
          break;
         case "*":
           this.result= Number1+Number2;
           break;
         case "/":
           this.result= Number1+Number2;
           break;
     }


  }


}
