import axios from 'axios';

export const api = axios.create({
  //  method: 'get',
    baseURL: 'https://api.nytimes.com/svc/topstories/v2',
    params: {
      'api-key': 'zvAazghKbJZP9pnADKTDoZ2uNJvQmGAL'
    }
})

export const get = async (url, setDado, setLoading) => {
  api.get(url + '.json')
  .then(response => {
     setLoading(false)
     setDado(response.data.results)
}).catch(error =>  console.log(error))

 
}

//https://api.nytimes.com/svc/topstories/v2/science.json?api-key=zvAazghKbJZP9pnADKTDoZ2uNJvQmGAL