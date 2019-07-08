import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SensorsPage } from '../pages/sensors/sensors';
import { WitnessPage } from '../pages/witnessPlant/witnessPlant';
import { Welcome } from '../pages/welcome/welcome';
import { Gardens } from '../pages/gardens/gardens';

@Component({
  templateUrl: 'app.html'
})
export class Main {
  static ids: any;
  @ViewChild(Nav) nav: Nav; //primera pag cargada en nav controller

  rootPage: any = Welcome;

  pages: Array<{ title: string, component: any }>;
  token;
  rtoken;
  ids= [];
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {

    this.initializeApp();

    this.pages = [
      { title: 'Gardens', component: Gardens },
      { title: 'List of sensors', component: SensorsPage },
      { title: 'Witness plant', component: WitnessPage },
     // { title: 'Graphics', component: GraphicPage },
     // { title: 'Greenhouses', component: Greenhouse }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
