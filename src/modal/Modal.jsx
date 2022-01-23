import { Component } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalDiv } from "./Modal.styled";

const modalRoot = document.querySelector(`#modal-root`);

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener(`keydown`, this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener(`keydown`, this.handleKeyDown);
  }

  handleKeyDown = (evt) => {
    if (evt.code === `Escape`) {
      this.props.onClose();
    }
  };

  handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const photo = this.props.photo;
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalDiv>
          <img src={photo} alt="" />
        </ModalDiv>
      </Overlay>,
      modalRoot
    );
  }
}
