import {Component} from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  title = 'MSI-ECommerce';
  constructor(
    public auth: AuthService,
    private router: Router
  ) {}
  logout() {
    this.auth.logout()
      .subscribe((res: {success: true}) => {
      if (res.success) {
        this.router.navigate(['/home']);
      }
    });
}
}

