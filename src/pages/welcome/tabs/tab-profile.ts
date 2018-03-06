
import { ControlTab } from './tab-control';

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
    Bienvenido a la app {{ name }}
    </ion-content>
`})
export class TabBasicContentPage implements OnInit {
  name;
  constructor(public params: NavParams) {  }

  ngOnInit(): void {
    this.name = this.params.data;
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