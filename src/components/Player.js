
export class Player{

    constructor(name){
        this.name = name
        this.hand = []
        this.handSum = 0
        this.points = 2000
    }

    addHandSum(value){
        this.handSum += value
    }

    addHand(card){
        this.hand.push(card.rank)
        this.addHandSum(card.value)
    }

    addPoints(value){
        this.points += value
    }

    substractPoints(value){
        this.points -= value
    }

    resetHand(){
        this.hand = []
        this.handSum = 0
    }

}