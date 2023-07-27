import React, { Component } from 'react';
import Statistics from './Statistics';
import Notification from './Notification'
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions'

class App extends Component {
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


    handleIncrement = () => {
        this.setState(prevState => ({good: prevState.good + 1}))
    }
   handleIncrementN = () => {
        this.setState(prevState => ({neutral: prevState.neutral + 1}))
    }
    handleIncrementB = () => {
        this.setState(prevState => ({bad: prevState.bad + 1}))
    }

    countTotalFeedback = (a,b,c) => {
        return (a + b + c) ;
       
    }

    countPositiveFeedbackPercentage = (total, positive) => {
        return `${(positive / total * 100)}%`;
        
    }
  render() {
    const options = Object.keys(this.state);
    const handleClickButton = this.handleClickButton;
    const { good, neutral, bad } = this.state;
  
            let totalAmount = this.countTotalFeedback(good, neutral, bad);
        let positivePercentage = this.countPositiveFeedbackPercentage(totalAmount, good);
               return (
                   <div>
                         <h2>Please leave feedback</h2>
                <button type="button" onClick={this.handleClickButton}>Good</button>
                <button type="button" onClick={this.handleIncrementN}>Neutral</button>
                   <button type="button" onClick={this.handleIncrementB}>Bad</button>
                   {(totalAmount > 0) ? (<Statistics good={good} neutral={neutral} bad={bad} total={totalAmount} positivePercentage={positivePercentage} />)
                     : (<Notification message="There is no feedback" />)}
                   <FeedbackOptions options={options} onLeaveFeedback={this.onButtonClick}/>
                    </div>
        )
       
    }
}

export default App;