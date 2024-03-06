import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterService } from '../core/service/master.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-lista-vuelos',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './lista-vuelos.component.html',
  styleUrl: './lista-vuelos.component.css',
  providers: [MasterService]
})

export class ListaVuelosComponent implements OnInit {
  listaVuelos:  any [] = [];
  
  
  constructor(
    private master: MasterService) {}
    


  ngOnInit(): void {
    this.cargarVuelos();
    console.log(this.listaVuelos);
    
  }

  cargarVuelos(){
    this.master.getListaVuelos().subscribe((res:any)=>{
      this.listaVuelos = res['hydra:member'];
    })
  }



  
}
