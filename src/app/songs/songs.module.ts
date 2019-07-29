import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SongsFavouritesCompoment } from './components/songs-favourites/songs-favourites.component';
import { SongsListenedCompoment } from './components/songs-listened/songs-listened.component';
import { SongsPlaylistCompoment } from './components/songs-playlist/songs-playlist.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [
    SongsFavouritesCompoment,
    SongsListenedCompoment,
    SongsPlaylistCompoment
  ],
  exports: [
    SongsFavouritesCompoment,
    SongsListenedCompoment,
    SongsPlaylistCompoment
  ]
})
export class SongsModule {}
