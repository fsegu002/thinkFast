import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {QuestionGenerator} from "../../app/models/question-generator";


@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html'
})
export class StatsPage implements OnInit {
  userStats: QuestionGenerator;

  constructor(public navCtrl: NavController,
              private params: NavParams) {}

  ngOnInit(){
    this.userStats = this.params.get('stats');
    console.log(this.userStats);
  }

  ionViewDidLoad() {
    console.log('Hello StatsPage Page');
  }

}
