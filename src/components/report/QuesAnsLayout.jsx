import PropTypes from "prop-types";
import decodeString from "../../utils/decodeString";

const QuesAnsLayout = ({ header, allQuestionsObj, correctAnswer }) => {
  return (
    <div className="bg-white p-4 rounded sm:w-screen ">
      <p className="bg-green text-white p-2 w-2/3 text-2xl mb-4">{header}</p>
      <div className="p-4">
        {allQuestionsObj?.map((question, key) => (
          <div key={key} className="mb-4">
            <h2 className="text-1xl text-textGreen ">
              {key + 1}- {decodeString(question?.question)}
            </h2>
            {correctAnswer && (
              <p className="font-bold text-lg">- {question?.correct_answer}</p>
            )}

            {question &&
            !correctAnswer &&
            Object.keys(question.selectedAns).length > 0 ? (
              <p className="font-bold text-lg">
                - {question?.selectedAns.value}
              </p>
            ) : (
              <p className="font-bold text-lg">-</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuesAnsLayout;

QuesAnsLayout.propTypes = {
  header: PropTypes.string,
  allQuestionsObj: PropTypes.array,
  correctAnswer: PropTypes.bool,
};
