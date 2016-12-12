import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';

import {NavController, AlertController, NavParams} from 'ionic-angular';
import {QuestionGenerator} from "../../app/models/question-generator";
import {Counter} from "../counter/counter.component";
import {User} from "../../app/models/user.model";
import {StatsPage} from "../stats/stats";

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
  MAX_RIGHT_ANSWERS: number;
  wrongAnswerCount: number;
  MAX_WRONG_ANSWERS: number;
  user: User;
  stats: StatsPage;

  // Wire child instance to parent
  @ViewChild(Counter)
  private childCounter: Counter;



  constructor(public navCtrl: NavController, public params: NavParams, public alertCtrl: AlertController) {
    this.score = 0;
    this.rightAnswerCount = 0;
    this.wrongAnswerCount = 0;
    this.MAX_RIGHT_ANSWERS = 3;
    this.MAX_WRONG_ANSWERS = 3;

    this.user = this.params.get("user");

  }

  ngOnInit(){
    this.title = 'ThinkFast';
    this.drawQuestion();
    this.counter = new Counter();
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

      if (this.rightAnswerCount === this.MAX_RIGHT_ANSWERS){
        this.user.score += this.rightAnswerCount;
        this.childCounter.stopCounter();
        this.navCtrl.push(StatsPage, {
          user: this.user,
          stats: this.questions
        })
            .then(() => { console.log('finished pushing page') });
      } else {
        this.drawQuestion();
        this.childCounter.resetCounter();
      }


    } else {
      this.questions.push(this.question);
      this.wrongAnswerCount++;
      console.log('Wrong: ' + this.wrongAnswerCount);

      if( this.wrongAnswerCount === this.MAX_WRONG_ANSWERS){
        this.gameAlert({
          title: 'Game Over',
          body: 'Sorry you have reached 3 wrong answers'
        });
      }

      this.drawQuestion();


    }
  }

  /**
   * Quit game from any stage
   */
  quitGame() {
    let alert = this.alertCtrl.create({
      title: "Are you sure you want to quit?",
      buttons: [
        {
          text: "Yes, I'm sure",
          handler: () => {
            this.navCtrl.popToRoot();
          }
        },
        {
          text: "No, let's continue",
          handler: () => {
            return false;
          }
        }
      ]
    });
    alert.present();
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
