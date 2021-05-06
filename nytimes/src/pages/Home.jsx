import React from 'react'
import Container from '@material-ui/core/Container';
import ListaNews from '../components/ListaNews'


const Home = () => {

  return (
    <main>
    <Container maxWidth="lg">
      <ListaNews url={'us'}/>
    </Container>
    </main>

  )
}

export default Home


  
   
  
