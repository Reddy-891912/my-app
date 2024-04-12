import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BikesService {

  public baseURL: string = "https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction";

  constructor(private _httpClient: HttpClient) {

  }

  getCars(): Observable<any> {
    return this._httpClient.get(this.baseURL);
  }

  getCars1(id: any): Observable<any> {
    return this._httpClient.get(this.baseURL + "/" + id);
  }

  editBike(id:any,data:any):Observable<any>{
    return this._httpClient.put(this.baseURL+"/"+id,data);
  }

  //filter bar like search text in table
  getFilterBikes(term: string): Observable<any> {
    return this._httpClient.get(this.baseURL + "?filter=" + term);
  }

  getPagedBikes(pageNo: number): Observable<any> {
    return this._httpClient.get(this.baseURL + "?limit=10&page=" + pageNo)
  }

  getSortedBikes(column: string, order: string): Observable<any> {
    return this._httpClient.get(this.baseURL + "?sortBy=" + column + "&order" + order);
  }

  createCar(data: any): Observable<any> {
    return this._httpClient.post(this.baseURL, data)
  }

  loadData(queries: any) {
    let str = "";
    if (queries.filter) {
      str += "filter=" + queries.filter + "&";
    }
    if (queries.pageNo) {
      str += "page=" + queries.pageNo + "&";
      str += "limit=" + queries.limit + "&";
    }
    if (queries.sortBy) {
      str += "sortBy=" + queries.sortBy + "&";
    }
    if (queries.order) {
      str += "order=" + queries.order + "&";
    }
    console.log(queries, str);
    return this._httpClient.get(this.baseURL + "?" + str);
  }

  deletedBikes(id: string): Observable<any> {
    return this._httpClient.delete(this.baseURL + "/" + id);
  }
}
