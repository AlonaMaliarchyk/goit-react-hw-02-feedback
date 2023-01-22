import Feedback from "./Feedback.js"


export const App = () => {
const title = 'some title';
const state = {
      good: 0,
      neutral: 0,
      bad: 0
    }

  return (
    <Feedback
      title={title}
      state={state} />
  );
};
