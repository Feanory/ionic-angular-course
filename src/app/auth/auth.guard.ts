import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanLoad, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(
    route: ActivatedRouteSnapshot,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.isAuthenticated) {
      this.router.navigateByUrl('/auth');
    }

    return this.authService.isAuthenticated;
  }
}
