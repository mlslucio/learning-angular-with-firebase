import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FilmeService } from '../filme.service';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css'],
})
export class FilmeComponent implements OnInit {

  constructor(private filmeService: FilmeService, private router:Router) { }
  
  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    ano: new FormControl('', Validators.required),
    lancado: new FormControl('sim', Validators.required)
  })

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.form)
    this.filmeService.addNovoFilmeAoCatalogo(this.form.value.nome);
    this.router.navigate(['catalogo']);
  }

}
