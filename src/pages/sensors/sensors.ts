import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-sensors',
  templateUrl: 'sensors.html'
})
export class SensorsPage {
  selectedItem: any;
  sensorsList: Array<{ title: string, note: string, icon: string, color: string, attr: Array<{}> }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('sensor');

    // Let's populate this page with some filler content for funzies
    this.sensorsList = [
      { title: 'Luminity',note: 'Measures the luminosity of the environment',icon:'bulb',color: '#FFD439', attr:['IluminacionHabitaculo','IluminacionExterior'] },
      { title: 'Rain',note: 'Able to perceive if it is raining to be able to perform the corresponding action',icon:'rainy',color: '#3575AC', attr:['HumedadExterior'] },
      { title: 'Temperature',note: 'Measures the environmental temperature',icon:'thermometer',color: '#F46529', attr:['TemperaturaHabitaculo','TemperaturaExterior'] },
      { title: 'Clock',note: 'Clock that measures time',icon:'time',color: '#412159', attr:['Hora','Alarma'] },
      { title: 'Humidity',note: 'Measures the humidity of the environment',icon:'water',color: '#0CA9EA', attr:['HumedadHabitaculo','HumedadCultivo']}
    ];
    
    
  }

  /* for (let i = 1; i < 11; i++) {
     this.items.push({
       title: 'Item ' + i,
       note: 'This is item #' + i,
       icon: this.icons[Math.floor(Math.random() * this.icons.length)]
     });
   }
}

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(sensorsPage, {
      item: item
    });
  }*/
}
