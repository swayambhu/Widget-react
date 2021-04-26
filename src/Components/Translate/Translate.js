// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown.js';
import Convert from '../Convert/Convert';


const options = [
    {
        label: 'Africans',
        value : 'af'
    },
    {
        label: 'Arabic',
        value : 'ar'
    },
    {
        label: 'Hindi',
        value : 'hi'
    },
    {
        label: 'Marathi',
        value : 'mr'
    }
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('');
    
    return (
        <div>
            <div className="ui divider"></div>
            <div className="ui two column stackable ui grid">
                <div className="column">
                    <div className="ui segment">
                        <h1>
                            This Translation will only Work on Localhost:3000
                        </h1>
                        <p>
                            Please Download the repo then install node modules
                            using{" "}
                            <strong>
                                <em>"yarn install"</em>
                            </strong>{" "}
                            command in the respective Directory. Then start the
                            project using{" "}
                            <strong>
                                <em>"yarn start"</em>
                            </strong>
                        </p>
                        <h4>
                            Steps to Download and start the project{" "}
                            <i>Note:- Make sure you have npm(node) installed</i>
                        </h4>
                        <ul>
                            <li>Download Zip file from the github</li>
                            <li>Go in the widgets directory</li>
                            <li>open cmd/terminal</li>
                            <li>Use "yarn install" commant</li>
                            <li>Use "yarn start" command</li>
                        </ul>
                    </div>
                </div>

                <div className="column">
                    <div className="ui segment">
                        <div className="ui form">
                            <div className="field">
                                <label>Enter Text</label>
                                <input
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                />
                            </div>
                        </div>

                        <Dropdown
                            label="Select a Language"
                            selected={language}
                            onSelectedChange={setLanguage}
                            options={options}
                        />

                        <h3 className="ui header">OUTPUT</h3>
                        <Convert language={language} text={text} />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Translate;