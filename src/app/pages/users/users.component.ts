import { Component, OnInit } from '@angular/core';
import { User } from '../../_modules/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  selectedUser: User | undefined;
  userForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm()
  {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(250)]],
      age: [null, [Validators.required, Validators.min(12), Validators.max(110)]]
    });
  }

  submitForm()
  {
    if(this.userForm.valid)
    {
      //console.log(this.userForm.value);
      this.users.push(this.userForm.value);
      this.userForm.reset();
    }
    else { console.log("error")}
  }

  //users: String[] = ['Vinicius', 'Júlio', 'Larissa']
  users: User[] = [
    {name: 'Vinicius', age: 25},
    {name: 'Júlio', age: 19},
    {name: 'Larissa', age: 45},
    {name: 'Ramadan', age: 23},
    {name: 'Khan', age: 43},
    {name: 'Sumera', age: 44},
    {name: 'Tariq', age: 34},
    {name: 'Noraiz', age: 25}
  ];

  infoUserSelected(user: User)
  {
    console.log(user);
    this.selectedUser = user;
    this.userService.setUser(user);
    this.userService.setUserName(user);
  }
}
