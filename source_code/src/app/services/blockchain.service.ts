import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'https://blockchain.info/';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  constructor(private httpClient: HttpClient) { }

  readBlock(): Observable<any> {
    return this.httpClient.get(baseURL+'blocks/?format=json&cors=true');
  }
  readSingleBlock(hash:any): Observable<any> {
    return this.httpClient.get(baseURL+'rawblock/'+hash+'?format=json&cors=true');
  }
  readSingleTransBlock(hash:any): Observable<any> {
    return this.httpClient.get(baseURL+'rawtx/'+hash+'?format=json&cors=true');
  }
  readLatestBlock(): Observable<any> {
    return this.httpClient.get(baseURL+'latestblock?cors=true');
  }
}
