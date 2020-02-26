import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(): boolean {
    if (this.authService.userLoggedIn()) {
      return true
    } else {
      this.router.navigate(['/login'])
      return false
    }
  }
  
}
