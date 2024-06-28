import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-aria',
  templateUrl: './text-aria.component.html',
  styleUrls: ['./text-aria.component.css']
})
export class TextAriaComponent {

  @Input() public text: string = '/assets/1star.png';

  public rating: any = "";

  rating1() {
    this.rating = '/assets/1star.png';
  }

}
