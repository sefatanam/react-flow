import React from 'react';
import Search from "./components/Search";


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


const App = () => {
    return (
        <div>
            <Search/>
        </div>
    );
};

export default App;
