import axios from 'axios';

export const api = axios.create({
  //  method: 'get',
    baseURL: 'https://api.nytimes.com/svc/topstories/v2',
    params: {
      'api-key': 'zvAazghKbJZP9pnADKTDoZ2uNJvQmGAL'
    }
})

export const get = async (url, setDado, setLoading) => {
  const resposta = await api.get(url + '.json')
  await setLoading(true)
  await setDado(resposta.data.results)
}

//https://api.nytimes.com/svc/topstories/v2/science.json?api-key=zvAazghKbJZP9pnADKTDoZ2uNJvQmGAL