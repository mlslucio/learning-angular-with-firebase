import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../filme.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  novoFilme: string;

  constructor(private filmeService:FilmeService) { }

  ngOnInit() {
    this.filmeService.novoFilme.subscribe(novoFilme => this.novoFilme = novoFilme)
  }

}