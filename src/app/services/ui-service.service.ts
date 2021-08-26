import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  constructor(private alertController: AlertController) { }

  async presentAlert( message: string) {
    const alert = await this.alertController.create({
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
