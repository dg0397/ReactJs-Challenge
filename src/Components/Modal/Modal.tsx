import React from 'react';
import { GifProps } from '../Gif/Gif';
import './Modal.css'

export interface ModalProps {
    gifId : string,
    setShowModal: (value:string) => void;
    gifs: Array<GifProps> | undefined;
}

const Modal = ({gifId,setShowModal,gifs}: ModalProps) => {
    const singleGif = gifs?.find(gif => gif.id === gifId); 

    const handleClick = () => {
        setShowModal('')
    }
    return (
        <>
            {
            gifId && (
                <div className="Modal">
                <div className="Gif">
                    <div className = "Gif-content" >
                        <p>{singleGif?.title}</p>
                        <img src={singleGif?.url} alt={singleGif?.title} />
                        <button onClick={handleClick}>Close Modal</button>
                    </div>
                </div>
                </div>
            )
            }
        </>
    )
}


export default Modal