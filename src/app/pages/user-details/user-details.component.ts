import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../_modules/user';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent
{
  username: User | undefined;
  constructor(userService: UserService) { this.username = userService.getUserName(); }
}