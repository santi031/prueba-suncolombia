import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDataList } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private BASEURL: string = 'https://www.php.engenius.com.co/DatabaseIE.php';

  constructor(private http: HttpClient) { }

  public getData(body: Object) {
    return this.http.post<IDataList>(this.BASEURL, body);
  }

}
