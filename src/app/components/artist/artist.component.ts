import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent  {

	artist: any = {};
  loading: boolean;
  tracks: any[] = [];
  constructor(private route: ActivatedRoute, private spotify: SpotifyService) { 
    this.loading = true;
    this.route.params.subscribe(params => { 
      this.getArtist(params['id']); 
      this.getTracks(params['id']);
    });
  }

  getArtist(id: string){
    this.loading = true;
  	this.spotify.getArtist(id).subscribe(data => { this.artist = data; this.loading = false });
  }

  getTracks(id: string){
    this.spotify.getArtistTopTracks(id).subscribe(track => this.tracks = track)
  }
}
