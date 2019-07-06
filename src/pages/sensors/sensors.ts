import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-sensors',
  templateUrl: 'sensors.html'
})
export class SensorsPage {
  selectedItem: any;
  sensorsList: Array<{ title: string, note: string, unity:string, icon: string, color: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('sensor');

    // Let's populate this page with some filler content for funzies
    this.sensorsList = [
      { title: 'Temperature',note: 'Measures the environmental temperature', unity: 'ºC ',icon:'thermometer',color: '#F46529' },
      { title: 'Humidity',note: 'Measures the humidity of the environment', unity: '%',icon:'water',color: '#0CA9EA'},
      { title: 'Barometric Pressure',note: 'Measures air pressure in the environment', unity: 'Kpa',icon:'speedometer',color: '#0CA9EA'},
      { title: 'Ambient light',note: 'Measures the luminosity of the environment', unity: 'lux',icon:'bulb',color: '#FFD439' },
      { title: 'Wind Speed',note: 'Measures the speed of the wind', unity: 'Km/s',icon:'nuclear',color: '#412159' },
      { title: 'Wind Direction',note: 'Measures time', unity: 'North, East, West or South',icon:'trending-up',color: '#412159' },
      { title: 'Rain volume',note: 'Able to perceive the amount of water', unity: ' %',icon:'rainy',color: '#3575AC' },
      { title: 'Solar radiation',note: 'Measures the power per unit area, received from the Sun in the form of electromagnetic radiation as reported', unity: 'W/m2',icon:'sunny',color: '#FFD439' },
    ];
    
    
  }

}
