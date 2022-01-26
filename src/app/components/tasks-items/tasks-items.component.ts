import { Component, Input, OnInit } from '@angular/core';

// interface mockup
import { Task } from '../../task';
import { TASKS } from '../../mock-tasks';

@Component({
  selector: 'app-tasks-items',
  templateUrl: './tasks-items.component.html',
  styleUrls: ['./tasks-items.component.scss'],
})
export class TasksItemsComponent implements OnInit {
  @Input() task: Task = TASKS[0];

  constructor() {}

  ngOnInit(): void {}
}
