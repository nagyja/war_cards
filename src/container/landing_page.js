import React, { Component } from 'react';
import SignIn from '../components/landingPage/sign_in';
import SignUp from '../components/landingPage/sign_up';

class LandingPage extends Component {
    constructor () {
        super()
        this.state = {
            signInIsHidden: true,
            signUpIsHidden: true
        }
    }
   
    onSignInClick(){
        this.setState({
            signInIsHidden: !this.state.signInIsHidden,
            signUpIsHidden: true
          })
    }

    onSignUpClick(){
        this.setState({
            signUpIsHidden: !this.state.signUpIsHidden,
            signInIsHidden: true
        })
    }


    render(){
        return(
            <div className="container">
                <h1 className="col-xs-12 text-xs-center">South Austin</h1>
                <h2 className="text-xs-center">Warcards</h2>
                <button 
                    className="btn btn-primary"  
                    onClick={this.onSignInClick.bind(this)}
                    >
                    Sign In
                </button>
                             
                <button 
                    className="btn btn-primary"  
                    onClick={this.onSignUpClick.bind(this)}
                    >
                    Sign Up
                </button>

                <div className="signIn-signUp"> 
                    {!this.state.signInIsHidden && <SignIn />}
                    {!this.state.signUpIsHidden && <SignUp />}
                </div>
            </div>        
        );
    }
}

export default LandingPage;
