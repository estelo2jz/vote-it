import React, { Component } from 'react'
import FeedItem from './FeedItem';

export default class FeedList extends Component {
  render() {

    var feedItems = this.props.items.map(function(item) {
      return <FeedItem key={item.key} title={item.title} desc={item.description} voteCount={item.voteCount} />
    });

    return (
      <ul className="container">
        {feedItems}
      </ul>
    )
  }
}
