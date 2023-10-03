import { useState } from "react";
import dataJson from "./data.json";
import Form from "./Form";

const Comment = ({ comment, deleteHandler }) => {
  const [score, setScore] = useState(comment.score);
  const [edit, setEdit] = useState(false);
  const [editableComment, setEditableComment] = useState(comment.content);
  const [form, setForm] = useState(false);
  const [repliesData, setRepliesData] = useState(comment.replies);

  const buttonHandler = (btn) => {
    if (btn == "plus" && score - comment.score < 1) setScore(score + 1);
    if (btn == "minus" && comment.score - score < 1) setScore(score - 1);
  };

  const replySendHandler = (newComment) => {
    console.log(repliesData);
    setRepliesData([
      ...repliesData,
      {
        id: repliesData.length + 1,
        content: newComment,
        createdAt: "now",
        score: 0,
        user: {
          image: {
            png: dataJson.currentUser.image.png,
            webp: dataJson.currentUser.image.webp,
          },
          username: dataJson.currentUser.username,
        },
        replies: [],
      },
    ]);
    setForm(!form);
    console.log(repliesData);
  };

  const replyDeleteHandler = (commentId) => {
    console.log(commentId);

    setRepliesData([...repliesData.filter((item) => item.id != commentId)]);

    console.log(repliesData);
  };

  return (
    <>
      <section className="max-w-[730px]  mx-auto mb-4 p-4 flex max-sm:flex-col flex-row-reverse gap-4 bg-White rounded-lg relative">
        <div className="grid gap-4 w-full ">
          <header className="flex items-center gap-4">
            <img className="w-8" src={comment.user.image.png} alt="avatar" />
            <h1 className="text-Dark-blue font-bold font-rubik">
              {comment.user.username}
            </h1>
            {comment.user.username == "juliusomo" && (
              <div className="bg-Moderate-blue text-Very-light-gray text-xs px-[6px] py-[2px] rounded-sm">
                you
              </div>
            )}
            <p className="font-rubik">{comment.createdAt}</p>
          </header>
          {/* COMMENT */}
          {!edit && <p className="grid">{editableComment}</p>}
          {edit && (
            <>
              <textarea
                className="border rounded-lg px-5 py-3 hover:cursor-pointer hover:border-Dark-blue hover:text-Dark-blue transition-all ease-out duration-300 w-full "
                name="comment"
                onChange={(e) => setEditableComment(e.target.value)}
                value={editableComment}
                id="comment"
                cols="30"
                rows="3"
                placeholder="Add a comment..."
              ></textarea>
              <button
                onClick={(e) => {
                  setEdit(false);
                }}
                className="w-fit h-fit  bg-Moderate-blue text-Very-light-gray py-3 px-8 rounded-lg hover:bg-Light-grayish-blue transition-bg duration-300 ease-out place-self-end"
              >
                UPDATE
              </button>
            </>
          )}
        </div>
        {/* SCORE */}
        <div className="flex relative justify-between items-center place-self-start">
          <div className="flex flex-col max-sm:flex-row items-center gap-3 px-3 py-3 w-fit rounded-lg bg-Very-light-gray max-sm:px-4 max-sm:py-2">
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
        {/* REPLY, EDIT, DELETE BUTTONS */}
        {comment.user.username == dataJson.currentUser.username ? (
          <>
            <div
              className=" flex gap-2 hover:opacity-50 transition-text ease-out duration-300 hover: cursor-pointer absolute sm:top-6 items-center  max-sm:bottom-6  right-[6rem]"
              onClick={() => deleteHandler(comment.id)}
            >
              <img
                className="w-4 h-4"
                src=".\images\icon-delete.svg"
                alt="delete"
              />
              <p className="text-Soft-Red font-normal-2 ">Delete</p>
            </div>
            <div
              className=" flex gap-2 hover:opacity-50 transition-text ease-out duration-300 hover: cursor-pointer absolute sm:top-6 items-center  max-sm:bottom-6  right-6"
              onClick={() => setEdit(true)}
            >
              <img
                className="w-4 h-4"
                src=".\images\icon-edit.svg"
                alt="delete"
              />
              <p className="text-Moderate-blue font-normal-2 ">Edit</p>
            </div>
          </>
        ) : (
          <div
            className=" flex gap-2 hover:opacity-50 transition-text ease-out duration-300 hover: cursor-pointer absolute sm:top-6 items-center  max-sm:bottom-6  right-6"
            onClick={() => setForm(!form)}
          >
            <img
              className="w-4 h-4"
              src=".\images\icon-reply.svg"
              alt="reply"
            />
            <p className="text-Moderate-blue font-normal-2 ">Reply</p>
          </div>
        )}
      </section>
      <div className="pl-4 border-l-2 max-w-[730px] mx-auto">
        {repliesData &&
          repliesData.map((reply) => (
            <Comment
              comment={{ ...reply, replies: [] }}
              key={reply.id}
              deleteHandler={replyDeleteHandler}
            ></Comment>
          ))}
      </div>
      {form && (
        <Form key={comment.id + "f"} sendHandler={replySendHandler}></Form>
      )}
    </>
  );
};

export default Comment;
