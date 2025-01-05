import { Injectable } from '@angular/core';
import { User } from '../_modules/user';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { UserGit } from '../_modules/userGit';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = environment.apiUrl;
  user: User | undefined;

  constructor(private http: HttpClient) { }
  getGitUser(username: string)
  {
    return this.http.get<UserGit>(this.baseUrl+'users/'+username).pipe(
      map((response: UserGit) => {
        return response;
      })
    );
  }

  setUser(user: User | undefined)
  {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }
  getUser() { return this.user; }

  setUserName(user: User) { this.user = user; }
  getUserName() { return this.user; }
}
