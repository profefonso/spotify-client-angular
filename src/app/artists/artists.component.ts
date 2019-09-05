import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../api.service'

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  artist;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
    ) { }

  ngOnInit() {
    let token = localStorage.getItem("TOKEN");
    if (token){
      
      this.apiService.getArtistInfo(
        token, 
        this.route.snapshot.params.id
        ).subscribe((data)=>{
        
        this.artist = data;
        console.log(this.artist);
      });
    }
  }

}
