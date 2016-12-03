import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable} from "rxjs";

@Component({
    selector: 'tf-counter',
    templateUrl: 'counter.component.html'
})

export class Counter implements OnInit, OnDestroy{
    timeLimit: number;
    endTime: number;
    seconds: number;
    subscription: any;

    constructor() {
        this.timeLimit = 15;
    }

    ngOnInit(){
        let timer = Observable.timer(2000, 1000);
        this.subscription = timer.subscribe((t) => this.countDown());
    }

    countDown(){
        this.timeLimit--;
        if(this.timeLimit === 0){
            console.log('game over');
            this.subscription.unsubscribe();
        }
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

}