
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabBasicContentPage } from './tabs/tab-basic';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'welcome', // estilo de home.scss
  templateUrl: 'welcome.html'
})
export class Welcome {
  showButtonStarted = true;

  constructor(public navCtrl: NavController, public params: NavParams, private storage: Storage) {

  }
  openLoginPage() {

    this.showButtonStarted = false;
  }

  showName(name) {
    this.storage.set('name', name)
      .then(item => this.navCtrl.push(TabBasicContentPage, { item }))
      .catch(() => console.log("error al guardar el usuario"));
  }
}