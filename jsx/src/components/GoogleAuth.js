import React from "react";
import {connect} from "react-redux";
import {signIn, signOut} from "../actions";
// USERID1: 400959379170-q6rk0300uusj73fl15hbttj49s5dolpd.apps.googleusercontent.com
// USERID2: 400959379170-1ucvg2lmu99emro0dn6ce5vasj1gir67.apps.googleusercontent.com
// ANY : 400959379170-2kfkqn7u3oimrs1muq7pfqug2gdrvnre.apps.googleusercontent.com
class GoogleAuth extends React.Component {

    state = {isSignedIn: null};

    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: '400959379170-q6rk0300uusj73fl15hbttj49s5dolpd.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }

    onAuthChange = isSignIn => {
        if (isSignIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
        // this.setState({isSignedIn: this.auth.isSignedIn.get()})
    }


    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
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
