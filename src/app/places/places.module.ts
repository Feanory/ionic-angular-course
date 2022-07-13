import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { PlacesPageRoutingModule } from './places-routing.module';

import { PlacesPage } from './places.page';

import { PlacesService } from 'src/app/places/places.service';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PlacesPageRoutingModule
  ],
  declarations: [PlacesPage],
  providers: [PlacesService]
})
export class PlacesPageModule {}
