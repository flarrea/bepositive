import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { FavoritosService } from 'src/app/services/favoritos.service';
import { PreguntaPage } from '../pregunta/pregunta.page';
import _ from 'lodash';
import { ActionSheetController, AlertController, ModalController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  consejo = null;
  isFavorite: boolean;
  
  showSocial: boolean;

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService, public favService: FavoritosService, private actionSheetCtrl: ActionSheetController, private alertCtrl: AlertController, private socialSharing: SocialSharing,  private modalCtrl: ModalController) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.consejo = _.find(this.apiService.consejos, ['ID', parseInt(id)]);
    this.isFavorite = this.favService.favIDs.indexOf(parseInt(id)) != -1;
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Consejo',
      buttons: [
        {
          text: 'Solicitud',
          handler: () => {
            // We implement this later with a Modal Controller.
            //window.location.href = "/request";
            this.presentModal()
          }
        },
        {
          text: (this.isFavorite) ? 'Remover de Favoritos'
            : 'Agregar a Favoritos',
          role: (this.isFavorite) ? 'destructive' : '',
          handler: () => {
            if (this.isFavorite) {
              this.presentAlert();
            } else {
              this.favService.add(this.consejo);
              this.isFavorite = true;
            }
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Remover Favorito?',
      message: '¿De verdad quieres eliminar este favorito?',
      buttons: [
        {
          text: 'No'
        },
        {
          text: 'Sí',
          handler: () => {
            this.favService.remove(this.consejo);
            this.isFavorite = false;
          }
        }
      ]
    });
    await alert.present();
  }

  
    // user clicked share button
    toggleSocial() {
      this.showSocial = !this.showSocial;
    }
  
     // User clicked one of the social app buttons
  openSocial(app) {
    const sbj = 'BePositive';
    const img = '{{consejo.Imagen}}';
    const msg = 'BePositive te ofrece orientación y ayuda "'
      + this.consejo.Nombre
      + '".\n\n¿Está usted en?\n\n'
      + 'Enviado desde mi aplicación BePositive';

    this.socialSharing.canShareVia(app, msg, sbj, img)
      .then(() => {
        switch (app) {
          case 'facebook':
            this.socialSharing.shareViaFacebook(msg, img);
            break;
          case 'instagram':
            this.socialSharing.shareViaInstagram(msg, img);
            break;
          case 'twitter':
            this.socialSharing.shareViaTwitter(msg, img);
            break;
          case 'whatsapp':
            this.socialSharing.shareViaWhatsApp(msg, img);
            break;
        }
      })
      .catch(() => {
        this.errorOpenSocial(app, msg, sbj, img);
      });
  }

   // Error trying to open a social app
   async errorOpenSocial(app, msg, sbj, image) {
    const alert = await this.alertCtrl.create({
      header: app + ' no funciona!',
      message: 'Desafortunadamente, se produjo un error al compartir a través de ' + app + '!\n\n'
        + '¿Te gustaría probar una alternativa?',
      buttons: [
        {
          text: 'No'
        },
        {
          text: 'Simple email',
          handler: () => {
            const mailmsg = msg.replace(new RegExp('\n', 'g'), '%0A');
            window.location.href = 'mailto:?subject=' + sbj + '&body=' + mailmsg;
          }
        },
        {
          text: 'Sí, absolutamente',
          handler: () => {
            this.socialSharing.share(msg, sbj, image);
          }
        }
      ]
    });
    await alert.present();
  }


      // user clicked 'request' button
      async presentModal() {
        const modal = await this.modalCtrl.create({
          component: PreguntaPage,
          componentProps: this.consejo
        });
        modal.present();
      }



}
