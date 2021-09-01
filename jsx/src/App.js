import React, {useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";


const items = [
    {
        title: 'What is React ?',
        content: ' React is a frontend javascript framework'
    },
    {
        title: 'Why use React ?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React ?',
        content: ' You use React by creating components '
    },
];

const options = [
    {
        label: "The Color Red",
        value: "red",
    },
    {
        label: "The Color Blue",
        value: "blue",
    },
    {
        label: "The Color Green",
        value: "green",
    },
];


const showAccordion = () => {
    if (window.location.pathname === '/') {
        return <Accordion items={items}/>;
    }
}

const showList = () => {
    if (window.location.pathname === '/list') {
        return <Search/>;
    }
}


const showDropdown = () => {
    if (window.location.pathname === '/dropdown') {
        return <Dropdown options="Select a Color"/>
    }
}

const showTranslate = () => {
    if (window.location.pathname === '/translate') {
        return <Translate/>;
    }
}


const App = () => {
    const [selected, setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdown] = useState(true);
    return (
        <div>
            <Header/>
            <Route path="/">
                <Accordion items={items}/>
            </Route>

            <Route path="/list">
                <Search/>
            </Route>

            <Route path="/translate">
                <Translate/>
            </Route>

            <Route path="/dropdown">
                <Dropdown options={options} onSelectedChange={setSelected} selected={selected} label="Select a Color"/>
            </Route>
        </div>

    );
};

export default App;
