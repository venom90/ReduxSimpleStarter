import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = "AIzaSyA0TQlZTYGGpB9uaYn_9muMmo2Zy5fSFPY";

class App extends Component {
    constructor(props) {
        super(props);

        const state = {
            videos: []
        };

        YTSearch({
            key: API_KEY,
            term: 'surfboards'
        }, (videos) => {
            this.setState({
                videos
            });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector(".container"));