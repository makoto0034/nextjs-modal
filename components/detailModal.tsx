import Modal from "react-modal";
import type { Data } from "@/types/data";

Modal.setAppElement(".App");

interface ModalProps {
    isOpen:boolean;
    setIsOpen:React.Dispatch<React.SetStateAction<boolean>>;
    selectedData?:Data;
}

export default function Home(
    {isOpen, setIsOpen,selectedData}:ModalProps
) {
  return (
    <div className="App">
      <Modal isOpen={isOpen}>
        <button onClick={() => setIsOpen(false)}>Close Modal</button>
        <div>
            {selectedData?.userName}
            {selectedData?.userId}
        </div>
      </Modal>
    </div>
  );
}
