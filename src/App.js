/** @format */

import React from "react";
// import Accordion from "./Components/Accordian/Accordion";
// import Search from './Components/Search/Search'
import Dropdown from './Components/Dropdown/Dropdown';

const options = [
    {
        label: "The colour Red",
        value: "red",
    },
    {
        label: "The colour Green",
        value: "green",
    },
    {
        label: "The colour Blue",
        value: "blue",
    },
];

// const items = [
//     {
//         title: "What is React?",
//         content: "React is a front end javascript framework",
//     },
//     {
//         title: "Why use React?",
//         content: "React is a favorite Js Library",
//     },
//     {
//         title: "How do you user React?",
//         content: "You use React by creating components",
//     },
// ];

const App = () => {
    return (
        <div className='ui container'>
            {/* <Search /> */}
            <Dropdown options={options}/>
        </div>
    );
};
export default App;
