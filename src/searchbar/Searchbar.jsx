import { Component } from "react";
import { ImSearch } from "react-icons/im";

export default class Searchbar extends Component {
  state = {
    images: "",
  };

  handleNameCHange = (event) => {
    this.setState({ images: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.images.trim() === "") {
      alert("Введите имя");
      return;
    }
    this.props.onSubmit(this.state.images);
    this.setState({ images: "" });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <ImSearch className="button-label" />
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.images}
            onChange={this.handleNameCHange}
          />
        </form>
      </header>
    );
  }
}
