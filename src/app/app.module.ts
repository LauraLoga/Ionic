import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { Main } from './app.component';
import { MainPage } from '../pages/main/main';
import { ListPage } from '../pages/list/list';
import { BasicPage } from '../pages/navigation/navigation';
import { NavigationDetailsPage } from '../pages/navigation/navigation';
import { ModalPage } from '../pages/modals/modals';
import { ModalContentPage } from '../pages/modals/modals';
import { SignupTab } from '../pages/main/tabs/tab-signup';
import { SignPage } from '../pages/main/tabs/tab-signup';
import { ControlTab } from '../pages/main/tabs/tab-control';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    Main,
    MainPage,
    ListPage,
    BasicPage,
    NavigationDetailsPage,
    ModalPage,
    ModalContentPage,
    SignupTab,
    ControlTab,
    SignPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(Main),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Main,
    MainPage,
    ListPage,
    BasicPage,
    NavigationDetailsPage,
    ModalPage,
    ModalContentPage,
    SignupTab,
    ControlTab,
    SignPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
