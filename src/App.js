import React, { Component } from "react"
import Header from "./components/Header"
import axios from "axios"
import "./App.css"
import NewsList from "./components/NewsList"
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newslist: [],
      searchText: "",
    }
  }

  changeHandler = (e) => {
    this.setState({
      searchText: e.target.value,
    })
  }

  handleSubmit = (event) => {
    console.log("called")
    axios
      .get(
        `https://content.guardianapis.com/search?q=${this.state.searchText}&api-key=test&show-fields=thumbnail`
      )
      .then((response) => {
        this.setState({ newslist: response.data.response.results })
      })
      .catch((error) => {
        console.log(error)
      })
    console.log("repos", this.state.newslist)
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <Header
          getRepos={this.getRepos}
          searchText={this.state.searchText}
          changeHandler={this.changeHandler}
          handleSubmit={this.handleSubmit}
        />
        {this.state.newslist.length ? (
          <NewsList newslist={this.state.newslist} />
        ) : null}
      </div>
    )
  }
}

export default App
