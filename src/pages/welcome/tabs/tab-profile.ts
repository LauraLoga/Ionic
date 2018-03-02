
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'tab-profile', // estilo de home.scss
  template: `
<ion-content >

<ion-tabs>
  <ion-tab [root]="tab2Root" tabTitle="Profile" tabIcon="person"></ion-tab>
  <ion-tab [root]="tab3Root" tabTitle="Control" tabIcon="options"></ion-tab>
</ion-tabs>

</ion-content>`
})
export class ProfileTab {
  constructor(public navCtrl: NavController) {
  
  }

}
