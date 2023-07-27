import React from "react";
import PropTypes from 'prop-types';
import css from "./FeedbackOption.module.css"

const FeedbackOptions = ({options, onLeaveFeedback}) => {
       return (
         <ul className={css.list}>
           {options.map(option => {
            return (
              <li key={option} >
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

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
}

export default FeedbackOptions;