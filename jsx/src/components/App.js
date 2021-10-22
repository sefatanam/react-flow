import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class App extends React.Component {
    state = {language: 'english'}

    onlanguagechange = language => {
        this.setState({language})
    }


    render() {
        return (
            <div className="ui container">
                <div>Select a language:
                    <i className="flag us" onClick={() => this.onlanguagechange('english')}/>
                    <i className="flag nl" onClick={() => this.onlanguagechange('dutch')}/>
                </div>

                <ColorContext.Provider value="green">
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate/>
                    </LanguageContext.Provider>
                </ColorContext.Provider>

            </div>
        );
    }
}

export default App;
