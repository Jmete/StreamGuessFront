import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {MaterialModule, MdNativeDateModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import {MdCardModule} from '@angular/material';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule,
    MdGridListModule,
    MdCardModule,
    RouterModule.forRoot([
        {
          path: 'info',
          component: InfoComponent
        },
        {
          path: 'game',
          component: GameComponent
        },
        {
          path: '',
          component: GameComponent
        }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
