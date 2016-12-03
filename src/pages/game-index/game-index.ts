import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {QuestionGenerator} from "../../app/models/question-generator";
import {Counter} from "../../app/counter/counter.component";

@Component({
  selector: 'page-home',
  templateUrl: 'game-index.html'
})
export class GameIndex {
  title: string = 'ThinkFast';
  gameOver: boolean;
  score: number;
  questions: QuestionGenerator[];
  answers: number[];
  question: QuestionGenerator;
  counter: Counter;


  constructor(public navCtrl: NavController) {
    this.score = 0;
    this.playGame();
  }

  playGame(){
      if(this.gameOver) return false;
      this.question = new QuestionGenerator();
      this.answers = this.question.answers;

      this.counter = new Counter();

  }

  checkAnswer(answer: number){
    this.question.userAnswer = answer;
    if(this.question.userAnswer === this.question.correctAnswer){
      console.log('Correct answer');
      this.score++;
      // this.counter.ngOnDestroy();
      this.playGame();
    } else {
      console.log('Incorrect answer');
      this.gameOver = true;
    }
  }





}
