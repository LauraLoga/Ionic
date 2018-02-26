import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';


@Component({
  templateUrl: 'signup.html'
})
export class SignupTab {
  constructor(public modalCtrl: ModalController) { }
  
  openModal(sign) {
    
    let modal = this.modalCtrl.create(SignContentPage, sign);
    modal.present();
  }
}
@Component({
  
  template:`
  <ion-header>
    <ion-toolbar color= "green-lemon">
      <ion-buttons start>
        <button ion-button (click)="dismiss()">
          <span ion-text color="purple" showWhen="ios">Cancel</span>
          <ion-icon name="md-close" showWhen="android,windows"></ion-icon>
        </button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content>
  <ion-list>
    <ion-item>
      <ion-label>Username</ion-label>
      <ion-input type="text" value=""></ion-input>
    </ion-item>
  
    <ion-item>
      <ion-label>Password</ion-label>
      <ion-input type="password" value=""></ion-input>
    </ion-item>
  </ion-list>
  
  <div padding>
    <button ion-button color="purple" block>Sign In</button>
  </div>
  </ion-content>` 
})
export class SignContentPage {
  option;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var options = [
      {
        name: 'Sign in',
      },
      {
        name: 'Sign up',
      }
    ];
    this.option = options[this.params.get('sign')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}