import React from 'react';

const ProgressBar = ({ percentage }) => {
    return (
        <div className="progress">
            <div
                className="progress-bar progress-bar-striped bg-success"
                role="progressbar"
                style={{ width: `${percentage}%` }}
            >
                {percentage}%
            </div>
        </div>
    );
};

export default ProgressBar;
