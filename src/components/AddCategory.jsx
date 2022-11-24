import { useState } from "react";


export const AddCategory = ( { onNewCategory} ) => {

    const[inputValue, setInputValue ] =  useState('');

    const onInputChange = ( { target } ) => {
          setInputValue( target.value );
    }

    const onSubmit = (event) => {
         event.preventDefault();
         if( inputValue.trim().length <= 1) return;

         //setCategories( catergories => [ inputValue, ...catergories ]);
         onNewCategory( inputValue.trim() );
         setInputValue('');
    }

  return (
    <form  onSubmit={ onSubmit}>
    <input 
         type="text"
         placeholder="Buscar gifts"
         value={ inputValue }
         onChange={ onInputChange }
         onSubmit={ setInputValue }
         
    />
    </form>
  )
}
 