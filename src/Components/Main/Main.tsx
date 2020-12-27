import React, { useState, useEffect } from 'react';
import calculateTimeInSeconds from '../../Helpers/TimerHelper';
import Controls from '../Controls/Controls';
import './Main.css';

function Main() {
    const [timeInSeconds, setTimeInSeconds] = useState(0);
    const [timeArray, setTimeArray] = useState<Array<number|string>>([]);

    useEffect(() => {
        setTimeArray(calculateTimeInSeconds(timeInSeconds));
    }, [timeInSeconds]);

    return(
        <div className="stopwatch-container">
            <div className="timer-display">
                <p id="hour">{timeArray[0]}</p>
                <span>:</span>
                <p id="minute">{timeArray[1]}</p>
                <span>:</span>
                <p id="second">{timeArray[2]}</p>
            </div>
            <Controls setTimeInSeconds={setTimeInSeconds} />
        </div>
    );
}

export default Main;