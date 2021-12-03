import React, {useState} from 'react'
import { GifProps } from '../Components/Gif/Gif';
// import { GifsListProps } from '../Components/List/List';

const Context = React.createContext({});

// interface State {
//     gifs : GifsListProps
// }

type GifsContextProviderProps = {
    children: React.ReactElement;
};
  

export function GifsContextProvider({children}:GifsContextProviderProps){
    const [gifs,setGifs] = useState<GifProps[] | []>([])

    return(
        <Context.Provider value = {{gifs,setGifs}}>
            {children}
        </Context.Provider>
    )

}

export default Context;