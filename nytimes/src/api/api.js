import axios from 'axios';

export const api = axios.create({
  //  method: 'get',
    baseURL: 'https://api.nytimes.com/svc/topstories/v2',
    params: {
      'api-key': 'zvAazghKbJZP9pnADKTDoZ2uNJvQmGAL'
    }
})

export const get = async(url, setDado) => {
  const resposta = await api.get(url + '.json')
  setDado(resposta.data.results)
  console.log(resposta.data.results)
}

//https://api.nytimes.com/svc/topstories/v2/science.json?api-key=zvAazghKbJZP9pnADKTDoZ2uNJvQmGAL