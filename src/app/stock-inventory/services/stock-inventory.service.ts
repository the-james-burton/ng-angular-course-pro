import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Product, Item } from '../containers/models/product.interface';

const ROOT_API: string = 'http://localhost:3000';

@Injectable()
export class StockInventoryService {
  constructor(private http: HttpClient) {}

  getCartItems(): Observable<Item[]> {
    return this.http.get<Item[]>(ROOT_API + '/api/cart')
      .pipe(
        catchError((error: any) => throwError(error.json()))
      );
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(ROOT_API + '/api/products')
      .pipe(
        catchError((error: any) => throwError(error.json()))
      );
  }

}


