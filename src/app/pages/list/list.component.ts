import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { TableComponent } from '../../components/table/table.component';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IBody, IDataList } from '../../models/list.model';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [HeaderComponent, TableComponent, AsyncPipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  private loggedInUser: string;
  private loggedInPassword: string;
  public headerText: string = "";
  public body: IBody = {
    "User": "",
    "Password": "",
    "option": ""
  }

  public dataList$ = new Observable<IDataList>();
  ngOnInit(): void {
    this.getMunicipios();
  }

  constructor(
    private service: DataService,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loggedInUser = this.loginService.getLoggedInUser();
    this.loggedInPassword = this.loginService.getLoggedInPassword();
    this.body.User = this.loggedInUser;
    this.body.Password = this.loggedInPassword;
    this.getMunicipios();
  }

  valueResponse(text: string) {
    this.headerText = text;
  }

  public getMunicipios() {
    this.dataList$ = this.service.getData(this.body);
    this.dataList$.subscribe((data) => {
      if (data.login == "Fail") {
        this.headerText = "Hubo Un Error"
      }
    })
    this.body.option = "municipios"
    this.headerText = this.body.option;
  }

  public redirectToLogin() {
    this.router.navigateByUrl('/login');
  }
}
