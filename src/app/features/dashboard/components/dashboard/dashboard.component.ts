import { Component, Input } from '@angular/core';

@Component({
  selector: 'gp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @Input() title: string;
}
