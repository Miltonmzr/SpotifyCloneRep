import { Subscription } from 'rxjs';
import { TrackService } from './../../services/track.service';
import { Component } from '@angular/core';
import * as dataRaw from "../../../../data/tracks.json"
import { TrackModel } from '@core/models/tracks.models';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent {

  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []

  listObservers$: Array<Subscription> = []

  constructor(private trackService:TrackService) {}

  ngOnInit(): void {
    const observer1$ = this.trackService.dataTracksTrending$
    .subscribe(response => {
      this.tracksTrending = response
      this.tracksRandom = response
      console.log("Canciones trending: ", response);
    })
    const observer2$ = this.trackService.dataTracksTrending$
    .subscribe(response => {
      this.tracksRandom = response
      console.log("Canciones Random: ", response);
    })

    this.listObservers$ = [observer1$, observer2$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
  }



}
