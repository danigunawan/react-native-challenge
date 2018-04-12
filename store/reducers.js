import {

  GET_VIDEOS,
  GET_VIDEO,
  SEARCH_VIDEO,
  CLEAR_SEARCH
} from './actionTypes'

const initialState = {
  videos: [],
  searchVideos: [],
  video: null,
  loading: false,
  error: false
}

const youtubeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOS:
      return {...state, videos: action.payload} 
      break;
    case SEARCH_VIDEO:
      return {...state, searchVideos: action.payload} 
      break;
    case CLEAR_SEARCH:
      return {...state, searchVideos: []} 
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
