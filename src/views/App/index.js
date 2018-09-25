import React from "react";
import { connect } from "react-redux";

import "./styles.css";

@connect(state => ({
  // results: state.search.results,
  // isSearchInProgress: state.search.inProgress,
}))
class App extends React.Component {
  render() {
    const { isSearchInProgress, results } = this.props;
    const showNoResults = !isSearchInProgress && (!results || !results.length);
    const showResults = !isSearchInProgress && results && results.length;
    return (
      <div className="App">
        <h1>Search a tv show</h1>
        <form className="Form">
          <input name="query" />
          <button>Search</button>
        </form>
        <h2>results:</h2>
        {isSearchInProgress && "Loading"}
        {showNoResults && <h3>No results :(</h3>}
        {showResults &&
          results.length > 0 && (
            <ul className="Results">
              {results.map(result => <li>{result.show.name}</li>)}
            </ul>
          )}
      </div>
    );
  }
}

export default App;
