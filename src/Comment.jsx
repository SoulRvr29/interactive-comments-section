import Reply from "./Reply";

const Comment = ({ data }) => {
  const replies = data.replies;

  return (
    <>
      <section className="max-w-[730px] mx-auto mb-4 p-4 flex max-sm:flex-col flex-row-reverse gap-4 bg-White rounded-lg relative">
        <div className="grid gap-4">
          <header className="flex items-center gap-4">
            <img className="w-8" src={data.user.image.png} alt="avatar" />
            <h1 className="text-Dark-blue font-bold font-rubik">
              {data.user.username}
            </h1>
            <p className="font-rubik">{data.createdAt}</p>
          </header>
          <p>{data.content}</p>
        </div>
        <div className="flex relative justify-between items-center">
          <div className="flex flex-col max-sm:flex-row items-center gap-3 px-3 py-3 w-fit rounded-lg bg-Very-light-gray max-sm:px-4 max-sm:py-2">
            <div className="w-4 h-4 grid place-content-center hover:cursor-pointer">
              <img
                className="w-3 h-3  hover:cursor-pointer "
                src="src\images\icon-plus.svg"
                alt="plus"
              />
            </div>
            <p className="text-Moderate-blue font-normal-2">{data.score}</p>
            <div className="w-4 h-4 grid place-content-center hover:cursor-pointer">
              <img
                className="w-3 h-1 "
                src="src\images\icon-minus.svg"
                alt="minus"
              />
            </div>
          </div>
        </div>
        <div className=" flex gap-2 hover:opacity-50 transition-text ease-out duration-300 hover: cursor-pointer absolute sm:top-6 items-center  max-sm:bottom-6  right-6">
          <img
            className="w-4 h-4"
            src="src\images\icon-reply.svg"
            alt="reply"
          />
          <p className="text-Moderate-blue font-normal-2 ">Reply</p>
        </div>
      </section>
      <div className="pl-4 border-l-2 max-w-[730px] mx-auto">
        {replies.length
          ? replies.map((item) => <Reply key={item.id} data={item}></Reply>)
          : ""}
      </div>
    </>
  );
};

export default Comment;
