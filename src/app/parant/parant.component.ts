import { Component } from '@angular/core';

@Component({
  selector: 'app-parant',
  templateUrl: './parant.component.html',
  styleUrls: ['./parant.component.css']
})
export class ParantComponent {

  public ap: string = "";
  public bp: string = "";

  catch(value: any) {
    this.bp = value;
  }

}
