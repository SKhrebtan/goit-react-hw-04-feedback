import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, totalAmount, positivePercentage }) => {
            return (  <div>
                        
                        {(totalAmount === 0) && (<h2>No feedback given</h2>)}
                                            
                           <div>
                            <p>Good: {good}</p>
                            <p>Neutral: {neutral}</p>
                            <p>Bad: {bad}</p>
                        {(good > 0 || neutral > 0 || bad > 0) && (
                        <div><p>Total: {totalAmount}</p>
                        <p> Positive feedback: {positivePercentage}</p></div>)}
                                         </div>
                          
</div>)
};
    
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    totalAmount: PropTypes.number,
    positivePercentage: PropTypes.string,
}

export default Statistics;