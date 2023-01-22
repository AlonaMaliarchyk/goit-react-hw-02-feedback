import React from "react";
import css from "./FeedbackBtns.module.css";
const FeedbackOptions = ({ handlBtnGood, handlBtnNeutral, handlBtnBad }) => (
    <div>
        <button type="button" onClick={handlBtnGood} className={css.btn}> Good </button>
        <button type="button" onClick={handlBtnNeutral} className={css.btn}> Neutral </button>
        <button type="button" onClick={handlBtnBad} className={css.btn}> Bad </button>
    </div>
);

export default FeedbackOptions;