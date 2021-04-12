import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  constructor(private router: Router, private authService: AuthService) { }

  id: any;

  ngOnInit() {
    this.id = localStorage.getItem('token');
  }

  logout() {
    console.log('logout');
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
