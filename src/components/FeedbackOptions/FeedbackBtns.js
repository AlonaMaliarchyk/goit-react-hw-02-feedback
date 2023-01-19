import React from "react";

const FeedbackOptions = ({ handlBtnGood, handlBtnNeutral, handlBtnBad }) => (
    <div>
        <button type="button" onClick={handlBtnGood}> Good </button>
        <button type="button" onClick={handlBtnNeutral}> Neutral </button>
        <button type="button" onClick={handlBtnBad}> Bad </button>
    </div>
);

export default FeedbackOptions;