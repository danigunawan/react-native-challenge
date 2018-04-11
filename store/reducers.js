import {
  GET_VIDEOS,
  GET_VIDEO
} from './actionTypes'

const initialState = {
  videos: [],
  video: {},
  loading: false,
  error: false
}

const youtubeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOS:
      return {...state, videos: action.payload} 
      break;
    case GET_VIDEO:
      return {...state, video: action.payload} 
      break;
    default:
      return state
      
  }
  return state
}

export default youtubeReducer
