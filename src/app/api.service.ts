import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getAlbumsNewReleases(token, offset, limit){    
    const headers = new HttpHeaders()
            .set("Authorization", "Bearer "+token);

    return this.httpClient.get(
      'https://api.spotify.com/v1/browse/new-releases',
      {
        params:{
          country: "CO",
          limit: limit,
          offset: offset
        },
        headers:headers
      },
      
      );
  }

  getArtistInfo(token, artistId){
    let urlApi = 'https://api.spotify.com/v1/artists/';
    let url = urlApi.concat(artistId);
    const headers = new HttpHeaders()
            .set("Authorization", "Bearer "+token);

    return this.httpClient.get(
      url,
      {
        headers:headers
      },
      
      );
  }


  getArtistTopTracks(token, artistId){
    let urlApi = 'https://api.spotify.com/v1/artists/';
    let url = urlApi.concat(artistId, "/top-tracks?country=CO");
    const headers = new HttpHeaders()
            .set("Authorization", "Bearer "+token);

    return this.httpClient.get(
      url,
      {
        headers:headers
      },
      
      );
  }

}
