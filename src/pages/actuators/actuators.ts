import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'actuators-details.html',
})
export class ActuatorsDetailsPage {
  item;

  constructor(params: NavParams) {
    this.item = params.data.item;
  }
}

@Component({
  selector: 'page-list',
  templateUrl: 'actuators.html'
})
export class ActuatorsPage {
  items = [];

  constructor(public nav: NavController) {
    this.items = [
      {
        'title': 'Sprinkler',
        'icon': 'color-fill',
        'description': 'Bomba de agua para fuente casera de 12Vdc',
        'color': '#3575AC'
      },
      {
        'title': 'Ventiladores',
        'icon': 'nuclear',
        'description': 'Sistema de ventilación',
        'color': '#FFFFF'
      },
      {
        'title': 'Humidificador',
        'icon': 'water',
        'description': 'Generador de humedad',
        'color': '#3575AC'
      },
      {
        'title': 'Iluminación',
        'icon': 'bulb',
        'description': 'One of the most popular programming languages on the Web!',
        'color': '#FFD439'
      },
      {
        'title': 'Gate',
        'icon': 'exit',
        'description': 'Open the gate. se utilizara un pequeño motor de 12Vdc para levantar el carrete que tire de la compuerta.',
        'color': '#FFFFF'
      },
    
    ]
  }

  openNavDetailsPage(item) {
    this.nav.push(ActuatorsDetailsPage, { item: item });
    
  }


}