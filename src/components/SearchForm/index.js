import React from "react";
import PropTypes from "prop-types";

export class SearchForm extends React.Component {
  static propTypes = {
    onSearch: PropTypes.func
  };

  render() {
    return (
      <form className="Form">
        <input name="query" />
        <button>Search</button>
      </form>
    );
  }
}
