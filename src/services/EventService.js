import axios from 'axios'

const apiUrl = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
})

export default {
  getEvents(perPage, page) {
    return apiUrl.get('/events?_limit=' + perPage + '&_page=' + page)
  },
  getEvent(id) {
    return apiUrl.get('/events/' + id)
  },
  postEvent(event) {
    return apiUrl.post('/events', event)
  }
}
