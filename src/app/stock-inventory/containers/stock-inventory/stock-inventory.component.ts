import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Product } from '../models/product.interface';

@Component({
  selector: 'stock-inventory',
  styleUrls: ['stock-inventory.component.scss'],
  template: `
    <div class="stock-inventory">
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <stock-branch [parent]="form"> </stock-branch>
        <stock-selector
          [parent]="form"
          [products]="products"
          (added)="addStock($event)"
        >
        </stock-selector>
        <stock-products [parent]="form" (removed)="removeStock($event)">
        </stock-products>

        <div class="stock-inventory__buttons">
          <button type="submit" [disabled]="form.invalid">
            Order stock
          </button>
        </div>

        <pre><{{ form.value | json }}</pre>
      </form>
    </div>
  `
})
export class StockInventoryComponent {
  products: Product[] = [
    { id: 1, price: 800, name: 'Doohickey' },
    { id: 2, price: 90, name: 'Dooberry Whatsit' },
    { id: 3, price: 300, name: 'Thingamabob' },
    { id: 4, price: 700, name: 'Widget' },
    { id: 5, price: 100, name: 'Dongle' }
  ];

  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl(''),
      code: new FormControl('')
    }),
    selector: this.createStock({}),
    stock: new FormArray([
      this.createStock({ product_id: 1, quantity: 10 }),
      this.createStock({ product_id: 3, quantity: 50 })
    ])
  });

  createStock(stock) {
    return new FormGroup({
      product_id: new FormControl(parseInt(stock.product_id, 10) || ''),
      quantity: new FormControl(stock.quantity || 10)
    });
  }

  addStock(stock) {
    const control = this.form.get('stock') as FormArray;
    control.push(this.createStock(stock));
  }

  removeStock({ group, index }: { group: FormGroup; index: number }) {
    const control = this.form.get('stock') as FormArray;
    control.removeAt(index);
  }

  onSubmit() {
    console.log('Submit:', this.form.value);
  }
}
