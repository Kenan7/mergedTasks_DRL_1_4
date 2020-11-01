import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class IpaddressService {

  // baseURL = 'http://localhost:8000';
  baseURL = 'http://35.246.47.238';


  constructor(private httpService: HttpClient) { }

  getIP(ip: string): Observable<any> {
    return this.httpService.get(this.baseURL + '/get/' + ip)
    .pipe(
      catchError(error => this.errorHandler(error))
    );
  }

  createEntry(formData: any): Observable<any> {
    return this.httpService.post(this.baseURL + '/add', formData)
    .pipe(
      catchError(error => this.errorHandler(error))
    );
  }

  errorHandler(error: HttpErrorResponse): Observable<any> {
    return throwError(error.error.message);
  }

}
