/** @format */

import React from "react";
import Accordion from "./Components/Accordian/Accordion";
import Search from './Components/Search/Search'

const items = [
    {
        title: "What is React?",
        content: "React is a front end javascript framework",
    },
    {
        title: "Why use React?",
        content: "React is a favorite Js Library",
    },
    {
        title: "How do you user React?",
        content: "You use React by creating components",
    },
];

const App = () => {
    return (
        <div>
            <Search />
        </div>
    );
};
export default App;
