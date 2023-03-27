import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  getHeader(query: string) {
    const url = 'https://api.spotify.com/v1/' + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      // tslint:disable-next-line: max-line-length
      "Bearer BQD2VTOTkGtrvJt4p_aUB0lMDmcfy8MMpUh-xd02MhT4vDVdq51YxqpEaCUld_KgNsfILcrRMfBspc-JYKJteuZsi3sZOy9S4DOG3k3NZlbrgQWj8h8DyICgAHxwhCAIDocynQF3ZmJHXj64_opaRQsuCBNlMotZa8XVUBQaAMF0y7RCDFtaMZbZgF1vCPtfxqZo"
      );
    return this._http.get(url, { headers });
  }
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) {}

  searchMusic(str: string, type = 'artist') {
    const param = '&offset=0' + '&limit=20' + '&type=' + type + '&market=US';
    const query = 'search?query=' + str + param;
    return this.getHeader(query);
  }
  getArtist(id: string) : any{
    const query = `artists/${id}`;
    return this.getArtist(query);
  }
}
