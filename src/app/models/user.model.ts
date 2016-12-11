export class User {
    username: string;
    level?: number;
    score?: number;

    constructor(username, level?, score?){
        this.username = username;
        this.level = level;
        this.score = score;

        if(!this.level) this.level = 1;
        if(!this.score) this.score = 0;
    }


}