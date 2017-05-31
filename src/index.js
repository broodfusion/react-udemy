// create a new component, should produce some HTML
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyAipmDIhUPCMkxg0bWpQcyod85IZL0pmuA";

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take generated HTML and put it on the page (DOM)

ReactDOM.render(<App />, document.querySelector(".container"));