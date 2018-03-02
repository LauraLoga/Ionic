
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfileTab } from './tabs/tab-profile';
import { ControlTab } from './tabs/tab-control';

@Component({
  selector: 'welcome', // estilo de home.scss
  templateUrl: 'welcome.html'
})
export class Welcome {
  getStarted = true;
  click = false;
  signed = false;
  user;
  tab2Root = ProfileTab;
  tab3Root = ControlTab;
  
  constructor(public navCtrl: NavController, public params: NavParams) {
    this.user = this.params.get('user');
  }

  openGetStartedPage() {

    this.getStarted = false;
    this.click = true;

  }
  showMenu(sign){
    this.signed = sign;
    this.click = false;
  }
}