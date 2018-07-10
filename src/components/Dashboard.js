import React, {Component} from 'react'
import {connect} from 'react-redux'
import Tweet from './Tweet'

class Dashboard extends Component {
  render(){
    return(
      <div>
        <h3 className='center'>Your Timeline</h3>
        <ul className='dashboard-list'>
          {this.props.tweetIds.map((id) => (
            <li key={id}>
              <Tweet id={id}/>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

// mapStateToProps dostaje kawałek głownego store'a - tym kawałkiem są tweety
// wrzuca je do komponentu Dashboard jako props o nazwie tweetIds
// przy okazji sortuje je od najmłodszego do najstarszego

function mapStateToProps({tweets}){
  return{
    tweetIds: Object.keys(tweets)
      .sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)