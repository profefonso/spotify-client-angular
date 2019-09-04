import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service'


@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.css']
})
export class ReleasesComponent implements OnInit {
  albums;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    let token = localStorage.getItem("TOKEN");
    if (token){
      this.apiService.getAlbumsNewReleases(token, 0, 10).subscribe((data)=>{
        
        this.albums = data['albums'];
        console.log(this.albums);
      });
    }
  }

}
