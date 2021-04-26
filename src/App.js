/** @format */

import React, {useState} from "react";
// import Accordion from "./Components/Accordian/Accordion";
// import Search from './Components/Search/Search'
import Dropdown from './Components/Dropdown/Dropdown';
import Translate from './Components/Translate/Translate'
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

    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);
    return (
        <div className='ui container'>
            {/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button> */}
            {/* {showDropdown ? <Dropdown options={options} selected={selected} onSelectedChange={setSelected} /> : null} */}
            <Translate / >
            {/* <h1 style={{color:selected.value}}>This is text</h1> */}
        </div>
    );
};
export default App;
