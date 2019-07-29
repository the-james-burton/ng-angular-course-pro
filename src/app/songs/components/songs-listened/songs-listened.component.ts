import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/store';
import { SongsService } from '../../services/songs.service';
import { Observable } from 'rxjs';

import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'songs-listened',
  template: `
    <div class="songs">
      <div *ngFor="let item of listened$ | async">
        {{ item.artist }}
        {{ item.track }}
      </div>
    </div>
  `
})
export class SongsListenedCompoment implements OnInit {
  constructor(private store: Store, private songsService: SongsService) {}

  listened$: Observable<any[]>;

  ngOnInit(): void {
    this.listened$ = this.store.select('playlist').pipe(
      filter(Boolean),
      map((playlist: any[]) => playlist.filter(track => track.listened))
    );
  }
}