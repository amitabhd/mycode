import { Component, OnInit } from '@angular/core';
import {BlockchainService} from 'src/app/services/blockchain.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-block',
  templateUrl: './single-block.component.html',
  styleUrls: ['./single-block.component.css']
})
export class SingleBlockComponent implements OnInit {
  singleblock:any;
  constructor(private BlockchainService:BlockchainService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.readblock();
  }
  readblock():void{
    this.BlockchainService.readSingleBlock(this.route.snapshot.params.hash)
      .subscribe(
        data => {
          this.singleblock = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
    }
    setCurrentBlock(CurrentBlock: any):void{
      this.router.navigate(['single-transaction-block/'+CurrentBlock.hash]);
    }

}
