import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';

class App extends React.Component {
	onQuerySubmit = (query) => {
		console.log(query)
		console.log(process.env.REACT_APP_YOUTUBE_API)
		youtube.get('/search', {
			params: {
				q: query
			}
		});
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onQuerySubmit} />
			</div>
		)
	}
}

export default App;