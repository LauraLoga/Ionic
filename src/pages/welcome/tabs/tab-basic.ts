import { ControlTab } from './tab-control';
import { ProfileTab } from './tab-profile';
import { Component , OnInit} from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
    template: `
      <ion-tabs class="tabs-basic">
      <ion-tab [root]="profile" tabTitle="Profile" [rootParams]="name" tabIcon="person"></ion-tab>
      <ion-tab [root]="control" tabTitle="Control" tabIcon="options"></ion-tab>
      </ion-tabs>
  `})
  export class TabBasicContentPage implements OnInit {
    
    profile = ProfileTab;
    control = ControlTab;
    name;
    constructor(public params: NavParams) {  }
  
    ngOnInit(): void {
      this.name = this.params.data.item;
      
    }
  }