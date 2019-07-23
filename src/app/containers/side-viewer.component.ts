import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodService } from '../food.service';
import { HttpClient } from '@angular/common/http';

interface Side {
  name: string;
  price: number;
}

// different from course - compile time error...
// "Function expressions are not supported in decoratorsConsider changing the function expression into an exported function"
export function SideFactory(httpClient: HttpClient) {
  return new FoodService(httpClient, 'http://localhost:3000/api');
}

@Component({
  selector: 'side-viewer',
  providers: [
    {
      provide: FoodService,
      useFactory: SideFactory,
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
export class SideViewerComponent implements OnInit {
  items$: Observable<Side[]>;
  constructor(private foodService: FoodService) {}
  ngOnInit() {
    this.items$ = this.foodService.getSides();
  }
}
