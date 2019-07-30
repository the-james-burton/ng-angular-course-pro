import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from 'src/app/store';
import { SongsService } from '../../services/songs.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'songs-playlist',
  template: `
    <div class="songs">
      <songs-list [list]="playlist$ | async" (toggle)="onToggle($event)">
        Playlist
      </songs-list>
    </div>
  `
})
export class SongsPlaylistCompoment implements OnInit, OnDestroy {
  constructor(private store: Store, private songsService: SongsService) {}

  playlist$: Observable<any[]>;
  subscription: Subscription;

  ngOnInit(): void {
    this.playlist$ = this.store.select('playlist');
    this.subscription = this.songsService.getPlaylist$.subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onToggle(event) {
    this.songsService.toggle(event);
  }
}
