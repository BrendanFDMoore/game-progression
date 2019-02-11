import { Component, OnInit, OnChanges } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'gp-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  public profile: any;
  public ready = false;

  constructor (
    private profileService: ProfileService,
  ) { }

  ngOnInit() {
    console.log('profile ngOnInit');
    this.profileService.getProfile().subscribe((json) => {
      this.profile = json;
      this.ready = true;
    });
  }
}
