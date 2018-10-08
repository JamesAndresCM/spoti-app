import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global'; 
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
  	'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    'Content-Type':  'application/json'
  })
}
/*provideIn evita declarar services en el app.module*/
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

	public url:string;
  constructor(private http: HttpClient) { 
  	this.url = GLOBAL.url;
  }

  getNewReleases() {
  	return this.http.get(`${this.url}browse/new-releases?limit=6`, httpOptions)
            .pipe( map( data => data['albums'].items ));
  }

  getArtists(term :string){
  	return this.http.get(`${this.url}search?q=${term}&type=artist&limit=15`, httpOptions)
            .pipe( map( data => data['artists'].items ));
  }

  getArtist(id :string){
    return this.http.get(`${this.url}artists/${id}`, httpOptions);
  }

  getArtistTopTracks(id :string){
    return this.http.get(`${this.url}artists/${id}/top-tracks?country=us`, httpOptions)
            .pipe( map( data => data['tracks']));
  }
}
