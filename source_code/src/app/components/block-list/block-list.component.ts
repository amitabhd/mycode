import { Component, OnInit } from '@angular/core';
import {BlockchainService} from 'src/app/services/blockchain.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.css']
})
export class BlockListComponent implements OnInit {
  blocklist: any;
  currentList: any;
  singleblock:any;
  constructor(private BlockchainService:BlockchainService,private router:Router) { }

  ngOnInit(): void {
    this.read_block();
  }
  read_block():void{
    this.BlockchainService.readBlock()
      .subscribe(
        data => {
          this.blocklist = data.blocks;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  setCurrentList(CurrentList: any):void{
    this.router.navigate(['single-block/'+CurrentList.hash]);
  }


}
