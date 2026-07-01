import FlexV3Grow from "../layouts/FlexV3Grow/FlexV3Grow";
import Header from "../uis/Header/Header";
import Navbar from "../uis/Navbar/Navbar";
import FlexH1Grow from "../layouts/FlexH1Grow/FlexH1Grow";
import MemeForm from "../MemeForm/MemeForm";
import Footer from "../uis/Footer/Footer";
import {
  emptyMeme,
  MemeSVGViewer,
  type ImageInterface,
  type MemeInterface,
} from "orsys-tjs-meme";
import { useEffect, useState } from "react";
import { RESSOURCES, REST_URL } from "../../config/constanteRest";
import MemeThumbnail from "../uis/MemeThumbnail/MemeThumbnail";
const App: React.FC = () => {
  const [current, setCurrent] = useState(emptyMeme);
  const [images, setimages] = useState<Array<ImageInterface>>([]);
  const [memes, setmemes] = useState<Array<MemeInterface>>([]);
    console.log('mailto:desorbaix@free.fr?body='+JSON.stringify({abc:123}))
  console.log('%c%s','font-size:40pt;color:red;text-decoration:underline', 'ton boulot c\'est d\'utiliser lapp pas de nous chercher des poux')

  useEffect(() => {
    //setimages(imagesFromJSON);
    fetch(`${REST_URL}/nawak`)
    const pri=fetch(`${REST_URL}${RESSOURCES.images}`)
      .then((resp) => resp.json())
      //.then((arr) => setimages(arr));
    const prm=fetch(`${REST_URL}${RESSOURCES.memes}`)
      .then((resp) => resp.json())
      //.then((arr) => setmemes(arr));

    const timeOut=new Promise((resolved,rejeted)=>{
      setTimeout(()=>{
        resolved('TimeOut ecoulé')
      },200)
    })

    const prAll=Promise.all([pri,prm])
    Promise.race([prAll,timeOut]).then(resp=>{
      if( typeof resp=='string'){console.log('error de request timeout')}
      else {
        setimages((resp as [ImageInterface[],MemeInterface[]] )[0])
        setmemes((resp as [ImageInterface[],MemeInterface[]] )[1])
      }
    })

  }, []);

  //const onMemeChange=(newCurrent:MemeInterface)=>{}
  return (
    <FlexV3Grow>
      <Header />
      <Navbar />
      <FlexH1Grow>
        <MemeThumbnail memes={memes} images={images}/>
        {/* <MemeSVGViewer
          meme={current}
          image={images.find((im) => im.id === current.imageId)}
          basePath=""
        />
        <MemeForm
          images={images}
          meme={current}
          onMemeChange={(newCurrent) => {
            setCurrent(newCurrent);
          }}
        /> */}
      </FlexH1Grow>
      <Footer />
    </FlexV3Grow>
  );
};

export default App;
