import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';

import {NavController, AlertController, NavParams} from 'ionic-angular';
import {QuestionGenerator} from "../../app/models/question-generator";
import {Counter} from "../counter/counter.component";
import {User} from "../../app/models/user.model";

@Component({
  selector: 'page-home',
  templateUrl: 'game-index.html'
})
export class GameIndex implements OnInit, OnDestroy {
  title: string;
  gameOver: boolean;
  score: number;
  questions: QuestionGenerator[] = [];
  answers: number[];
  question: QuestionGenerator;
  counter: Counter;
  rightAnswerCount: number;
  wrongAnswerCount: number;
  user: User;

  // Wire child instance to parent
  @ViewChild(Counter)
  private childCounter: Counter;



  constructor(public navCtrl: NavController, public params: NavParams, public alertCtrl: AlertController) {
    this.score = 0;
    this.rightAnswerCount = 0;
    this.wrongAnswerCount = 0;

    this.user = this.params.get("user");

  }

  ngOnInit(){
    this.title = 'ThinkFast';
    this.drawQuestion();
    this.counter = new Counter();
    console.log( this.counter);
  }

  drawQuestion(){
      if(this.gameOver) return false;
      this.question = new QuestionGenerator();
      this.answers = this.question.answers;

  }

  /**
   *
   * @param answer Pass the answer chosen by the user to tested
   */
  checkAnswer(answer: number){
    this.question.userAnswer = answer;
    if(this.question.userAnswer == this.question.correctAnswer){
      this.questions.push(this.question);
      this.rightAnswerCount++;
      console.log('Right: ' + this.rightAnswerCount);
      this.drawQuestion();
      this.childCounter.resetCounter();
      this.counter = new Counter();

    } else {
      this.wrongAnswerCount++;
      console.log('Wrong: ' + this.wrongAnswerCount);
      this.drawQuestion();
    }
  }


  quitGame() {
    this.navCtrl.pop();
  }

  ngOnDestroy(){
    console.log('game distroyed');
  }

  /**
   *
   * @param message an event object containing a title property
   */
  gameAlert(message: any) {
    let msg = {
      title: message.title,
      body: message.body,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    };

    let alert = this.alertCtrl.create(msg);
    alert.present();
  }



}
