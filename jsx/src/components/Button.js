import React from 'react';
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class Button extends React.Component {

    renderSubmit = (value) => value === 'english' ? 'Submit' : 'Voorleggen';

    renderButton(value) {
        return (
            <button className={`ui button ${value}`}>
                <LanguageContext.Consumer>
                    {(text) => this.renderSubmit(text)}
                </LanguageContext.Consumer>
            </button>
        );
    }

    render() {
        return (
            <ColorContext.Consumer>
                {(color) => this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }
}


export default Button;
