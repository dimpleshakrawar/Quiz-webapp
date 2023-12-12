import { useState } from "react";
import { emailRegex } from "../../utils/regex";
import { useNavigate } from "react-router-dom";
import mainImage from "../../assets/images/mainLogo.png";

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
    <div className="flex flex-wrap justify-center items-center px-52 py-20 max-sm:w-full ">
      <div className="w-1/2  p-8  bg-blueBg">
        <h1 className="text-3xl font-bold mb-14 text-center">
          Take Quick Quiz
        </h1>
        <div onSubmit={submitHandler}>
          <div className="mb-14">
            <label className="text-lg text-blue font-semibold">Email Id</label>
            <input
              type="email"
              className="h-10 w-11/12 rounded p-1 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {error && <p className="text-red">*Invalid email address*</p>}
          </div>
          <div className="mb-8">
            <span>Note: Time limit 30 minute</span>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="w-1/3 p-2 rounded-lg bg-blue text-white"
              onClick={submitHandler}
            >
              Start Quiz
            </button>
          </div>
        </div>

        {/* <div className=" flex flex-col grow justify-center items-center mx-auto rounded-lg md:mt-16 max-w-2xl ">
          <div className="mb-2 flex justify-center items-center ">
            <h1 className="text-4xl max-sm:p-6 md:p-10 text-textGreen font-bold">
              Test your Quiz Skill here!!{" "}
            </h1>
          </div>
          <div
            className="bg-lightGreen p-5 rounded-lg md:w-2/3 "
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
                className="w-1/3 p-2 text-textGreen bg-white font-bold rounded"
                onClick={submitHandler}
              >
                Start Quiz
              </button>
            </div>
          </div>
          <p className="font-bold text-center">
            Time limit is 30 seconds. Enjoy!
          </p>
        </div> */}
      </div>
      <div className="w-1/2 h-fit">
        <img src={mainImage} alt="image" className="w-full h-full" />
      </div>
    </div>
  );
};

export default HomeLayout;
