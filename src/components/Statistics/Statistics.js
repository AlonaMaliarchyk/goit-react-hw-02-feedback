import PropTypes from 'prop-types';


const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => (
    <div>
        <p> Good: {good}</p>
        <p> Neutral: {neutral}</p>
        <p> Bad: {bad}</p>
        <p> Total: {total}</p>
        <p> Positive feedback: {positiveFeedback} %</p>
    </div>
)
export default Statistics;

Statistics.propType = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
}