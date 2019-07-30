import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from 'src/app/store';

// different from course - do() is now tap()
import { tap } from 'rxjs/operators';

const API_ROOT = 'http://localhost:3000/api';

export interface Song {
  // different from course - correct parameter list vs db.json...
  id: number;
  artist: string;
  track: string;
  listened: boolean;
  favourite: boolean;
}

@Injectable()
export class SongsService {
  constructor(private http: HttpClient, private store: Store) {}

  getPlaylist$ = this.http.get<Song[]>(API_ROOT + '/playlist').pipe(
    tap(next => this.store.set('playlist', next))
  );

  toggle(event: any) {
    console.log(event);
  }
}
