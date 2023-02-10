import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private api: HttpClient) { }
  getData() {
    return this.api.get('https://detonic.komfycollect.com/api/sales/1')
  }
  successData(id: any): Observable<any>{
    return this.api.get('https://detonic.komfycollect.com/api/sales/'+id)

  }
}
