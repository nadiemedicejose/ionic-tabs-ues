import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vinculacion',
  templateUrl: './vinculacion.page.html',
  styleUrls: ['./vinculacion.page.scss'],
})
export class VinculacionPage implements OnInit {
  // Crear arreglo de servicios
  vinculos: Array<any> = [
    {
      vinculo: 'Convenios',
      descripcion: `
      La vinculación de la institución con su entorno tiene la finalidad de establecer alianzas estratégicas y promover la participación de los tres niveles de gobierno, con el sector productivo, el sector social, las asociaciones de profesionistas y los medios de comunicación, encaminadas a apoyar la formación profesional de los educandos. Actualmente se tienen más de 200 convenios vigentes y operados con organizaciones e instituciones del sector público y privado para el desarrollo profesional y productivo de los estudiantes de las cinco unidades académicas.
      `
    },
    {
      vinculo: 'Seguimiento de Egresados',
      descripcion: `
        La UES cuenta con un sistema de seguimiento de egresados que permite conocer las nuevas exigencias que plantea el ejercicio profesional de los egresados, como consecuencia de las transformaciones económicas, sociales, tecnológicas, para su incorporación oportuna en los planes y programas de estudios, así como también apoyar en el diseño de programas de educación continua pertinentes para la actualización de profesionales en ejercicio.
      `
    },
    {
      vinculo: 'Bolsa de Trabajo',
      descripcion: `
        La Bolsa de Trabajo de la universidad tiene la finalidad de contactar a nuestros alumnos y egresados a una oportunidad laboral de acuerdo a los requerimientos de las empresas públicas y privadas tanto estatales, nacionales e internacionales, para ocupar puestos acordes a las carreras estudiadas.
      `
    },
    {
      vinculo: 'Servicios a la Industria',
      descripcion: `
        Desarrollar proyectos que permitan a los diferentes sectores competir en el mercado global, con sentido de productividad creciente derivado de productos científicos y tecnológicos requeridos en la actualidad por medio de la fortaleza académica, investigación e innovación.
      `
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
