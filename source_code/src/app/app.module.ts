import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockListComponent } from './components/block-list/block-list.component';
import { SingleBlockComponent } from './components/single-block/single-block.component';
import { LatestBlockComponent } from './components/latest-block/latest-block.component';
import { SingleTransactionBlockComponent } from './components/single-transaction-block/single-transaction-block.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MyLoaderComponent } from './components/my-loader/my-loader.component';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './interceptors/loader-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    BlockListComponent,
    SingleBlockComponent,
    LatestBlockComponent,
    SingleTransactionBlockComponent,
    NavbarComponent,
    MyLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
    
  ],
  
  providers: [LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
