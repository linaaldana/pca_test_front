import { Component, OnInit } from '@angular/core';
import { MasterService } from '../core/service/master.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css',
  providers: [MasterService]
})
export class BusquedaComponent implements OnInit {

  origen: string = ""
  destino: string = ""
  fecha: string = "";  
  listaVuelos: any[] = []
  reservaObj: any = {
    "vuelo": "",
    "cantidadPasajeros": 0,
    "clase": ""
  }
  constructor(private master: MasterService) { }

  ngOnInit(): void {

  }

  buscarVuelos() {
    const campoOrigen = document.getElementById("tituloOrigen")
    const campoDestino = document.getElementById("tituloDestino")
    if (campoOrigen != null && campoDestino != null) {
      campoOrigen.innerText = this.origen;
      campoDestino.innerText = this.destino;
    }
    
    this.master.buscarVuelos(this.origen, this.destino, this.fecha ).subscribe((res: any) => {
      this.listaVuelos = res['hydra:member'];
    }
    )
  }
  registrarReserva() {
    this.master.reservarVuelo(this.reservaObj).subscribe((res: any) => {
      this.cerrarModal()
      alert("La reserva se ha realizado correctamente")
    })
  }
  reservarVuelo(vueloId: number) {
    this.reservaObj.vuelo = "/vuelos/" + vueloId
    const modal = document.getElementById('reservaModal');
    if (modal != null) {
      modal.style.display = "block";
    }
  }
  cerrarModal() {
    const modal = document.getElementById("reservaModal");
    if (modal != null) {
      modal.style.display = "none";
    }
  }


}
