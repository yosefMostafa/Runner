// action types
export const START_LOCATION = 'START_LOCATION'
export const CURRENT_LOCATION = 'CURRENT_LOCATION'
export const Delete_LOCATION = 'Delete_LOCATION'
export const END_LOCATION = 'END_LOCATION'
export const FINAL_TIME = 'FINAL_TIME'
export const DISTANCE = 'Distance'
export const DELETED_DISTANCE = 'DELET_Distance'
export const STYLES = 'STYLES'

// action creators
export const addstart = update => ({
  type: START_LOCATION,
  payload: update,
})
export const updateCurrent = newlocation => ({
  type: CURRENT_LOCATION,
  payload: newlocation,
})
export const deleteCurrent = newlocation => ({
  type: Delete_LOCATION,
  payload: newlocation,
})


export const addend = endlocation => ({
  type: END_LOCATION,
  payload: endlocation,
})

export const addfinatime = time => ({
  type: FINAL_TIME,
  payload: time,
})
export const adddist = dist => ({
  type: DISTANCE,
  payload: dist,
})
export const deldist = dist => ({
  type: DELETED_DISTANCE,
  payload: dist,
})
export const addStyle = style => ({
  type: STYLES,
  payload: style,
})