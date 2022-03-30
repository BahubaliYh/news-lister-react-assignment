import React, { Component } from "react"

class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="text-center">News Lister</h1>
          <div className="text-center">Search For News</div>
          <form onSubmit={this.props.handleSubmit} id="searchForm">
            <input
              type="text"
              className="form-control"
              id="searchText"
              placeholder="Search News"
              value={this.props.searchText}
              onChange={this.props.changeHandler}
              required
            />
            <button
              type="submit"
              className="btn btn-outline-primary"
              onClick={this.props.getNews}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Header
