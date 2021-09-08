import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Album } from '../album/album';
import { Favorite } from '../favorite/favorite';
import { Favorites } from '../favorite/favorites';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private toastrService:ToastrService) {}

  getFavorites(): Favorite[] {
    return Favorites;
  }

  addToFavorite(album: Album) {
    let item = Favorites.find((f) => f.album.id === album.id);

    if (!item) {
      let favItem: Favorite = { album: album };
      Favorites.push(favItem);
      this.toastrService.success("Favorilere eklendi", album.title)
    } else {
      this.toastrService.error("Daha önce eklediniz.", album.title)
    }
  }

  removeFromFavorite(album:Album){
    let item=Favorites.find(f=>f.album.id===album.id);

    if(item){
      Favorites.splice(Favorites.indexOf(item),1)
      this.toastrService.success("Favoriler'den çıkarıldı", album.title)
    }else{
      this.toastrService.error("Daha önce sildiniz", album.title)
    }
  }
}
