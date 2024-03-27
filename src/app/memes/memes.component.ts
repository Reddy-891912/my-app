import { Component } from '@angular/core';
import { MemesService } from '../memes.service';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent {

  public memes: any = {};
  constructor(private _memesService: MemesService) {
    _memesService.getMemesData().subscribe(
      (data: any) => {
        this.memes = data;
      },
      (err: any) => {
        alert("internal server error");
      }
    )
  }

}
