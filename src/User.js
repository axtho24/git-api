import React, { Component } from 'react';


class User extends Component{
  render(){
    return(
      <article>
      <a href={this.props.avatar_url}>{this.props.name}</a>
      {this.props.html_url}
      {this.props.blog}
      {this.props.location}
      {this.props.hireable}
      </article>
    )
  }


}

// export default User
