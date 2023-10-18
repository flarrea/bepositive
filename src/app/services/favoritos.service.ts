import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  public favIDs: Array<number>;
  public favConsejos: Array<any>;

  constructor(private storage: Storage) { }

  initialize(consejos) {
    this.favConsejos = [];
    //this.favIDs = JSON.parse(window.localStorage.getItem('FavoritesIDs'));
    this.storage.ready().then(() => {
      this.storage.get('FavoritesIDs').then(ids => {
      this.favIDs = ids;
        if (this.favIDs == null) {
          this.favIDs = [];
        } else {
          consejos.forEach(consejo => {
            if (this.favIDs.indexOf(consejo.ID) != -1) {
              this.favConsejos.push(consejo);
            }
          });
        }
      });
    });
  }
  add(consejo) {
    this.favIDs.push(consejo.ID);
    this.favConsejos.push(consejo);
    // window.localStorage.setItem('FavoritesIDs',
    // JSON.stringify(this.favIDs));
    this.storage.set('FavoritesIDs', this.favIDs);
  }
  remove(consejo) {
    let removeIndex: number = this.favIDs.indexOf(consejo.ID);
    if (removeIndex != -1) {
      this.favIDs.splice(removeIndex, 1);
      this.favConsejos.splice(removeIndex, 1);
      // window.localStorage.setItem('FavoritesIDs',
      // JSON.stringify(this.favIDs));
      this.storage.set('FavoritesIDs', this.favIDs);
    }
  }
}