import React from 'react';
import { useState, useContext, useEffect } from 'react';


export const useGlobalContext = () => {
    return useContext(AppContext);
}

const AppContext = React.createContext();
 
const AppProvider = ({ children }) => {
   const [loading, setLoading] = useState(false);
   const [searchTerm, setSearchTerm] = useState("1");
   const [cocktails, setCocktails] = useState([]);

   const fetchData = async () => {
     setLoading(true);
     try{ 
        const response = await fetch(`${url}${searchTerm}`);
        const data = await response.json();
        const {drinks} = data;
         if(drinks){
           const newCocktails = drinks.map((item) => {
            const {idDrink, strDrink, strDrinkThunmb, strAlcoholic, strGlass,} = item
            return { 
              id: idDrink,
              name: strDrink,
              image: strDrinkThunmb,
              info: strAlcoholic,
              glass: strGlass, 
           }
           })
           setCocktails(newCocktails);
         } else{
            setCocktails([]);
          }
          setLoading(false);

     }catch(error){
        setLoading(false);
        console.log(error);
     }
   }

   useEffect(() => {
     fetchData();

   })

    return (
      <AppContext.Provider value={{ loading, searchTerm, cocktails, setSearchTerm}}>
        {children}
      </AppContext.Provider>
    )
}


export { AppContext, AppProvider};