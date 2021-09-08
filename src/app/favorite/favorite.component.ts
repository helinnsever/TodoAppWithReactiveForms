import { Component, OnInit } from '@angular/core';
import { Album } from '../album/album';
import { FavoriteService } from '../services/favorite.service';
import { Favorite } from './favorite';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  favorites: Favorite[]=[]
  constructor(private favoriteService: FavoriteService) { }



  ngOnInit(): void {
    this.favorites = this.favoriteService.getFavorites()
  }

  removeFromFavorite(album:Album){
    this.favoriteService.removeFromFavorite(album);
  }

}
