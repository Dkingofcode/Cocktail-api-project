import React from 'react'
import { Link, useParams } from 'react-router-dom'


const Singlecocktail = () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
    const {id} = useParams();

  return (
    <div>Singlecocktail</div>
  )
}

export default Singlecocktail;