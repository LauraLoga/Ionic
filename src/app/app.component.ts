import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SensorsPage } from '../pages/sensors/sensors';
import { WitnessPage } from '../pages/witnessPlant/witnessPlant';
import { GraphicPage } from '../pages/graphics/graphics';
import { Welcome } from '../pages/welcome/welcome';
import { TabBasicContentPage } from '../pages/welcome/tabs/tab-basic';
import { Gardens } from '../pages/gardens/gardens';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class Main {
  @ViewChild(Nav) nav: Nav; //primera pag cargada en nav controller

  rootPage: any = Welcome;

  pages: Array<{ title: string, component: any }>;
  token;
  rtoken;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private http: HttpClient, private storage: Storage) {
    this.initializeApp();

    // used for an example of ngFor and witnessPlant
    this.pages = [
      { title: 'Welcome', component: Gardens },
      { title: 'List of sensors', component: SensorsPage },
      { title: 'Witness plant', component: WitnessPage },
      { title: 'Graphics', component: GraphicPage },
      { title: 'Greenhouse', component: TabBasicContentPage }
    ];

  }

  initializeApp() {
    let heads: HttpHeaders = new HttpHeaders();
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      //obtain the access token
      //store the access token to some variable
      //check that we can connect successfully
      //keep token in local storage



      //let obs = this.http.get('http://hydroponics.cti.gr:8080/swagger-ui.html#!/device-controller/getDeviceByIdUsingGET');
      //let heads: HttpHeaders = new HttpHeaders();
      heads = heads.append('Content-Type', 'application/json');
      heads = heads.append('Accept', 'application/json');
      let obs = this.http.post(
        "http://hydroponics.cti.gr:8080/api/auth/login",                    //URL
        '{"username":"laura.mira.torres@gmail.com", "password":"enter1!"}', //data
        {                                                                   //post headers
          headers: heads
        });
      obs.subscribe((response) => {
        this.token = response.token;
        this.rtoken = response.refreshToken;
        this.storage.set('token', this.token);
        this.storage.set('rtoken', this.rtoken);
        //console.log(tokens.refreshToken)
      });



      // check the token works
      //local variable
      // let heads: HttpHeaders = new HttpHeaders();
      this.storage.get('token').then((val) => {
        this.token = val;
        console.log('token in storage' + this.token);
        heads = heads.append('Content-Type', 'application/json');
        heads = heads.append('Accept', 'application/json');
        heads = heads.append('X-Authorization', 'Bearer: ' + this.token);
        let gr = this.http.get("http://hydroponics.cti.gr:8080/api/device/90992200-81fb-11e9-8ecf-0b17ece5b734");
        gr.subscribe((response) => {
          this.token = response.token;
          console.log(response);
        });
      });
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
