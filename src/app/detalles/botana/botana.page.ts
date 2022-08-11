import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-botana',
  templateUrl: './botana.page.html',
  styleUrls: ['./botana.page.scss'],
})
export class BotanaPage implements OnInit {

  id: any;
  botana = {
    idBotana: 0,
    nombre: '',
    precio: 0,
    imagen: '',
    descripcion: '',
    ingredientes: ''
  };

  model = {
    cantidad: ''
  }

  compra: any;

  index = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private AR: ActivatedRoute, private FS: FoodService, private router: Router) { }

  ngOnInit() {
    this.id = this.AR.snapshot.params['id'];
    if (this.id) {
      this.FS.getBotana(this.id).subscribe((data: any) => {
        console.log(data);
        this.botana = data;
      });

    }
  }

  agregar(id: any) {
    if (id) {
      this.compra = {
        idComida: this.botana.idBotana,
        nombre: this.botana.nombre,
        cantidad: id,
        total: (id * this.botana.precio)
      }
      console.log(this.compra);
      this.FS.orden.push(this.compra);
      this.FS.total += this.compra.total;
      this.router.navigate(['/tabs/tab3']);
    }
  }

}
