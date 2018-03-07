import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: 'login.html'

})
export class Login {

  @Output() userName = new EventEmitter();
  formUser: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.formUser = this._formBuilder.group({
      name: ['', { validators: Validators.required }],
      password: ['', { validators: Validators.required }]
    });
  }

  login() {
    this.userName.emit(this.formUser.value.name)
  }

}
