import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Verse, PostPampe, PampeResponse } from '../../interfaces/interfaces';
import { Storage } from '@ionic/storage';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PampeService {

  token = null;
  pampeResponse: PampeResponse;

  constructor( private http: HttpClient,  private storage: Storage) { }


  //Send PAMPE - QTDD
  async getPampe(qtdd: string) {

    await this.loadToken();

    const data = {qtdd: qtdd};

    const headers = new HttpHeaders({
      'x-token': this.token
    });

    return new Promise( resolve => {
      this.http.post(`${URL}/pampe/`, data, { headers }).subscribe( resp => {
        console.log(resp);
  
        if(resp['ok']) {
          resolve(true);
        }else{
          resolve(false);
        }
  
      });
    });
    
  }

  //Get PAMPE-By Day
  async getPampeDay(date: string) {

    await this.loadToken();

    const headers = new HttpHeaders({
      'x-token': this.token,
      'created': date
    });

    return new Promise( resolve => {
      this.http.get<PostPampe>(`${URL}/pampe/day`, {headers}).subscribe( resp => {
  
        if(resp['ok']) {
          if(resp.pampe.length == 0) {
            resolve(true);
          }else{
            resolve(false);
          }
        }else{
          resolve(false);
        }
  
      });
    });
    
  }

  //get QTDDS
  async getPampeQTDD() {

    await this.loadToken();

    const headers = new HttpHeaders({
      'x-token': this.token,
    });

    return new Promise( resolve => {
      this.http.get<PampeResponse>(`${URL}/pampe/`, {headers}).subscribe( resp => {
  
        if(resp['ok']) {
          if(resp.pampe.length == 0) {

            //TASCD not done yet
            resolve(false);
          }else{
            // TASCD Done
            this.pampeResponse = resp;
            resolve(true);
          }
          
        }else{
          resolve(false);
        }
  
      });
    });
    
  }
  

  async loadToken() {
    this.token = await this.storage.get('token') || null;
  }

  //Get the verse
  getVerse() {
    return this.http.get<Verse>(`${ URL }/verse/`);
  }
}
