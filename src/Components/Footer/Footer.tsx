import { useState } from "react";
import { FooterContainer, ModalContainer } from "./style";
import Modal from "react-modal";
import rulesImg from "./image-rules.svg";
import closeIcon from "./icon-close.svg";

Modal.setAppElement("#root");

export default function Footer() {
  const [modal, setModal] = useState<boolean>(false);

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
            display: "flex",
            alignItems: "center",
            padding: "1rem",
            height: "50vh",
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
