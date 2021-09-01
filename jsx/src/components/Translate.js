import React, {useState} from 'react';
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
    {
        label: 'Afrikans',
        value: 'af'
    }, {
        label: "Arabic",
        value: 'ar'
    }, {
        label: 'Bangla',
        value: 'bn'
    }
];
const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    return (
        <div>
            <div className="ui form container">
                <div className="field">
                    <label>Enter Text</label>
                    <input type="text" onChange={e => setText(e.target.value)}/>

                </div>
            </div>
            <Dropdown label="Select a Language" options={options} selected={language} onSelectedChange={setLanguage}/>

            <h3 className="ui header container">Output</h3>
            <div className="container">
                <Convert text={text} language={language}/>
            </div>

        </div>
    );
};

export default Translate;
