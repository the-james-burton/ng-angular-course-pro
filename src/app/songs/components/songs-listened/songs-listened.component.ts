import { Component } from '@angular/core';
import { Store } from 'src/app/store';

@Component({
  selector: 'songs-listened',
  template: `
    <div class="songs">
      Listened
    </div>
  `
})
export class SongsListenedCompoment {
  constructor(private store: Store) {}
}
