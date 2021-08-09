import { Injectable } from '@angular/core';
import { MainService } from './_base_services/main.service';
import { HttpClient } from '@angular/common/http';
import { ErrorHandleService } from './_base_services/error-Handle.service';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService extends MainService {

  private loggedIn = false;
  readonly user:any ;
  private isAdmininstrator = false;

  constructor(private httpx: HttpClient, errorHandleService: ErrorHandleService) {
    super(httpx, errorHandleService);
     this.loggedIn = !!localStorage.getItem('token');
     this.user = this.getUserDetails();
  }

  isLoggedIn() {
    return this.loggedIn;
  }


  isAdmin(){
    return this.isAdmin;
  }
  
  getUser(){
    return this.isAdmininstrator;
  }

  getUserId(){
    let id = this.user['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
    return parseInt(id)
  }

  getUserDetails(): Observable<any> {
    if (this.isLoggedIn()) {
       const myRawToken = localStorage.getItem('token')
       const jwtHelper = new JwtHelperService();
       const decodedToken = jwtHelper.decodeToken(myRawToken);
       const isRolesArray = Array.isArray(decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']);
       return decodedToken;
    }
  }
}
