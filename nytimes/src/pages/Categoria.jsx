import React from 'react'
import { useParams } from 'react-router-dom'
import ListaNews from '../components/ListaNews'

const Categoria = () => {
    const { id = 'us'} = useParams()
    
    return(
        <ListaNews url={id}/>  
    )}

export default Categoria