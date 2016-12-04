import {Component, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';
import {Observable} from "rxjs";


@Component({
    selector: 'tf-counter',
    templateUrl: 'counter.component.html'
})

export class Counter implements OnInit, OnDestroy{
    timeLimit: number;
    endTime: number;
    subscription: any;

    @Output()
    message: EventEmitter<any> = new EventEmitter();



    constructor() {
        this.timeLimit = 15;
        this.endTime = 0;

    }

    ngOnInit(){
        let timer = Observable.timer(2000, 1000);
        this.subscription = timer.subscribe((t) => this.countDown());
    }

    /**
     * CountDown will start the countdown of the clock. If it gets to 0 the game is over.
     */
    countDown(){
        this.timeLimit--;
        if(this.timeLimit === this.endTime){
            console.log('game over');
            this.subscription.unsubscribe();
            this.countdownMessage();
        }
    }

    /**
     * CountDown gets Destroyed if Counter instance is removed.
     */
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }


    /**
     * Emit message to parent controller when time is up.
     */
    countdownMessage(){
        this.message.emit({
            title: "Time's up!"
        });
    }


}