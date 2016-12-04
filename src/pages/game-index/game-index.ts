import {Component, OnDestroy, OnInit} from '@angular/core';

import {NavController, AlertController} from 'ionic-angular';
import {QuestionGenerator} from "../../app/models/question-generator";
import {Counter} from "../counter/counter.component";

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


  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.score = 0;

  }

  ngOnInit(){
    this.title = 'ThinkFast';
    this.drawQuestion();
  }

  drawQuestion(){
      if(this.gameOver) return false;
      this.question = new QuestionGenerator();
      this.answers = this.question.answers;

      this.counter = new Counter();

  }

  /**
   *
   * @param answer Pass the answer chosen by the user to tested
   */
  checkAnswer(answer: number){
    this.question.userAnswer = answer;
    if(this.question.userAnswer === this.question.correctAnswer){
      this.questions.push(this.question);
      console.log(this.questions);
      this.score++;
      this.drawQuestion();

    } else {
      console.log('Incorrect answer');
      this.gameOver = true;
    }
  }


  quitGame() {
    this.navCtrl.pop();
  }

  ngOnDestroy(){
    console.log('distroyed');
  }

  /**
   *
   * @param message an event object containing a title property
   */
  gameAlert(message: any) {
    let alert = this.alertCtrl.create({
      title: message.title,
      buttons: [
        {
          text: 'Close',
          handler: () => this.navCtrl.pop()
        }
      ]
    });
    alert.present();
  }



}
