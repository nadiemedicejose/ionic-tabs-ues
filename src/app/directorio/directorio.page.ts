import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.page.html',
  styleUrls: ['./directorio.page.scss'],
})
export class DirectorioPage implements OnInit {
  // Crear variable tipo array
  lista: Array<any> = [
    {
      titulo: 'Rector',
      nombre: 'DR. PEDRO ORTEGA ROMERO',
      imagen: 'assets/images/portega.jpg'
    },
    {
      titulo: 'Secretario Técnico',
      nombre: 'LIC. RICARDO BARRÓN MORALES',
      imagen: 'assets/images/rbarron.jpg'
    },
    {
      titulo: 'Coordinadora del Área Jurídica',
      nombre: 'LIC. ANA SILVIA VALENZUELA RUIZ',
      imagen: 'assets/images/avlzla.jpg'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
