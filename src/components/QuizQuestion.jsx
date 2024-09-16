import PropTypes from 'prop-types';
import '../styles/QuizQuestion.css';

const QuizQuestion = ({ question, options, handleAnswer }) => {
  return (
    <div className="quiz-question">
      <h2>{question}</h2>
      <div className="options">
        {options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

QuizQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  handleAnswer: PropTypes.func.isRequired,
};

export default QuizQuestion;