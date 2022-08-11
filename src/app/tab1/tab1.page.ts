import { Router } from '@angular/router';
import { Component } from '@angular/core';
import Swal from 'sweetalert2'
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  comidas: any;
  constructor(private FS: FoodService, private router: Router) { }

  ngOnInit(): void {
    this.getComidas();
  }

  //funcion de obtener comidas
  getComidas() {
    this.FS.getComidas().subscribe((data: any) => {
      console.log(data);
      this.comidas = data;
    });
  }
  //funcion de agregar comidas
  agregar(id: any) {
    console.log(id);
    this.router.navigate(['/comida', id]);
  }

}
