import { MultimediaService } from './../../services/multimedia.service';
import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';

@Component({
  selector: 'app-cardplayer',
  templateUrl: './cardplayer.component.html',
  styleUrls: ['./cardplayer.component.css']
})
export class CardplayerComponent {

  @Input() mode: 'small' | 'big' = 'small';
  @Input() track: TrackModel = { _id: 0, name: '', album: '', url: '', cover: '' };

  constructor(private multimediaService: MultimediaService) { }

  sendPlay(track: TrackModel): void {
    this.multimediaService.callback.emit(this.track);
  }
}
