import React from "react";

function Search(props) {
  return (
    <div>
      <h1>Search for a doge!</h1>
      <form className="input-group mb-3 col-sm-12 p-3">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="search"
          id="search"
        ></input>

        <button
          onClick={props.handleFormSubmit}
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Search now!
        </button>
      </form>
    </div>
  );
}

export default Search;