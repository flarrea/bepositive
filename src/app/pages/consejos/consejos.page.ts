import { Component, OnInit } from '@angular/core';
import { ApiService }from 'src/app/services/api.service';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { EncuestaPage } from './../encuesta/encuesta.page';
import { FCM } from '@ionic-native/fcm/ngx';
import _ from 'lodash';

@Component({
  selector: 'app-consejos',
  templateUrl: './consejos.page.html',
  styleUrls: ['./consejos.page.scss'],
})
export class ConsejosPage implements OnInit {

  consejos: any;
  consejo = null;

  constructor(private apiService:ApiService, private activatedRoute: ActivatedRoute, private modalCtrl: ModalController, private fcm: FCM) { }
 
  ngOnInit() {
    this.fcm.getToken().then(token =>{
    console.log(token);
    });
    
     this.apiService.getConsejos()
     .then(data => this.consejos = data);
  }


  // User typed a search term into the Searchbar
  search(ev) {
    let searchText = ev.detail.value;
    // 1st filter by category & criteria
    this.consejos = _.filter(this.apiService.consejos);
    // 2nd filter by searchText (if not empty)
    if (searchText != '') {
      this.consejos = this.consejos.filter((consejo) => {
        return (consejo.Nombre.toLowerCase()
          .indexOf(searchText.toLowerCase()) > -1);
      });
    }
  }

        // user clicked 'request' button
        async presentModal() {
          const modal = await this.modalCtrl.create({
            component: EncuestaPage,
            componentProps: this.consejo
          });
          modal.present();
        }
 
}
