import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
  
    mostrarLista = true;

  toggleLista(): void {
    this.mostrarLista = !this.mostrarLista;
    }
  }

interface Producto {
  nombre: string;
  costo: string;
}