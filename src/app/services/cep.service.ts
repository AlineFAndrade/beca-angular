import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CEP } from './cep.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  constructor(private http: HttpClient) { }
  
  searchCEP(cepCode: string): Observable<CEP> {
    return this.http.get<CEP>(`https://viacep.com.br/ws/${cepCode}/json/`);
  }
}
