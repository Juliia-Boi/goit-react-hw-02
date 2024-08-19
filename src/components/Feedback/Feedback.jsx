import css from "./Feedback.module.css";

export default function Feedback({
  feedback,
  totalFeedback,
  positiveFeedback,
}) {
  const { good, neutral, bad } = feedback;
  return (
    <ul className={css.container}>
      <li className={css.list}>Good:{good}</li>
      <li className={css.list}>Neutral:{neutral}</li>
      <li className={css.list}>Bad:{bad}</li>
      <li className={css.list}>Total:{totalFeedback}</li>
      <li className={css.list}>Positive:{positiveFeedback}%</li>
    </ul>
  );
}
