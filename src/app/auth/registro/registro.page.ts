import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  registro = {
    nombres: '',
    apellidos: '',
    username: '',
    telefono: '',
    password: '',
    edad: ''
  }

  constructor(private AS: AuthService, private router: Router) { }

  ngOnInit() {
  }

  //Funcion de validar y guardar los datos del formulario
  save(form: NgForm) {
    console.log(form);
    this.AS.registro(form.value).subscribe((data: any) => {
      console.log(data);
      if (data.resultado == 'OK') {
        this.router.navigate(['/login']);
      } else {
        console.log(data.message);
      }
    });
  }
}
