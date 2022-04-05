import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {


  newHero = {
    name: '',
    power: 0,
    image: ''
  }


  listHero : any = [];

  ajout(){

    this.listHero.push(this.newHero);

    this.newHero = {
      name: '',
      power: 0,
      image: ''
    }


  }


  constructor() { }

  ngOnInit(): void {

  }

}
