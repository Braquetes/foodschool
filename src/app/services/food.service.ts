import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  //Conexion a la pagina del servidor

  URL = 'https://dgs801.com/foodschool/client';

  //Arreglos
  orden: any[] = [];
  total: number = 0;

  constructor(private http: HttpClient) { }

  //Funciones Get para obtener informacion
  getComidas() {
    return this.http.get(`${this.URL}/getComidas.php`);
  }

  getComida(id: any) {
    return this.http.get(`${this.URL}/getComidaID.php?id=${id}`);
  }

  getBebidas() {
    return this.http.get(`${this.URL}/getBebidas.php`);
  }

  getBebida(id: any) {
    return this.http.get(`${this.URL}/getBebidaID.php?id=${id}`);
  }

  getBotanas() {
    return this.http.get(`${this.URL}/getBotanas.php`);
  }

  getBotana(id: any) {
    return this.http.get(`${this.URL}/getBotanaID.php?id=${id}`);
  }

}