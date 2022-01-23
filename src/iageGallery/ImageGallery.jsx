import { Component } from "react";

export default class ImageGallery extends Component {
  state = {
    images: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.imgName !== this.props.imgName) {
      fetch(
        `https://pixabay.com/api/?q=${this.props.imgName}&page=1&key=24435694-017d2bab3470121913608c0c0&image_type=photo&orientation=horizontal&per_page=12`
      ).then((response) => {
        if (response.ok) {
          return response
            .json()
            .then(({ hits }) => this.setState({ images: hits }));
        }
        return Promise.reject(new Error("Nothing found"));
      });
    }
  }
  render() {
    return (
      <ul className="gallery">
        <p>{this.props.imgName}</p>
      </ul>
    );
  }
}
