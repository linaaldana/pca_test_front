import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MasterService } from '../core/service/master.service';
import { CommonModule } from '@angular/common';
import { count } from 'rxjs';
@Component({
  selector: 'app-estadistica',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './estadistica.component.html',
  styleUrl: './estadistica.component.css',
  providers: [MasterService]
})
export class EstadisticaComponent implements OnInit {
  datos: any[] = [];
  cantidadAerolineas: number=0;

  constructor(private master: MasterService){
    
  }

  ngOnInit(): void {
   this.obtenerReservasAerolineas();
   this.obtenerCantidadAerolineas();
  }

  obtenerReservasAerolineas(){
    this.master.getReservasAerolineas().subscribe((res:any)=>{
      this.datos = res['hydra:member']
      console.log(this.datos);
    })
  }
  obtenerCantidadAerolineas(){
    this.master.getListaAerolineas().subscribe((res:any)=>{
      this.cantidadAerolineas = res['hydra:member'].length;
    })
  }
}
