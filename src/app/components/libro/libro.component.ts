import { Component, Input, ViewEncapsulation, signal } from '@angular/core';
import { Task } from '../../models/Task';
import { CommonModule } from '@angular/common';
import { AdministradorComponent } from '../administrador/administrador.component';
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-libro',
  standalone: true,
  imports: [CommonModule, AdministradorComponent],
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.css',
  encapsulation: ViewEncapsulation.None
})
export class LibroComponent {
  libros = signal<Task[]>([]);

  //@Input() libro: Task | undefined;

  constructor(private libroService: LibroService) {
    const libros: Task[]  = [

        {
          Titulo: 'Crepusculo',
          Autor: 'Gabriel Lopez',
          Ano: 2010,
          Cantidad: 2,
          ISBN: 15246
        },
        {
          Titulo: 'Amanecer',
          Autor: 'Maria Rodriguez',
          Ano: 2015,
          Cantidad: 3,
          ISBN: 98765
        },
        {
          Titulo: 'Noche Eterna',
          Autor: 'Carlos Perez',
          Ano: 2008,
          Cantidad: 5,
          ISBN: 35421
        },
        {
          Titulo: 'Atardecer',
          Autor: 'Laura Martinez',
          Ano: 2012,
          Cantidad: 1,
          ISBN: 78901
        },
        {
          Titulo: 'Aurora',
          Autor: 'Juan Garcia',
          Ano: 2018,
          Cantidad: 4,
          ISBN: 45678
        },
        {
          Titulo: 'Anochecer',
          Autor: 'Ana Ramirez',
          Ano: 2005,
          Cantidad: 2,
          ISBN: 12345
        },
        {
          Titulo: 'Cielo Estrellado',
          Autor: 'Pedro Sanchez',
          Ano: 2019,
          Cantidad: 3,
          ISBN: 54321
        },
        {
          Titulo: 'Luz Lunar',
          Autor: 'Sofia Torres',
          Ano: 2014,
          Cantidad: 2,
          ISBN: 87654
        },
        {
          Titulo: 'Sombras de la Noche',
          Autor: 'Luis Mendez',
          Ano: 2007,
          Cantidad: 1,
          ISBN: 23456
        },
        {
          Titulo: 'Destellos',
          Autor: 'Elena Gomez',
          Ano: 2016,
          Cantidad: 4,
          ISBN: 78912
        },
        {
          Titulo: 'Eclipse',
          Autor: 'Diego Rodriguez',
          Ano: 2011,
          Cantidad: 3,
          ISBN: 34567
        },
        {
          Titulo: 'Ocaso',
          Autor: 'Carmen Flores',
          Ano: 2009,
          Cantidad: 2,
          ISBN: 89012
        },
        {
          Titulo: 'Luces del Atardecer',
          Autor: 'Javier Morales',
          Ano: 2017,
          Cantidad: 5,
          ISBN: 45678
        },
        {
          Titulo: 'Misterio Nocturno',
          Autor: 'Isabel Vega',
          Ano: 2013,
          Cantidad: 1,
          ISBN: 12345
        },
        {
          Titulo: 'Silueta Lunar',
          Autor: 'Ricardo Castillo',
          Ano: 2006,
          Cantidad: 3,
          ISBN: 78901
        },
        {
          Titulo: 'Sombra de Estrellas',
          Autor: 'Alejandra Hernandez',
          Ano: 2018,
          Cantidad: 2,
          ISBN: 23456
        },
        {
          Titulo: 'Despedida del Sol',
          Autor: 'Patricia Diaz',
          Ano: 2012,
          Cantidad: 4,
          ISBN: 87654
        },
        {
          Titulo: 'Penumbra',
          Autor: 'Roberto Aguilar',
          Ano: 2015,
          Cantidad: 1,
          ISBN: 34567
        },
        {
          Titulo: 'Reflejos Lunares',
          Autor: 'Martha Ruiz',
          Ano: 2010,
          Cantidad: 3,
          ISBN: 89012
        },
        // Agrega más objetos si es necesario
      ];


    this.libros.set(libros.concat(...this.libroService.getLibro()));
    }

  }

