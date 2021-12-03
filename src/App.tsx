import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form/Form';
import List from './Components/List/List';
import { GifProps } from './Components/Gif/Gif';
import getGifs from './utils/getGifs';
import Modal from './Components/Modal/Modal';

function App() {
  const [gifs,setGifs] = useState<GifProps[] | []>([])
  const [value,setValue] = useState('');
  const [singleGif, setSingleGif ] = useState<string>('') 
  
  React.useEffect(() => {
     void getGifs({ keyword: value, setGigsState: setGifs });
  }, [value]);

  return (
    <div className="App">
      <header className="App-header">
        <Form keyword={value} setKeyword = {setValue}/>
        <List gifs={gifs} setGif={setSingleGif}/>
        <Modal setShowModal={setSingleGif} gifId = {singleGif} gifs={gifs}/>
      </header>
    </div>
  );
}

export default App;
