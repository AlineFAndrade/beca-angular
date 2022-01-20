import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent {

  myVarThatIsOnTheComponent = new FormGroup({
    firstName : new FormControl(''),
    cpf : new FormControl(''),
    email : new FormControl(''),
    cep: new FormControl('')
  });

  jorginhoPrintaPraMim() {
    if (this.myVarThatIsOnTheComponent.valid) {
      console.log(this.myVarThatIsOnTheComponent.value)
    } else {
      alert('Jorginho disse que não vai printar.')
    }
  }

}
