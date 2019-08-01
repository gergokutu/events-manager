import * as React from 'react'
import EventForm from './EventForm'

export default function EventDetails(props) {
    const { event } = props
    if (!event) return 'Loading event data...'

    return (
        <div className="eventDetails">
            {props.editMode && <EventForm onSubmit={props.onSubmit} onChange={props.onChange} values={props.formValues} />}
            {!props.editMode &&
            <div>
              <h1>{event.name}</h1>
              <i>{event.date}</i>
              <p>{event.description}</p>
              <button onClick={props.onDelete}>Delete Event</button>
              <button onClick={props.onEdit}>Edit Event</button>
            </div>}
        </div>
    )
}