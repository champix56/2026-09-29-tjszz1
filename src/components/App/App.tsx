import FlexV3Grow from "../layouts/FlexV3Grow/FlexV3Grow";
import Header from "../uis/Header/Header";
import Navbar from "../uis/Navbar/Navbar";
import FlexH1Grow from "../layouts/FlexH1Grow/FlexH1Grow";
import MemeForm from "../MemeForm/MemeForm";
import Footer from "../uis/Footer/Footer";
import { emptyMeme, MemeSVGViewer, type MemeInterface } from "orsys-tjs-meme";
import { useState } from "react";
const App: React.FC = () => {
  const [current, setCurrent] = useState(emptyMeme);
  //const onMemeChange=(newCurrent:MemeInterface)=>{}
  return (
    <FlexV3Grow>
      <Header />
      <Navbar />
      <FlexH1Grow>
        <MemeSVGViewer meme={current} image={undefined} basePath="" />
        <MemeForm
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
