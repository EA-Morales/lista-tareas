import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Output() btn_addtask_click = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.btn_addtask_click.emit();
  }
}