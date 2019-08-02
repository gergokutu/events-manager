import request from 'superagent'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'

const baseUrl = 'http://localhost:4000'

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
})

export const loadEvents = () => (dispatch, getState) => {
  // when the state already contains events, we don't fetch them again
  if (getState().events) return

  // a GET /events request
  request(`${baseUrl}/events`)
    .then(response => {
      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(eventsFetched(response.body))
    })
    .catch(console.error)
}

// create event
export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS'

const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  event
})

export const createEvent = (data) => dispatch => {
  request
    .post(`${baseUrl}/events`)
    // data has the form values like name, description, date...
    .send(data)
    .then(response => {
      dispatch(eventCreateSuccess(response.body))
    })
    .catch(console.error)
}

// fetch event
export const EVENT_FETCHED = 'EVENT_FETCHED'

const eventFetched = event => ({
  type: EVENT_FETCHED,
  event
})

export const loadEvent = (id) => (dispatch) => {

  request(`${baseUrl}/events/${id}`)
    .then(response => {
      dispatch(eventFetched(response.body))
    })
    .catch(console.error)
}

// delete an event
export const EVENT_DELETE_SUCCESS = 'EVENT_DELETE_SUCCESS'

const eventDeleteSuccess = eventId => ({
  type: EVENT_DELETE_SUCCESS,
  eventId
})

export const deleteEvent = (id) => dispatch => {
  request
    .delete(`${baseUrl}/events/${id}`)
    // do not do the following!!!...
    // it runs the function immediately...
    // not waiting for the response
    // .then(dispatch(eventDeleteSuccess(id)))
    .then(() => {
      console.log("then test")
      const action = eventDeleteSuccess(id)
      console.log("action test:", action)
      dispatch(action)
    })
    .catch(console.error)
}

// updateEvent
export const EVENT_UPDATE_SUCCESS = 'EVENT_UPDATE_SUCCESS'

const eventUpdateSuccess = event => ({
  type: EVENT_UPDATE_SUCCESS,
  event
})

// if it breaks change patch to put »
// because we use that on the server side
// .put instead of .patch because it breaks...
export const updateEvent = (id, data) => dispatch => {
  request
    .put(`${baseUrl}/events/${id}`)
    .send(data)
    .then(response => {
      dispatch(eventUpdateSuccess(response.body))
    })
    .catch(console.error)
}