import { useEffect, useState } from "react";

type TimeLeft = {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
};

export const useCountDown = (date: string): TimeLeft => {
    let dueDate = +new Date(date);
    const difference: number = dueDate - +new Date();
    const [timer, setTimer] = useState({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    });
    const [shouldRefresh, setShouldRefresh] = useState(false)

    useEffect(() => {
        setInterval(() => {
            setTimer({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            });
            setShouldRefresh(!shouldRefresh)
        }, 1000);
    }, [shouldRefresh]);

    // let timeLeft = {};

    // if (difference > 0) {
    //     timeLeft = {
    //         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    //         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    //         minutes: Math.floor((difference / 1000 / 60) % 60),
    //         seconds: Math.floor((difference / 1000) % 60),
    //     };
    // }

    return timer;
};
