import { Component } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../_modules/user';
import { UserGit } from '../../_modules/userGit';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent //implements OnInit //implements DoCheck
{
  /*
  num: number = 1;

  ngDoCheck(): void {
    console.log("Uma mudança foi feita..");
  }

  adiciona() { this.num++; }
  */
  user: User | undefined;
  userGit: UserGit | undefined;
  username: string = '';

  constructor(private userService: UserService, private toastr: ToastrService) { this.user = userService.getUser(); }

  //ngOnInit(): void { this.getGitUser(); }

  /*
  getGitUserHome()
  {
    this.userService
    .getGitUser(this.username)
    .subscribe((response: UserGit) =>
      { /*console.log(response); this.userGit = response; },
      (error) => {
        this.toastr.error(error.error.message);
        //console.log(error.error.message);
      });
  }
  */

  getGitUserHome() {
    this.userService
      .getGitUser(this.username)
      .subscribe({
        next: (response: UserGit) => {
          if (!response || Object.keys(response).length === 0) {
            console.log('Nenhum resultado encontrado.');
            this.toastr.info('Nenhum resultado encontrado.');
          } else {
            this.userGit = response;
          }
        },
        error: (error) => {
          if (error.status === 404) {
            console.log('Usuário não encontrado.');
            this.toastr.error('User not founded!', 'Error Message');
          } else {
            this.toastr.error(error.error.message || 'Ocorreu um erro.');
          }
        }
      });
  }
}