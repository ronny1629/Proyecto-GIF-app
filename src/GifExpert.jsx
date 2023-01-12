import { useState } from "react";
import { GifGrid, AddCategory} from "./components";


const GifExpert = () => {

  const  [categories, setCategories ] = useState([''])
  
   const agregar = (newCategory) =>  { 

    if( categories.includes(newCategory) ) return;
    
    setCategories([...categories, newCategory])
      console.log(newCategory)
     
   }


  return (
    <>
        <h1>Hola, GifExpert</h1>

        <AddCategory
            onNewCategory ={event => agregar(event)}
        />

        { 
          categories.map( category => (

              <GifGrid key={ category } category={ category }/>
           ))
        }
    </>
  )
}

export default GifExpert