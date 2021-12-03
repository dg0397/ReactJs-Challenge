import React from 'react';
import Gif, { GifProps } from '../Gif/Gif';
import './List.css'

export interface GifsListProps {
    gifs: Array<GifProps> | undefined;
    setGif: React.Dispatch<React.SetStateAction<string>>;
}

const GifsList = ({gifs,setGif}:GifsListProps) => {
    return (
        <div className = 'GifsList'>
            {gifs?.map(({ title, id, url }) => {
                return (
                    <Gif
                        title={title}
                        url={url}
                        id = {id}
                        key={id}
                        setGif={setGif}
                    />
                )
            })}
        </div>
    )
};

export default GifsList;