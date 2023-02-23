import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs'
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class CommService {

  private baseUrl = 'https://api.angularspeedexample.com';

  constructor( private http: HttpClient) { }

  getData() {
    return this.http.get(`${this.baseUrl}/mockdata.json?timeout=4`).pipe(map((response : any) => response.data))
  }
}
