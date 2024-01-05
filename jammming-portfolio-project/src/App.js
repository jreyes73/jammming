import './App.css';
import Playlist from './Playlist';
import SearchBar from "./SearchBar";
import SearchResults from './SearchResults';
import Tracklist from './Tracklist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming Portfolio Project</h1>
        <p>Scroll down for Project</p>
      </header>
      <div>
      <h1>Jammming Portfolio Project</h1>
      </div>
    <SearchBar />
    <SearchResults></SearchResults>
    <Playlist></Playlist>
    <Tracklist/>
    </div>
  );
}

export default App;
