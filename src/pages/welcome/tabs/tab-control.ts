import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


  @Component({
    selector: 'tab-control',
    template: `
    <ion-header>
    <ion-toolbar color= "green-lemon">
    <button ion-button menuToggle>
    <ion-icon name="menu"></ion-icon>
  </button>
      <ion-title>Control</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <ion-list-header>Follow us on Twitter</ion-list-header>
      <ion-item>
        <ion-icon name="ionic" item-start></ion-icon>
        @ionicframework
      </ion-item>
    </ion-list>
  </ion-content>`
  
  })
  export class ControlTab {
  
    constructor(public navCtrl: NavController) {
  
    }
  
  }