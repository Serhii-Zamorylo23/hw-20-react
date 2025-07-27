import { useState, useEffect } from 'react';

const useFeedback = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(0);
    const [positivePercentage, setPositivePercentage] = useState(0);

    useEffect(() => {
        setTotal(good + neutral + bad);
    }, [good, neutral, bad]);

    useEffect(() => {
        if (good || total !== 0) {
            setPositivePercentage(Math.round((good / total) * 100));
        } else {
            setPositivePercentage(0);
        }
    }, [good, total]);

    const goodFeedback = () => setGood(prev => prev + 1);
    const neutralFeedback = () => setNeutral(prev => prev + 1);
    const badFeedback = () => setBad(prev => prev + 1);

    const feedbackOptions = [
        { func: goodFeedback, name: "good" },
        { func: neutralFeedback, name: "neutral" },
        { func: badFeedback, name: "bad" }
    ];

    return {
        good,
        neutral,
        bad,
        total,
        positivePercentage,
        feedbackOptions
    };
};

export default useFeedback;
