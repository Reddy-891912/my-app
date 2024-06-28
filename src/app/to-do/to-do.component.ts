import { Component } from '@angular/core';
import { ToDoTaskViewService } from '../to-do-task-view.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {

  constructor(private _toDoTaskViewService: ToDoTaskViewService) { }

  create() { }

  reset() { }

}
