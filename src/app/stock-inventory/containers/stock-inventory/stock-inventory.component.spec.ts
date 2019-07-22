import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { StockInventoryComponent } from './stock-inventory.component';
import { StockInventoryService } from '../../services/stock-inventory.service';

import { of } from 'rxjs';

// different from course, the TestBed is initialised in test.js

class MockStockInventoryService {
  getProducts() {
    return of([
      { id: 1, price: 10, name: 'Test' },
      { id: 2, price: 100, name: 'Another test' }
    ]);
  }
  getCartItems() {
    return of([
      { product_id: 1, quantity: 10 },
      { product_id: 2, quantity: 5 }
    ]);
  }
}

describe('StockInventoryComponent', () => {
  let component: StockInventoryComponent;
  let fixture: ComponentFixture<StockInventoryComponent>;
  let el: DebugElement;
  let service: StockInventoryService;

  // different from course - needs to be wrapped in async()...
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [StockInventoryComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: StockInventoryService, useClass: MockStockInventoryService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(StockInventoryComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    service = el.injector.get(StockInventoryService);
  }));

  it('should get cart items and products on init', () => {
    spyOn(service, 'getProducts').and.callThrough();
    spyOn(service, 'getCartItems').and.callThrough();
    component.ngOnInit();
    expect(service.getProducts).toHaveBeenCalled();
    expect(service.getCartItems).toHaveBeenCalled();
  });

  it('should create a product map from the service response', () => {
    component.ngOnInit();
    expect(component.productMap.get(1)).toEqual({
      id: 1,
      price: 10,
      name: 'Test'
    });
    expect(component.productMap.get(2)).toEqual({
      id: 2,
      price: 100,
      name: 'Another test'
    });
  });

  it('should store the products response', () => {
    component.ngOnInit();
    expect(component.products).toEqual([
      { id: 1, price: 10, name: 'Test' },
      { id: 2, price: 100, name: 'Another test' }
    ]);
  });

  it('should create a stock item for each cart item', () => {
    spyOn(component, 'addStock');
    component.ngOnInit();
    expect(component.addStock).toHaveBeenCalledWith({
      product_id: 1,
      quantity: 10
    });
    expect(component.addStock).toHaveBeenCalledWith({
      product_id: 2,
      quantity: 5
    });
  });
});
