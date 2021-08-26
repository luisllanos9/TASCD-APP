import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pampe } from '../../../interfaces/interfaces';
import { Storage } from '@ionic/storage';
import { EmailComposer } from '@ionic-native/email-composer/ngx'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-qtdd-viwer',
  templateUrl: './qtdd-viwer.page.html',
  styleUrls: ['./qtdd-viwer.page.scss'],
})
export class QtddViwerPage implements OnInit {



  public pampe: Pampe;

  to = '';
  subject = '';
  body = '';

  constructor(private storage: Storage, private emailComposer: EmailComposer, public alertController: AlertController) {

  }

  async ngOnInit() {
    await this.storage.get('pampe').then((parameter: Pampe) => {
      console.log(parameter);
      this.pampe = parameter;
    });

  }

  async send() {
    await this.presentAlertPrompt();
    let email = {
      to: this.to,
      cc: [],
      bcc: [],
      attachment: [],
      subject: this.subject,
      body: this.pampe.verse + ' ' +this.pampe.qtdd,
      isHTML: false,
      app: 'Gmail'
    }
    console.log(email.body);  
    this.emailComposer.open(email);
    
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Enviar Email',
      inputs: [
        {
          name: 'Para',
          type: 'text',
          placeholder: 'Para'
        },
        {
          name: 'Asunto',
          type: 'text',
          placeholder: 'Asunto'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            this.to = data.Para;
            this.subject = data.Asunto;
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }


}
