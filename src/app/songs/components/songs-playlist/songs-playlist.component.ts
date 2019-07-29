import { Component } from '@angular/core';
import { Store } from 'src/app/store';

@Component({
  selector: 'songs-playlist',
  template: `
    <div class="songs">
      Playlist
    </div>
  `
})
export class SongsPlaylistCompoment {
  constructor(private store: Store) {}
}
