import React from 'react'
import cocktail from '../components/cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';



const Cocktails = () => {
  const { cocktails, loading } = useGlobalContext()
  console.log(cocktails);
  if(loading){
    return <Loading />
  }
  if (cocktails.length < 1){
    return (
       <h2>no cocktails matched your search</h2>
    )
  }
  return (
    <div>Cocktails</div>
  )
}

export default Cocktails;