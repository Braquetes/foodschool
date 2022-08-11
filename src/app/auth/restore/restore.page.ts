import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-restore',
  templateUrl: './restore.page.html',
  styleUrls: ['./restore.page.scss'],
})
export class RestorePage implements OnInit {

  restore = {
    correo: '',
    codigo: '',
    code: ''
  }

  constructor(private AS: AuthService, private router: Router) { }

  ngOnInit() {
  }

  save(form: NgForm) {
    console.log(form.value);
    this.AS.updateCodigo(form.value.correo).subscribe((data: any) => {
      if (data) {
        console.log(data);
        this.restore.correo = data.correo;
        this.AS.code(data.correo, data.codigo).subscribe((datas: any) => {
          if (datas) {
            console.log(datas);
            this.restore.codigo = data.codigo;
          }
        });
      }
    });
  }

  code(form: NgForm) {
    console.log(form.value);
    this.AS.validarCodigo(this.restore.correo, form.value.code).subscribe((data: any) => {
      console.log(data);
      if (data.resultado == 'Codigo correcto') {
        this.router.navigate(['/change-password', data.id]);
      }
    });
  }

}
