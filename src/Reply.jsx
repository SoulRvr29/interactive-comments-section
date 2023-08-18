import { useState } from "react";

const Reply = ({ data, currentUser }) => {
  const [score, setScore] = useState(data.score);

  const buttonHandler = (btn) => {
    if (btn == "plus" && score - data.score < 1) setScore(score + 1);
    if (btn == "minus" && data.score - score < 1) setScore(score - 1);
  };
  return (
    <section className="max-w-[730px] mx-auto mb-4 p-4 flex max-sm:flex-col flex-row-reverse gap-4 bg-White rounded-lg relative">
      <div className="grid gap-4">
        <header className="flex items-center gap-4">
          <img className="w-8" src={data.user.image.png} alt="avatar" />
          <h1 className="text-Dark-blue font-bold font-rubik">
            {data.user.username}
          </h1>
          {data.user.username == currentUser.username && (
            <span className="bg-Moderate-blue text-White text-xs rounded-sm px-1 pb-[2px]">
              you
            </span>
          )}
          <p className="font-rubik">{data.createdAt}</p>
        </header>
        {/* COMMENT */}
        <p>{data.content}</p>
      </div>
      {/* SCORE */}
      <div className="flex relative justify-between items-center">
        <div className="flex flex-col max-sm:flex-row items-center gap-3 px-3 py-3 w-10 rounded-lg bg-Very-light-gray max-sm:px-4 max-sm:py-2">
          <div
            id="plusBtn"
            onClick={() => buttonHandler("plus")}
            className="w-4 h-4 grid place-content-center hover:cursor-pointer text-Light-grayish-blue hover:text-Moderate-blue transition-text ease-out duration-300"
          >
            <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.19.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <p className="text-Moderate-blue font-normal-2">{score}</p>
          <div
            id="minusBtn"
            onClick={() => buttonHandler("minus")}
            className="w-4 h-4 grid place-content-center hover:cursor-pointer text-Light-grayish-blue hover:text-Moderate-blue transition-text ease-out duration-300"
          >
            <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* REPLY BUTTON */}
      <div className=" flex gap-2 hover:opacity-50 transition-text ease-out duration-300 hover: cursor-pointer absolute sm:top-6 items-center  max-sm:bottom-6  right-6">
        <img className="w-4 h-4" src=".\images\icon-reply.svg" alt="reply" />
        <p className="text-Moderate-blue font-normal-2 ">Reply</p>
      </div>
    </section>
  );
};

export default Reply;
