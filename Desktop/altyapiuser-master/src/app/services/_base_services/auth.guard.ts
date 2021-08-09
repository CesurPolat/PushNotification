// auth.guard.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from '../user.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserRolesService } from './user-roles.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private user: UserService, private router: Router, private userRolesService: UserRolesService) { }

  async canActivate() {
    // 1 token varmı kontrol et
    if (!this.user.isLoggedIn()) {
      this.router.navigate(['/giris']);
      return false;
    }
    // token doğrula 
    const checkToken = await this.verifyToken();
    if (checkToken) {
      return true;
    }
    return true;
  }

  verifyToken() {
    return new Promise((resolve) => {
      const myRawToken = localStorage.getItem('token')
      const jwtHelper = new JwtHelperService();
      const decodedToken = jwtHelper.decodeToken(myRawToken);
      const isRolesArray = Array.isArray(decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']);
   //   console.log('isRoleArray ÖNEMLİ', isRolesArray)
      let roles: any[] = []; // role guard servis rolleri dizi istiyor
      if (!isRolesArray) { roles.push(decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']) }
      if (isRolesArray) { roles = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']; }

      const isExpired = jwtHelper.isTokenExpired(myRawToken);
      const verify = roles.some(x => x == 'personel');
      if (!verify) {
      //  alert(roles)
      }
      if (!verify || isExpired) {
        this.clearStorage();
        resolve(false);
      }
      this.userRolesService.setRoles(roles); // user servise rolleri yukle
      resolve(verify)
    })
  }




  clearStorage(): void {
    localStorage.clear();
    this.router.navigate(['/giris']);
  }

}
