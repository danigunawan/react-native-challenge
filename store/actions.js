import {
  GET_VIDEOS,
  GET_VIDEO,
  SEARCH_VIDEO,
  CLEAR_SEARCH
} from './actionTypes'
import axios from '../axios'

export const getVideos = () => {
  return dispatch => {
    axios.get('/youtube')
      .then(resp => {
        dispatch({ type: GET_VIDEOS, payload: resp.data })
      })
      .catch( err => console.log(err) )
  }
}

export const getVideo = (id) => {
  return dispatch => {
    axios.get(`/youtube/${id}`)
      .then(resp => {
        dispatch({ type: GET_VIDEO, payload: resp.data })
      })
      .catch( err => console.log(err) )
  }
}

export const searchVideos = (query) => {
  return dispatch => {
    axios.get('/youtube/search/'+query)
      .then(resp => {
        dispatch({ type: SEARCH_VIDEO, payload: resp.data })
      })
      .catch( err => console.log(err) )
  }
}

export const clearSearch = () => {
  return dispatch => {
    dispatch({ type: CLEAR_SEARCH })
    getVideos()
  } 
}

