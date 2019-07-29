import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/store';
import { Observable } from 'rxjs';
import { SongsService } from '../../services/songs.service';

import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'songs-favourites',
  template: `
    <div class="songs">
      <div *ngFor="let item of favourties$ | async">
        {{ item.artist }}
        {{ item.track }}
      </div>
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