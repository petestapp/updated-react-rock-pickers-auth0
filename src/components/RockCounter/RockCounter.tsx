import React, {useState} from "react";

export const RockCounter: React.FC = () => {
    const [rocks, setRocks] = useState(0);
    let isDone = false;

    const increaseCount = () => {
        setRocks(rocks + 1);
    }

    const decreaseCount = () => {
        rocks < 1 ? setRocks(0) : setRocks(rocks - 1);
    }

    const resetCount = () => {
        setRocks(0);
    }

    const checkIfDone = () => {
        if (rocks >= 10) {
            isDone = true;
        } else {
            isDone = false;
        }
    }

    checkIfDone();

    return (
        <div>
            <div>Rocks Picked: {rocks}</div>
            <div>
                <button onClick={increaseCount}>Increase</button>
                <button onClick={decreaseCount}>Decrease</button>
                <button onClick={resetCount}>Reset</button>
                <p>{isDone ? "Done" : "Not Done"}</p>
            </div>
        </div>
    )
}