import { Injectable } from '@angular/core';
import { Place } from 'src/app/places/place.model';

@Injectable()
export class PlacesService {

  private placesList: Place[] = [
    {
      id: 'p1',
      title: 'Manhattan Mansion',
      description: 'In the heart of New York',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Manhattan_House_65_jeh.JPG/500px-Manhattan_House_65_jeh.JPG',
      price: 149.99
    },
    {
      id: 'p2',
      title: 'Foggy Palace',
      description: 'Nice place',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Foggy_Day_Neuschwanstein_Castle_%28229936735%29.jpeg',
      price: 189.99
    }
  ];

  constructor() { }

  get places() {
    return [...this.placesList];
  }

  getPlaceById(placeId: string) {
    return this.placesList.find(({ id }) => placeId === id);
  }
}
