import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../api/youtube';

class App extends React.Component {

	state = { 
		videos: [],
		selectedVideo: null 
	};

	onQuerySubmit = async (query) => {


		const response = await youtube.get('/search', {
			params: {
				q: query
			}
		});

		this.setState({ videos: response.data.items });
	};

	onVideoSelect = (video) => {
		console.log(video);
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onQuerySubmit} />
				<VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
			</div>
		)
	}
}

export default App;