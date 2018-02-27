import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ControlTab } from './tab-control';


@Component({
  templateUrl: 'signup.html'
})
export class SignupTab {
  constructor(public nav: NavController){
    
  }
  goTo() {
    this.nav.push(ControlTab);
    
  }
}