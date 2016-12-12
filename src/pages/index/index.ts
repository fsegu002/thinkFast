import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
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

  constructor(public navCtrl: NavController,
              private params: NavParams,
              private _fb: FormBuilder) {

  }

  ngOnInit() {
    this.title = 'ThinkFast';
    (this.user) ? this.params.get('user') : {};
    console.log(this.user);
    this.userForm = this._fb.group({
      username: ['', Validators.required]
    });

  }

  save(userObj: any) {

    if(!this.user) this.user = new User(userObj.value.username);


    // check if model is valid
    // if valid, call API to save customer
    console.log(this.user);

    this.startGame();
  }

  startGame() {
    this.navCtrl.push(GameIndex, {
      user: this.user
    })
        .then(() => {
          this.userForm.value.username = "";
        })

  }

}
