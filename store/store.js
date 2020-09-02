import { createStore} from 'redux';
import reducer from './reducers'
import {addStyle} from './actions'
import fethstyles from '../styles'

const store = createStore(reducer)

// store.dispatch(addstart({x:5,y:10}))
// store.dispatch(addend({x:5,y:10}))
// store.dispatch(updateCurrent({x:5,y:10}))
// store.dispatch(updateCurrent({x:5,y:10}))

store.dispatch(addStyle(fethstyles(true)))

export default store