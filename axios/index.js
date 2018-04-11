import axios from 'axios'

const request = axios.create({
  baseURL: 'http://192.168.1.63:3000'
})

export default request
