
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfileTab } from './tabs/tab-profile';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'welcome', // estilo de home.scss
  templateUrl: 'welcome.html'
})
export class Welcome {
  showButtonStarted = true;
  
  constructor(public navCtrl: NavController, public params: NavParams, private storage: Storage) {
    
  }
  openGetStartedPage() {

    this.showButtonStarted = false;
  }
 
  showName(name){
    debugger
    this.storage.set('name', name);
    this.storage.get('name').then((val) => {
      console.log('Your name is', val);
      this.navCtrl.push(ProfileTab,{ item: name });
    });
    console.log(name);
  }
}