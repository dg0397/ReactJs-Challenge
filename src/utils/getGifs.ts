import { GifProps } from "../Components/Gif/Gif";

const API_KEY = "mRAvsNSkUMxuEAuyPOV8EQMwdtjxLQQk";
const API_URL = 'https://api.giphy.com/v1';

interface getGifsProps {
    keyword : string,
    setGigsState : React.Dispatch<React.SetStateAction<[] | GifProps[]>>
}
export default function getGifs({keyword,setGigsState}:getGifsProps){
    fetch(`${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10`)
      .then(data => data.json())
      .then( gifs => {
        const {data} = gifs
        const newGifs = data.map((gif: { images: any; title: any; id: any; }) => {
            const {images,title,id} = gif;
            const {url} = images.downsized_medium;
            return {url,id,title}
        });
        console.log("Fetching")
        setGigsState(newGifs)
      })
}