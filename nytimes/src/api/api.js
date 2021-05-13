import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.nytimes.com/svc/topstories/v2',
    params: {
      'api-key': 'j12P2K6UK491jEI1nSlsHbKWtGv6YKUN'
    }
})

export default api