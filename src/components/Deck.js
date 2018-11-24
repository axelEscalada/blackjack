import { Card } from './Card'
import { Stack } from './Stack';

export class Deck {
    
    constructor(){
        this.deckPoker = this.createCards()    
    }

    createCards(){
        let suits = ['heart', 'spade', 'diamond', 'club']
        
        let cards = new Stack()
        
        for(var i = 1; i < 14; i++){
            let value = i

            if(i < 10){
                value = 10
            }

            cards.push(new Card(suits[0], i, value))
            cards.push(new Card(suits[1], i, value))
            cards.push(new Card(suits[2], i, value))
            cards.push(new Card(suits[3], i, value))
        }
        
        this.shuffle(cards)

        return cards
    }

    shuffle (arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
        return arr
    }
}