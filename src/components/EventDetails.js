import * as React from 'react'

export default function EventDetails(props) {
    const { event } = props
    console.log(props)
    return (
        <div className="eventDetails">
            {!event && 'Loading...'}
            {event &&
            <div>
              <h1>{event.name}</h1>
              <i>{event.date}</i>
              <p>{event.description}</p>
            </div>}
        </div>
    )
}