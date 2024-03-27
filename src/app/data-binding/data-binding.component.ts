import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  public age: number = 20;

  public name: string = "Kumar";

  public idnian: boolean = true;

  public ages: number[] = [10, 20, 30, 40, 50,];

  public states: string[] = ["AP", "KA", "TN", "KL", "MH"];

  public cities: string[] = ["hyderabad", "kukatpally", "kphb", "andhra"];

  public products: any = [
    { name: "pen", price: 10 },
    { name: "phone", price: 20 },
    { name: "laptop", price: 30 }
  ];

  public employes: any = [
    { name: "a", exp: 2, package: 6 },
    { name: "b", exp: 3, package: 7 },
    { name: "c", exp: 4, package: 8 },
    { name: "d", exp: 5, package: 9 },
  ];

  submit() {
    alert("submitted");
  };

  store() {
    alert("Stored");
  };

  public phone:string="+91";





}
