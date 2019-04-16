import { ControlTab } from './tab-control';
import { ModalPage } from '../../modals/modals';
import { Component , OnInit} from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
    template: `
      <ion-tabs class="tabs-basic">
      <ion-tab [root]="modal" tabTitle="Profile"  tabIcon="person"></ion-tab>
      <ion-tab [root]="control" tabTitle="Control" tabIcon="options"></ion-tab>
      </ion-tabs>
  `})
  export class TabBasicContentPage implements OnInit {
    
    modal = ModalPage;
    control = ControlTab;
    name;
    constructor(public params: NavParams) {  }
  
    ngOnInit(): void {
     // [rootParams]="name" //esto va en el html
     
     // this.name = this.params.data.item;
      
    }
  }