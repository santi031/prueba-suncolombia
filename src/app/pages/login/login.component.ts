import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = "";
  password: string = "";

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  public login(): void {
    this.loginService.login(this.username, this.password);
    this.router.navigate(['/list']);
  }
}
