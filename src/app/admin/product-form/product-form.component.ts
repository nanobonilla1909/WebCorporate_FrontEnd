import { Observable } from 'rxjs/Observable';
import { CategoriaService } from './../../categoria.service';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../producto.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categorias$: Observable<any>;
  productomio: any = {nombre: "nuevo nombre", descripcion: "mi descr", precio:25.4};
  producto:any = {};
  id;

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    categoriaService: CategoriaService, 
    private productoService: ProductoService) {

    this.categorias$ = categoriaService.getCategorias();
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.productoService.get(this.id).take(1).subscribe(p=>this.producto = p);
  
    console.log(this.id);
    console.log(this.producto);
    console.log(this.productomio);
    
  }

  save(producto) {

    if (this.id) this.productoService.update(this.id, producto);
    else this.productoService.create(producto);

    this.router.navigate(['/admin/productos']);
  }


  delete() {

    if (confirm('Seguro que desea Eliminar este Producto?')) {
      this.productoService.delete(this.id);
      this.router.navigate(['/admin/productos']);

    }
  }

  ngOnInit() {
  }

}
