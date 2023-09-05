import { Oferta } from './../../core/models/oferta.model';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/services/ofertas.service';

@Component({
  selector: 'app-catalogo-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo-detail.component.html',
  styleUrls: ['./catalogo-detail.component.css'],
})
export class CatalogoDetailComponent implements OnInit {
  route = inject(ActivatedRoute);
  ofertasService = inject(OfertasService);
  oferta: Oferta = { id: 0, name: '', description: '', price: 0, image: '' };

  constructor() {}

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'));
    let id = this.route.snapshot.paramMap.get('id');
    this.ofertasService
      .getOfertaById(id!)
      .subscribe((data) => (this.oferta = data));
  }
}
