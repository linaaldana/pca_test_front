import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../core/service/master.service';
import { HttpClientModule  } from '@angular/common/http'

@Component({
  selector: 'app-vuelo',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './vuelo.component.html',
  styleUrl: './vuelo.component.css',
  providers: [MasterService]
})
export class VueloComponent implements OnInit{
  listaAerolineas: any [] = [];
  vueloObj: any = {
    "origen": "",
    "destino": "",
    "fechaSalida": "",
    "fechaLlegada": "",
    "aerolinea": "",
    "precio": 0,
    "reservas": []
  };

  constructor(private master:MasterService){}

  ngOnInit(): void {
    this.cargarAerolineas();
  }

  cargarAerolineas(){
    this.master.getListaAerolineas().subscribe((res:any)=>{
      this.listaAerolineas = res['hydra:member'];
    });
  }
  onGuardarVuelo(){
    console.log(JSON.stringify(this.vueloObj));
    this.vueloObj.aerolinea = '/aerolineas/' + this.vueloObj.aerolinea
    this.master.registrarVuelo(JSON.stringify(this.vueloObj)).subscribe((res:any)=>{

    })
  }
}
