import { Component } from '@angular/core';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent {
  public a: number = 0;
  public b: number = 0;
  public result: number = 0;

  catch(value: any) {
    this.result = value;
  }
}
