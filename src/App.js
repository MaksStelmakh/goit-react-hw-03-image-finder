import { Component } from "react";
import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./iageGallery/ImageGallery";

export default class App extends Component {
  state = {
    images: "",
    showModal: false,
  };

  handleFormSubmit = (images) => {
    this.setState({ images });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imgName={this.state.images} />
      </div>
    );
  }
}
