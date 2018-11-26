import { Card } from './Card'
import { Stack } from './Stack';

export class Deck {
    suits = ['♠', '♥', '♣', '♦']
    figures = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q','A']
    constructor(){
        this.deckPoker = this.createCards()    
    }

    createCards(){
        let cards = []
        
        for(var i = 0; i < 13; i++){
            let value = i

            if(i > 8 && i < 12){
                value = 10
            }else if(i == 12){
                value = 11
            }

            cards.push(new Card(this.suits[0], this.figures[i], value))
            cards.push(new Card(this.suits[1], this.figures[i], value))
            cards.push(new Card(this.suits[2], this.figures[i], value))
            cards.push(new Card(this.suits[3], this.figures[i], value))
        }
        
        this.shuffle(cards)

        let stackCards = new Stack()

        cards.forEach(function(element){
            stackCards.push(element)
        })

        return stackCards
    }

    shuffle (arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
        return arr
    }
}