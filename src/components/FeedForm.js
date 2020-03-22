import React, { Component } from 'react'

export default class FeedForm extends Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    const { title, desc } = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInput.current.focus();
  }

  handleForm(e) {
    e.prevetnDefault();

    var newItem = {
      title: this.refs.title.getDOMNode().value,
      description: this.refs.desc.getDOMNode().value,
      voteCount: 0
    };
  
    this.refs.feedForm.getDOMNode().reset();

    this.props.onNewItem(newItem);
  }


  render() {
    var display = this.props.displayed ? 'block' : 'none';
    var styles = {
      display: display
    };
    return (
        <form ref={this.feedForm} style={styles} id="feedForm" className="container" onSubmit={this.handleForm}>
          <div className="form-group">
            <input ref={this.title} type="text" className="form-control" placeholder="Title" />
            <input ref={this.desc} type="text" className="form-control" placeholder="Description" />
            <button type="submit" className="btn btn-primary btn-block" >Add</button>
          </div>
        </form>
    )
  }
}
