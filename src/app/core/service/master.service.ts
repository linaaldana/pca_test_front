import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  getListaAerolineas() {
    return this.http.get("http://dev.reservavuelos.local/aerolineas");
  }

  getListaVuelos() {
    return this.http.get("http://dev.reservavuelos.local/vuelos");
  }

  registrarVuelo(vuelo: any){

  const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/ld+json'})
  }
    return this.http.post('http://dev.reservavuelos.local/vuelos', vuelo, httpOptions);
  }

  buscarVuelos(origen: string,destino: string,fecha: string) {
    return this.http.get("http://dev.reservavuelos.local/vuelos?page=1&origen="+origen+"&destino="+destino+"&fechaSalida="+fecha);
  }

  reservarVuelo(reserva: any) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/ld+json'})
      }
    return this.http.post("http://dev.reservavuelos.local/reservas",reserva, httpOptions );
  } 

  getReservasAerolineas(){
    return this.http.get("http://dev.reservavuelos.local/view_estadisticas");
  }

}