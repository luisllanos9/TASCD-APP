import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, LoadingController } from '@ionic/angular';
import { PampeService } from 'src/app/services/pampe.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import * as moment from 'moment';

moment.locale('es');

@Component({
  selector: 'app-pampe',
  templateUrl: './pampe.page.html',
  styleUrls: ['./pampe.page.scss'],
})
export class PAMPEPage implements OnInit {

  loading: HTMLIonLoadingElement;
  pampe = {
    text: ''
  }

  constructor(private NavCtrl: NavController, private uiService: UiServiceService, private pampeService: PampeService, public loadingController: LoadingController) { }

  ngOnInit() {

  }

  async qtdd(fQtdd: NgForm) {
    this.presentLoading();

    var today = moment();
    today.subtract({hours: 6});
    console.log(today.format('dddd Do MMMM YYYY'));
    const sw = await this.pampeService.getPampeDay(today.format('dddd Do MMMM YYYY'));

    if (sw) {
      if (fQtdd.invalid) { return; }
      const valid = await this.pampeService.getPampe(this.pampe.text);

      if (valid) {
        //Move to page
        setTimeout(() => {
          this.loading.dismiss();
          this.NavCtrl.navigateRoot('/qtdd', { animated: true });
        });
      } else {
        //Show Alert
        setTimeout(() => {
          this.loading.dismiss();
          this.uiService.presentAlert('Hey! Dios te quiere decir algo, sigue intentando...');
        });
      }

    } else {
      setTimeout(() => {
        this.loading.dismiss();
        this.uiService.presentAlert('Ya realizaste tu TASCD de hoy!');
      });
    }



  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Guardando TASCD...',
    });
    await this.loading.present();
  }

}
