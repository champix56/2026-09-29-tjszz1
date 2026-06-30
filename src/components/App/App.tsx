import FlexV3Grow from "../layouts/FlexV3Grow/FlexV3Grow";
import Header from "../uis/Header/Header";
import Navbar from "../uis/Navbar/Navbar";
import FlexH1Grow from "../layouts/FlexH1Grow/FlexH1Grow";
import MemeForm from "../MemeForm/MemeForm";
import Footer from "../uis/Footer/Footer";
const App: React.FC = () => {
  return (
    <FlexV3Grow>
      <Header />
      <Navbar />
      <FlexH1Grow>
        <div>Viewer</div>
        <MemeForm />
      </FlexH1Grow>
      <Footer />
    </FlexV3Grow>
  );
};

export default App;
