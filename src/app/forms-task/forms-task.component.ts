import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms-task',
  templateUrl: './forms-task.component.html',
  styleUrls: ['./forms-task.component.css']
})
export class FormsTaskComponent {

  public taskForm:FormGroup=new FormGroup({
    name:new FormControl(),
    experience:new FormControl(),
    experiance:new FormGroup({
      company:new FormControl(),
      experiance:new FormControl(),
      package:new FormControl()
    }),
    skills:new FormArray([])//cards
  })

  get cardsFormsArray(){
    return this.taskForm.get('skills') as FormArray;
  }

  add(){
    this.cardsFormsArray.push(
      new FormGroup({
        name:new FormControl(),
        rating:new FormControl(),
        experiance:new FormControl()
      })
    )
  }

  delete(i:number){
    this.cardsFormsArray.removeAt(i);
  }

  submit(){
    console.log(this.taskForm.value);
  }
  

}
