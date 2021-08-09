import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { UserRolesService } from './user-roles.service';
@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {

  constructor(private getUserRoles: UserRolesService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    return route.data.roles.some( ai => this.getUserRoles.getRoles().includes(ai) );
  }

}