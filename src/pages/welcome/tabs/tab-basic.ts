import { Greenhouse } from './tab-greenhouse';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
    template: `
      <ion-tabs class="tabs-basic">
      <ion-tab [root]="one" (ionSelect)="onClick1()" tabTitle="Greenhouse 1" [rootParams]="outParam"  tabIcon="leaf"></ion-tab>
      <ion-tab [root]="two" (ionSelect)="onClick2()" tabTitle="Greenhouse 2" [rootParams]="value" tabIcon="leaf"></ion-tab>
      </ion-tabs>
  `})
  export class TabBasicContentPage implements OnInit {
    @Output() tab = new EventEmitter();
    one = Greenhouse;
    two = Greenhouse;
    outParam;
    value;
    
    constructor(public params: NavParams) { 
      this.value = params;
      console.log('params from login', this.value);
      this.outParam = this.params.get('outParam');
      console.log(this.outParam);
     }
  
    ngOnInit(): void {
      
      
     
     // [rootParams]="name" //esto va en el html
     
      this.value = this.params.data.item;
      
    }
    onClick1(){
      this.value = "one";
    }
    onClick2(){
      this.value = "two";
    }
  }