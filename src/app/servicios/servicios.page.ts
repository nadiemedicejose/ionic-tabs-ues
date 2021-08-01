import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {
  // Crear arreglo de servicios
  servicios: Array<any> = [
    {
      servicio: 'Programa Institucional de Tutorías',
      icono: 'people'
    },
    {
      servicio: 'Programa de Apoyo y Seguimiento Académico',
      icono: 'calendar'
    },
    {
      servicio: 'Servicio Social',
      icono: 'heart'
    },
    {
      servicio: 'Programa de Salud Universitaria',
      icono: 'medkit'
    },
    {
      servicio: 'Prácticas Profesionales',
      icono: 'briefcase'
    },
    {
      servicio: 'Becas y Estímulos',
      icono: 'football'
    },
    {
      servicio: 'Programa de Educación en Valores',
      icono: 'heart-half'
    },
    {
      servicio: 'Programa de Educación Ambiental',
      icono: 'leaf'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
