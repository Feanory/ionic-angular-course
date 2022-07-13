import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { Place } from 'src/app/places/place.model';
import { PlacesService } from 'src/app/places/places.service';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if (!params.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }

      this.place = this.placesService.getPlaceById(params.get('placeId'));
    });
  }

  onBookPlace() {
    this.modalCtrl
      .create({ component: CreateBookingComponent, componentProps: { selectedPlace: this.place } })
      .then(modalEl => {
        modalEl.present();

        return modalEl.onDidDismiss();
      })
      .then(({ data, role }) => {
        if (role === 'confirm') {
          console.log('Booked', data);
        }
      });
  }

}
