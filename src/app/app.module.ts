import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { Main } from './app.component';
import { GetStarted } from '../pages/welcome/getStarted/getStarted';
import { ListPage } from '../pages/list/list';
import { BasicPage } from '../pages/navigation/navigation';
import { NavigationDetailsPage } from '../pages/navigation/navigation';
import { ModalPage } from '../pages/modals/modals';
import { ModalContentPage } from '../pages/modals/modals';
import { StatusBar } from '@ionic-native/status-bar';
import { SignContentPage } from '../pages/welcome/getStarted/getStarted';
import { Welcome } from '../pages/welcome/welcome';

import { ProfileTab } from '../pages/welcome/tabs/tab-profile';
import { ControlTab } from '../pages/welcome/tabs/tab-control';

import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    Main,
    GetStarted,
    ListPage,
    BasicPage,
    NavigationDetailsPage,
    ModalPage,
    ModalContentPage,
    SignContentPage,
    ProfileTab,
    ControlTab,
    Welcome
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(Main),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Main,
    GetStarted,
    ListPage,
    BasicPage,
    NavigationDetailsPage,
    ModalPage,
    ModalContentPage,
    SignContentPage,
    ProfileTab,
    ControlTab,
    Welcome
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
