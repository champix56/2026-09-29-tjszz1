import B2 from "../uis/B2/B2";
import Button from "../uis/Button/Button";

const App = () => {
  return (
    <>
      <p>DEMAT BREIZH</p>
      <Button
        color="green"
        onCliked={() => {
          console.trace("toto");
        }}
      >
        OK
      </Button>
      <Button onCliked={() => console.log("cancel")} color="green">
        <img src="favicon.svg" alt="" />
        Cancel
      </Button>
    </>
  );
};

export default App;
