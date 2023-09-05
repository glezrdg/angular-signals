import { Injectable } from '@angular/core';
import { Oferta } from '../core/models/oferta.model';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OfertasService {
  ofertas: Oferta[] = [
    {
      id: 1,
      name: 'iPhone 12',
      price: 799,
      description: 'A large phone with one of the best screens',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-mini-black-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202794000',
    },
    {
      id: 2,
      name: 'iPhone 12 Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-mini-black-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202794000',
    },
    {
      id: 3,
      name: 'iPhone 12 Pro',
      price: 999,
      description: 'A great phone with one of the best cameras',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-gold-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202844000',
    },
    {
      id: 4,
      name: 'iPhone 12 Pro Max',
      price: 1099,
      description: 'A great phone with one of the best cameras',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-gold-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202844000',
    },
    {
      id: 5,
      name: 'iPhone 11',
      price: 599,
      description: 'A great phone with one of the best cameras',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-gold-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202844000',
    },
    {
      id: 6,
      name: 'iPhone 11 Pro',
      price: 899,
      description: 'A great phone with one of the best cameras',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-gold-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202844000',
    },
  ];
  constructor() {}

  getOfertas(): Observable<Oferta[]> {
    return of(this.ofertas);
  }

  addOferta(oferta: Oferta) {
    return of(oferta).pipe(delay(1000));
  }
  getOfertaById(id: string): Observable<Oferta> {
    let oferta = this.ofertas.find((oferta) => oferta.id === parseInt(id));
    return of(oferta!);
  }

  deleteOferta(index: number) {
    return of(index);
  }
}
