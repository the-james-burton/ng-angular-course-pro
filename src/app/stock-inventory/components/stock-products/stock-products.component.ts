import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Product } from '../../containers/models/product.interface';

@Component({
  selector: 'stock-products',
  styleUrls: ['stock-products.component.scss'],
  template: `
    <div class="stock-product" [formGroup]="parent">
      <div formArrayName="stock">
        <div *ngFor="let item of stocks; let i = index">
          <div class="stock-product__content" [formGroupName]="i">
            <div class="stock-product__name">
              {{ getProduct(item.value.product_id).name }}
            </div>
            <div class="stock-product__price">
              <!-- different from course - currency pipe
                  The symbolDisplay option (third parameter) is now a string instead of a boolean. The accepted values are "code", "symbol" or "symbol-narrow".-->
              {{
                getProduct(item.value.product_id).price
                  | currency: 'USD':'symbol'
              }}
            </div>
            <input
              formControlName="quantity"
              type="number"
              step="10"
              min="10"
              max="1000"
            />
            <button type="button" (click)="onRemove(item, i)">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class StockProductsComponent {
  @Input()
  parent: FormGroup;

  @Input()
  map: Map<number, Product>;

  @Output()
  removed = new EventEmitter<any>();

  getProduct(id) {
    return this.map.get(id);
  }

  onRemove(group, index) {
    this.removed.emit({ group, index });
  }

  get stocks() {
    return (this.parent.get('stock') as FormArray).controls;
  }
}
