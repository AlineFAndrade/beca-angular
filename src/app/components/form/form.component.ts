import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CEP } from 'src/app/services/cep.model';
import { CepService } from 'src/app/services/cep.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent {

  cep: CEP = {};

  constructor(private cepService: CepService) {

  }

  myVarThatIsOnTheComponent = new FormGroup({
    firstName : new FormControl(''),
    cpf : new FormControl(''),
    email : new FormControl(''),
    cep: new FormControl('')
  });

  jorginhoPrintaPraMim() {
    if (this.myVarThatIsOnTheComponent.valid) {
      console.log(this.myVarThatIsOnTheComponent.value)
      this.cep = this.cepService.searchCEP(this.myVarThatIsOnTheComponent.value.cep);
      console.log(this.cep)
    } else {
      alert('Jorginho disse que não vai printar.')
    }
  }

}
