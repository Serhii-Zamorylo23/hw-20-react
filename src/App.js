import useFeedback from "./useFeedback";
import Feedback from "./Components/FeedbackOptios/FeedbackOptions";
import Statistics from "./Components/Statistics/Statistics";

function App() {
  const {
    good,
    neutral,
    bad,
    total,
    positivePercentage,
    feedbackOptions
  } = useFeedback();

  return (
      <>
        <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
        />
        <h1>Please leave feedback</h1>
        {
          feedbackOptions.map((item) => (
              <Feedback name={item.func} options={item.name} key={item.name} />
          ))
        }
      </>
  );
}

export default App;
