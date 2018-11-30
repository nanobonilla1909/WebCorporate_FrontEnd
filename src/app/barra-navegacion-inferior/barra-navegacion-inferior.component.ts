import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'barra-navegacion-inferior',
  templateUrl: './barra-navegacion-inferior.component.html',
  styleUrls: ['./barra-navegacion-inferior.component.css']
})
export class BarraNavegacionInferiorComponent {

  constructor(public auth: AuthService) { 
    
  }

  logout() {
    this.auth.logout();
  }

}
