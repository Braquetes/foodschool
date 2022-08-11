import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.page.html',
  styleUrls: ['./comida.page.scss'],
})
export class ComidaPage implements OnInit {

  //Creacion de la clase para guardar los datos que vienen el el arreglo
  id: any;
  comida = {
    idComida: 0,
    nombre: '',
    precio: 0,
    imagen: '',
    descripcion: '',
    ingredientes: '',
  };

  model = {
    cantidad: ''
  }

  compra: any;
  //index para determinar las cantidades del producto
  index = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //Funciones para agregar el producto al carrito
  constructor(private AR: ActivatedRoute, private FS: FoodService, private router: Router) { }

  ngOnInit() {
    this.id = this.AR.snapshot.params['id'];
    if (this.id) {
      this.FS.getComida(this.id).subscribe((data: any) => {
        console.log(data);
        this.comida = data;
      });

    }
  }

  agregar(id: any) {
    if (id) {
      this.compra = {
        idComida: this.comida.idComida,
        nombre: this.comida.nombre,
        cantidad: id,
        total: (id * this.comida.precio)
      }
      console.log(this.compra);
      this.FS.orden.push(this.compra);
      this.FS.total += this.compra.total;
      this.router.navigate(['/tabs/tab1']);
    }
  }
}