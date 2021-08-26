import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QTDDService {

  token = null; 

  constructor(private http: HttpClient, private storage: Storage) { }


}
