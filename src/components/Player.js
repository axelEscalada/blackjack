
export class Player{

    constructor(name){
        this.name = name
        this.hand = 0
        this.points = 0
    }

    addHand(value){
        this.hand += value
    }

    addPoints(value){
        this.points += value
    }

    resetHand(){
        this.hand = 0
    }

}