
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GetStarted } from './getStarted/getStarted';
//import { ProfileTab } from './tabs/tab-profile';
//import { ControlTab } from './tabs/tab-control';

@Component({
  selector: 'app.scss', // estilo de home.scss
  templateUrl: 'welcome.html'
})
export class Welcome {
  user;
  constructor(public navCtrl: NavController, public params: NavParams) {
    this.user = this.params.get('user');
    console.log(this.user);
  }

  openGetStartedPage() {
    this.navCtrl.push(GetStarted);

  }
  //tab2Root = ProfileTab;
  //tab3Root = ControlTab;

}