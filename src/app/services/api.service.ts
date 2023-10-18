import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FavoritosService } from './favoritos.service';
import _ from 'lodash';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public consejos: any;
  public conceptos: any;
  public metodos: any;

  baseUrl = 'https://sophi-optimism-2020v2.firebaseio.com/';
 
  constructor(private http: HttpClient, public favService: FavoritosService) { }

  initialize() {
    this.getMetodos().then(data => this.metodos = _.sortBy(data, 'Nombre'));

    this.getConceptos().then(data => this.conceptos = _.sortBy(data, 'Nombre'));

    this.getConsejos().then(data => {this.consejos = _.sortBy(data, 'Nombre');
    this.favService.initialize(this.consejos);
    });
  }
 
  getConsejos() {
    let requestUrl = `${this.baseUrl}/Consejos.json`;
    return this.http.get(requestUrl).toPromise();
  }

  getConceptos(){
    let requestUrl = `${this.baseUrl}/Conceptos.json`;
    return this.http.get(requestUrl).toPromise();
  }

  getMetodos(){
    let requestUrl = `${this.baseUrl}/Metodos.json`;
    return this.http.get(requestUrl).toPromise();
  }

}
