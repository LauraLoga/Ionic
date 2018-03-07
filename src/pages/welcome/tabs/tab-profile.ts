
import { ControlTab } from './tab-control';

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
    <ion-content class="profile">
    <ion-grid>
    <ion-row>
      <ion-col col-12>Bienvenido a la app {{name}}</ion-col>
    </ion-row>
  </ion-grid>
    </ion-content>
`})
export class TabBasicContentPage implements OnInit {
  name;
  constructor(public params: NavParams, private storage: Storage) {  }

  ngOnInit(): void {
    this.name =  this.storage.get('name').then((val) => {
      this.name = val;
    });
  }
}

@Component({
  template: `
    <ion-tabs class="tabs-basic">
    <ion-tab [root]="profile" tabTitle="Profile" [rootParams]="name" tabIcon="person"></ion-tab>
    <ion-tab [root]="control" tabTitle="Control" tabIcon="options"></ion-tab>
    </ion-tabs>
`})
export class ProfileTab implements OnInit {
  
  profile = TabBasicContentPage;
  control = ControlTab;
  name;
  constructor(public params: NavParams) {  }

  ngOnInit(): void {
    this.name = this.params.data.item;
    
  }
}