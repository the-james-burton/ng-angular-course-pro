import { TestBed, async } from '@angular/core/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { StockInventoryService } from './stock-inventory.service';
import { of, defer } from 'rxjs';
import { Item, Product } from '../models/product.interface';

// different from course - TestBed is initialized in test.js

function createResponse<T>(data: T) {
  // different from course - new http api...
  return defer(() => Promise.resolve(data));
}

class MockHttp {
  get() {
    return createResponse([]);
  }
}

const cartItems = [
  { product_id: 1, quantity: 10 },
  { product_id: 2, quantity: 5 }
];
const productItems = [
  { id: 1, price: 10, name: 'Test' },
  { id: 2, price: 100, name: 'Another Test' }
];

describe('StockInventoryService', () => {
  let service: StockInventoryService;
  let http: HttpClient;

  beforeEach(async(() => {
    const bed = TestBed.configureTestingModule({
      providers: [
        StockInventoryService,
        { provide: HttpClient, useClass: MockHttp }
      ]
    });
    http = bed.get(HttpClient);
    service = bed.get(StockInventoryService);
  }));

  it('should get cart items', () => {
    spyOn(http, 'get').and.returnValue(createResponse([...cartItems]));
``
    service.getCartItems().subscribe((result: Item[]) => {
      expect(result.length).toBe(2);
      expect(result).toEqual(cartItems);
    });
  });

  it('should get product items', () => {
    spyOn(http, 'get').and.returnValue(createResponse([...productItems]));

    service.getProducts().subscribe((result: Product[]) => {
      expect(result.length).toBe(2);
      expect(result).toEqual(productItems);
    });
  });
});
