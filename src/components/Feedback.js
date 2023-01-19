import React from "react";
import PropTypes from 'prop-types';
// import css from './Feedback.module.css';
import FeedbackOptions from './FeedbackOptions/FeedbackBtns';
import Statistics from "./Statistics/Statistics";
import SectionTitle from "./SectionTitle/SectionTitle";
import Notification from "./Notification/Notification";

class Feedback extends React.Component {
     
    static defaultProps = {
        InitialGood: 0,
        InitialNeutral: 0,
        InitialBad:0
    }

    static protoTypes = {
    title: PropTypes.string.isRequired,
    state: PropTypes.object.isRequired
    }
    
    state = {
            good: this.props.InitialGood,
            neutral: this.props.InitialNeutral,
            bad: this.props.InitialBad
        }

    handlBtnGood = () => {
        this.setState(prevState => ({
                good: prevState.good + 1,
        }));
        console.log(this.state);
    }

    handlBtnNeutral = () => {
        this.setState(prevState => ({
                neutral: prevState.neutral + 1,
        }));
        console.log(this.state)
    }

    handlBtnBad = () => {
        this.setState(prevState => ({
                bad: prevState.bad + 1,
        }));
        console.log(this.state)
    }

    calcTotal() {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        return total;
    }

    calcPercent(propName) {
        const total = this.calcTotal();
        return total === 0 || propName === 0 ? 0
            : ((propName / total) * 100).toFixed(2);
    }

    render() {
        return (
            <div>
            <SectionTitle title="Please leave feedback">
                <FeedbackOptions
                    handlBtnGood={this.handlBtnGood}                    
					handlBtnNeutral={this.handlBtnNeutral}
                    handlBtnBad={this.handlBtnBad}
                    />
            </SectionTitle>
            <SectionTitle title="Statistics">
                    {this.state.good > 0 ||this.state.neutral > 0 || this.state.bad > 0 ?
                        <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={this.calcTotal()}
                            positiveFeedback={this.calcPercent(this.state.good)}
                        />
                        : <Notification message="There is no feedback"/>}
                </SectionTitle>
                </div>
        );
    }
}

// Please leave feedback
export default Feedback;