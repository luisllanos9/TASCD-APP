import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { VerseUp } from 'src/interfaces/interfaces';


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor( private http: HttpClient) { }

  public getVerse() {
    return this.http.get<VerseUp>(`${ URL }/verse/`);
  }
}
  