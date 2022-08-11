import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BotanaPage } from './botana.page';

const routes: Routes = [
  {
    path: '',
    component: BotanaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BotanaPageRoutingModule {}
