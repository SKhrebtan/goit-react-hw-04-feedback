import React from "react";

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
       return (
         <ul>
           {options.map(option => {
            return (
              <li key={option}>
                <button type="option"
                  name={option}
                  onClick={onLeaveFeedback}>
                  {option}
                </button>
             </li>
            )})}
      </ul>
      )

}

