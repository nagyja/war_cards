//select card type, fill fields, submit to save to db
import React, { Component } from 'react';
import ObjForm from '../../components/home/objForm';
import RuseForm from '../../components/home/ruseForm';
import TwistForm from '../../components/home/twistForm';

class CardMaker extends Component {
    constructor() {
        super();
        this.showHidden = this.showHidden.bind(this);
        this.state = {
          objective: true,
          ruse: true,
          twist: true,
        }
    }
    
    showHidden(e) {
        const toBeVisible = e.target.id;
        const States = ["objective", "ruse", "twist"];
        States.forEach(x => ((x===toBeVisible)? this.setState({ [x]: false }) : this.setState({ [x]: true })));
    }

    render(){
        return(
            <div>
                Select card type:
                <div>
                    <div className="row btn-group d-flex">
                        <button
                                id="objective"
                                className="btn btn-primary col-md-4"
                                onClick={this.showHidden}
                        >
                                Objective Card
                        </button>
                        <button
                                id="ruse"
                                className="btn btn-primary col-md-4"
                                onClick={this.showHidden}
                        >
                               Ruse Card
                        </button>
                        <button
                                id="twist"
                                className="btn btn-primary col-md-4"
                                onClick={this.showHidden}
                        >
                                Twist Card
                        </button>
                    {!this.state.objective && <ObjForm />}
                    {!this.state.ruse && <RuseForm />}
                    {!this.state.twist && <TwistForm />}
                    </div>
                </div>    
            </div>
        );
    }
}

export default CardMaker;