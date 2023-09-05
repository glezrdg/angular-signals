import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfertasService } from 'src/app/services/ofertas.service';
import { RouterLink } from '@angular/router';
import { Oferta } from 'src/app/core/models/oferta.model';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {
  ofertaService = inject(OfertasService);

  constructor() {}
  ngOnInit(): void {
    let ofertas = this.ofertaService.ofertas;
    console.log(ofertas);
    let oferta = ofertas.find((oferta) => oferta.id === 2);
    console.log(oferta);
  }
}
