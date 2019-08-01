import React from 'react'
import {loadEvents} from '../actions/events'
import {connect} from 'react-redux'
import EventsList from './EventsList'

class EventsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents()
  }

  render() {
    console.log('this.props', this.props)
    return <EventsList events={this.props.events} />
  }
}

// events passed to the redux store
// you can apply it on render() {<EventsList...
// this.state is for local store...
// this.props is for redux store!!!
const mapStateToProps = state => ({
  events: state.events
})

export default connect(mapStateToProps, {loadEvents})(EventsListContainer)