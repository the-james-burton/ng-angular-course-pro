import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FoodStoreModule } from './food-store/food-store.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FoodStoreModule.forRoot({
      storeId: 10292,
      storeToken: 'eca938c99a0e9ff91029dc'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
