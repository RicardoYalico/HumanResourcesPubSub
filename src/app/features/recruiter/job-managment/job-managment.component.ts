import { Component } from '@angular/core';
import {NgForOf, NgStyle} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-job-managment',
  imports: [
    NgStyle,
    NgForOf,
    RouterLink
  ],
    templateUrl: './job-managment.component.html',
    styleUrl: './job-managment.component.css'
})
export class JobManagmentComponent {

  jobs = [
    { id: 1, titulo: 'Desarrollador Backend', ubicacion: 'Remoto', tipoContrato: 'Tiempo completo', nivelExperiencia: 'Senior', tecnologias: 'Node.js, MongoDB', fechaPublicacion: '2025-02-01', estado: 'Abierta', aplicantes: 12, reclutador: 'Juan Pérez' },
    { id: 2, titulo: 'Frontend Developer', ubicacion: 'Híbrido - Lima', tipoContrato: 'Freelance', nivelExperiencia: 'Mid', tecnologias: 'Angular, TypeScript', fechaPublicacion: '2025-02-10', estado: 'En proceso', aplicantes: 8, reclutador: 'María Gómez' },
    { id: 3, titulo: 'DevOps Engineer', ubicacion: 'Presencial - Lima', tipoContrato: 'Tiempo completo', nivelExperiencia: 'Senior', tecnologias: 'AWS, Docker', fechaPublicacion: '2025-01-20', estado: 'Cerrada', aplicantes: 5, reclutador: 'Carlos Ramírez' },
    { id: 4, titulo: 'Data Scientist', ubicacion: 'Remoto', tipoContrato: 'Tiempo completo', nivelExperiencia: 'Junior', tecnologias: 'Python, TensorFlow', fechaPublicacion: '2025-02-05', estado: 'Abierta', aplicantes: 15, reclutador: 'Ana Torres' }
  ];

}
