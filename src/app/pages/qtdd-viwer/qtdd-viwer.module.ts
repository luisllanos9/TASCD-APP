import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QtddViwerPageRoutingModule } from './qtdd-viwer-routing.module';

import { QtddViwerPage } from './qtdd-viwer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QtddViwerPageRoutingModule
  ],
  declarations: [QtddViwerPage]
})
export class QtddViwerPageModule {}
