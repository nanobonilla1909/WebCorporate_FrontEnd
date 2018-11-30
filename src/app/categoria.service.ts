import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoriaService {

  observableCategories$: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { 

    this.observableCategories$ = this.db.list('/categorias', ref => ref.orderByChild('name')).snapshotChanges();
  }

  getCategorias() {

    return this.observableCategories$;

  }

}
