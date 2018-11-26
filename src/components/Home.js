import React, { Component } from 'react'
import '../styles/Home.css'
import PropTypes from 'prop-types' 

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          inputValue: ''
        };
      }
    static contextTypes = {
        router: PropTypes.object
    }

    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        });
    }

    playGame = () => {
        this.context.router.history.push(`/game`)
    }

    checkName(name){
    
    }

    render() {
        return (
            <div className="home-container">
                <p>Blackjack</p>
                <input class="input-username" type="text" placeholder="username" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
                <br></br>
                <button onClick={this.playGame}>Play</button>
            </div>
        );
      }
}

export default Home