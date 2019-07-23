import { Injectable, Inject } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_TOKEN } from './token';

@Injectable()
export class FoodService {
  constructor(private http: HttpClient, @Inject(API_TOKEN) private api: string) {}
  getFood(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }
}
