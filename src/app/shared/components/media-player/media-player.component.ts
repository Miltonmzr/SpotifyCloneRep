import { MultimediaService } from './../../services/multimedia.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  mockCover: TrackModel = {
    cover:'https://i.scdn.co/image/ab67616d0000b27391f7222996c531b981e7bb3d',
    album:'Ma Boy im On fire',
    name:'El shark dj',
    url:'https://open.spotify.com/tr',
    _id: 1
  }

  listObservers$:Array<Subscription> = [];

  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaService.callback.subscribe(
      (response: TrackModel) => {
        console.log("Recibiendo cancion ...", response);
      }
    )
    this.listObservers$ = [observer1$]
  }
  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())

  }
}
