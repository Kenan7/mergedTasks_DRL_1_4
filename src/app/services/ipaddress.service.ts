import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IpaddressService {

  baseURL = 'http://localhost:8000';

  constructor(private httpService: HttpClient) { }

  getIP(ip: string): Observable<any> {
    return this.httpService.get(this.baseURL + '/get/' + ip);
  }


}
