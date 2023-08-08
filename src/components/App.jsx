import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Statistics from './Statistics';
import Notification from './Notification'
import FeedbackOptions from './FeedbackOptions'
import Section from './Section'

function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState('');

  const onButtonClick = (type) => {
      switch (type) {
        case 'good':
          setGood(good => good + 1);
          break
           case 'neutral':
          setNeutral(neutral => neutral + 1);
          break
           case 'bad':
          setBad(bad => bad + 1);
          break
        default:
          console.log('щось не так')
    }
  };

  useEffect(() => {
    if (good === 0 && neutral === 0 && bad === 0) {
      return
    }
    setTotal(total => good + neutral + bad)
    setPositivePercentage(positivePercentage => `${(good / total * 100)}%` )
 },[good, neutral, bad, total])


    

               return (
                   <div>
                   <Section title="Please leave feedback">
                     <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={onButtonClick}/>
                   </Section>
                   
                   <Section title="Statistics">
                     {(total > 0) ?
                       (<Statistics good={good}
                         neutral={neutral}
                         bad={bad}
                         totalAmount={total}
                         positivePercentage={positivePercentage} />)
                     : (<Notification message="There is no feedback" />)} 
                   </Section>                                    
                   
                    </div>
        )
       
  }

export default App;

 App.propTypes = {
   good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
}
