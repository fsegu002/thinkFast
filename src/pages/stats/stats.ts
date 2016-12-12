import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {QuestionGenerator} from "../../app/models/question-generator";
import {User} from "../../app/models/user.model";


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
    console.log(this.userStats);
  }

  ionViewDidLoad() {
    console.log('Hello StatsPage Page');
  }

}
