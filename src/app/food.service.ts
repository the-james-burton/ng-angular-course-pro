import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API_ROOT: string = 'http://localhost:3000/api';

@Injectable()
export class FoodService {
  constructor(
    private http: HttpClient,
  ) {}
  getPizzas(): Observable<any[]> {
    return this.http.get<any[]>(API_ROOT + '/pizzas');
  }
  getDrinks(): Observable<any[]> {
    return this.http.get<any[]>(API_ROOT + '/drinks');
  }
  getSides(): Observable<any[]> {
    return this.http.get<any[]>(API_ROOT + '/sides');
  }
}
