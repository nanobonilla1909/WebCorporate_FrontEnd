import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) {

  }
  
  canActivate(): Observable<boolean> {
    return this.auth.user$
    .switchMap(user => this.userService.get(user.uid))
    .map(appUser => appUser.isAdmin);
    }
  
}

