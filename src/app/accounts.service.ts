import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private _httpClient: HttpClient) {

  }

  getAccounts(): Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals")
  }

  getAccounts1(term: string): Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?fiter=" + term);
  }

  createAccounts(data: any): Observable<any> {
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals", data);
  }
  
}
