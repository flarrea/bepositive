import { Component, OnInit } from '@angular/core';
import { ApiService }from 'src/app/services/api.service';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { EncuestaPage } from './../encuesta/encuesta.page';
import _ from 'lodash';

@Component({
  selector: 'app-conceptos',
  templateUrl: './conceptos.page.html',
  styleUrls: ['./conceptos.page.scss'],
})
export class ConceptosPage implements OnInit {

  conceptos: any;
  concepto = null;

  constructor(private apiService:ApiService, private activatedRoute: ActivatedRoute, private modalCtrl: ModalController) { }
 
  ngOnInit() {
     this.apiService.getConceptos()
     .then(data => this.conceptos = data);
  }


  // User typed a search term into the Searchbar
  search(ev) {
    let searchText = ev.detail.value;
    // 1st filter by category & criteria
    this.conceptos = _.filter(this.apiService.conceptos);
    // 2nd filter by searchText (if not empty)
    if (searchText != '') {
      this.conceptos = this.conceptos.filter((concepto) => {
        return (concepto.Nombre.toLowerCase()
          .indexOf(searchText.toLowerCase()) > -1);
      });
    }
  }

        // user clicked 'request' button
        async presentModal() {
          const modal = await this.modalCtrl.create({
            component: EncuestaPage,
            componentProps: this.concepto
          });
          modal.present();
        }
 
}


