import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  botanas: any;
  constructor(private FS: FoodService, private router: Router) { }

  ngOnInit(): void {
    this.getComidas();
  }

  getComidas() {
    this.FS.getBotanas().subscribe((data: any) => {
      console.log(data);
      this.botanas = data;
    });
  }

  agregar(id: any) {
    console.log(id);
    this.router.navigate(['/botana', id]);
  }

}
