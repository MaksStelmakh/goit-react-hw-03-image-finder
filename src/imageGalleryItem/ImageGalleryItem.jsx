export default function ImageGalleryItem({ bigPhoto, smallPhoto, tags }) {
  return (
    <li>
      <img src={smallPhoto} alt={tags} />
    </li>
  );
}
