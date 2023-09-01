import { useState } from "react";
import { emailRegex } from "../../utils/regex";
import { useNavigate } from "react-router-dom";

const HomeLayout = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (email.toLowerCase().match(emailRegex)) {
      Navigate("/quiz");
      setError(false);
    } else {
      setError(true);
    }
    setEmail("");
  };

  return (
    <div className="h-1/2 ">
      <div className=" relative flex flex-col grow justify-center items-center mx-auto bg-green rounded-lg mt-16 max-w-2xl p-6 ">
        <div className="mb-2 flex justify-center items-center ">
          <h1 className="text-4xl p-10 text-textGreen font-bold">
            Test your Quiz Skill here!!{" "}
          </h1>
        </div>
        <div className="mb-2 ">
          <h1 className="text-xl font-medium text-white">
            Get started with your Email address
          </h1>
        </div>
        <div
          className="bg-lightGreen p-5 rounded-lg w-2/3 "
          onSubmit={submitHandler}
        >
          <div className="mb-20 ">
            <label className="text-xl text-white mt-5 mb-2">Email</label>
            <input
              className="h-10 w-11/12 rounded p-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {error && <p className="text-red">*Invalid email address*</p>}
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              onClick={submitHandler}
              className="w-1/3 p-2 text-textGreen bg-white font-bold rounded"
            >
              Start Quiz
            </button>
          </div>
        </div>
        <p className="text-textGreen font-bold">
          Time Limit is 30 minutes! Enjoy
        </p>
      </div>
    </div>
  );
};

export default HomeLayout;
