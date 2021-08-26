import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';
import { User } from 'src/interfaces/interfaces';

const url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  token = null;
  user: User;  

  constructor(private http: HttpClient, private storage: Storage, private NavCtrl: NavController){ }


  //LOGIN
  getLogin(email: string, password: string) {
    const data = {email: email, password: password};

    return new Promise( resolve => {
      this.http.post(`${url}/user/login/`, data).subscribe( resp => {
        console.log(resp);
  
        if(resp['ok']) {
          this.saveToken(resp['token']);
          resolve(true);
        }else{
          this.token = null;
          this.storage.clear();
          resolve(false);
        }
  
      });
    });
    
  }

  //REGISTER
  getRegister( user: User)  {

    return new Promise( resolve => {
      this.http.post(`${url}/user/register`,user).subscribe( resp => {
        console.log(resp);

        if(resp['ok']) {
          this.saveToken(resp['token']);
          resolve(true);
        }else{
          this.token = null;
          this.storage.clear();
          resolve(false);
        }
      });

    });
  }

  //LOGOUT
  logout() {
    this.token = null;
    this.user = null;
    this.storage.clear();
    this.NavCtrl.navigateRoot('login',{animated: true} );
  }


  //SAVE_TOKEN
  async saveToken( token: string) {
    this.token = token;
    this.storage.set('token', token);

    await this.validateToken();
  }

  //LOAD_TOKEN
  async loadToken() {
    this.token = await this.storage.get('token') || null;
  }

  //VALIDATE_TOKEN
  async validateToken (): Promise<boolean> {

    await this.loadToken();

    if(!this.token) {
      this.NavCtrl.navigateRoot('/login');
      return Promise.resolve(false);
    }

    return new Promise<boolean> ( resolve => {

      const headers = new HttpHeaders({
        'x-token': this.token
      });

      this.http.get(`${ url }/user/`, {headers}).subscribe( resp => {
        console.log(resp);
        if(resp['ok']){
          this.user = resp['user'];
          resolve(true);
        }else{
          this.NavCtrl.navigateRoot('/login');
          resolve(false);
        }
      });


    });
  }
}
