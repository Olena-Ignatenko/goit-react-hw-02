const Feedback = ({ feedbackTypes }) => {
  return (
    <div className="container-options">
      <h2>Feedback Statistics</h2>

      <p>Good: {feedbackTypes.good}</p>
      <p>Neutral: {feedbackTypes.neutral}</p>
      <p>Bad: {feedbackTypes.bad}</p>
    </div>
  );
};

export default Feedback;
