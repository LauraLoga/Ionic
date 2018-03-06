
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfileTab } from './tabs/tab-profile';

@Component({
  selector: 'welcome', // estilo de home.scss
  templateUrl: 'welcome.html'
})
export class Welcome {
  showButtonStarted = true;
  
  constructor(public navCtrl: NavController, public params: NavParams) {
    
  }

  openGetStartedPage() {

    this.showButtonStarted = false;
  }
 
  showName(name){
    this.navCtrl.push(ProfileTab,{ item: name });
    console.log(name);
  }
}