import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <>
      {alertVisible && (
        <Alert
          status={alertVisible ? "show" : "hide"}
          onClose={() => setAlertVisible(false)}
        >
          Holy Guacamole!
        </Alert>
      )}
      <Button color={"secondary"} onClick={() => setAlertVisible(true)}>
        Click Me!
      </Button>
    </>
  );
}

export default App;
