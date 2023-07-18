import { Component } from '@angular/core';

interface Producto {
  nombre: string;
  costo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto';
  productos: Producto[] = [
      { nombre: 'Producto 1', costo: '10.00' },
      { nombre: 'Producto 2', costo: '20.00' },
      { nombre: 'Producto 3', costo: '30.00' },
    ];
  }

interface Producto {
  nombre: string;
  costo: string;
}