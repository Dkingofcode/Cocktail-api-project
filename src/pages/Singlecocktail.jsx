import React from 'react'
import { Link, useParams } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
import Loading from '../components/Loading';


const Singlecocktail = () => {
    const {id} = useParams();
    const [loading, setLoading] = React.useState(false);
    const [cocktail, setCocktail] = React.useState(null);
 

    React.useEffect(() => {
     setLoading(true);
       async function getCocktail(){
        try{
             const response = await fetch(`${url}${id}`);
             const data = await response.json();
             if(data.drinks){
               const {strDrink: name, strDrinkThumb: image, strAlcoholic: info, strCategory: category, strGlass: glass, strInstructions: instructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5,} = data.drinks[0]
                const ingredients = [
                  strIngredient1,
                  strIngredient2,
                  strIngredient3,
                  strIngredient4,
                  strIngredient5,
                ]
               const newCocktail = {
                 name,
                 image,
                 info,
                 category,
                 glass,
                 instructions,
                 ingredients,
               }
               setCocktail(newCocktail);
             }else{
               setCocktail(null)
             }
             setLoading(false);

        } catch(error){
          console.log(error);            
        }
       }   
       getCocktail();
    }, [id])

    if(loading) {
      return <Loading />
    }

    if(!cocktail) {
      return <h2 className='section-title'>no cocktail to display</h2>
    }

    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients,
    } = cocktail

  return (
    <div className='cocktail'>
      <h2>Singlecocktail</h2>
      <Link to='/' className='btn btn-primary'>
        back home
      </Link>
      <h5>{id}</h5>
      <h3 className='title'>{name}</h3>
      <div className='drink'>
        <img src={image} alt={name} />
      <div className='drink-info'>
        <p>
          <span className='drink-data'>name :</span>
          {name}
        </p>
        <p>
          <span className='drink-data'>category :</span>
          {category}
        </p>
        <p>
         <span className='drink-data'>info :</span>
         {info}
        </p>
        <p>
          <span className='drink-data'>glass :</span>
        </p>
      </div>
      </div>
      </div>
  )
}

export default Singlecocktail;