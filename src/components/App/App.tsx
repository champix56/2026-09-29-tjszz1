import FlexV3Grow from "../layouts/FlexV3Grow/FlexV3Grow";
import Header from "../uis/Header/Header";
import Navbar from "../uis/Navbar/Navbar";
import FlexH1Grow from "../layouts/FlexH1Grow/FlexH1Grow";
import MemeForm from "../MemeForm/MemeForm";
import Footer from "../uis/Footer/Footer";
import  '../../store/store'
import {
  emptyMeme,
  type ImageInterface,
  type MemeInterface,
} from "orsys-tjs-meme";
import { useEffect, useState } from "react";
import { RESSOURCES, REST_URL } from "../../config/constanteRest";
import MemeThumbnail from "../uis/MemeThumbnail/MemeThumbnail.stored";
import MemeSVGViewer from "../uis/MemeSVGViewer/MemeSVGViewer";
const App: React.FC = () => {
    console.log('mailto:desorbaix@free.fr?body='+JSON.stringify({abc:123}))
  console.log('%c%s','font-size:40pt;color:red;text-decoration:underline', 'ton boulot c\'est d\'utiliser lapp pas de nous chercher des poux')

  //const onMemeChange=(newCurrent:MemeInterface)=>{}
  return (
    <FlexV3Grow>
      <Header />
      <Navbar />
      <FlexH1Grow>
        {/* <MemeThumbnail/> */}
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
        <MemeSVGViewer/>
      </FlexH1Grow>
      <Footer />
    </FlexV3Grow>
  );
};

export default App;
