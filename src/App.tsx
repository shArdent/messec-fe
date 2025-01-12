import { useEffect, useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open</button>
      <Modal containerStyle="bg-white p-10" isOpen={isOpen} closer={setIsOpen}>
        <h1>ini test modal</h1>
      </Modal>
    </>
  );
}

export default App;
