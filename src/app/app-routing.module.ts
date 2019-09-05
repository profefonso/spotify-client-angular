import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ReleasesComponent } from './releases/releases.component';
import { ArtistsComponent } from './artists/artists.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'lanzamientos', component:ReleasesComponent},
  {path: 'artista/:id', component:ArtistsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
