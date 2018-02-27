import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


  @Component({
    selector: 'tab-control',
    template: `
    <ion-header>
    <ion-navbar>
      <ion-title>
        Control
      </ion-title>
    </ion-navbar>
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