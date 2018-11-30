import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProductoService {

  constructor(private db: AngularFireDatabase) {

    
   }

   create(producto) {

     return this.db.list('/productos').push(producto);
   
    }

    getAll(){

      return this.db.list('/productos').snapshotChanges();
    }

    get(productId) {

      return this.db.object('/productos/' + productId).valueChanges();
    } 

    update (productId, producto) {
      console.log("dentro del update");
      console.log(productId);
      console.log(producto);
      return this.db.object('/productos/' + productId).update(producto);
    } 

    delete (productId) {
      return this.db.object('/productos/' + productId).remove();
    }
}
