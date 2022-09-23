import { Container } from '@chakra-ui/react';
import { getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { collection, doc } from 'firebase/firestore';
import {db} from '../firebase/firebase'

export default function ItemDetailContainer() {

  const [itemDetail, setItemDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const {id} = useParams();

  useEffect(()=>{
    setLoading(true);
    const colecctionItems = collection(db, "products")
    const referenceDoc = doc(colecctionItems, id)

    getDoc(referenceDoc)
    .then((result)=>{
      setItemDetail({
        id:result.id,
        ...result.data()
        
      })
    })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false));
  },[])

  
  return (
    <Container maxW={"full"} py="1rem">
      {loading ? 'cargando detalle del producto...' : <ItemDetail itemDetail={itemDetail}/>}
    </Container>
  )
}
