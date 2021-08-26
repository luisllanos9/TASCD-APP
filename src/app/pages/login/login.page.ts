import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { NavController, LoadingController } from '@ionic/angular';
import { LoginService } from '../../services/login.service';
import { UiServiceService } from '../../services/ui-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loading: HTMLIonLoadingElement;
  loginUser = {
    email: '',
    password: ''
  }
  cont: number;

  constructor(private loginService: LoginService, private NavCtrl: NavController, private uiService: UiServiceService, public loadingController: LoadingController, private faio: FingerprintAIO) { this.cont = 0; }

  ngOnInit() {
    this.finger();
  }

  async login(fLogin: NgForm) {
    this.presentLoading();

    if (this.loginUser.email == '' && this.loginUser.password == '') {
      this.cont = this.cont + 1;
      setTimeout(() => {
        this.loading.dismiss();
        this.uiService.presentAlert('Usuario y contraseña no son correctos.');
      }, 1000);
      
      

      if (this.cont == 3) {
        this.cont = 0;
        setTimeout(() => {
          this.uiService.presentAlert('¿Olvidaste tu contraseña?.');
        }, 3000);
      }
    }


    if (fLogin.invalid) { return; }
    const valid = await this.loginService.getLogin(this.loginUser.email, this.loginUser.password);

    if (valid) {
      //Move to page
      setTimeout(() => {
        this.loading.dismiss();
        this.NavCtrl.navigateRoot('/home', { animated: true });
      }, 1000);

    } else {
      //Show Alert

      setTimeout(() => {
        this.cont = this.cont + 1;
        this.loading.dismiss();
        this.uiService.presentAlert('Usuario y contraseña no son correctos.');
      }, 1000);


      
      if (this.cont == 3) {
        this.cont = 0;
        setTimeout(() => {
          this.uiService.presentAlert('¿Olvidaste tu contraseña?.');//Creation of Forgot Password
        }, 3000);
      }

    }



  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Ingresando...',
    });
    await this.loading.present();
  }

  finger() {
    this.faio.show({
      title: 'Biometric Authentication', // (Android Only) | optional | Default: "<APP_NAME> Biometric Sign On"
      subtitle: 'Coolest Plugin ever', // (Android Only) | optional | Default: null
      description: 'Please authenticate' // optional | Default: null
    })
    .then(result => {
      this.NavCtrl.navigateRoot('/home', { animated: true });
    })
    .catch(err => {
      console.log('Err', err);
    })
  }


}
