import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Store } from './store';
import { AppComponent } from './app.component';
import { SongsModule } from './songs/songs.module';
import { SongsService } from './songs/services/songs.service';

@NgModule({
  declarations: [AppComponent],
  providers: [Store, SongsService],
  imports: [BrowserModule, SongsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
