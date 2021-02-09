import { Component, OnInit } from '@angular/core';
import {BlockchainService} from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-latest-block',
  templateUrl: './latest-block.component.html',
  styleUrls: ['./latest-block.component.css']
})
export class LatestBlockComponent implements OnInit {
  latestblocklist:any;
  constructor(private BlockchainService:BlockchainService) { }

  ngOnInit(): void {
    this.readLatestBlock();
  }
  readLatestBlock():void{
    this.BlockchainService.readLatestBlock()
    .subscribe(
      data => {
        this.latestblocklist = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

}
