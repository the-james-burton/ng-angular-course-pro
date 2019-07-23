import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodService } from '../food.service';
import { HttpClient } from '@angular/common/http';

interface Drink {
  name: string;
  price: number;
}

// different from course - compile time error...
// "Function expressions are not supported in decoratorsConsider changing the function expression into an exported function"
export function DrinkFactory(httpClient: HttpClient) {
  return new FoodService(httpClient, 'http://localhost:3000/api');
}

export abstract class DrinkService {
  getDrinks: () => Observable<Drink[]>;
}

@Component({
  selector: 'drink-viewer',
  providers: [ FoodService,
    {
      provide: DrinkService,
      useExisting: FoodService,
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
export class DrinkViewerComponent implements OnInit {
  items$: Observable<Drink[]>;
  constructor(private foodService: DrinkService) {}
  ngOnInit() {
    this.items$ = this.foodService.getDrinks();
  }
}
