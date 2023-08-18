import Comment from "./Comment";
import Form from "./Form";
import dataJson from "./data.json";
import { useState } from "react";

function App() {
  const [mainData, setMainData] = useState(dataJson);
  console.log(mainData);

  const sendHandler = (newComment) => {
    setMainData({
      currentUser: { ...mainData.currentUser },
      comments: [
        ...mainData.comments,
        {
          id: mainData.comments.length + 1,
          content: newComment,
          createdAt: "now",
          score: 0,
          user: {
            image: {
              png: mainData.currentUser.image.png,
              webp: mainData.currentUser.image.webp,
            },
            username: mainData.currentUser.username,
          },
          replies: [],
        },
      ],
    });
  };
  const deleteHandler = (commentId) => {
    console.log(commentId);
    setMainData({
      currentUser: { ...mainData.currentUser },
      comments: [...mainData.comments.filter((item) => item.id != commentId)],
    });
  };

  return (
    <main className="min-h-screen px-4 py-8 bg-Very-light-gray text-Grayish-Blue font-normal ">
      {mainData.comments.map((comment) => (
        <Comment
          comment={comment}
          currentUser={mainData.currentUser}
          key={comment.id}
          deleteHandler={deleteHandler}
        ></Comment>
      ))}
      <Form currentUser={mainData.currentUser} sendHandler={sendHandler}></Form>
    </main>
  );
}

export default App;
