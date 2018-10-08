import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

	songs: any[] = [];
	loading: boolean;
  error: boolean;
  message: string;

  constructor(private spotify: SpotifyService) { 
  	this.loading = true;
    this.error = false;
  }

  ngOnInit() {
  	this.spotify.getNewReleases()
        .subscribe((data :any )=> {
            this.songs = data 
            this.loading = false;
      }, 
      errorService => { 
        this.loading = false;
        this.error = true; 
        this.message = errorService.error.error.message; 
      });
  }

}
