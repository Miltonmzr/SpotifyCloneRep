import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { Observable, of } from 'rxjs';
import * as dataRaw from "../../../data/tracks.json"

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTracksTrending$: Observable<TrackModel[]> = of ([])
  dataTracksRandom$: Observable<any> = of ([])


  constructor() {
    const {data}: any = (dataRaw as any).default;

    this.dataTracksTrending$ = of (data)

    this.dataTracksRandom$ = new Observable((observer) => {

      const trackExample: TrackModel = {
        _id: 9,
        name: "Track 1",
        album: "Papeado por la papa",
        url: "htto://",
        cover: "https://upload.wikimedia.org/wikipedia/en/0/08/Molotov-ctr.jpg",
      }
      observer.next([trackExample])
    })
  }
}
