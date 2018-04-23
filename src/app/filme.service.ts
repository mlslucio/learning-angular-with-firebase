import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class FilmeService {

  private novoFilmeObs = new BehaviorSubject<string>("");
  public novoFilme = this.novoFilmeObs.asObservable();
  constructor() { }

  addNovoFilmeAoCatalogo(rotaFilme: string){
    this.novoFilmeObs.next(rotaFilme);
  }

}
