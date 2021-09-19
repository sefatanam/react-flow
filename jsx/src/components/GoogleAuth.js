import React from "react";
import {connect} from "react-redux";
import {signIn, signOut} from "../actions";

class GoogleAuth extends React.Component {

    state = {isSignedIn: null};

    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: '400959379170-q6rk0300uusj73fl15hbttj49s5dolpd.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }

    onAuthChange = isSignIn => {
        if (isSignIn) {
            this.props.signIn();
        } else {
            this.props.signOut();
        }
        // this.setState({isSignedIn: this.auth.isSignedIn.get()})
    }


    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn) {
            return (

                <button className="ui red google button" onClick={() => this.auth.signOut()}>
                    <i className="google icon"/>Sign Out
                </button>
            );
        } else {
            return (
                <button className="ui red google button" onClick={() => this.auth.signIn()}>
                    <i className="google icon"/>Sign In
                </button>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn};
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);
