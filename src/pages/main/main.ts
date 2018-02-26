import { Component } from '@angular/core';
import { SignupTab } from './tabs/tab-signup';
import { ControlTab } from './tabs/tab-control';

@Component({
  selector: 'app.scss', // estilo de home.scss
  templateUrl: 'main.html'
})
export class MainPage {
  tab2Root = SignupTab;
  tab3Root = ControlTab;

}

