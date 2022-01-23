import { Component } from "react";
import { TailSpin } from "react-loader-spinner";
import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";
import LoadMore from "../loadMore/LoadMore";

export default class ImageGallery extends Component {
  state = {
    images: null,
    loading: false,
    page: 1,
  };

  loadMoreMethod = () => {
    this.setState((prev) => {
      return {
        page: prev.page + 1,
      };
    });
  };

  getImageFetch = () => {
    fetch(
      `https://pixabay.com/api/?q=${this.props.imgName}&page=${this.state.page}&key=24435694-017d2bab3470121913608c0c0&image_type=photo&orientation=horizontal&per_page=12`
    ).then((response) => {
      if (response.ok) {
        return response
          .json()
          .then(({ hits }) => {
            this.state.images
              ? this.setState(({ images }) => ({
                  images: [...images, ...hits],
                }))
              : this.setState({ images: hits });
          })
          .finally(() => this.setState({ loading: false }));
      }
      return Promise.reject(new Error("Nothing found"));
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.getImageFetch();
      return;
    }
    if (prevProps.imgName !== this.props.imgName) {
      if (prevProps.imgName) {
        this.setState({ images: null });
      }
      this.setState({ loading: true });
      this.getImageFetch();
    }
  }
  render() {
    const pictures = this.state.images;
    const loading = this.state.loading;
    return (
      <>
        <ul className="gallery">
          {loading && <TailSpin color="#00BFFF" height={80} width={80} />}
          {pictures
            ? pictures.map(({ id, webformatURL, largeImageURL, tags }) => {
                return (
                  <ImageGalleryItem
                    key={id}
                    smallPhoto={webformatURL}
                    bigPhoto={largeImageURL}
                    tag={tags}
                  />
                );
              })
            : ""}
        </ul>
        {pictures && <LoadMore click={this.loadMoreMethod} />}
      </>
    );
  }
}
