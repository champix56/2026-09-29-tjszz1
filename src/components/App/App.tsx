import FlexV3Grow from "../layouts/FlexV3Grow/FlexV3Grow";
import Header from "../uis/Header/Header";
import Navbar from "../uis/Navbar/Navbar";
import FlexH1Grow from "../layouts/FlexH1Grow/FlexH1Grow";
import MemeForm from "../MemeForm/MemeForm";
import Footer from "../uis/Footer/Footer";
import { emptyMeme, MemeSVGViewer, type ImageInterface } from "orsys-tjs-meme";
import { useEffect, useState } from "react";
import { images as imagesFromJSON } from "../../../db.json";
const App: React.FC = () => {
  const [current, setCurrent] = useState(emptyMeme);
  // const [images, setimages] = useState<Array<ImageInterface>>([]);
  // useEffect(() => {
  //   setimages(imagesFromJSON);
  // }, []);

  //const onMemeChange=(newCurrent:MemeInterface)=>{}
  return (
    <FlexV3Grow>
      <Header />
      <Navbar />
      <FlexH1Grow>
        <MemeSVGViewer
          meme={current}
          image={imagesFromJSON.find((im) => im.id === current.imageId)}
          basePath=""
        />
        <MemeForm
          images={imagesFromJSON}
          meme={current}
          onMemeChange={(newCurrent) => {
            setCurrent(newCurrent);
          }}
        />
      </FlexH1Grow>
      <Footer />
    </FlexV3Grow>
  );
};

export default App;
