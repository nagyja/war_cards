//this container lists all the cards the user has created, user may click to select and view card, 
//while viewing the user can click "edit" to open a pre populated form, where "save" overrides the data for that card
import React, { Component } from 'react';
import Card from './card';


class CardList extends Component {
    render(){
        return(
             <div>
               Card List
               <Card/>
            </div>
        );
    }
}

export default CardList;