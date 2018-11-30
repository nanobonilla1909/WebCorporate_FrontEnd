import { ProductoService } from './producto.service';
import { CategoriaService } from './categoria.service';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { UserService } from './user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 


import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Lo que refiere a DB

// Creo que es la version vieja
import { AngularFireDatabaseModule } from 'angularfire2/database';
// Creo que es la version nueva
import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireStorageModule } from 'angularfire2/storage';  - este no lo encuentra

import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from './auth.service';

import { AppComponent } from './app.component';
import { BarraNavegacionSuperiorComponent } from './barra-navegacion-superior/barra-navegacion-superior.component';
import { BarraNavegacionInferiorComponent } from './barra-navegacion-inferior/barra-navegacion-inferior.component';
import { HomeComponent } from './home/home.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { BolsaComprasComponent } from './bolsa-compras/bolsa-compras.component';
import { AdminOrdenesComponent } from './admin/admin-ordenes/admin-ordenes.component';
import { AdminProductosComponent } from './admin/admin-productos/admin-productos.component';
import { LoginComponent } from './login/login.component';
import { MisOrdenesComponent } from './mis-ordenes/mis-ordenes.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';




@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionSuperiorComponent,
    BarraNavegacionInferiorComponent,
    HomeComponent,
    ResultadosComponent,
    BolsaComprasComponent,
    AdminOrdenesComponent,
    AdminProductosComponent,
    LoginComponent,
    MisOrdenesComponent,
    ProductFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
        { path: '', component: ResultadosComponent }, 
        { path: 'login', component: LoginComponent },
        { path: 'home', component: ResultadosComponent },
        { path: 'resultados', component: ResultadosComponent },
        
        { path: 'bolsa-compras', component: BolsaComprasComponent },
        { path: 'mis/ordenes', component: MisOrdenesComponent },
        
        { path: 'admin/ordenes', 
          component: AdminOrdenesComponent,
          canActivate: [AdminAuthGuard]
        },

        { path: 'admin/productos/nuevo', 
          component: ProductFormComponent,
          canActivate: [AdminAuthGuard]
        },

        { path: 'admin/productos/:id', 
        component: ProductFormComponent,
        canActivate: [AdminAuthGuard]
        },

        { path: 'admin/productos', 
          component: AdminProductosComponent,
          canActivate: [AdminAuthGuard]
        }
    ])
  ],
  providers: [
    AuthService,
    UserService,
    AdminAuthGuard,
    CategoriaService,
    ProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
