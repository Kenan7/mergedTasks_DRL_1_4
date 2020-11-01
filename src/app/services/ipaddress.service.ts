import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

import { HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IpaddressService {

  // baseURL = 'http://localhost:8000';
  baseURL = 'http://35.246.47.238';

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  constructor(private httpService: HttpClient) { }

  getIP(ip: string): Observable<any> {
    return this.httpService.get(this.baseURL + '/get/' + ip, {headers: this.headers})
    .pipe(
      catchError(error => this.errorHandler(error))
    );
  }

  createEntry(formData: any): Observable<any> {
    return this.httpService.post(this.baseURL + '/add', formData, {headers: this.headers})
    .pipe(
      catchError(error => this.errorHandler(error))
    );
  }

  errorHandler(error: HttpErrorResponse): Observable<any> {
    return throwError(error.error.message);
  }

}
