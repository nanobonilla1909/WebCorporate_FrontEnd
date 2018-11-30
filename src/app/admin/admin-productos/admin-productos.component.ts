import { Observable } from 'rxjs/Observable';
import { ProductoService } from './../../producto.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-admin-productos',
  templateUrl: './admin-productos.component.html',
  styleUrls: ['./admin-productos.component.css']
})
export class AdminProductosComponent implements OnInit, OnDestroy {

  productos: any[];
  productosFiltrados: any[];
  subscription: Subscription;

  constructor(private productService: ProductoService) {
    this.subscription = this.productService.getAll()
        .subscribe(productos=> this.productosFiltrados = this.productos = productos);
  }

  filter(busqueda: string) {
    console.log(busqueda);
    this.productosFiltrados = (busqueda) ?
        this.productos.filter(p => p.payload.val()['nombre'].toLowerCase().includes(busqueda.toLowerCase())) :
        this.productos;
  } 

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }

}
