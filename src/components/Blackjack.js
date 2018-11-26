import React, { Component } from 'react';
import '../styles/Blackjack.css';
import { Game } from './Game'

const STATUS_BLACKJACK = {msg: 'Blackjack', code: 1}
const WIN = {msg: 'WIN', code: 2}
const TIE = {msg: 'TIE', code:3}
const LOSE = {msg:'LOSE', code: 4}

const BLACKJACK = 21

class Blackjack extends Component {

    constructor(props) {
        super(props);
        
        this.game = new Game(this.props.name)
        this.arrCardCroupier = []
        this.arrPlayerCard = []
        this.initGame = this.initGame.bind(this)
        this.getCard = this.getCard.bind(this)
        this.bet = 100
        this.state = { cardsCroupier: '', cardsPlayer: '', sumPlayer:'', sumCroup:'',gameStatus: '',playerPoints: this.game.currentPlayer().points};
    }

    getCard = () =>{
        let card = this.game.getCard()
        this.arrPlayerCard.push(card)
        let cardsPlayer = this.getValueCards(this.arrPlayerCard)

        this.setState({
            cardsPlayer : cardsPlayer,
            sumPlayer : this.game.currentPlayer().handSum
        })

        this.checkStatusGame()

    }

    getCardCroupier () {
        let card = this.game.getCard()
        this.arrCardCroupier.push(card)
        let cardsCroupier = this.getValueCards(this.arrCardCroupier)

        this.setState({
            cardsCroupier : cardsCroupier,
            sumCroup : this.game.currentPlayer().handSum
        })
    }

    checkStatusGame(){
        let player = this.game.currentPlayer()
        if(player.handSum > BLACKJACK){
            this.setGame(LOSE)
        }else if(player.hand.length == 2 && player.handSum == BLACKJACK){
            this.setGame(STATUS_BLACKJACK)
        }else if(player.handSum == BLACKJACK){
            this.setState({
                gameStatus: STATUS_BLACKJACK
            });
            this.setGame(WIN)
        }

    }

    setGame(status){
        let points = this.game.setPoints(status.code, this.bet)
        this.setState({
            gameStatus: status.msg + '$' + points,
            playerPoints: this.game.currentPlayer().points
        });
        
        setTimeout(() => {
           this.finishHand() 
        }, 1000);
        this.bet = 100
    }

    

    finishHand(){
        this.game.resetDeck()
        this.arrPlayerCard = []
        this.arrCardCroupier = []
        this.setState({ cardsCroupier: '', cardsPlayer: '', sumPlayer:'', sumCroup:'',gameStatus: '' })
    }

    initGame = () => {
        //this.finishHand()
        this.arrPlayerCard.push(this.game.getCard())
        this.arrPlayerCard.push(this.game.getCard())
        debugger;
        this.game.currentPlayer().substractPoints(this.bet)
        this.setState({
            sumPlayer : this.game.currentPlayer().handSum,
            playerPoints: this.game.currentPlayer().points
        })
        this.game.nextPlayer()

        this.arrCardCroupier.push(this.game.getCard())
        this.arrCardCroupier.push(this.game.getCard())
        this.setState({
            sumCroup : this.game.currentPlayer().handSum
        })
        this.game.nextPlayer()

        let cardsPlayer = this.getValueCards(this.arrPlayerCard)
        let cardsCroupier = this.getValueCards(this.arrCardCroupier)
        
        this.setState({
            cardsPlayer : cardsPlayer,
            cardsCroupier: cardsCroupier
        });
    }

    getValueCards(arr){
        let cards = ''

        arr.forEach(function(element){
            cards += ' | ' + element.rank + ' ' +  element.suit + ' | '
        })

        return cards
    }

    stand = () =>{
        let player = this.game.currentPlayer()
        this.game.nextPlayer()
        
        this.croupierLogic(player)
    }

    croupierLogic(player){
        let croupier = this.game.currentPlayer()
        let croupHandSum = croupier.handSum
        let playerHandSum = player.handSum
        if(croupHandSum > BLACKJACK && playerHandSum <= BLACKJACK){
            this.game.nextPlayer()
            this.setGame(WIN)
            
        }else if(playerHandSum > BLACKJACK && playerHandSum.hand.length > 2 || (croupHandSum <= BLACKJACK && playerHandSum < croupHandSum)){
            this.game.nextPlayer()
            this.setGame(LOSE)
            
        }else if(croupHandSum > 13 && playerHandSum == croupHandSum){
            this.game.nextPlayer()
            this.setGame(TIE)
            
        }else if(playerHandSum > croupHandSum){
            this.getCardCroupier()
            setTimeout(() => {
                this.croupierLogic(player)
            }, 1000);
        }
    }

    render() {
        return (
          <div className="blackjack">
            <div class="table-game">
                <div class="header-player-croupier">
                    <p>CROUPIER</p>
                </div>

                <div class="cards-croupier">
                    <p> {this.state.cardsCroupier}</p>    
                    <p> {this.state.sumCroup}</p>
                </div>

                <div class="cards-player">
                    <p> {this.state.cardsPlayer}</p>
                    <p> {this.state.sumPlayer}</p>
                    <p>bet: $ {this.bet}</p>
                    <p> {this.state.gameStatus}</p>
                </div>

                <div class="init-div">
                    <button onClick={this.initGame}>Deal</button>
                </div>
                <div class="buttons">
                    <button onClick={this.getCard}>Hit</button>
                    <button onClick={this.stand}>Stand</button>
                </div>
                <div class="header-player">
                    <p>player</p>
                </div>
                <div class="player-points">
                    <p>Points: {this.state.playerPoints}</p>
                </div>
            </div>
          </div>
        );
      }
}

export default Blackjack