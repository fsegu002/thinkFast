import { NgModule, ErrorHandler } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { GameIndex } from '../pages/game-index/game-index';
import {Counter} from "../pages/counter/counter.component";
import {IndexPage} from "../pages/index/index";
import {StatsPage} from "../pages/stats/stats";



@NgModule({
  declarations: [
    MyApp,
    IndexPage,
    GameIndex,
    Counter,
      StatsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IndexPage,
    GameIndex,
      StatsPage
  ],
  providers: [
      {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
