import React from 'react';

const Statistics = ({ good, neutral, bad, totalAmount, positivePercentage }) => {
        return (  <div>
                        <h3>Statistics</h3>
                        {(totalAmount === 0) && (<h2>No feedback given</h2>)}
                                            
                           <div>
                            <p>Good: {good}</p>
                            <p>Neutral: {neutral}</p>
                            <p>Bad: {bad}</p>
                            {(good > 0 || neutral > 0 || bad > 0) && (<p>Total: {totalAmount}</p>)}
                     <p> Positive feedback: {positivePercentage}</p>
                    </div>
                          
</div>)
};
    
export default Statistics;