import axios from 'axios';

const api = axios.create({
    //  method: 'get',
      baseURL: 'https://api.nytimes.com/svc/topstories/v2',
      params: {
        'api-key': 'zvAazghKbJZP9pnADKTDoZ2uNJvQmGAL'
      }
})

export default api;