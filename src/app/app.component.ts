import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MainPage } from '../pages/main/main';
import { ListPage } from '../pages/list/list';
import { BasicPage } from '../pages/navigation/navigation';
import { ModalPage } from '../pages/modals/modals';

@Component({
  templateUrl: 'app.html'
})
export class Main {
  @ViewChild(Nav) nav: Nav; //primera pag cargada en nav controller

  rootPage: any = MainPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Pagina principal', component: MainPage },
      { title: 'Lista de items', component: ListPage },
      { title: 'Herramientas angular', component: BasicPage },
      { title: 'El señor de los anillos', component: ModalPage }
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
