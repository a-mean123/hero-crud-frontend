import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
 
  constructor( public _shared: SharedService , private router: Router ) { }

  ngOnInit(): void {
  }

  newHero = {
    name: '',
    power: 0,
  }

  myFile: any;


  selectFile(event: any){
    this.myFile = event.target.files[0];  
  }


  ajout(){

      let myFormData = new FormData();
      myFormData.append('name' , this.newHero.name );
      myFormData.append('power', this.newHero.power.toString());
      myFormData.append('image' , this.myFile );


      this._shared.create(myFormData)
        .subscribe(
          (response)=>{
            

            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your Hero has been saved',
              showConfirmButton: false,
              timer: 1500
            })

            
            this.newHero = {
              name: '',
              power: 0,
            }

            this.router.navigate(['/list']);
          
          }
        )
  }
 

}
