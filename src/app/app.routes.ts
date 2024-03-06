import { Routes } from '@angular/router';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ReservaComponent } from './reserva/reserva.component';
import { VueloComponent } from './vuelo/vuelo.component';
import { ListaVuelosComponent } from './lista-vuelos/lista-vuelos.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "busqueda",
        pathMatch: "full"
    },
    {
        path: "busqueda",
        component: BusquedaComponent,
        title: "Buscar vuelo"
    },
    {
        path: "lista-vuelos",
        component: ListaVuelosComponent,
        title: "Lista de vuelos"
    },
    {
        path: "reserva",
        component: ReservaComponent,
        title: "Reservar vuelo"
    },
    {
        path: "registrar-vuelo",
        component: VueloComponent,
        title: "Registrar vuelo",
    },
    {
        path: "estadisticas",
        component: EstadisticaComponent,
        title: "Estadisticas",
    },
    


];
