import * as React from 'react'

export default function EventForm(props) {
    const { values, onSubmit, onChange } = props
    return (
        <div className="createEventForm">
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name='name' value={values.name} onChange={onChange}></input>
                <label htmlFor="date">Date:</label>
                <input type="text" name='date' value={values.date} onChange={onChange}></input>
                <label htmlFor="description">Description:</label>
                <input type="text" name='description' value={values.description} onChange={onChange}></input>
                <button onClick={() => onSubmit}>Submit</button>
            </form>
        </div>
    )
}