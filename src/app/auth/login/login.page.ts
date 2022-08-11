import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // Comprobar correo electronico
  emailCheck = '^[a-z0-9._*+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$';

  // login = {
  //   username: '',
  //   password: ''
  // }

  // Validaciones de el correo

  login: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required]]
  });

  constructor(private AS: AuthService, private router: Router, private fb: FormBuilder, private CS: CookieService, public alertController: AlertController) { }

  //Aqui se encuentran todas las validaciones y alertas
  
  ngOnInit() {
    if (this.CS.get('token')) {
      this.router.navigate(['/tabs']);
    }
  }

  emailReq() {
    return this.login.controls['email']?.errors?.required &&
      this.login.controls['email']?.touched;
  }

  emailPattern() {
    return this.login.controls['email']?.errors?.pattern &&
      this.login.controls['email']?.touched;
  }

  campoValido(campo: string) {
    return this.login.controls[campo].errors
      && this.login.controls[campo].touched;

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'ion-alert',
      header: 'Oops...',
      message: 'Correo o Contraseña incorrecta',
      buttons: ['OK']
    });

    await alert.present();

  }

  //Aqui se encuentra la funcion para iniciar la sesion

  save() {
    console.log(this.login);
    this.AS.login(this.login.value).subscribe((data: any) => {
      if (data) {
        this.CS.set('token', data.token, 1, '/');
        console.log(data);
        if (data.id_rol == 2) {
          this.router.navigate(['/admin']);
        }
        if (data.id_rol == 1) {
          this.router.navigate(['/tabs']);
        }
      } else {
        console.log(data);
        this.presentAlert();
      }
    });
  }

}
