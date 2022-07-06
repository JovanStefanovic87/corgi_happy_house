import axios from 'axios'

export const fetchJson = (url, method) => {
  const Axios = axios.create({
    baseURL: 'http://127.0.0.1:1337'
  })

  return Axios({
    method,
    url,
  })
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log(err)
    })
}
