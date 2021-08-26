import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QtddViwerPage } from './qtdd-viwer.page';

const routes: Routes = [
  {
    path: '',
    component: QtddViwerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QtddViwerPageRoutingModule {}
