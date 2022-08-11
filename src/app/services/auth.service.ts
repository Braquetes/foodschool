import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//Llamado de el servidor de la BD
export class AuthService {
  URL = 'https://dgs801.com/foodschool/auth/';
  constructor(private http: HttpClient) { }

  //Funcion para logueo
  login(login: any) {
    return this.http.get(`${this.URL}login.php?email=${login.email}&password=${login.password}`);
  }
  //Funcion para registro
  registro(form: any) {
    return this.http.post(`${this.URL}registro.php`, JSON.stringify(form));
  }
  //Funcion para que no se vensa el codigo
  updateCodigo(correo: any) {
    return this.http.get(`https://mudate.000webhostapp.com/correonew.php?to=${correo}&from=josssemtzc@gmail.com`);
  }
  //Actualizar link del host
  code(correo: any, code: any) {
    return this.http.get(`${this.URL}updateCodigo.php?correo=${correo}&codigo=${code}`);
  }
  //Validacion del codigo Auth
  validarCodigo(correo: any, code: any) {
    return this.http.get(`${this.URL}codigo.php?correo=${correo}&codigo=${code}`);
  }
}
