import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private authService:AuthService, 
    private router:Router
    ) { }

    canActivate() {
      if(this.authService.adminloggedIn()) {
        return true;
      } else {
        this.router.navigate(['/adminlogin']);
        return false;
      }
    }
}
