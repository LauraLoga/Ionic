import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { Main } from './app.component';
import { Login } from '../pages/welcome/login/login';
import { SensorsPage } from '../pages/sensors/sensors';
import { ActuatorsPage } from '../pages/actuators/actuators';
import { ActuatorsDetailsPage } from '../pages/actuators/actuators';
import { ModalPage } from '../pages/modals/modals';
import { ModalContentPage } from '../pages/modals/modals';
import { StatusBar } from '@ionic-native/status-bar';
import { Welcome } from '../pages/welcome/welcome';

import { ProfileTab } from '../pages/welcome/tabs/tab-profile';
import { ControlTab } from '../pages/welcome/tabs/tab-control';
import { TabBasicContentPage } from '../pages/welcome/tabs/tab-basic';

import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    Main,
    Login,
    SensorsPage,
    ActuatorsPage,
    ActuatorsDetailsPage,
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
    Login,
    SensorsPage,
    ActuatorsPage,
    ActuatorsDetailsPage,
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
