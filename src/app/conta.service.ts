import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Conta } from './conta'; 
import { Bancos } from './banco';

var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  url = 'http://localhost:5000/api';  

  constructor(private http: HttpClient) { }

  getContas(): Observable<Conta[]> {  
    return this.http.get<Conta[]>(this.url+"/contas");  
  }  

  getContaById(id: any): Observable<Conta>  {
    return this.http.get<Conta>(this.url + "/contas/" + id);
  }

  gravarconta(conta: Conta)  {
    return this.http.post(this.url +"/contas",conta);
  }

  getBancos(): Observable<Bancos> {
    return this.http.get<Bancos>(this.url + "/bancos");
  }
  removeConta(id: number) {
    return this.http.delete(this.url + "/contas/" +id);
  }
}
