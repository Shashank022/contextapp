import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const[books, setBooks] = useState([
        {title:'Name of Wind', id:1},
        {title:'Welcome home', id:2},
        {title:'Nature and colors', id:3},
        {title:'The Weight of Airbubble', id:4},
        {title:'Mater the Ideas', id:5},
    ])
    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
     );
}

export default BookContextProvider;