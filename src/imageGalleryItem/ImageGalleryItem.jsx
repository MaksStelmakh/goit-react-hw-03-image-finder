import { Component } from "react";
import Modal from "../modal/Modal";
import { Items } from "./ImageGalleryItem.styled";

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { bigPhoto, smallPhoto, tags } = this.props;
    return (
      <Items>
        <img onClick={this.toggleModal} src={smallPhoto} alt={tags} />
        {this.state.showModal && (
          <Modal photo={bigPhoto} onClose={this.toggleModal} />
        )}
      </Items>
    );
  }
}
