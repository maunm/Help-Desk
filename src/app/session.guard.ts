import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SupportApiService } from 'src/app/services/support-api.service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  constructor(private supportApiService: SupportApiService, private router: Router) { }
  canActivate(): boolean {
    if (this.supportApiService.userLoggedIn()) {
      return true
    } else {
      this.router.navigate(['/login'])
      return false
    }
  }
  
}
