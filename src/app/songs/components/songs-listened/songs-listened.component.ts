import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/store';
import { SongsService } from '../../services/songs.service';
import { Observable } from 'rxjs';

import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'songs-listened',
  template: `
    <div class="songs">
      <songs-list [list]="listened$ | async">
        Listened
      </songs-list>
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
