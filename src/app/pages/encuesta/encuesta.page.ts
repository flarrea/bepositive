import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.page.html',
  styleUrls: ['./encuesta.page.scss'],
})
export class EncuestaPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
  }

    // user clicked 'Cancel'
    cancel() {
      this.modalCtrl.dismiss();
    }

      // user clicked 'Send request'
  send() {
    console.log('Encuesta enviada');
  }

}
