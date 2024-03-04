import { Children, createContext } from "react";

const shoppingCartContetext = createContext()

export const shoppingCartProvider = ({Children})=>{
    return(
        <shoppingCartContetext.Provider>
        {Children}
        </shoppingCartContetext.Provider>
    )
}

