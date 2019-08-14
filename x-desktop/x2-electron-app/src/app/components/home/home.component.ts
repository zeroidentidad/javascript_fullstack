import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../../models/user';
import { UserService } from '../../providers/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading = false;
  users: User[];
  me: User;


  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.userService.all().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });

    this.userService.me().pipe(first()).subscribe(me => {
      this.loading = false;
      this.me = me;
    });
  }

}
