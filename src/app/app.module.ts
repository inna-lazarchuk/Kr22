import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/pages/main/main.component';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import { ProductComponent } from './components/pages/product/product.component';
import { OrderComponent } from './components/pages/order/order.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LongTextPipe } from './pipes/long-text.pipe';
import { PricePipe } from './pipes/price.pipe';
import { ProductCardComponent } from './components/pages/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CatalogComponent,
    ProductComponent,
    OrderComponent,
    HeaderComponent,
    FooterComponent,
    LongTextPipe,
    PricePipe,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
