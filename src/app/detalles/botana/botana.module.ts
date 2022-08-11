import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BotanaPageRoutingModule } from './botana-routing.module';

import { BotanaPage } from './botana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotanaPageRoutingModule
  ],
  declarations: [BotanaPage]
})
export class BotanaPageModule {}
