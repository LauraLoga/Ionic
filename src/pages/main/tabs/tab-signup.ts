import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'tab-signup',
  template:`
  <ion-header>
    <ion-navbar>
      <ion-title>
        signup
      </ion-title>
    </ion-navbar>
  </ion-header>`


})

export class SignupTab {

  constructor(public navCtrl: NavController) {

  }

}
@Component({
  templateUrl: 'signup.html'
})
export class SignPage {
  constructor(public modalCtrl: ModalController) { }
  
  openModal(sign) {
    
    let modal = this.modalCtrl.create(SignContentPage, sign);
    modal.present();
  }
}
@Component({
  
  template:`
  
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
  character;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var characters = [
      {
        name: 'Sign in',
      },
      {
        name: 'Sign up',
      }
    ];
    this.character = characters[this.params.get('sign')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}