import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

export const authGuard: CanActivateFn = (
  

  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot): Observable<boolean|UrlTree> | Promise<boolean|UrlTree> | boolean|UrlTree => {
    
    if((inject(UserAuthService).getToken()) !== null){
      const role = route.data["roles"] as Array<string>;

      if(role){
        const match = inject(UserService).roleMatch(role);

        if(match){
          return true;
        }else{
          inject(Router).navigate(['/forbidden']);
          return false;
        }
      }
    }
    inject(Router).navigate(['/login']);
    return false;
};
