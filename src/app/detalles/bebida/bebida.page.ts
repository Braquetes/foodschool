import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-bebida',
  templateUrl: './bebida.page.html',
  styleUrls: ['./bebida.page.scss'],
})
export class BebidaPage implements OnInit {


  id: any;
  bebida = {
    idBebida: 0,
    nombre: '',
    precio: 0,
    imagen: '',
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
      this.FS.getBebida(this.id).subscribe((data: any) => {
        console.log(data);
        this.bebida = data;
      });

    }
  }

  agregar(id: any) {
    if (id) {
      this.compra = {
        idComida: this.bebida.idBebida,
        nombre: this.bebida.nombre,
        cantidad: id,
        total: (id * this.bebida.precio)
      }
      console.log(this.compra);
      this.FS.orden.push(this.compra);
      this.FS.total += this.compra.total;
      this.router.navigate(['/tabs/tab4']);
    }
  }

}
