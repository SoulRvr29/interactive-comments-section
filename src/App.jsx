import Comment from "./Comment";
import Form from "./Form";
import dataJson from "../public/data.json";

function App() {
  const comments = dataJson.comments;
  const currentUser = dataJson.currentUser;

  return (
    <main className="min-h-screen px-4 py-8 bg-Very-light-gray text-Grayish-Blue font-normal ">
      {comments.map((item) => (
        <Comment data={item} key={item.id}></Comment>
      ))}
      <Form data={currentUser}></Form>
    </main>
  );
}

export default App;
