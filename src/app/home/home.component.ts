import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  CLIENT_ID = '5acd2a52124042d5b06b0b17882a95e7';
  REDIRECT_URL = 'http://localhost:4200';
  SCOPE = 'user-read-private user-read-email';

  access_token: string;
  state: string;

  constructor(private router: Router) { 
    let params = this.getHashParams();
    this.access_token = params['access_token']
    this.state = params['state'];
  }

  ngOnInit() {
    let storedState = localStorage.getItem("Status");
    if (this.access_token && (this.state == null || this.state !== storedState)) {
      this.router.navigate(['']);
    }else{
      localStorage.removeItem("Status");
      if(this.access_token){
        localStorage.setItem("TOKEN", this.access_token);
        this.router.navigate(['/lanzamientos']);
      }
    }
  }

  onLoginUser(){
    this.state = this.generateRandomString(16)
    localStorage.setItem("Status", this.state);

    let urlSpotify= 'https://accounts.spotify.com/authorize';
    urlSpotify += '?response_type=token';
    urlSpotify += '&client_id=' + encodeURIComponent(this.CLIENT_ID);
    urlSpotify += '&scope=' + encodeURIComponent(this.SCOPE);
    urlSpotify += '&redirect_uri=' + encodeURIComponent(this.REDIRECT_URL);
    urlSpotify += '&state=' + encodeURIComponent(this.state);

    window.location.href = urlSpotify;
  }

  private getHashParams() {
    let hashParams = {};
    let e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  private generateRandomString(length): string {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

}
