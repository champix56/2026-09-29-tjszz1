import { useEffect, useState } from "react";
import Button from "../uis/Button/Button";

const App:React.FC = (props) => {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    console.log(counter)
},[counter])
useEffect(() => {
  setCounter(-1000)
}, [])
  return (
    <>
      <p>counter: {counter}</p>
      <Button
        color="green"
        onCliked={() => {
          setCounter(counter-1);
          console.log(counter);
        }}
      >
        <img src="favicon.svg" alt="" />
        -1
      </Button>
      <Button
        onCliked={() => {
          setCounter(counter+1);
          console.log(counter);
        }}
        color="green"
      >
        <img src="favicon.svg" alt="" />
        +1
      </Button>
    </>
  );
};

export default App;

