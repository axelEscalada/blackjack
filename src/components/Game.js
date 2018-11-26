import { Queue } from './Queue'
import { Player } from './Player';
import { Deck } from './Deck';

export class Game{
    
    constructor(name){
        this.queuePlayers = new Queue()
        this.players = [] 
        this.deck = new Deck()
        //número de jugadores mas el croupier
        this.numberPlayers = 2
        this.initGame(name)
        this.resetDeck = this.resetDeck.bind(this)
    }

    initGame(name){
        this.createPlayer(name)
        this.createPlayer("CROUPIER")
    }

    createPlayer(name){
        let player = new Player(name)
        this.queuePlayers.enqueue(new Player(name))
        this.players.push(player)
    }

    currentPlayer(){
        return this.queuePlayers.peek()
    }

    nextPlayer(){
        let currentPlayer = this.queuePlayers.dequeue()
        this.queuePlayers.enqueue(currentPlayer)
    }

    resetDeck(){
        this.deck = new Deck()

        let players = []
        while(this.queuePlayers.peek() != undefined){
            let player = this.queuePlayers.dequeue()
            player.resetHand()
            players.push(player)            
        }

        players.forEach( (element, index) =>  {
            this.queuePlayers.enqueue(element)
        })
    }

    getCard(){
        let currentPlayer = this.queuePlayers.peek()
        let card = this.deck.deckPoker.pop()
        currentPlayer.addHand(card)
        return card
    }

    setPoints(state, bet){
        let points = 0
        if(state == 1){
            points = bet * 3
        }else if(state == 2){
            points = bet * 2
        }else if (state == 3){
            points = bet
        }

        this.currentPlayer().addPoints(points)
        return points
    }

}