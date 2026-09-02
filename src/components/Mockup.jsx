import {
  IoChevronBackOutline,
  IoEllipsisVertical,
  IoEllipseOutline,
  IoChevronForwardCircle,
} from "react-icons/io5";
import WalkerAvatar from "../assets/avatar.jpg";
import DogImage1 from "../assets/dog-image-1.jpg";
import DogImage2 from "../assets/dog-image-2.jpg";
import DogImage3 from "../assets/dog-image-3.jpg";

const IMAGE_LIST = [
  { id: 1, src: DogImage1, alt: "Golden retriever sitting in the park" },
  { id: 2, src: DogImage2, alt: "Golden retriever lying down outdoors" },
  { id: 3, src: DogImage3, alt: "Golden retriever carrying a stick" },
];

const Mockup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  return (
    <section className="chat" aria-label="Interactive chat mockup">
      {/* Header Profile */}
      <header className="chat__header">
        <button type="button" className="chat__action-btn" aria-label="Go back">
          <IoChevronBackOutline aria-hidden="true" />
        </button>
        <div className="chat__profile">
          <img
            src={WalkerAvatar}
            alt=""
            className="chat__avatar"
          />
          <div className="chat__profile-info">
            <span className="chat__profile-name">Samuel Green</span>
            <span className="chat__profile-status">Available to Walk</span>
          </div>
        </div>
        <button
          type="button"
          className="chat__action-btn"
          aria-label="More options"
        >
          <IoEllipsisVertical aria-hidden="true" />
        </button>
      </header>

      {/* Chat Messages Body */}
      <div className="chat__body">
        <TextBubble
          text="That sounds great. I’d be happy with that."
          align="left"
        />
        <TextBubble
          text="Could you send over some pictures of your dog, please?"
          align="left"
        />
        <ImageBubble images={IMAGE_LIST} align="right" />
        <TextBubble
          text="Here are a few pictures. She’s a happy girl!"
          align="right"
        />
        <TextBubble text="Can you make it?" align="right" />
        <TextBubble
          text="She looks so happy! The time we discussed works. How long shall I take her out for?"
          align="left"
        />
        <PromotionBubble align="left" name="30 minute walk" price="29" />
        <PromotionBubble align="left" name="1 hour walk" price="49" />

        {/* Input Form */}
        <form className="chat__form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="chat__input"
            placeholder="Type a message…"
            aria-label="Type a message"
            readOnly
          />
          <button
            type="submit"
            className="chat__send-btn"
            aria-label="Send message"
          >
            <IoChevronForwardCircle aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Mockup;

const TextBubble = ({ text, align = "left" }) => {
  return (
    <p className={`chat__bubble chat__bubble--${align} chat__bubble--text`}>
      {text}
    </p>
  );
};

const ImageBubble = ({ images, align = "left" }) => {
  return (
    <ul className={`chat__images chat__bubble--${align}`}>
      {images.map((img) => (
        <li key={img.id} className="chat__gallery-item">
          <img src={img.src} alt={img.alt} className="chat__gallery-image" />
        </li>
      ))}
    </ul>
  );
};

const PromotionBubble = ({ align = "left", name, price }) => {
  return (
    <div
      className={`chat__bubble chat__bubble--promotion chat__bubble--${align}`}
    >
      <IoEllipseOutline aria-hidden="true"  />
      <span className="chat__promotion-name">{name}</span>
      <span className="chat__promotion-price">${price}</span>
    </div>
  );
};
