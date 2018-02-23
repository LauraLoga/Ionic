import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-about',
    template: `
    <ion-header>
    <ion-navbar>
      <ion-title>
        About
      </ion-title>
    </ion-navbar>
  </ion-header>
  
  <ion-content padding>
  <h3>Ionic Menu Starter</h3>

  <p>
    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.
  </p>

  <button ion-button secondary menuToggle>Toggle Menu</button>
  </ion-content>`
  
  })

export class AboutPage {

    constructor(public navCtrl: NavController) {
  
    }
  
  }
  @Component({
    selector: 'page-contact',
    template: `
    <ion-header>
    <ion-navbar>
      <ion-title>
        Contact
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
  export class ContactPage {
  
    constructor(public navCtrl: NavController) {
  
    }
  
  }