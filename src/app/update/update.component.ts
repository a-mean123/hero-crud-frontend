import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(
    private actRoute: ActivatedRoute, 
    private shared: SharedService,
    private router: Router
    ) { }

  id: any;
  hero: any;

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.paramMap.get('id');

    this.shared.getHeroById(this.id)
      .subscribe(
        (response)=>{
          this.hero = response;
          
          
        }
      )
    
    
  }


  update(){

    this.shared.updateHero(this.id, this.hero )
      .subscribe(
        (response)=>{
         
          Swal.fire({
        
            icon: 'success',
            title: 'Your Hero has been updated',

          })

          this.router.navigate([ '/list']);
          
        }
      );

  }



}
