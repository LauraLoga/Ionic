
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
    <ion-content>
    Bienvenido a la app {{ name }} {{nameStorage}}
    </ion-content>
`})
export class TabBasicContentPage implements OnInit {
  name;
  nameStorage;
  constructor(public params: NavParams, private storage: Storage) {  }

  ngOnInit(): void {
    debugger
    this.name = this.params.data;
    this.nameStorage = this.storage.get('name');
  }
}

@Component({
  template: `
    <ion-tabs class="tabs-basic">
    <ion-tab [root]="profile" tabTitle="Profile" [rootParams]="name" tabIcon="chat"></ion-tab>
    <ion-tab [root]="control" tabTitle="Control" tabIcon="chat"></ion-tab>
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