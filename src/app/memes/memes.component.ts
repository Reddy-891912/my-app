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
   this._memesService.getMemesData().subscribe(
      (data: any) => {
        this.memes = data;
        console.log(data);
      },
      (err: any) => {
        alert("Memes data not reflected");
      }
    )
  }

}
