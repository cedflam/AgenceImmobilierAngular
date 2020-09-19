import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  properties = [
    {
      title: "Ma Super Maison",
      category: "Maison",
      sold: true
    },
    {
      title: "Petit appartement !",
      category: "Appartement",
      sold: false
    },
    {
      title: "Belle maison.",
      category: 'Maison',
      sold: false
    }
  ];

  propertiesSubject = new Subject<any[]>();

  constructor() { }

  emitProperties() {
    this.propertiesSubject.next(this.properties);
  }

  getProperties() {}
}
