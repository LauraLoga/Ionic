import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { Main } from './app.component';
import { Login } from '../pages/welcome/login/login';
import { SensorsPage } from '../pages/sensors/sensors';
import { WitnessPage } from '../pages/witnessPlant/witnessPlant';
import { WitnessPlantDetailsPage } from '../pages/witnessPlant/witnessPlant';
import { GraphicPage } from '../pages/graphics/graphics';
import { GraphicContentPage } from '../pages/graphics/graphics';
import { StatusBar } from '@ionic-native/status-bar';
import { Welcome } from '../pages/welcome/welcome';

import { Gardens, ProblemContentPage } from '../pages/gardens/gardens';
import { Greenhouse } from '../pages/welcome/tabs/tab-greenhouse';
import { TabBasicContentPage } from '../pages/welcome/tabs/tab-basic';

import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule} from  '@angular/common/http';

@NgModule({
  declarations: [
    Main,
    Login,
    SensorsPage,
    WitnessPage,
    WitnessPlantDetailsPage,
    GraphicPage,
    GraphicContentPage,
    Gardens,
    ProblemContentPage,
    Greenhouse,
    Welcome,
    TabBasicContentPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(Main),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Main,
    Login,
    SensorsPage,
    WitnessPage,
    WitnessPlantDetailsPage,
    GraphicPage,
    GraphicContentPage,
    Gardens,
    ProblemContentPage,
    Greenhouse,
    Welcome,
    TabBasicContentPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
