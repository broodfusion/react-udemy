import React from 'react';

class SearchBar extends React.Component {
    render() {
        return <input onChange={this.onInputChange}/>;
    }
    onInputChange(event) {
        console.log(event.target.value);
    }

};

module.exports = SearchBar;