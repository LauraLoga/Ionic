
import { ControlTab } from './tab-control';

import { Component } from '@angular/core';


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
    <ion-content>
    Bienvenido a la app
    </ion-content>
`})
export class TabBasicContentPage {
  
  constructor() {
    
  }
}

@Component({
  template: `
    <ion-tabs class="tabs-basic">
    <ion-tab [root]="profile" tabTitle="Profile" tabIcon="chat"></ion-tab>
    <ion-tab [root]="control" tabTitle="Control" tabIcon="chat"></ion-tab>
    </ion-tabs>
`})
export class ProfileTab {

  profile = TabBasicContentPage;
  control = ControlTab;
}