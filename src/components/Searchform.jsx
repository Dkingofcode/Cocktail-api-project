import React from 'react';
import { useGlobalContext } from '../context';


const Searchform = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchStr = React.useRef('');

  React.useEffect(() => {
    searchStr.current.focus()
  }, [])

   const searchCocktail = () => {
    setSearchTerm(searchStr.current.value)
   }

   const handleSubmit = (e) => {
    e.preventDefault();
   }

  return (
    <div className='search-section'>
    <h3>Searchform</h3>
    <form className="form-control" onSubmit={handleSubmit}>
      <label htmlfor='name'>search your favorite cocktail</label>
      <input type="text" id="name" ref={searchStr} onChange={searchCocktail}/>
    </form>
      </div>
  )
}

export default Searchform;