import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { FoodService } from '../services/food.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  bebidas: any;
  constructor(private FS: FoodService, private router: Router) { }

  ngOnInit(): void {
    this.getComidas();
  }

  getComidas() {
    this.FS.getBebidas().subscribe((data: any) => {
      console.log(data);
      this.bebidas = data;
    });
  }

  agregar(id: any) {
    console.log(id);
    this.router.navigate(['/bebida', id]);
  }

}
