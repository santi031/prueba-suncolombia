import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedInUser: string = "";
  loggedInPassword: string = "";

  constructor() { }

  login(username: string, password: string): void {
    this.loggedInUser = username;
    this.loggedInPassword = password;
  }

  getLoggedInUser(): string {
    return this.loggedInUser;
  }

  getLoggedInPassword(): string {
    return this.loggedInPassword;
  }
}
