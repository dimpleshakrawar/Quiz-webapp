import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { QUESTION_API } from "../../utils/api";
import { setMcq, setIsSubmitted } from "../../store/questionsSlice";
import { increment, decrement } from "../../store/quesNumberSlice";
import decodeString from "../../utils/decodeString";
import QuizForm from "../../components/quiz/QuizForm";
import Button from "../../components/common/button";

const QuizLayout = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [countdown, setCountdown] = useState(180);
  const [loading, setLoading] = useState(false);
  const allMcqData = useSelector((state) => state.items.data);
  const counter = useSelector((state) => state.number.count);

  const handleSubmit = useCallback(async () => {
    dispatch(setIsSubmitted(true));
    Navigate("/report");
  }, []);

  const handleSelect = (e) => {
    const cloneMcq = JSON.parse(JSON.stringify(allMcqData));
    cloneMcq[counter].selectedAns = JSON.parse(e.target.value);
    dispatch(setMcq(cloneMcq));
  };

  const nextBtnHandler = (type) => {
    const cloneMcq = JSON.parse(JSON.stringify(allMcqData));
    cloneMcq[counter].visited = true;
    dispatch(setMcq(cloneMcq));
    if (type === "next") {
      if (counter < 14) {
        dispatch(increment());
      }
      return;
    }
    if (counter > 0) {
      dispatch(decrement());
    }
  };

  const createMcq = useCallback(async (res) => {
    let mcqData = {};
    const createOption = (item, questionId) => {
      const mergeOpt = [...item.incorrect_answers, item.correct_answer];
      return mergeOpt
        .sort(() => Math.random() - 0.5)
        .map((option, index) => ({
          name: `option_${questionId}_${index}`,
          value: decodeString(option),
        }));
    };
    res.forEach((item, index) => {
      mcqData[index] = {
        ...item,
        id: `question_${index}`,
        options: createOption(item, index),
        visited: false,
        selectedAns: {},
      };
    });
    dispatch(setMcq(mcqData));
  }, []);

  const fetchMcqApi = useCallback(async () => {
    try {
      setLoading(true);
      const {
        data: { results },
      } = await axios.get(QUESTION_API);
      setLoading(false);
      createMcq(results);
    } catch (err) {
      console.log(err);
    }
  }, [createMcq]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      dispatch(setIsSubmitted(true));
      Navigate("/report");
    }
  }, [countdown, setIsSubmitted]);

  useEffect(() => {
    fetchMcqApi();
  }, [fetchMcqApi]);

  return loading ? (
    <p className="text-2xl font-bold">Loading...</p>
  ) : (
    Object.keys(allMcqData).length > 0 && (
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className=" bg-green h-100vh p-10 "
      >
        <p className="font-bold text-lg">Time Remaining : {countdown} second</p>
        <div className=" relative flex flex-col mx-auto bg-white rounded-lg max-w-2xl p-6 mb-8">
          <p className="text-red ">
            {allMcqData[counter]?.visited ? "Viewed" : ""}
          </p>

          <h2 className="text-2xl p-10 text-textGreen font-medium h-48">
            {decodeString(allMcqData[counter]?.question)}
          </h2>
          <hr />
          <QuizForm
            options={allMcqData[counter]?.options}
            mcq={allMcqData[counter]}
            handleSelect={handleSelect}
            counter={counter}
            handleSubmit={handleSubmit}
          />
          <div className="flex justify-between">
            <Button
              label="Prev"
              background={"green"}
              color={"white"}
              disabled={counter <= 0}
              onClick={() => nextBtnHandler("prev")}
            />
            <Button
              label="Next"
              background={"green"}
              color={"white"}
              onClick={() => nextBtnHandler("next")}
              disabled={counter >= 14}
            />
          </div>
        </div>
      </motion.div>
    )
  );
};

export default QuizLayout;
