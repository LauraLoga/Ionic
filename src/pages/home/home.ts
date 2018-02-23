import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from './tabs/tabs';
import { ContactPage } from './tabs/tabs';
@Component({
  selector: 'page-home', // estilo de home.scss
  templateUrl: 'home.html'
})
export class HomePage {
  tab2Root = AboutPage;
  tab3Root = ContactPage;

}

