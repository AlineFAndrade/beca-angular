import { Injectable } from '@angular/core';
import { CEP } from './cep.model'

@Injectable({
  providedIn: 'root'
})
export class CepService {

  //https://viacep.com.br/ws/01001000/json/

  constructor() { }

  searchCEP(cepCode: string): CEP {

    return {
      "cep": cepCode,
      "logradouro": "Praça da Sé",
      "complemento": "lado ímpar",
      "bairro": "Sé",
      "localidade": "São Paulo",
      "uf": "SP",
      "ibge": "3550308",
      "gia": "1004",
      "ddd": "11",
      "siafi": "7107"
    }
  }
}
