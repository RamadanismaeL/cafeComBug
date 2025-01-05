import { Component, OnInit } from '@angular/core';
import { UserService } from './_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
constructor(private userService: UserService) {}

  ngOnInit(): void { this.getUser(); }

  getUser()
  {
    const user = localStorage.getItem('user');
    this.userService.setUser(user ? JSON.parse(user) : undefined);
  }
}
