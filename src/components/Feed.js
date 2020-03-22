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
      ]
    }
  }

  render() {

    return (
      <div>
        <div className="container">
          <ShowAddButton />
        </div>
        <br />
        <FeedForm />
        <br />
        <FeedList items={this.state.FEED_ITEMS} />
      </div>
    )
  }
}
