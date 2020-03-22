import React, { Component } from 'react'

const buttonStyle = {
  backgroundColor: 'lightgreen',
}

export default class FeedItem extends Component {
  render() {
    return (
      <li className="list-group-item">
        <span className="badge badge-success" style={buttonStyle}>{this.props.voteCount}</span>
        <h4>{this.props.title}</h4>
        <span>{this.props.desc}</span>
        <span className="pull-right">
          <button id="up" className="btn btn-sm btn-primary">&uarr;</button>
          <button id="down" className="btn btn-sm btn-primary">&darr;</button>
        </span>
      </li> 
    );
  }
}
