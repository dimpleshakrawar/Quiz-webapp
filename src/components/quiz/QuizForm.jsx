import PropTypes from "prop-types";

const QuizForm = ({ options, mcq, handleSelect, counter, handleSubmit }) => {
  return (
    <div className="flex flex-col gap-5 py-8 mb-16 h-48">
      {options?.map((option, key) => (
        <div key={key} className="flex items-center align-end gap-8">
          <label className="radio flex items-center gap-3 px-6 md:text-md">
            <input
              className="w-4 h-4"
              type="radio"
              value={JSON.stringify(option)}
              checked={option?.name === mcq?.selectedAns?.name}
              onChange={handleSelect}
            />
            {option.value}
          </label>
        </div>
      ))}
      {counter >= 14 && (
        <button
          className={`h-10 flex justify-center mt-2 items-center px-6 font-semibold rounded-md bg-blue text-white }`}
          onClick={handleSubmit}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default QuizForm;

QuizForm.propTypes = {
  options: PropTypes.array,
  mcq: PropTypes.object,
  handleSelect: PropTypes.func,
  counter: PropTypes.number,
  handleSubmit: PropTypes.func,
};
