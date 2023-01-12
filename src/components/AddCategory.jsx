import { useState } from "react";

export const AddCategory = ({onNewCategory})=> {

    const [ inputValue, setinputValue ] = useState(' ')

    const onInputChange = ({target})=>{
       
        setinputValue(target.value)
    };

    const onSubmit = (event)=>{
        event.preventDefault();
    
        if(inputValue.trim().length <= 1 ) return;

        if (inputValue.length <= 20) {
            //setCategories( Categories => [inputValue , ...Categories])
            onNewCategory( inputValue.trim() ) 
            setinputValue('')
        }else{
            const alerta = alert('Ingrese un texto mas corto')
            setinputValue('')
        }
         
    }

    
  return (
    
    <>

        <form onSubmit={onSubmit}>

            <input
                type='text' 
                placeholder='Buscar gifs'
                value={ inputValue.toLowerCase() }
                onChange={ onInputChange }
            />
   
              
        </form>
    
    </>
  )
}
