import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {GameIndex} from "../game-index/game-index";
import {User} from "../../app/models/user.model";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'page-index',
  templateUrl: 'index.html'
})
export class IndexPage implements OnInit {
  public title: string;
  public user: User;
  public userForm: FormGroup;

  constructor(public navCtrl: NavController, private _fb: FormBuilder) {

  }

  ngOnInit() {
    this.title = 'ThinkFast';
    this.userForm = this._fb.group({
      username: ['', Validators.required]
    });
  }

  save(userObj: any) {

    this.user = new User();
    this.user.id = 1;
    this.user.username = userObj.value.username;


    // check if model is valid
    // if valid, call API to save customer
    console.log(this.user);

    this.startGame();
  }

  startGame() {
    this.navCtrl.push(GameIndex, this.user);
  }

}
