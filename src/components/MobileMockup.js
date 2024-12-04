import React from "react";
import "./MobileMockup.scss";
import firstImg from "../assets/dog-image-1.jpg";
import secondImg from "../assets/dog-image-2.jpg";
import thirdImg from "../assets/dog-image-3.jpg";
import userProfile from "../assets/avatar.jpg";
import { RiArrowLeftWideLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegCircle } from "react-icons/fa";
import { FaCircleChevronRight } from "react-icons/fa6";

const MobileMockup = () => {
  return (
    <section className="mobile-mockup">
      <ChatHead />
      <div className="chat-window">
        <div className="chat-boxes">
          <TextLeftChat text="That sounds great. I’d be happy with that." />
          <TextLeftChat text="Could you send over some pictures of your dog, please?" />
          <ImageRightChat />
          <TextRightChat text="Here are a few pictures. She’s a happy girl!" />
          <TextRightChat text=" Can you make it?" />
          <TextLeftChat text="  She looks so happy! The time we discussed works. How long shall I take her out for?" />
          <PromotionLeftChat time="30 minute" price="29" />
          <PromotionLeftChat time="1 hour" price="49" />
        </div>
        <ChatInput />
      </div>
    </section>
  );
};

export default MobileMockup;

// Sub modules
const ChatHead = () => {
  return (
    <div className="chat-head">
      <div className="left-side-chat-head">
        <RiArrowLeftWideLine className="left-arrow" />
        <div className="user-info">
          <img src={userProfile} alt="Samuel Green profile" />
          <div className="user-profile">
            <h2 className="user-name">Samuel Green</h2>
            <p className="user-status">Available to Walk</p>
          </div>
        </div>
      </div>
      <BsThreeDotsVertical className="right-side-chat-head" />
    </div>
  );
};

const TextLeftChat = ({ text }) => {
  return <div className="text-left-chat">{text}</div>;
};

const TextRightChat = ({ text }) => {
  return <div className="text-right-chat">{text}</div>;
};

const ImageRightChat = () => {
  return (
    <div className="img-right-chat">
      <img src={firstImg} alt="The smiley dog" />
      <img src={secondImg} alt="The laid down dog" />
      <img src={thirdImg} alt="The dog with it toy" />
    </div>
  );
};

const PromotionLeftChat = ({ time, price }) => {
  return (
    <div className="promotion-left-chat">
      <div className="time-option">
        <FaRegCircle size={12} className="radio-button" />
        <p>{`${time} walk`}</p>
      </div>
      <h2 className="promotion-price">{`$${price}`}</h2>
    </div>
  );
};

const ChatInput = () => {
  return (
    <div className="text-input-section">
      <input type="text " placeholder="Type a message…" />
      <FaCircleChevronRight
        className="submit-button"
        color="hsl(271, 36%, 24%)"
      />
    </div>
  );
};
