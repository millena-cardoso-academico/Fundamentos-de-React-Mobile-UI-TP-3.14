import PropTypes from 'prop-types';
import '../styles/QuizResult.css';

const QuizResult = ({ score, totalQuestions, resetQuiz }) => {
  return (
    <div className="quiz-result">
      <h2>Seu Resultado</h2>
      <p>
        Você acertou {score} de {totalQuestions} perguntas!
      </p>
      <button onClick={resetQuiz} className="reset-button">
        Refazer Quiz
      </button>
    </div>
  );
};

QuizResult.propTypes = {
  score: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  resetQuiz: PropTypes.func.isRequired,
};

export default QuizResult;