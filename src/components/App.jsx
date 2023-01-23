import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from './FeedbackOptions';
import Statistics from "./Statistics/Statistics";
import SectionTitle from "./SectionTitle";
import Notification from "./Notification";
import css from '../../src/components/App.module.css';

export default class App extends Component {
// static defaultProps = {
//         InitialGood: 0,
//         InitialNeutral: 0,
//         InitialBad:0
//     }

    static protoTypes = {
        title: PropTypes.string.isRequired,
        state: PropTypes.object.isRequired
    }
    
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlBtn = feedbackType => {
    this.setState(prevState => {
      return { [feedbackType]: prevState[feedbackType] + 1, };
    });
  };
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
    
    const options = Object.keys(this.state);
    
        console.log(this.options={options})
        return (
            <div className={css.wrap}>
            <SectionTitle title="Please leave feedback">
              <FeedbackOptions
                handlBtn={this.handlBtn}
                options={options}/>
            </SectionTitle>
            <SectionTitle title="Statistics">
                    {this.calcTotal()> 0 ?
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
};
