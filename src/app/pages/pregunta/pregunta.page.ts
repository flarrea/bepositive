import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
})
export class PreguntaPage implements OnInit {

  consejo: any = {};
  request: any = {};
  day_after_tomorrow: string;
  two_years_later: string;

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams
  ) {
    this.consejo = navParams.data;
   }

  ngOnInit() {
    // start date - at the earliest the day after tomorrow
    let today = new Date();
    let day_after_tomorrow
      = new Date(today.getTime() + 1000 * 60 * 60 * 24 * 2);
    this.day_after_tomorrow
      = day_after_tomorrow.toISOString().slice(0, 10);


    // end date - at the latest in two years
    let two_years_later
      = new Date(day_after_tomorrow.getTime()
        + 1000 * 60 * 60 * 24 * 365 * 2);
    this.two_years_later = two_years_later.toISOString()
      .slice(0, 10);

  }

  // user clicked 'Send request'
  send() {
    console.log('Solicitud de contacto',
      this.request.Date,
      this.request.Time);

    console.log('por',
      this.request.FirstName,
      this.request.LastName,
      this.request.Email);
  }

  // user clicked 'Cancel'
  cancel() {
    this.modalCtrl.dismiss();
  }
}

