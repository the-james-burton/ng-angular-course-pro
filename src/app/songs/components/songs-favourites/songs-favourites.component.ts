import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/store';
import { Observable } from 'rxjs';
import { SongsService } from '../../services/songs.service';

import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'songs-favourites',
  template: `
    <div class="songs">
      <songs-list [list]="favourties$ | async">
        Favourites
      </songs-list>
    </div>
  `
})
export class SongsFavouritesCompoment implements OnInit {
  constructor(private store: Store, private songsService: SongsService) {}

  favourties$: Observable<any[]>;

  ngOnInit(): void {
    this.favourties$ = this.store.select('playlist').pipe(
      filter(Boolean),
      map((playlist: any[]) => playlist.filter(track => track.favourite))
    );
  }
}
