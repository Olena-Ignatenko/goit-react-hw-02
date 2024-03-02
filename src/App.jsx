import { useState, useEffect } from "react";
import Feedback from "./components/Feedback";
import Options from "./components/Options";
import Notification from "./components/Notification";

import "./App.css";

const App = () => {
  // Функція для ініціалізації стану з локального сховища
  const initializeStateFromLocalStorage = () => {
    const savedState = JSON.parse(localStorage.getItem("feedbackState"));
    if (savedState) {
      setFeedbackTypes(savedState);
    }
  };

  const [feedbackTypes, setFeedbackTypes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setFeedbackTypes((prevTypes) => ({
      ...prevTypes,
      [feedbackType]: prevTypes[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedbackTypes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback =
    feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;

  const positivePercentage =
    totalFeedback > 0
      ? Math.round(
          ((feedbackTypes.good + feedbackTypes.neutral) / totalFeedback) * 100
        )
      : 0;

  // Ефект для збереження стану у локальному сховищі при зміні
  useEffect(() => {
    localStorage.setItem("feedbackState", JSON.stringify(feedbackTypes));
  }, [feedbackTypes]);

  // Ефект для ініціалізації стану при завантаженні сторінки
  useEffect(() => {
    initializeStateFromLocalStorage();
  }, []);

  return (
    <div>
      <h1>Sip Happens Café ☕</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>

      {totalFeedback > 0 ? (
        <div className="container">
          <div>
            <Options
              updateFeedback={updateFeedback}
              totalFeedback={totalFeedback}
              resetFeedback={resetFeedback}
            />
          </div>
          <Feedback feedbackTypes={feedbackTypes} />
          <p>Total Feedback: {totalFeedback}</p>
          <p className="percent-text">
            Positive Percentage: {positivePercentage}%
          </p>
        </div>
      ) : (
        <div>
          <Options updateFeedback={updateFeedback} />
          <Notification message="No feedback yet." />
        </div>
      )}
    </div>
  );
};

export default App;

