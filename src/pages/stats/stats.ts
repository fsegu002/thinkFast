import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {QuestionGenerator} from "../../app/models/question-generator";
import {User} from "../../app/models/user.model";
import {GameIndex} from "../game-index/game-index";


@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html'
})
export class StatsPage implements OnInit {
  user: User;
  userStats: QuestionGenerator;

  constructor(public navCtrl: NavController,
              private params: NavParams) {}

  ngOnInit(){
    this.user = this.params.get('user');
    console.log(this.user);
    this.userStats = this.params.get('stats');
  }


  nextGame(){
    this.user.level += 1;
    this.navCtrl.push(GameIndex, {
      user: this.user
    });
  }

}
