import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.page.html',
  styleUrls: ['./carreras.page.scss'],
})
export class CarrerasPage implements OnInit {
   // Crear arreglo de carreras
   carreras: Array<any> = [
    {titulo: 'Ingeniería Ambiental'},
    {titulo: 'Ingeniería de Procesos'},
    {titulo: 'Ingeniería Biomédica'},
    {titulo: 'Ingeniería Biotecnología Acuática'},
    {titulo: 'Ingeniería en Geociencias'},
    {titulo: 'Ingeniería en Horticultura'},
    {titulo: 'Ingeniería Industrial en Manufactura'},
    {titulo: 'Ingeniería en Logística y Transporte'},
    {titulo: 'Ingeniería en Mecatrónica'},
    {titulo: 'Ingeniería en Software'},
    {titulo: 'Ingeniería en Tecnología de Alimentos'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
