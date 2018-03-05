import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'getStarted',
  templateUrl: 'getStarted.html'

})
export class GetStarted {

  @Output() isSigned = new EventEmitter<boolean>();
  @Output() userName = new EventEmitter();
  formUser: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.formUser = this._formBuilder.group({
      name: '',
      password: ''
    });
  }

  login() {
    this.isSigned.emit(true);
    this.userName.emit(this.formUser.value.name)
  }

}
