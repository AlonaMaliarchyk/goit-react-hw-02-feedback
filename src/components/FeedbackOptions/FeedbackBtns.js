import React from "react";
import css from "./FeedbackBtns.module.css";
import PropTypes from 'prop-types';
const FeedbackOptions = ({ handlBtn, options}) => {
    return (
    <ul className={css.wrap}>
        {options.map((optionName, idx) => {
            return (
                <li key={idx}>
                    <button type="button" onClick={() => handlBtn( optionName )} className={css.btn}> {optionName} </button>
                </li>
            );
        })}
    </ul>  
);
    };


FeedbackOptions.propTypes = {
    handlBtn: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
};
export default FeedbackOptions;