import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CameraOptions, Camera } from "@ionic-native/camera/ngx";
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { UserProfile } from 'src/app/models/user';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  public userProfile: UserProfile;
 
  myProfileImage;

  constructor(
    private _camera: Camera,
    private _alertController: AlertController,
    private authService: AuthService,
    private router: Router,
    private profileService: ProfileService,
    ) { }

  ngOnInit() {
    this.profileService.getUserProfile().then(profile$ => {
      profile$.subscribe(userProfile => {
        this.userProfile = userProfile;
      });
    });
  }

  async selectImageSource(){
    const camerOptions: CameraOptions = {
      quality: 100,
      destinationType: this._camera.DestinationType.DATA_URL,
      encodingType: this._camera.EncodingType.JPEG,
      mediaType: this._camera.MediaType.PICTURE,
      targetHeight: 200,
      correctOrientation: true,
      sourceType: this._camera.PictureSourceType.CAMERA
    };

    const galleryOptions: CameraOptions = {
      quality: 100,
      destinationType: this._camera.DestinationType.DATA_URL,
      encodingType: this._camera.EncodingType.JPEG,
      mediaType: this._camera.MediaType.PICTURE,
      targetHeight: 200,
      correctOrientation: true,
      sourceType: this._camera.PictureSourceType.SAVEDPHOTOALBUM
    };
    const alert = await this._alertController.create({
      header: "Seleccione una fuente",
      message: "Seleccione la fuente donde está su imagen",
      buttons: [
        {
          text: "Cámara",
          handler: ()=> {
            this._camera.getPicture(camerOptions)
            .then((imageData)=> {
              this.myProfileImage = "data:image/jpeg;base64," + imageData;
            });
          }
        },
        {
          text: "Galería",
          handler: ()=> {
            this._camera.getPicture(galleryOptions)
            .then((imageData)=> {
              this.myProfileImage = "data:image/jpeg;base64," + imageData;
            });
          }
        }
      ]
    });

    await alert.present();
  }

  
logOut(){
  this.authService.logout()
  .then(res => {
    this.router.navigate(["/login"]);
  }, err => {
    console.log(err);
  })
}

/*
async logOut(): Promise<void> {
  await this.authService.logout();
  window.location.reload();
  //this.router.navigateByUrl('login');
  //this.router.navigate(['login']);
}
*/

/*
async logOut(): Promise<void> {
  await this.authService.logout().then(() => {
    //localStorage.clear();
    window.location.reload();
    this.router.navigate(['login']);
  });
}
*/
  async updateName(): Promise<void> {
    const alert = await this._alertController.create({
      subHeader: 'Your name',
      inputs: [
        {
          type: 'text',
          name: 'fullName',
          placeholder: 'Your full name',
          value: this.userProfile.fullName
        }
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileService.updateName(data.fullName);
          }
        }
      ]
    });
    return await alert.present();
  }

  async updateEmail(): Promise<void> {
    const alert = await this._alertController.create({
      inputs: [
        { type: 'text', name: 'newEmail', placeholder: 'Your new email' },
        { name: 'password', placeholder: 'Your password', type: 'password' }
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileService
              .updateEmail(data.newEmail, data.password)
              .then(() => {
                console.log('Email Changed Successfully');
              })
              .catch(error => {
                console.log('ERROR: ' + error.message);
              });
          }
        }
      ]
    });
    return await alert.present();
  }

  async updatePassword(): Promise<void> {
    const alert = await this._alertController.create({
      inputs: [
        { name: 'newPassword', placeholder: 'New password', type: 'password' },
        { name: 'oldPassword', placeholder: 'Old password', type: 'password' }
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileService.updatePassword(
              data.newPassword,
              data.oldPassword
            );
          }
        }
      ]
    });
    return await alert.present();
  }

}

