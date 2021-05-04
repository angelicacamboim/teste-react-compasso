import React from 'react'
import ListaCategorias from '../components/ListaCategorias'
import Container from '@material-ui/core/Container';
import ListaNews from '../components/ListaNews'


const Home = () => {

  return (
    <main>
    <Container maxWidth="lg">

      <ListaCategorias/>

      <ListaNews url={'us'}/>
    
    </Container>
    </main>

  )
}

export default Home


  
   
  
