//Buttons for Profile, Card Maker, Card List, Deck Builder, Quickdraw, Custom Draw
import React, { Component } from 'react';
import CardList from '../container/home/cardList';
import DeckMaker from '../container/home/deck_maker';
import CardMaker from '../container/home/card_maker';
import GameMaker from '../container/home/game_maker';
import Profile from '../container/profile';

class Home extends Component {
    constructor() {
        super();
        this.showHidden = this.showHidden.bind(this);
        this.state = {
          cardList: true,
          cardMaker: true,
          deckMaker: true,
          gameMaker: true,          
          profile: true,
        };
    }

    showHidden(e) {
          const toBeVisible = e.target.id;
          const States = ["cardList", "cardMaker", "deckMaker", "gameMaker", "profile"];
          States.forEach(x => ((x===toBeVisible)? this.setState({ [x]: false }) : this.setState({ [x]: true })));
      }
//     <DropDown >
//     {dataFeed.map((data, i) => {
//         return (<DropDownRow key={response.symbol} data={data}/>);
//     })}
// </DropDown>

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1 className="col-md-12 text-center">War Deck</h1>
                </div>
                <div className="row btn-group d-flex">
                    <button
                        id="cardList"
                        className="btn btn-primary col-md-4"
                        onClick={this.showHidden}
                    >
                    Your Cards
                    </button>
                    <button
                        id="cardMaker"
                        className="btn btn-primary col-md-4"
                        onClick={this.showHidden}
                    >
                    New Card
                    </button>
                    <button
                        id="deckMaker"
                        className="btn btn-primary col-md-4"
                        onClick={this.showHidden}
                    >
                    New Deck
                    </button>
                    <button
                        id="gameMaker"
                        className="btn btn-primary col-md-4"
                        onClick={this.showHidden}
                    >
                    PLAY
                    </button>
                    <button
                        id="profile"
                        className="btn btn-primary col-md-4"
                        onClick={this.showHidden}
                    >
                    Profile
                    </button>
                    <div>
                        {!this.state.cardList && <CardList />}
                        {!this.state.cardMaker && <CardMaker />}
                        {!this.state.deckMaker && <DeckMaker />}
                        {!this.state.gameMaker && <GameMaker />}
                        {!this.state.profile && <Profile />}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
