import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  id: number = 0;
  text: string = '';
  date: string = '';
  reminder: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.text.length === 0) {
      alert('please insert a task!');
    }
    const newTask = {
      id: this.id,
      text: this.text,
      date: this.date,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);
  }
}
