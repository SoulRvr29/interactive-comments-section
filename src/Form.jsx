import { useState } from "react";
import dataJson from "./data.json";

const Form = ({ sendHandler }) => {
  const [newComment, setNewComment] = useState("");
  return (
    <>
      <form className="mb-4 max-w-[730px] mx-auto p-4 flex flex-wrap  justify-between gap-4 bg-White rounded-lg sm:flex-nowrap">
        <label htmlFor="comment" className="hidden"></label>
        <textarea
          className="border rounded-lg px-5 py-3 hover:cursor-pointer hover:border-Dark-blue hover:text-Dark-blue transition-all ease-out duration-300 w-full "
          name="comment"
          onChange={(e) => setNewComment(e.target.value)}
          value={newComment}
          id="comment"
          cols="30"
          rows="3"
          placeholder="Add a comment..."
        ></textarea>

        <img
          className="w-8 h-8 s sm:order-first sm:w-10 sm:h-10"
          src={dataJson.currentUser.image.png}
          alt="avatar"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            sendHandler(newComment);
            setNewComment("");
          }}
          className="w-fit h-fit  bg-Moderate-blue text-Very-light-gray py-3 px-8 rounded-lg hover:bg-Light-grayish-blue transition-bg duration-300 ease-out"
        >
          SEND
        </button>
      </form>
    </>
  );
};

export default Form;
