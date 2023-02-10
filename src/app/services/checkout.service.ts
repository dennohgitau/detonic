import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  url = 'https://detonic.komfycollect.com/api';
  constructor(private http: HttpClient) { }

  checkout(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/sales`, data);
  }
}
