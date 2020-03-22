import React, { Component } from 'react'

export default class FeedForm extends Component {
  render() {
    return (
        <form className="container">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Title" />
            <br />
            <input type="text" className="form-control" placeholder="Desciption" />
            <br />
            <button type="submit" className="btn btn-primary btn-block" >Add</button>
          </div>
        </form>
    )
  }
}
