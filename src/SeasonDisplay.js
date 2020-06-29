import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Let\'s hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Brrrr, it\'s cold!',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const month = new Date().getMonth();
    const season = getSeason(props.lat, month);
    const { text, iconName } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon massive icon-left`} />
            <h1>{text}</h1>
            <i className={`${iconName} icon massive icon-right`} />
        </div>
    );
};

export default SeasonDisplay;