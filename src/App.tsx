import React from "react";
import Form from "./components/commons/Form";
import { useCountDown } from "./helpers/useCountdown";

function App() {
    let timer = useCountDown("2021-10-03");

    return (
        <div className="wrapper">
            <h1>Countdown.io</h1>
            <Form />
            <p>{`${timer.days} days, ${timer.hours} hours, ${timer.minutes} min, ${timer.seconds} sec`}</p>
        </div>
    );
}

export default App;
