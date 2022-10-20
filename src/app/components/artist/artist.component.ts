import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
})
export class ArtistComponent {

  artist: any = {};
  topTracks: any [] = [];
  loadingArtist: boolean;

  constructor(private router:ActivatedRoute,
              private spotify: SpotifyService) { 
                this.loadingArtist = true;
    
    this.router.params.subscribe ( params =>{
    this.getArtistas( params['id'] );
      
    });
  }

  getArtistas( id: string ){

    this.spotify.getArtistas( id )
        .subscribe( artista => {
          console.log(artista);
          this.artist = artista;
          this.loadingArtist = false;
        });
  
        
      }
      




}
function getTopTracks(id: string, String: StringConstructor) {
  throw new Error('Function not implemented.');
}

