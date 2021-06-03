import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BookStoreService } from './services/book-store.service';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchProductComponent } from './search-product/search-product.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';
import ROUTES_APP from './app-routing.module';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [AppComponent, ProductDetailsComponent, SearchProductComponent, HomeComponent, NotfoundComponent, TestComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES_APP),
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [BookStoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
