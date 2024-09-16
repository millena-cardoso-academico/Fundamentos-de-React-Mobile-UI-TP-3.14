import { useState } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizResult from './QuizResult';
import ThemeToggle from './ThemeToggle';
import '../styles/App.css';

const quizData = [
  {
    question: "Qual a capital da França?",
    options: ["Londres", "Paris", "Berlim", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Quem pintou a Mona Lisa?",
    options: ["Van Gogh", "Leonardo da Vinci", "Picasso", "Monet"],
    answer: "Leonardo da Vinci",
  },
  {
    question: "Qual é o maior planeta do Sistema Solar?",
    options: ["Terra", "Vênus", "Marte", "Júpiter"],
    answer: "Júpiter",
  },
  {
    question: "Em que ano o homem pisou na Lua?",
    options: ["1969", "1975", "1980", "1995"],
    answer: "1969",
  },
  {
    question: "Quem escreveu 'Dom Quixote'?",
    options: ["Gabriel García Márquez", "Cervantes", "Jorge Luis Borges", "Shakespeare"],
    answer: "Cervantes",
  },
  {
    question: "Qual o símbolo químico do ouro?",
    options: ["Ag", "Au", "Pt", "Fe"],
    answer: "Au",
  },
  {
    question: "Qual é o país mais populoso do mundo?",
    options: ["Índia", "Brasil", "China", "Estados Unidos"],
    answer: "China",
  },
  {
    question: "Quem descobriu a penicilina?",
    options: ["Marie Curie", "Isaac Newton", "Alexander Fleming", "Albert Einstein"],
    answer: "Alexander Fleming",
  },
  {
    question: "Qual é o maior oceano do mundo?",
    options: ["Atlântico", "Pacífico", "Índico", "Ártico"],
    answer: "Pacífico",
  },
  {
    question: "Qual é a velocidade da luz?",
    options: ["300.000 km/s", "150.000 km/s", "100.000 km/s", "200.000 km/s"],
    answer: "300.000 km/s",
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [theme, setTheme] = useState('light');

  const handleAnswer = (selectedOption) => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app-container ${theme}`}>
      <ThemeToggle toggleTheme={toggleTheme} currentTheme={theme} />
      {!showResult ? (
        <QuizQuestion
          question={quizData[currentQuestion].question}
          options={quizData[currentQuestion].options}
          handleAnswer={handleAnswer}
        />
      ) : (
        <QuizResult score={score} totalQuestions={quizData.length} resetQuiz={resetQuiz} />
      )}
    </div>
  );
}

export default App;