import React, { Component } from 'react';

class Feedback extends Component {
   state = {
  good: 0,
  neutral: 0,
  bad: 0
    }


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
        const { good, neutral, bad } = this.state;
        let totalAmount = this.countTotalFeedback(good, neutral, bad);
        let positivePercentage = this.countPositiveFeedbackPercentage(totalAmount, good);
               return (
                   <div>
                         <h2>Please leave feedback</h2>
                <button type="button" onClick={this.handleIncrement}>Good</button>
                <button type="button" onClick={this.handleIncrementN}>Neutral</button>
                <button type="button" onClick={this.handleIncrementB}>Bad</button>
                       <h3>Statistics</h3>
                       {(totalAmount === 0) && (<h2>No feedback given</h2>)}
                       
                       {(totalAmount > 0) &&
                           (<div>
                            <p>Good: {good}</p>
                            <p>Neutral: {neutral}</p>
                            <p>Bad: {bad}</p>
                            {(good > 0 || neutral > 0 || bad > 0) && (<p>Total: {totalAmount}</p>)}
                     <p> Positive feedback: {positivePercentage}</p>
                           </div>
                          )}
            </div>
        )
       
    }
}


export default Feedback;






    // handleIncrement = (value) => {
//     this.setState(prevState => ({
//         value: prevState.value + 1
//     }));
//     }; 
//     () => this.handleIncrement(good)