import {combineReducers} from 'redux'

import {START_LOCATION,DISTANCE,STYLES,Delete_LOCATION,DELETED_DISTANCE,CURRENT_LOCATION,FINAL_TIME,END_LOCATION} from './actions'

const merge = (prev, next) => Object.assign({}, prev, next)

const currentreducer = (state = [], action) => {
  switch(action.type){
 case CURRENT_LOCATION:
    return [...state, action.payload]
 case Delete_LOCATION:
    return state=action.payload
default:
  return state
  }
}

const endreducer = (state = [], action) => {
  if (action.type === END_LOCATION) return state=action.payload
  return state
}
const timereducer = (state = [], action) => {
  if (action.type === FINAL_TIME) return state=action.payload
  return state
}
const stylereducer = (state = [], action) => {
  if (action.type === STYLES) return state=action.payload
  return state
}
const distreducer = (state = 0, action) => {
  if (action.type === DISTANCE) return state=action.payload+state
  if (action.type === DELETED_DISTANCE) return state=action.payload
  return state
}
const startreducer = (state = {}, action) => {
  switch (action.type) {
    case START_LOCATION:
      return merge(state, action.payload)
    // case UPDATE_CONTACT:
    //   return merge(state, {prevContact: action.payload})
    default:
      return state
  }
}

const reducer = combineReducers({
  Start: startreducer,
  Current: currentreducer,
  End:endreducer,
  Time:timereducer,
  Dist:distreducer,
  Style:stylereducer
})

export default reducer
