
import { Storage } from '@ionic/storage';
import { Component , OnInit} from '@angular/core';
import { NavParams } from 'ionic-angular';


@Component({
  template: `
    <ion-header>
      <ion-toolbar color= "green-lemon">
      <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>
        <ion-title>My Profile</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content color="light-purple">
    <ion-grid class="transparent">
    <ion-row>
      <ion-col col-12><h2>Welcome to the app {{name}}</h2></ion-col>
      <ion-col col-12>My devices</ion-col>
      <ion-col col-12 *ngFor="let device of devices">{{device.title}}</ion-col>
    </ion-row>
  </ion-grid>
    </ion-content>
`})
export class ProfileTab implements OnInit {
  devices: Array<{title: string}>;
  col;
  name;

  constructor(public params: NavParams, private storage: Storage) { 
    this.devices = [ { title:'Greenhouse' } ];
    this.col = this.devices.length;
    console.log(this.col);
    console.log(this.devices);
  }

  ngOnInit(): void {
    this.name =  this.storage.get('name').then((val) => {
      this.name = val;
    });
  }
}

