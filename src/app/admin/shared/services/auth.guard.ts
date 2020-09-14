import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, Router } from '@angular/router';



@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private auth: AuthService,
        private router: Router
        ){}

    canActivate(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): 
        Observable<boolean> |  Promise<boolean> | boolean {
            if (this.auth.isAuthenticated()){
                return true
            } else {
                this.auth.logout()
                this.router.navigate(['/admin', 'login'])
            }
        }

}

