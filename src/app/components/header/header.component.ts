import { UiService } from './../../service/ui.service';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() titulo: string = '';
  text: string = 'false';

  showAddTask: boolean = false;
  subscription?: Subscription;

  constructor(private UiService: UiService) {
    this.subscription = this.UiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {}

  toggleAddTask() {
    this.UiService.toggleAddTask();
  }
}
