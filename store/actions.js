import {
  GET_VIDEOS,
  GET_VIDEO
} from './actionTypes'
import axios from '../axios'

export const getVideos = () => {
  return dispatch => {
    axios.get('/youtube')
      .then(resp => {
        console.log(resp.data)
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

