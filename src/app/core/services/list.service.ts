import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getTableDetails(inputType1: any): Observable<any> {
    return this.httpClient.get('http://demo0415326.mockable.io/checkmock');
  }
}
