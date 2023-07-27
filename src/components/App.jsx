import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Statistics from './Statistics';
import Notification from './Notification'
import FeedbackOptions from './FeedbackOptions'
import Section from './Section'

class App extends Component {

  static propTypes = {
   good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
}

   state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
  

    onButtonClick = e => {
    const option = e.target.name;
    if (option) {
      this.setState(prevState => ({ [option]: prevState[option] + 1 }));
    }
  };


   

    countTotalFeedback = (a,b,c) => {
        return (a + b + c) ;
       
    }

    countPositiveFeedbackPercentage = (total, positive) => {
        return `${(positive / total * 100)}%`;
        
    }
  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
     let totalAmount = this.countTotalFeedback(good, neutral, bad);     
    let positivePercentage = this.countPositiveFeedbackPercentage(totalAmount, good);

               return (
                   <div>
                   <Section title="Please leave feedback">
                     <FeedbackOptions options={options} onLeaveFeedback={this.onButtonClick}/>
                   </Section>
                   
                   <Section title="Statistics">
                     {(totalAmount > 0) ?
                       (<Statistics good={good}
                         neutral={neutral}
                         bad={bad}
                         totalAmount={totalAmount}
                         positivePercentage={positivePercentage} />)
                     : (<Notification message="There is no feedback" />)} 
                   </Section>                                    
                   
                    </div>
        )
           }
}

export default App;






//  handleIncrement = () => {
//         this.setState(prevState => ({good: prevState.good + 1}))
//     }
//    handleIncrementN = () => {
//         this.setState(prevState => ({neutral: prevState.neutral + 1}))
//     }
//     handleIncrementB = () => {
//         this.setState(prevState => ({bad: prevState.bad + 1}))
//     }<button type="button" onClick={this.handleClickButton}>Good</button>
//                 <button type="button" onClick={this.handleIncrementN}>Neutral</button>
//                    <button type="button" onClick={this.handleIncrementB}>Bad</button>