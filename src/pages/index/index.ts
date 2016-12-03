import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GameIndex} from "../game-index/game-index";


@Component({
  selector: 'page-index',
  templateUrl: 'index.html'
})
export class IndexPage {
  title: string;

  constructor(public navCtrl: NavController) {
    this.title = 'ThinkFast';
  }

  startGame() {
    this.navCtrl.push(GameIndex);
  }

}
