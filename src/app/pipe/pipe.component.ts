import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  price: number = 0;

  public user: User = { name: 'abcd', age: 20 };

}
