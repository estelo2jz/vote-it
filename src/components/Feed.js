import React, { Component } from 'react';
import ShowAddButton from './ShowAddButton';
import FeedForm from './FeedForm';
import FeedList from './FeedList';

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FEED_ITEMS: [
        { key: '1', title: 'Realtime data!', description: 'Firebase is cool', voteCount: 49 },
        { key: '2', title: 'JavaScript is fun', description: 'Lexical scoping FTW', voteCount: 34 },
        { key: '3', title: 'Coffee makes you awake', description: 'Firebase is cool', voteCount: 15 },
      ],
      formDisplayed: false
    }

    this.onToggleForm = this.onToggleForm.bind(this);
    this.onNewItem = this.onNewItem.bind(this);
  }

  onToggleForm() {
    this.setState({
      formDisplayed: !this.state.formDisplayed
    });
  }

  onNewItem(newItem) {
    var newItems = this.state.items.concat([newItem]);
    this.setState({
      items: newItems,
      formDisplayed: false
    });
  }

  render() {

    return (
      <div>
        <div className="container">
          <ShowAddButton displayed={this.state.formDisplayed} onToggleForm={this.onToggleForm} />
        </div>
        <br />
        <FeedForm displayed={this.state.formDisplayed} onNewItem={this.onNewItem} />
        <br />
        <FeedList items={this.state.FEED_ITEMS} />
      </div>
    )
  }
}
