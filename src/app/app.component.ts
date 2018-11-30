import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';

  constructor(private userService: UserService, private auth: AuthService, router: Router) {

    auth.user$.subscribe(user=> {
      if (user) {
        userService.save(user);
        router.navigateByUrl('/home')
      }

    })

  }

}
