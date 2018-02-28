
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GetStarted } from './getStarted/getStarted';

@Component({
    selector: 'app.scss', // estilo de home.scss
    templateUrl: 'welcome.html'
  })
  export class Welcome {
      constructor(public navCtrl: NavController) {
    
      }

      openGetStartedPage() {
        this.navCtrl.push(GetStarted);
        
      }
  }