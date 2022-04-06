import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

import Swal from 'sweetalert2'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  heros: any;

  constructor(public _shared: SharedService) { }

  ngOnInit(): void {

    this._shared.getAllHero()
      .subscribe(
        (response)=>{
          this.heros = response
          console.log(this.heros);
          
        }
      )

  }

  // delete(id: any){
    
  //   this._shared.deleteHero(id)
  //     .subscribe(
  //       (response)=>{
  //         console.log(response);
          
  //         this.ngOnInit();

  //       }
  //     );
    
  // }

  delete(id: any){


    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this._shared.deleteHero(id)
        .subscribe(
          (response)=>{
            console.log(response);
            
            this.ngOnInit();
  
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )

          }
        );

     
      }
    })


    

    
  }

}
