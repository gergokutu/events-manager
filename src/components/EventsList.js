import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class EventsList extends Component {

  render() {
    // events coming from the action » actons/events.js
    // because passed by the parent » EventsListContainer...
    // this.props...
    // destructuring to use just events later
    // '/event/:id' » :id is gonna be the event.id...
    const { events } = this.props
    return (
    <ul>
      {events && events.map(event => 
        <li key={event.id}>
          <Link to={`/events/${event.id}`}>{event.name} ({event.id})</Link>
        </li>)}
      {!events && 'Loading...'}
    </ul>
    )
  }
}        

export default EventsList