import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { Verse } from 'src/interfaces/interfaces';
import { VerseUp } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public verseup: VerseUp;
  public verse: Verse[];

  constructor(private router: Router, private homeService: HomeService) { }

  ngOnInit() {

    this.homeService.getVerse()
    .subscribe(resp => {
      this.verseup = resp;
      this.verse = resp.verse;
      console.log(this.verseup);
      console.log(this.verse);
    });
  }

  pampe() {
    this.router.navigate(['/pampe']);
  }


}
