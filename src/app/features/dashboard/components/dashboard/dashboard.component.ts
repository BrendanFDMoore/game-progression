import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromUserStore from 'src/app/modules/user/store';

@Component({
  selector: 'gp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(
    private store: Store<fromUserStore.UserState>
  ) {
    this.store.dispatch(new fromUserStore.LoadProfileRequest());
  }
  @Input() title: string;
}
