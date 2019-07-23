import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FoodService {
  constructor(
    private http: HttpClient,
    private api: string
  ) {}
  getFood(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }
}
