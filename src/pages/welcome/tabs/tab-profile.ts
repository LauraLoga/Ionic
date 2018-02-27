
import { Component } from '@angular/core';
//import { ProfileTab } from './tab-profile';
import { ControlTab } from './tab-control';

@Component({
  selector: 'app.scss', // estilo de home.scss
  template: `<ion-header >
  <ion-navbar color= "green-lemon">
    <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>
    <ion-title >Main page</ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding>

<ion-tabs>
  <ion-tab [root]="tab2Root" tabTitle="Profile" tabIcon="person"></ion-tab>
  <ion-tab [root]="tab3Root" tabTitle="Control" tabIcon="options"></ion-tab>
</ion-tabs>

</ion-content>`
})
export class ProfileTab {
 // tab2Root = ProfileTab;
  tab3Root = ControlTab;

}
