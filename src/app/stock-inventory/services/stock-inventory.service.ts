import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Product, Item, Branch } from '../containers/models/product.interface';

const ROOT_API: string = 'http://localhost:3000';

@Injectable()
export class StockInventoryService {
  constructor(private http: HttpClient) {}

  getCartItems(): Observable<Item[]> {
    return this.http
      .get<Item[]>(ROOT_API + '/api/cart')
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(ROOT_API + '/api/products')
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  checkBranchId(id: string): Observable<boolean> {
    // different from course - must do this in one line...
    let params = new HttpParams().set('id', id);
    return this.http
      .get<Branch[]>(ROOT_API + '/api/branches', {
        params
      })
      .pipe(
        map((response: Branch[]) => !!response.length),
        catchError((error: any) => throwError(error.json()))
      );
  }
}
