import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      avatar: "",
      username: "",
      link: "",
      blog: "",
      location: "",
      status: ""

    }
    console.log("in constructor")
  }
  componentDidMount(){
    axios.get('https://api.github.com/users/huyluong88').then(response => this.setState({
      avatar: response.data.avatar_url,
      username: response.data.login,
      link: response.data.html_url,
      blog: response.data.blog,
      location: response.data.location,
      status: response.data.hireable
    }))


  }
  otherUser(){
    let username = this.searchUser.value
    axios.get(`https://api.github.com/users/${username}`).then(response => this.setState({
      avatar: response.data.avatar_url,
      username: response.data.login,
      link: response.data.html_url,
      blog: response.data.blog,
      location: response.data.location,
      status: response.data.hireable
    }))


  }
  render() {
    return (
      <div className="App">
          <div className ="main">
          <img src={this.state.avatar} width="200" height="200"/><br/>
          {this.state.username}<br/>
          <a href={this.state.link}>Github</a><br/>
          <a href={this.state.blog}>Blog</a><br/>
          {this.state.location}<br/>
          {this.state.status ? "Available for hire" : "" }


          <input
          placeholder="username"
          ref={(input) => { this.searchUser = input }}
          />
          <button onClick={this.otherUser.bind(this)}>Git it!!</button>
          </div>
      </div>
    );
  }
}

export default App;
