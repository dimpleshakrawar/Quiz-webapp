import { useSelector } from "react-redux";
import Button from "../../components/common/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import QuesAnsLayout from "../../components/report/QuesAnsLayout";

const ReportLayout = () => {
  const allMcqData = useSelector((state) => state.items.data);
  const Navigate = useNavigate();
  const allQuestions = Object.values(allMcqData);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="flex gap-2 flex-col bg-green p-4"
    >
      <div className="flex gap-4">
        <QuesAnsLayout
          header={"Correct Answers"}
          allQuestionsObj={allQuestions}
          correctAnswer={true}
        />
        <QuesAnsLayout
          header={"Submitted Answers"}
          allQuestionsObj={allQuestions}
          correctAnswer={false}
        />
      </div>
      <div className="flex justify-center">
        <Button
          label={"Restart Quiz"}
          background={"white"}
          color={"green"}
          onClick={() => Navigate("/")}
        />
      </div>
    </motion.div>
  );
};

export default ReportLayout;
