const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className="container-options">
      <h2>Leave Your Feedback</h2>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>

      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
};

export default Options;
