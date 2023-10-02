import Comment from "./Comment";
import Footer from "./Footer";
import Form from "./Form";
import dataJson from "./data.json";
import { useState } from "react";

function App() {
  const [commentsData, setCommentsData] = useState(dataJson.comments);

  const sendHandler = (newComment) => {
    setCommentsData([
      ...commentsData,
      {
        id: commentsData.length + 1,
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
  };

  const deleteHandler = (commentId) => {
    // console.log(commentId);

    setCommentsData([...commentsData.filter((item) => item.id != commentId)]);
  };

  return (
    <>
      <main className=" px-4 py-8 pb-4 bg-Very-light-gray text-Grayish-Blue font-normal ">
        {commentsData.map((comment) => (
          <>
            <Comment
              // commentsData={commentsData}
              // setCommentsData={setCommentsData}
              comment={comment}
              key={comment.id}
              deleteHandler={deleteHandler}
              sendHandler={sendHandler}
            ></Comment>
          </>
        ))}
        <Form key={"1f"} sendHandler={sendHandler}></Form>
      </main>
      <Footer />
    </>
  );
}

export default App;
