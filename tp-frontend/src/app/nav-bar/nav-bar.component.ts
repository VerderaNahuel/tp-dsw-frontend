import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AdminAuthService } from '../services/admin.auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})


export class NavBarComponent {

  constructor(public authService: AuthService, public adminAuthService: AdminAuthService) {  }

}
