import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StockInventoryModule } from './stock-inventory/stock-inventory.module';

import { AppComponent } from './app.component';
import { CreditCardDirective } from './credit-card/credit-card.directive';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { PizzaViewerComponent } from './containers/pizza-viewer.component';
import { DrinkViewerComponent } from './containers/drink-viewer.component';
import { SideViewerComponent } from './containers/side-viewer.component';
import { API_TOKEN } from './token';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardDirective,
    TooltipDirective,
    PizzaViewerComponent,
    DrinkViewerComponent,
    SideViewerComponent
  ],
  imports: [BrowserModule, StockInventoryModule],
  bootstrap: [AppComponent],
  providers: [{ provide: API_TOKEN, useValue: 'http://localhost:3000/api/pizzas' }]
})
export class AppModule {}
