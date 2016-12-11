export class QuestionGenerator {


    question: string;
    operation: string;
    correctAnswer: number;
    userAnswer?: number;
    answers: number[];

    constructor(){

        let q = this.generateQuestion();
        this.question = q.question;
        this.operation = q.operation;
        this.correctAnswer = q.correctAnswer;

    }

    generateQuestion(){
        let q: string = `What's the result of the following operation?`;
        let x: number = this.getRandomNumber(),
            y: number = this.getRandomNumber();

        let operation = `${x} + ${y}`,
            answer  = x + y;

        let tempArr: number[] = [];
        tempArr.push(answer);
        tempArr.push((answer + x));
        tempArr.push((answer + y));
        tempArr.push((answer - x));

        function shuffle(array) {
            var m = array.length, t, i;

            // While there remain elements to shuffle…
            while (m) {

                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);

                // And swap it with the current element.
                t = array[m];
                array[m] = array[i];
                array[i] = t;
            }

            return array;
        }

        this.answers = shuffle(tempArr);



        return {
            question: q,
            operation: operation,
            correctAnswer: answer
        }
    }

    getRandomNumber(): number {
        let min = 1;
        let max = 50;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}