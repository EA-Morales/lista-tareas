import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string = '';

  @Output() btn_addtask_click = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.btn_addtask_click.emit();
  }
}
