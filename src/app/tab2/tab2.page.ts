import { Component } from '@angular/core';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  //Creacion de un arreglo
  detalles = "";
  qrData = '';
  elementType: any;
  pedido: any = [];
  pedidoFinalizado = false;
  //llamado de el servicio
  constructor(public FS: FoodService) {
    this.pedido = FS.orden;
    console.log('pedido');
    console.log(this.pedido);
  }
  //Confirmacion para generar el codigo Qr para que contenga los datos
  finalizarPedido() {
    console.log(this.detalles);
    this.qrData = '';
    this.pedidoFinalizado = true;
    this.pedido = this.FS.orden;
    this.pedido.forEach(element => {
      this.qrData += element.cantidad.toString() + ' ' + element.nombre.toString() + ', '
    });
    this.qrData += 'Detalles: ' + this.detalles + ',';
    this.qrData += ' Total a pagar: $' + this.FS.total.toString();
    console.log(this.qrData);
  }

}
