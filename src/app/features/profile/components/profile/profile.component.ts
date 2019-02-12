import { Component, OnInit, OnChanges } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'gp-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
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
