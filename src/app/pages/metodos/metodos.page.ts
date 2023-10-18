import { Component, OnInit } from '@angular/core';
import { ApiService }from 'src/app/services/api.service';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { EncuestaPage } from './../encuesta/encuesta.page';
import _ from 'lodash';

@Component({
  selector: 'app-metodos',
  templateUrl: './metodos.page.html',
  styleUrls: ['./metodos.page.scss'],
})
export class MetodosPage implements OnInit {

  metodos: any;
  metodo = null;

  constructor(private apiService:ApiService, private activatedRoute: ActivatedRoute, private modalCtrl: ModalController) { }
 
  ngOnInit() {
     this.apiService.getMetodos()
     .then(data => this.metodos = data);
  }


  // User typed a search term into the Searchbar
  search(ev) {
    let searchText = ev.detail.value;
    // 1st filter by category & criteria
    this.metodos = _.filter(this.apiService.metodos);
    // 2nd filter by searchText (if not empty)
    if (searchText != '') {
      this.metodos = this.metodos.filter((metodo) => {
        return (metodo.Nombre.toLowerCase()
          .indexOf(searchText.toLowerCase()) > -1);
      });
    }
  }

        // user clicked 'request' button
        async presentModal() {
          const modal = await this.modalCtrl.create({
            component: EncuestaPage,
            componentProps: this.metodo
          });
          modal.present();
        }
 
}
