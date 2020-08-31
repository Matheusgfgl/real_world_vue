import axios from 'axios'
import NProgress from 'nprogress'

const apiUrl = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  },
  timeout: 10000
})

apiUrl.interceptors.request.use(config => {
  NProgress.start()
  return config
})
apiUrl.interceptors.response.use(response => {
  NProgress.done()
  return response
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
