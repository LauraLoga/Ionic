import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { Main } from './app.component';
import { GetStarted } from '../pages/welcome/getStarted/getStarted';
import { ListPage } from '../pages/list/list';
import { BasicPage } from '../pages/navigation/navigation';
import { NavigationDetailsPage } from '../pages/navigation/navigation';
import { ModalPage } from '../pages/modals/modals';
import { ModalContentPage } from '../pages/modals/modals';
import { StatusBar } from '@ionic-native/status-bar';
import { Welcome } from '../pages/welcome/welcome';

import { ProfileTab, TabBasicContentPage } from '../pages/welcome/tabs/tab-profile';
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
    ProfileTab,
    ControlTab,
    Welcome,
    TabBasicContentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(Main),
    IonicStorageModule.forRoot()
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
    ProfileTab,
    ControlTab,
    Welcome,
    TabBasicContentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
