import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockListComponent } from './components/block-list/block-list.component';

import { LatestBlockComponent } from './components/latest-block/latest-block.component';
import {SingleBlockComponent} from './components/single-block/single-block.component';
import {SingleTransactionBlockComponent} from './components/single-transaction-block/single-transaction-block.component';


const routes: Routes = [
  {path:'',component:BlockListComponent},
  {path:'single-block/:hash',component:SingleBlockComponent},
  {path:'single-transaction-block/:hash',component:SingleTransactionBlockComponent},
  {path:'latest-block',component:LatestBlockComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
