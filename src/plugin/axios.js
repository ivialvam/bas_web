import axios from 'axios'

const myAxios = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
    // baseURL: 'http://localhost:1809',
})

// const instance = axios.create({
//   baseURL: 'http://localhost:1809', // Update with your server's base URL
//   headers: {
//     'Content-Type': 'application/json',
//   }
// })

// export default instance
export default myAxios;

