
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfileTab } from './tabs/tab-profile';

@Component({
  selector: 'welcome', // estilo de home.scss
  templateUrl: 'welcome.html'
})
export class Welcome {
  getStarted = true;
  click = false;
  isSigned = false;
  userName = "paco";
  
  constructor(public navCtrl: NavController, public params: NavParams) {
    
  }

  openGetStartedPage() {

    this.getStarted = false;
    this.click = true;

  }
  showMenu(sign){
    this.navCtrl.push(ProfileTab);
    this.isSigned = sign;
    this.click = false;
    console.log(this.userName);
  }
  showName(name){
    console.log(this.userName);
    this.userName = name;
  }
}