import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { reducers } from 'src/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { BookSearchEffects } from 'src/store/effects/book-search.effects';
import { GoogleBooksService } from './services/google-books.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      autoPause: true,
    }),
    HttpClientModule,
    EffectsModule.forRoot([BookSearchEffects]),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GoogleBooksService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
