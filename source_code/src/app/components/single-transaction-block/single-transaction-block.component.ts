import { Component, OnInit } from '@angular/core';
import {BlockchainService} from 'src/app/services/blockchain.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-transaction-block',
  templateUrl: './single-transaction-block.component.html',
  styleUrls: ['./single-transaction-block.component.css']
})
export class SingleTransactionBlockComponent implements OnInit {

  singletransblock:any;
  constructor(private BlockchainService:BlockchainService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.readsingletransblock();
  }
  readsingletransblock():void{
    this.BlockchainService.readSingleTransBlock(this.route.snapshot.params.hash)
      .subscribe(
        data => {
          this.singletransblock = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
    }
    

}
