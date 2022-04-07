import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import { ListComponent } from './list/list.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [


    { path: '' , redirectTo: '/list' , pathMatch: 'full'  },
  
    {   path: 'list' , component: ListComponent   },

    {  path: 'ajout' , component: AjoutComponent    },

    { path: 'update/:id' , component: UpdateComponent },

    { path: '**' , component: NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
