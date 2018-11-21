import {Card} from './Card'

export class Deck {
    
    constructor(){
        this.deckPoker = this.createCards()    
    }

    createCards(){
        let suits = ['heart', 'spade', 'diamond', 'club']
        
        let cards = []
        
        for(var i = 1; i < 14; i++){
            cards.push(new Card(suits[0], i));
            cards.push(new Card(suits[1], i));
            cards.push(new Card(suits[2], i));
            cards.push(new Card(suits[3], i));
        }
        
        this.shuffle(cards)

        return cards
    }

    shuffle (arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
}