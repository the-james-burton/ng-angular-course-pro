import { Inject, Injectable } from '@angular/core';

import { FOOD_STORE_CONFIG, FoodStoreConfig } from './config';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable()
export class FoodStoreService {
  constructor(
    private httpClient: HttpClient,
    @Inject(FOOD_STORE_CONFIG) private config: FoodStoreConfig
  ) {}

  getStore() {
    const headers = new HttpHeaders()
      .set('id', this.config.storeId.toString())
      .set('token', this.config.storeToken);

    return this.httpClient.get<any>('http://localhost:3000/api/stores', { headers })
      .pipe(map(stores => stores[0]));
  }
}
