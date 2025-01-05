import { Component, DoCheck } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../_modules/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent //implements DoCheck
{
  /*
  num: number = 1;

  ngDoCheck(): void {
    console.log("Uma mudança foi feita..");
  }

  adiciona() { this.num++; }
  */
  user: User | undefined;
  constructor(private userService: UserService) { this.user = userService.getUser(); }
}