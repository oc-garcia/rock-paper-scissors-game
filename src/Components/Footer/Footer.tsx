import { useState } from "react";
import { FooterContainer, ModalContainer } from "./style";
import Modal from "react-modal";
import rulesImg from "./image-rules.svg";
import closeIcon from "./icon-close.svg";

Modal.setAppElement("#root");

export default function Footer() {
  const [modal, setModal] = useState<boolean>(false);

  function isBigScreen(): Boolean {
    if (typeof window !== "undefined") {
      return window.innerWidth > 768;
    }
    return false;
  }

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <FooterContainer>
      <button onClick={handleModal}>RULES</button>
      <Modal
        isOpen={modal}
        onRequestClose={handleModal}
        contentLabel="Rules"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            height: "70vh",
            overflow: "none",
            width: isBigScreen() ? "98vw" : "",
          },
          overlay: {
            width: "100%",
            height: "100%",
          },
        }}>
        <ModalContainer>
          <h2>RULES</h2>
          <img src={rulesImg} alt="Game rules" />
          <img onClick={handleModal} src={closeIcon} alt="Close" />
        </ModalContainer>
      </Modal>
    </FooterContainer>
  );
}
