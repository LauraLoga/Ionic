import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SensorsPage } from '../pages/sensors/sensors';
import { ActuatorsPage } from '../pages/actuators/actuators';
import { GraphicPage } from '../pages/graphics/graphics';
import { Welcome } from '../pages/welcome/welcome';
import { TabBasicContentPage } from '../pages/welcome/tabs/tab-basic';
import { Gardens} from '../pages/gardens/gardens';

@Component({
  templateUrl: 'app.html'
})
export class Main {
  @ViewChild(Nav) nav: Nav; //primera pag cargada en nav controller

  rootPage: any = Welcome;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and actuators
    this.pages = [
      { title: 'Welcome', component: Gardens },
      { title: 'List of sensors', component: SensorsPage },
      { title: 'List of actuators', component: ActuatorsPage },
      { title: 'Graphics', component: GraphicPage },
      { title: 'Greenhouse', component: TabBasicContentPage}
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
