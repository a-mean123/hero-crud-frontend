import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }


  listHero : any = [];


  ajouter(hero: any){

    this.listHero.push(hero)

  }


}
