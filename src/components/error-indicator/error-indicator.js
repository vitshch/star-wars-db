import React from "react";
import "./error-indicator.css";
import icon from "./death-star.png";

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon"/>
            <span>Something went wrong!</span>
        </div>
    );
};

export default ErrorIndicator;