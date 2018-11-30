import { ProductoService } from './../producto.service';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {

  products$;

  constructor(productService: ProductoService, categoryService: CategoriaService) {

    this.products$ = productService.getAll()
    .map(prods => prods
      .map(p => p.payload.val()));

   }


}
