import React from 'react';
import './Gif.css'

export interface GifProps {
    title: string;
    url: string;
    id: string;
    setGif: React.Dispatch<React.SetStateAction<string>>;
}

const Gif = ({title,url,id,setGif}: GifProps) => {
    const handleShowGif = () => {
        setGif(id)
    }
    return (
        <div className="Gif">
            <div className = "Gif-content" >
                <p>{title}</p>
                <img src={url} alt={title} />
                <button onClick={handleShowGif}>See Gif</button>
            </div>
        </div>
    )
}


export default Gif