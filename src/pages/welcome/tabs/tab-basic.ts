import { AlertController } from 'ionic-angular';
import { Component , OnInit} from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'tab-basic.scss',
  templateUrl: 'tab-basic.html'})
  export class TabBasicContentPage implements OnInit {
    
    option: string = "profile";
    name;
    devices: Array<{ title: string; description: string }>;
    title: string = "";
    descr: string ="";
    showInput = false;

    constructor(public params: NavParams, public alertCtrl: AlertController) { 
      this.devices = [
        { title: 'Greenhouse', description: 'The main objective is to visualize in our phones a platform that monitoring and controlling' },
        { title: 'AEMET', description: 'The weather' },
        { title: 'Remote house', description: 'Robotic house' },
        { title: 'Greenhouse 2', description: 'The main objective is to visualize in our phones a platform that monitoring and controlling' }
      ];
     }
  
    ngOnInit(): void {
      this.name = this.params.data.item;
      
    }
    addDevice() {
      if(this.title != "" && this.descr != ""){
        this.devices.push({title:this.title, description:this.descr});
        this.title = "";
        this.descr = "";
      }
      else{
        
      }
    }
            showPrompt() {
              let prompt = this.alertCtrl.create({
                title: 'Add a device',
                message: "Enter a title and description for adding this new device ",
                inputs: [
                  {
                    name: 'title',
                    placeholder: 'Title'
                  },
                  {
                    name: 'description',
                    placeholder: 'Description'
                  },
                ],
                buttons: [
                  {
                    text: 'Cancel',
                    handler: data => {
                      console.log('Cancel clicked');
                    }
                  },
                  {
                    text: 'Save',
                    handler: data => {
                      this.title = data.title;
                      this.descr = data.description;
                      this.addDevice();
                      console.log('Saved clicked');
                    }
                  }
                ]
              });
              prompt.present();
            }
  
  }
 /* <ion-row *ngIf="showInput"justify-content-center>
            
  <ion-list >
  <ion-item class="input-signup" color="light-lemon"> 
      <ion-input 
      type="text" 
      placeholder="Title"
      [(ngModel)]="title">
      </ion-input> 
  </ion-item>
  <ion-item class="input-signup" color="light-lemon"> 
      <ion-input 
      type="text"  
      placeholder="Description"
      [(ngModel)]="descr">
      </ion-input>
  </ion-item>
  <button ion-button color="purple" icon-only (click)=addDevice()>
      <ion-icon name="add-circle"></ion-icon>
  </button>
  </ion-list>
</ion-row>*/