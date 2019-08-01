import { EVENTS_FETCHED } from '../actions/events'
import { EVENT_CREATE_SUCCESS } from '../actions/events'
import { EVENT_DELETE_SUCCESS } from '../actions/events'

// state = [] » you can check it with state.length
// it can be state = null » you can check it without .length
// action.events because » in the action there is no payload but events
// actions/events » eventsFetched...
const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case EVENTS_FETCHED:
      return action.events
    case EVENT_CREATE_SUCCESS:
      return [...state, action.event]
    case EVENT_DELETE_SUCCESS:
      return state.filter(event => event.id !== action.eventId)
    default:
      return state
  }
}

export default reducer

