import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
 
  constructor( public _shared: SharedService ) { }

  ngOnInit(): void {
  }

  newHero = {
    name: '',
    power: 0,
    image: ''
  }


  ajout(){

    this._shared.ajouter(this.newHero);

    this.newHero = {
      name: '',
      power: 0,
      image: ''
    }


  }
 

}
