import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodService } from '../food.service';
import { HttpClient } from '@angular/common/http';

interface Pizza {
  name: string;
  price: number;
}

// different from course - compile time error...
// "Function expressions are not supported in decoratorsConsider changing the function expression into an exported function"
export function PizzaFactory(httpClient: HttpClient) {
  return new FoodService(httpClient, 'http://localhost:3000/api');
}

@Component({
  selector: 'pizza-viewer',
  providers: [
    {
      provide: FoodService,
      useFactory: PizzaFactory,
      deps: [HttpClient]
    }
  ],
  template: `
    <div>
      <div *ngFor="let item of items$ | async">
        {{ item.name }} {{ item.price | currency: 'USD':'symbol' }}
      </div>
    </div>
  `
})
export class PizzaViewerComponent implements OnInit {
  items$: Observable<Pizza[]>;
  constructor(private foodService: FoodService) {}
  ngOnInit() {
    this.items$ = this.foodService.getPizzas();
  }
}
