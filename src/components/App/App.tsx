import FlexV3Grow from "../layouts/FlexV3Grow/FlexV3Grow";
import Header from "../uis/Header/Header";
import Navbar from "../uis/Navbar/Navbar";
import Footer from "../uis/Footer/Footer";
import  '../../store/store'

import Modal from "../uis/Modal/Modal";
import { Route, Routes } from "react-router";
import Editor from "../../pages/Editor";
import Home from "../../pages/Home";
const App: React.FC = () => {
    console.log('mailto:desorbaix@free.fr?body='+JSON.stringify({abc:123}))
  console.log('%c%s','font-size:40pt;color:red;text-decoration:underline', 'ton boulot c\'est d\'utiliser lapp pas de nous chercher des poux')

  //const onMemeChange=(newCurrent:MemeInterface)=>{}
  return (
    <>
    <FlexV3Grow>
      <Header />
      <Navbar />
        <Routes >
          <Route path="/editor" Component={Editor}/>
          <Route path="/editor/:id" Component={Editor}/>
          <Route path="/" Component={Home}/>
        </Routes>
      <Footer />
    </FlexV3Grow>
    <Modal/>
    </>
  );
};

export default App;
