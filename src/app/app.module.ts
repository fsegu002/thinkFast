import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { GameIndex } from '../pages/game-index/game-index';
import {Counter} from "./counter/counter.component";
import {IndexPage} from "../pages/index/index";

@NgModule({
  declarations: [
    MyApp,
    IndexPage,
    GameIndex,
    Counter
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IndexPage,
    GameIndex
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
