import { EVENT_FETCHED } from '../actions/events'
import { EVENT_UPDATE_SUCCESS } from '../actions/events'

// state = [] » you can check it with state.length
// it can be state = null » you can check it without .length
// action.events because » in the action there is no payload but events
// actions/events » eventsFetched...
const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case EVENT_FETCHED:
      return action.event
    case EVENT_UPDATE_SUCCESS:
      return action.event
    default:
      return state
  }
}

export default reducer